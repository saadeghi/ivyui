import{w as c}from"./index.857462fb.js";var _;const v=((_=globalThis.__sveltekit_1s84zrq)==null?void 0:_.base)??"";var h;const k=((h=globalThis.__sveltekit_1s84zrq)==null?void 0:h.assets)??v,m="1687196174052",R="sveltekit:snapshot",T="sveltekit:scroll",y="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function O(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!a||w(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:a,download:r}}function U(e){let t=null,n=null,a=null,l=null,r=null,o=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=i(s,"preload-code")),l===null&&(l=i(s,"preload-data")),t===null&&(t=i(s,"keepfocus")),n===null&&(n=i(s,"noscroll")),r===null&&(r=i(s,"reload")),o===null&&(o=i(s,"replacestate")),s=g(s);return{preload_code:d[a??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:o==="off"?!1:o===""?!0:null}}function p(e){const t=c(e);let n=!0;function a(){n=!0,t.update(o=>o)}function l(o){n=!1,t.set(o)}function r(o){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&o(s=u)})}return{notify:a,set:l,subscribe:r}}function E(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);try{const l=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const o=(await l.json()).version!==m;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:a}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let b;function L(e){b=e.client}function N(e){return(...t)=>b[e](...t)}const P={url:p({}),page:p({}),navigating:c(null),updated:E()};export{y as I,f as P,T as S,R as a,O as b,U as c,S as d,v as e,x as f,I as g,L as h,w as i,N as j,P as s};
