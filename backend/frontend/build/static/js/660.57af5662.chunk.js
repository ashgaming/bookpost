"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[660],{7660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var s=n(9060),a=n(12),r=n(624),c=n(6792),o=n(3120),l=n(9072),i=n(2496);const d=()=>{const e=(0,r.OY)();(0,s.useEffect)((()=>{e((0,c._U)())}),[e]);const t=(0,r.w1)((e=>e.getLatestEvent)),{loading:n,events:d,error:h,success:p}=t;return(0,i.jsx)("div",{className:"w-full bg-customOrange",children:(0,i.jsxs)("div",{className:"grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 bottom-1 border border-black",children:[(0,i.jsx)("h1",{className:"m-1 p-5 text-5xl ",children:"Latest Events"}),n&&(0,i.jsx)(o.c,{}),h&&(0,i.jsx)(l.c,{children:h}),(null===d||void 0===d?void 0:d.length)<1&&(0,i.jsx)("p",{children:"No event latest available"}),d.map(((e,t)=>(0,i.jsx)("div",{className:"py-5 bottom-2 border border-black",children:(0,i.jsxs)("details",{className:"group",children:[(0,i.jsxs)("summary",{className:"flex justify-between items-center font-medium cursor-pointer list-none",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-20 h-32",src:e.cover,alt:"vndhwo"})}),(0,i.jsx)("span",{children:e.story}),(0,i.jsx)("span",{children:e.date}),(0,i.jsx)("span",{children:e.time}),(0,i.jsx)("span",{className:"transition group-open:rotate-180",children:(0,i.jsx)("svg",{fill:"none",height:"24","shape-rendering":"geometricPrecision",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",viewBox:"0 0 24 24",width:"24",children:(0,i.jsx)("path",{d:"M6 9l6 6 6-6"})})})]}),(0,i.jsx)("p",{className:"bg-orange-300 text-neutral-800 mt-3 group-open:animate-fadeIn",children:(0,i.jsx)(a.cH,{to:e.link,children:e.event})})]})},t)))]})})}},9072:(e,t,n)=>{n.d(t,{c:()=>a});n(9060);var s=n(2496);const a=e=>{let{Children:t}=e;return(0,s.jsx)("div",{children:t})}},6792:(e,t,n)=>{n.d(t,{Cm:()=>i,_U:()=>l});var s=n(9780),a=n(8144),r=n(8524);const c=localStorage.getItem("token")?localStorage.getItem("token"):null,o={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c)},withCredentials:!0},l=()=>async e=>{try{e({type:a.gj});const{data:t}=await s.c.get("".concat(r.M,"/event/list/latest"),o);e({type:a.SA,payload:t})}catch(t){e({type:a.kU,payload:t})}},i=()=>async e=>{try{e({type:a.ch});const{data:t}=await s.c.post("".concat(r.M,"/event/list/anoucement"),o);e({type:a.OW,payload:t})}catch(t){e({type:a.QH,payload:t})}}}}]);
//# sourceMappingURL=660.57af5662.chunk.js.map