"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[536],{1784:(t,e,a)=>{a.d(e,{c:()=>o});a(9060);var c=a(1560),r=a(2496);const o=t=>{let{url:e}=t;const a=(0,c.i6)();return(0,r.jsx)("div",{className:"w-full flex justify-start my-5",children:(0,r.jsx)("button",{className:"bg-customOrange text-white py-2 px-4 rounded hover:bg-hoverOrange transition-colors duration-200",onClick:()=>{a(e)},children:"Go Back"})})}},2432:(t,e,a)=>{a.d(e,{c:()=>r});a(9060);var c=a(2496);const r=()=>(0,c.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:(0,c.jsxs)("div",{className:"text-center",children:[(0,c.jsx)("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"}),(0,c.jsx)("h2",{className:"text-white text-xl font-semibold",children:"Loading..."}),(0,c.jsx)("p",{className:"text-white text-sm mt-2",children:"Please wait"})]})})},9072:(t,e,a)=>{a.d(e,{c:()=>r});a(9060);var c=a(2496);const r=t=>{let{Children:e}=t;return(0,c.jsx)("div",{children:e})}},9840:(t,e,a)=>{a.d(e,{e:()=>o});var c=a(9780),r=a(8524);const o=async t=>{const e=new FormData;e.append("image",t);const a=localStorage.getItem("token"),o={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(a)},withCredentials:!0};try{const t=await c.c.post("".concat(r.M,"/api/upload-image/"),e,o);return console.log(t.data),t.data.image_url}catch(l){throw alert("Error uploading image:",l),new Error("Image upload failed")}}},6776:(t,e,a)=>{a.d(e,{Cg:()=>h,Ub:()=>f,Wh:()=>u,YH:()=>x,e6:()=>i,ew:()=>g,gn:()=>m,m8:()=>p,my:()=>d,yU:()=>y});var c=a(9780),r=a(4348),o=a(8524);const l=localStorage.getItem("token")?localStorage.getItem("token"):null,n={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(l)},withCredentials:!0},s={headers:{"Content-type":"application/json"}},i=t=>async e=>{try{e({type:r.S});const{data:a}=await c.c.post("".concat(o.M,"/api/story/create/"),t,n);e({type:r.eY,payload:a})}catch(a){e({type:r.gf,payload:a})}},p=()=>async t=>{try{t({type:r.S_});const e=localStorage.getItem("token")?localStorage.getItem("token"):null,a={headers:{"Content-type":"application/json",...e&&{Authorization:"Bearer ".concat(e)}},withCredentials:!0},{data:l}=await c.c.get("".concat(o.M,"/api/story/list"),a);t({type:r.gr,payload:l})}catch(e){t({type:r.cW,payload:e})}},d=t=>async e=>{try{e({type:r.wp});const{data:a}=await c.c.get("".concat(o.M,"/api/story/").concat(t),s);e({type:r.sT,payload:a})}catch(a){e({type:r.Sw,payload:a})}},y=(t,e)=>async a=>{try{a({type:r.SY});const{data:l}=await c.c.post("".concat(o.M,"/api/story/").concat(t,"/chapter/create/"),e,n);a({type:r.wb,payload:l})}catch(l){a({type:r.ol,payload:l})}},u=t=>async e=>{try{e({type:r.UJ});const{data:a}=await c.c.get("".concat(o.M,"/api/story/").concat(t,"/chapter/list"),s);e({type:r.i3,payload:a})}catch(a){e({type:r.U6,payload:a})}},h=(t,e)=>async a=>{try{a({type:r.Ws});const{data:l}=await c.c.get("".concat(o.M,"/api/story/").concat(t,"/chapter/").concat(e),s);a({type:r.Mn,payload:l})}catch(l){a({type:r.WG,payload:l})}},m=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async e=>{try{e({type:r.Ah});const{data:a}=await c.c.get("".concat(o.M,"/api/admin/story/list").concat(t?"?page=".concat(t):""),n);e({type:r.I1,payload:a})}catch(a){e({type:r.S6,payload:a})}}},g=t=>async e=>{try{e({type:r.cX});const{data:a}=await c.c.get("".concat(o.M,"/api/admin/story/").concat(t,"/chapter/list"),n);e({type:r._I,payload:a})}catch(a){e({type:r.kf,payload:a})}},x=(t,e,a)=>async l=>{try{console.log(a),l({type:r.aA});const{data:s}=await c.c.put("".concat(o.M,"/api/story/").concat(t,"/chapter/").concat(e,"/update"),a,n);l({type:r.IT,payload:s})}catch(s){l({type:r.We,payload:s})}},f=(t,e)=>async a=>{try{a({type:r.m8});const{data:l}=await c.c.put("".concat(o.M,"/api/story/").concat(t,"/update"),e,n);a({type:r.Ip,payload:l})}catch(l){a({type:r.An,payload:l})}}},8536:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var c=a(9060),r=a(624),o=a(1560),l=a(9840),n=a(6776),s=a(3120),i=a(9072),p=a(2432),d=a(4348),y=a(1784),u=a(2496);const h=t=>{let{dispatch:e}=t;const{storyid:a,chapterid:h}=(0,o.W4)(),[m,g]=(0,c.useState)(""),[x,f]=(0,c.useState)(!1),v=(0,r.w1)((t=>t.readChapter)),{loading:w,error:j,chapter:b}=v,C=(0,r.w1)((t=>t.updateChapter)),{loading:N,success:S}=C,k=(0,c.useRef)(null),M=(0,c.useRef)(null),I=(0,c.useRef)(null),W=(0,o.i6)(),[_,A]=(0,c.useState)({});(0,c.useEffect)((()=>{b&&b._id==h||e((0,n.Cg)(a,h));b&&b._id==h&&!x&&((async()=>{b&&b._id==h&&!x&&(k.current.value=b.title||"",M.current.value=b.chapter||"",I.current.value=b.summary||"",g(b.cover||"")),f(!0)})(),A({title:b.title,chapter:M.current.value,summary:I.current.value,cover:b.cover}))}),[e,a,h,null===b||void 0===b?void 0:b._id]);(0,c.useEffect)((()=>{S&&(alert("Chapter Updated ..."),W("/add/story/".concat(a)),e({type:d.GO}),e({type:d.AH}))}),[S]);return w?(0,u.jsx)(s.c,{}):j?(0,u.jsx)(i.c,{children:j}):b._id?(0,u.jsxs)("form",{onSubmit:t=>{t.preventDefault();const c={};k.current.value!==_.title&&(c.title=k.current.value),M.current.value!==_.chapter&&(c.chapter=M.current.value),I.current.value!==_.summary&&(c.summary=I.current.value),m!==_.cover&&(console.log("image",m),console.log("old img",_.image),c.cover=m),e((0,n.YH)(a,h,c))},className:"form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg",children:[N&&(0,u.jsx)(p.c,{}),(0,u.jsx)(y.c,{url:"/list-story"}),(0,u.jsx)("h3",{className:"text-2xl text-gray-900 font-semibold",children:"Edit Chapter"}),(0,u.jsx)("div",{className:"flex space-x-5 mt-3",children:(0,u.jsx)("input",{type:"text",placeholder:"Title",className:"border p-2 w-1/2",ref:k})}),(0,u.jsx)("div",{className:"relative max-h-52 aspect-[9/16] bg-gray-200 overflow-hidden left-1/3 align-middle",children:(0,u.jsx)("img",{src:m,alt:"",className:"object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"})}),(0,u.jsx)("div",{className:"flex space-x-5 mt-3",children:(0,u.jsx)("input",{type:"file",onChange:async t=>{t.preventDefault();const e=t.target.files[0];if(e)try{const t=await(0,l.e)(e);g(t)}catch(j){console.error("Image upload failed",j)}},className:"border p-2 w-1/2",accept:"image/*"})}),(0,u.jsx)("h1",{children:"Summary"}),(0,u.jsx)("textarea",{placeholder:"Write Summary here",className:"border p-2 mt-3 w-full",ref:I,maxLength:1e3}),(0,u.jsx)("h1",{children:"Chapter Content"}),(0,u.jsx)("textarea",{placeholder:"Write Chapter here",className:"border p-2 mt-3 w-full",ref:M,maxLength:5e3}),(0,u.jsx)("input",{type:"submit",value:"Update Chapter",className:"w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"})]}):null}}}]);
//# sourceMappingURL=536.c0accf74.chunk.js.map