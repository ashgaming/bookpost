"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[896],{5896:(e,r,o)=>{o.r(r),o.d(r,{default:()=>f});var t=o(9780),a=o(9060),l=o(12),n=o(8524),s=o(3120),d=o(2496);const b=o(1672),f=()=>{const[e,r]=(0,a.useState)(!1),[o,f]=(0,a.useState)(null),c=(0,a.useRef)(),i=(0,a.useRef)(),u=(0,a.useRef)(),p=(0,a.useRef)(),h=async e=>{if(e.preventDefault(),(()=>{var e,r,o,t;const a=null===(e=c.current)||void 0===e?void 0:e.value,l=null===(r=i.current)||void 0===r?void 0:r.value,n=null===(o=u.current)||void 0===o?void 0:o.value,s=null===(t=p.current)||void 0===t?void 0:t.value;var d,b,f,h,x,m;return a?l?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)?n?/^[0-9]{10}$/.test(n)?!!s||(alert("Message is required"),null===(m=p.current)||void 0===m||m.focus(),!1):(alert("Please enter a valid 10-digit phone number"),null===(x=u.current)||void 0===x||x.focus(),!1):(alert("Phone number is required"),null===(h=u.current)||void 0===h||h.focus(),!1):(alert("Please enter a valid email address"),null===(f=i.current)||void 0===f||f.focus(),!1):(alert("Email is required"),null===(b=i.current)||void 0===b||b.focus(),!1):(alert("Name is required"),null===(d=c.current)||void 0===d||d.focus(),!1)})()){var a,l,s,d;r(!0),f(null);const e={name:(null===(a=c.current)||void 0===a?void 0:a.value)||"",email:(null===(l=i.current)||void 0===l?void 0:l.value)||"",phone:(null===(s=u.current)||void 0===s?void 0:s.value)||"",message:(null===(d=p.current)||void 0===d?void 0:d.value)||""};try{const r=localStorage.getItem("token"),o={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)},withCredentials:!0},{data:a}=await t.c.post("".concat(n.M,"/api/contactUs"),e,o);alert("Your form has been submitted successfully!"),c.current.value="",i.current.value="",u.current.value="",p.current.value=""}catch(o){f("Error submitting form. Please try again later.")}finally{r(!1)}}};return(0,d.jsxs)("section",{children:[(0,d.jsxs)("div",{className:"relative w-full h-96",children:[(0,d.jsx)("img",{className:"absolute h-full w-full object-cover object-center",src:b,alt:"nature image"}),(0,d.jsx)("div",{className:"absolute inset-0 h-full w-full bg-black/50"}),(0,d.jsxs)("div",{className:"relative pt-28 text-center",children:[(0,d.jsx)("h2",{className:"block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl",children:"Contact Information"}),(0,d.jsx)("p",{className:"block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70",children:"Thank you for reaching out! I'd be happy to assist you. Please go ahead and ask your questions or share your feedback here, and I will do my best to help you                        "})]})]}),(0,d.jsx)("div",{className:"-mt-16 mb-8 px-8 ",children:(0,d.jsx)("div",{className:"container mx-auto",children:(0,d.jsx)("div",{className:"py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200",children:(0,d.jsxs)("div",{className:"py-4",children:[e&&(0,d.jsx)(s.c,{}),(0,d.jsxs)("form",{children:[(0,d.jsx)("div",{className:"mb-4",children:(0,d.jsxs)("div",{className:"relative w-full min-w-[200px] h-11 ",children:[(0,d.jsx)("input",{type:"text",name:"Name",ref:c,className:"peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900",placeholder:" "}),(0,d.jsx)("label",{className:"flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900",children:"Enter your name"})]})}),(0,d.jsx)("div",{className:"mb-4",children:(0,d.jsxs)("div",{className:"relative w-full min-w-[200px] h-11 ",children:[(0,d.jsx)("input",{type:"email",name:"Email",ref:i,className:"peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900",placeholder:" "}),(0,d.jsx)("label",{className:"flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900",children:"Enter your email "})]})}),(0,d.jsx)("div",{className:"mb-4",children:(0,d.jsxs)("div",{className:"relative w-full min-w-[200px] h-11 ",children:[(0,d.jsx)("input",{type:"tel",ref:u,name:"Phone Number",className:"peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900",placeholder:" "}),(0,d.jsx)("label",{className:"flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900",children:"Enter your phone number "})]})}),(0,d.jsx)("div",{className:"mb-4",children:(0,d.jsxs)("div",{className:"relative w-full min-w-[200px] h-11 ",children:[(0,d.jsx)("input",{type:"textarea",ref:p,name:"Message",className:"peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900",placeholder:" "}),(0,d.jsx)("label",{className:"flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900",children:"Enter your message "})]})}),(0,d.jsxs)("div",{className:"inline-flex items-center",children:[(0,d.jsxs)("label",{className:"relative flex items-center cursor-pointer p-3 rounded-full -ml-2.5",for:":R1a:",children:[(0,d.jsx)("input",{type:"checkbox",className:"peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900",id:":R1a:"}),(0,d.jsx)("span",{className:"text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1",children:(0,d.jsx)("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})})})]}),(0,d.jsx)("label",{className:"text-gray-700 font-light select-none cursor-pointer mt-px",for:":R1a:",children:(0,d.jsxs)("p",{className:"block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500",children:["You agree to",(0,d.jsx)(l.cH,{to:"#",className:"font-medium text-gray-700 hover:text-gray-900",children:"Privacy Policy"}),"."]})})]}),(0,d.jsx)("button",{className:"align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-customOrange text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6",type:"button",onClick:e=>h(e),children:"Contact Us"})]})]})})})})]})}},1672:(e,r,o)=>{e.exports=o.p+"static/media/aboutUs.db70a3a92e5b1edfe96c.webp"}}]);
//# sourceMappingURL=896.c7f78bfd.chunk.js.fa5e9cb833a2.map