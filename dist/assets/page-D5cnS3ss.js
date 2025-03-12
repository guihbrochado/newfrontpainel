import{j as e,R as o,d as t,C as v,f as y,e as C}from"./index-UUiNTc0V.js";import{F}from"./FormContext-n6TyEwzp.js";import{F as D}from"./index-DLuA-Bmg.js";import{C as q,u as T}from"./index.esm-Bu9rMimo.js";import{F as w,a as P}from"./FormLabel-GeQA8Xa_.js";import{S as i}from"./SelectFormInput-bk88NkRC.js";import{T as I}from"./TextAreaFormInput-B6gm978M.js";import{T as b}from"./TextFormInput-CY5MeeiQ.js";import{c as M,d as r,o as S}from"./index.esm-CFigF2xX.js";import{B as x}from"./Button-BLYS8AP-.js";import{c as L}from"./clsx-B-dksMZM.js";import{P as A}from"./PageMetaData-D364TxUJ.js";import{g as E}from"./gitlab-qJGS6fLj.js";import{a as k}from"./avatar-1-BO000dvc.js";import{a as R}from"./avatar-2-HWf29V0S.js";import{a as H}from"./avatar-3-CWF5YbYz.js";import{a as U}from"./avatar-4-BIM0t6XN.js";import{a as B}from"./avatar-5-BuQv4wS1.js";import{a as Y}from"./avatar-6-UroM5mc-.js";import"./react-select.esm-Dv2vrlQT.js";import"./extends-CF3RwP-h.js";import"./FormControl-CuFy3YGR.js";import"./Button-CuaOUBT4.js";const j=({name:s,containerClassName:a,control:l,id:n,label:m,noValidate:h,labelClassName:f,...g})=>e.jsx(q,{name:s,defaultValue:"",control:l,render:({field:c,fieldState:d})=>{var p,u;return e.jsxs(w,{className:a,children:[m&&(typeof m=="string"?e.jsx(P,{htmlFor:n??s,className:f,children:m}):e.jsx(e.Fragment,{children:m})),e.jsx(D,{className:"form-control",onChange:([N])=>{c.onChange(N)},id:n??s,...g,...c}),!h&&((p=d.error)==null?void 0:p.message)&&e.jsx(F,{type:"invalid",children:(u=d.error)==null?void 0:u.message})]})}}),X=()=>{const s=M({projectName:r().required("please enter  project name"),startDate:r().required("please select Date"),endDate:r().required("please select  Date"),rate:r().required("please enter rate"),priceType:r().required("please select price type"),require:r().required("please select required field"),invoiceTime:r().required("please select Invoice Time"),priority:r().required("please select priority"),message:r().required("please enter your message")}),{control:a,handleSubmit:l}=T({resolver:S(s)});return e.jsxs("form",{className:"p-4 pt-3",onSubmit:l(()=>{}),children:[e.jsx(b,{name:"projectName",label:"Project Name :",containerClassName:"mb-2 mb-lg-1",control:a,placeholder:"Enter project name"}),e.jsx("div",{className:"form-group",children:e.jsxs(o,{children:[e.jsx(j,{name:"startDate",control:a,labelClassName:"mt-2",label:"Start Date",placeholder:"Enter start date",containerClassName:"col-lg-3 col-6 mb-2 mb-lg-1"}),e.jsx(j,{name:"endDate",control:a,labelClassName:"mt-2",label:"End Date",placeholder:"Enter end date",containerClassName:"col-lg-3 col-6 mb-2 mb-lg-1"}),e.jsx(b,{name:"rate",label:"Rate",labelClassName:"mt-2",containerClassName:"col-lg-3 col-6 mb-2 mb-lg-1",control:a,placeholder:"Enter rate"}),e.jsx(i,{name:"priceType",control:a,label:"Price Type",labelClassName:"mt-2",containerClassName:"col-lg-3 col-6 mb-2 mb-lg-1",options:[{value:"Hourly",label:"Hourly"},{value:"Daily",label:"Daily"},{value:"Fix",label:"Fix"}]})]})}),e.jsx("div",{className:"form-group",children:e.jsxs(o,{children:[e.jsx(i,{name:"require",control:a,label:"Required",labelClassName:"mt-2",containerClassName:"col-lg-6 mb-2 mb-lg-1",options:[{value:"",label:"--Select--"},{value:"UI/UX Design",label:"UI/UX Design"},{value:"Payment System",label:"Payment System"},{value:"Android 10",label:"Android 10"}]}),e.jsx(i,{name:"invoiceTime",control:a,label:"Invoice Time",labelClassName:"mt-2",containerClassName:"col-lg-3 col-6",options:[{value:"30 Day",label:"30 Day"},{value:"3 Month",label:"3 Month"},{value:"1 Year",label:"1 Year"}]}),e.jsx(i,{name:"priority",control:a,label:"Priority",labelClassName:"mt-2",containerClassName:"col-lg-3 col-6",options:[{value:"",label:"-- select --"},{value:"High",label:"High"},{value:"Medium",label:"Medium"},{value:"Low",label:"Low"}]})]})}),e.jsx(I,{name:"message",label:"Message",labelClassName:"mt-2",control:a,containerClassName:"mb-3",placeholder:"writing here..",rows:5}),e.jsx(x,{variant:"primary",type:"submit",className:"me-1",children:"Create project"}),e.jsx(x,{variant:"danger",type:"button",children:"Cancel"})]})},pe=()=>{const s=[k,R,H,U,B,Y];return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Project Create"}),e.jsx(o,{children:e.jsx(t,{xs:12,children:e.jsx(v,{children:e.jsx(y,{className:"p-0",children:e.jsxs(o,{className:"g-0 h-100",children:[e.jsxs(t,{lg:7,className:"border-end",children:[e.jsx(C,{as:"h4",className:"fs-16 mb-0 pt-3 ps-4",children:"Create Project"}),e.jsx(X,{})]}),e.jsx(t,{lg:5,className:"align-self-center",children:e.jsxs("form",{className:"p-4",children:[e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("img",{src:E,alt:"",className:"thumb-xxl rounded me-3"}),e.jsx("div",{className:"flex-grow-1 text-truncate",children:e.jsxs("label",{className:"btn btn-primary text-light",children:["Change Avatar ",e.jsx("input",{type:"file",hidden:!0})]})})]})}),e.jsx("h5",{className:"fw-normal my-3 lh-lg",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised."}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",htmlFor:"team-leader",children:"Project team members"}),e.jsxs("div",{className:"img-group d-flex justify-content-start",children:[s.map((a,l)=>e.jsx("span",{role:"button",className:L("user-avatar position-relative d-inline-block",{"ms-n2":l!=0}),children:e.jsx("img",{src:a,alt:"avatar",className:"thumb-md shadow-sm rounded-circle"})},l)),e.jsx("div",{role:"button",className:"user-avatar position-relative d-inline-block ms-1",children:e.jsx("span",{className:"thumb-md shadow-sm justify-content-center d-flex align-items-center text-primary bg-info-subtle rounded-circle fw-semibold fs-6",children:"+32"})})]}),e.jsx("input",{id:"add-member",type:"file",name:"files[]",multiple:!0,style:{display:"none"}})]}),e.jsx("div",{className:"p-3  border-info border-dashed bg-info-subtle  mt-3 rounded",children:e.jsxs(o,{className:"d-flex justify-content-center",children:[e.jsx(t,{children:e.jsxs("div",{children:[e.jsx("a",{href:"#",className:"fw-bold me-1 text-info",children:"You've almost reached your goal"})," ","75% of your goals are completed just complate 25% of remaining goals to achieve your target."]})}),e.jsxs(t,{xs:"auto",className:"align-self-center",children:[e.jsx("span",{className:"badge rounded text-info bg-transparent border border-info mb-2 p-1",children:"Last Created Project"}),e.jsx("p",{className:"text-dark  fw-semibold fs-13",children:"15 Aug 2024, AM-10:15"})]})]})})]})})]})})})})})]})};export{pe as default};
//# sourceMappingURL=page-D5cnS3ss.js.map
