function r(...u){return u.filter(n=>n!=null).reduce((n,e)=>{if(typeof e!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?e:function(...t){n.apply(this,t),e.apply(this,t)}},null)}export{r as c};
//# sourceMappingURL=createChainedFunction-Vh3cVaa6.js.map
