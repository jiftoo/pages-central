import{d as ee,k as L,K as de,i as h,c as V,a as S,t as D,H as ce,l as r,F,D as ie,p as N,S as _,b as te,h as R,C as q,M as b,z as fe,G as ge,A as me,_ as x}from"./index-CQiPjXso.js";import{Q as C,T as f,c as ve}from"./TextField-C-lKYZ4W.js";import{b as Y,u as he,d as A,p as z,a1 as J,a2 as Pe,B as I,a0 as Q,S as re,a3 as B,a4 as be,a5 as pe,a6 as _e,a7 as we,a8 as ye,a9 as ke,aa as Ve,ab as De,ac as xe,ad as Ee}from"./DocumentFlow-BPOldJNx.js";import{R as $e}from"./RadioGroup-mQMpjHja.js";import{C as T}from"./Checkbox-DX-q6fZB.js";const E={"hover-example":"_hover-example_kjw3v_1","adder-buttons":"_adder-buttons_kjw3v_31","proof-adder":"_proof-adder_kjw3v_41","proof-card":"_proof-card_kjw3v_49","add-proof-card":"_add-proof-card_kjw3v_72","simple-proof-fields":"_simple-proof-fields_kjw3v_130","simple-proof-adder":"_simple-proof-adder_kjw3v_151"},Ce="_modal_a3zct_1",Z={modal:Ce,"dialog-appear":"_dialog-appear_a3zct_1","modal-fix":"_modal-fix_a3zct_40"};var Se=D("<dialog><div>");function Me(t){let o;L(()=>t.show?o.showModal():o.close());const n=de(()=>t.children);return(()=>{var e=Se(),u=e.firstChild;e.addEventListener("close",()=>t.onClose()),e.$$click=a=>a.target===a.currentTarget&&t.onClose();var g=o;return typeof g=="function"?ce(g,e):o=e,h(u,n),V(a=>{var l=Z.modal,c=Z["modal-fix"];return l!==a.e&&S(e,a.e=l),c!==a.t&&S(u,a.t=c),a},{e:void 0,t:void 0}),e})()}ee(["click"]);const Oe=(t,o)=>{const n=t[o];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((e,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+o)))})},Ae="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-x'%3e%3cline%20x1='18'%20y1='6'%20x2='6'%20y2='18'%3e%3c/line%3e%3cline%20x1='6'%20y1='6'%20x2='18'%20y2='18'%3e%3c/line%3e%3c/svg%3e",je="data:image/svg+xml,%3csvg%20width='15'%20height='20'%20viewBox='0%200%2015%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.37398%200H1V9.24801H0V12.248H1V13.5836H0V16.5836H1V20H4V16.5836H7.75V13.5836H4V12.25H8.37481C11.7524%2012.25%2014.5%209.50238%2014.5%206.1252C14.5%202.74762%2011.7524%200%208.37398%200ZM8.3752%209.25H4V2.99961H8.3752C10.0984%202.99961%2011.5004%204.4016%2011.5004%206.1248C11.5004%207.84801%2010.0984%209.25%208.3752%209.25Z'%20fill='%231C4681'/%3e%3c/svg%3e";var Re=D("<div><select>"),Ne=D("<div>"),Te=D("<option>");function He(t){const o=()=>t.items.some(n=>n.aside!==void 0);return(()=>{var n=Re(),e=n.firstChild;return h(n,r(_,{get when(){return o()},get children(){return r(F,{get each(){return t.items},children:(u,g)=>(()=>{var a=Ne();return h(a,r(ie,{get component(){return u.aside}})),V(l=>{var c=t.value===u.value?!0:void 0,w=Y["list-box-aside-item"],s=g();return c!==l.e&&N(a,"data-option-selected",l.e=c),w!==l.t&&S(a,l.t=w),s!==l.a&&((l.a=s)!=null?a.style.setProperty("--index",s):a.style.removeProperty("--index")),l},{e:void 0,t:void 0,a:void 0}),a})()})}}),e),e.addEventListener("change",u=>t.setValue(u.currentTarget.value)),h(e,r(F,{get each(){return t.items},children:u=>(()=>{var g=Te();return h(g,()=>u.text),V(()=>g.selected=t.value===u.value),V(()=>g.value=u.value),g})()})),V(u=>{var g=Y["list-box-wrapper"],a={[Y["list-box"]]:!0},l=t.items.length;return g!==u.e&&S(n,u.e=g),u.t=te(e,a,u.t),l!==u.a&&N(e,"size",u.a=l),u},{e:void 0,t:void 0,a:void 0}),n})()}var W=D("<pre>"),j=D("<div>"),Ie=D('<div><div>пример</div><img alt="">'),ze=D("<span>Платёж "),oe=D("<br>"),Le=D("<span>На сумму <span class=warning> р."),Fe=D("<button><img alt=x>");function Ye(){const[t,o]=he(),n=a=>o("proofs","dogovorProofs",t.proofs.dogovorProofs.length,a),e=a=>o("proofs","dogovorProofs",z(l=>{l.splice(a,1)})),u=(a,l)=>{console.log("setting document proof",a,l,t.proofs.dogovorProofs),o("proofs","dogovorProofs",z(c=>{c[a]=l}))},g=()=>t.srokVozvrata.type==="hire";return L(()=>{g()&&o("proofs","returnProofs",A(new J))}),(()=>{var a=j();return h(a,r(C,{get children(){return[r(ne,{get proofs(){return t.proofs.dogovorProofs},addProof:n,deleteProof:e,setProof:u}),(()=>{var l=W();return h(l,()=>JSON.stringify(t.proofs.dogovorProofs,null,2)),l})(),(()=>{var l=W();return h(l,()=>JSON.stringify(t.proofs.returnProofs,null,2)),l})()]}}),null),h(a,r(C,{question:"Возвращение займа",get children(){return r($e,{get items(){return[{label:"Заёмщик, и его правопреемники ни разу не производили оплату по договору займа",value:"never-paid",disabled:g()},{label:"Заёмщик частично платил по договору займа",value:"paid",disabled:g()}]},get value(){return t.proofs.returnProofs.type},setValue:l=>{switch(l){case"never-paid":o("proofs","returnProofs",A(new Pe));break;case"paid":o("proofs","returnProofs",A(new J));break;default:throw new Error("Unknown proof type")}},get children(){return r(_,{get when(){return t.proofs.returnProofs.type==="paid"},get children(){return r(Ke,{document:t,setDocument:o})}})}})}}),null),a})()}const X={clause:"Пункт договора","transfer-raspiska":"Расписка в передаче денежных средств","funds-transfer":"Акт приёма-передачи денежных средств","dogovor-raspiska":"Расписка на договоре","card-transfer":"Перевод на карту","account-statement":"Выписка по счёту","payment-order":"Платёжное поручение","cash-receipt-voucher":"Квитанция к приходному кассовому ордеру","expense-receipt":"Расходный кассовый ордер","check-order":"Чек-ордер банка","payment-agreement":"Соглашение о зачёте",other:"Другое"};function ne(t){const[o,n]=R(!1),e=i=>{const d=A(i);return d.note=null,d},[u,g]=R(null),[a,l]=R({proof:e(new B),mode:{value:"add"}}),c=i=>l(d=>({...d,proof:i})),w=()=>{c(e(new B)),g(null)},s=(i,d)=>{l(p=>d!==void 0?{...p,mode:{value:i,index:d}}:{...p,mode:{value:i}})};L(()=>{console.log("proof in progress updated",a(),u())});const m=()=>Object.values(a().proof).every(i=>i!==""),P=()=>{const i=a();console.log(i),i.proof.note=u(),i.mode.value==="edit"?(t.setProof(i.mode.index,i.proof),n(!1)):(t.addProof(i.proof),n(!1))},$=()=>{s("add"),w(),n(!0)},k=(i,d)=>{s("edit",d),g(i.note),c(A(i)),n(!0)},[v,y]=R(0),M=i=>{const[d]=ge(()=>Oe(Object.assign({"../../../assets/example-documents/account-statement.jpg":()=>x(()=>import("./account-statement-DzdXkgl8.js"),[]),"../../../assets/example-documents/card-transfer.jpg":()=>x(()=>import("./card-transfer-CSMD_Vck.js"),[]),"../../../assets/example-documents/cash-receipt-voucher.jpg":()=>x(()=>import("./cash-receipt-voucher-DNXc6Sdk.js"),[]),"../../../assets/example-documents/check-order.jpg":()=>x(()=>import("./check-order-BCVPIxgK.js"),[]),"../../../assets/example-documents/clause.jpg":()=>x(()=>import("./clause-DmFs3e5G.js"),[]),"../../../assets/example-documents/expense-receipt.jpg":()=>x(()=>import("./expense-receipt-rsnUZ8tJ.js"),[]),"../../../assets/example-documents/funds-transfer.jpg":()=>x(()=>import("./funds-transfer-BN_LdnSn.js"),[]),"../../../assets/example-documents/other.jpg":()=>x(()=>import("./other-5fxjf8TQ.js"),[]),"../../../assets/example-documents/payment-order.jpg":()=>x(()=>import("./payment-order-cI9zTrOO.js"),[])}),`../../../assets/example-documents/${i.type}.jpg`).then(p=>p.default).catch(p=>{}));return L(()=>console.log("image:",i.type,d())),r(me,{get children(){return r(_,{get when(){return d()!==void 0},get children(){var p=Ie(),ue=p.firstChild,se=ue.nextSibling;return V(H=>{var G=E["hover-example"],U=d();return G!==H.e&&S(p,H.e=G),U!==H.t&&N(se,"src",H.t=U),H},{e:void 0,t:void 0}),p}})}})},O=Object.entries(X).map(([i,d])=>({value:i,text:d,aside:()=>r(M,{type:i})}));return(()=>{var i=j();return h(i,r(Me,{get show(){return o()},onClose:()=>n(!1),get children(){return[r(C,{get question(){return a().mode.value==="add"?"Добавить доказательство":"Изменить доказательство"},get children(){return r(q,{get children(){return[r(b,{get when(){return v()===0},get children(){return r(He,{items:O,get value(){return a().proof.type},setValue:d=>{switch(d){case"clause":c(e(new B));break;case"transfer-raspiska":c(e(new Ee));break;case"funds-transfer":c(e(new xe));break;case"dogovor-raspiska":c(e(new De));break;case"card-transfer":c(e(new Ve));break;case"account-statement":c(e(new ke));break;case"payment-order":c(e(new ye));break;case"cash-receipt-voucher":c(e(new we));break;case"expense-receipt":c(e(new _e));break;case"check-order":c(e(new pe));break;case"other":c(e(new be));break;default:throw new Error("Unknown proof type")}}})}}),r(b,{get when(){return v()===1},get children(){return[r(f,{icon:"no-space",label:"Примечание (не обязательно)",get value(){return u()??""},setValue:d=>g(d===""?null:d)}),r(Be,{get value(){return a().proof},setValue:c})]}})]}})}}),r(C,{get children(){var d=j();return h(d,r(q,{get children(){return[r(b,{get when(){return v()===0},get children(){return[r(I,{text:"Закрыть",get class(){return Q["flow-back-button"]},onClick:()=>n(!1)}),r(I,{text:"Далее",onClick:()=>y(1)})]}}),r(b,{get when(){return v()===1},get children(){return[r(I,{text:"К типам",get class(){return Q["flow-back-button"]},onClick:()=>y(0)}),r(I,{get text(){return a().mode.value==="add"?"Добавить":"Сохранить"},onClick:P,get disabled(){return!m()}})]}})]}})),V(()=>S(d,E["adder-buttons"])),d}})]}}),null),h(i,r(F,{get each(){return t.proofs},children:(d,p)=>r(ae,{get index(){return p()},onDelete:()=>t.deleteProof(p()),onClick:()=>k(A(d),p()),onKeyDown:()=>k(A(d),p()),get label(){return X[d.type]},get note(){return d.note??void 0},readOnly:!1})}),null),h(i,r(re,{shadow:!0,get classList(){return{[E["proof-card"]]:!0,[E["add-proof-card"]]:!0}},onClick:$,onKeyDown:d=>{d.target===d.currentTarget&&(d.key==="Enter"||d.key===" ")&&$()},tabIndex:0,children:"Добавить доказательство"}),null),V(()=>S(i,E["proof-adder"])),i})()}function K(t){const o=()=>{},[n,e]=R(""),[u,g]=R(""),a=()=>!(t.readOnly??!1);return[r(_,{get when(){return a()},get children(){var l=j();return h(l,r(f,{icon:ve,type:"date",label:"Дата платежа",get value(){return n()},setValue:e}),null),h(l,r(f,{icon:je,label:"Сумма платежа",get value(){return u()},setValue:g}),null),h(l,r(I,{get disabled(){return n()===""||u()===""},text:"Добавить",onClick:()=>(t.addProof({date:n(),sum:u()}),e(""),g(""))}),null),V(()=>S(l,E["simple-proof-fields"])),l}}),r(_,{get when(){return t.proofs.length>0},get children(){var l=j();return h(l,r(F,{get each(){return t.proofs},children:(c,w)=>r(ae,{get label(){return[(()=>{var s=ze();return s.firstChild,h(s,()=>new Date(c.date).toLocaleDateString("ru"),null),s})(),oe(),(()=>{var s=Le(),m=s.firstChild,P=m.nextSibling,$=P.firstChild;return h(P,()=>c.sum,$),s})()]},get index(){return w()},onDelete:()=>a()&&t.deleteProof(w()),onClick:o,onKeyDown:o,get readOnly(){return!a()}})})),V(c=>te(l,{[E["proof-adder"]]:!0,[E["simple-proof-adder"]]:!0},c)),l}})]}function ae(t){return r(re,{shadow:!0,get class(){return E["proof-card"]},onClick:()=>t.onClick(),onKeyDown:o=>{o.target===o.currentTarget&&(o.key==="Enter"||o.key===" ")&&t.onKeyDown()},get title(){return t.note??(typeof t.label=="string"?t.label:void 0)},tabIndex:0,get children(){return[r(_,{get when(){return t.note!==void 0},get children(){var o=j();return h(o,()=>t.note),V(()=>N(o,"title",t.note)),o}}),(()=>{var o=j();return h(o,()=>t.label),V(()=>N(o,"title",typeof t.label=="string"?t.label:void 0)),o})(),r(_,{get when(){return!t.readOnly},get children(){var o=Fe(),n=o.firstChild;return o.$$click=e=>(e.stopPropagation(),t.onDelete()),N(n,"src",Ae),o}})]}})}function Be(t){const o=()=>t.value,n=(e,u)=>t.setValue({...t.value,[e]:u});return r(q,{get children(){return[r(b,{get when(){return t.value.type==="clause"},get children(){return[r(f,{label:"Пункт договора",get value(){return o().clause},setValue:e=>n("clause",e)}),r(T,{label:"Расплывчатая формулировка",get value(){return o().vague},setValue:e=>n("vague",e)})]}}),r(b,{get when(){return t.value.type==="transfer-raspiska"},get children(){return[r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="funds-transfer"},get children(){return[r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="dogovor-raspiska"},get children(){return[r(f,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)}),r(T,{label:"В расписке указана дата передачи денежных средств, отличная от даты составления договора",get value(){return o().date!==null},setValue:e=>n("date",e?"":null)}),r(_,{get when(){return o().date!==null},get children(){return r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)})}})]}}),r(b,{get when(){return t.value.type==="card-transfer"},get children(){return[r(f,{label:"Наименование документа",get value(){return o().documentName},setValue:e=>n("documentName",e)}),r(f,{label:"Номер документа",get value(){return o().documentNumber},setValue:e=>n("documentNumber",e)}),r(f,{type:"date",label:"Дата документа",get value(){return o().documentDate},setValue:e=>n("documentDate",e)}),r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма платежа",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="account-statement"},get children(){return[r(f,{label:"Начало периода",get value(){return o().periodStart},setValue:e=>n("periodStart",e)}),r(f,{label:"Конец периода",get value(){return o().periodEnd},setValue:e=>n("periodEnd",e)}),"TODO inner adders"]}}),r(b,{get when(){return t.value.type==="payment-order"},get children(){return[r(f,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="cash-receipt-voucher"},get children(){return[r(f,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="expense-receipt"},get children(){return[r(f,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="check-order"},get children(){return[r(f,{label:"Номер",get value(){return o().number},setValue:e=>n("number",e)}),r(f,{type:"date",label:"Дата",get value(){return o().date},setValue:e=>n("date",e)}),r(f,{label:"Сумма",get value(){return o().sum},setValue:e=>n("sum",e)})]}}),r(b,{get when(){return t.value.type==="other"},get children(){return[r(f,{label:"Наименование документа",get value(){return o().documentName},setValue:e=>n("documentName",e)}),r(T,{label:"Без номера",get value(){return o().documentNumber===null},setValue:e=>n("documentNumber",e?null:"")}),r(_,{get when(){return o().documentNumber!==null},get children(){return r(f,{label:"Номер документа",get value(){return o().documentNumber},setValue:e=>n("documentNumber",e)})}}),r(f,{type:"date",label:"Дата документа",get value(){return o().documentDate},setValue:e=>n("documentDate",e)})]}})]}})}function Ke(t){const o=s=>t.setDocument("proofs","returnProofs","proofs",t.document.proofs.returnProofs.proofs.length,s),n=s=>t.setDocument("proofs","returnProofs","proofs",z(m=>{m.splice(s,1)})),e=(s,m)=>{console.log("setting return proof",s,m,t.document.proofs.returnProofs.proofs),t.setDocument("proofs","returnProofs","proofs",z(P=>{P[s]=m}))},u=(s,m)=>t.setDocument("proofs","returnProofs",m,t.document.proofs.returnProofs[m].length,s),g=(s,m)=>t.setDocument("proofs","returnProofs",m,z(P=>{P.splice(s,1)})),a=()=>t.document.proofs.returnProofs.zaemshikProofs,l=fe(()=>{if(t.document.srokVozvrata.type==="hire"&&t.document.srokVozvrata.hire.type==="equal"){const s=le(t.document.srokVozvrata.hire);return console.log("calculated hire proofs",s),s}return null}),c=()=>a()!==null||l()!==null,w=()=>t.document.srokVozvrata.type==="hire";return L(()=>{(w()||c())&&a()===null&&t.setDocument("proofs","returnProofs","zaemshikProofs",[])}),r(C,{get children(){return[r(T,{label:"У меня имеется оригинал или копия документа о возврате части задолженности Заёмщиком",get value(){return t.document.proofs.returnProofs.proofs!==null},setValue:s=>t.setDocument("proofs","returnProofs","proofs",s?[]:null)}),r(_,{get when(){return t.document.proofs.returnProofs.proofs!==null},get children(){return r(C,{get children(){return r(ne,{get proofs(){return t.document.proofs.returnProofs.proofs},addProof:o,deleteProof:n,setProof:e})}})}}),r(T,{label:"Документ об оплате части задолженности находится у Заёмщика",get disabled(){return w()},get value(){return w()||c()},setValue:s=>t.setDocument("proofs","returnProofs","zaemshikProofs",s?[]:null)}),r(_,{get when(){return w()||c()},get children(){return r(C,{get children(){return[r(_,{get when(){return l()},children:s=>[r(K,{get proofs(){return s()},readOnly:!0,addProof:()=>{},deleteProof:()=>{}}),oe()]}),r(_,{get when(){return a()},children:s=>r(K,{get proofs(){return s()},addProof:m=>u(m,"zaemshikProofs"),deleteProof:m=>g(m,"zaemshikProofs")})})]}})}}),r(T,{label:"Часть задолженности мне была возвращена, но соответствующий документ не был составлен",get value(){return t.document.proofs.returnProofs.unbackedProofs!==null},setValue:s=>t.setDocument("proofs","returnProofs","unbackedProofs",s?[]:null)}),r(_,{get when(){return t.document.proofs.returnProofs.unbackedProofs!==null},get children(){return r(C,{get children(){return r(K,{get proofs(){return t.document.proofs.returnProofs.unbackedProofs},addProof:s=>u(s,"unbackedProofs"),deleteProof:s=>g(s,"unbackedProofs")})}})}})]}})}function le(t){const o=a=>a!==""&&!isNaN(new Date(a).getDate()),n=a=>a!==""&&a!=="0"&&/^[1-9][0-9]*(\.[0-9]+)?$/.test(a),e=a=>a!==""&&!isNaN(+a)&&Math.floor(+a)===+a&&+a>=1&&+a<=31;if(t.neverPaid||!o(t.dateStart)||!o(t.dateEnd)||!n(t.sum)||!e(t.paymentDay)||new Date(t.dateStart)>new Date(t.dateEnd)||new Date(t.dateEnd).getFullYear()-new Date(t.dateStart).getFullYear()>100)return[];const u=qe(t.dateStart,t.dateEnd,t.sum,+t.paymentDay);if(!u)return[];const g=a=>[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-");return u.map(({date:a,amount:l})=>({date:g(a),sum:l}))}function qe(t,o,n,e){if(!(t&&o&&n&&e))return;const u=new Date(t),g=new Date(o),a=(m,P)=>{const $=P.getMonth()-m.getMonth(),k=[];for(let v=m.getFullYear();v<P.getFullYear();v++){const y=v===m.getFullYear(),M=Array.from({length:12-(y?m.getMonth():0)},(O,i)=>i+1).map(O=>[v,(y?m.getMonth():0)+O]);k.push(M)}return k.length===0?[...Array.from({length:$+1},(v,y)=>m.getMonth()+y+1).map(v=>[P.getFullYear(),v])]:[...k.flat(),...Array.from({length:$+m.getMonth()+1},(v,y)=>y+1).map(v=>[P.getFullYear(),v])]},l=(m,P)=>new Date(m,P,0).getDate();return((m,P)=>a(m,P).filter(([k,v])=>{const y=l(k,v),M=Math.min(e,y),O=new Date(k,v,M);return O>u&&O<g}).map(([k,v])=>{const y=l(k,v),M=Math.min(e,y);return[k,v,M]}))(u,g).map(m=>({date:new Date(...m),amount:n,autoGenerated:!0}))}ee(["click"]);const We=Object.freeze(Object.defineProperty({__proto__:null,calculateHireProofs:le,default:Ye},Symbol.toStringTag,{value:"Module"}));export{Me as D,He as L,We as P,le as c,E as p};