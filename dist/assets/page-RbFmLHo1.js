import{j as e,R as r,d as s,C as m,c as d,e as h,f as x,L as p}from"./index-BCS0cig_.js";import{C as f}from"./ComponentContainerCard-Cb_e9E7o.js";import{I as n}from"./IconifyIcon-JVia4Tlw.js";import{S as j}from"./SimplebarReactClient-oNc3R5pp.js";import{a as t,t as v}from"./date-WLc5EZBr.js";import{P as u}from"./PageMetaData-wG5U-ou6.js";import"./Button-DeQEhl8G.js";import"./Button-BN2bDLjf.js";import"./throttle-DHp0GA15.js";const c=[{title:"Task finished",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",time:t(10),icon:"la:check-circle",variant:"text-primary",date:new Date("09/18/2024")},{title:"Task Overdue",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",tags:["Design","HTML"],time:t(50),icon:"la:user-clock",variant:"text-danger",date:new Date("08/10/2024")},{title:"New Task",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",time:t(600),icon:"la:clipboard-check",variant:"text-primary",date:new Date("08/10/2024")},{title:"New Comment",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",time:t(1400),icon:"la:comment-dots",variant:"text-danger",date:new Date("08/10/2024")},{title:"New Lead Meeting",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",time:t(1600),icon:"la:user-friends",variant:"text-primary",date:new Date("06/07/2024")}],g=()=>e.jsxs(m,{children:[e.jsx(d,{children:e.jsx(r,{className:"align-items-center",children:e.jsx(s,{children:e.jsx(h,{as:"h4",children:"Timeline"})})})}),e.jsx(x,{className:"pt-0 px-0",children:e.jsx(j,{className:"activity p-3 pt-0",style:{height:500},children:c.map((a,i)=>e.jsxs("div",{className:"activity-info",children:[e.jsx("div",{className:"icon-info-activity",children:e.jsx(n,{icon:a.icon,height:18,width:18,className:a.variant})}),e.jsxs("div",{className:"activity-info-text",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h6",{className:"m-0  w-75",children:a.title}),e.jsx("span",{className:"text-muted",children:v(a.time)})]}),e.jsxs("p",{className:"text-muted mt-3",children:[a.description,e.jsx(p,{to:"",className:"text-primary",children:"[more info]"})]}),a.tags&&a.tags.map((o,l)=>e.jsx("span",{className:"badge badge-soft-secondary",children:o},l))]})]},i))})})]}),y=()=>e.jsx(f,{title:"Timeline",children:e.jsx("div",{className:"tracking-list",children:c.map((a,i)=>e.jsxs("div",{className:"tracking-item",children:[e.jsx("div",{className:"tracking-icon icon-inner",children:e.jsx(n,{icon:"fa-solid:circle"})}),e.jsxs("div",{className:"tracking-date",children:[new Date(a.date).toLocaleDateString(),e.jsx("span",{className:"d-block fs-12 text-muted",children:new Date(a.time).toLocaleTimeString()})]}),e.jsx("p",{className:"mb-0 text-muted",children:a.description})]},i))})}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Timeline"}),e.jsxs(r,{className:"justify-content-center",children:[e.jsx(s,{md:6,lg:6,children:e.jsx(g,{})}),e.jsx(s,{md:6,lg:6,children:e.jsx(y,{})})]})]});export{S as default};
//# sourceMappingURL=page-RbFmLHo1.js.map
