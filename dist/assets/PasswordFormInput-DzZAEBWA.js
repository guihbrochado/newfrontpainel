import{r as u,j as s}from"./index-BCS0cig_.js";import{F}from"./FormContext-C2U0W2FA.js";import{C as w}from"./index.esm-2DaaO1Fk.js";import{I as l}from"./IconifyIcon-JVia4Tlw.js";import{F as N,a as g}from"./FormLabel-D8w_mrTU.js";import{F as y}from"./FormControl-DyBytbGT.js";const E=({name:a,containerClassName:c,control:p,id:t,labelClassName:d,label:r,noValidate:h,...x})=>{const[e,j]=u.useState(!1);return s.jsx(w,{name:a,defaultValue:"",control:p,render:({field:f,fieldState:o})=>{var i,n,m;return s.jsxs(N,{className:c??"",children:[r&&(typeof r=="string"?s.jsx(g,{htmlFor:t??a,className:d,children:r}):s.jsx(s.Fragment,{children:r})),s.jsxs("div",{className:"position-relative",children:[s.jsx(y,{id:t,type:e?"text":"password",...x,...f,isInvalid:!!((i=o.error)!=null&&i.message)}),!h&&((n=o.error)==null?void 0:n.message)&&s.jsx(F,{type:"invalid",children:(m=o.error)==null?void 0:m.message}),s.jsx("span",{className:"d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-2",onClick:()=>j(!e),children:!o.error&&(e?s.jsx(l,{icon:"bi:eye-slash-fill",height:18,width:18,className:"cursor-pointer"}):s.jsx(l,{icon:"bi:eye-fill",height:18,width:18,className:"cursor-pointer"}))})]})]})}})};export{E as P};
//# sourceMappingURL=PasswordFormInput-DzZAEBWA.js.map
