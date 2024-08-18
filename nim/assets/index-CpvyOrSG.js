var Ie=Object.defineProperty;var De=(t,e,n)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>De(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function E(){}const Me=t=>t;function Re(t,e){for(const n in e)t[n]=e[n];return t}function xe(t){return t()}function _e(){return Object.create(null)}function L(t){t.forEach(xe)}function se(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ze(t){return Object.keys(t).length===0}function Te(t,e,n,l){if(t){const r=Se(t,e,n,l);return t[0](r)}}function Se(t,e,n,l){return t[1]&&l?Re(n.ctx.slice(),t[1](l(e))):n.ctx}function qe(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let i=0;i<o;i+=1)s[i]=e.dirty[i]|r[i];return s}return e.dirty|r}return e.dirty}function Fe(t,e,n,l,r,s){if(r){const o=Se(e,n,l,s);t.p(o,r)}}function Ge(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}const je=typeof window<"u";let Ve=je?()=>window.performance.now():()=>Date.now(),ae=je?t=>requestAnimationFrame(t):E;const z=new Set;function Ae(t){z.forEach(e=>{e.c(t)||(z.delete(e),e.f())}),z.size!==0&&ae(Ae)}function Ye(t){let e;return z.size===0&&ae(Ae),{promise:new Promise(n=>{z.add(e={c:t,f:n})}),abort(){z.delete(e)}}}function b(t,e){t.appendChild(e)}function Ne(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ze(t){const e=v("style");return e.textContent="/* empty */",Ke(Ne(t),e),e.sheet}function Ke(t,e){return b(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function Be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function x(){return q(" ")}function I(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function We(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function C(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Oe(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}const le=new Map;let re=0;function Je(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ue(t,e){const n={stylesheet:Ze(e),rules:{}};return le.set(t,n),n}function me(t,e,n,l,r,s,o,i=0){const c=16.666/l;let _=`{
`;for(let u=0;u<=1;u+=c){const m=e+(n-e)*s(u);_+=u*100+`%{${o(m,1-m)}}
`}const g=_+`100% {${o(n,1-n)}}
}`,p=`__svelte_${Je(g)}_${i}`,a=Ne(t),{stylesheet:h,rules:f}=le.get(a)||Ue(a,t);f[p]||(f[p]=!0,h.insertRule(`@keyframes ${p} ${g}`,h.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${p} ${l}ms linear ${r}ms 1 both`,re+=1,p}function Qe(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-l.length;r&&(t.style.animation=l.join(", "),re-=r,re||Xe())}function Xe(){ae(()=>{re||(le.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&$(e)}),le.clear())})}let Q;function U(t){Q=t}function et(){if(!Q)throw new Error("Function called outside component initialization");return Q}function Le(){const t=et();return(e,n,{cancelable:l=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=Oe(e,n,{cancelable:l});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}const R=[],pe=[];let T=[];const ge=[],tt=Promise.resolve();let fe=!1;function nt(){fe||(fe=!0,tt.then(He))}function X(t){T.push(t)}const ue=new Set;let D=0;function He(){if(D!==0)return;const t=Q;do{try{for(;D<R.length;){const e=R[D];D++,U(e),lt(e.$$)}}catch(e){throw R.length=0,D=0,e}for(U(null),R.length=0,D=0;pe.length;)pe.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];ue.has(n)||(ue.add(n),n())}T.length=0}while(R.length);for(;ge.length;)ge.pop()();fe=!1,ue.clear(),U(t)}function lt(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function rt(t){const e=[],n=[];T.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),T=e}let J;function st(){return J||(J=Promise.resolve(),J.then(()=>{J=null})),J}function ce(t,e,n){t.dispatchEvent(Oe(`${e?"intro":"outro"}${n}`))}const ne=new Set;let O;function de(){O={r:0,c:[],p:O}}function he(){O.r||L(O.c),O=O.p}function M(t,e){t&&t.i&&(ne.delete(t),t.i(e))}function S(t,e,n,l){if(t&&t.o){if(ne.has(t))return;ne.add(t),O.c.push(()=>{ne.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const ot={duration:0};function ve(t,e,n,l){let s=e(t,n,{direction:"both"}),o=l?0:1,i=null,c=null,_=null,g;function p(){_&&Qe(t,_)}function a(f,d){const u=f.b-o;return d*=Math.abs(u),{a:o,b:f.b,d:u,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:u=300,easing:m=Me,tick:w=E,css:j}=s||ot,B={start:Ve()+d,b:f};f||(B.group=O,O.r+=1),"inert"in t&&(f?g!==void 0&&(t.inert=g):(g=t.inert,t.inert=!0)),i||c?c=B:(j&&(p(),_=me(t,o,f,u,d,m,j)),f&&w(0,1),i=a(B,u),X(()=>ce(t,f,"start")),Ye(H=>{if(c&&H>c.start&&(i=a(c,u),c=null,ce(t,i.b,"start"),j&&(p(),_=me(t,o,i.b,i.duration,0,m,s.css))),i){if(H>=i.end)w(o=i.b,1-o),ce(t,i.b,"end"),c||(i.b?p():--i.group.r||L(i.group.c)),i=null;else if(H>=i.start){const W=H-i.start;o=i.a+i.d*m(W/i.duration),w(o,1-o)}}return!!(i||c)}))}return{run(f){se(s)?st().then(()=>{s=s({direction:f?"in":"out"}),h(f)}):h(f)},end(){p(),i=c=null}}}function F(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function it(t,e){S(t,1,1,()=>{e.delete(t.key)})}function ut(t,e,n,l,r,s,o,i,c,_,g,p){let a=t.length,h=s.length,f=a;const d={};for(;f--;)d[t[f].key]=f;const u=[],m=new Map,w=new Map,j=[];for(f=h;f--;){const P=p(r,s,f),A=n(P);let N=o.get(A);N?j.push(()=>N.p(P,e)):(N=_(A,P),N.c()),m.set(A,u[f]=N),A in d&&w.set(A,Math.abs(f-d[A]))}const B=new Set,H=new Set;function W(P){M(P,1),P.m(i,g),o.set(P.key,P),g=P.first,h--}for(;a&&h;){const P=u[h-1],A=t[a-1],N=P.key,te=A.key;P===A?(g=P.first,a--,h--):m.has(te)?!o.has(N)||B.has(N)?W(P):H.has(te)?a--:w.get(N)>w.get(te)?(H.add(N),W(P)):(B.add(te),a--):(c(A,o),a--)}for(;a--;){const P=t[a];m.has(P.key)||c(P,o)}for(;h;)W(u[h-1]);return L(j),u}function ee(t){t&&t.c()}function V(t,e,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),X(()=>{const s=t.$$.on_mount.map(xe).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...s):L(s),t.$$.on_mount=[]}),r.forEach(X)}function Y(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(R.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,l,r,s,o=null,i=[-1]){const c=Q;U(t);const _=t.$$={fragment:null,ctx:[],props:s,update:E,not_equal:r,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:_e(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};o&&o(_.root);let g=!1;if(_.ctx=n?n(t,e.props||{},(p,a,...h)=>{const f=h.length?h[0]:a;return _.ctx&&r(_.ctx[p],_.ctx[p]=f)&&(!_.skip_bound&&_.bound[p]&&_.bound[p](f),g&&ct(t,p)),a}):[],_.update(),g=!0,L(_.before_update),_.fragment=l?l(_.ctx):!1,e.target){if(e.hydrate){const p=We(e.target);_.fragment&&_.fragment.l(p),p.forEach($)}else _.fragment&&_.fragment.c();e.intro&&M(t.$$.fragment),V(t,e.target,e.anchor),He()}U(c)}class K{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){Y(this,1),this.$destroy=E}$on(e,n){if(!se(n))return E;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);function at(t){let e,n,l,r;const s=t[2].default,o=Te(s,t,t[1],null);return{c(){e=v("div"),n=v("div"),l=v("div"),o&&o.c(),y(l,"class","h svelte-2si2nv"),C(l,"aspect-ratio",t[0]),y(n,"class","w svelte-2si2nv"),C(n,"aspect-ratio",t[0]),y(e,"class","container svelte-2si2nv")},m(i,c){k(i,e,c),b(e,n),b(n,l),o&&o.m(l,null),r=!0},p(i,[c]){o&&o.p&&(!r||c&2)&&Fe(o,s,i,i[1],r?qe(s,i[1],c,null):Ge(i[1]),null),c&1&&C(l,"aspect-ratio",i[0]),c&1&&C(n,"aspect-ratio",i[0])},i(i){r||(M(o,i),r=!0)},o(i){S(o,i),r=!1},d(i){i&&$(e),o&&o.d(i)}}}function dt(t,e,n){let{$$slots:l={},$$scope:r}=e,{ratio:s}=e;return t.$$set=o=>{"ratio"in o&&n(0,s=o.ratio),"$$scope"in o&&n(1,r=o.$$scope)},[s,r,l]}class ht extends K{constructor(e){super(),Z(this,e,dt,at,G,{ratio:0})}}const _t="/assets/stone2-C_V_WJKm.svg";function mt(t){let e,n=`url(${_t})`,l=`hue-rotate(${t[0]}deg)`;return{c(){e=v("div"),y(e,"class","svelte-12cvtz6"),C(e,"background-image",n),C(e,"filter",l)},m(r,s){k(r,e,s)},p(r,[s]){s&1&&l!==(l=`hue-rotate(${r[0]}deg)`)&&C(e,"filter",l)},i:E,o:E,d(r){r&&$(e)}}}function pt(t,e,n){let{hue:l}=e;return t.$$set=r=>{"hue"in r&&n(0,l=r.hue)},[l]}class gt extends K{constructor(e){super(),Z(this,e,pt,mt,G,{hue:0})}}function vt(t){const e=t.filter(n=>n>1).length;if(e>1){const n=t.reduce((r,s)=>r^s,0);for(let r=0;r<t.length;r++){const s=t[r]^n;if(s<t[r])return[r,t[r]-s]}return[Math.floor(Math.random()*t.length),1]}else if(e==1){const n=t.findIndex(l=>l>1);return[n,t[n]-t.length%2]}else return[0,1]}function ye(t,{delay:e=0,duration:n=400,easing:l=Me}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:s=>`opacity: ${s*r}`}}function be(t,e,n){const l=t.slice();return l[13]=e[n],l[15]=n,l}function we(t,e,n){const l=t.slice();return l[16]=e[n],l[18]=n,l}function $e(t){var i;let e,n,l,r=`calc(${t[6][t[15]][t[18]].x} * 150%) calc(${t[6][t[15]][t[18]].y} * 150%)`,s=`saturate(${((i=t[7])==null?void 0:i.heap)===t[15]&&t[18]<t[7].amount?0:100}%)`,o;return n=new gt({props:{hue:t[13].id*360/t[0].length}}),{c(){var c;e=v("div"),ee(n.$$.fragment),y(e,"class","stone svelte-x1obrd"),C(e,"translate",r),C(e,"filter",s),C(e,"opacity",((c=t[7])==null?void 0:c.heap)===t[15]&&t[18]<t[7].amount?.5:1)},m(c,_){k(c,e,_),V(n,e,null),o=!0},p(c,_){var p,a;const g={};_&17&&(g.hue=c[13].id*360/c[0].length),n.$set(g),_&80&&r!==(r=`calc(${c[6][c[15]][c[18]].x} * 150%) calc(${c[6][c[15]][c[18]].y} * 150%)`)&&C(e,"translate",r),_&144&&s!==(s=`saturate(${((p=c[7])==null?void 0:p.heap)===c[15]&&c[18]<c[7].amount?0:100}%)`)&&C(e,"filter",s),_&144&&C(e,"opacity",((a=c[7])==null?void 0:a.heap)===c[15]&&c[18]<c[7].amount?.5:1)},i(c){o||(M(n.$$.fragment,c),c&&X(()=>{o&&(l||(l=ve(e,ye,{duration:200},!0)),l.run(1))}),o=!0)},o(c){S(n.$$.fragment,c),c&&(l||(l=ve(e,ye,{duration:200},!1)),l.run(0)),o=!1},d(c){c&&$(e),Y(n),c&&l&&l.end()}}}function ke(t,e){let n,l,r,s=e[13].value+"",o,i=`calc(${e[5][e[15]].x} * 125%) calc(${e[5][e[15]].y} * 125%)`,c,_,g,p=F(Array(e[13].value)),a=[];for(let f=0;f<p.length;f+=1)a[f]=$e(we(e,p,f));const h=f=>S(a[f],1,1,()=>{a[f]=null});return{key:t,first:null,c(){n=v("div");for(let f=0;f<a.length;f+=1)a[f].c();l=x(),r=v("div"),o=q(s),y(r,"class","amount svelte-x1obrd"),y(n,"class","heap svelte-x1obrd"),C(n,"translate",i),this.first=n},m(f,d){k(f,n,d);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,null);b(n,l),b(n,r),b(r,o),c=!0,_||(g=I(n,"click",function(){se(e[8](e[15]))&&e[8](e[15]).apply(this,arguments)}),_=!0)},p(f,d){if(e=f,d&209){p=F(Array(e[13].value));let u;for(u=0;u<p.length;u+=1){const m=we(e,p,u);a[u]?(a[u].p(m,d),M(a[u],1)):(a[u]=$e(m),a[u].c(),M(a[u],1),a[u].m(n,l))}for(de(),u=p.length;u<a.length;u+=1)h(u);he()}(!c||d&16)&&s!==(s=e[13].value+"")&&oe(o,s),d&48&&i!==(i=`calc(${e[5][e[15]].x} * 125%) calc(${e[5][e[15]].y} * 125%)`)&&C(n,"translate",i)},i(f){if(!c){for(let d=0;d<p.length;d+=1)M(a[d]);c=!0}},o(f){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)S(a[d]);c=!1},d(f){f&&$(n),Be(a,f),_=!1,g()}}}function yt(t){let e,n=t[1]?"Bot's turn":"Player 2's turn",l,r,s;return{c(){e=v("div"),l=q(n),r=x(),s=v("div"),s.textContent="Click to nim",y(e,"class","svelte-x1obrd"),y(s,"class","note svelte-x1obrd")},m(o,i){k(o,e,i),b(e,l),k(o,r,i),k(o,s,i)},p(o,i){i&2&&n!==(n=o[1]?"Bot's turn":"Player 2's turn")&&oe(l,n)},d(o){o&&($(e),$(r),$(s))}}}function bt(t){let e,n=t[1]?"Your turn":"Player 1's turn",l;return{c(){e=v("div"),l=q(n),y(e,"class","svelte-x1obrd")},m(r,s){k(r,e,s),b(e,l)},p(r,s){s&2&&n!==(n=r[1]?"Your turn":"Player 1's turn")&&oe(l,n)},d(r){r&&$(e)}}}function wt(t){let e,n,l,r,s;return{c(){e=v("div"),n=q(t[3]),l=q(" wins!"),r=x(),s=v("div"),s.textContent="Click to play again",y(e,"class","svelte-x1obrd"),y(s,"class","note svelte-x1obrd")},m(o,i){k(o,e,i),b(e,n),b(e,l),k(o,r,i),k(o,s,i)},p(o,i){i&8&&oe(n,o[3])},d(o){o&&($(e),$(r),$(s))}}}function Pe(t){let e,n,l;return{c(){e=v("div"),e.textContent="Select heap",n=x(),l=v("div"),l.textContent="Click here to continue",y(e,"class","note svelte-x1obrd"),y(l,"class","note svelte-x1obrd")},m(r,s){k(r,e,s),k(r,n,s),k(r,l,s)},d(r){r&&($(e),$(n),$(l))}}}function $t(t){let e,n=[],l=new Map,r,s,o,i,c,_,g=F(t[4]);const p=u=>u[13].id;for(let u=0;u<g.length;u+=1){let m=be(t,g,u),w=p(m);l.set(w,n[u]=ke(w,m))}function a(u,m){return u[3]?wt:u[2]?bt:yt}let h=a(t),f=h(t),d=!t[3]&&Pe();return{c(){e=v("div");for(let u=0;u<n.length;u+=1)n[u].c();r=x(),s=v("div"),f.c(),o=x(),d&&d.c(),y(s,"class","center svelte-x1obrd"),y(e,"class","heaps svelte-x1obrd")},m(u,m){k(u,e,m);for(let w=0;w<n.length;w+=1)n[w]&&n[w].m(e,null);b(e,r),b(e,s),f.m(s,null),b(s,o),d&&d.m(s,null),i=!0,c||(_=I(s,"click",t[9](!1)),c=!0)},p(u,m){m&497&&(g=F(u[4]),de(),n=ut(n,m,p,1,u,g,l,e,it,ke,r,be),he()),h===(h=a(u))&&f?f.p(u,m):(f.d(1),f=h(u),f&&(f.c(),f.m(s,o))),u[3]?d&&(d.d(1),d=null):d||(d=Pe(),d.c(),d.m(s,null))},i(u){if(!i){for(let m=0;m<g.length;m+=1)M(n[m]);i=!0}},o(u){for(let m=0;m<n.length;m+=1)S(n[m]);i=!1},d(u){u&&$(e);for(let m=0;m<n.length;m+=1)n[m].d();f.d(),d&&d.d(),c=!1,_()}}}function kt(t){let e,n;return e=new ht({props:{ratio:1,$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){ee(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,[r]){const s={};r&524543&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Pt(t,e,n){let{start:l}=e,{bot:r}=e,s=!0,o,i=l.map((u,m)=>({value:u,id:m})).filter(u=>u.value>0),c=p(),_=a(),g=null;function p(){const u=[];for(let m=0;m<i.length;m++){const w=(m/i.length-.25)*Math.PI*2;u.push({x:Math.cos(w),y:Math.sin(w)})}return u}function a(){const u=[];for(let m=0;m<i.length;m++){let w=[];for(let j=0;j<i[m].value;j++){const B=(j/i[m].value-.25)*Math.PI*2;w.push({x:Math.cos(B),y:Math.sin(B)})}u.push(w)}return u}const h=u=>()=>{!s&&r||o||(g==null||g.heap!=u?n(7,g={heap:u,amount:1}):g.amount!=i[u].value&&n(7,g.amount++,g),n(7,g={...g}))},f=u=>()=>{if(o){n(4,i=l.map((m,w)=>({value:m,id:w})).filter(m=>m.value>0)),n(5,c=p()),n(6,_=a()),n(2,s=!0),n(3,o=void 0);return}r&&!s&&!u||g!=null&&(n(4,i[g.heap].value-=g.amount,i),n(7,g=null),n(4,i=i.filter(m=>m.value>0)),n(5,c=p()),n(6,_=a()),n(2,s=!s),i.length==0&&(s?n(3,o=r?"Player":"Player 1"):n(3,o=r?"Bot":"Player 2")),i.length==1&&i[0].value==1&&(s?n(3,o=r?"Bot":"Player 2"):n(3,o=r?"Player":"Player 1")),r&&!s&&!o&&d())};async function d(){await new Promise(m=>setTimeout(m,1e3));const u=vt(i.map(m=>m.value));n(7,g={heap:u[0],amount:u[1]}),await new Promise(m=>setTimeout(m,1e3)),f(!0)()}return t.$$set=u=>{"start"in u&&n(0,l=u.start),"bot"in u&&n(1,r=u.bot)},[l,r,s,o,i,c,_,g,h,f]}class Ct extends K{constructor(e){super(),Z(this,e,Pt,kt,G,{start:0,bot:1})}}function Ce(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ee(t){let e,n,l;return{c(){e=v("button"),e.textContent=`${t[4].join(" | ")}`,y(e,"class","svelte-1joh39a")},m(r,s){k(r,e,s),n||(l=I(e,"click",t[0](t[4])),n=!0)},p(r,s){t=r},d(r){r&&$(e),n=!1,l()}}}function Et(t){let e,n,l,r,s,o,i,c,_,g,p=F(t[1]),a=[];for(let h=0;h<p.length;h+=1)a[h]=Ee(Ce(t,p,h));return{c(){e=v("div"),n=v("div"),n.textContent="NIM",l=x(),r=v("div"),r.textContent="Select a layout to start the game",s=x(),o=v("div");for(let h=0;h<a.length;h+=1)a[h].c();i=x(),c=v("button"),c.textContent="Custom",y(n,"class","title svelte-1joh39a"),y(r,"class","note svelte-1joh39a"),y(c,"class","svelte-1joh39a"),y(o,"class","options svelte-1joh39a"),y(e,"class","outer svelte-1joh39a")},m(h,f){k(h,e,f),b(e,n),b(e,l),b(e,r),b(e,s),b(e,o);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(o,null);b(o,i),b(o,c),_||(g=I(c,"click",t[2]),_=!0)},p(h,[f]){if(f&3){p=F(h[1]);let d;for(d=0;d<p.length;d+=1){const u=Ce(h,p,d);a[d]?a[d].p(u,f):(a[d]=Ee(u),a[d].c(),a[d].m(o,i))}for(;d<a.length;d+=1)a[d].d(1);a.length=p.length}},i:E,o:E,d(h){h&&$(e),Be(a,h),_=!1,g()}}}function Mt(t){const e=Le(),n=s=>()=>{e("next",s)},l=[[3,4,5],[3,4,5,6,7],[5,10,12],[4,8,11,12,13]];function r(){const s=prompt("Enter the number of stones in each heap, separated by spaces").split(" ").map(Number);if(s.some(isNaN)){alert("Invalid input");return}n(s)()}return[n,l,r]}class xt extends K{constructor(e){super(),Z(this,e,Mt,Et,G,{})}}function St(t){let e,n,l,r,s,o,i,c,_;return{c(){e=v("div"),n=v("div"),n.textContent="Play with",l=x(),r=v("div"),s=v("button"),s.textContent="Player",o=x(),i=v("button"),i.textContent="Bot",y(n,"class","note svelte-kxkl8r"),y(s,"class","svelte-kxkl8r"),y(i,"class","svelte-kxkl8r"),y(r,"class","buttons svelte-kxkl8r"),y(e,"class","outer svelte-kxkl8r")},m(g,p){k(g,e,p),b(e,n),b(e,l),b(e,r),b(r,s),b(r,o),b(r,i),c||(_=[I(s,"click",t[0](!1)),I(i,"click",t[0](!0))],c=!0)},p:E,i:E,o:E,d(g){g&&$(e),c=!1,L(_)}}}function jt(t){const e=Le();return[l=>()=>{e("next",l)}]}class At extends K{constructor(e){super(),Z(this,e,jt,St,G,{})}}const Nt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23EEE'%3e%3cpath%20d='M240-200h120v-240h240v240h120v-360L480-740%20240-560v360Zm-80%2080v-480l320-240%20320%20240v480H520v-240h-80v240H160Zm320-350Z'/%3e%3c/svg%3e";function Bt(t){let e,n;return e=new Ct({props:{start:t[0],bot:t[1]}}),{c(){ee(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p(l,r){const s={};r&1&&(s.start=l[0]),r&2&&(s.bot=l[1]),e.$set(s)},i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Ot(t){let e,n;return e=new At({}),e.$on("next",t[4]),{c(){ee(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p:E,i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Lt(t){let e,n;return e=new xt({}),e.$on("next",t[3]),{c(){ee(e.$$.fragment)},m(l,r){V(e,l,r),n=!0},p:E,i(l){n||(M(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Ht(t){let e,n,l,r="url(https://images.unsplash.com/photo-1660914256311-918659fae88f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",s,o,i,c,_;const g=[Lt,Ot,Bt],p=[];function a(h,f){return h[2]==="home"?0:h[2]==="pb"?1:h[2]==="game"?2:-1}return~(n=a(t))&&(l=p[n]=g[n](t)),{c(){e=v("div"),l&&l.c(),s=x(),o=v("div"),o.innerHTML=`<img src="${Nt}" alt="Home" width="100%" height="100%"/>`,y(e,"class","outer svelte-v4revr"),C(e,"background-image",r),y(o,"class","homeBtn svelte-v4revr")},m(h,f){k(h,e,f),~n&&p[n].m(e,null),k(h,s,f),k(h,o,f),i=!0,c||(_=I(o,"click",t[5]),c=!0)},p(h,[f]){let d=n;n=a(h),n===d?~n&&p[n].p(h,f):(l&&(de(),S(p[d],1,1,()=>{p[d]=null}),he()),~n?(l=p[n],l?l.p(h,f):(l=p[n]=g[n](h),l.c()),M(l,1),l.m(e,null)):l=null)},i(h){i||(M(l),i=!0)},o(h){S(l),i=!1},d(h){h&&($(e),$(s),$(o)),~n&&p[n].d(),c=!1,_()}}}function It(t,e,n){let l=[],r=!0,s="home";return[l,r,s,_=>{n(0,l=_.detail),n(2,s="pb")},_=>{n(1,r=_.detail),n(2,s="game")},()=>n(2,s="home")]}class Dt extends K{constructor(e){super(),Z(this,e,It,Ht,G,{})}}new Dt({target:document.getElementById("app")});