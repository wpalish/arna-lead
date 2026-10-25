import {F,S,R,C,rows,byId,required,changed,immutable,unique,summary} from './core/rules.js';
const name=x=>typeof x==='string'&&/^[a-zA-Z0-9_.-]{3,80}$/.test(x);
const positive=x=>Number.isSafeInteger(x)&&x>0;
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const fields=['code','title','channel','language','context','status'];
const snap=l=>Object.fromEntries(['id',...fields,'owner','version'].map(k=>[k,l[k]]));
export default {
 slug:'arna-lead',reference:4,title:'ArnaLead',
 description:'Передача вручную введённого лида: предложение → явное принятие получателем → смена ответственного.',
 limitations:'Одна общая область · Каналы только метки · Без импорта, внешних сообщений, AI и перевода',
 collections:[
 C('leads','Лиды',[F('code','Номер лида'),F('title','Тема'),S('channel','Канал-метка',[['manual','Вручную'],['site','Сайт'],['phone','Телефон'],['email','Почта'],['whatsapp','WhatsApp (метка)']],{default:'manual'}),S('language','Язык контекста',[['ru','RU'],['kk','KK']],{default:'ru'}),F('context','Контекст лида','textarea'),F('owner','Ответственный аккаунт','staff',{readOnly:true}),S('status','Состояние',[['open','Открыт'],['closed','Закрыт']],{default:'open'})],{labelField:'code',addLabel:'Зарегистрировать лид',description:'До принятия передачи ответственным остаётся отправитель. Правка лида делает прежнее предложение устаревшим.'}),
 C('transfers','Передачи',[R('lead','Лид','leads',{readOnly:true}),F('recipient','Получатель','staff',{readOnly:true}),F('contextRu','Контекст передачи RU','textarea',{required:false,readOnly:true}),F('contextKk','Контекст передачи KK','textarea',{required:false,readOnly:true}),S('status','Решение',[['offered','Ожидает принятия'],['accepted','Принята'],['declined','Отклонена'],['cancelled','Отменена']],{default:'offered'}),F('note','Основание решения','textarea',{required:false,help:'Получатель принимает или отклоняет с пояснением. Отправитель может отменить. Это внутреннее действие, не сообщение клиенту.'})],{addLabel:'Предложить передачу',description:'Нужен авторский контекст на выбранном языке лида. Перевода нет. Снимок и получатель предложения неизменны.'})
 ],
 normalizeRow(key,row,state,old,actor){
  if(key==='leads'){
   if(!old){required(actor.role==='admin'||actor.name===row.owner,'Сотрудник регистрирует лид только на себя.');return {...row,initialOwner:row.owner,version:1};}
   required(actor.name===old.owner,'Лид изменяет только текущий ответственный.');
   immutable(old,row,['owner'],'Ответственный меняется только при принятии передачи.');
   return {...row,initialOwner:old.initialOwner,version:old.version+(fields.some(k=>old[k]!==row[k])?1:0)};
  }
  const lead=byId(state,'leads',row.lead);
  if(!old){
   required(!lead.archived&&lead.status==='open','Передача требует открытого действующего лида.');
   required(actor.name===lead.owner,'Передачу предлагает текущий ответственный.');
   required(row.recipient!==lead.owner,'Нельзя передать лид самому себе.');
   required(row.status==='offered'&&row.note==='','Новое предложение сохраняется без решения.');
   required((lead.language==='ru'?row.contextRu:row.contextKk).length>0,'Напишите контекст на выбранном языке лида.');
   return {...row,sender:actor.name,snapshot:snap(lead),decision:null,acceptedVersion:null};
  }
  required(old.status==='offered','Завершённая передача неизменна. Создайте новое предложение.');
  immutable(old,row,['lead','recipient','contextRu','contextKk'],'Снимок, получатель и контекст передачи неизменны. Отмените и создайте новое предложение.');
  required(['accepted','declined','cancelled'].includes(row.status),'Выберите принятие, отказ или отмену; предложение не редактируется.');
  if(row.status==='cancelled')required(actor.name===old.sender,'Отменяет только отправитель.');
  else {
   required(actor.name===old.recipient,'Решение принимает только указанный получатель.');
   required(row.note.length>0,'Укажите основание решения.');
  }
  let acceptedVersion=null;
  if(row.status==='accepted'){
   required(!lead.archived&&lead.status==='open'&&lead.owner===old.sender&&same(snap(lead),old.snapshot),'Снимок лида устарел. Отправитель должен отменить предложение и создать новое.');
   lead.owner=old.recipient;lead.version++;lead.updatedAt=new Date().toISOString();acceptedVersion=lead.version;
  }
  return {...row,sender:old.sender,snapshot:old.snapshot,decision:{by:actor.name,at:new Date().toISOString(),note:row.note},acceptedVersion};
 },
 validate(state,before,command,actor){
  unique(rows(state,'leads'),'code','Номер лида');
  for(const t of rows(state,'transfers')){
   byId(state,'leads',t.lead);
   required(name(t.sender)&&name(t.recipient)&&t.sender!==t.recipient,'Неверные участники передачи.');
   const s=t.snapshot;
   required(s&&s.id===t.lead&&s.owner===t.sender&&positive(s.version)&&s.status==='open'&&fields.every(k=>typeof s[k]==='string'&&s[k].length>0)&&['ru','kk'].includes(s.language)&&['manual','site','phone','email','whatsapp'].includes(s.channel),'Неверный снимок лида.');
   required((s.language==='ru'?t.contextRu:t.contextKk).length>0,'В снимке нет контекста выбранного языка.');
   if(t.status==='offered')required(!t.archived&&t.decision===null&&t.acceptedVersion===null&&t.note==='','Ожидающую передачу нельзя архивировать. Отправитель должен явно отменить её.');
   else {
    required(t.decision&&t.decision.by===(t.status==='cancelled'?t.sender:t.recipient)&&t.decision.note===t.note&&Number.isFinite(Date.parse(t.decision.at)),'Неверная история решения.');
    if(t.status!=='cancelled')required(t.note.length>0,'Решение требует основания.');
    required(t.status==='accepted'?t.acceptedVersion===s.version+1:t.acceptedVersion===null,'Неверная версия принятия.');
   }
   const old=changed(before,'transfers',t.id);
   if(old&&command.operation==='archive')immutable(old,t,['lead','recipient','contextRu','contextKk','status','note','sender','snapshot','decision','acceptedVersion']);
  }
  for(const l of rows(state,'leads')){
   required(name(l.owner)&&name(l.initialOwner)&&positive(l.version),'Неверный ответственный или версия лида.');
   const pending=rows(state,'transfers').filter(t=>t.lead===l.id&&t.status==='offered');
   required(pending.length<=1,'У лида уже есть ожидающая передача.');
   if(l.status==='closed')required(!pending.length,'Сначала отмените или завершите ожидающую передачу.');
   if(l.archived)required(l.status==='closed','Архивировать можно только закрытый лид.');
   let owner=l.initialOwner,last=0;
   for(const t of rows(state,'transfers').filter(t=>t.lead===l.id&&t.status==='accepted').sort((a,b)=>a.snapshot.version-b.snapshot.version)){
    required(t.sender===owner&&t.snapshot.version>last&&t.acceptedVersion<=l.version,'Нарушена цепочка ответственных.');owner=t.recipient;last=t.snapshot.version;
   }
   required(owner===l.owner,'Ответственный не совпадает с историей принятий.');
   const old=changed(before,'leads',l.id);
   if(old&&command.operation==='archive')immutable(old,l,['initialOwner','owner','version',...fields]);
   if(old&&old.owner!==l.owner&&command.operation!=='restore'){
    const t=rows(state,'transfers').find(t=>t.id===command.id);
    required(command.collection==='transfers'&&t?.status==='accepted'&&changed(before,'transfers',t.id)?.status==='offered'&&t.recipient===l.owner&&t.sender===old.owner,'Смена владельца требует принятия передачи.');
   }
  }
 },
 summarize(state){return rows(state,'leads').filter(l=>!l.archived).map(l=>summary(l.code+' · v'+l.version,'Ответственный: '+l.owner,rows(state,'transfers').some(t=>t.lead===l.id&&t.status==='offered')?'Передача ожидает решения; владелец пока прежний.':'Ожидающей передачи нет.'));}
};
