import{j as s,L as p,h as x,I as a,r as c,R as n,d as t,C as h,c as j,e as u,f as g}from"./index-UUiNTc0V.js";import{c as f}from"./clsx-B-dksMZM.js";import{R as b}from"./index-CmZRqxph.js";import{e as d}from"./variants-icons-fTER4-PY.js";import{F as m}from"./FormCheck-CUEJfWsW.js";import{f as N}from"./data-yqFInCnj.js";import{P as C}from"./PageMetaData-D364TxUJ.js";import{D as w,a as y,b as k}from"./Dropdown-DyAbvVHF.js";import{B as v}from"./Button-BLYS8AP-.js";import"./Table-BrmIOlpd.js";import"./FormContext-n6TyEwzp.js";import"./FormCheckInput-CTZsx7Pk.js";import"./ElementChildren-9All9Wte.js";import"./other-B4SgM6ZY.js";import"./date-WLc5EZBr.js";import"./french_flag-f1XQnB-q.js";import"./baha_flag-YImHn-n0.js";import"./avatar-1-BO000dvc.js";import"./avatar-2-HWf29V0S.js";import"./avatar-3-CWF5YbYz.js";import"./avatar-4-BIM0t6XN.js";import"./avatar-5-BuQv4wS1.js";import"./avatar-6-UroM5mc-.js";import"./avatar-8-Stif89Jp.js";import"./avatar-9-Pb2h4EL1.js";import"./chatgpt-B6JRjYGz.js";import"./slack-uSnaw-Vs.js";import"./gitlab-qJGS6fLj.js";import"./products-Bsi0yyVD.js";import"./avatar-10-B1FJbhiE.js";import"./avatar-7-BVfp9bJ_.js";import"./DataKey-COGXBUcQ.js";import"./SSRProvider-IAODh1YM.js";import"./usePrevious-BWb-eAjs.js";import"./NavContext-BRvIv2qI.js";import"./useWindow-DJtzQdYK.js";import"./mergeOptionsWithPopperConfig-Cbe8MKVx.js";import"./Button-CuaOUBT4.js";import"./hook-QqkXmZtl.js";import"./extends-CF3RwP-h.js";import"./Anchor-CMDYpN7l.js";import"./InputGroupContext-Bpo_VHnx.js";import"./NavbarContext-BmmKdPPR.js";const F=[{id:"select",header:()=>s.jsx(m,{id:"customer-checkbox"}),cell:({row:{original:{id:e}}})=>s.jsx("div",{style:{width:16},children:s.jsx(m,{id:`checkbox-${e}`})})},{id:"2",header:()=>s.jsx("div",{className:"ps-0",children:"Customer"}),cell:({row:{original:{name:e,avatar:r,id:o}}})=>s.jsxs(p,{to:`/apps/ecommerce/customers/${o}`,className:"ps-0 text-body",children:[s.jsx("img",{src:r,alt:"avatar",className:"thumb-md d-inline rounded-circle me-1"}),s.jsx("p",{className:"d-inline-block align-middle mb-0",children:s.jsx("span",{className:"font-13 fw-medium",children:e})})]})},{header:"Email",accessorKey:"email"},{header:"Status",cell:({row:{original:{status:e}}})=>s.jsx("span",{className:`badge  bg-${d(e)}-subtle text-${d(e)}`,children:e})},{header:"Order",accessorKey:"order"},{header:"Spend",cell:({row:{original:{spend:e}}})=>s.jsxs(s.Fragment,{children:[x,e]})},{id:"3",header:()=>s.jsx("div",{className:"text-end",children:"Action"}),cell:()=>s.jsxs("div",{className:"text-end",children:[s.jsx("span",{role:"button",children:s.jsx(a,{icon:"la:pen",className:"text-secondary fs-18"})}),s.jsx("span",{role:"button",children:s.jsx(a,{icon:"la:trash-alt",className:"text-secondary fs-18"})})]})}],P=({customers:e})=>{const r=[2,5,10,20,50];return s.jsx(b,{columns:F,data:e,rowsPerPageList:r,pageSize:10,tableClass:"mb-0 checkbox-all text-nowrap",theadClass:"table-light",showPagination:!0})},gs=()=>{const e=["All","Fashion","Plants","Toys","Gadgets","Food","Drinks"],[r,o]=c.useState();return c.useEffect(()=>{(async()=>{const i=await N();o(i)})()},[]),s.jsxs(s.Fragment,{children:[s.jsx(C,{title:"Customers"}),s.jsx(n,{children:s.jsx(t,{xs:12,children:s.jsxs(h,{children:[s.jsx(j,{children:s.jsxs(n,{className:"align-items-center",children:[s.jsx(t,{children:s.jsx(u,{as:"h4",children:"Customers"})}),s.jsx(t,{xs:"auto",children:s.jsxs("form",{className:"row g-2",children:[s.jsx(t,{xs:"auto",children:s.jsxs(w,{children:[s.jsxs(y,{variant:"link",className:"btn bg-primary-subtle text-primary d-flex align-items-center arrow-none",role:"button",children:[s.jsx(a,{icon:"iconoir:filter-alt",className:"me-1"})," Filter"]}),s.jsx(k,{align:"start",children:s.jsx("div",{className:"p-2",children:e.map((i,l)=>s.jsx(m,{label:i,className:f({"mb-2":e.length-1!=l}),id:`filter-${l}`,defaultChecked:!0},l))})})]})}),s.jsx(t,{xs:"auto",children:s.jsxs(v,{variant:"primary",type:"button",className:"icons-center",children:[s.jsx(a,{icon:"fa6-solid:plus",className:"me-1"})," Add Product"]})})]})})]})}),s.jsx(g,{className:"pt-0",children:r&&s.jsx(P,{customers:r})})]})})})]})};export{gs as default};
//# sourceMappingURL=page-Dzoy5rdV.js.map
