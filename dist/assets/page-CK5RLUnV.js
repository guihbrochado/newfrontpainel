import{j as e,I as a,r as l,R as n,d as t,C as d,c as p,e as x,f as h}from"./index-UUiNTc0V.js";import{P as j}from"./PageMetaData-D364TxUJ.js";import{d as u}from"./data-yqFInCnj.js";import{c as b}from"./clsx-B-dksMZM.js";import{R as f}from"./index-CmZRqxph.js";import{F as c}from"./FormCheck-CUEJfWsW.js";import{D as g,a as N,b as w}from"./Dropdown-DyAbvVHF.js";import"./other-B4SgM6ZY.js";import"./date-WLc5EZBr.js";import"./french_flag-f1XQnB-q.js";import"./baha_flag-YImHn-n0.js";import"./avatar-1-BO000dvc.js";import"./avatar-2-HWf29V0S.js";import"./avatar-3-CWF5YbYz.js";import"./avatar-4-BIM0t6XN.js";import"./avatar-5-BuQv4wS1.js";import"./avatar-6-UroM5mc-.js";import"./avatar-8-Stif89Jp.js";import"./avatar-9-Pb2h4EL1.js";import"./chatgpt-B6JRjYGz.js";import"./slack-uSnaw-Vs.js";import"./gitlab-qJGS6fLj.js";import"./products-Bsi0yyVD.js";import"./avatar-10-B1FJbhiE.js";import"./avatar-7-BVfp9bJ_.js";import"./Table-BrmIOlpd.js";import"./FormContext-n6TyEwzp.js";import"./FormCheckInput-CTZsx7Pk.js";import"./ElementChildren-9All9Wte.js";import"./DataKey-COGXBUcQ.js";import"./SSRProvider-IAODh1YM.js";import"./usePrevious-BWb-eAjs.js";import"./NavContext-BRvIv2qI.js";import"./useWindow-DJtzQdYK.js";import"./mergeOptionsWithPopperConfig-Cbe8MKVx.js";import"./Button-CuaOUBT4.js";import"./hook-QqkXmZtl.js";import"./extends-CF3RwP-h.js";import"./Anchor-CMDYpN7l.js";import"./InputGroupContext-Bpo_VHnx.js";import"./NavbarContext-BmmKdPPR.js";import"./Button-BLYS8AP-.js";const y=[{id:"select",header:()=>e.jsx(c,{id:"user-checkbox"}),cell:({row:{original:{id:s}}})=>e.jsx("div",{style:{width:16},children:e.jsx(c,{id:`checkbox-${s}`})})},{id:"2",header:()=>e.jsx("div",{className:"ps-0",children:"Customer"}),cell:({row:{original:{name:s,avatar:r}}})=>e.jsxs("div",{className:"ps-0",children:[e.jsx("img",{src:r,alt:"user",className:"thumb-md d-inline rounded-circle me-1"}),e.jsx("p",{className:"d-inline-block align-middle mb-0",children:e.jsx("span",{className:"font-13 fw-medium",children:s})})]})},{header:"Email",accessorKey:"email"},{header:"Phone No",accessorKey:"phoneNo"},{header:"Status",cell:({row:{original:{status:s}}})=>e.jsx("span",{className:`badge  bg-${s==="Inactive"?"secondary":"info"}-subtle text-${s==="Inactive"?"secondary":"info"}`,children:s})},{header:"Source",accessorKey:"source"},{id:"3",header:()=>e.jsx("div",{className:"text-end",children:"Action"}),cell:()=>e.jsxs("div",{className:"text-end",children:[e.jsx("span",{role:"button",children:e.jsx(a,{icon:"la:info-circle",className:"text-secondary fs-18 me-1"})}),e.jsx("span",{role:"button",children:e.jsx(a,{icon:"la:pen",className:"text-secondary fs-18 me-1"})}),e.jsx("span",{role:"button",children:e.jsx(a,{icon:"la:trash-alt",className:"text-secondary fs-18"})})]})}],C=({contacts:s})=>{const r=[2,5,10,20,50];return e.jsx(f,{columns:y,data:s,rowsPerPageList:r,pageSize:10,tableClass:"mb-0 checkbox-all text-nowrap",theadClass:"table-light",showPagination:!0})},pe=()=>{const s=["All","New","Active","InActive"],[r,m]=l.useState();return l.useEffect(()=>{(async()=>{const i=await u();m(i)})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Contacts"}),e.jsx(n,{children:e.jsx(t,{xs:12,children:e.jsxs(d,{children:[e.jsx(p,{children:e.jsxs(n,{className:"align-items-center",children:[e.jsx(t,{children:e.jsx(x,{as:"h4",children:"Contacts"})}),e.jsx(t,{xs:"auto",children:e.jsxs("form",{className:"row g-2",children:[e.jsx(t,{xs:"auto",children:e.jsxs(g,{children:[e.jsxs(N,{variant:"link",className:"btn bg-primary-subtle text-primary d-flex align-items-center arrow-none",role:"button",children:[e.jsx(a,{icon:"iconoir:filter-alt",className:"me-1"})," Filter"]}),e.jsx(w,{align:"start",children:e.jsx("div",{className:"p-2",children:s.map((i,o)=>e.jsx(c,{label:i,className:b({"mb-2":s.length-1!=o}),id:`filter-${o}`,defaultChecked:!0},o))})})]})}),e.jsx(t,{xs:"auto",children:e.jsxs("button",{type:"button",className:"btn btn-primary",children:[e.jsx(a,{icon:"fa6-solid:plus",className:"me-1"})," Add Contact"]})})]})})]})}),e.jsx(h,{className:"pt-0",children:r&&e.jsx(C,{contacts:r})})]})})})]})};export{pe as default};
//# sourceMappingURL=page-CK5RLUnV.js.map
