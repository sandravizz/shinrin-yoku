import{s as q,a as B,o as U,b as A,t as j}from"../chunks/scheduler.S4wXxuDW.js";import{S as z,i as M,s as W,o as h,f as F,g as b,p,q as R,r as g,d as w,e as G,c as H,a as J,l as D,u as d,t as K,b as Q,j as X,v as L,w as k,x as v,y as I,z as E,A as y}from"../chunks/index.uqymoNHP.js";const Y="modulepreload",Z=function(a){return"/shinrin-yoku/"+a},N={},P=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");i=Promise.all(n.map(t=>{if(t=Z(t),t in N)return;N[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!s)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return i.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,s;var i=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return i&&(e=k(i,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),R()}i?(e=k(i,c(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,s;var i=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=k(i,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),R()}i?(e=k(i,c(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,s;var i=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return i&&(e=k(i,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][1])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{y(l,1)}),R()}i?(e=k(i,c(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[10](null),e&&y(e,t)}}}function O(a){let e,n=a[6]&&S(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(s){e=H(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=J(e);n&&n.l(i),i.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(s,i){b(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=S(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&w(e),n&&n.d()}}}function S(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,s){b(n,e,s)},p(n,s){s&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,s,i,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&O(a);return{c(){n.c(),s=W(),_&&_.c(),i=h()},l(o){n.l(o),s=F(o),_&&_.l(o),i=h()},m(o,u){r[e].m(o,u),b(o,s,u),_&&_.m(o,u),b(o,i,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?r[e].p(o,u):(L(),p(r[m],1,1,()=>{r[m]=null}),R(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),g(n,1),n.m(s.parentNode,s)),o[5]?_?_.p(o,u):(_=O(o),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(o){c||(g(n),c=!0)},o(o){p(n),c=!1},d(o){o&&(w(s),w(i)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(s.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=s.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function T(f){A[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function V(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,s=f.stores),"page"in f&&n(9,i=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,c,r,l,_,o,u,m,s,i,T,V,C]}class oe extends z{constructor(e){super(),M(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>P(()=>import("../nodes/0.L-jZnsD-.js"),__vite__mapDeps([0,1,2,3,4,5])),()=>P(()=>import("../nodes/1.ms1q7nxb.js"),__vite__mapDeps([6,1,2,4,3])),()=>P(()=>import("../nodes/2.KG0p4hgL.js"),__vite__mapDeps([7,1,2,8])),()=>P(()=>import("../nodes/3.JVujvfWj.js"),__vite__mapDeps([9,1,2,10])),()=>P(()=>import("../nodes/4.ruN3gjs2.js"),__vite__mapDeps([11,1,2]))],le=[],fe={"/":[2],"/about":[3],"/events":[-5]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.L-jZnsD-.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.uqymoNHP.js","_app/immutable/chunks/entry.1eTTBDlE.js","_app/immutable/chunks/stores.6ruarQb4.js","_app/immutable/assets/0.QuY-9oDC.css","_app/immutable/nodes/1.ms1q7nxb.js","_app/immutable/nodes/2.KG0p4hgL.js","_app/immutable/assets/2.RLeGm0nF.css","_app/immutable/nodes/3.JVujvfWj.js","_app/immutable/assets/3.Rfxew2IT.css","_app/immutable/nodes/4.ruN3gjs2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
