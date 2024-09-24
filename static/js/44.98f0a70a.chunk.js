"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[44],{44:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var s=r(307),n=r(43),i=r(475),c=r(464);const o=c.Ay.input`
  width: 400px;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`,a=c.Ay.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-weight: 600;
`;var d=r(579);const l=()=>{const[,e]=(0,i.ok)();return(0,d.jsxs)("form",{onSubmit:t=>{t.preventDefault();const r=t.target.elements.search.value.trim();e({query:r})},children:[(0,d.jsx)(o,{type:"text",name:"search",placeholder:"Enter movie name...",required:!0}),(0,d.jsx)(a,{type:"submit",children:"Search"})]})};var p=r(216),u=r(621);const h="idle",x="pending",m="resolved",f="rejected",j=()=>{const[e]=(0,i.ok)(),[t,r]=(0,n.useState)([]),[c,o]=(0,n.useState)(h),a=(0,p.zy)();return(0,n.useEffect)((()=>{const t=e.get("query");(async()=>{if(t){o(x);try{const e=await(0,u.mb)(t);if(0===e.length)return o(f),void r([]);r(e),o(m)}catch(e){o(f)}}})()}),[e]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{}),c===x&&(0,d.jsx)(s.A,{}),(0,d.jsx)("ul",{children:t.length>0&&t.map((e=>{let{id:t,title:r}=e;return(0,d.jsx)("li",{children:(0,d.jsx)(i.N_,{to:`${t}`,state:{from:a},children:r||"No tittle"})},t)}))}),c===f&&(0,d.jsx)("p",{children:"No movies found"})]})}}}]);
//# sourceMappingURL=44.98f0a70a.chunk.js.map