const He=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const _ of i)if(_.type==="childList")for(const l of _.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const _={};return i.integrity&&(_.integrity=i.integrity),i.referrerpolicy&&(_.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?_.credentials="include":i.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(i){if(i.ep)return;i.ep=!0;const _=n(i);fetch(i.href,_)}};He();var T,s,ce,ue,S,se,K,ae,D={},fe=[],Te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $(t,e){for(var n in e)t[n]=e[n];return t}function pe(t){var e=t.parentNode;e&&e.removeChild(t)}function U(t,e,n){var o,i,_,l={};for(_ in e)_=="key"?o=e[_]:_=="ref"?i=e[_]:l[_]=e[_];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)l[_]===void 0&&(l[_]=t.defaultProps[_]);return w(t,l,o,i,null)}function w(t,e,n,o,i){var _={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ce:i};return i==null&&s.vnode!=null&&s.vnode(_),_}function Oe(){return{current:null}}function O(t){return t.children}function E(t,e){this.props=t,this.context=e}function C(t,e){if(e==null)return t.__?C(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?C(t):null}function de(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return de(t)}}function W(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!L.__r++||K!==s.debounceRendering)&&((K=s.debounceRendering)||se)(L)}function L(){for(var t;L.__r=S.length;)t=S.sort(function(e,n){return e.__v.__b-n.__v.__b}),S=[],t.some(function(e){var n,o,i,_,l,u;e.__d&&(l=(_=(n=e).__v).__e,(u=n.__P)&&(o=[],(i=$({},_)).__v=_.__v+1,V(u,_,i,n.__n,u.ownerSVGElement!==void 0,_.__h!=null?[l]:null,o,l==null?C(_):l,_.__h),ge(o,_),_.__e!=l&&de(_)))})}function he(t,e,n,o,i,_,l,u,p,d){var r,v,a,c,f,x,h,y=o&&o.__k||fe,k=y.length;for(n.__k=[],r=0;r<e.length;r++)if((c=n.__k[r]=(c=e[r])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?w(null,c,null,null,c):Array.isArray(c)?w(O,{children:c},null,null,null):c.__b>0?w(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(a=y[r])===null||a&&c.key==a.key&&c.type===a.type)y[r]=void 0;else for(v=0;v<k;v++){if((a=y[v])&&c.key==a.key&&c.type===a.type){y[v]=void 0;break}a=null}V(t,c,a=a||D,i,_,l,u,p,d),f=c.__e,(v=c.ref)&&a.ref!=v&&(h||(h=[]),a.ref&&h.push(a.ref,null,c),h.push(v,c.__c||f,c)),f!=null?(x==null&&(x=f),typeof c.type=="function"&&c.__k===a.__k?c.__d=p=ve(c,p,t):p=ye(t,c,a,y,f,p),typeof n.type=="function"&&(n.__d=p)):p&&a.__e==p&&p.parentNode!=t&&(p=C(a))}for(n.__e=x,r=k;r--;)y[r]!=null&&(typeof n.type=="function"&&y[r].__e!=null&&y[r].__e==n.__d&&(n.__d=C(o,r+1)),ke(y[r],y[r]));if(h)for(r=0;r<h.length;r++)be(h[r],h[++r],h[++r])}function ve(t,e,n){for(var o,i=t.__k,_=0;i&&_<i.length;_++)(o=i[_])&&(o.__=t,e=typeof o.type=="function"?ve(o,e,n):ye(n,o,o,i,o.__e,e));return e}function me(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){me(n,e)}):e.push(t)),e}function ye(t,e,n,o,i,_){var l,u,p;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||i!=_||i.parentNode==null)e:if(_==null||_.parentNode!==t)t.appendChild(i),l=null;else{for(u=_,p=0;(u=u.nextSibling)&&p<o.length;p+=2)if(u==i)break e;t.insertBefore(i,_),l=_}return l!==void 0?l:i.nextSibling}function Fe(t,e,n,o,i){var _;for(_ in n)_==="children"||_==="key"||_ in e||I(t,_,null,n[_],o);for(_ in e)i&&typeof e[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===e[_]||I(t,_,e[_],n[_],o)}function Z(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Te.test(e)?n:n+"px"}function I(t,e,n,o,i){var _;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||Z(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||Z(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?o||t.addEventListener(e,_?X:Q,_):t.removeEventListener(e,_?X:Q,_);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Q(t){this.l[t.type+!1](s.event?s.event(t):t)}function X(t){this.l[t.type+!0](s.event?s.event(t):t)}function V(t,e,n,o,i,_,l,u,p){var d,r,v,a,c,f,x,h,y,k,P,J,F,b=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=e.__e=n.__e,e.__h=null,_=[u]),(d=s.__b)&&d(e);try{e:if(typeof b=="function"){if(h=e.props,y=(d=b.contextType)&&o[d.__c],k=d?y?y.props.value:d.__:o,n.__c?x=(r=e.__c=n.__c).__=r.__E:("prototype"in b&&b.prototype.render?e.__c=r=new b(h,k):(e.__c=r=new E(h,k),r.constructor=b,r.render=je),y&&y.sub(r),r.props=h,r.state||(r.state={}),r.context=k,r.__n=o,v=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=$({},r.__s)),$(r.__s,b.getDerivedStateFromProps(h,r.__s))),a=r.props,c=r.state,v)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==a&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(h,k),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(h,r.__s,k)===!1||e.__v===n.__v){r.props=h,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(h,r.__s,k),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(a,c,f)})}if(r.context=k,r.props=h,r.__v=e,r.__P=t,P=s.__r,J=0,"prototype"in b&&b.prototype.render)r.state=r.__s,r.__d=!1,P&&P(e),d=r.render(r.props,r.state,r.context);else do r.__d=!1,P&&P(e),d=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++J<25);r.state=r.__s,r.getChildContext!=null&&(o=$($({},o),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(f=r.getSnapshotBeforeUpdate(a,c)),F=d!=null&&d.type===O&&d.key==null?d.props.children:d,he(t,Array.isArray(F)?F:[F],e,n,o,i,_,l,u,p),r.base=e.__e,e.__h=null,r.__h.length&&l.push(r),x&&(r.__E=r.__=null),r.__e=!1}else _==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ne(n.__e,e,n,o,i,_,l,p);(d=s.diffed)&&d(e)}catch(N){e.__v=null,(p||_!=null)&&(e.__e=u,e.__h=!!p,_[_.indexOf(u)]=null),s.__e(N,e,n)}}function ge(t,e){s.__c&&s.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){s.__e(o,n.__v)}})}function Ne(t,e,n,o,i,_,l,u){var p,d,r,v=n.props,a=e.props,c=e.type,f=0;if(c==="svg"&&(i=!0),_!=null){for(;f<_.length;f++)if((p=_[f])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){t=p,_[f]=null;break}}if(t==null){if(c===null)return document.createTextNode(a);t=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),_=null,u=!1}if(c===null)v===a||u&&t.data===a||(t.data=a);else{if(_=_&&T.call(t.childNodes),d=(v=n.props||D).dangerouslySetInnerHTML,r=a.dangerouslySetInnerHTML,!u){if(_!=null)for(v={},f=0;f<t.attributes.length;f++)v[t.attributes[f].name]=t.attributes[f].value;(r||d)&&(r&&(d&&r.__html==d.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(Fe(t,a,v,i,u),r)e.__k=[];else if(f=e.props.children,he(t,Array.isArray(f)?f:[f],e,n,o,i&&c!=="foreignObject",_,l,_?_[0]:n.__k&&C(n,0),u),_!=null)for(f=_.length;f--;)_[f]!=null&&pe(_[f]);u||("value"in a&&(f=a.value)!==void 0&&(f!==t.value||c==="progress"&&!f||c==="option"&&f!==v.value)&&I(t,"value",f,v.value,!1),"checked"in a&&(f=a.checked)!==void 0&&f!==t.checked&&I(t,"checked",f,v.checked,!1))}return t}function be(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){s.__e(o,n)}}function ke(t,e,n){var o,i;if(s.unmount&&s.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||be(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){s.__e(_,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&ke(o[i],e,typeof t.type!="function");n||t.__e==null||pe(t.__e),t.__e=t.__d=void 0}function je(t,e,n){return this.constructor(t,n)}function z(t,e,n){var o,i,_;s.__&&s.__(t,e),i=(o=typeof n=="function")?null:n&&n.__k||e.__k,_=[],V(e,t=(!o&&n||e).__k=U(O,null,[t]),i||D,D,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?T.call(e.childNodes):null,_,!o&&n?n:i?i.__e:e.firstChild,o),ge(_,t)}function xe(t,e){z(t,e,xe)}function De(t,e,n){var o,i,_,l=$({},t.props);for(_ in e)_=="key"?o=e[_]:_=="ref"?i=e[_]:l[_]=e[_];return arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),w(t.type,l,o||t.key,i||t.ref,null)}function Le(t,e){var n={__c:e="__cC"+ae++,__:t,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,_;return this.getChildContext||(i=[],(_={})[e]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(W)},this.sub=function(l){i.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),u&&u.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}T=fe.slice,s={__e:function(t,e,n,o){for(var i,_,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),l=i.__d),l)return i.__E=i}catch(u){t=u}throw t}},ce=0,ue=function(t){return t!=null&&t.constructor===void 0},E.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof t=="function"&&(t=t($({},n),this.props)),t&&$(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),W(this))},E.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),W(this))},E.prototype.render=O,S=[],se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L.__r=0,ae=0;var Ie=Object.freeze(Object.defineProperty({__proto__:null,render:z,hydrate:xe,createElement:U,h:U,Fragment:O,createRef:Oe,get isValidElement(){return ue},Component:E,cloneElement:De,createContext:Le,toChildArray:me,get options(){return s}},Symbol.toStringTag,{value:"Module"})),G,g,M,Y,B=0,$e=[],ee=s.__b,te=s.__r,ne=s.diffed,_e=s.__c,oe=s.unmount;function Ce(t,e){s.__h&&s.__h(g,t,B||e),B=0;var n=g.__H||(g.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function A(t){return B=1,Pe(Se,t)}function Pe(t,e,n){var o=Ce(G++,2);return o.t=t,o.__c||(o.__=[n?n(e):Se(void 0,e),function(i){var _=o.t(o.__[0],i);o.__[0]!==_&&(o.__=[_,o.__[1]],o.__c.setState({}))}],o.__c=g),o.__}function Me(t,e){var n=Ce(G++,3);!s.__s&&We(n.__H,e)&&(n.__=t,n.u=e,g.__H.__h.push(n))}function Ue(){for(var t;t=$e.shift();)if(t.__P)try{t.__H.__h.forEach(j),t.__H.__h.forEach(q),t.__H.__h=[]}catch(e){t.__H.__h=[],s.__e(e,t.__v)}}s.__b=function(t){g=null,ee&&ee(t)},s.__r=function(t){te&&te(t),G=0;var e=(g=t.__c).__H;e&&(M===g?(e.__h=[],g.__h=[],e.__.forEach(function(n){n.o=n.u=void 0})):(e.__.forEach(function(n){n.u&&(n.__H=n.u),n.o&&(n.__=n.o),n.o=n.u=void 0}),e.__h.forEach(j),e.__h.forEach(q),e.__h=[])),M=g},s.diffed=function(t){ne&&ne(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&($e.push(e)!==1&&Y===s.requestAnimationFrame||((Y=s.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(_),re&&cancelAnimationFrame(o),setTimeout(n)},_=setTimeout(i,100);re&&(o=requestAnimationFrame(i))})(Ue)),g=null,M=null},s.__c=function(t,e){e.some(function(n){try{n.__H&&n.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.o&&(o.__=o.o),o.o=o.u=void 0}),n.__h.forEach(j),n.__h=n.__h.filter(function(o){return!o.__||q(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],s.__e(o,n.__v)}}),_e&&_e(t,e)},s.unmount=function(t){oe&&oe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{j(o)}catch(i){e=i}}),e&&s.__e(e,n.__v))};var re=typeof requestAnimationFrame=="function";function j(t){var e=g,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),g=e}function q(t){var e=g;t.__c=t.__(),g=e}function We(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function Se(t,e){return typeof e=="function"?e(t):e}function Be(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:function(){return t[n]}})}),e}var qe=Be(Ie),we,Ee,Ae,R=qe,Re=0;function ie(t,e,n,o,i){var _,l,u={};for(l in e)l=="ref"?_=e[l]:u[l]=e[l];var p={type:t,props:u,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Re,__source:i,__self:o};if(typeof t=="function"&&(_=t.defaultProps))for(l in _)u[l]===void 0&&(u[l]=_[l]);return R.options.vnode&&R.options.vnode(p),p}Ae=R.Fragment,Ee=ie,we=ie;const m=Ee,H=we,Ve=Ae;function ze({pageSize:t,offset:e,onChangeOffset:n}){const[o,i]=A(""),[_,l]=A(1),u=o===""?1:+o,p=()=>{n(u+ +e)},d=()=>{n(-u+ +e)},r=()=>{n(+e-t)},v=()=>{n(+e+t)},a=()=>{n(_-1)},c=f=>x=>{const h=+x.target.value;(h===h||h==="")&&f(x.target.value)};return H("div",{id:"controls",children:[H("div",{children:[m("button",{onClick:r,children:"< Previous page"}),m("button",{onClick:d,children:"< Left"}),m("span",{children:+e+1}),m("input",{placeholder:"increment",type:"text",value:o,onInput:c(i)}),m("button",{onClick:p,children:"Right >"}),m("button",{onClick:v,children:"Next page >"})]}),m("br",{}),H("div",{children:[m("span",{children:"Offset"}),m("input",{type:"text",value:_,onInput:c(l)}),m("button",{onClick:a,children:"Go"})]})]})}function Ge({digits:t,size:e,cellSize:n,isFetching:o}){const i=`repeat(${e}, ${n}px)`;return t=t.slice(0,e*e),m("div",{id:"canvas",style:{gridTemplateColumns:i,gridTemplateRows:i,opacity:o?.6:1},children:t.map((_,l)=>m("div",{style:{backgroundColor:_==1?"black":"white",width:`${n}px`,height:`${n}px`}},l))})}const le=63;function Je(){const[t,e]=A(0),[n,o]=A([]),[i,_]=A(!1),[,l]=Pe(u=>u+1,0);return Me(()=>{(async()=>{_(!0),console.log("fetching page",t+1);const u=await fetch(`https://api.pi.delivery/v1/pi?start=${t}&numberOfDigits=${1e3}&radix=10`,{cache:"force-cache"});if(u.ok){const p=(await u.json()).content.split("").reduce((d,r)=>d+(+r).toString(2).padStart(4,"0"),"");o(p.split(""))}else console.error(u.status,u.statusText,await u.text());_(!1)})()},[t]),H(Ve,{children:[m("h1",{children:"Image from constructed from the digits of PI!"}),localStorage.getItem("__pi_readnotice")!=="true"&&H("footer",{children:["* each digit contributes to 4 pixels on the image"," ",m("a",{href:"#",onClick:()=>(localStorage.setItem("__pi_readnotice","true"),l()),children:"hide"})]}),m(Ge,{digits:n,size:le,cellSize:6,isFetching:i}),m("br",{}),m(ze,{onChangeOffset:u=>e(Math.max(u,0)),pageSize:le,offset:t}),m("br",{})]})}z(m(Je,{}),document.getElementById("app"));