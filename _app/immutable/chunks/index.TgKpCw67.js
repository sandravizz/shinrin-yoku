var C=Object.defineProperty;var T=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,f as v,h as j,i as A,j as B,k as N,l as D,m as H,p as b,q as I,v as P,w as q}from"./scheduler.S4wXxuDW.js";let $=!1;function M(){$=!0}function O(){$=!1}function R(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:R(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const c=[],a=[];let f=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);f>=s;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);c.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<c.length&&a[s].claim_order>=c[l].claim_order;)l++;const o=l<c.length?c[l]:null;e.insertBefore(a[s],o)}}function L(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?L(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e,t,n){e.setAttributeNS("http://www.w3.org/1999/xlink",t,n)}function ae(e){return e.dataset.svelteH}function k(e){return Array.from(e.childNodes)}function F(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,r=!1){F(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function E(e,t,n,i){return S(e,r=>r.nodeName===t,r=>{const c=[];for(let a=0;a<r.attributes.length;a++){const f=r.attributes[a];n[f.name]||c.push(f.name)}c.forEach(a=>r.removeAttribute(a))},()=>i(t))}function ce(e,t,n){return E(e,t,n,V)}function fe(e,t,n){return E(e,t,n,W)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return G(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function de(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function me(e,t){return new e(t)}const m=new Set;let _;function he(){_={r:0,c:[],p:_}}function $e(){_.r||h(_.c),_=_.p}function J(e,t){e&&e.i&&(m.delete(e),e.i(t))}function pe(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const c=e.$$.on_mount.map(I).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),r.forEach(N)}function Q(e,t){const n=e.$$;n.fragment!==null&&(D(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(P.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,r,c,a=null,f=[-1]){const s=H;b(e);const l=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:v(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,d,...g)=>{const w=g.length?g[0]:d;return l.ctx&&r(l.ctx[u],l.ctx[u]=w)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](w),o&&X(e,u)),d}):[],l.update(),o=!0,h(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){M();const u=k(t.target);l.fragment&&l.fragment.l(u),u.forEach(U)}else l.fragment&&l.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),O(),j()}b(s)}class we{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{Q as A,W as B,fe as C,le as D,we as S,k as a,G as b,ce as c,U as d,V as e,ue as f,te as g,L as h,ge as i,oe as j,ne as k,se as l,de as m,ae as n,re as o,pe as p,$e as q,J as r,ie as s,x as t,_e as u,he as v,me as w,ye as x,xe as y,K as z};
