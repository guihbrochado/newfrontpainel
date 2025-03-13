import{j as s,R as b,d as g,ab as a,ac as d,ad as o,ae as u,r as T}from"./index-BCS0cig_.js";import{P as N}from"./PageMetaData-wG5U-ou6.js";import{C as n}from"./ComponentContainerCard-Cb_e9E7o.js";import{u as l}from"./useToggle-CoEywqnw.js";import{k as C}from"./change-casing-CalBoMVm.js";import{l as h}from"./logo-sm-BsLpolHO.js";import{a as v}from"./avatar-5-BuQv4wS1.js";import{I as j}from"./IconifyIcon-JVia4Tlw.js";import{B as m}from"./Button-DeQEhl8G.js";import"./Button-BN2bDLjf.js";const f=()=>{const{isTrue:t,toggle:e}=l(!0);return s.jsx(n,{title:"Basic",children:s.jsxs(a,{show:t,onClose:e,role:"alert",children:[s.jsxs(d,{children:[s.jsx("img",{src:h,height:20,alt:"logo",className:"me-1"}),s.jsx("h5",{className:"me-auto my-0",children:"Rizz"}),s.jsx("small",{children:"11 mins ago"})]}),s.jsx(o,{children:"Hello, world! This is a toast message."})]})})},w=()=>{const{isTrue:t,toggle:e}=l(!0);return s.jsx(n,{title:"Translucent",children:s.jsx("div",{className:"bg-light p-3",children:s.jsxs(a,{show:t,onClose:e,role:"alert",children:[s.jsxs(d,{children:[s.jsx("img",{src:h,alt:"logo-sm",height:20,className:"me-1"}),s.jsx("h5",{className:"me-auto my-0",children:"Rizz"}),s.jsx("small",{children:"11 mins ago"})]}),s.jsx(o,{children:"Hello, world! This is a toast message."})]})})})},y=()=>{const{isTrue:t,toggle:e}=l(!0),{isTrue:c,toggle:r}=l(!0);return s.jsx(n,{title:"Stacking",children:s.jsx("div",{className:"bg-light p-3",children:s.jsxs(u,{className:"position-relative",children:[s.jsxs(a,{show:t,onClose:e,role:"alert",children:[s.jsxs(d,{children:[s.jsx("img",{src:h,alt:"logo-sm",height:20,className:"me-1"}),s.jsx("h5",{className:"me-auto my-0",children:"Rizz"}),s.jsx("small",{children:"11 mins ago"})]}),s.jsx(o,{children:"Hello, world! This is a toast message."})]}),s.jsxs(a,{show:c,onClose:r,role:"alert",children:[s.jsxs(d,{children:[s.jsx("img",{src:h,alt:"logo-sm",height:20,className:"me-1"}),s.jsx("h5",{className:"me-auto my-0",children:"Rizz"}),s.jsx("small",{children:"11 mins ago"})]}),s.jsx(o,{children:"Hello, world! This is a toast message."})]})]})})})},k=()=>{const{isTrue:t,toggle:e}=l(!0),{isTrue:c,toggle:r}=l(!0),{isTrue:x,toggle:i}=l(!0);return s.jsx(n,{title:"Custom Content",children:s.jsxs("div",{className:"bg-light p-3",children:[s.jsxs(a,{show:t,onClose:e,className:"d-flex align-items-center mb-2",role:"alert","aria-live":"assertive","aria-atomic":"true",children:[s.jsx(o,{children:"Hello, world! This is a toast message."}),s.jsx("button",{type:"button",className:"btn-close ms-auto me-2",onClick:e})]}),s.jsx(a,{show:c,onClose:r,className:"mb-2",role:"alert","aria-live":"assertive","aria-atomic":"true",children:s.jsxs(o,{children:["Hello, world! This is a toast message.",s.jsxs("div",{className:"mt-2 pt-2 border-top",children:[s.jsx(m,{variant:"primary",size:"sm",className:"me-1",type:"button",children:"Take action"}),s.jsx(m,{variant:"secondary",size:"sm",onClick:r,children:"Close"})]})]})}),s.jsxs(a,{show:x,onClose:i,className:"toast d-flex align-items-center text-white bg-primary border-0",role:"alert","aria-live":"assertive","aria-atomic":"true",children:[s.jsx(o,{children:"Hello, world! This is a toast message."}),s.jsx("button",{type:"button",className:"btn-close btn-close-white ms-auto me-2",onClick:i})]})]})})},z=()=>{const{isTrue:t,toggle:e}=l(!0),[c,r]=T.useState("top-start"),x=["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"];return s.jsxs(n,{title:"Toast Placement",children:[s.jsx("form",{children:s.jsxs("div",{className:"form-group mb-3",children:[s.jsx("label",{htmlFor:"selectToastPlacement",children:"Toast placement"}),s.jsxs("select",{className:"form-select mt-2",onChange:i=>r(i.currentTarget.value),children:[s.jsx("option",{defaultChecked:!0,disabled:!0,children:"Select a position..."}),x.map((i,p)=>s.jsx("option",{value:i,children:C(i)},p))]})]})}),s.jsx("div",{"aria-live":"polite","aria-atomic":"true",className:"position-relative bd-example-toasts",style:{height:260,backgroundColor:"rgba(235, 240, 247, 0.1)"},children:s.jsx(u,{position:c,className:"position-absolute p-3",id:"toastPlacement",children:s.jsxs(a,{show:t,onClose:e,children:[s.jsxs(d,{children:[s.jsx("img",{src:h,alt:"logo-sm",height:20,className:"me-1"}),s.jsx("h5",{className:"me-auto my-0",children:"Rizz"}),s.jsx("small",{children:"11 mins ago"})]}),s.jsx(o,{children:"Hello, world! This is a toast message."})]})})})]})},H=()=>{const{isTrue:t,toggle:e}=l(!0);return s.jsx(n,{title:"Custom Toast",children:s.jsxs(a,{show:t,onClose:e,role:"alert","aria-live":"assertive","aria-atomic":"true",children:[s.jsx("div",{className:"toast-header border-0",children:s.jsx("button",{type:"button",className:"btn-close ms-auto ",onClick:e})}),s.jsxs(o,{className:"text-center",children:[s.jsx("img",{alt:"user",src:v,className:"d-block mx-auto rounded-circle thumb-xl"}),s.jsx("h5",{className:"fw-bold mt-3 mb-1",children:"Charles Smith"}),s.jsx("p",{className:"text-muted mb-0",children:"UI/UX front end developer"}),s.jsxs("div",{className:"mt-3 mb-2 d-inline-flex gap-1",children:[s.jsx(m,{variant:"outline-primary",className:"btn-icon-circle btn-icon-circle-sm",children:s.jsx(j,{icon:"fa-brands:facebook-f"})}),s.jsx(m,{variant:"outline-info",className:"btn-icon-circle btn-icon-circle-sm",children:s.jsx(j,{icon:"fa-brands:twitter"})}),s.jsx(m,{variant:"outline-pink",className:"btn-icon-circle btn-icon-circle-sm",children:s.jsx(j,{icon:"fa-brands:dribbble"})})]})]})]})})},O=()=>s.jsxs(b,{className:"justify-content-center",children:[s.jsxs(g,{md:6,children:[s.jsx(f,{}),s.jsx(y,{}),s.jsx(z,{})]}),s.jsxs(g,{md:6,children:[s.jsx(w,{}),s.jsx(k,{}),s.jsx(H,{})]})]}),M=()=>s.jsxs(s.Fragment,{children:[s.jsx(N,{title:"Toasts"}),s.jsx(O,{})]});export{M as default};
//# sourceMappingURL=page-DCVm__1y.js.map
