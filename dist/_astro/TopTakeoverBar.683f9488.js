import{j as e}from"./jsx-runtime.b9e88e07.js";/* empty css                       */import{r as s}from"./index.03be2d59.js";function c({popupStatus:o,togglePopup:t,children:n}){return s.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return o&&document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[o,t]),e.jsxs("div",{id:"popup",className:o?"show-popup":"hide-popup",children:[e.jsxs("div",{id:"popup-container",children:[n,e.jsx("img",{src:"https://tcnj.edu/custom/icon-library/micro/micro-close.svg",id:"pop-up-close-button",alt:"close",onClick:t})]}),e.jsx("div",{id:"popup-background-blur",onClick:t})]})}function u(){const[o,t]=s.useState(!1),n=()=>{t(!o)};return e.jsxs("div",{id:"top-takeover-bar",children:[e.jsx("p",{children:"Join the challenge match today and help make the TCNJ Pavilion a reality!"}),e.jsx("a",{onClick:n,children:"Learn More"}),e.jsxs(c,{popupStatus:o,togglePopup:n,children:[e.jsx("h2",{children:"Help us meet the challenge"}),e.jsxs("p",{children:["You have the chance to have an enormous impact on the TCNJ campus. Your support of the TCNJ Pavilion will be matched 50 cents on the dollar — up to $1 million — thanks to a generous contribution from Dr. Buddy Mayo, TCNJ professor emeritus."," "]}),e.jsx("a",{href:"https://give.tcnj.edu/invest-in-community/",children:"Show your support"})]})]})}export{u as default};
