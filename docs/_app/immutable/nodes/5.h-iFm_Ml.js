import{s as _e,n as ue,r as ve,b as me,o as ke}from"../chunks/scheduler.BvLojk_z.js";import{S as be,i as ye,e as p,s as C,b as G,c as f,m as x,h as E,d as D,g as u,f as J,o as I,j as P,k as n,q as F,p as Y,r as de,l as $,u as ze,v as Te}from"../chunks/index.B1PPjrGd.js";import{e as ce}from"../chunks/each.D6YF6ztN.js";import{i as le}from"../chunks/stores.DqOuW_qB.js";function pe(t,l,s){const i=t.slice();return i[15]=l[s],i[17]=s,i}function fe(t){let l,s;return{c(){l=p("p"),s=G(t[5]),this.h()},l(i){l=f(i,"P",{style:!0});var _=D(l);s=J(_,t[5]),_.forEach(u),this.h()},h(){Te(l,"color","red")},m(i,_){P(i,l,_),n(l,s)},p(i,_){_&32&&$(s,i[5])},d(i){i&&u(l)}}}function he(t){let l,s,i=t[15].item+"",_,m,h,b=t[15].quantity+"",v,N,c,U=t[15].unit+"",y,S,z,B=t[15].store+"",j,H,o,T,A="Törlés",O,w,Q;function L(){return t[14](t[17])}return{c(){l=p("tr"),s=p("td"),_=G(i),m=C(),h=p("td"),v=G(b),N=C(),c=p("td"),y=G(U),S=C(),z=p("td"),j=G(B),H=C(),o=p("td"),T=p("button"),T.textContent=A,O=C(),this.h()},l(M){l=f(M,"TR",{});var a=D(l);s=f(a,"TD",{class:!0});var q=D(s);_=J(q,i),q.forEach(u),m=E(a),h=f(a,"TD",{class:!0});var K=D(h);v=J(K,b),K.forEach(u),N=E(a),c=f(a,"TD",{class:!0});var W=D(c);y=J(W,U),W.forEach(u),S=E(a),z=f(a,"TD",{class:!0});var R=D(z);j=J(R,B),R.forEach(u),H=E(a),o=f(a,"TD",{class:!0});var X=D(o);T=f(X,"BUTTON",{class:!0,"data-svelte-h":!0}),x(T)!=="svelte-c7kewp"&&(T.textContent=A),X.forEach(u),O=E(a),a.forEach(u),this.h()},h(){I(s,"class","svelte-kc11py"),I(h,"class","svelte-kc11py"),I(c,"class","svelte-kc11py"),I(z,"class","svelte-kc11py"),I(T,"class","btn btn-danger btn-sm svelte-kc11py"),I(o,"class","svelte-kc11py")},m(M,a){P(M,l,a),n(l,s),n(s,_),n(l,m),n(l,h),n(h,v),n(l,N),n(l,c),n(c,y),n(l,S),n(l,z),n(z,j),n(l,H),n(l,o),n(o,T),n(l,O),w||(Q=Y(T,"click",L),w=!0)},p(M,a){t=M,a&64&&i!==(i=t[15].item+"")&&$(_,i),a&64&&b!==(b=t[15].quantity+"")&&$(v,b),a&64&&U!==(U=t[15].unit+"")&&$(y,U),a&64&&B!==(B=t[15].store+"")&&$(j,B)},d(M){M&&u(l),w=!1,Q()}}}function ge(t){let l,s="Élelmiszer készlet",i,_,m,h,b,v,N,c,U,y,S,z,B="Hozzáadás",j,H,o="Készlet",T,A,O,w='<tr><th scope="col" class="svelte-kc11py">Tétel neve</th> <th scope="col" class="svelte-kc11py">Mennyiség</th> <th scope="col" class="svelte-kc11py">Mértékegység</th> <th scope="col" class="svelte-kc11py">Készlet helye</th> <th scope="col" class="svelte-kc11py">Akciók</th></tr>',Q,L,M,a,q,K,W,R,X,V,oe="Élelmiszer készlet törlése",se,ae,g=t[5]&&fe(t),Z=ce(t[6].foods||[]),k=[];for(let e=0;e<Z.length;e+=1)k[e]=he(pe(t,Z,e));return{c(){l=p("h1"),l.textContent=s,i=C(),g&&g.c(),_=C(),m=p("div"),h=p("input"),b=C(),v=p("input"),N=C(),c=p("input"),U=C(),y=p("input"),S=C(),z=p("button"),z.textContent=B,j=C(),H=p("h2"),H.textContent=o,T=C(),A=p("table"),O=p("thead"),O.innerHTML=w,Q=C(),L=p("tbody");for(let e=0;e<k.length;e+=1)k[e].c();M=C(),a=p("footer"),q=p("div"),K=p("p"),W=G("Tárolt érték: "),R=G(t[0]),X=C(),V=p("button"),V.textContent=oe,this.h()},l(e){l=f(e,"H1",{"data-svelte-h":!0}),x(l)!=="svelte-1w3vrbi"&&(l.textContent=s),i=E(e),g&&g.l(e),_=E(e),m=f(e,"DIV",{});var r=D(m);h=f(r,"INPUT",{placeholder:!0}),b=E(r),v=f(r,"INPUT",{type:!0,placeholder:!0}),N=E(r),c=f(r,"INPUT",{placeholder:!0}),U=E(r),y=f(r,"INPUT",{placeholder:!0}),S=E(r),z=f(r,"BUTTON",{"data-svelte-h":!0}),x(z)!=="svelte-uy2vhj"&&(z.textContent=B),r.forEach(u),j=E(e),H=f(e,"H2",{"data-svelte-h":!0}),x(H)!=="svelte-r1zmj8"&&(H.textContent=o),T=E(e),A=f(e,"TABLE",{class:!0});var d=D(A);O=f(d,"THEAD",{"data-svelte-h":!0}),x(O)!=="svelte-1pckibj"&&(O.innerHTML=w),Q=E(d),L=f(d,"TBODY",{});var ee=D(L);for(let re=0;re<k.length;re+=1)k[re].l(ee);ee.forEach(u),d.forEach(u),M=E(e),a=f(e,"FOOTER",{class:!0});var ie=D(a);q=f(ie,"DIV",{class:!0});var te=D(q);K=f(te,"P",{class:!0});var ne=D(K);W=J(ne,"Tárolt érték: "),R=J(ne,t[0]),ne.forEach(u),X=E(te),V=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),x(V)!=="svelte-gajgxw"&&(V.textContent=oe),te.forEach(u),ie.forEach(u),this.h()},h(){I(h,"placeholder","Tétel neve"),I(v,"type","number"),I(v,"placeholder","Mennyiség"),I(c,"placeholder","Mértékegység"),I(y,"placeholder","Készlet helye"),I(A,"class","table table-bordered svelte-kc11py"),I(K,"class","mb-1"),I(V,"class","btn btn-danger btn-sm svelte-kc11py"),I(q,"class","container text-center"),I(a,"class","bg-light border-top py-3 fixed-bottom")},m(e,r){P(e,l,r),P(e,i,r),g&&g.m(e,r),P(e,_,r),P(e,m,r),n(m,h),F(h,t[1]),n(m,b),n(m,v),F(v,t[2]),n(m,N),n(m,c),F(c,t[3]),n(m,U),n(m,y),F(y,t[4]),n(m,S),n(m,z),P(e,j,r),P(e,H,r),P(e,T,r),P(e,A,r),n(A,O),n(A,Q),n(A,L);for(let d=0;d<k.length;d+=1)k[d]&&k[d].m(L,null);P(e,M,r),P(e,a,r),n(a,q),n(q,K),n(K,W),n(K,R),n(q,X),n(q,V),se||(ae=[Y(h,"input",t[10]),Y(v,"input",t[11]),Y(c,"input",t[12]),Y(y,"input",t[13]),Y(z,"click",t[8]),Y(V,"click",t[7])],se=!0)},p(e,[r]){if(e[5]?g?g.p(e,r):(g=fe(e),g.c(),g.m(_.parentNode,_)):g&&(g.d(1),g=null),r&2&&h.value!==e[1]&&F(h,e[1]),r&4&&de(v.value)!==e[2]&&F(v,e[2]),r&8&&c.value!==e[3]&&F(c,e[3]),r&16&&y.value!==e[4]&&F(y,e[4]),r&576){Z=ce(e[6].foods||[]);let d;for(d=0;d<Z.length;d+=1){const ee=pe(e,Z,d);k[d]?k[d].p(ee,r):(k[d]=he(ee),k[d].c(),k[d].m(L,null))}for(;d<k.length;d+=1)k[d].d(1);k.length=Z.length}r&1&&$(R,e[0])},i:ue,o:ue,d(e){e&&(u(l),u(i),u(_),u(m),u(j),u(H),u(T),u(A),u(M),u(a)),g&&g.d(e),ze(k,e),se=!1,ve(ae)}}}function Ce(t,l,s){let i;me(t,le,o=>s(6,i=o));let _="Alapértelmezett érték";ke(()=>{typeof localStorage<"u"&&s(0,_=localStorage.getItem("custom_key")||"Alapértelmezett érték")});const m=()=>{try{le.update(o=>(o.foods=[],o)),alert("Az élelmiszer készlet sikeresen törölve!")}catch(o){console.error("Hiba történt az élelmiszer készlet törlésekor",o),alert("Nem sikerült törölni az élelmiszer készletet.")}};let h="",b=0,v="",N="",c="";const U=()=>{if(!h){s(5,c="A tétel neve nem lehet üres!");return}if(b<=0){s(5,c="A mennyiségnek pozitívnak kell lennie!");return}if(!v){s(5,c="A mértékegység mező nem lehet üres!");return}if(!N){s(5,c="A készlet tárolási hely nem lehet üres!");return}try{le.update(o=>(o.foods||(o.foods=[]),o.foods.push({item:h,quantity:b,unit:v,store:N}),o)),s(1,h=""),s(2,b=0),s(3,v=""),s(4,N=""),s(5,c="")}catch(o){console.error("Hiba történt a tétel hozzáadásakor:",o),s(5,c="Nem sikerült hozzáadni a tételt. Kérlek, próbáld újra.")}},y=o=>{le.update(T=>{const A={...T};return A.foods=T.foods.filter((O,w)=>w!==o),A})};function S(){h=this.value,s(1,h)}function z(){b=de(this.value),s(2,b)}function B(){v=this.value,s(3,v)}function j(){N=this.value,s(4,N)}return[_,h,b,v,N,c,i,m,U,y,S,z,B,j,o=>y(o)]}class De extends be{constructor(l){super(),ye(this,l,Ce,ge,_e,{})}}export{De as component};