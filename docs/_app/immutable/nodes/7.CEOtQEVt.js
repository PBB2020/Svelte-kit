import{s as ft,n as at,r as ht,b as ot,o as pt}from"../chunks/scheduler.BvLojk_z.js";import{S as _t,i as mt,e as v,s as q,w as ut,c as b,o as H,b as E,l as N,d as _,f as a,j as M,g as s,q as F,p as K,x as yt,r as bt,u as gt,k as tt,m as et,n as lt}from"../chunks/index.BUGUDjDu.js";import{e as dt}from"../chunks/each.D6YF6ztN.js";import{s as st,i as Ct}from"../chunks/stores.DqOuW_qB.js";function ct(r,t,o){const c=r.slice();return c[11]=t[o],c[13]=o,c}function kt(r){let t,o="A bevásárlólista üres.";return{c(){t=v("p"),t.textContent=o},l(c){t=b(c,"P",{"data-svelte-h":!0}),H(t)!=="svelte-j6mf5"&&(t.textContent=o)},m(c,h){M(c,t,h)},p:at,d(c){c&&_(t)}}}function Tt(r){let t,o,c='<tr><th scope="col" class="svelte-1vbbda2">Tétel neve</th> <th scope="col" class="svelte-1vbbda2">Mennyiség</th> <th scope="col" class="svelte-1vbbda2">Mértékegység</th> <th scope="col" class="svelte-1vbbda2">Készlet helye</th> <th scope="col" class="svelte-1vbbda2">Akciók</th></tr>',h,u,g=dt(r[1]),d=[];for(let e=0;e<g.length;e+=1)d[e]=vt(ct(r,g,e));return{c(){t=v("table"),o=v("thead"),o.innerHTML=c,h=q(),u=v("tbody");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=b(e,"TABLE",{class:!0});var f=N(t);o=b(f,"THEAD",{"data-svelte-h":!0}),H(o)!=="svelte-1pckibj"&&(o.innerHTML=c),h=E(f),u=b(f,"TBODY",{});var l=N(u);for(let T=0;T<d.length;T+=1)d[T].l(l);l.forEach(_),f.forEach(_),this.h()},h(){a(t,"class","table table-bordered svelte-1vbbda2")},m(e,f){M(e,t,f),s(t,o),s(t,h),s(t,u);for(let l=0;l<d.length;l+=1)d[l]&&d[l].m(u,null)},p(e,f){if(f&18){g=dt(e[1]);let l;for(l=0;l<g.length;l+=1){const T=ct(e,g,l);d[l]?d[l].p(T,f):(d[l]=vt(T),d[l].c(),d[l].m(u,null))}for(;l<d.length;l+=1)d[l].d(1);d.length=g.length}},d(e){e&&_(t),gt(d,e)}}}function vt(r){let t,o,c=(r[11].item||"N/A")+"",h,u,g,d=(r[11].quantity||"N/A")+"",e,f,l,T=(r[11].unit||"N/A")+"",S,n,A,p=(r[11].store||"N/A")+"",L,O,w,m,P="Törlés",D,B,R;function Y(){return r[8](r[13])}return{c(){t=v("tr"),o=v("td"),h=tt(c),u=q(),g=v("td"),e=tt(d),f=q(),l=v("td"),S=tt(T),n=q(),A=v("td"),L=tt(p),O=q(),w=v("td"),m=v("button"),m.textContent=P,D=q(),this.h()},l(C){t=b(C,"TR",{});var y=N(t);o=b(y,"TD",{class:!0});var z=N(o);h=et(z,c),z.forEach(_),u=E(y),g=b(y,"TD",{class:!0});var G=N(g);e=et(G,d),G.forEach(_),f=E(y),l=b(y,"TD",{class:!0});var U=N(l);S=et(U,T),U.forEach(_),n=E(y),A=b(y,"TD",{class:!0});var x=N(A);L=et(x,p),x.forEach(_),O=E(y),w=b(y,"TD",{class:!0});var J=N(w);m=b(J,"BUTTON",{class:!0,"data-svelte-h":!0}),H(m)!=="svelte-1869ca9"&&(m.textContent=P),J.forEach(_),D=E(y),y.forEach(_),this.h()},h(){a(o,"class","svelte-1vbbda2"),a(g,"class","svelte-1vbbda2"),a(l,"class","svelte-1vbbda2"),a(A,"class","svelte-1vbbda2"),a(m,"class","btn btn-danger btn-sm svelte-1vbbda2"),a(w,"class","svelte-1vbbda2")},m(C,y){M(C,t,y),s(t,o),s(o,h),s(t,u),s(t,g),s(g,e),s(t,f),s(t,l),s(l,S),s(t,n),s(t,A),s(A,L),s(t,O),s(t,w),s(w,m),s(t,D),B||(R=K(m,"click",Y),B=!0)},p(C,y){r=C,y&2&&c!==(c=(r[11].item||"N/A")+"")&&lt(h,c),y&2&&d!==(d=(r[11].quantity||"N/A")+"")&&lt(e,d),y&2&&T!==(T=(r[11].unit||"N/A")+"")&&lt(S,T),y&2&&p!==(p=(r[11].store||"N/A")+"")&&lt(L,p)},d(C){C&&_(t),B=!1,R()}}}function qt(r){let t,o="Bevásárlólista",c,h,u,g="Új tétel hozzáadása",d,e,f,l,T="Tétel neve",S,n,A,p,L,O="Mennyiség",w,m,P,D,B,R="Mértékegység",Y,C,y,z,G="Hozzáadás",U,x,J="Frissítés",Q,V,nt,rt;function it(i,k){return i[1].length>0?Tt:kt}let W=it(r),I=W(r);return{c(){t=v("h1"),t.textContent=o,c=q(),h=v("div"),u=v("h2"),u.textContent=g,d=q(),e=v("form"),f=v("div"),l=v("label"),l.textContent=T,S=q(),n=v("input"),A=q(),p=v("div"),L=v("label"),L.textContent=O,w=q(),m=v("input"),P=q(),D=v("div"),B=v("label"),B.textContent=R,Y=q(),C=v("input"),y=q(),z=v("button"),z.textContent=G,U=q(),x=v("button"),x.textContent=J,Q=q(),I.c(),V=ut(),this.h()},l(i){t=b(i,"H1",{"data-svelte-h":!0}),H(t)!=="svelte-1sukcvi"&&(t.textContent=o),c=E(i),h=b(i,"DIV",{class:!0});var k=N(h);u=b(k,"H2",{"data-svelte-h":!0}),H(u)!=="svelte-l8dz56"&&(u.textContent=g),d=E(k),e=b(k,"FORM",{});var j=N(e);f=b(j,"DIV",{class:!0});var X=N(f);l=b(X,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),H(l)!=="svelte-1tm2re5"&&(l.textContent=T),S=E(X),n=b(X,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),X.forEach(_),A=E(j),p=b(j,"DIV",{class:!0});var Z=N(p);L=b(Z,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),H(L)!=="svelte-18j6uc4"&&(L.textContent=O),w=E(Z),m=b(Z,"INPUT",{id:!0,type:!0,min:!0,placeholder:!0,class:!0}),Z.forEach(_),P=E(j),D=b(j,"DIV",{class:!0});var $=N(D);B=b($,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),H(B)!=="svelte-1av1js8"&&(B.textContent=R),Y=E($),C=b($,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),$.forEach(_),y=E(j),z=b(j,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),H(z)!=="svelte-11no928"&&(z.textContent=G),j.forEach(_),k.forEach(_),U=E(i),x=b(i,"BUTTON",{class:!0,"data-svelte-h":!0}),H(x)!=="svelte-yrs4g0"&&(x.textContent=J),Q=E(i),I.l(i),V=ut(),this.h()},h(){a(l,"for","item"),a(l,"class","svelte-1vbbda2"),a(n,"id","item"),a(n,"type","text"),a(n,"placeholder",""),n.required=!0,a(n,"class","svelte-1vbbda2"),a(f,"class","form-group svelte-1vbbda2"),a(L,"for","quantity"),a(L,"class","svelte-1vbbda2"),a(m,"id","quantity"),a(m,"type","number"),a(m,"min","1"),a(m,"placeholder",""),m.required=!0,a(m,"class","svelte-1vbbda2"),a(p,"class","form-group svelte-1vbbda2"),a(B,"for","unit"),a(B,"class","svelte-1vbbda2"),a(C,"id","unit"),a(C,"type","text"),a(C,"placeholder",""),C.required=!0,a(C,"class","svelte-1vbbda2"),a(D,"class","form-group svelte-1vbbda2"),a(z,"type","submit"),a(z,"class","btn btn-primary svelte-1vbbda2"),a(h,"class","new-item-form svelte-1vbbda2"),a(x,"class","btn btn-primary mb-3 svelte-1vbbda2")},m(i,k){M(i,t,k),M(i,c,k),M(i,h,k),s(h,u),s(h,d),s(h,e),s(e,f),s(f,l),s(f,S),s(f,n),F(n,r[0].item),s(e,A),s(e,p),s(p,L),s(p,w),s(p,m),F(m,r[0].quantity),s(e,P),s(e,D),s(D,B),s(D,Y),s(D,C),F(C,r[0].unit),s(e,y),s(e,z),M(i,U,k),M(i,x,k),M(i,Q,k),I.m(i,k),M(i,V,k),nt||(rt=[K(n,"input",r[5]),K(m,"input",r[6]),K(C,"input",r[7]),K(e,"submit",yt(r[3])),K(x,"click",r[2])],nt=!0)},p(i,[k]){k&1&&n.value!==i[0].item&&F(n,i[0].item),k&1&&bt(m.value)!==i[0].quantity&&F(m,i[0].quantity),k&1&&C.value!==i[0].unit&&F(C,i[0].unit),W===(W=it(i))&&I?I.p(i,k):(I.d(1),I=W(i),I&&(I.c(),I.m(V.parentNode,V)))},i:at,o:at,d(i){i&&(_(t),_(c),_(h),_(U),_(x),_(Q),_(V)),I.d(i),nt=!1,ht(rt)}}}function Et(r,t,o){let c,h;ot(r,st,n=>o(1,c=n)),ot(r,Ct,n=>o(9,h=n));let u={item:"",quantity:1,unit:"",store:"Bevásárlólista"};const g=()=>{console.log("updateShoppingList függvény fut!");try{const n=h||{cleaning:[],foods:[],household:[]};console.log("Aktuális inventoryData:",n);const A=[...(n.cleaning||[]).filter(p=>p.quantity<2),...(n.foods||[]).filter(p=>p.quantity<2),...(n.household||[]).filter(p=>p.quantity<2),...c];console.log("Szűrt bevásárlólista:",A),st.set(A)}catch(n){console.error("Hiba a bevásárlólista frissítésekor:",n),alert("Hiba történt a bevásárlólista frissítése során.")}},d=()=>{if(!u.item||!u.unit){alert("Kérlek töltsd ki az összes mezőt!");return}st.update(n=>[...n,{...u}]),o(0,u={item:"",quantity:1,unit:"",store:"Bevásárlólista"})},e=n=>{st.update(A=>{const p=[...A];return p.splice(n,1),p})};pt(()=>{g()}),typeof window<"u"&&(window.updateShoppingList=g);function f(){u.item=this.value,o(0,u)}function l(){u.quantity=bt(this.value),o(0,u)}function T(){u.unit=this.value,o(0,u)}return[u,c,g,d,e,f,l,T,n=>e(n)]}class Bt extends _t{constructor(t){super(),mt(this,t,Et,qt,ft,{})}}export{Bt as component};