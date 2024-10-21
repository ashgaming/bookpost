"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[292],{1784:(t,e,a)=>{a.d(e,{c:()=>n});a(9060);var s=a(1560),c=a(2496);const n=t=>{let{url:e}=t;const a=(0,s.i6)();return(0,c.jsx)("div",{className:"w-full flex justify-start my-5",children:(0,c.jsx)("button",{className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200",onClick:()=>{a(e)},children:"Go Back"})})}},9072:(t,e,a)=>{a.d(e,{c:()=>c});a(9060);var s=a(2496);const c=t=>{let{Children:e}=t;return(0,s.jsx)("div",{children:e})}},6776:(t,e,a)=>{a.d(e,{Cg:()=>h,Ub:()=>u,Wh:()=>x,YH:()=>b,e6:()=>i,ew:()=>g,gn:()=>m,m8:()=>d,my:()=>p,yU:()=>y});var s=a(9780),c=a(4348),n=a(8524);const o=localStorage.getItem("token")?localStorage.getItem("token"):null,r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o)},withCredentials:!0},l={headers:{"Content-type":"application/json"}},i=t=>async e=>{try{e({type:c.S});const{data:a}=await s.c.post("".concat(n.M,"/api/story/create/"),t,r);e({type:c.eY,payload:a})}catch(a){e({type:c.gf,payload:a})}},d=()=>async t=>{try{t({type:c.S_});const e=localStorage.getItem("token")?localStorage.getItem("token"):null,a={headers:{"Content-type":"application/json",...e&&{Authorization:"Bearer ".concat(e)}},withCredentials:!0},{data:o}=await s.c.get("".concat(n.M,"/api/story/list"),a);t({type:c.gr,payload:o})}catch(e){t({type:c.cW,payload:e})}},p=t=>async e=>{try{e({type:c.wp});const{data:a}=await s.c.get("".concat(n.M,"/api/story/").concat(t),l);e({type:c.sT,payload:a})}catch(a){e({type:c.Sw,payload:a})}},y=(t,e)=>async a=>{try{a({type:c.SY});const{data:o}=await s.c.post("".concat(n.M,"/api/story/").concat(t,"/chapter/create/"),e,r);a({type:c.wb,payload:o})}catch(o){a({type:c.ol,payload:o})}},x=t=>async e=>{try{e({type:c.UJ});const{data:a}=await s.c.get("".concat(n.M,"/api/story/").concat(t,"/chapter/list"),l);e({type:c.i3,payload:a})}catch(a){e({type:c.U6,payload:a})}},h=(t,e)=>async a=>{try{a({type:c.Ws});const{data:o}=await s.c.get("".concat(n.M,"/api/story/").concat(t,"/chapter/").concat(e),l);a({type:c.Mn,payload:o})}catch(o){a({type:c.WG,payload:o})}},m=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async e=>{try{e({type:c.Ah});const{data:a}=await s.c.get("".concat(n.M,"/api/admin/story/list").concat(t?"?page=".concat(t):""),r);e({type:c.I1,payload:a})}catch(a){e({type:c.S6,payload:a})}}},g=t=>async e=>{try{e({type:c.cX});const{data:a}=await s.c.get("".concat(n.M,"/api/admin/story/").concat(t,"/chapter/list"),r);e({type:c._I,payload:a})}catch(a){e({type:c.kf,payload:a})}},b=(t,e,a)=>async o=>{try{console.log(a),o({type:c.aA});const{data:l}=await s.c.put("".concat(n.M,"/api/story/").concat(t,"/chapter/").concat(e,"/update"),a,r);o({type:c.IT,payload:l})}catch(l){o({type:c.We,payload:l})}},u=(t,e)=>async a=>{try{a({type:c.m8});const{data:o}=await s.c.put("".concat(n.M,"/api/story/").concat(t,"/update"),e,r);a({type:c.Ip,payload:o})}catch(o){a({type:c.An,payload:o})}}},6292:(t,e,a)=>{a.r(e),a.d(e,{default:()=>y});var s=a(9060),c=a(1560),n=a(12),o=a(6776),r=a(624),l=a(1784),i=a(3120),d=a(9072),p=a(2496);const y=t=>{let{dispatch:e}=t;const a=(0,r.w1)((t=>t.listAdminStory)),{loading:y,error:x,story:h,page:m,pages:g}=a;(0,s.useEffect)((()=>{e((0,o.gn)(m))}),[e]);const b=(0,c.i6)(),u=(t,e)=>{t.preventDefault(),b("/list-story",{replace:!0})};return y?(0,p.jsx)(i.c,{}):x?(0,p.jsx)(d.c,{children:x}):h?(0,p.jsxs)("div",{className:"bg-white p-8 rounded-md w-full",children:[(0,p.jsx)(l.c,{url:"/story-option"}),(0,p.jsxs)("div",{className:"flex items-center justify-between pb-6",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:"text-gray-600 font-semibold",children:"Select Story"}),(0,p.jsx)("span",{className:"text-xs",children:"All stories item"})]}),(0,p.jsxs)("div",{className:"flex items-center justify-between",children:[(0,p.jsxs)("div",{className:"flex bg-gray-50 items-center p-2 rounded-md",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),(0,p.jsx)("input",{className:"bg-gray-50 outline-none ml-1 block",type:"text",placeholder:"search..."})]}),(0,p.jsx)("div",{className:"lg:ml-40 ml-10 space-x-8",children:(0,p.jsx)(n.cH,{to:"/create-story",className:"bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer",children:"Create"})})]})]}),(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto",children:(0,p.jsxs)("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden",children:[(0,p.jsxs)("table",{className:"min-w-full leading-normal",children:[(0,p.jsx)("thead",{children:(0,p.jsx)("tr",{children:["name","category","Created At","Story ID","Action"].map(((t,e)=>(0,p.jsx)("th",{className:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center",children:t},e)))})}),(0,p.jsx)("tbody",{children:h.map(((t,e)=>(0,p.jsxs)("tr",{className:"bg-slate-50 hover:bg-yellow-200",children:[(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 text-sm",onClick:e=>u(e,t._id),children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:t.name})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200 text-sm",onClick:e=>u(e,t._id),children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:t.category})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",onClick:e=>u(e,t._id),children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:new Date(t.createdAt).toLocaleDateString()})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",onClick:e=>u(e,t._id),children:(0,p.jsx)("p",{className:"text-gray-900 whitespace-no-wrap",children:t._id})}),(0,p.jsx)("td",{className:"px-5 py-5 border-b border-gray-200  text-sm",onClick:e=>b("/edit-story/".concat(t._id)),children:(0,p.jsxs)("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight",children:[(0,p.jsx)("span",{"aria-hidden":!0,className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),(0,p.jsx)("span",{className:"relative",children:(0,p.jsx)("button",{className:"rounded-md",children:"Edit"})})]})})]},e)))})]}),(0,p.jsxs)("div",{className:"px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between",children:[(0,p.jsx)("span",{className:"text-xs xs:text-sm text-gray-900",children:"Showing 1 to 4 of 50 Entries"}),(0,p.jsxs)("div",{className:"inline-flex mt-2 xs:mt-0",children:[(0,p.jsx)("button",{className:"text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l",children:"Prev"}),"\xa0 \xa0",(0,p.jsx)("button",{className:"text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r",children:"Next"})]})]})]})})})]}):null}}}]);
//# sourceMappingURL=292.984d735b.chunk.js.map