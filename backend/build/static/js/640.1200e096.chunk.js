"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[640],{1784:(t,e,a)=>{a.d(e,{c:()=>r});a(9060);var c=a(1560),o=a(2496);const r=t=>{let{url:e}=t;const a=(0,c.i6)();return(0,o.jsx)("div",{className:"w-full flex justify-start my-5",children:(0,o.jsx)("button",{className:"bg-customOrange text-white py-2 px-4 rounded hover:bg-hoverOrange transition-colors duration-200",onClick:()=>{a(e)},children:"Go Back"})})}},2432:(t,e,a)=>{a.d(e,{c:()=>o});a(9060);var c=a(2496);const o=()=>(0,c.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:(0,c.jsxs)("div",{className:"text-center",children:[(0,c.jsx)("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"}),(0,c.jsx)("h2",{className:"text-white text-xl font-semibold",children:"Loading..."}),(0,c.jsx)("p",{className:"text-white text-sm mt-2",children:"Please wait"})]})})},9072:(t,e,a)=>{a.d(e,{c:()=>o});a(9060);var c=a(2496);const o=t=>{let{children:e}=t;return(0,c.jsx)("div",{children:e})}},9840:(t,e,a)=>{a.d(e,{e:()=>r});var c=a(9780),o=a(8524);const r=async t=>{const e=new FormData;e.append("image",t);const a=localStorage.getItem("token"),r={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(a)},withCredentials:!0};try{const t=await c.c.post("".concat(o.M,"/api/upload-image/"),e,r);return console.log(t.data),t.data.image_url}catch(l){throw alert("Error uploading image:",l),new Error("Image upload failed")}}},6776:(t,e,a)=>{a.d(e,{Cg:()=>h,Ub:()=>v,Wh:()=>u,YH:()=>g,_C:()=>f,e6:()=>i,ew:()=>x,gn:()=>m,kz:()=>j,m8:()=>d,my:()=>p,xk:()=>n,yU:()=>y});var c=a(9780),o=a(4348),r=a(8524);const l=localStorage.getItem("token")?localStorage.getItem("token"):null,n={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(l)},withCredentials:!0},s={headers:{"Content-type":"application/json"}},i=t=>async e=>{try{e({type:o.S});const{data:a}=await c.c.post("".concat(r.M,"/api/story/create/"),t,n);e({type:o.eY,payload:a})}catch(a){e({type:o.gf,payload:a})}},d=()=>async t=>{try{t({type:o.S_});const e=localStorage.getItem("token")?localStorage.getItem("token"):null,a={headers:{"Content-type":"application/json",...e&&{Authorization:"Bearer ".concat(e)}},withCredentials:!0},{data:l}=await c.c.get("".concat(r.M,"/api/story/list"),a);t({type:o.gr,payload:l})}catch(e){t({type:o.cW,payload:e})}},p=t=>async e=>{try{e({type:o.wp});const{data:a}=await c.c.get("".concat(r.M,"/api/story/").concat(t),s);e({type:o.sT,payload:a})}catch(a){e({type:o.Sw,payload:a})}},y=(t,e)=>async a=>{try{a({type:o.SY});const{data:l}=await c.c.post("".concat(r.M,"/api/story/").concat(t,"/chapter/create/"),e,n);a({type:o.wb,payload:l})}catch(l){a({type:o.ol,payload:l})}},u=t=>async e=>{try{e({type:o.UJ});const{data:a}=await c.c.get("".concat(r.M,"/api/story/").concat(t,"/chapter/list"),s);e({type:o.i3,payload:a})}catch(a){e({type:o.U6,payload:a})}},h=(t,e)=>async a=>{try{a({type:o.Ws});const{data:l}=await c.c.get("".concat(r.M,"/api/story/").concat(t,"/chapter/").concat(e),s);a({type:o.Mn,payload:l})}catch(l){a({type:o.WG,payload:l})}},m=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async e=>{try{e({type:o.Ah});const{data:a}=await c.c.get("".concat(r.M,"/api/admin/story/list").concat(t?"?page=".concat(t):""),n);e({type:o.I1,payload:a})}catch(a){e({type:o.S6,payload:a})}}},x=t=>async e=>{try{e({type:o.cX});const{data:a}=await c.c.get("".concat(r.M,"/api/admin/story/").concat(t,"/chapter/list"),n);e({type:o._I,payload:a})}catch(a){e({type:o.kf,payload:a})}},g=(t,e,a)=>async l=>{try{console.log(a),l({type:o.aA});const{data:s}=await c.c.put("".concat(r.M,"/api/story/").concat(t,"/chapter/").concat(e,"/update"),a,n);l({type:o.IT,payload:s})}catch(s){l({type:o.We,payload:s})}},v=(t,e)=>async a=>{try{a({type:o.m8});const{data:l}=await c.c.put("".concat(r.M,"/api/story/").concat(t,"/update"),e,n);a({type:o.Ip,payload:l})}catch(l){a({type:o.An,payload:l})}},j=t=>async e=>{try{e({type:o.oh});const{data:a}=await c.c.post("".concat(r.M,"/api/story/").concat(t.storyid,"/comment/create"),t,n);e({type:o.k$,payload:a})}catch(a){e({type:o.Ej,payload:a})}},f=t=>async e=>{try{e({type:o._Y});const{data:a}=await c.c.get("".concat(r.M,"/api/story/").concat(t,"/comment/list"),s);e({type:o._8,payload:a})}catch(a){e({type:o.O0,payload:a})}}},6640:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var c=a(9060),o=a(624),r=a(1560),l=a(9840),n=a(6776),s=a(3120),i=a(9072),d=a(2432),p=a(4348),y=a(1784),u=a(2496);const h=t=>{let{dispatch:e}=t;const{storyid:a}=(0,r.W4)(),[h,m]=(0,c.useState)(""),[x,g]=(0,c.useState)(!1),v=(0,o.w1)((t=>t.readStory)),{loading:j,error:f,book:w}=v,b=(0,o.w1)((t=>t.updateStory)),{loading:S,error:N,success:C}=b,k=(0,c.useRef)(null),M=(0,c.useRef)(null),A=(0,c.useRef)(null),F=(0,r.i6)(),[I,_]=(0,c.useState)({}),[T,R]=(0,c.useState)(!1),[U,W]=(0,c.useState)(null);(0,c.useEffect)((()=>{w&&(null===w||void 0===w?void 0:w._id)==a||e((0,n.my)(a)),console.log(w);w&&(null===w||void 0===w?void 0:w._id)==a&&!x&&((async()=>{w&&(null===w||void 0===w?void 0:w._id)==a&&!x&&(k.current.value=w.name||"",A.current.value=w.category||"",M.current.value=w.summary||"",m(w.cover||"")),g(!0)})(),_({title:w.title,category:A.current.value,summary:M.current.value,cover:w.cover}),m(w.cover))}),[e,a,x,w]);(0,c.useEffect)((()=>{C&&(alert("Story Updated ..."),F("/list-story",{replace:!0}),e({type:p.yK}),e({type:p.AH}))}),[C]);return j?(0,u.jsx)(s.c,{}):f?(0,u.jsx)(i.c,{children:f}):null!==w&&void 0!==w&&w._id?(0,u.jsxs)("form",{onSubmit:t=>{t.preventDefault();const c={};k.current.value!==I.title&&(c.title=k.current.value),A.current.value!==I.category&&(c.category=A.current.value),M.current.value!==I.summary&&(c.summary=M.current.value),h!==I.cover&&(console.log("image",h),console.log("old img",I.image),c.cover=h),e((0,n.Ub)(a,c))},className:"form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg",children:[(0,u.jsx)(y.c,{url:"/list-story"}),S&&(0,u.jsx)(d.c,{}),(0,u.jsx)("h3",{className:"text-2xl text-gray-900 font-semibold",children:"Edit Story"}),N&&(0,u.jsx)(i.c,{children:N}),(0,u.jsx)("div",{className:"flex space-x-5 mt-3",children:(0,u.jsx)("input",{type:"text",placeholder:"Title",className:"border p-2 w-1/2",ref:k})}),(0,u.jsx)("div",{className:"flex space-x-5 mt-3 mb-2",children:(0,u.jsxs)("select",{name:"category",ref:A,className:"border p-2 rounded-md",children:[(0,u.jsx)("option",{value:"Fantasy",children:"Fantasy"}),(0,u.jsx)("option",{value:"Adventure",children:"Adventure"}),(0,u.jsx)("option",{value:"Fairy Tale",children:"Fairy Tales"}),(0,u.jsx)("option",{value:"Mystery",children:"Mystery"}),(0,u.jsx)("option",{value:"Science Fiction",children:"Science Fiction"}),(0,u.jsx)("option",{value:"Historical Fiction",children:"Historical Fiction"}),(0,u.jsx)("option",{value:"Horror",children:"Horror"}),(0,u.jsx)("option",{value:"Romance",children:"Romance"}),(0,u.jsx)("option",{value:"Rom-Com",children:"Rom-Com"}),(0,u.jsx)("option",{value:"Drama",children:"Drama"}),(0,u.jsx)("option",{value:"Thriller",children:"Thriller"}),(0,u.jsx)("option",{value:"Non Fiction",children:"Non-Fiction"}),(0,u.jsx)("option",{value:"Biography",children:"Biography"}),(0,u.jsx)("option",{value:"Comedy",children:"Comedy"}),(0,u.jsx)("option",{value:"Classic",children:"Classic"}),(0,u.jsx)("option",{value:"Young Adult",children:"Young Adult"}),(0,u.jsx)("option",{value:"Children",children:"Children's"}),(0,u.jsx)("option",{value:"Graphic Novel",children:"Graphic Novel"})]})}),(0,u.jsx)("div",{className:"relative max-h-52 aspect-[9/16] bg-gray-200 overflow-hidden left-1/3 align-middle",children:(0,u.jsx)("img",{src:h,alt:"",className:"object-cover w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"})}),T&&(0,u.jsx)(s.c,{}),U&&(0,u.jsx)(i.c,{children:U}),(0,u.jsx)("div",{className:"flex space-x-5 mt-3",children:(0,u.jsx)("input",{type:"file",onChange:async t=>{t.preventDefault(),R(!0);const e=t.target.files[0];if(e)try{const t=await(0,l.e)(e);m(t)}catch(f){W(f)}R(!1)},className:"border p-2 w-1/2",accept:"image/*"})}),(0,u.jsx)("h1",{children:"Summary"}),(0,u.jsx)("textarea",{placeholder:"Write Summary here",className:"border p-2 mt-3 w-full",ref:M,maxLength:2e3}),(0,u.jsx)("input",{type:"submit",value:"Update Story",className:"w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"})]}):null}}}]);
//# sourceMappingURL=640.1200e096.chunk.js.map