import{j as s,C as i,c,R as r,d as t,e as o,f as l,I as h}from"./index-UUiNTc0V.js";import{c as g}from"./products-Bsi0yyVD.js";import{D as x,a as j,b as p,c as a}from"./Dropdown-DyAbvVHF.js";import{_ as N}from"./react-apexcharts.min-CeZx1-bE.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as w}from"./Button-BLYS8AP-.js";import{P as C}from"./PageMetaData-D364TxUJ.js";import"./avatar-1-BO000dvc.js";import"./avatar-10-B1FJbhiE.js";import"./avatar-2-HWf29V0S.js";import"./avatar-3-CWF5YbYz.js";import"./avatar-4-BIM0t6XN.js";import"./avatar-5-BuQv4wS1.js";import"./avatar-6-UroM5mc-.js";import"./avatar-7-BVfp9bJ_.js";import"./avatar-8-Stif89Jp.js";import"./avatar-9-Pb2h4EL1.js";import"./date-WLc5EZBr.js";import"./DataKey-COGXBUcQ.js";import"./SSRProvider-IAODh1YM.js";import"./usePrevious-BWb-eAjs.js";import"./NavContext-BRvIv2qI.js";import"./useWindow-DJtzQdYK.js";import"./mergeOptionsWithPopperConfig-Cbe8MKVx.js";import"./Button-CuaOUBT4.js";import"./hook-QqkXmZtl.js";import"./extends-CF3RwP-h.js";import"./Anchor-CMDYpN7l.js";import"./InputGroupContext-Bpo_VHnx.js";import"./NavbarContext-BmmKdPPR.js";const y=()=>s.jsxs(i,{children:[s.jsx(c,{children:s.jsx(r,{className:"align-items-center",children:s.jsx(t,{children:s.jsx(o,{children:"Customers Details"})})})}),s.jsx(l,{className:"pt-0",children:s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"table mb-0",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Name"}),s.jsx("th",{children:"Ext."}),s.jsx("th",{children:"City"}),s.jsx("th",{"data-type":"date","data-format":"YYYY/DD/MM",children:"Start Date"}),s.jsx("th",{children:"Completion"})]})}),s.jsx("tbody",{children:g.slice(0,11).map((e,n)=>s.jsxs("tr",{children:[s.jsxs("td",{className:"d-flex align-items-center",children:[s.jsx("img",{src:e.avatar,alt:"avatar",className:"thumb-md rounded-circle me-1"}),e.name]}),s.jsx("td",{children:e.order}),s.jsx("td",{children:e.city}),s.jsx("td",{children:new Date(e.startDate).toLocaleDateString()}),s.jsxs("td",{children:[e.completion,"%"]})]},n))})]})})})]}),D=[{title:"Total Customers",stat:"38,321"},{title:"New Customers",stat:"946"},{title:"Returning Customers",stat:"70.8%"},{title:"Bounce Rate",stat:"1.5%"}],v=[{name:"Twitter",clickCount:2215,icon:"icofont-twitter",audience:{count:214,change:1.9},commission:{count:3251,change:.5},variant:"bg-blue"},{name:"Google",clickCount:2154,icon:"icofont-google-plus",audience:{count:159,change:2.5},commission:{count:1245,change:.7},variant:"bg-danger"},{name:"Instagram",clickCount:3251,icon:"icofont-instagram",audience:{count:124,change:1.7},commission:{count:2514,change:.2},variant:"bg-warning"}],k=()=>s.jsxs(i,{children:[s.jsx(c,{children:s.jsxs(r,{className:"align-items-center",children:[s.jsx(t,{children:s.jsx(o,{children:"Customers Data"})}),s.jsx(t,{xs:"auto",children:s.jsxs(x,{children:[s.jsxs(j,{className:"btn bt btn-light",children:[s.jsx("i",{className:"icofont-calendar fs-5 me-1"}),"This Year",s.jsx(h,{icon:"la:angle-down",className:"ms-1"})]}),s.jsxs(p,{align:"end",children:[s.jsx(a,{href:"#",children:"Today"}),s.jsx(a,{href:"#",children:"Last Week"}),s.jsx(a,{href:"#",children:"Last Month"}),s.jsx(a,{href:"#",children:"This Year"})]})]})})]})}),s.jsx(l,{className:"pt-0",children:s.jsx(r,{className:"g-3",children:D.map((e,n)=>s.jsx(t,{md:6,children:s.jsx(i,{className:"shadow-none border mb-3 mb-lg-0",children:s.jsx(l,{children:s.jsx(r,{className:"align-items-center",children:s.jsxs(t,{className:"text-center",children:[s.jsx("span",{className:"fs-18 fw-semibold",children:e.stat}),s.jsx("h6",{className:"text-uppercase text-muted mt-2 m-0",children:e.title})]})})})})},n))})})]}),T=()=>{const e={series:[{name:"New Customers ",data:[0,20,15,19,14,25,30]},{name:"Returning Customers",data:[0,8,7,13,26,16,25]}],chart:{fontFamily:"inherit",height:233,type:"line",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["var(--bs-primary)","var(--bs-primary-bg-subtle)"],grid:{show:!0,strokeDashArray:3},stroke:{curve:"smooth",colors:["var(--bs-primary)","var(--bs-primary-bg-subtle)"],width:2},markers:{colors:["var(--bs-primary)","var(--bs-primary-bg-subtle)"],strokeColors:"transparent"},tooltip:{x:{show:!1},followCursor:!0}};return s.jsxs(i,{children:[s.jsx(c,{children:s.jsxs(r,{className:"align-items-center",children:[s.jsx(t,{children:s.jsx(o,{children:"Customers Growth"})}),s.jsx(t,{xs:"auto",children:s.jsxs(x,{children:[s.jsxs(j,{className:"btn bt btn-light",children:[s.jsx("i",{className:"icofont-calendar fs-5 me-1"}),"This Year",s.jsx(h,{icon:"la:angle-down",className:"ms-1"})]}),s.jsxs(p,{align:"end",children:[s.jsx(a,{href:"#",children:"Today"}),s.jsx(a,{href:"#",children:"Last Week"}),s.jsx(a,{href:"#",children:"Last Month"}),s.jsx(a,{href:"#",children:"This Year"})]})]})})]})}),s.jsx(l,{className:"pt-0",children:s.jsx(N,{height:233,options:e,series:e.series,type:"line"})})]})},Y=({audience:e,clickCount:n,commission:m,icon:u,name:f,variant:b})=>s.jsx(i,{children:s.jsxs(l,{children:[s.jsxs(r,{className:"d-flex justify-content-center border-dashed-bottom pb-3",children:[s.jsxs(t,{xs:9,children:[s.jsx("p",{className:"text-dark mb-0 fw-semibold fs-14",children:f}),s.jsxs("h3",{className:"mt-2 mb-0 fw-bold",children:[n," ",s.jsx("span",{className:"fs-13 text-muted",children:"Click"})," "]})]}),s.jsx(t,{xs:3,className:"align-self-center",children:s.jsx("div",{className:d("d-flex justify-content-center align-items-center thumb-xl rounded-circle mx-auto",b),children:s.jsx("i",{className:d("h1 align-self-center mb-0 text-white",u)})})})]}),s.jsxs(r,{className:"d-flex justify-content-center  mt-3 text-center",children:[s.jsxs(t,{xs:6,children:[s.jsxs("h5",{className:"mb-2 fs-18 mb-0 fw-bold",children:[e.count," ",s.jsxs("span",{className:"text-success fw-normal fs-12",children:[e.change,"%"]})]}),s.jsx("p",{className:"text-muted mb-0 fw-semibold fs-14",children:"Audiance"})]}),s.jsxs(t,{xs:6,className:"align-self-center",children:[s.jsxs("h5",{className:"mb-2 fs-18 mb-0 fw-bold",children:[m.count," ",s.jsxs("span",{className:"text-danger fw-normal fs-12",children:[m.change,"%"]})," "]}),s.jsx("p",{className:"text-muted mb-0 fw-semibold fs-14",children:"Comission"})]})]}),s.jsx("div",{className:"text-center mt-3",children:s.jsx(w,{variant:"outline-primary",type:"button",className:"px-3",children:"Report"})})]})}),R=()=>s.jsx(s.Fragment,{children:v.map((e,n)=>s.jsx(t,{md:6,lg:4,children:s.jsx(Y,{...e})},n))}),is=()=>s.jsxs(s.Fragment,{children:[s.jsx(C,{title:"Customers"}),s.jsxs(r,{children:[s.jsx(t,{md:12,lg:5,children:s.jsx(k,{})}),s.jsx(t,{md:12,lg:7,children:s.jsx(T,{})})]}),s.jsx(r,{className:"justify-content-center",children:s.jsx(R,{})}),s.jsx(r,{children:s.jsx(t,{xs:12,children:s.jsx(y,{})})})]});export{is as default};
//# sourceMappingURL=page-Dqy9bq4c.js.map
