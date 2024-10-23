"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[272],{1784:(t,e,a)=>{a.d(e,{c:()=>n});a(9060);var o=a(1560),c=a(2496);const n=t=>{let{url:e}=t;const a=(0,o.i6)();return(0,c.jsx)("div",{className:"w-full flex justify-start my-5",children:(0,c.jsx)("button",{className:"bg-customOrange text-white py-2 px-4 rounded hover:bg-hoverOrange transition-colors duration-200",onClick:()=>{a(e)},children:"Go Back"})})}},9072:(t,e,a)=>{a.d(e,{c:()=>c});a(9060);var o=a(2496);const c=t=>{let{Children:e}=t;return(0,o.jsx)("div",{children:e})}},9840:(t,e,a)=>{a.d(e,{e:()=>n});var o=a(9780),c=a(8524);const n=async t=>{const e=new FormData;e.append("image",t);const a=localStorage.getItem("token"),n={headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(a)},withCredentials:!0};try{const t=await o.c.post("".concat(c.M,"/api/upload-image/"),e,n);return console.log(t.data),t.data.image_url}catch(r){throw alert("Error uploading image:",r),new Error("Image upload failed")}}},6776:(t,e,a)=>{a.d(e,{Cg:()=>h,Ub:()=>v,Wh:()=>u,YH:()=>x,e6:()=>s,ew:()=>g,gn:()=>m,m8:()=>p,my:()=>d,yU:()=>y});var o=a(9780),c=a(4348),n=a(8524);const r=localStorage.getItem("token")?localStorage.getItem("token"):null,l={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)},withCredentials:!0},i={headers:{"Content-type":"application/json"}},s=t=>async e=>{try{e({type:c.S});const{data:a}=await o.c.post("".concat(n.M,"/api/story/create/"),t,l);e({type:c.eY,payload:a})}catch(a){e({type:c.gf,payload:a})}},p=()=>async t=>{try{t({type:c.S_});const e=localStorage.getItem("token")?localStorage.getItem("token"):null,a={headers:{"Content-type":"application/json",...e&&{Authorization:"Bearer ".concat(e)}},withCredentials:!0},{data:r}=await o.c.get("".concat(n.M,"/api/story/list"),a);t({type:c.gr,payload:r})}catch(e){t({type:c.cW,payload:e})}},d=t=>async e=>{try{e({type:c.wp});const{data:a}=await o.c.get("".concat(n.M,"/api/story/").concat(t),i);e({type:c.sT,payload:a})}catch(a){e({type:c.Sw,payload:a})}},y=(t,e)=>async a=>{try{a({type:c.SY});const{data:r}=await o.c.post("".concat(n.M,"/api/story/").concat(t,"/chapter/create/"),e,l);a({type:c.wb,payload:r})}catch(r){a({type:c.ol,payload:r})}},u=t=>async e=>{try{e({type:c.UJ});const{data:a}=await o.c.get("".concat(n.M,"/api/story/").concat(t,"/chapter/list"),i);e({type:c.i3,payload:a})}catch(a){e({type:c.U6,payload:a})}},h=(t,e)=>async a=>{try{a({type:c.Ws});const{data:r}=await o.c.get("".concat(n.M,"/api/story/").concat(t,"/chapter/").concat(e),i);a({type:c.Mn,payload:r})}catch(r){a({type:c.WG,payload:r})}},m=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async e=>{try{e({type:c.Ah});const{data:a}=await o.c.get("".concat(n.M,"/api/admin/story/list").concat(t?"?page=".concat(t):""),l);e({type:c.I1,payload:a})}catch(a){e({type:c.S6,payload:a})}}},g=t=>async e=>{try{e({type:c.cX});const{data:a}=await o.c.get("".concat(n.M,"/api/admin/story/").concat(t,"/chapter/list"),l);e({type:c._I,payload:a})}catch(a){e({type:c.kf,payload:a})}},x=(t,e,a)=>async r=>{try{console.log(a),r({type:c.aA});const{data:i}=await o.c.put("".concat(n.M,"/api/story/").concat(t,"/chapter/").concat(e,"/update"),a,l);r({type:c.IT,payload:i})}catch(i){r({type:c.We,payload:i})}},v=(t,e)=>async a=>{try{a({type:c.m8});const{data:r}=await o.c.put("".concat(n.M,"/api/story/").concat(t,"/update"),e,l);a({type:c.Ip,payload:r})}catch(r){a({type:c.An,payload:r})}}},9272:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var o=a(9060),c=a(624),n=a(9840),r=a(6776),l=a(9072),i=a(3120),s=a(4348),p=a(1560),d=a(1784),y=a(2496);const u=t=>{let{dispatch:e}=t;const a=(0,p.i6)(),u=(0,c.w1)((t=>t.createStory)),{loading:h,error:m,success:g}=u,x=(0,o.useRef)(null),v=(0,o.useRef)(null),j=(0,o.useRef)(null),f=(0,o.useRef)(null),[w,b]=(0,o.useState)(""),[C,S]=(0,o.useState)({title:"",description:"",image:""}),[N,M]=(0,o.useState)(!1),[k,I]=(0,o.useState)(0);(0,o.useEffect)((()=>{g&&(A(),e({type:s.uI}),a("/"))}),[g]);const A=()=>{S({title:"",description:"",image:""}),x.current.value=null,v.current.value=null,j.current.value=null,f.current.value=null,b("")};return(0,y.jsxs)("form",{onSubmit:t=>{t.preventDefault(),S({title:x.current.value,description:v.current.value,category:f.current.value,image:w}),e((0,r.e6)({title:x.current.value,description:v.current.value,category:f.current.value,image:w}))},className:"form bg-white p-6 my-10 relative max-w-lg mx-auto shadow-lg rounded-lg",children:[(0,y.jsx)(d.c,{url:"/list-story"}),(0,y.jsx)("h3",{className:"text-2xl text-gray-900 font-semibold",children:"Add your latest story!"}),(0,y.jsx)("p",{className:"text-gray-600",children:"Let me know what is in your mind"}),h&&(0,y.jsx)(i.c,{}),m&&(0,y.jsx)(l.c,{children:m}),N&&(0,y.jsxs)("div",{className:"flex flex-col items-center",children:[(0,y.jsx)(i.c,{}),(0,y.jsxs)("p",{children:["Uploading image: ",k,"%"]})]}),(0,y.jsxs)("div",{className:"flex space-x-5 mt-3",children:[(0,y.jsx)("input",{type:"text",name:"title",placeholder:"Story Name",className:"border p-2 w-1/2",ref:x}),(0,y.jsxs)("select",{name:"category",ref:f,className:"border p-2 rounded-md",children:[(0,y.jsx)("option",{value:"Fantasy",children:"Fantasy"}),(0,y.jsx)("option",{value:"Adventure",children:"Adventure"}),(0,y.jsx)("option",{value:"Fairy Tale",children:"Fairy Tales"}),(0,y.jsx)("option",{value:"Mystery",children:"Mystery"}),(0,y.jsx)("option",{value:"Science Fiction",children:"Science Fiction"}),(0,y.jsx)("option",{value:"Historical Fiction",children:"Historical Fiction"}),(0,y.jsx)("option",{value:"Horror",children:"Horror"}),(0,y.jsx)("option",{value:"Romance",children:"Romance"}),(0,y.jsx)("option",{value:"Rom-Com",children:"Rom-Com"}),(0,y.jsx)("option",{value:"Drama",children:"Drama"}),(0,y.jsx)("option",{value:"Thriller",children:"Thriller"}),(0,y.jsx)("option",{value:"Non Fiction",children:"Non-Fiction"}),(0,y.jsx)("option",{value:"Biography",children:"Biography"}),(0,y.jsx)("option",{value:"Comedy",children:"Comedy"}),(0,y.jsx)("option",{value:"Classic",children:"Classic"}),(0,y.jsx)("option",{value:"Young Adult",children:"Young Adult"}),(0,y.jsx)("option",{value:"Children",children:"Children's"}),(0,y.jsx)("option",{value:"Graphic Novel",children:"Graphic Novel"})]})]}),(0,y.jsxs)("div",{className:"py-5",children:[w&&(0,y.jsx)("img",{src:w,alt:"Uploaded cover",loading:"lazy"}),(0,y.jsx)("input",{type:"file",name:"cover",accept:"image/*",onChange:async t=>{t.preventDefault();const e=t.target.files[0];if(e){M(!0),I(0);try{const t=await(0,n.e)(e,(t=>{const e=Math.round(100*t.loaded/t.total);I(e)}));b(t)}catch(m){console.error("Image upload failed",m)}finally{M(!1)}}},className:"border p-2",ref:j})]}),(0,y.jsx)("textarea",{name:"description",cols:10,rows:3,maxLength:2e3,placeholder:"Summarize your story",className:"border p-2 mt-3 w-full",ref:v}),(0,y.jsx)("input",{type:"submit",value:"Submit",className:"w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"})]})}}}]);
//# sourceMappingURL=272.96390511.chunk.js.map