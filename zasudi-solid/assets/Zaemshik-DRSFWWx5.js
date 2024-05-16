import{k as E,i as f,l as u,C as h,M as r,c as Z,a as R,t as N,S as o}from"./index-CQiPjXso.js";import{u as _,h as $,i as A,j as B,p as M,d as i,c as w,e as k,f as I,g as C,L as Q,N as U,s as j}from"./DocumentFlow-BPOldJNx.js";import{Q as v,T as n,p as x,c as G}from"./TextField-C-lKYZ4W.js";import{f as H,i as J,u as K,N as y,h as c,m as L,a as b}from"./NameFields-BjpLwZxS.js";import{P as O,s as W}from"./PersonSelect-DaRh3W_E.js";import{C as V}from"./Checkbox-DX-q6fZB.js";import{D as g}from"./DropdownSelect-xhVFJVYr.js";import{u as m}from"./user-C59wPrPJ.js";import{R as X}from"./RadioGroup-mQMpjHja.js";var Y=N("<div>"),F=N("<h1>invalid identity type");function ve(){const[e,a]=_(),t=()=>({fl:0,ip:1,ul:2})[e.zaemshik.type],l=s=>{a(M(d=>{s(d.zaemshik)}))},T=()=>({fl:"Данные физического лица",ip:"Данные индивидуального предпринимателя",ul:"Данные юридического лица"})[e.zaemshik.type];return E(()=>{j(e.zaemshik.type)}),(()=>{var s=Y();return f(s,u(v,{get children(){return u(O,{center:!0,items:[{icon:H,text:"Физическое лицо"},{icon:J,text:"Индивидуальный предприниматель"},{icon:K,text:"Юридическое лицо"}],get value(){return t()},setValue:d=>{switch(d){case 0:a("zaemshik",new B);break;case 1:a("zaemshik",new A);break;case 2:a("zaemshik",new $);break;default:throw Error("unreachable")}}})}}),null),f(s,u(v,{get question(){return T()},get children(){return u(h,{get children(){return[u(r,{get when(){return e.zaemshik.type==="fl"},get children(){return u(p,{get value(){return e.zaemshik},updateValue:d=>l(d)})}}),u(r,{get when(){return e.zaemshik.type==="ip"},get children(){return u(ee,{get value(){return e.zaemshik},updateValue:d=>l(d)})}}),u(r,{get when(){return e.zaemshik.type==="ul"},get children(){return u(te,{get value(){return e.zaemshik},updateValue:d=>l(d)})}})]}})}}),null),Z(()=>R(s,W["side-container"])),s})()}function p(e){return[u(y,{icon:m,get firstNameValue(){return e.value.firstName},setFirstNameValue:a=>e.updateValue(t=>t.firstName=a),get secondNameValue(){return e.value.secondName},setSecondNameValue:a=>e.updateValue(t=>t.secondName=a),get lastNameValue(){return e.value.lastName},setLastNameValue:a=>e.updateValue(t=>t.lastName=a)}),u(g,{defaultIcon:c,items:[{text:"Адрес места регистрации ответчика",value:"registration"},{text:"Последний известный адрес",value:"last"},{text:"Адрес местонахождения недвижимости ответчика",value:"property"}],get value(){return e.value.addressType},setValue:a=>e.updateValue(t=>t.addressType=a)}),u(n,{icon:c,label:"Адрес места жительства",get value(){return e.value.address},setValue:a=>e.updateValue(t=>t.address=a)}),u(n,{type:"date",label:"Дата рождения",get value(){return e.value.birthDate},setValue:a=>e.updateValue(t=>t.birthDate=a)}),u(n,{icon:L,label:"Место рождения",get value(){return e.value.birthPlace},setValue:a=>e.updateValue(t=>t.birthPlace=a)}),u(n,{icon:x,label:"Телефон",get value(){return e.value.phone},setValue:a=>e.updateValue(t=>t.phone=a)}),u(g,{defaultIcon:b,items:[{text:"ИНН",value:"inn"},{text:"Паспорт",value:"passport"},{text:"Водительское удостоверение",value:"driverLicense"},{text:"СНИЛС",value:"snils"}],get value(){return e.value.identity.type},setValue:a=>e.updateValue(t=>{switch(a){case"passport":t.identity=i(new C);break;case"driverLicense":t.identity=i(new I);break;case"inn":t.identity=i(new k);break;case"snils":t.identity=i(new w);break;default:throw Error("unreachable")}})}),u(h,{get fallback(){return F()},get children(){return[u(r,{get when(){return e.value.identity.type==="passport"},get children(){return u(z,{get value(){return e.value},get updateValue(){return e.updateValue}})}}),u(r,{get when(){return e.value.identity.type==="driverLicense"},get children(){return u(S,{get value(){return e.value},get updateValue(){return e.updateValue}})}}),u(r,{get when(){return e.value.identity.type==="snils"},get children(){return u(P,{get value(){return e.value},get updateValue(){return e.updateValue}})}}),u(r,{get when(){return e.value.identity.type==="inn"},get children(){return u(D,{get value(){return e.value},get updateValue(){return e.updateValue}})}})]}}),u(q,{get value(){return e.value},get updateValue(){return e.updateValue}})]}function ee(e){return[u(y,{icon:m,get firstNameValue(){return e.value.firstName},setFirstNameValue:a=>e.updateValue(t=>t.firstName=a),get secondNameValue(){return e.value.secondName},setSecondNameValue:a=>e.updateValue(t=>t.secondName=a),get lastNameValue(){return e.value.lastName},setLastNameValue:a=>e.updateValue(t=>t.lastName=a)}),u(g,{defaultIcon:c,items:[{text:"Адрес места регистрации ответчика",value:"registration"},{text:"Последний известный адрес",value:"last"},{text:"Адрес местонахождения недвижимости ответчика",value:"property"}],get value(){return e.value.addressType},setValue:a=>e.updateValue(t=>t.addressType=a)}),u(n,{icon:c,label:"Адрес места жительства",get value(){return e.value.address},setValue:a=>e.updateValue(t=>t.address=a)}),u(n,{type:"date",label:"Дата рождения",get value(){return e.value.birthDate},setValue:a=>e.updateValue(t=>t.birthDate=a)}),u(n,{icon:L,label:"Место рождения",get value(){return e.value.birthPlace},setValue:a=>e.updateValue(t=>t.birthPlace=a)}),u(n,{icon:x,label:"Телефон",get value(){return e.value.phone},setValue:a=>e.updateValue(t=>t.phone=a)}),u(g,{defaultIcon:b,items:[{text:"ИНН",value:"inn"},{text:"Паспорт",value:"passport"},{text:"Водительское удостоверение",value:"driverLicense"},{text:"СНИЛС",value:"snils"}],get value(){return e.value.identity.type},setValue:a=>e.updateValue(t=>{switch(a){case"passport":t.identity=i(new C);break;case"driverLicense":t.identity=i(new I);break;case"inn":t.identity=i(new k);break;case"snils":t.identity=i(new w);break;default:throw Error("unreachable")}})}),u(h,{get fallback(){return F()},get children(){return[u(r,{get when(){return e.value.identity.type==="passport"},get children(){return u(z,{get value(){return e.value},get updateValue(){return e.updateValue}})}}),u(r,{get when(){return e.value.identity.type==="driverLicense"},get children(){return u(S,{get value(){return e.value},get updateValue(){return e.updateValue}})}}),u(r,{get when(){return e.value.identity.type==="snils"},get children(){return u(P,{get value(){return e.value},get updateValue(){return e.updateValue}})}}),u(r,{get when(){return e.value.identity.type==="inn"},get children(){return u(D,{get value(){return e.value},get updateValue(){return e.updateValue}})}})]}}),u(q,{get value(){return e.value},get updateValue(){return e.updateValue}}),u(V,{label:"В период действия договора займа ИП был ликвидирован",get value(){return e.value.liquidation!==null},setValue:a=>e.updateValue(t=>t.liquidation=a?i(new Q):null)}),u(o,{get when(){return e.value.liquidation!==null},get children(){return u(n,{type:"date",label:"Дата ликвидации ИП",get value(){return e.value.liquidation.date},setValue:a=>e.updateValue(t=>t.liquidation.date=a)})}}),u(v,{get children(){return u(V,{label:"Представитель (todo)",value:!1,setValue:()=>{}})}})]}function te(e){return[u(n,{icon:b,label:"ИНН",get value(){return e.value.inn},setValue:a=>e.updateValue(t=>t.inn=a)}),u(n,{icon:m,label:"Наименование",get value(){return e.value.name},setValue:a=>e.updateValue(t=>t.name=a)}),u(n,{icon:c,label:"Адрес",get value(){return e.value.address},setValue:a=>e.updateValue(t=>t.address=a)}),u(n,{label:"Телефон",get value(){return e.value.phone},setValue:a=>e.updateValue(t=>t.phone=a),type:"tel"})]}function z(e){return[u(n,{icon:!1,label:"Код подразделения",get value(){return e.value.identity.issuerCode},setValue:a=>e.updateValue(t=>t.identity.issuerCode=a)}),u(n,{icon:!1,label:"Серия",get value(){return e.value.identity.series},setValue:a=>e.updateValue(t=>t.identity.series=a)}),u(n,{icon:!1,label:"Номер",get value(){return e.value.identity.number},setValue:a=>e.updateValue(t=>t.identity.number=a)}),u(n,{icon:!1,label:"Кем выдан",get value(){return e.value.identity.issuedBy},setValue:a=>e.updateValue(t=>t.identity.issuedBy=a)}),u(n,{type:"date",label:"Дата выдачи",get value(){return e.value.identity.issueDate},setValue:a=>e.updateValue(t=>t.identity.issueDate=a)})]}function S(e){return[u(n,{icon:!1,label:"Серия",get value(){return e.value.identity.series},setValue:a=>e.updateValue(t=>t.identity.series=a)}),u(n,{icon:!1,label:"Номер",get value(){return e.value.identity.number},setValue:a=>e.updateValue(t=>t.identity.number=a)})]}function D(e){return u(n,{icon:!1,label:"ИНН",get value(){return e.value.identity.inn},setValue:a=>e.updateValue(t=>t.identity.inn=a)})}function P(e){return u(n,{icon:!1,label:"СНИЛС",get value(){return e.value.identity.snils},setValue:a=>e.updateValue(t=>t.identity.snils=a)})}function q(e){const a=()=>e.value.nameChange!==null;return[u(V,{label:"В период действия договора займа изменились ФИО заёмщика",get value(){return a()},setValue:t=>e.updateValue(l=>l.nameChange=t?i(new U):null)}),u(o,{get when(){return a()},get children(){return[u(y,{icon:m,get firstNameValue(){return e.value.nameChange.newFirstName},setFirstNameValue:t=>e.updateValue(l=>l.nameChange.newFirstName=t),get secondNameValue(){return e.value.nameChange.newSecondName},setSecondNameValue:t=>e.updateValue(l=>l.nameChange.newSecondName=t),get lastNameValue(){return e.value.nameChange.newLastName},setLastNameValue:t=>e.updateValue(l=>l.nameChange.newLastName=t)}),u(v,{question:"Фамилия, имя либо отчество изменились на основании",get children(){return u(X,{items:[{label:"Заключения брака",value:"marriage"},{label:"Расторжения брака",value:"divorce"},{label:"Заявления гражданина об изменении фамилии имени отчества",value:"other"}],get value(){return e.value.nameChange.reason},setValue:t=>e.updateValue(l=>l.nameChange.reason=t),get children(){return u(n,{type:"date",icon:G,label:"Дата",get value(){return e.value.nameChange.date},setValue:t=>e.updateValue(l=>l.nameChange.date=t)})}})}})]}})]}export{ve as default};
