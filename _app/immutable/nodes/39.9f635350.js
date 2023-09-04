import{s as Ht,E as ft,y as Nt,O as kt,a as b,f as p,r as yt,c as _,g as f,h as v,d as c,z as g,u as Ct,j as m,i as u,v as $,w as J,l as x,m as w,Y as k,U as y}from"../chunks/scheduler.e5ccafd2.js";import{S as Pt,i as Lt,b as M,d as E,m as T,a as H,t as N,e as P}from"../chunks/index.fb4b3a7b.js";import{g as Dt,a as Mt}from"../chunks/index.18b79e66.js";import{M as It,p as jt,C as Ot,a as V,r as C}from"../chunks/ClassTable.8aae4a47.js";import{T as Et}from"../chunks/Translate.37c67b47.js";function St(r){let t,i="open modal",o,e,d='<div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),g(t)!=="svelte-zek3rt"&&(t.textContent=i),o=_(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1fj1yf3"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_1.showModal()"),m(e,"id","my_modal_1"),m(e,"class","modal")},m(s,l){u(s,t,l),u(s,o,l),u(s,e,l)},p:J,d(s){s&&(c(t),c(o),c(e))}}}function Rt(r){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function At(r){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
<dialog id="my_modal_1" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Ut(r){let t,i="open modal",o,e,d='<div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click outside to close</p></div> <form method="dialog" class="modal-backdrop"><button>close</button></form>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),g(t)!=="svelte-1uaieui"&&(t.textContent=i),o=_(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),g(e)!=="svelte-fdxaas"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_2.showModal()"),m(e,"id","my_modal_2"),m(e,"class","modal")},m(s,l){u(s,t,l),u(s,o,l),u(s,e,l)},p:J,d(s){s&&(c(t),c(o),c(e))}}}function Bt(r){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Yt(r){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function qt(r){let t,i="open modal",o,e,d='<div class="modal-box"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click on ✕ button to close</p></div>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),g(t)!=="svelte-1lf6s1v"&&(t.textContent=i),o=_(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1veww2i"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_3.showModal()"),m(e,"id","my_modal_3"),m(e,"class","modal")},m(s,l){u(s,t,l),u(s,o,l),u(s,e,l)},p:J,d(s){s&&(c(t),c(o),c(e))}}}function zt(r){let t,i=`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <div class="$$modal-box">
    <form method="dialog">
      <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Gt(r){let t,i=`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
<dialog id="my_modal_3" className="$$modal">
  <div className="$$modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Vt(r){let t,i="open modal",o,e,d='<div class="modal-box w-11/12 max-w-5xl"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Click the button below to close</p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),g(t)!=="svelte-dvr70k"&&(t.textContent=i),o=_(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),g(e)!=="svelte-ic5c3p"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_4.showModal()"),m(e,"id","my_modal_4"),m(e,"class","modal")},m(s,l){u(s,t,l),u(s,o,l),u(s,e,l)},p:J,d(s){s&&(c(t),c(o),c(e))}}}function Jt(r){let t,i=`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="$$modal">
  <div class="$$modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Ft(r){let t,i=`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button>
<dialog id="my_modal_4" className="$$modal">
  <div className="$$modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Kt(r){let t,i="open modal",o,e,d='<div class="modal-box"><h3 class="font-bold text-lg">Hello!</h3> <p class="py-4">Press ESC key or click the button below to close</p> <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div>';return{c(){t=p("button"),t.textContent=i,o=b(),e=p("dialog"),e.innerHTML=d,this.h()},l(s){t=f(s,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),g(t)!=="svelte-5o4vr1"&&(t.textContent=i),o=_(s),e=f(s,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1yc7j3t"&&(e.innerHTML=d),this.h()},h(){m(t,"class","btn"),m(t,"onclick","my_modal_5.showModal()"),m(e,"id","my_modal_5"),m(e,"class","modal modal-bottom sm:modal-middle")},m(s,l){u(s,t,l),u(s,o,l),u(s,e,l)},p:J,d(s){s&&(c(t),c(o),c(e))}}}function Qt(r){let t,i=`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="$$modal $$modal-bottom sm:$$modal-middle">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Wt(r){let t,i=`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_5.showModal()}>open modal</button>
<dialog id="my_modal_5" className="$$modal modal-bottom sm:$$modal-middle">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","jsx")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function Xt(r){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1clo1l5"&&(t.textContent=i),this.h()},h(){m(t,"for","my_modal_6"),m(t,"class","btn")},m(o,e){u(o,t,e)},p:J,d(o){o&&c(t)}}}function Zt(r){let t,i=`<!-- The button to open modal -->
<label for="my_modal_6" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="$$modal-action">
      <label for="my_modal_6" class="$$btn">Close!</label>
    </div>
  </div>
</div>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function te(r){let t,i="open modal";return{c(){t=p("label"),t.textContent=i,this.h()},l(o){t=f(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),g(t)!=="svelte-8p1kam"&&(t.textContent=i),this.h()},h(){m(t,"for","my_modal_7"),m(t,"class","btn")},m(o,e){u(o,t,e)},p:J,d(o){o&&c(t)}}}function ee(r){let t,i=`<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function le(r){let t,i="open modal";return{c(){t=p("a"),t.textContent=i,this.h()},l(o){t=f(o,"A",{href:!0,class:!0,rel:!0,"data-svelte-h":!0}),g(t)!=="svelte-tkds01"&&(t.textContent=i),this.h()},h(){m(t,"href","#my_modal_8"),m(t,"class","btn"),m(t,"rel","external")},m(o,e){u(o,t,e)},p:J,d(o){o&&c(t)}}}function oe(r){let t,i=`<!-- The button to open modal -->
<a href="#my_modal_8" class="$$btn">open modal</a>
<!-- Put this part before </body> tag -->
<div class="$$modal" id="my_modal_8">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="$$modal-action">
     <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>`,o,e,d,s;return{c(){t=p("pre"),o=x(i),this.h()},l(l){t=f(l,"PRE",{slot:!0});var n=v(t);o=w(n,i),n.forEach(c),this.h()},h(){m(t,"slot","html")},m(l,n){u(l,t,n),$(t,o),d||(s=k(e=C.call(null,t,{to:r[0]})),d=!0)},p(l,n){e&&y(e.update)&&n&1&&e.update.call(null,{to:l[0]})},d(l){l&&c(t),d=!1,s()}}}function se(r){let t,i,o,e,d,s,l,n,$t='<li>Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class="kbd kbd-xs">Esc</span> key</li> <li>Using a hidden <code>&lt;input type=&quot;checkbox&quot;&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal</li> <li>Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter</li>',et,L,D,I,pt,W,F,lt,j,bt='<a aria-hidden="true" tabindex="-1" href="#method-1-using-dialog-element-recommended"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 1: using dialog element <span class="badge badge-success">recommended</span>',ot,O,st,S,at,R,nt,A,dt,U,it,B,_t='<a aria-hidden="true" tabindex="-1" href="#method-2-using-a-hidden-checkbox-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 2: using a hidden checkbox <span class="badge badge-warning">legacy</span>',ct,Y,mt,q,rt,z,vt='<a aria-hidden="true" tabindex="-1" href="#method-3-using-anchor-links-legacy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Method 3: using anchor links <span class="badge badge-warning">legacy</span>',ut,G,ht;return t=new Ot({props:{data:[{type:"component",class:"modal",desc:"Container element"},{type:"component",class:"modal-box",desc:"The content of modal"},{type:"component",class:"modal-action",desc:"Container for modal action buttons"},{type:"component",class:"modal-backdrop",desc:"The backdrop that covers the back of modal so we can close the modal by clicking outside"},{type:"component",class:"modal-toggle",desc:"For hidden checkbox that controls modal"},{type:"modifier",class:"modal-open",desc:"Add/remove this class to open/close the modal using JS"},{type:"responsive",class:"modal-top",desc:"Moves the modal to top"},{type:"responsive",class:"modal-bottom",desc:"Moves the modal to bottom"},{type:"responsive",class:"modal-middle",desc:"Moves the modal to middle (default)"}]}}),s=new Et({props:{text:"There are 3 ways to use a modal:"}}),F=new Et({props:{text:"Make sure you're using unique IDs for each modal"}}),O=new V({props:{title:"Dialog modal",desc:"opens on click using ID.showModal() method. can be closed using ID.close() method",$$slots:{jsx:[At],html:[Rt],default:[St]},$$scope:{ctx:r}}}),S=new V({props:{title:"Dialog modal, closes when clicked outside",desc:"there a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside",$$slots:{jsx:[Yt],html:[Bt],default:[Ut]},$$scope:{ctx:r}}}),R=new V({props:{title:"Dialog modal with a close button at corner",$$slots:{jsx:[Gt],html:[zt],default:[qt]},$$scope:{ctx:r}}}),A=new V({props:{title:"Dialog modal with custom width",desc:"You can use any w-* and max-w-* utility class to customize the width",$$slots:{jsx:[Ft],html:[Jt],default:[Vt]},$$scope:{ctx:r}}}),U=new V({props:{title:"Responsive",desc:"Modal goes bottom on mobile screen and goes middle on desktop",$$slots:{jsx:[Wt],html:[Qt],default:[Kt]},$$scope:{ctx:r}}}),Y=new V({props:{title:"Modal using label + hidden checkbox",$$slots:{html:[Zt],default:[Xt]},$$scope:{ctx:r}}}),q=new V({props:{title:"Modal that closes when clicked outside",desc:"Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside",$$slots:{html:[ee],default:[te]},$$scope:{ctx:r}}}),G=new V({props:{title:"Modal using anchor link",desc:"Anchor links might not work well on some SPA frameworks so if there are problems, use the first example",$$slots:{html:[oe],default:[le]},$$scope:{ctx:r}}}),{c(){M(t.$$.fragment),i=b(),o=p("div"),e=p("div"),d=p("span"),M(s.$$.fragment),l=b(),n=p("ol"),n.innerHTML=$t,et=b(),L=p("div"),D=yt("svg"),I=yt("path"),pt=b(),W=p("div"),M(F.$$.fragment),lt=b(),j=p("h3"),j.innerHTML=bt,ot=b(),M(O.$$.fragment),st=b(),M(S.$$.fragment),at=b(),M(R.$$.fragment),nt=b(),M(A.$$.fragment),dt=b(),M(U.$$.fragment),it=b(),B=p("h3"),B.innerHTML=_t,ct=b(),M(Y.$$.fragment),mt=b(),M(q.$$.fragment),rt=b(),z=p("h3"),z.innerHTML=vt,ut=b(),M(G.$$.fragment),this.h()},l(a){E(t.$$.fragment,a),i=_(a),o=f(a,"DIV",{class:!0});var h=v(o);e=f(h,"DIV",{});var K=v(e);d=f(K,"SPAN",{class:!0});var X=v(d);E(s.$$.fragment,X),X.forEach(c),l=_(K),n=f(K,"OL",{"data-svelte-h":!0}),g(n)!=="svelte-1ii7k10"&&(n.innerHTML=$t),K.forEach(c),h.forEach(c),et=_(a),L=f(a,"DIV",{class:!0});var Q=v(L);D=Ct(Q,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var Z=v(D);I=Ct(Z,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(I).forEach(c),Z.forEach(c),pt=_(Q),W=f(Q,"DIV",{});var tt=v(W);E(F.$$.fragment,tt),tt.forEach(c),Q.forEach(c),lt=_(a),j=f(a,"H3",{id:!0,"data-svelte-h":!0}),g(j)!=="svelte-pazg3s"&&(j.innerHTML=bt),ot=_(a),E(O.$$.fragment,a),st=_(a),E(S.$$.fragment,a),at=_(a),E(R.$$.fragment,a),nt=_(a),E(A.$$.fragment,a),dt=_(a),E(U.$$.fragment,a),it=_(a),B=f(a,"H3",{id:!0,"data-svelte-h":!0}),g(B)!=="svelte-1x7tqpi"&&(B.innerHTML=_t),ct=_(a),E(Y.$$.fragment,a),mt=_(a),E(q.$$.fragment,a),rt=_(a),z=f(a,"H3",{id:!0,"data-svelte-h":!0}),g(z)!=="svelte-1k6pp77"&&(z.innerHTML=vt),ut=_(a),E(G.$$.fragment,a),this.h()},h(){m(d,"class","font-bold"),m(o,"class","alert text-sm"),m(I,"stroke-linecap","round"),m(I,"stroke-linejoin","round"),m(I,"stroke-width","2"),m(I,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),m(D,"xmlns","http://www.w3.org/2000/svg"),m(D,"fill","none"),m(D,"viewBox","0 0 24 24"),m(D,"class","stroke-current flex-shrink-0 w-6 h-6"),m(L,"class","alert text-sm mt-4"),m(j,"id","method-1-using-dialog-element-recommended"),m(B,"id","method-2-using-a-hidden-checkbox-legacy"),m(z,"id","method-3-using-anchor-links-legacy")},m(a,h){T(t,a,h),u(a,i,h),u(a,o,h),$(o,e),$(e,d),T(s,d,null),$(e,l),$(e,n),u(a,et,h),u(a,L,h),$(L,D),$(D,I),$(L,pt),$(L,W),T(F,W,null),u(a,lt,h),u(a,j,h),u(a,ot,h),T(O,a,h),u(a,st,h),T(S,a,h),u(a,at,h),T(R,a,h),u(a,nt,h),T(A,a,h),u(a,dt,h),T(U,a,h),u(a,it,h),u(a,B,h),u(a,ct,h),T(Y,a,h),u(a,mt,h),T(q,a,h),u(a,rt,h),u(a,z,h),u(a,ut,h),T(G,a,h),ht=!0},p(a,h){const K={};h&5&&(K.$$scope={dirty:h,ctx:a}),O.$set(K);const X={};h&5&&(X.$$scope={dirty:h,ctx:a}),S.$set(X);const Q={};h&5&&(Q.$$scope={dirty:h,ctx:a}),R.$set(Q);const Z={};h&5&&(Z.$$scope={dirty:h,ctx:a}),A.$set(Z);const tt={};h&5&&(tt.$$scope={dirty:h,ctx:a}),U.$set(tt);const gt={};h&5&&(gt.$$scope={dirty:h,ctx:a}),Y.$set(gt);const xt={};h&5&&(xt.$$scope={dirty:h,ctx:a}),q.$set(xt);const wt={};h&5&&(wt.$$scope={dirty:h,ctx:a}),G.$set(wt)},i(a){ht||(H(t.$$.fragment,a),H(s.$$.fragment,a),H(F.$$.fragment,a),H(O.$$.fragment,a),H(S.$$.fragment,a),H(R.$$.fragment,a),H(A.$$.fragment,a),H(U.$$.fragment,a),H(Y.$$.fragment,a),H(q.$$.fragment,a),H(G.$$.fragment,a),ht=!0)},o(a){N(t.$$.fragment,a),N(s.$$.fragment,a),N(F.$$.fragment,a),N(O.$$.fragment,a),N(S.$$.fragment,a),N(R.$$.fragment,a),N(A.$$.fragment,a),N(U.$$.fragment,a),N(Y.$$.fragment,a),N(q.$$.fragment,a),N(G.$$.fragment,a),ht=!1},d(a){a&&(c(i),c(o),c(et),c(L),c(lt),c(j),c(ot),c(st),c(at),c(nt),c(dt),c(it),c(B),c(ct),c(mt),c(rt),c(z),c(ut)),P(t,a),P(s),P(F),P(O,a),P(S,a),P(R,a),P(A,a),P(U,a),P(Y,a),P(q,a),P(G,a)}}}function ae(r){let t,i;const o=[r[1],Tt];let e={$$slots:{default:[se]},$$scope:{ctx:r}};for(let d=0;d<o.length;d+=1)e=ft(e,o[d]);return t=new It({props:e}),{c(){M(t.$$.fragment)},l(d){E(t.$$.fragment,d)},m(d,s){T(t,d,s),i=!0},p(d,[s]){const l=s&2?Dt(o,[s&2&&Mt(d[1]),s&0&&Mt(Tt)]):{};s&5&&(l.$$scope={dirty:s,ctx:d}),t.$set(l)},i(d){i||(H(t.$$.fragment,d),i=!0)},o(d){N(t.$$.fragment,d),i=!1},d(d){P(t,d)}}}const Tt={title:"Modal",desc:"Modal is used to show a dialog or a box when you click a button.",published:!0,layout:"components"};function ne(r,t,i){let o;return Nt(r,jt,e=>i(0,o=e)),r.$$set=e=>{i(1,t=ft(ft({},t),kt(e)))},t=kt(t),[o,t]}class ue extends Pt{constructor(t){super(),Lt(this,t,ne,ae,Ht,{})}}export{ue as component};
