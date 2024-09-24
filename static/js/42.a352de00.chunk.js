"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{42:(e,s,r)=>{r.r(s),r.d(s,{default:()=>m});var i=r(43),t=r(475),o=r(464);const l=o.Ay.div`
  border-bottom: 1px solid #000;
`;var a=r(579);const n=()=>(0,a.jsxs)(l,{children:[(0,a.jsx)("h4",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t.N_,{to:"cast",children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(t.N_,{to:"reviews",children:"Reviews"})})]})]}),d=(0,o.Ay)(t.k2)`
  border: 1px solid #b5b5b5;
  margin-bottom: 10px;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: blueviolet;
    border: 1px solid blueviolet;
  }
`,c=e=>{let{location:s}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d,{to:s,children:" \ud83e\udc78 Go back"})})};var x=r(307),h=r(216),p=r(621);const j=o.Ay.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  border-bottom: 1px solid;
  padding-bottom: 15px;
`,v=()=>{const[e,s]=(0,i.useState)(null),{movieId:r}=(0,h.g)(),t=e?e.release_date.slice(0,4):"",o=e?Math.round(10*e.vote_average):0,l=e?e.overview:"",n=e?e.genres.map((e=>e.name)).join(", "):"";return(0,i.useEffect)((()=>{if(!r)return;(async()=>{try{const e=await(0,p.BC)(r);s(e)}catch(e){console.error("Error fetching movie details:",e)}})()}),[r]),e?(0,a.jsxs)(j,{children:[(0,a.jsx)("img",{src:e.poster_path?`https://image.tmdb.org/t/p/w300${e.poster_path}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/250px-No-image-available.jpg",alt:e.title}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{children:[e.title," (",t,")"]}),(0,a.jsxs)("p",{children:["User Score: ",o||"no score"," %"]}),(0,a.jsx)("h3",{children:"Overview"}),(0,a.jsx)("p",{children:l}),(0,a.jsx)("h3",{children:"Genres"}),(0,a.jsx)("p",{children:n})]})]}):(0,a.jsx)(x.A,{})},m=()=>{var e,s;const r=(0,h.zy)(),t=(0,i.useRef)(null!==(e=null===(s=r.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/");return(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{location:t.current}),(0,a.jsx)(v,{}),(0,a.jsx)(n,{}),(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(x.A,{}),children:(0,a.jsx)(h.sv,{})})]})}}}]);
//# sourceMappingURL=42.a352de00.chunk.js.map