"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[52],{8052:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var s=t(9060),r=t(12),n=t(9780),l=t(8524),o=t(2496);const c=()=>{const[e,a]=(0,s.useState)([]),[t,r]=(0,s.useState)(!1);(0,s.useEffect)((()=>{var t;null!==(t=e[0])&&void 0!==t&&t._id||(async()=>{try{r(!0);const{data:e}=await n.c.get("".concat(l.M,"/api/story/list"));a(e),r(!1),console.log("hit")}catch(e){console.log(e),r(!1)}})()}),[e]);const c=()=>{};return(0,o.jsx)("div",{className:"mt-1 relative rounded-md shadow-sm",children:(0,o.jsxs)("select",{id:"story",onChange:()=>c,className:"block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out",children:[(0,o.jsx)("option",{value:"",children:"select"}),t&&(0,o.jsx)("option",{children:"Loading"}),e.map(((e,a)=>(0,o.jsxs)("option",{value:e._id,children:[" ",e.name," "]},a)))]})})},d=()=>{const[e,a]=(0,s.useState)(""),[t,n]=(0,s.useState)(""),[l,d]=(0,s.useState)(""),[i,x]=(0,s.useState)(""),[u,m]=(0,s.useState)(""),[h,b]=(0,s.useState)(""),[p,g]=(0,s.useState)(""),[v,j]=(0,s.useState)(""),[f,N]=(0,s.useState)(!1),[y,w]=(0,s.useState)(null);return(0,o.jsx)("div",{className:"mx-auto container flex items-center",id:"nav",children:(0,o.jsx)("div",{className:"w-full pt-2 p-4",children:(0,o.jsxs)("div",{className:"mx-auto md:p-6 md:w-1/2",children:[(0,o.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,o.jsxs)("h1",{className:"text-2xl text-orange-500 hover:text-orange-500 transition duration-500 p-4",children:[(0,o.jsx)("i",{className:"fas fa-sign-in-alt fa-fw fa-lg"}),"Announcement"]}),(0,o.jsxs)(r.cH,{to:"/",className:"mt-8 text-orange-400 hover:text-orange-600 transition duration-500",children:[(0,o.jsx)("svg",{className:"w-6 h-6 inline-block align-bottom",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),"Back to Home"]})]}),(0,o.jsx)("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:(0,o.jsxs)("form",{onSubmit:a=>{if(a.preventDefault(),!e||!i||!u||!p)return void alert("Please fill in all required fields!");const s={event:e,story:t,chapter:l,message:i,eventDate:u,eventTime:h,expireDate:p,expireTime:v,coverFile:y};console.log("Submitted Data:",s)},children:[(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{htmlFor:"event",className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Event"]}),(0,o.jsxs)("select",{onChange:e=>a(e.target.value),value:e,id:"event",className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 focus:outline-none focus:bg-white focus:border-orange-500",children:[(0,o.jsx)("option",{value:"",children:"Select"}),(0,o.jsx)("option",{value:"Story",children:"New Story"}),(0,o.jsx)("option",{value:"NewChapter",children:"New Chapter"}),(0,o.jsx)("option",{value:"AboutChapter",children:"About Chapter"})]}),!e&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Event is required"})]}),"NewChapter"===e&&(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Story"]}),(0,o.jsx)(c,{setStory:n}),!t&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Story is required"})]}),"AboutChapter"===e&&(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Chapter"]}),(0,o.jsx)("input",{type:"text",value:l,onChange:e=>d(e.target.value),className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 focus:outline-none focus:bg-white focus:border-orange-500"}),!l&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Chapter is required"})]}),(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Message"]}),(0,o.jsx)("textarea",{value:i,onChange:e=>x(e.target.value),className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 focus:outline-none focus:bg-white focus:border-orange-500"}),!i&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Message is required"})]}),(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Event Date"]}),(0,o.jsx)("input",{type:"date",value:u,onChange:e=>m(e.target.value),className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"}),(0,o.jsx)("input",{type:"time",value:h,onChange:e=>b(e.target.value),className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"}),!u&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Event Date is required"})]}),(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Expire Date"]}),(0,o.jsx)("input",{type:"date",value:p,onChange:e=>g(e.target.value),className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"}),(0,o.jsx)("input",{type:"time",value:v,onChange:e=>j(e.target.value),className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"}),!p&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Expire Date is required"})]}),(0,o.jsx)("div",{className:"mb-8",children:(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("input",{type:"checkbox",checked:f,onChange:e=>N(e.target.checked),className:"mr-2"}),"Want to upload cover"]})}),f&&(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:[(0,o.jsx)("span",{className:"text-red-500",children:"*"})," Upload Cover"]}),(0,o.jsx)("input",{type:"file",onChange:e=>{return a=e.target.files[0],console.log("files",a),void w();var a},className:"block shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3"}),!y&&(0,o.jsx)("strong",{className:"text-red-500 text-xs italic",children:"Cover is required"})]}),(0,o.jsx)("div",{className:"mb-4 text-center",children:(0,o.jsx)("button",{type:"submit",className:"transition duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Announce"})}),(0,o.jsx)("hr",{})]})})]})})})}}}]);
//# sourceMappingURL=52.f16e5f97.chunk.js.bdf731e5226c.map