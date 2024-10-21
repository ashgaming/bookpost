"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[776],{2432:(e,r,s)=>{s.d(r,{c:()=>a});s(9060);var t=s(2496);const a=()=>(0,t.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"}),(0,t.jsx)("h2",{className:"text-white text-xl font-semibold",children:"Loading..."}),(0,t.jsx)("p",{className:"text-white text-sm mt-2",children:"Please wait"})]})})},9072:(e,r,s)=>{s.d(r,{c:()=>a});s(9060);var t=s(2496);const a=e=>{let{Children:r}=e;return(0,t.jsx)("div",{children:r})}},1776:(e,r,s)=>{s.r(r),s.d(r,{default:()=>m});var t=s(9060),a=s(1560),l=s(12),n=s(624),c=s(3212),o=s(2432),u=s(9072),d=s(2496);const i=s(6594),m=()=>{const e=(0,t.useRef)(),r=(0,t.useRef)(),s=(0,t.useRef)(),m=(0,t.useRef)(),f=(0,n.OY)(),x=(0,a.i6)(),{loading:b,error:h,success:p,token:g}=(0,n.w1)((e=>e.userRegister)),w=()=>{const t=e.current.value.trim();if(!t)return alert("Username is required"),e.current.focus(),!1;if(t.length<8)return alert("Username must be at least 8 characters long."),e.current.focus(),!1;if(!/^[a-zA-Z0-9]+$/.test(t))return alert("Username can only contain letters and numbers."),e.current.focus(),!1;const a=t.replace(/[<>&"'\\`]/g,""),l=r.current.value.trim();if(!l)return alert("Email is required"),r.current.focus(),!1;if(l.length<5)return alert("Email must be at least 5 characters long."),r.current.focus(),!1;if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(l))return alert("Please enter a valid email address."),r.current.focus(),!1;const n=s.current.value;if(n!==m.current.value)return alert("Passwords do not match. Please try again."),m.current.focus(),!1;if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(n))return alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."),s.current.focus(),!1;const c=n.replace(/[<>&"'\\`]/g,"");return e.current.value=a,s.current.value=c,m.current.value=c,!0};return(0,t.useEffect)((()=>{p&&x("/")}),[p,x]),(0,d.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center h-screen bg-[#F9BEAD]",children:[(0,d.jsxs)("div",{className:"lg:p-36 md:p-20 sm:p-8 p-4 w-full lg:w-1/2 ",children:[(0,d.jsx)("h1",{className:"text-2xl font-semibold mb-4",children:"Register"}),b&&(0,d.jsx)(o.c,{}),p&&(0,d.jsx)(u.c,{children:"Registration successful!"}),(0,d.jsxs)("form",{onSubmit:t=>{t.preventDefault();const a={username:e.current.value,email:r.current.value,password:s.current.value,confirmPassword:m.current.value};w()&&f((0,c.Ee)(a))},children:[(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)("label",{htmlFor:"username",className:"block text-gray-600",children:"Username"}),h&&(0,d.jsx)(u.c,{children:h}),(0,d.jsx)("input",{type:"text",id:"username",name:"username",ref:e,className:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autoComplete:"off"})]}),(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)("label",{htmlFor:"username",className:"block text-gray-600",children:"Email"}),(0,d.jsx)("input",{type:"email",id:"email",name:"email",ref:r,className:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autoComplete:"off"})]}),(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)("label",{htmlFor:"password",className:"block text-gray-800",children:"Password"}),(0,d.jsx)("input",{type:"password",id:"password",name:"password",ref:s,className:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autoComplete:"off"})]}),(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)("label",{htmlFor:"confirmPassword",className:"block text-gray-800",children:"Confirm Password"}),(0,d.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",ref:m,className:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autoComplete:"off"})]}),(0,d.jsx)("button",{type:"submit",className:"bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full",children:"Register"})]}),(0,d.jsx)("div",{className:"mt-6 text-green-500 text-center",children:(0,d.jsx)(l.cH,{to:"/login",className:"hover:underline",children:"Sign in Here"})})]}),(0,d.jsx)("div",{className:"w-full lg:w-1/2 hidden lg:block h-screen",children:(0,d.jsx)("img",{src:i,alt:"Placeholder",className:"object-cover w-full h-screen"})})]})}},6594:(e,r,s)=>{e.exports=s.p+"static/media/reg.9f57e54cd498c0a79296.webp"}}]);
//# sourceMappingURL=776.2453da66.chunk.js.fea65e28b7f0.map