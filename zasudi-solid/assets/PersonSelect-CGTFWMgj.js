import{k as c,f,S,l as d,A as _,s as $,F as k,m as b,z as q,t as m}from"./index-DxiIzM2B.js";const x="_squish_1d98f_1",i={"person-select":"_person-select_1d98f_1","person-select-container":"_person-select-container_1d98f_26","person-select-outline":"_person-select-outline_1d98f_35",squish:x,"person-select-item":"_person-select-item_1d98f_75"};var A=m("<div><div>"),C=m("<div><img><div>");function P(r){let s;const g=()=>{if(s)s.style.animation="none",s.offsetHeight,s.style.animation=null,s.style.animationPlayState="running";else throw Error("no ref")};return(()=>{var a=A(),o=a.firstChild;return c(o,f(S,{ref(e){var t=s;typeof t=="function"?t(e):s=e},shadow:!0,get style(){return{"--active-item-coeff":r.value}},get class(){return i["person-select-outline"]}}),null),c(o,f(k,{get each(){return r.items},children:(e,t)=>(()=>{var n=C(),u=n.firstChild,h=u.nextSibling;return n.$$click=()=>(r.value!==t()&&r.setValue(t()),g()),c(h,()=>e.text),d(l=>{var y={[i["person-select-item"]]:!0,active:t()===r.value},v=e.icon;return l.e=_(n,y,l.e),v!==l.t&&$(u,"src",l.t=v),l},{e:void 0,t:void 0}),n})()}),null),d(e=>{var t={[i["person-select-container"]]:!0,center:r.center??!1},n=i["person-select"];return e.e=_(a,t,e.e),n!==e.t&&b(o,e.t=n),e},{e:void 0,t:void 0}),a})()}q(["click"]);export{P,i as s};
