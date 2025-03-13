import{I as z,r as H,a9 as K,j as e,C as W,c as V,R as r,d as s,e as F,f as U,L as T}from"./index-BCS0cig_.js";import{F as p}from"./FormControl-DyBytbGT.js";import{B as E}from"./Button-DeQEhl8G.js";import{F as $}from"./FormSelect-DmuEe_mQ.js";import{P as G}from"./PageMetaData-wG5U-ou6.js";import"./FormContext-C2U0W2FA.js";import"./Button-BN2bDLjf.js";var P={exports:{}};(function(w,N){(function(C,S){S(N,H)})(K,function(C,S){var g="default"in S?S.default:S;function k(d){return(k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(d)}function l(d,a){for(var i=0;i<a.length;i++){var o=a[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(d,o.key,o)}}function m(d,a,i){return a in d?Object.defineProperty(d,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):d[a]=i,d}function v(d){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(d)}function B(d,a){return(B=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(d,a)}function h(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function D(d){var a=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var i,o=v(d);return i=a?(i=v(this).constructor,Reflect.construct(o,arguments,i)):o.apply(this,arguments),o=this,!(i=i)||typeof i!="object"&&typeof i!="function"?h(o):i}}function L(d,a){var i,o=(a=a===void 0?{}:a).insertAt;d&&typeof document<"u"&&(i=document.head||document.getElementsByTagName("head")[0],(a=document.createElement("style")).type="text/css",o==="top"&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=d:a.appendChild(document.createTextNode(d)))}var b={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};L(`/**
 * Snippets from animate.css
 * Credit goes to https://github.com/daneden
 * github.com/daneden/animate.css
*/
.rsw_1z {
  -webkit-animation-duration: .8192s;
  animation-duration: .8192s;
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
}

/** fadeInRight */
@-webkit-keyframes rsw_1M {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes rsw_1M {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.rsw_1M {
  -webkit-animation-name: rsw_1M;
  animation-name: rsw_1M;
}

/** fadeInLeft */
@-webkit-keyframes rsw_19 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes rsw_19 {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.rsw_19 {
  -webkit-animation-name: rsw_19;
  animation-name: rsw_19;
}

/** fadeOutRight */
@-webkit-keyframes rsw_3C {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes rsw_3C {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.rsw_3C {
  -webkit-animation-name: rsw_3C;
  animation-name: rsw_3C;
}

/** fadeOutLeft */
@-webkit-keyframes rsw_1u {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes rsw_1u {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.rsw_1u {
  -webkit-animation-name: rsw_1u;
  animation-name: rsw_1u;
}
`);var O="rsw_2Y",M="rsw_2f",I="rsw_3G";L(`/** Step Wizard */
.rsw_2Y {
    position: relative;
}

.rsw_2f {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
}

.rsw_3G {
    opacity: 1;
    pointer-events: inherit;
    position: relative;
    z-index: 1;
}
`);var R=function(){(function(j,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(t&&t.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),t&&B(j,t)})(o,S.PureComponent);var d,a,i=D(o);function o(j){var t;return function(n,x){if(!(n instanceof x))throw new TypeError("Cannot call a class as a function")}(this,o),m(h(t=i.call(this,j)),"initialState",function(){var n={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},x=(typeof window>"u"?"undefined":k(window))==="object"?t.getHash():"",u=t.getSteps();u.forEach(function(_,y){n.hashKeys[y]=_.props&&_.props.hashKey||"step".concat(y+1),n.hashKeys[n.hashKeys[y]]=y,n.namedSteps[y]=_.props&&_.props.stepName||"step".concat(y+1),n.namedSteps[n.namedSteps[y]]=y});var f=t.props.initialStep-1;return f&&u[f]&&(n.activeStep=f),t.props.isHashEnabled&&x&&n.hashKeys[x]!==void 0&&(n.activeStep=n.hashKeys[x]),t.props.transitions&&(n.classes[n.activeStep]=t.props.transitions.intro||""),n}),m(h(t),"getHash",function(){return decodeURI(window.location.hash).replace(/^#/,"")}),m(h(t),"getTransitions",function(){return t.props.transitions||{enterRight:"".concat(b.animated," ").concat(b.fadeInRight),enterLeft:"".concat(b.animated," ").concat(b.fadeInLeft),exitRight:"".concat(b.animated," ").concat(b.fadeOutRight),exitLeft:"".concat(b.animated," ").concat(b.fadeOutLeft)}}),m(h(t),"onHashChange",function(){t.setActiveStep(t.state.hashKeys[t.getHash()]||0)}),m(h(t),"isInvalidStep",function(n){return n<0||n>=t.totalSteps}),m(h(t),"setActiveStep",function(n){var x,u,f=t.state.activeStep;f!==n&&(t.isInvalidStep(n)||(x=t.state.classes,u=t.getTransitions(),f<n?(x[f]=u.exitLeft,x[n]=u.enterRight):(x[f]=u.exitRight,x[n]=u.enterLeft),t.setState({activeStep:n,classes:x},function(){t.onStepChange({previousStep:f+1,activeStep:n+1})})))}),m(h(t),"onStepChange",function(n){t.props.onStepChange(n),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)}),m(h(t),"getSteps",function(){return g.Children.toArray(t.props.children)}),m(h(t),"firstStep",function(){return t.goToStep(1)}),m(h(t),"lastStep",function(){return t.goToStep(t.totalSteps)}),m(h(t),"nextStep",function(){return t.setActiveStep(t.state.activeStep+1)}),m(h(t),"previousStep",function(){return t.setActiveStep(t.state.activeStep-1)}),m(h(t),"goToStep",function(n){t.props.isHashEnabled&&typeof n=="string"&&t.state.hashKeys[n]!==void 0?t.setActiveStep(t.state.hashKeys[n]):t.setActiveStep(n-1)}),m(h(t),"goToNamedStep",function(n){typeof n=="string"&&t.state.namedSteps[n]!==void 0?t.setActiveStep(t.state.namedSteps[n]):console.error('Cannot find step with name "'.concat(n,'"'))}),m(h(t),"updateHash",function(n){window.location.hash=t.state.hashKeys[n]}),m(h(t),"isReactComponent",function(n){return n=n.type,typeof n=="function"||k(n)==="object"}),t.state=t.initialState(),t}return d=o,(a=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var j=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},n=this.state.classes,x=g.Children.map(this.getSteps(),function(u,f){return u?(t.isActive=f===j.state.activeStep,t.transitions=n[f],!j.props.isLazyMount||j.props.isLazyMount&&t.isActive?g.createElement(A,t,j.isReactComponent(u)?g.cloneElement(u,t):u):null):null});return g.createElement("div",{className:this.props.className},this.props.nav&&g.cloneElement(this.props.nav,t),g.createElement("div",{className:O},x))}}])&&l(d.prototype,a),o}();R.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var A=function(o){var a=o.children,i=o.isActive,o=o.transitions;return g.createElement("div",{className:"".concat(M," ").concat(o," ").concat(i?I:"").trim()},a)};A.defaultProps={children:[],isActive:!1,transitions:""},C.Step=A,C.default=R,Object.defineProperty(C,"__esModule",{value:!0})})})(P,P.exports);var Y=P.exports;const q=z(Y),J="/assets/task-BU5hbMu0.png",c=()=>{throw new Error("Function not implemented.")},Q=()=>e.jsxs("div",{className:"tab-pane active",id:"step1",children:[e.jsx(F,{as:"h4",className:"my-4  fs-15",children:"Seller Details"}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtFirstNameBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Contact Person"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtFirstNameBilling",name:"txtFirstNameBilling",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtLastNameBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Mobile No."}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtLastNameBilling",name:"txtLastNameBilling",type:"text"})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtCompanyBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Landline No."}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtCompanyBilling",name:"txtCompanyBilling",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtEmailAddressBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Email Address"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtEmailAddressBilling",name:"txtEmailAddressBilling",type:"text"})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtAddress1Billing",className:"col-lg-3 col-form-label text-lg-end",children:"Address 1"}),e.jsx(s,{lg:9,children:e.jsx(p,{as:"textarea",id:"txtAddress1Billing",name:"txtAddress1Billing",rows:4,defaultValue:""})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtAddress2Billing",className:"col-lg-3 col-form-label text-lg-end",children:"Warehouse Address"}),e.jsx(s,{lg:9,children:e.jsx(p,{as:"textarea",id:"txtAddress2Billing",name:"txtAddress2Billing",rows:4,defaultValue:""})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtCityBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Company Type"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtCityBilling",name:"txtCityBilling",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtStateProvinceBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Live Market A/C"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtStateProvinceBilling",name:"txtStateProvinceBilling",type:"text"})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtTelephoneBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Product Category"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtTelephoneBilling",name:"txtTelephoneBilling",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtFaxBilling",className:"col-lg-3 col-form-label text-lg-end",children:"Product Sub Category"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtFaxBilling",name:"txtFaxBilling",type:"text"})})]})})]})]}),X=()=>e.jsxs("div",{className:"tab-pane",id:"step2",children:[e.jsx(F,{as:"h4",className:"my-4 fs-15",children:"Company Document"}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtFirstNameShipping",className:"col-lg-3 col-form-label text-lg-end",children:"PAN Card"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtFirstNameShipping",name:"txtFirstNameShipping",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtLastNameShipping",className:"col-lg-3 col-form-label text-lg-end",children:"VAT/TIN No."}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtLastNameShipping",name:"txtLastNameShipping",type:"text"})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtCompanyShipping",className:"col-lg-3 col-form-label text-lg-end",children:"CST No."}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtCompanyShipping",name:"txtCompanyShipping",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtEmailAddressShipping",className:"col-lg-3 col-form-label text-lg-end",children:"Service Tax No."}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtEmailAddressShipping",name:"txtEmailAddressShipping",type:"text"})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtCityShipping",className:"col-lg-3 col-form-label text-lg-end",children:"Company UIN"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtCityShipping",name:"txtCityShipping",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtStateProvinceShipping",className:"col-lg-3 col-form-label text-lg-end",children:"Declaration"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtStateProvinceShipping",name:"txtStateProvinceShipping",type:"text"})})]})})]})]}),Z=()=>e.jsxs("div",{className:"tab-pane",id:"step3",children:[e.jsx(F,{as:"h4",className:"my-4 fs-15",children:"Bank Details"}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtNameCard",className:"col-lg-3 col-form-label text-lg-end",children:"Name on Card"}),e.jsx(s,{lg:9,children:e.jsx("input",{id:"txtNameCard",name:"txtNameCard",type:"text",className:"form-control"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"ddlCreditCardType",className:"col-lg-3 col-form-label text-lg-end",children:"Credit Card Type"}),e.jsx(s,{lg:9,children:e.jsxs($,{id:"ddlCreditCardType",name:"ddlCreditCardType",children:[e.jsx("option",{children:"--Please Select--"}),e.jsx("option",{value:"AE",children:"American Express"}),e.jsx("option",{value:"VI",children:"Visa"}),e.jsx("option",{value:"MC",children:"MasterCard"}),e.jsx("option",{value:"DI",children:"Discover"})]})})]})})]}),e.jsxs(r,{children:[e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtCreditCardNumber",className:"col-lg-3 col-form-label text-lg-end",children:"Credit Card Number"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtCreditCardNumber",name:"txtCreditCardNumber",type:"text"})})]})}),e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtCardVerificationNumber",className:"col-lg-3 col-form-label text-lg-end",children:"Card Verification Number"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtCardVerificationNumber",name:"txtCardVerificationNumber",type:"text"})})]})})]}),e.jsx(r,{children:e.jsx(s,{md:6,children:e.jsxs(r,{className:"form-group mb-2",children:[e.jsx("label",{htmlFor:"txtExpirationDate",className:"col-lg-3 col-form-label text-lg-end",children:"Expiration Date"}),e.jsx(s,{lg:9,children:e.jsx(p,{id:"txtExpirationDate",name:"txtExpirationDate",type:"text"})})]})})})]}),ee=()=>e.jsxs("div",{className:"tab-pane",id:"step4",children:[e.jsx(F,{as:"h4",className:"my-4 fs-15",children:"Confirm Detail"}),e.jsxs("div",{className:"form-check my-4 text-center",children:[e.jsx("img",{src:J,className:"mb-3",height:60,alt:"task"}),e.jsx("h4",{className:"mb-1 fs-16",children:"You are all set!"}),e.jsx("p",{className:"text-muted",children:"Now you can access your account anytime anywhere"}),e.jsxs("div",{children:[e.jsx("input",{className:"form-check-input float-none",type:"checkbox",id:"flexCheckDefault"}),e.jsx("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"I agree with the Terms and Conditions."})]})]})]}),te=()=>{const w=l=>{const m=v=>{l.goToStep(v)};return e.jsx("nav",{children:e.jsxs("div",{className:"nav nav-tabs",id:"nav-tab",children:[e.jsx(T,{to:"",className:`nav-link ${l.currentStep==1&&"active"}`,id:"step1-tab",onClick:()=>m(1),children:"Seller Details"}),e.jsx(T,{to:"",className:`nav-link ${l.currentStep==2&&"active"}`,id:"step2-tab",onClick:()=>m(2),children:"Company Document"}),e.jsx(T,{to:"",className:`nav-link ${l.currentStep==3&&"active"}`,id:"step3-tab",onClick:()=>m(3),children:"Bank Details"}),e.jsx(T,{to:"",className:`nav-link ${l.currentStep==4&&"active"}`,id:"step4-tab",onClick:()=>m(4),children:"Confirm Detail"})]})})},N=l=>{const m=()=>{l.previousStep()},v=()=>{l.nextStep()},B=()=>{l.lastStep()};return e.jsxs("div",{children:[l.currentStep>1&&e.jsx(E,{type:"button",id:"stepPrev",variant:"secondary",className:"float-start",onClick:m,children:"Previous"}),l.currentStep<l.totalSteps&&e.jsx(E,{type:"button",id:"stepNext",variant:"primary",onClick:v,className:"float-end",children:"Next"}),l.currentStep===l.totalSteps&&e.jsx(E,{type:"button",id:"stepFinish",variant:"danger",onClick:B,className:"float-end",children:"Finish"})]})},C=l=>e.jsxs(e.Fragment,{children:[e.jsx(w,{currentStep:1,totalSteps:4,goToStep:c,...l}),e.jsx(Q,{}),e.jsx(N,{isActive:!1,currentStep:1,totalSteps:4,nextStep:c,goToNamedStep:c,goToStep:c,lastStep:c,previousStep:c,firstStep:c,...l})]}),S=l=>e.jsxs(e.Fragment,{children:[e.jsx(w,{currentStep:2,totalSteps:4,goToStep:c,...l}),e.jsx(X,{}),e.jsx(N,{isActive:!1,currentStep:2,totalSteps:4,firstStep:c,lastStep:c,nextStep:c,previousStep:c,goToStep:c,goToNamedStep:c,...l})]}),g=l=>e.jsxs(e.Fragment,{children:[e.jsx(w,{currentStep:3,totalSteps:4,goToStep:c,...l}),e.jsx(Z,{}),e.jsx(N,{isActive:!1,currentStep:3,totalSteps:4,firstStep:c,lastStep:c,nextStep:c,previousStep:c,goToStep:c,goToNamedStep:c,...l})]}),k=l=>e.jsxs(e.Fragment,{children:[e.jsx(w,{currentStep:4,totalSteps:4,goToStep:c,...l}),e.jsx(ee,{}),e.jsx(N,{isActive:!1,currentStep:4,totalSteps:4,firstStep:c,lastStep:c,nextStep:c,previousStep:c,goToStep:c,goToNamedStep:c,...l})]});return e.jsxs(W,{children:[e.jsx(V,{children:e.jsx(r,{className:"align-items-center",children:e.jsx(s,{children:e.jsx(F,{as:"h4",children:"Custom Steps Wizard"})})})}),e.jsx(U,{className:"card-body pt-0",children:e.jsx("form",{method:"post",id:"custom-step",children:e.jsxs(q,{children:[e.jsx(C,{}),e.jsx(S,{}),e.jsx(g,{}),e.jsx(k,{})]})})})]})},ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(G,{title:"Wizard"}),e.jsx(r,{className:"justify-content-center",children:e.jsx(s,{xs:12,children:e.jsx(te,{})})})]});export{ce as default};
//# sourceMappingURL=page-DwxA1029.js.map
