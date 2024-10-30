"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[225],{1784:(e,t,a)=>{a.d(t,{c:()=>r});a(9060);var s=a(1560),c=a(2496);const r=e=>{let{url:t}=e;const a=(0,s.i6)();return(0,c.jsx)("div",{className:"w-full flex justify-start my-5",children:(0,c.jsx)("button",{className:"bg-customOrange text-white py-2 px-4 rounded hover:bg-hoverOrange transition-colors duration-200",onClick:()=>{a(t)},children:"Go Back"})})}},9072:(e,t,a)=>{a.d(t,{c:()=>c});a(9060);var s=a(2496);const c=e=>{let{Children:t}=e;return(0,s.jsx)("div",{children:t})}},6776:(e,t,a)=>{a.d(t,{Cg:()=>h,Ub:()=>w,Wh:()=>x,YH:()=>b,e6:()=>i,ew:()=>g,gn:()=>m,m8:()=>d,my:()=>p,yU:()=>y});var s=a(9780),c=a(4348),r=a(8524);const n=localStorage.getItem("token")?localStorage.getItem("token"):null,o={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n)},withCredentials:!0},l={headers:{"Content-type":"application/json"}},i=e=>async t=>{try{t({type:c.S});const{data:a}=await s.c.post("".concat(r.M,"/api/story/create/"),e,o);t({type:c.eY,payload:a})}catch(a){t({type:c.gf,payload:a})}},d=()=>async e=>{try{e({type:c.S_});const t=localStorage.getItem("token")?localStorage.getItem("token"):null,a={headers:{"Content-type":"application/json",...t&&{Authorization:"Bearer ".concat(t)}},withCredentials:!0},{data:n}=await s.c.get("".concat(r.M,"/api/story/list"),a);e({type:c.gr,payload:n})}catch(t){e({type:c.cW,payload:t})}},p=e=>async t=>{try{t({type:c.wp});const{data:a}=await s.c.get("".concat(r.M,"/api/story/").concat(e),l);t({type:c.sT,payload:a})}catch(a){t({type:c.Sw,payload:a})}},y=(e,t)=>async a=>{try{a({type:c.SY});const{data:n}=await s.c.post("".concat(r.M,"/api/story/").concat(e,"/chapter/create/"),t,o);a({type:c.wb,payload:n})}catch(n){a({type:c.ol,payload:n})}},x=e=>async t=>{try{t({type:c.UJ});const{data:a}=await s.c.get("".concat(r.M,"/api/story/").concat(e,"/chapter/list"),l);t({type:c.i3,payload:a})}catch(a){t({type:c.U6,payload:a})}},h=(e,t)=>async a=>{try{a({type:c.Ws});const{data:n}=await s.c.get("".concat(r.M,"/api/story/").concat(e,"/chapter/").concat(t),l);a({type:c.Mn,payload:n})}catch(n){a({type:c.WG,payload:n})}},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async t=>{try{t({type:c.Ah});const{data:a}=await s.c.get("".concat(r.M,"/api/admin/story/list").concat(e?"?page=".concat(e):""),o);t({type:c.I1,payload:a})}catch(a){t({type:c.S6,payload:a})}}},g=e=>async t=>{try{t({type:c.cX});const{data:a}=await s.c.get("".concat(r.M,"/api/admin/story/").concat(e,"/chapter/list"),o);t({type:c._I,payload:a})}catch(a){t({type:c.kf,payload:a})}},b=(e,t,a)=>async n=>{try{console.log(a),n({type:c.aA});const{data:l}=await s.c.put("".concat(r.M,"/api/story/").concat(e,"/chapter/").concat(t,"/update"),a,o);n({type:c.IT,payload:l})}catch(l){n({type:c.We,payload:l})}},w=(e,t)=>async a=>{try{a({type:c.m8});const{data:n}=await s.c.put("".concat(r.M,"/api/story/").concat(e,"/update"),t,o);a({type:c.Ip,payload:n})}catch(n){a({type:c.An,payload:n})}}},9225:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(9060),c=a(1560),r=a(12),n=a(6776),o=a(624),l=a(1784),i=a(9072),d=a(3120),p=a(2496);const y=e=>{let{dispatch:t}=e;const{storyid:a}=(0,c.W4)(),y=(0,c.i6)(),x=(0,o.w1)((e=>e.listAdminChapter)),{loading:h,error:m,chapters:g}=x;(0,s.useEffect)((()=>{t((0,n.ew)(a))}),[t,a]);return h?(0,p.jsx)(d.c,{}):void 0===g?(0,p.jsx)(i.c,{children:"Nothing to show here...!"}):(console.log("error",m),(0,p.jsxs)("div",{className:"bg-white p-8 rounded-md w-full",children:[m&&(0,p.jsx)(i.c,{children:m}),(0,p.jsx)(l.c,{url:"/list-story"}),(0,p.jsxs)("div",{className:"flex items-center justify-between pb-6",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:"text-gray-600 font-semibold",children:"Select Chapter"}),(0,p.jsx)("span",{className:"text-xs",children:"All Chapters from story"})]}),(0,p.jsxs)("div",{className:"flex items-center justify-between",children:[(0,p.jsxs)("div",{className:"flex bg-gray-50 items-center p-2 rounded-md",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),(0,p.jsx)("input",{className:"bg-gray-50 outline-none ml-1 block",type:"text",placeholder:"search..."})]}),(0,p.jsx)("div",{className:"lg:ml-40 ml-10 space-x-8",children:(0,p.jsx)(r.cH,{to:"/add/story/".concat(a,"/add"),className:"bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer",children:"New Chapter"})})]})]}),(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto",children:(0,p.jsxs)("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden",children:[(0,p.jsxs)("table",{className:"min-w-full leading-normal",children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:["Id","name","Created At","views","likes","Status"].map(((e,t)=>(0,p.jsx)("th",{className:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center",children:e},t)))})}),(0,p.jsx)("tbody",{children:g&&g.map(((e,t)=>(0,p.jsxs)("tr",{className:"bg-slate-50 hover:bg-yellow-200",onClick:t=>((e,t)=>{e.preventDefault(),y("/add/story/".concat(a,"/chapter/").concat(t,"/edit"))})(t,e._id),children:[(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e._id})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 text-sm",children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e.title})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:new Date(e.createdAt).toLocaleDateString()})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e.views})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:e.likes})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",children:(0,p.jsxs)("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight",children:[(0,p.jsx)("span",{"aria-hidden":!0,className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),(0,p.jsx)("span",{className:"relative",children:e.status||"Active"})]})})]},t)))})]}),(0,p.jsxs)("div",{className:"px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between",children:[(0,p.jsx)("span",{className:"text-xs xs:text-sm text-gray-900",children:"Showing 1 to 4 of 50 Entries"}),(0,p.jsxs)("div",{className:"inline-flex mt-2 xs:mt-0",children:[(0,p.jsx)("button",{className:"text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l",children:"Prev"}),"\xa0 \xa0",(0,p.jsx)("button",{className:"text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r",children:"Next"})]})]})]})})})]}))}}}]);
//# sourceMappingURL=225.432eec67.chunk.js.map