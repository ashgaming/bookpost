"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[272],{1784:(t,a,e)=>{e.d(a,{c:()=>r});e(9060);var c=e(1560),o=e(2496);const r=t=>{let{url:a}=t;const e=(0,c.i6)();return(0,o.jsx)("div",{className:"w-full flex justify-start my-5",children:(0,o.jsx)("button",{className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200",onClick:()=>{e(a)},children:"Go Back"})})}},9072:(t,a,e)=>{e.d(a,{c:()=>o});e(9060);var c=e(2496);const o=t=>{let{Children:a}=t;return(0,c.jsx)("div",{children:a})}},9840:(t,a,e)=>{e.d(a,{e:()=>r});var c=e(9780),o=e(8524);const r=async t=>{const a=new FormData;a.append("image",t);const e=localStorage.getItem("token"),r={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(e)},withCredentials:!0};try{const t=await c.c.post("".concat(o.M,"/api/upload-image/"),a,r);if(200===t.status){const a="".concat(o.M)+t.data.image_url;return alert("Image uploaded successfully"),a}alert("Failed to upload image")}catch(l){throw alert("Error uploading image:",l),new Error("Image upload failed")}}},6776:(t,a,e)=>{e.d(a,{Cg:()=>m,Ub:()=>w,Wh:()=>u,YH:()=>f,e6:()=>i,ew:()=>g,gn:()=>h,m8:()=>p,my:()=>y,yU:()=>d});var c=e(9780),o=e(4348),r=e(8524);const l=localStorage.getItem("token")?localStorage.getItem("token"):null,n={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(l)},withCredentials:!0},s={headers:{"Content-type":"application/json"}},i=t=>async a=>{try{a({type:o.S});const{data:e}=await c.c.post("".concat(r.M,"/api/story/create/"),t,n);a({type:o.eY,payload:e})}catch(e){a({type:o.gf,payload:e})}},p=()=>async t=>{try{t({type:o.S_});const a=localStorage.getItem("token")?localStorage.getItem("token"):null,e={headers:{"Content-type":"application/json",...a&&{Authorization:"Bearer ".concat(a)}},withCredentials:!0},{data:l}=await c.c.get("".concat(r.M,"/api/story/list"),e);t({type:o.gr,payload:l})}catch(a){t({type:o.cW,payload:a})}},y=t=>async a=>{try{a({type:o.wp});const{data:e}=await c.c.get("".concat(r.M,"/api/story/").concat(t),s);a({type:o.sT,payload:e})}catch(e){a({type:o.Sw,payload:e})}},d=(t,a)=>async e=>{try{e({type:o.SY});const{data:l}=await c.c.post("".concat(r.M,"/api/story/").concat(t,"/chapter/create/"),a,n);e({type:o.wb,payload:l})}catch(l){e({type:o.ol,payload:l})}},u=t=>async a=>{try{a({type:o.UJ});const{data:e}=await c.c.get("".concat(r.M,"/api/story/").concat(t,"/chapter/list"),s);a({type:o.i3,payload:e})}catch(e){a({type:o.U6,payload:e})}},m=(t,a)=>async e=>{try{e({type:o.Ws});const{data:l}=await c.c.get("".concat(r.M,"/api/story/").concat(t,"/chapter/").concat(a),s);e({type:o.Mn,payload:l})}catch(l){e({type:o.WG,payload:l})}},h=()=>async t=>{try{t({type:o.Ah});const{data:a}=await c.c.get("".concat(r.M,"/api/admin/story/list"),n);t({type:o.I1,payload:a})}catch(a){t({type:o.S6,payload:a})}},g=t=>async a=>{try{a({type:o.cX});const{data:e}=await c.c.get("".concat(r.M,"/api/admin/story/").concat(t,"/chapter/list"),n);a({type:o._I,payload:e})}catch(e){a({type:o.kf,payload:e})}},f=(t,a,e)=>async l=>{try{console.log(e),l({type:o.aA});const{data:s}=await c.c.put("".concat(r.M,"/api/story/").concat(t,"/chapter/").concat(a,"/update"),e,n);l({type:o.IT,payload:s})}catch(s){l({type:o.We,payload:s})}},w=(t,a)=>async e=>{try{console.log(a),e({type:o.m8});const{data:l}=await c.c.put("".concat(r.M,"/api/story/").concat(t,"/update"),a,n);e({type:o.Ip,payload:l})}catch(l){e({type:o.An,payload:l})}}},9272:(t,a,e)=>{e.r(a),e.d(a,{default:()=>u});var c=e(9060),o=e(624),r=e(9840),l=e(6776),n=e(9072),s=e(3120),i=e(4348),p=e(1560),y=e(1784),d=e(2496);const u=t=>{let{dispatch:a}=t;const e=(0,p.i6)(),u=(0,o.w1)((t=>t.createStory)),{loading:m,error:h,success:g}=u,f=(0,c.useRef)(null),w=(0,c.useRef)(null),x=(0,c.useRef)(null),v=(0,c.useRef)(null),[j,b]=(0,c.useState)(""),[S,C]=(0,c.useState)({title:"",description:"",image:""}),[M,N]=(0,c.useState)(!1),[k,I]=(0,c.useState)(0);(0,c.useEffect)((()=>{g&&(A(),a({type:i.uI}),e("/"))}),[g]);const A=()=>{C({title:"",description:"",image:""}),f.current.value=null,w.current.value=null,x.current.value=null,v.current.value=null,b("")};return(0,d.jsxs)("form",{onSubmit:t=>{t.preventDefault(),C({title:f.current.value,description:w.current.value,category:v.current.value,image:j}),a((0,l.e6)({title:f.current.value,description:w.current.value,category:v.current.value,image:j}))},className:"form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg",children:[(0,d.jsx)(y.c,{url:"/list-story"}),(0,d.jsx)("h3",{className:"text-2xl text-gray-900 font-semibold",children:"Add your latest story!"}),(0,d.jsx)("p",{className:"text-gray-600",children:"Let me know what is in your mind"}),m&&(0,d.jsx)(s.c,{}),h&&(0,d.jsx)(n.c,{children:h}),M&&(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)(s.c,{}),(0,d.jsxs)("p",{children:["Uploading image: ",k,"%"]})]}),(0,d.jsxs)("div",{className:"flex space-x-5 mt-3",children:[(0,d.jsx)("input",{type:"text",name:"title",placeholder:"Story Name",className:"border p-2 w-1/2",ref:f}),(0,d.jsx)("input",{type:"text",name:"category",placeholder:"Story Category",className:"border p-2 w-1/2",ref:v})]}),(0,d.jsxs)("div",{className:"py-5",children:[j&&(0,d.jsx)("img",{src:j,alt:"Uploaded cover",loading:"lazy"}),(0,d.jsx)("input",{type:"file",name:"cover",accept:"image/*",onChange:async t=>{t.preventDefault();const a=t.target.files[0];if(a){N(!0),I(0);try{const t=await(0,r.e)(a,(t=>{const a=Math.round(100*t.loaded/t.total);I(a)}));b(t)}catch(h){console.error("Image upload failed",h)}finally{N(!1)}}},className:"border p-2",ref:x})]}),(0,d.jsx)("textarea",{name:"description",cols:10,rows:3,maxLength:2e3,placeholder:"Summarize your story",className:"border p-2 mt-3 w-full",ref:w}),(0,d.jsx)("input",{type:"submit",value:"Submit",className:"w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"})]})}}}]);
//# sourceMappingURL=272.51dcd1a7.chunk.js.map