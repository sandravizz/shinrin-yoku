import{s as B,n as W,c as J,d as K,u as P,g as Q,e as X}from"../chunks/scheduler.S4wXxuDW.js";import{S as F,i as U,e as c,s as L,c as f,a as g,d as p,f as q,o as H,m as a,g as G,h as n,y as Y,z as Z,A as ee,u as k,q as z,B as te}from"../chunks/index.UhMsIG6n.js";import{b as T}from"../chunks/entry.3klNTxV3.js";import{p as ae}from"../chunks/stores.5rs668Wz.js";function se(d){let e,l,h,r,u,i,m,_="Home",j,o,t,s,A="About",I,y,E,C,D="Events",w,M,b,V="";return{c(){e=c("header"),l=c("div"),h=L(),r=c("nav"),u=c("ul"),i=c("li"),m=c("a"),m.textContent=_,o=L(),t=c("li"),s=c("a"),s.textContent=A,y=L(),E=c("li"),C=c("a"),C.textContent=D,M=L(),b=c("div"),b.innerHTML=V,this.h()},l($){e=f($,"HEADER",{class:!0});var v=g(e);l=f(v,"DIV",{class:!0}),g(l).forEach(p),h=q(v),r=f(v,"NAV",{class:!0});var N=g(r);u=f(N,"UL",{class:!0});var x=g(u);i=f(x,"LI",{"aria-current":!0,class:!0});var O=g(i);m=f(O,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(m)!=="svelte-1qgn2jd"&&(m.textContent=_),O.forEach(p),o=q(x),t=f(x,"LI",{"aria-current":!0,class:!0});var R=g(t);s=f(R,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(s)!=="svelte-1s0ca2m"&&(s.textContent=A),R.forEach(p),y=q(x),E=f(x,"LI",{"aria-current":!0,class:!0});var S=g(E);C=f(S,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(C)!=="svelte-1mx6wem"&&(C.textContent=D),S.forEach(p),x.forEach(p),N.forEach(p),M=q(v),b=f(v,"DIV",{class:!0,"data-svelte-h":!0}),H(b)!=="svelte-1kf6qyb"&&(b.innerHTML=V),v.forEach(p),this.h()},h(){a(l,"class","corner svelte-1uuf5j3"),a(m,"href",`${T}/`),a(m,"class","svelte-1uuf5j3"),a(i,"aria-current",j=d[0].url.pathname==="/"?"page":void 0),a(i,"class","svelte-1uuf5j3"),a(s,"href",`${T}/about`),a(s,"class","svelte-1uuf5j3"),a(t,"aria-current",I=d[0].url.pathname==="/about"?"page":void 0),a(t,"class","svelte-1uuf5j3"),a(C,"href",`${T}/events`),a(C,"class","svelte-1uuf5j3"),a(E,"aria-current",w=d[0].url.pathname.startsWith("/sverdle")?"page":void 0),a(E,"class","svelte-1uuf5j3"),a(u,"class","svelte-1uuf5j3"),a(r,"class","svelte-1uuf5j3"),a(b,"class","corner svelte-1uuf5j3"),a(e,"class","svelte-1uuf5j3")},m($,v){G($,e,v),n(e,l),n(e,h),n(e,r),n(r,u),n(u,i),n(i,m),n(u,o),n(u,t),n(t,s),n(u,y),n(u,E),n(E,C),n(e,M),n(e,b)},p($,[v]){v&1&&j!==(j=$[0].url.pathname==="/"?"page":void 0)&&a(i,"aria-current",j),v&1&&I!==(I=$[0].url.pathname==="/about"?"page":void 0)&&a(t,"aria-current",I),v&1&&w!==(w=$[0].url.pathname.startsWith("/sverdle")?"page":void 0)&&a(E,"aria-current",w)},i:W,o:W,d($){$&&p(e)}}}function re(d,e,l){let h;return J(d,ae,r=>l(0,h=r)),[h]}class ne extends F{constructor(e){super(),U(this,e,re,se,B,{})}}function le(d){let e,l,h,r,u,i,m='<p>want to join <a href="https://www.meetup.com/lx-urban-gardening/" class="svelte-xoq821">the community.</a></p>',_;l=new ne({});const j=d[1].default,o=K(j,d,d[0],null);return{c(){e=c("div"),Y(l.$$.fragment),h=L(),r=c("main"),o&&o.c(),u=L(),i=c("footer"),i.innerHTML=m,this.h()},l(t){e=f(t,"DIV",{class:!0});var s=g(e);Z(l.$$.fragment,s),h=q(s),r=f(s,"MAIN",{class:!0});var A=g(r);o&&o.l(A),A.forEach(p),u=q(s),i=f(s,"FOOTER",{class:!0,"data-svelte-h":!0}),H(i)!=="svelte-1asa76p"&&(i.innerHTML=m),s.forEach(p),this.h()},h(){a(r,"class","svelte-xoq821"),a(i,"class","svelte-xoq821"),a(e,"class","app svelte-xoq821")},m(t,s){G(t,e,s),ee(l,e,null),n(e,h),n(e,r),o&&o.m(r,null),n(e,u),n(e,i),_=!0},p(t,[s]){o&&o.p&&(!_||s&1)&&P(o,j,t,t[0],_?X(j,t[0],s,null):Q(t[0]),null)},i(t){_||(k(l.$$.fragment,t),k(o,t),_=!0)},o(t){z(l.$$.fragment,t),z(o,t),_=!1},d(t){t&&p(e),te(l),o&&o.d(t)}}}function ue(d,e,l){let{$$slots:h={},$$scope:r}=e;return d.$$set=u=>{"$$scope"in u&&l(0,r=u.$$scope)},[r,h]}class de extends F{constructor(e){super(),U(this,e,ue,le,B,{})}}export{de as component};