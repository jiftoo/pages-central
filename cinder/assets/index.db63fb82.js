const ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}};ce();function h(){}function oe(t){return t&&typeof t=="object"&&typeof t.then=="function"}function V(t){return t()}function D(){return Object.create(null)}function S(t){t.forEach(V)}function ue(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function P(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function se(t){return Object.keys(t).length===0}function _(t,e){t.appendChild(e)}function N(t,e,r){t.insertBefore(e,r||null)}function y(t){t.parentNode.removeChild(t)}function ie(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function g(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function A(){return E(" ")}function fe(){return E("")}function H(t,e,r,l){return t.addEventListener(e,r,l),()=>t.removeEventListener(e,r,l)}function a(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ae(t){return Array.from(t.childNodes)}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let O;function m(t){O=t}function he(){if(!O)throw new Error("Function called outside component initialization");return O}const L=[],G=[],q=[],J=[],_e=Promise.resolve();let I=!1;function pe(){I||(I=!0,_e.then(K))}function z(t){q.push(t)}const M=new Set;let T=0;function K(){const t=O;do{for(;T<L.length;){const e=L[T];T++,m(e),me(e.$$)}for(m(null),L.length=0,T=0;G.length;)G.pop()();for(let e=0;e<q.length;e+=1){const r=q[e];M.has(r)||(M.add(r),r())}q.length=0}while(L.length);for(;J.length;)J.pop()();I=!1,M.clear(),m(t)}function me(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const B=new Set;let $;function Y(){$={r:0,c:[],p:$}}function Z(){$.r||S($.c),$=$.p}function b(t,e){t&&t.i&&(B.delete(t),t.i(e))}function x(t,e,r,l){if(t&&t.o){if(B.has(t))return;B.add(t),$.c.push(()=>{B.delete(t),l&&(r&&t.d(1),l())}),t.o(e)}else l&&l()}function ge(t,e){const r=e.token={};function l(n,c,o,s){if(e.token!==r)return;e.resolved=s;let u=e.ctx;o!==void 0&&(u=u.slice(),u[o]=s);const i=n&&(e.current=n)(u);let f=!1;e.block&&(e.blocks?e.blocks.forEach((d,p)=>{p!==c&&d&&(Y(),x(d,1,1,()=>{e.blocks[p]===d&&(e.blocks[p]=null)}),Z())}):e.block.d(1),i.c(),b(i,1),i.m(e.mount(),e.anchor),f=!0),e.block=i,e.blocks&&(e.blocks[c]=i),f&&K()}if(oe(t)){const n=he();if(t.then(c=>{m(n),l(e.then,1,e.value,c),m(null)},c=>{if(m(n),l(e.catch,2,e.error,c),m(null),!e.hasCatch)throw c}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function ve(t,e,r){const l=e.slice(),{resolved:n}=t;t.current===t.then&&(l[t.value]=n),t.current===t.catch&&(l[t.error]=n),t.block.p(l,r)}function be(t){t&&t.c()}function ee(t,e,r,l){const{fragment:n,on_mount:c,on_destroy:o,after_update:s}=t.$$;n&&n.m(e,r),l||z(()=>{const u=c.map(V).filter(ue);o?o.push(...u):S(u),t.$$.on_mount=[]}),s.forEach(z)}function te(t,e){const r=t.$$;r.fragment!==null&&(S(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ke(t,e){t.$$.dirty[0]===-1&&(L.push(t),pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,r,l,n,c,o,s=[-1]){const u=O;m(t);const i=t.$$={fragment:null,ctx:null,props:c,update:h,not_equal:n,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:D(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};o&&o(i.root);let f=!1;if(i.ctx=r?r(t,e.props||{},(d,p,...w)=>{const j=w.length?w[0]:p;return i.ctx&&n(i.ctx[d],i.ctx[d]=j)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](j),f&&ke(t,d)),p}):[],i.update(),f=!0,S(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const d=ae(e.target);i.fragment&&i.fragment.l(d),d.forEach(y)}else i.fragment&&i.fragment.c();e.intro&&b(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),K()}m(u)}class re{$destroy(){te(this,1),this.$destroy=h}$on(e,r){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(r),()=>{const n=l.indexOf(r);n!==-1&&l.splice(n,1)}}$set(e){this.$$set&&!se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $e(t){let e,r,l;return{c(){e=g("div"),e.innerHTML='<div class="svelte-19njht2">NSFW</div>',a(e,"class","nsfw svelte-19njht2")},m(n,c){N(n,e,c),r||(l=H(e,"click",ye),r=!0)},p:h,i:h,o:h,d(n){n&&y(e),r=!1,l()}}}const ye=t=>t.currentTarget.remove();class we extends re{constructor(e){super(),ne(this,e,null,$e,X,{})}}function Q(t,e,r){const l=t.slice();return l[4]=e[r],l}function R(t){let e,r,l,n,c,o,s,u;return{c(){e=g("div"),r=g("img"),n=A(),c=g("div"),o=E(t[0]),P(r.src,l=`${F}/${t[0]}`)||a(r,"src",l),a(r,"alt",t[0]),a(r,"class","svelte-1bxrp5u"),a(c,"class","svelte-1bxrp5u"),a(e,"id","opened"),a(e,"class","svelte-1bxrp5u")},m(i,f){N(i,e,f),_(e,r),_(e,n),_(e,c),_(c,o),s||(u=H(r,"click",t[2]),s=!0)},p(i,f){f&1&&!P(r.src,l=`${F}/${i[0]}`)&&a(r,"src",l),f&1&&a(r,"alt",i[0]),f&1&&de(o,i[0])},d(i){i&&y(e),s=!1,u()}}}function Ee(t){let e,r,l=t[7]+"",n;return{c(){e=g("div"),r=E("Error: "),n=E(l)},m(c,o){N(c,e,o),_(e,r),_(e,n)},p:h,i:h,o:h,d(c){c&&y(e)}}}function xe(t){let e,r,l=t[1],n=[];for(let o=0;o<l.length;o+=1)n[o]=U(Q(t,l,o));const c=o=>x(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=fe()},m(o,s){for(let u=0;u<n.length;u+=1)n[u].m(o,s);N(o,e,s),r=!0},p(o,s){if(s&3){l=o[1];let u;for(u=0;u<l.length;u+=1){const i=Q(o,l,u);n[u]?(n[u].p(i,s),b(n[u],1)):(n[u]=U(i),n[u].c(),b(n[u],1),n[u].m(e.parentNode,e))}for(Y(),u=l.length;u<n.length;u+=1)c(u);Z()}},i(o){if(!r){for(let s=0;s<l.length;s+=1)b(n[s]);r=!0}},o(o){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)x(n[s]);r=!1},d(o){ie(n,o),o&&y(e)}}}function Ne(t){let e,r;return e=new we({}),{c(){be(e.$$.fragment)},m(l,n){ee(e,l,n),r=!0},i(l){r||(b(e.$$.fragment,l),r=!0)},o(l){x(e.$$.fragment,l),r=!1},d(l){te(e,l)}}}function U(t){let e,r,l,n,c,o,s,u,i=t[4].path+"",f,d,p,w,j,v=t[4].nsfw&&Ne();function le(){return t[3](t[4])}return{c(){e=g("div"),v&&v.c(),r=A(),l=g("img"),s=A(),u=g("div"),f=E(i),d=A(),P(l.src,n=`${F}/thumbs/${t[4].path}`)||a(l,"src",n),a(l,"alt",c=t[4].path),a(l,"title",o=t[4].path+" "+t[4].nsfw),a(l,"class","svelte-1bxrp5u"),a(u,"class","name svelte-1bxrp5u"),a(e,"class","container svelte-1bxrp5u")},m(k,W){N(k,e,W),v&&v.m(e,null),_(e,r),_(e,l),_(e,s),_(e,u),_(u,f),_(e,d),p=!0,w||(j=H(l,"click",le),w=!0)},p(k,W){t=k},i(k){p||(b(v),p=!0)},o(k){x(v),p=!1},d(k){k&&y(e),v&&v.d(),w=!1,j()}}}function je(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function Le(t){let e,r,l,n=t[0]&&R(t),c={ctx:t,current:null,token:null,hasCatch:!0,pending:je,then:xe,catch:Ee,value:1,error:7,blocks:[,,,]};return ge(t[1],c),{c(){e=g("main"),n&&n.c(),r=A(),c.block.c(),a(e,"class","svelte-1bxrp5u")},m(o,s){N(o,e,s),n&&n.m(e,null),_(e,r),c.block.m(e,c.anchor=null),c.mount=()=>e,c.anchor=null,l=!0},p(o,[s]){t=o,t[0]?n?n.p(t,s):(n=R(t),n.c(),n.m(e,r)):n&&(n.d(1),n=null),ve(c,t,s)},i(o){l||(b(c.block),l=!0)},o(o){for(let s=0;s<3;s+=1){const u=c.blocks[s];x(u)}l=!1},d(o){o&&y(e),n&&n.d(),c.block.d(),c.token=null,c=null}}}const F="https://api.jiftoo.dev/cinder";function Ae(t,e,r){const l=(async()=>{const s=await fetch(F+"/lena_list.csv",{method:"get"}).then(u=>u.text());return console.log(s.split(`
`).filter(u=>u.includes("true"))),s.trim().split(`
`).map(u=>{const i=u.split(",").map(f=>f.trim());return{path:i[0],date:i[1],author:i[2],nsfw:i[3]=="true"}})})();let n=null;return[n,l,()=>r(0,n=null),s=>r(0,n=s.path)]}class Oe extends re{constructor(e){super(),ne(this,e,Ae,Le,X,{})}}new Oe({target:document.getElementById("app")});