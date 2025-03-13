import{m as ne,b as le,l as ie,r as o,j as e,R as S,d as y,g as E}from"./index-BCS0cig_.js";import{C as ce}from"./ComponentContainerCard-Cb_e9E7o.js";import{P as de}from"./PageMetaData-wG5U-ou6.js";import{d as ue}from"./index-CK8zeYvh.js";import{A as N}from"./Alert-DNG6lhNR.js";import{F as s}from"./Form-Bfo2v19v.js";import{B as x}from"./Button-DeQEhl8G.js";import{M as p}from"./Modal-OU7kPsZL.js";import"./hook-8yLRWsFC.js";import"./extends-CF3RwP-h.js";import"./Anchor-DDbQbNtO.js";import"./Button-BN2bDLjf.js";import"./FormCheck-DCqVgo34.js";import"./FormContext-C2U0W2FA.js";import"./FormCheckInput-DMKv9iTc.js";import"./ElementChildren-D4oQkQsm.js";import"./FormControl-DyBytbGT.js";import"./FormLabel-D8w_mrTU.js";import"./FormSelect-DmuEe_mQ.js";import"./useWindow-BOkGfrdz.js";import"./usePrevious-CoDrhLx9.js";import"./DataKey-COGXBUcQ.js";import"./hasClass-BYYRATLY.js";import"./NoopTransition-C1r8Fpoq.js";const De=()=>{const{postId:m}=ne(),{user:w,loading:j}=le(),K=ie(),[L,P]=o.useState(""),[T,_]=o.useState(""),[A,I]=o.useState(""),[R,k]=o.useState(""),[G,z]=o.useState(""),[Q,W]=o.useState([]),[D,H]=o.useState("rascunho"),[v,B]=o.useState(""),[U,X]=o.useState(null),[pe,Z]=o.useState(null),[$,F]=o.useState(""),[h,u]=o.useState(null),[M,V]=o.useState(null),[O,q]=o.useState(!1),[g,J]=o.useState(null),[ee,f]=o.useState(!1),[te,se]=o.useState(""),Y=o.useRef(null),b="https://webapp396758.ip-45-33-113-78.cloudezapp.io/public/api";o.useEffect(()=>{if(j||!w){u("Usuário não autenticado.");return}if(!m){u("ID do post não fornecido.");return}const t=async()=>{var c,a,d;try{const i=localStorage.getItem("token");console.log("Token usado:",i);const r=(await E.get(`${b}/posts/${m}`,{headers:{Authorization:`Bearer ${i}`}})).data.data;console.log("Dados recebidos do post:",r),P(r.title||""),_(r.subtitle||""),I(r.video_url||""),k(r.audio_url||""),z(r.category_id||""),H(r.status||"rascunho"),B(r.schedule_date?new Date(r.schedule_date).toISOString().slice(0,16):""),F(r.tags||""),J(r.design||{counters:{},body:{id:"default",rows:[],headers:[],footers:[],values:{}}})}catch(i){const n=i;u(((a=(c=n.response)==null?void 0:c.data)==null?void 0:a.message)||"Erro ao carregar o post."),console.error("Erro ao buscar post:",((d=n.response)==null?void 0:d.data)||n.message)}},l=async()=>{var c,a,d;q(!0);try{const i=localStorage.getItem("token"),n=await E.get(`${b}/posts-categories`,{headers:{Authorization:`Bearer ${i}`}});W(n.data)}catch(i){const n=i;u(((a=(c=n.response)==null?void 0:c.data)==null?void 0:a.message)||"Erro ao carregar categorias."),console.error("Erro ao buscar categorias:",((d=n.response)==null?void 0:d.data)||n.message)}finally{q(!1)}};t(),l()},[m,w,j]);const C=t=>{var c;const l=(c=Y.current)==null?void 0:c.editor;l==null||l.exportHtml(a=>{const{html:d,design:i}=a;t(d,i)})},ae=t=>{g?(console.log("Carregando design no EmailEditor:",g),t==null||t.loadDesign(g)):(console.log("Nenhum design encontrado, carregando padrão."),t==null||t.loadDesign({counters:{},body:{id:"default",rows:[],headers:[],footers:[],values:{}}}))},oe=()=>{C(t=>{se(t),f(!0)})},re=async t=>{t.preventDefault(),u(null),V(null),C(async(l,c)=>{var d,i;const a=new FormData;a.append("title",L),a.append("subtitle",T),a.append("content",l),a.append("category_id",G),a.append("status",D),a.append("video_url",A),a.append("audio_url",R),a.append("tags",$),v&&a.append("schedule_date",v),U&&a.append("image",U),c&&a.append("design",JSON.stringify(c));try{const n=localStorage.getItem("token");console.log("Enviando dados para atualização:",Object.fromEntries(a));const r=await E.put(`${b}/posts/${m}`,a,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"multipart/form-data"}});console.log("Resposta do servidor:",r.data),V("Post atualizado com sucesso!"),J(c||g),setTimeout(()=>K("/admin/posts"),2e3)}catch(n){const r=n;console.log("Erro completo:",r.response),u(((i=(d=r.response)==null?void 0:d.data)==null?void 0:i.message)||"Erro ao atualizar o post.")}})};return h?e.jsx(S,{className:"justify-content-center",children:e.jsx(y,{md:12,lg:12,children:e.jsx(N,{variant:"danger",children:h})})}):j?e.jsx(S,{className:"justify-content-center",children:e.jsx(y,{md:12,lg:12,children:e.jsx("div",{children:"Carregando..."})})}):e.jsxs(e.Fragment,{children:[e.jsx(de,{title:"Editar Post"}),e.jsx(S,{className:"justify-content-center",children:e.jsx(y,{md:12,lg:12,children:e.jsxs(ce,{title:"Editar Post",children:[M&&e.jsx(N,{variant:"success",children:M}),h&&e.jsx(N,{variant:"danger",children:h}),e.jsxs(s,{onSubmit:re,children:[e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Título"}),e.jsx(s.Control,{type:"text",value:L,onChange:t=>P(t.target.value),required:!0})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Subtítulo"}),e.jsx(s.Control,{type:"text",value:T,onChange:t=>_(t.target.value)})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Conteúdo"}),e.jsxs("div",{children:[e.jsx(x,{variant:"secondary",className:"mb-2 me-2",onClick:()=>C(t=>console.log("HTML exportado:",t)),children:"Exportar HTML"}),e.jsx(x,{variant:"info",className:"mb-2",onClick:oe,children:"Visualizar em Tela Cheia"}),e.jsx(ue.EmailEditor,{ref:Y,onReady:ae})]})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Vídeo (URL YouTube/Vimeo)"}),e.jsx(s.Control,{type:"url",value:A,onChange:t=>I(t.target.value),placeholder:"https://youtube.com/..."})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Áudio (URL)"}),e.jsx(s.Control,{type:"url",value:R,onChange:t=>k(t.target.value),placeholder:"https://..."})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Imagem"}),e.jsx(s.Control,{type:"file",accept:"image/*",onChange:t=>{var l;return X(((l=t.target.files)==null?void 0:l[0])||null)}})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Vídeo"}),e.jsx(s.Control,{type:"file",accept:"video/*",onChange:t=>{var l;return Z(((l=t.target.files)==null?void 0:l[0])||null)}})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Tags (separadas por vírgulas)"}),e.jsx(s.Control,{type:"text",value:$,onChange:t=>F(t.target.value),placeholder:"Exemplo: Laravel, React, Backend"})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Categoria"}),e.jsxs(s.Select,{value:G,onChange:t=>z(t.target.value),required:!0,disabled:O,children:[e.jsx("option",{value:"",children:"Selecione uma categoria"}),Q.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),O&&e.jsx("small",{children:"Carregando categorias..."})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Status"}),e.jsxs(s.Select,{value:D,onChange:t=>H(t.target.value),children:[e.jsx("option",{value:"rascunho",children:"Rascunho"}),e.jsx("option",{value:"aguardando_aprovacao",children:"Aguardando Aprovação"}),e.jsx("option",{value:"publicado",children:"Publicado"})]})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{children:"Agendar Publicação"}),e.jsx(s.Control,{type:"datetime-local",value:v,onChange:t=>B(t.target.value)})]}),e.jsx(x,{variant:"primary",type:"submit",children:"Atualizar Post"})]}),e.jsxs(p,{show:ee,onHide:()=>f(!1),fullscreen:!0,dialogClassName:"modal-fullscreen",children:[e.jsx(p.Header,{closeButton:!0,children:e.jsx(p.Title,{children:"Pré-visualização do Post"})}),e.jsx(p.Body,{children:e.jsx("div",{dangerouslySetInnerHTML:{__html:te},style:{width:"100%",height:"100%",overflow:"auto"}})}),e.jsx(p.Footer,{children:e.jsx(x,{variant:"secondary",onClick:()=>f(!1),children:"Fechar"})})]})]})})})]})};export{De as default};
//# sourceMappingURL=page-D4a_FgQf.js.map
