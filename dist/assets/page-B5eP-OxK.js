import{j as e,d as a,R as c,C as x,c as f,e as y,I as r,f as g}from"./index-UUiNTc0V.js";import{C as b}from"./ComponentContainerCard-DfvpmWMm.js";import{T as j}from"./TextAreaFormInput-B6gm978M.js";import{T as d}from"./TextFormInput-CY5MeeiQ.js";import{c as w,d as n,o as v}from"./index.esm-CFigF2xX.js";import{u as C}from"./index.esm-Bu9rMimo.js";import{F as p}from"./FormLabel-GeQA8Xa_.js";import{P as N}from"./PageMetaData-D364TxUJ.js";import{A as I,a as h,b as m,c as u}from"./Accordion-C3PYfeso.js";import"./Button-BLYS8AP-.js";import"./Button-CuaOUBT4.js";import"./FormContext-n6TyEwzp.js";import"./FormControl-CuFy3YGR.js";import"./hook-QqkXmZtl.js";import"./extends-CF3RwP-h.js";import"./Collapse-DbfkNPtb.js";import"./createChainedFunction-Vh3cVaa6.js";const k=(i,s)=>Array(Math.ceil(i.length/s)).fill(1).map((o,l)=>l*s).map(o=>i.slice(o,o+s)),T=[{question:"What is Rizz?",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",icon:"iconoir:hexagon-dice"},{question:"What cryptocurrency can I use to buy Rizz?",answer:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.",icon:"iconoir:flower"},{question:"Can I trade Rizz?",answer:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",icon:"iconoir:wolf"},{question:"How buy Rizz on coin?",answer:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.",icon:"iconoir:magic-wand"},{question:"Where can I download the wallet?",answer:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",icon:"iconoir:emoji"},{question:"What is Rizz?",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",icon:"iconoir:bitcoin-circle"}],S=()=>{const i=w({name:n().required("please enter your name"),email:n().email("please enter valid email").required("please enter your email"),subject:n().required("please enter your subject"),message:n().required("please enter your message")}),{control:s,handleSubmit:t}=C({resolver:v(i)});return e.jsx(b,{title:"Have More Questions",children:e.jsxs("form",{onSubmit:t(()=>{}),children:[e.jsxs(p,{className:"row",children:[e.jsx(a,{lg:6,children:e.jsx(d,{name:"name",placeholder:"Name",control:s,containerClassName:"mb-2"})}),e.jsx(a,{lg:6,children:e.jsx(d,{name:"email",type:"email",placeholder:"Email",control:s,containerClassName:"mb-2"})})]}),e.jsx(p,{className:"row",children:e.jsx(a,{xs:12,children:e.jsx(d,{name:"subject",placeholder:"Subject",control:s,containerClassName:"mb-2"})})}),e.jsx("div",{className:"form-group",children:e.jsx(j,{name:"message",placeholder:"Your message",rows:4,control:s,containerClassName:"mb-2"})}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-block px-4",children:"Send Email"})]})})},z=()=>e.jsx(b,{title:"Questions With Accordion",children:e.jsxs(I,{defaultActiveKey:"1",id:"accordionExample-faq",children:[e.jsxs(h,{eventKey:"1",children:[e.jsx(m,{as:"h5",className:"m-0",id:"headingOne",children:"What is Rizz?"}),e.jsxs(u,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(h,{eventKey:"2",children:[e.jsx(m,{as:"h5",className:"m-0",id:"headingTwo",children:"How buy Rizz on coin?"}),e.jsxs(u,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(h,{eventKey:"3",children:[e.jsx(m,{as:"h5",className:"m-0",id:"headingThree",children:"What cryptocurrency can i use to buy Rizz?"}),e.jsxs(u,{children:[e.jsx("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})}),G=()=>{const i=k(T,3);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"FAQs"}),e.jsx(c,{className:"justify-content-center",children:e.jsx(a,{xs:12,children:e.jsxs(x,{children:[e.jsxs(f,{className:"text-center",children:[e.jsx(y,{as:"h4",className:"pt-2 fw-semibold mb-2 fs-18",children:"Most Commonly Asked Questions"}),e.jsxs("p",{children:[" ",e.jsx(r,{icon:"la:grip-lines",className:"text-primary fs-18"})," ",e.jsx(r,{icon:"la:question-circle",className:"text-primary fs-18"})," ",e.jsx(r,{icon:"la:grip-lines",className:"text-primary fs-18"})]})]}),e.jsx(g,{className:"pt-0",children:e.jsx(c,{children:i.map((s,t)=>e.jsx(a,{lg:6,children:s.map((o,l)=>e.jsxs("div",{className:"p-4 rounded mb-3 border-dashed border-theme-color",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("div",{className:"d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto",children:e.jsx(r,{icon:o.icon,className:"h5 align-self-center mb-0 text-dark"})}),e.jsxs("h6",{className:"fs-15 d-inline-block ms-1",children:[" ",o.question]})]}),e.jsx("p",{className:"fs-14 ms-45 text-muted mb-0",children:o.answer})]},l))},t))})})]})})}),e.jsxs(c,{className:"justify-content-center",children:[e.jsx(a,{md:6,lg:6,children:e.jsx(z,{})}),e.jsx(a,{md:6,lg:6,children:e.jsx(S,{})})]})]})};export{G as default};
//# sourceMappingURL=page-B5eP-OxK.js.map
