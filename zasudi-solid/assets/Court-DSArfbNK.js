import{c as D,k as m,f as t,G as o,M as c,t as F,T as v,e as I}from"./index-BWNNp1d4.js";import{Q as s}from"./QuestionSection-S4QOHm5r.js";import{D as V}from"./DropdownSelect-Ebjhyugq.js";import{u as y,d as n,C as E,a as M,r as N,b as x,c as k,e as j,f as z,g as w,h as f,i as T,j as _}from"./DocumentFlow-CT58WF8E.js";import{R as S}from"./RadioGroup-CcCufTdI.js";var $=F("<div><pre>");function G(e){let u;return e===2||e===6?u=n(new E):u=n(new M),u.type=["arb-claim","arb-simple","arb-order","jp-claim","gen-claim","gen-simple","jp-order"][e],u}function B(){const[e,u]=y(),l=(i,g)=>{u("court",i,N(g))},[r,a]=D(0);return(()=>{var i=$(),g=i.firstChild;return m(i,t(s,{get children(){return t(V,{items:[{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"}],get value(){return r()},setValue:h=>{function R(b){return b>=0&&b<=6}if(R(h))u("court",G(h)),a(h);else throw new Error("Invalid court screen number")}})}}),g),m(g,()=>JSON.stringify(e.court,null,2)),m(i,t(s,{get children(){return t(o,{get children(){return[t(c,{get when(){return r()===0},get children(){return t(d,{get value(){return e.court},setValue:l})}}),t(c,{get when(){return r()===1},get children(){return t(d,{get value(){return e.court},setValue:l})}}),t(c,{get when(){return r()===2},get children(){return t(C,{get value(){return e.court},setValue:l})}}),t(c,{get when(){return r()===3},get children(){return t(d,{get value(){return e.court},setValue:l})}}),t(c,{get when(){return r()===4},get children(){return t(d,{get value(){return e.court},setValue:l})}}),t(c,{get when(){return r()===5},get children(){return t(d,{get value(){return e.court},setValue:l})}}),t(c,{get when(){return r()===6},get children(){return t(C,{get value(){return e.court},setValue:l})}})]}})}}),null),i})()}function d(e){const u=()=>e.value.value,l=(r,a)=>{console.log("setting",n(e.value.value),r,a),e.setValue("value",{...e.value.value,[r]:a})};return t(S,{items:[{label:"Исковое заявление будет подано по месту жительства/нахождения должника (по умолчанию)",value:"default"},{label:"В договоре указан конкретный суд, в котором рассматриваются споры по договору",value:"specific"},{label:"Выбрать суд вручную",value:"manual"},{label:"В договоре укзаано, что дело рассматривается по месту нахождения/жительства истца",value:"zd-venue"},{label:"В договоре указано, что дело рассматривается по месту нахождения/жительства Займодавца",value:"za-venue"}],get value(){return e.value.value.type},setValue:r=>{switch(r){case"default":e.setValue("value",n(new w));break;case"specific":e.setValue("value",n(new z));break;case"manual":e.setValue("value",n(new j));break;case"zd-venue":e.setValue("value",n(new k));break;case"za-venue":e.setValue("value",n(new x));break;default:throw new Error("Invalid court claim value")}},get children(){return t(O,{get value(){return u()},setValue:l})}})}function C(e){const u=()=>e.value.value,l=(a,i)=>{e.setValue("value",{...e.value.value,[a]:i})},r=()=>e.value.value.type==="objections"||e.value.value.type==="rejected"||e.value.value.type==="cancelled"?"no-order":"order";return[t(S,{items:[{label:"Обратиться за вынесением судебного приказа",value:"order"},{label:"Я не могу обратиться за вынесением судебного приказа",value:"no-order"}],get value(){return r()},setValue:a=>{a==="order"?e.setValue("value",n(new w)):e.setValue("value",n(new f))}}),t(s,{get children(){return t(o,{get children(){return[t(c,{get when(){return r()==="order"},get children(){return[t(V,{tallerRows:!0,items:[{text:"Исковое заявление будет подано по месту жительства/нахождения должника (по умолчанию)",value:"default"},{text:"В договоре указан конкретный суд, в котором рассматриваются споры по договору",value:"specific"},{text:"Выбрать суд вручную",value:"manual"},{text:"В договоре укзаано, что дело рассматривается по месту нахождения/жительства истца",value:"zd-venue"},{text:"В договоре указано, что дело рассматривается по месту нахождения/жительства Займодавца",value:"za-venue"}],get value(){return e.value.value.type},setValue:a=>{switch(a){case"default":e.setValue("value",n(new w));break;case"specific":e.setValue("value",n(new z));break;case"manual":e.setValue("value",n(new j));break;case"zd-venue":e.setValue("value",n(new k));break;case"za-venue":e.setValue("value",n(new x));break;default:throw new Error("Invalid court claim (order) value")}}}),t(O,{get value(){return u()},setValue:l})]}}),t(c,{get when(){return r()==="no-order"},get children(){return[t(V,{tallerRows:!0,items:[{text:"У меня имеются письменные возражения заёмщика относительно спорной задолженности.",value:"objections"},{text:"Я уже обращался с заявлением о вынесении судебного приказа, однако Арбитражный суд вынес определение об отказе в принятии заявления о вынесении судебного приказа",value:"rejected"},{text:"Я уже обращался с заявлением о вынесении судебного приказа, однако судебный приказ был отменён в связи с подачей возражений должника.",value:"cancelled"}],get value(){return e.value.value.type},setValue:a=>{switch(a){case"objections":e.setValue("value",n(new f));break;case"rejected":e.setValue("value",n(new _));break;case"cancelled":e.setValue("value",n(new T));break;default:throw new Error("Invalid court claim (no-order) value")}}}),t(o,{get children(){return[t(c,{get when(){return e.value.value.type==="objections"},get children(){return[t(v,{label:"Наименование документа",get value(){return e.value.value.date},setValue:a=>l("name",a)}),t(v,{type:"date",label:"Дата документа",get value(){return e.value.value.date},setValue:a=>l("date",a)})]}}),t(c,{get when(){return e.value.value.type==="rejected"},get children(){return[t(v,{type:"date",label:"Дата определения об отказе в принятии заявления о вынесении судебного приказа",get value(){return e.value.value.date},setValue:a=>l("date",a)}),t(v,{label:"Номер дела из картотеки арбитражных дел",get value(){return e.value.value.date},setValue:a=>l("case",a)})]}}),t(c,{get when(){return e.value.value.type==="cancelled"},get children(){return[t(v,{type:"date",label:"Дата определения об отказе в принятии заявления о вынесении судебного приказа",get value(){return e.value.value.date},setValue:a=>l("date",a)}),t(v,{label:"Номер дела из картотеки арбитражных дел",get value(){return e.value.value.date},setValue:a=>l("case",a)})]}})]}})]}})]}})}})]}function O(e){return t(o,{get children(){return[t(c,{get when(){return e.value.type==="specific"},get children(){return t(s,{get children(){return[t(v,{label:"Наименование суда",get value(){return e.value.name},setValue:u=>e.setValue("name",u)}),t(v,{label:"Пункт договора",get value(){return e.value.clause},setValue:u=>e.setValue("clause",u)})]}})}}),t(c,{get when(){return e.value.type==="manual"},get children(){return t(s,{get children(){return t(v,{label:"Наименование суда",get value(){return e.value.name},setValue:u=>e.setValue("name",u)})}})}}),t(c,{get when(){return e.value.type==="zd-venue"},get children(){return t(s,{get children(){return t(v,{label:"Пункт договора",get value(){return e.value.clause},setValue:u=>e.setValue("clause",u)})}})}}),t(c,{get when(){return e.value.type==="za-venue"},get children(){return t(s,{get children(){return t(v,{label:"Пункт договора",get value(){return e.value.clause},setValue:u=>e.setValue("clause",u)})}})}})]}})}function H(){const[e,u]=y();return I(l=>{var a;return(a=e.zaimodavec)==null?void 0:a.lastName},""),null}export{H as CourtReactToFlow,B as default};