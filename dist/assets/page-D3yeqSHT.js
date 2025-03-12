import{j as e,R as u,d as n,r as j}from"./index-UUiNTc0V.js";import{P as C}from"./PageMetaData-D364TxUJ.js";import{C as c}from"./ComponentContainerCard-DfvpmWMm.js";import{P as x}from"./PasswordFormInput-CfkY3gse.js";import{T as h}from"./TextFormInput-CY5MeeiQ.js";import{c as F,d as m,e as P,o as q}from"./index.esm-CFigF2xX.js";import{F as r}from"./FormContext-n6TyEwzp.js";import{I as f,a as v}from"./InputGroup-JEwrsxee.js";import{u as N}from"./index.esm-Bu9rMimo.js";import{F as y}from"./Form-QbBLU92o.js";import{F as s,a as t}from"./FormLabel-GeQA8Xa_.js";import{F as a}from"./FormControl-CuFy3YGR.js";import{F as S}from"./FormSelect-DLxzYE-u.js";import{F as g}from"./FormCheck-CUEJfWsW.js";import{B as p}from"./Button-BLYS8AP-.js";import"./FormCheckInput-CTZsx7Pk.js";import"./InputGroupContext-Bpo_VHnx.js";import"./ElementChildren-9All9Wte.js";import"./Button-CuaOUBT4.js";const w=()=>{const[l,i]=j.useState(!1),d=o=>{o.currentTarget.checkValidity()||(o.preventDefault(),o.stopPropagation()),i(!0)};return e.jsx(c,{title:"Bootstrap Custom Styles",children:e.jsxs(y,{className:"row g-3 needs-validation",noValidate:!0,validated:l,onSubmit:d,children:[e.jsxs(s,{className:"col-md-4",children:[e.jsx(t,{children:"First name"}),e.jsx(a,{type:"text",id:"validationCustom01",placeholder:"First name",defaultValue:"Mark",required:!0}),e.jsx(r,{children:"Looks good!"})]}),e.jsxs(s,{className:"col-md-4",children:[e.jsx(t,{children:"Last name"}),e.jsx(a,{type:"text",id:"validationCustom02",placeholder:"Last name",defaultValue:"Otto",required:!0}),e.jsx(r,{children:"Looks good!"})]}),e.jsxs(s,{className:"col-md-4",children:[e.jsx(t,{children:"Username"}),e.jsxs(f,{children:[e.jsx(v,{id:"inputGroupPrepend",children:"@"}),e.jsx(a,{type:"text",id:"validationCustomUsername",placeholder:"Username",required:!0}),e.jsx(r,{type:"invalid",children:"Please choose a username."})]})]}),e.jsxs(s,{className:"col-md-6",children:[e.jsx(t,{children:"City"}),e.jsx(a,{type:"text",id:"validationCustom03",placeholder:"City",required:!0}),e.jsx(r,{type:"invalid",children:"Please provide a valid city."})]}),e.jsxs(s,{className:"col-md-3",children:[e.jsx(t,{children:"State"}),e.jsxs(S,{id:"validationCustom04",required:!0,children:[e.jsx("option",{defaultValue:"selected",disabled:!0,children:"Choose..."}),e.jsx("option",{children:"..."})]}),e.jsx(r,{type:"invalid",children:"Please select a valid state."})]}),e.jsxs(s,{className:"col-md-3",children:[e.jsx(t,{children:"Zip"}),e.jsx(a,{type:"text",id:"validationCustom05",placeholder:"Zip",required:!0}),e.jsx(r,{type:"invalid",children:"Please provide a valid zip."})]}),e.jsx(s,{className:"col-12",children:e.jsx(g,{id:"invalidCheck",required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting.",feedbackType:"invalid"})}),e.jsx(n,{xs:12,children:e.jsx(p,{variant:"primary",type:"submit",children:"Submit form"})})]})})},V=()=>{const[l,i]=j.useState(!1),d=o=>{o.currentTarget.checkValidity()||(o.preventDefault(),o.stopPropagation()),i(!0)};return e.jsx(c,{title:"Validation Tooltips",children:e.jsxs(y,{className:"row g-3 needs-validation",noValidate:!0,validated:l,onSubmit:d,children:[e.jsxs(s,{className:"position-relative col-md-4",children:[e.jsx(t,{children:"First name"}),e.jsx(a,{type:"text",placeholder:"First name",defaultValue:"Mark",required:!0}),e.jsx(r,{tooltip:!0,children:"Looks good!"}),e.jsx(r,{type:"invalid",tooltip:!0,children:"Please enter first name."})]}),e.jsxs(s,{className:"position-relative col-md-4",children:[e.jsx(t,{children:"Last name"}),e.jsx(a,{type:"text",placeholder:"Last name",defaultValue:"Otto",required:!0}),e.jsx(r,{tooltip:!0,children:"Looks good!"}),e.jsx(r,{type:"invalid",tooltip:!0,children:"Please enter last name."})]}),e.jsxs(s,{className:"position-relative col-md-4",children:[e.jsx(t,{children:"Username"}),e.jsxs(f,{children:[e.jsx(v,{children:"@"}),e.jsx(a,{type:"text",placeholder:"Username",required:!0}),e.jsx(r,{type:"invalid",tooltip:!0,children:"Please choose a unique and valid username."})]})]}),e.jsxs(s,{className:"position-relative col-md-6",children:[e.jsx(t,{children:"City"}),e.jsx(a,{type:"text",placeholder:"City",required:!0}),e.jsx(r,{type:"invalid",tooltip:!0,children:"Please provide a valid city."})]}),e.jsxs(s,{className:"position-relative col-md-3",children:[e.jsx(t,{children:"State"}),e.jsx(a,{type:"text",placeholder:"State",required:!0}),e.jsx(r,{type:"invalid",tooltip:!0,children:"Please provide a valid state."})]}),e.jsxs(s,{className:"position-relative col-md-3",children:[e.jsx(t,{children:"Zip"}),e.jsx(a,{type:"text",placeholder:"Zip",required:!0}),e.jsx(r,{type:"invalid",tooltip:!0,children:"Please provide a valid zip."})]}),e.jsx(n,{xs:12,children:e.jsx(p,{variant:"primary",type:"submit",children:"Submit form"})})]})})},k=()=>{const l=F({username:m().required("Username is required"),email:m().email("Enter a valid email").required("Email is required"),password:m().min(6,"Password must be of minimum 6 characters").required("Password is required"),confirmPassword:m().oneOf([P("password")],"Passwords must match").required("Confirm Password is required")}),{control:i,handleSubmit:d}=N({resolver:q(l)});return e.jsx(c,{title:"Custom Validation Form",children:e.jsxs("form",{id:"form-validation-2",onSubmit:d(()=>{}),className:"form",children:[e.jsx(h,{name:"username",label:"Username",containerClassName:"mb-2",placeholder:"Enter Username",control:i}),e.jsx(h,{name:"email",label:"Email",type:"email",placeholder:"Enter email",containerClassName:"mb-2",control:i}),e.jsx(x,{name:"password",label:"Password",containerClassName:"mb-2",placeholder:"Enter password",control:i}),e.jsx(x,{name:"confirmPassword",label:"Confirm Password",placeholder:"Enter password again",containerClassName:"mb-3",control:i}),e.jsx(p,{variant:"primary",type:"submit",children:"Submit form"})]})})},E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{className:"justify-content-center",children:[e.jsx(n,{md:6,children:e.jsx(w,{})}),e.jsx(n,{md:6,children:e.jsx(V,{})})]}),e.jsx(u,{children:e.jsx(n,{md:6,children:e.jsx(k,{})})})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Validation"}),e.jsx(E,{})]});export{W as default};
//# sourceMappingURL=page-D3yeqSHT.js.map
