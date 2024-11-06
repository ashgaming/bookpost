"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[452],{7196:(e,t,a)=>{a.d(t,{c:()=>c});a(9060);var s=a(2496);const c=e=>{let{rating:t,count:a}=e;return(0,s.jsxs)("span",{className:"flex items-center",children:[[...Array(5)].map(((e,a)=>(0,s.jsx)("svg",{fill:t>=a+1?"currentColor":"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 text-red-500",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})},a))),(0,s.jsxs)("span",{className:"text-gray-600 ml-3",children:[a," Reviews"]})]})}},2432:(e,t,a)=>{a.d(t,{c:()=>c});a(9060);var s=a(2496);const c=()=>(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"}),(0,s.jsx)("h2",{className:"text-white text-xl font-semibold",children:"Loading..."}),(0,s.jsx)("p",{className:"text-white text-sm mt-2",children:"Please wait"})]})})},6776:(e,t,a)=>{a.d(t,{Cg:()=>y,Ub:()=>f,Wh:()=>p,YH:()=>g,_C:()=>w,e6:()=>i,ew:()=>u,gn:()=>h,kz:()=>j,m8:()=>d,my:()=>m,xk:()=>o,yU:()=>x});var s=a(9780),c=a(4348),r=a(8524);const l=localStorage.getItem("token")?localStorage.getItem("token"):null,o={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(l)},withCredentials:!0},n={headers:{"Content-type":"application/json"}},i=e=>async t=>{try{t({type:c.S});const{data:a}=await s.c.post("".concat(r.M,"/api/story/create/"),e,o);t({type:c.eY,payload:a})}catch(a){t({type:c.gf,payload:a})}},d=()=>async e=>{try{e({type:c.S_});const t=localStorage.getItem("token")?localStorage.getItem("token"):null,a={headers:{"Content-type":"application/json",...t&&{Authorization:"Bearer ".concat(t)}},withCredentials:!0},{data:l}=await s.c.get("".concat(r.M,"/api/story/list"),a);e({type:c.gr,payload:l})}catch(t){e({type:c.cW,payload:t})}},m=e=>async t=>{try{t({type:c.wp});const{data:a}=await s.c.get("".concat(r.M,"/api/story/").concat(e),n);t({type:c.sT,payload:a})}catch(a){t({type:c.Sw,payload:a})}},x=(e,t)=>async a=>{try{a({type:c.SY});const{data:l}=await s.c.post("".concat(r.M,"/api/story/").concat(e,"/chapter/create/"),t,o);a({type:c.wb,payload:l})}catch(l){a({type:c.ol,payload:l})}},p=e=>async t=>{try{t({type:c.UJ});const{data:a}=await s.c.get("".concat(r.M,"/api/story/").concat(e,"/chapter/list"),n);t({type:c.i3,payload:a})}catch(a){t({type:c.U6,payload:a})}},y=(e,t)=>async a=>{try{a({type:c.Ws});const{data:l}=await s.c.get("".concat(r.M,"/api/story/").concat(e,"/chapter/").concat(t),n);a({type:c.Mn,payload:l})}catch(l){a({type:c.WG,payload:l})}},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return async t=>{try{t({type:c.Ah});const{data:a}=await s.c.get("".concat(r.M,"/api/admin/story/list").concat(e?"?page=".concat(e):""),o);t({type:c.I1,payload:a})}catch(a){t({type:c.S6,payload:a})}}},u=e=>async t=>{try{t({type:c.cX});const{data:a}=await s.c.get("".concat(r.M,"/api/admin/story/").concat(e,"/chapter/list"),o);t({type:c._I,payload:a})}catch(a){t({type:c.kf,payload:a})}},g=(e,t,a)=>async l=>{try{console.log(a),l({type:c.aA});const{data:n}=await s.c.put("".concat(r.M,"/api/story/").concat(e,"/chapter/").concat(t,"/update"),a,o);l({type:c.IT,payload:n})}catch(n){l({type:c.We,payload:n})}},f=(e,t)=>async a=>{try{a({type:c.m8});const{data:l}=await s.c.put("".concat(r.M,"/api/story/").concat(e,"/update"),t,o);a({type:c.Ip,payload:l})}catch(l){a({type:c.An,payload:l})}},j=e=>async t=>{try{t({type:c.oh});const{data:a}=await s.c.post("".concat(r.M,"/api/story/").concat(e.storyid,"/comment/create"),e,o);t({type:c.k$,payload:a})}catch(a){t({type:c.Ej,payload:a})}},w=e=>async t=>{try{t({type:c._Y});const{data:a}=await s.c.get("".concat(r.M,"/api/story/").concat(e,"/comment/list"),n);t({type:c._8,payload:a})}catch(a){t({type:c.O0,payload:a})}}},9452:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(9060),c=a(1560),r=a(624),l=a(6776),o=a(2496);const n=e=>{var t,a;let{type:c,id:n}=e;const i=(0,r.w1)((e=>e.createComment)),{loading:d,error:m,success:x,comment:p}=i,[y,h]=(0,s.useState)(0),[u,g]=(0,s.useState)(""),f=(0,r.OY)(),j=(0,s.useRef)("");return(0,o.jsx)("div",{className:"max-w-4xl py-16 xl:px-8 flex justify-center mx-auto",children:(0,o.jsxs)("div",{className:"w-full mt-16 md:mt-0",children:[d&&(0,o.jsx)("h1",{children:"Loading..."}),m&&(0,o.jsx)("h1",{children:"Error..."}),(0,o.jsxs)("form",{onSubmit:e=>(e=>{e.preventDefault();const t={storyid:n,type:c||"",rate:y||0,comment:j.current?j.current.value:""};f((0,l.kz)(t)),j.current&&(j.current.value=""),h(0)})(e),className:"relative z-10 h-auto p-8 py-10 bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7",children:[(0,o.jsx)("h3",{className:"mb-6 text-2xl font-medium text-center",children:"Write a Comment"}),(0,o.jsxs)("div",{className:"mb-6 text-center",children:[(0,o.jsx)("h4",{className:"mb-2 text-lg font-medium",children:"Rate this:"}),(0,o.jsx)("div",{className:"flex justify-center",children:[1,2,3,4,5].map(((e,t)=>(0,o.jsxs)("label",{className:"flex items-center cursor-pointer",children:[(0,o.jsx)("input",{type:"radio",name:"rating",value:e,className:"hidden",onClick:e=>(e=>{e.preventDefault(),h(e.target.value==y?0:e.target.value)})(e)}),y>=e?(0,o.jsx)("svg",{className:"w-6 h-6 text-yellow-500 hover:text-yellow-200",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M12 .587l3.668 7.428 8.193 1.187-5.917 5.252 1.396 8.157L12 18.897l-7.34 4.083 1.396-8.157-5.917-5.252 8.193-1.187z"})}):(0,o.jsx)("svg",{className:"w-6 h-6 text-gray-300 hover:text-yellow-500",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M12 .587l3.668 7.428 8.193 1.187-5.917 5.252 1.396 8.157L12 18.897l-7.34 4.083 1.396-8.157-5.917-5.252 8.193-1.187z"})})]},e)))})]}),(0,o.jsx)("textarea",{name:"comment",className:"w-full px-4 py-3  border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:outline-none",placeholder:"Write your comment",rows:"5",required:!0,maxLength:500,onChange:e=>g(e.target.value),ref:j}),(0,o.jsxs)("p",{className:"mb-4 text-right",children:[null!==(t=j.current.value)&&void 0!==t&&t.length?null===(a=j.current.value)||void 0===a?void 0:a.length:"0","/500"]}),(0,o.jsx)("input",{type:"submit",value:"Submit Comment",className:"text-white px-4 py-3 bg-blue-500 rounded-lg hover:bg-slate-700"})]})]})})};var i=a(12);const d=()=>{const{id:e}=(0,c.W4)(),t=(0,r.OY)(),a=(0,r.w1)((e=>e.listChapter)),{chapters:n}=a;return(0,s.useEffect)((()=>{t((0,l.Wh)(e)),console.log("com reloaders")}),[e,t]),console.log(typeof n),n&&"object"===typeof n?(console.log(n),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"text-2xl mt-4 text-gray-500 font-bold text-center",children:"Chapters"}),(0,o.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-10 mt-8 sm:mt-16 w-full",children:n.map(((t,a)=>(0,o.jsxs)("div",{className:"flex flex-col items-start overflow-hidden shadow-lg rounded-xl transition-transform duration-300 transform hover:scale-105",children:[(0,o.jsx)(i.cH,{to:"/story/".concat(e,"/chapter/").concat(t._id),className:"block w-full",children:(0,o.jsx)("img",{className:"object-cover w-full h-48 rounded-t-xl transition duration-300 transform hover:scale-105",src:t.cover,alt:"Chapter cover for ".concat(t.title)})}),(0,o.jsx)("div",{className:"relative flex flex-col items-start p-4 bg-white border-t border-gray-200 rounded-b-xl",children:(0,o.jsx)("h2",{className:"text-lg font-semibold text-gray-800 truncate",children:(0,o.jsxs)(i.cH,{to:"/story/".concat(e,"/chapter/").concat(t._id),className:"hover:text-blue-600",children:[t._id," : ",t.title]})})})]},a)))})]})):null};var m=a(9780),x=a(8524);var p=a(4348);const y=()=>{const e=(0,r.OY)(),{id:t}=(0,c.W4)(),{loading:a,error:n,comments:i=[]}=(0,r.w1)((e=>e.listComments)),[d,y]=(0,s.useState)(!1),[h,u]=(0,s.useState)(!1);(0,s.useEffect)((()=>{e((0,l._C)(t))}),[e,t,h]);const g=()=>{const e=["bg-red-500","bg-blue-500","bg-green-500","bg-yellow-500","bg-purple-500","bg-pink-500"];return e[Math.floor(Math.random()*e.length)]},f=async(t,a)=>{if(t.preventDefault(),!d)try{y(!0);const t=await e((e=>async t=>{try{const{data:t}=await m.c.delete("".concat(x.M,"/api/comment/delete/").concat(e),l.xk);return"success"}catch(a){return a}})(a));if("success"===t){const t=i.filter((e=>e._id!==a));e({type:p._8,payload:{comments:t}})}else alert(t)}catch(n){alert("Something went wrong...!")}finally{y(!1)}};return(0,o.jsxs)("div",{className:"max-w-4xl px-10 py-16 mx-auto bg-gray-100 min-w-screen",children:[(0,o.jsx)("p",{className:"mt-1 text-2xl font-bold text-left text-gray-800 sm:text-center",children:"All Comments on this Post"}),a&&(0,o.jsx)("p",{children:"Loading..."}),n&&(0,o.jsx)("p",{children:"Error..."}),0===i.length&&!a&&(0,o.jsx)("p",{children:"No comments...!"}),i.map((e=>{var t;return(0,o.jsxs)("div",{className:"flex items-center w-full px-6 py-6 mx-auto mt-2 bg-white border border-gray-200 rounded-lg",children:[(0,o.jsx)("div",{className:"flex items-center justify-center ".concat(g()," text-white font-bold text-2xl rounded-full w-20 h-16"),children:null===(t=e.username)||void 0===t?void 0:t.charAt(0).toUpperCase()}),(0,o.jsxs)("div",{className:"w-full mx-2",children:[(0,o.jsx)("p",{className:"text-lg font-bold text-left text-gray-800",children:e.username}),(0,o.jsx)("p",{className:"text-sm text-left text-gray-500",children:e.comment})]}),e.user===JSON.parse(sessionStorage.getItem("user"))._id&&(0,o.jsx)("div",{className:"flex justify-end mx-2",children:(0,o.jsx)("button",{onClick:t=>f(t,e._id),disabled:d,children:d?"Loading...":"Delete"})})]},e._id)})),(0,o.jsx)("button",{onClick:()=>u(!h),className:"mt-4 p-2 bg-blue-500 text-white rounded",children:"Load More Comments"})]})};var h=a(7196);const u=e=>{let{book:t}=e;const[a,c]=(0,s.useState)();return t?(console.log(t.cover),(0,o.jsx)("section",{className:"text-gray-700 body-font overflow-hidden bg-white",children:(0,o.jsx)("div",{className:"container px-5 py-24 mx-auto",children:(0,o.jsxs)("div",{className:"lg:w-4/5 mx-auto flex flex-wrap",children:[(0,o.jsx)("img",{alt:"ecommerce",className:"lg:w-1/2 w-full object-cover object-center rounded border border-gray-200",src:t.cover,loading:"lazy"}),(0,o.jsxs)("div",{className:"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",children:[(0,o.jsx)("h1",{className:"text-gray-900 text-3xl title-font font-medium mb-1",children:t.name}),(0,o.jsx)("h2",{className:"text-sm title-font text-gray-500 tracking-widest",children:t.category}),(0,o.jsx)("div",{className:"flex mb-4 justify-end",children:(0,o.jsx)(h.c,{rating:t.rating,count:t.numReviews})}),(0,o.jsx)("p",{className:"leading-relaxed",children:t.summary}),(0,o.jsx)("div",{className:"flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"}),(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("span",{className:"title-font font-medium text-2xl text-gray-900",children:(0,o.jsxs)("div",{className:"flex justify-start items-center mt-2",children:[(0,o.jsx)("p",{className:"text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500",children:t.views?t.views:"0"}),(0,o.jsx)("p",{className:"text-sm text-gray-400 font-bold ml-5",children:"Views"})]})}),(0,o.jsx)("button",{className:"flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded",children:(0,o.jsx)(i.cH,{to:"/story/".concat(t._id,"/chapter/1"),children:"Read"})})]})]})]})})})):null};var g=a(2432);const f=s.memo(u),j=s.memo(d),w=s.memo(n),v=s.memo(y),b=()=>{const{id:e}=(0,c.W4)(),t=(0,r.OY)();(0,s.useEffect)((()=>{!e||d&&d._id==e||t((0,l.my)(e))}),[t,e]);const a=(0,r.w1)((e=>e.readStory)),{loading:n,error:i,book:d}=a;return(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsx)("div",{className:"text-red-500 text-center",children:i}),n?(0,o.jsx)(g.c,{}):(0,o.jsx)(f,{book:d}),(0,o.jsx)("div",{className:"mt-6 bg-gray-50",children:(0,o.jsxs)("div",{className:"px-10 py-6 mx-auto",children:[!n&&(0,o.jsx)(j,{}),(0,o.jsx)(v,{}),sessionStorage.getItem("user")&&(0,o.jsx)(w,{type:"story",id:e})]})})]})}}}]);
//# sourceMappingURL=452.40d97145.chunk.js.map