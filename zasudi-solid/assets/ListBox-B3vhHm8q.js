import{k as n,f as v,F as x,D as y,l as d,s as g,m as f,x as L,C as w,t as c,L as u}from"./index-BWNNp1d4.js";var C=c("<div><select>"),A=c("<div>"),D=c("<option>");function F(s){const b=()=>s.items.some(i=>i.aside!==void 0);return(()=>{var i=C(),l=i.firstChild;return n(i,v(L,{get when(){return b()},get children(){return v(x,{get each(){return s.items},children:(e,a)=>(()=>{var r=A();return n(r,v(y,{get component(){return e.aside}})),d(t=>{var m=s.value===e.value?!0:void 0,h=u["list-box-aside-item"],o=a();return m!==t.e&&g(r,"data-option-selected",t.e=m),h!==t.t&&f(r,t.t=h),o!==t.a&&((t.a=o)!=null?r.style.setProperty("--index",o):r.style.removeProperty("--index")),t},{e:void 0,t:void 0,a:void 0}),r})()})}}),l),l.addEventListener("change",e=>s.setValue(e.currentTarget.value)),n(l,v(x,{get each(){return s.items},children:e=>(()=>{var a=D();return n(a,()=>e.text),d(()=>a.selected=s.value===e.value),d(()=>a.value=e.value),a})()})),d(e=>{var a=u["list-box-wrapper"],r={[u["list-box"]]:!0},t=s.items.length;return a!==e.e&&f(i,e.e=a),e.t=w(l,r,e.t),t!==e.a&&g(l,"size",e.a=t),e},{e:void 0,t:void 0,a:void 0}),i})()}export{F as L};
