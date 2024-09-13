import{j as f}from"./jsx-runtime.b9e88e07.js";import{r as u}from"./index.03be2d59.js";import{i as b,a as y,s as j,u as E,b as I,m as h}from"./motion.28893b4b.js";function S(t,s,e){var n;if(typeof t=="string"){let i=document;s&&(b(!!s.current),i=s.current),e?((n=e[t])!==null&&n!==void 0||(e[t]=i.querySelectorAll(t)),t=e[t]):t=i.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function V(t){t.values.forEach(s=>s.stop())}function W(){const t=new Set,s={subscribe(e){return t.add(e),()=>void t.delete(e)},start(e,n){const i=[];return t.forEach(a=>{i.push(y(a,e,{transitionOverride:n}))}),Promise.all(i)},set(e){return t.forEach(n=>{j(n,e)})},stop(){t.forEach(e=>{V(e)})},mount(){return()=>{s.stop()}}};return s}function k(){const t=E(W);return I(t.mount,[]),t}const w=k,A={some:0,all:1};function Q(t,s,{root:e,margin:n,amount:i="some"}={}){const a=S(t),r=new WeakMap,l=d=>{d.forEach(o=>{const m=r.get(o.target);if(o.isIntersecting!==!!m)if(o.isIntersecting){const p=s(o);typeof p=="function"?r.set(o.target,p):c.unobserve(o.target)}else m&&(m(o),r.delete(o.target))})},c=new IntersectionObserver(l,{root:e,rootMargin:n,threshold:typeof i=="number"?i:A[i]});return a.forEach(d=>c.observe(d)),()=>c.disconnect()}function B(t,{root:s,margin:e,amount:n,once:i=!1}={}){const[a,r]=u.useState(!1);return u.useEffect(()=>{if(!t.current||i&&a)return;const l=()=>(r(!0),i?void 0:()=>r(!1)),c={root:s&&s.current||void 0,margin:e,amount:n};return Q(t.current,l,c)},[s,t,e,i]),a}function L({children:t,idName:s,scholarship:e}){const n=e?[{src:"https://tcnj.edu/custom/campaigns/images/group-mobile.jpg",mediaQuery:"(max-width: 600px)"},{src:"https://tcnj.edu/custom/campaigns/images/group-full.jpg",mediaQuery:"(max-width: 1050px)"},{src:"https://tcnj.edu/custom/campaigns/images/group.png"}]:[{src:"https://tcnj.edu/custom/campaigns/new-pavilion-images/walkthrough-mobile-new.jpg",mediaQuery:"(max-width: 600px)"},{src:"https://tcnj.edu/custom/campaigns/new-pavilion-images/walkthrough-full-new.jpg",mediaQuery:"(max-width: 1050px)"},{src:"https://tcnj.edu/custom/campaigns/new-pavilion-images/walkthrough-new.png"}],i=u.useRef(null),a=B(i,{once:!0}),r=w(),l=w(),c=w(),[d,o]=u.useState(n[n.length-1].src),[m,p]=u.useState(!1);return u.useEffect(()=>{const v=()=>{for(const g of n)if(g.mediaQuery&&window.matchMedia(g.mediaQuery).matches){o(g.src);return}o(n[n.length-1].src)},x=()=>{window.innerWidth<=1050?p(!0):p(!1),v()};return v(),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}},[]),u.useEffect(()=>{a&&(r.start("visible"),l.start("visibleShield"),c.start("visibleYellow"))},[a]),f.jsxs("div",{className:"wrapper",id:s,ref:i,children:[f.jsx(h.div,{variants:{hidden:{opacity:0},visible:{opacity:1}},initial:"hidden",animate:r,transition:{duration:1,delay:.3},className:"text-container",children:t}),f.jsxs("div",{className:"overlay-container",children:[f.jsx(h.img,{src:d,alt:"Pavillion Rendering Walkthrough",id:"shield-image",variants:{hidden:{opacity:0,x:-25},visibleShield:{opacity:1,x:0}},initial:"hidden",animate:l,transition:{duration:.75,delay:.6}}),!m&&f.jsx(h.img,{src:"https://tcnj.edu/custom/campaigns/images/yellow-bg-small.jpg",alt:"yellow background",id:"yellow-bg",variants:{hidden:{opacity:0,x:95},visibleYellow:{opacity:1,x:0}},initial:"hidden",animate:c,transition:{duration:.75,delay:.9}})]})]})}export{L as default};