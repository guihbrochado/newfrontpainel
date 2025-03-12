import{b as A,r as s,j as e,R as m,d as h,I as S,g}from"./index-UUiNTc0V.js";import{C as k}from"./ComponentContainerCard-DfvpmWMm.js";import{P as B}from"./PageMetaData-D364TxUJ.js";import{A as u}from"./Alert-CmRbplvD.js";import{B as x}from"./Button-BLYS8AP-.js";import{T as I}from"./Table-BrmIOlpd.js";import{M as i}from"./Modal-DN_DDrhy.js";import{F as d}from"./Form-QbBLU92o.js";import"./hook-QqkXmZtl.js";import"./extends-CF3RwP-h.js";import"./Anchor-CMDYpN7l.js";import"./Button-CuaOUBT4.js";import"./useWindow-DJtzQdYK.js";import"./usePrevious-BWb-eAjs.js";import"./DataKey-COGXBUcQ.js";import"./hasClass-DCL2hLsE.js";import"./NoopTransition-DE9j_Nql.js";import"./FormCheck-CUEJfWsW.js";import"./FormContext-n6TyEwzp.js";import"./FormCheckInput-CTZsx7Pk.js";import"./ElementChildren-9All9Wte.js";import"./FormControl-CuFy3YGR.js";import"./FormLabel-GeQA8Xa_.js";import"./FormSelect-DLxzYE-u.js";const ae=()=>{const{user:j,loading:p}=A(),[b,C]=s.useState([]),[n,t]=s.useState(""),[f,v]=s.useState(""),[w,c]=s.useState(!1),[l,y]=s.useState({name:""});s.useEffect(()=>{(async()=>{if(p||!j){t("Usuário não autenticado.");return}try{const r=localStorage.getItem("token"),o=await g.get("https://webapp396758.ip-45-33-113-78.cloudezapp.io/public/api/posts-categories",{headers:{Authorization:`Bearer ${r}`}});console.log(o.data),o.data&&Array.isArray(o.data)?C(o.data):t("Erro ao carregar categorias.")}catch(r){console.error("Erro ao buscar categorias:",r),t("Erro ao carregar categorias.")}})()},[j,p]);const N=async()=>{var a;if(!l.name.trim()){t("O nome da categoria é obrigatório.");return}try{const r=localStorage.getItem("token"),o=await g.post("https://webapp396758.ip-45-33-113-78.cloudezapp.io/public/api/posts-categories",{name:l.name},{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}});console.log(o.data),v("Categoria criada com sucesso!"),c(!1),y({name:""});const E=await g.get("https://webapp396758.ip-45-33-113-78.cloudezapp.io/public/api/posts-categories",{headers:{Authorization:`Bearer ${r}`}});C(E.data)}catch(r){console.error("Erro ao criar categoria:",r),((a=r.response)==null?void 0:a.status)===422?t("Erro ao criar categoria: dados inválidos."):t("Erro ao criar categoria.")}};return n?e.jsx(m,{className:"justify-content-center",children:e.jsx(h,{md:12,lg:12,children:e.jsx(u,{variant:"danger",children:n})})}):p?e.jsx(m,{className:"justify-content-center",children:e.jsx(h,{md:12,lg:12,children:e.jsx("div",{children:"Carregando..."})})}):e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Categorias de Posts"}),e.jsx(m,{className:"justify-content-center",children:e.jsx(h,{md:12,lg:12,children:e.jsxs(k,{title:"Categorias de Posts",children:[f&&e.jsx(u,{variant:"success",children:f}),n&&e.jsx(u,{variant:"danger",children:n}),e.jsx("div",{className:"d-flex justify-content-end mb-3",children:e.jsxs(x,{variant:"primary",onClick:()=>c(!0),children:[e.jsx(S,{icon:"la:plus",className:"me-1"})," Adicionar Categoria"]})}),e.jsxs(I,{striped:!0,className:"table mb-0",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Título"}),e.jsx("th",{children:"Quantidade de Posts"})]})}),e.jsx("tbody",{children:b.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.posts?a.posts.length:0})]},a.id))})]})]})})}),e.jsxs(i,{show:w,onHide:()=>c(!1),children:[e.jsx(i.Header,{closeButton:!0,children:e.jsx(i.Title,{children:"Criar Nova Categoria"})}),e.jsx(i.Body,{children:e.jsx(d,{children:e.jsxs(d.Group,{className:"mb-3",controlId:"categoryName",children:[e.jsx(d.Label,{children:"Nome da Categoria"}),e.jsx(d.Control,{type:"text",placeholder:"Digite o nome da categoria",value:l.name,onChange:a=>y({...l,name:a.target.value})})]})})}),e.jsxs(i.Footer,{children:[e.jsx(x,{variant:"secondary",onClick:()=>c(!1),children:"Cancelar"}),e.jsx(x,{variant:"primary",onClick:N,children:"Criar Categoria"})]})]})]})};export{ae as default};
//# sourceMappingURL=page-vWO8AkJs.js.map
