import{A as W,e as z,U as ue,J as se,k as p,l as C,m as R,t as $,f as t,x as k,c as j,G as B,M as P,T as c,B as I,z as G,F as X,S as ee,s as L,w as de,H as ce,_ as V,y as ie,Q as fe,C as ge}from"./index-BWNNp1d4.js";import{Q as E}from"./QuestionSection-S4QOHm5r.js";import{u as me,d as O,p as H,T as U,V as he,W as F,X as ve,Y as pe,Z as Pe,_ as be,$ as _e,a0 as we,a1 as ke,a2 as ye,a3 as Ve,a4 as De}from"./DocumentFlow-CT58WF8E.js";import{R as xe}from"./RadioGroup-CcCufTdI.js";import{C as N}from"./Checkbox-D8fHGPx1.js";import{L as Ee}from"./ListBox-B3vhHm8q.js";const D={"hover-example":"_hover-example_kjw3v_1","adder-buttons":"_adder-buttons_kjw3v_31","proof-adder":"_proof-adder_kjw3v_41","proof-card":"_proof-card_kjw3v_49","add-proof-card":"_add-proof-card_kjw3v_72","simple-proof-fields":"_simple-proof-fields_kjw3v_130","simple-proof-adder":"_simple-proof-adder_kjw3v_151"},Ce="_modal_a3zct_1",J={modal:Ce,"dialog-appear":"_dialog-appear_a3zct_1","modal-fix":"_modal-fix_a3zct_40"};var $e=$("<dialog><div>");function Se(r){let o;z(()=>r.show?o.showModal():o.close());const n=ue(()=>r.children);return(()=>{var e=$e(),f=e.firstChild;e.addEventListener("close",()=>r.onClose()),e.$$click=a=>a.target===a.currentTarget&&r.onClose();var m=o;return typeof m=="function"?se(m,e):o=e,p(f,n),C(a=>{var l=J.modal,i=J["modal-fix"];return l!==a.e&&R(e,a.e=l),i!==a.t&&R(f,a.t=i),a},{e:void 0,t:void 0}),e})()}W(["click"]);const Me=(r,o)=>{const n=r[o];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((e,f)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(f.bind(null,new Error("Unknown variable dynamic import: "+o)))})},Oe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-x'%3e%3cline%20x1='18'%20y1='6'%20x2='6'%20y2='18'%3e%3c/line%3e%3cline%20x1='6'%20y1='6'%20x2='18'%20y2='18'%3e%3c/line%3e%3c/svg%3e",Ae="data:image/svg+xml,%3csvg%20width='15'%20height='20'%20viewBox='0%200%2015%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.37398%200H1V9.24801H0V12.248H1V13.5836H0V16.5836H1V20H4V16.5836H7.75V13.5836H4V12.25H8.37481C11.7524%2012.25%2014.5%209.50238%2014.5%206.1252C14.5%202.74762%2011.7524%200%208.37398%200ZM8.3752%209.25H4V2.99961H8.3752C10.0984%202.99961%2011.5004%204.4016%2011.5004%206.1248C11.5004%207.84801%2010.0984%209.25%208.3752%209.25Z'%20fill='%231C4681'/%3e%3c/svg%3e";var Q=$("<pre>"),A=$("<div>"),je=$('<div><div>пример</div><img alt="">'),Re=$("<span>Платёж "),te=$("<br>"),Ne=$("<span>На сумму <span class=warning> р."),Te=$("<button><img alt=x>");function Ie(){const[r,o]=me(),n=a=>o("proofs","dogovorProofs",r.proofs.dogovorProofs.length,a),e=a=>o("proofs","dogovorProofs",H(l=>{l.splice(a,1)})),f=(a,l)=>{console.log("setting document proof",a,l,r.proofs.dogovorProofs),o("proofs","dogovorProofs",H(i=>{i[a]=l}))},m=()=>r.srokVozvrata.type==="hire"&&r.srokVozvrata.hire.type==="equal";return z(()=>{m()&&o("proofs","returnProofs",O(new U))}),(()=>{var a=A();return p(a,t(E,{get children(){return[t(re,{get proofs(){return r.proofs.dogovorProofs},addProof:n,deleteProof:e,setProof:f}),(()=>{var l=Q();return p(l,()=>JSON.stringify(r.proofs.dogovorProofs,null,2)),l})(),(()=>{var l=Q();return p(l,()=>JSON.stringify(r.proofs.returnProofs,null,2)),l})()]}}),null),p(a,t(E,{question:"Возвращение займа",get children(){return t(xe,{get items(){return[{label:"Заёмщик, и его правопреемники ни разу не производили оплату по договору займа",value:"never-paid",disabled:m()},{label:"Заёмщик частично платил по договору спорному договору займа",value:"paid",disabled:m()}]},get value(){return r.proofs.returnProofs.type},setValue:l=>{switch(l){case"never-paid":o("proofs","returnProofs",O(new he));break;case"paid":o("proofs","returnProofs",O(new U));break;default:throw new Error("Unknown proof type")}},get children(){return t(k,{get when(){return r.proofs.returnProofs.type==="paid"},get children(){return t(ze,{document:r,setDocument:o})}})}})}}),null),a})()}const Z={clause:"Пункт договора","transfer-raspiska":"Расписка в передаче денежных средств","funds-transfer":"Акт приёма-передачи денежных средств","dogovor-raspiska":"Расписка на договоре","card-transfer":"Перевод на карту","account-statement":"Выписка по счёту","payment-order":"Платёжное поручение","cash-receipt-voucher":"Квитанция к приходному кассовому ордеру","expense-receipt":"Расходный кассовый ордер","check-order":"Чек-ордер банка","payment-agreement":"Соглашение о зачёте",other:"Другое"};function re(r){const[o,n]=j(!1),e=d=>{const u=O(d);return u.note=null,u},[f,m]=j(null),[a,l]=j({proof:e(new F),mode:{value:"add"}}),i=d=>l(u=>({...u,proof:d})),s=()=>{i(e(new F)),m(null)},g=(d,u)=>{l(b=>u!==void 0?{...b,mode:{value:d,index:u}}:{...b,mode:{value:d}})};z(()=>{console.log("proof in progress updated",a(),f())});const h=()=>Object.values(a().proof).every(d=>d!==""),_=()=>{const d=a();console.log(d),d.proof.note=f(),d.mode.value==="edit"?(r.setProof(d.mode.index,d.proof),n(!1)):(r.addProof(d.proof),n(!1))},x=()=>{g("add"),s(),n(!0)},y=(d,u)=>{g("edit",u),m(d.note),i(O(d)),n(!0)},[v,w]=j(0),S=d=>{const[u]=ce(()=>Me(Object.assign({"../../../assets/example-documents/account-statement.jpg":()=>V(()=>import("./account-statement-DzdXkgl8.js"),[]),"../../../assets/example-documents/card-transfer.jpg":()=>V(()=>import("./card-transfer-CSMD_Vck.js"),[]),"../../../assets/example-documents/cash-receipt-voucher.jpg":()=>V(()=>import("./cash-receipt-voucher-DNXc6Sdk.js"),[]),"../../../assets/example-documents/check-order.jpg":()=>V(()=>import("./check-order-BCVPIxgK.js"),[]),"../../../assets/example-documents/clause.jpg":()=>V(()=>import("./clause-DmFs3e5G.js"),[]),"../../../assets/example-documents/expense-receipt.jpg":()=>V(()=>import("./expense-receipt-rsnUZ8tJ.js"),[]),"../../../assets/example-documents/funds-transfer.jpg":()=>V(()=>import("./funds-transfer-BN_LdnSn.js"),[]),"../../../assets/example-documents/other.jpg":()=>V(()=>import("./other-5fxjf8TQ.js"),[]),"../../../assets/example-documents/payment-order.jpg":()=>V(()=>import("./payment-order-cI9zTrOO.js"),[])}),`../../../assets/example-documents/${d.type}.jpg`).then(b=>b.default).catch(b=>{}));return z(()=>console.log("image:",d.type,u())),t(ie,{get children(){return t(k,{get when(){return u()!==void 0},get children(){var b=je(),ae=b.firstChild,le=ae.nextSibling;return C(T=>{var q=D["hover-example"],K=u();return q!==T.e&&R(b,T.e=q),K!==T.t&&L(le,"src",T.t=K),T},{e:void 0,t:void 0}),b}})}})},M=Object.entries(Z).map(([d,u])=>({value:d,text:u,aside:()=>t(S,{type:d})}));return(()=>{var d=A();return p(d,t(Se,{get show(){return o()},onClose:()=>n(!1),get children(){return[t(E,{get question(){return a().mode.value==="add"?"Добавить доказательство":"Изменить доказательство"},get children(){return t(B,{get children(){return[t(P,{get when(){return v()===0},get children(){return t(Ee,{items:M,get value(){return a().proof.type},setValue:u=>{switch(u){case"clause":i(e(new F));break;case"transfer-raspiska":i(e(new De));break;case"funds-transfer":i(e(new Ve));break;case"dogovor-raspiska":i(e(new ye));break;case"card-transfer":i(e(new ke));break;case"account-statement":i(e(new we));break;case"payment-order":i(e(new _e));break;case"cash-receipt-voucher":i(e(new be));break;case"expense-receipt":i(e(new Pe));break;case"check-order":i(e(new pe));break;case"other":i(e(new ve));break;default:throw new Error("Unknown proof type")}}})}}),t(P,{get when(){return v()===1},get children(){return[t(c,{icon:"no-space",label:"Примечание (не обязательно)",get value(){return f()??""},setValue:u=>m(u===""?null:u)}),t(He,{get value(){return a().proof},setValue:i})]}})]}})}}),t(E,{get children(){var u=A();return p(u,t(B,{get children(){return[t(P,{get when(){return v()===0},get children(){return[t(I,{text:"Закрыть",get class(){return G["flow-back-button"]},onClick:()=>n(!1)}),t(I,{text:"Далее",onClick:()=>w(1)})]}}),t(P,{get when(){return v()===1},get children(){return[t(I,{text:"К типам",get class(){return G["flow-back-button"]},onClick:()=>w(0)}),t(I,{get text(){return a().mode.value==="add"?"Добавить":"Сохранить"},onClick:_,get disabled(){return!h()}})]}})]}})),C(()=>R(u,D["adder-buttons"])),u}})]}}),null),p(d,t(X,{get each(){return r.proofs},children:(u,b)=>t(oe,{get index(){return b()},onDelete:()=>r.deleteProof(b()),onClick:()=>y(O(u),b()),onKeyDown:()=>y(O(u),b()),get label(){return Z[u.type]},get note(){return u.note??void 0},readOnly:!1})}),null),p(d,t(ee,{shadow:!0,get classList(){return{[D["proof-card"]]:!0,[D["add-proof-card"]]:!0}},onClick:x,onKeyDown:u=>{u.target===u.currentTarget&&(u.key==="Enter"||u.key===" ")&&x()},tabIndex:0,children:"Добавить доказательство"}),null),C(()=>R(d,D["proof-adder"])),d})()}function Y(r){const o=()=>{},[n,e]=j(""),[f,m]=j(""),a=()=>!(r.readOnly??!1);return[t(k,{get when(){return a()},get children(){var l=A();return p(l,t(c,{icon:fe,type:"date",label:"Дата платежа",get value(){return n()},setValue:e}),null),p(l,t(c,{icon:Ae,label:"Сумма платежа",get value(){return f()},setValue:m}),null),p(l,t(I,{get disabled(){return n()===""||f()===""},text:"Добавить",onClick:()=>(r.addProof({date:n(),sum:f()}),e(""),m(""))}),null),C(()=>R(l,D["simple-proof-fields"])),l}}),t(k,{get when(){return r.proofs.length>0},get children(){var l=A();return p(l,t(X,{get each(){return r.proofs},children:(i,s)=>t(oe,{get label(){return[(()=>{var g=Re();return g.firstChild,p(g,()=>new Date(i.date).toLocaleDateString("ru"),null),g})(),te(),(()=>{var g=Ne(),h=g.firstChild,_=h.nextSibling,x=_.firstChild;return p(_,()=>i.sum,x),g})()]},get index(){return s()},onDelete:()=>a()&&r.deleteProof(s()),onClick:o,onKeyDown:o,get readOnly(){return!a()}})})),C(i=>ge(l,{[D["proof-adder"]]:!0,[D["simple-proof-adder"]]:!0},i)),l}})]}function oe(r){return t(ee,{shadow:!0,get class(){return D["proof-card"]},onClick:()=>r.onClick(),onKeyDown:o=>{o.target===o.currentTarget&&(o.key==="Enter"||o.key===" ")&&r.onKeyDown()},get title(){return r.note??(typeof r.label=="string"?r.label:void 0)},tabIndex:0,get children(){return[t(k,{get when(){return r.note!==void 0},get children(){var o=A();return p(o,()=>r.note),C(()=>L(o,"title",r.note)),o}}),(()=>{var o=A();return p(o,()=>r.label),C(()=>L(o,"title",typeof r.label=="string"?r.label:void 0)),o})(),t(k,{get when(){return!r.readOnly},get children(){var o=Te(),n=o.firstChild;return o.$$click=e=>(e.stopPropagation(),r.onDelete()),L(n,"src",Oe),o}})]}})}function He(r){const o=()=>r.value,n=(e,f)=>r.setValue({...r.value,[e]:f});return t(B,{get children(){return[t(P,{get when(){return r.value.type==="clause"},get children(){return[t(c,{label:"Пункт договора",get value(){return o().clause},setValue:e=>n("clause",e)}),t(N,{label:"Расплывчатая формулировка",get value(){return o().vague},setValue:e=>n("vague",e)})]}}),t(P,{get when(){return r.value.type==="transfer-raspiska"},get children(){return[t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="funds-transfer"},get children(){return[t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="dogovor-raspiska"},get children(){return[t(c,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)}),t(N,{label:"В расписке указана дата передачи денежных средств, отличная от даты составления договора",get value(){return o().date!==null},setValue:e=>n("date",e?"":null)}),t(k,{get when(){return o().date!==null},get children(){return t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)})}})]}}),t(P,{get when(){return r.value.type==="card-transfer"},get children(){return[t(c,{label:"Наименование документа",get value(){return o().documentName},setValue:e=>n("documentName",e)}),t(c,{label:"Номер документа",get value(){return o().documentNumber},setValue:e=>n("documentNumber",e)}),t(c,{type:"date",label:"Дата документа",get value(){return o().documentDate},setValue:e=>n("documentDate",e)}),t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="account-statement"},get children(){return[t(c,{label:"Начало периода",get value(){return o().periodStart},setValue:e=>n("periodStart",e)}),t(c,{label:"Конец периода",get value(){return o().periodEnd},setValue:e=>n("periodEnd",e)}),"TODO inner adders"]}}),t(P,{get when(){return r.value.type==="payment-order"},get children(){return[t(c,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="cash-receipt-voucher"},get children(){return[t(c,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="expense-receipt"},get children(){return[t(c,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="check-order"},get children(){return[t(c,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),t(c,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),t(c,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),t(P,{get when(){return r.value.type==="other"},get children(){return[t(c,{label:"Наименование документа",get value(){return o().documentName},setValue:e=>n("documentName",e)}),t(N,{label:"Без номера",get value(){return o().documentNumber===null},setValue:e=>n("documentNumber",e?null:"")}),t(k,{get when(){return o().documentNumber!==null},get children(){return t(c,{label:"Номер документа",get value(){return o().documentNumber},setValue:e=>n("documentNumber",e)})}}),t(c,{type:"date",label:"Дата документа",get value(){return o().documentDate},setValue:e=>n("documentDate",e)})]}})]}})}function ze(r){const o=s=>r.setDocument("proofs","returnProofs","proofs",r.document.proofs.returnProofs.proofs.length,s),n=s=>r.setDocument("proofs","returnProofs","proofs",H(g=>{g.splice(s,1)})),e=(s,g)=>{console.log("setting return proof",s,g,r.document.proofs.returnProofs.proofs),r.setDocument("proofs","returnProofs","proofs",H(h=>{h[s]=g}))},f=(s,g)=>r.setDocument("proofs","returnProofs",g,r.document.proofs.returnProofs[g].length,s),m=(s,g)=>r.setDocument("proofs","returnProofs",g,H(h=>{h.splice(s,1)})),a=()=>r.document.proofs.returnProofs.zaemshikProofs,l=de(()=>{if(r.document.srokVozvrata.type==="hire"&&r.document.srokVozvrata.hire.type==="equal"){const s=ne(r.document.srokVozvrata.hire);return console.log("calculated hire proofs",s),s}return null}),i=()=>a()!==null||l()!==null;return z(()=>{l()&&a()===null&&r.setDocument("proofs","returnProofs","zaemshikProofs",[])}),t(E,{get children(){return[t(N,{label:"У меня имеется оригинал или копия документа о возврате части задолженности Заёмщиком",get value(){return r.document.proofs.returnProofs.proofs!==null},setValue:s=>r.setDocument("proofs","returnProofs","proofs",s?[]:null)}),t(k,{get when(){return r.document.proofs.returnProofs.proofs!==null},get children(){return t(E,{get children(){return t(re,{get proofs(){return r.document.proofs.returnProofs.proofs},addProof:o,deleteProof:n,setProof:e})}})}}),t(N,{label:"Документ об оплате части задолженности находится у Заёмщика",get disabled(){return l()!==null},get value(){return i()},setValue:s=>r.setDocument("proofs","returnProofs","zaemshikProofs",s?[]:null)}),t(k,{get when(){return i()},get children(){return t(E,{get children(){return[t(k,{get when(){return l()},children:s=>[t(Y,{get proofs(){return s()},readOnly:!0,addProof:()=>{},deleteProof:()=>{}}),te()]}),t(k,{get when(){return a()},children:s=>t(Y,{get proofs(){return s()},addProof:g=>f(g,"zaemshikProofs"),deleteProof:g=>m(g,"zaemshikProofs")})})]}})}}),t(N,{label:"Часть задолженности мне была возвращена, но соответствующий документ не был составлен",get value(){return r.document.proofs.returnProofs.unbackedProofs!==null},setValue:s=>r.setDocument("proofs","returnProofs","unbackedProofs",s?[]:null)}),t(k,{get when(){return r.document.proofs.returnProofs.unbackedProofs!==null},get children(){return t(E,{get children(){return t(Y,{get proofs(){return r.document.proofs.returnProofs.unbackedProofs},addProof:s=>f(s,"unbackedProofs"),deleteProof:s=>m(s,"unbackedProofs")})}})}})]}})}function ne(r){const o=a=>a!==""&&!isNaN(new Date(a).getDate()),n=a=>a!==""&&a!=="0"&&/^[1-9][0-9]*(\.[0-9]+)?$/.test(a),e=a=>a!==""&&!isNaN(+a)&&Math.floor(+a)===+a&&+a>=1&&+a<=31;if(r.neverPaid||!o(r.dateStart)||!o(r.dateEnd)||!n(r.sum)||!e(r.paymentDay)||new Date(r.dateStart)>new Date(r.dateEnd)||new Date(r.dateEnd).getFullYear()-new Date(r.dateStart).getFullYear()>100)return[];const f=Le(r.dateStart,r.dateEnd,r.sum,+r.paymentDay);if(!f)return[];const m=a=>[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-");return f.map(({date:a,amount:l})=>({date:m(a),sum:l}))}function Le(r,o,n,e){if(!(r&&o&&n&&e))return;const f=new Date(r),m=new Date(o),a=(h,_)=>{const x=_.getMonth()-h.getMonth(),y=[];for(let v=h.getFullYear();v<_.getFullYear();v++){const w=v===h.getFullYear(),S=Array.from({length:12-(w?h.getMonth():0)},(M,d)=>d+1).map(M=>[v,(w?h.getMonth():0)+M]);y.push(S)}return y.length===0?[...Array.from({length:x+1},(v,w)=>h.getMonth()+w+1).map(v=>[_.getFullYear(),v])]:[...y.flat(),...Array.from({length:x+h.getMonth()+1},(v,w)=>w+1).map(v=>[_.getFullYear(),v])]},l=(h,_)=>new Date(h,_,0).getDate();return((h,_)=>a(h,_).filter(([y,v])=>{const w=l(y,v),S=Math.min(e,w),M=new Date(y,v,S);return M>f&&M<m}).map(([y,v])=>{const w=l(y,v),S=Math.min(e,w);return[y,v,S]}))(f,m).map(h=>({date:new Date(...h),amount:n,autoGenerated:!0}))}W(["click"]);const Ue=Object.freeze(Object.defineProperty({__proto__:null,calculateHireProofs:ne,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Se as D,Ue as P,ne as c,D as p};