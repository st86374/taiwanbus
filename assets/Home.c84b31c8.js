import{k as C,l as $,m as _,n as j,p as T,q as B,o as n,s as E,t as f,e as S,f as t,w as V,v as q,x as l,c as r,F as v,y as g,z as k,A as z,d as b,B as p}from"./vendor.1559e045.js";import{B as A,_ as F,c as m}from"./Header.c85dcda0.js";import"./index.bef1ec86.js";const L={class:"bg-top bg-cover bg-no-repeat bg-[url('@/assets/img/banner-2.jpeg')] dark:bg-[url('@/assets/img/banner.jpeg')] w-full min-h-[calc(50vh-40px)] relative overflow-hidden"},M=t("div",{class:"absolute w-full h-[30px] scale-150 bg-white dark:bg-black bottom-[-20px] blur-sm"},null,-1),D=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),N=[D],R={key:0,class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 grid-rows-4 p-2 min-h-[50vh]"},H=["onClick"],P={key:1},U={class:"sticky top-[47px] flex items-center bg-white dark:bg-black dark:text-white"},Y={class:"text-black bg-white dark:text-white dark:bg-black"},G={class:"js-block",id:"north"},I=t("h2",{class:"p-2 mx-3 text-2xl font-bold text-main"},"\u5317\u90E8",-1),J={class:"dark:text-white text-xl gap-2 grid grid-flow-row-dense grid-cols-2 grid-rows-4 p-2 min-h-[50vh]"},K=["onClick"],O={class:"js-block",id:"central"},Q=t("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u4E2D\u90E8",-1),W={class:"text-xl gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[37.5vh]"},X=["onClick"],Z={class:"js-block",id:"south"},ee=t("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u5357\u90E8",-1),te={class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[37.5vh]"},oe=["onClick"],se={class:"js-block",id:"east"},ne=t("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u6771\u90E8",-1),re={class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[12.5vh]"},le=["onClick"],ae={class:"js-block",id:"island"},ie=t("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u5916\u5CF6",-1),de={class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[25vh]"},ce=["onClick"],ue={class:"p-2 text-center text-gray-400 bg-white footer dark:bg-black"},he=t("p",null,"Copyright\xA92022 TangYuCheng",-1),ke={setup(ve){const y=C(),c=$(),a=_("home"),i=_(-1);j(()=>{window.addEventListener("scroll",x)}),T(()=>{window.removeEventListener("scroll",x)});const u=s=>{let o;return s?o=m.filter(e=>e.area===s):o=m.filter(e=>e.municipality),o},d=s=>{if(s>-1){const o=document.querySelectorAll(".js-block");scrollTo(o[s].offsetTop,o[s].offsetTop-90),setTimeout(()=>{i.value=s},500)}else scrollTo(window.offsetTop,window.offsetTop)},x=s=>{s=document.documentElement;const o=document.querySelectorAll(".js-block");for(let e=o.length-1;e>=0;e--)if(s.scrollTop-100>=o[e].offsetTop-o[0].offsetTop){i.value=e;break}},w=s=>{a.value=s,s==="all"?(window.location.hash="all",a.value="all",setTimeout(()=>{d(0)},0)):(window.location.hash="",a.value="home")};return B(()=>y.hash,(s,o)=>{o?a.value="home":a.value="all"}),(s,o)=>(n(),E(A,null,{header:f(()=>[S(F)]),body:f(()=>[t("div",L,[M,V(t("a",{class:"fixed z-10 left-[8px] top-[8px] text-gray-400",onClick:o[0]||(o[0]=l(e=>(w("home"),d(-1)),["prevent"])),href:"#"},N,512),[[q,a.value=="all"]])]),a.value==="home"?(n(),r("div",R,[(n(!0),r(v,null,g(u(),e=>(n(),r("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:e.value,onClick:l(h=>b(c).push(`/city/${e.value}`),["prevent"])},p(e.name),9,H))),128)),t("button",{class:"col-span-2 duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",onClick:o[1]||(o[1]=l(e=>w("all"),["prevent"]))}," \u5168\u90E8\u57CE\u5E02 ")])):(n(),r("div",P,[t("div",U,[t("a",{class:k(["border-b-2 border-[transparent] py-2 px-4",{"text-main":i.value==0}]),onClick:o[2]||(o[2]=l(e=>d(0),["prevent"])),href:"#"},"\u5317\u90E8",2),t("a",{class:k(["border-b-2 border-[transparent] py-2 px-4",{"text-main":i.value==1}]),onClick:o[3]||(o[3]=l(e=>d(1),["prevent"])),href:"#"},"\u4E2D\u90E8",2),t("a",{class:k(["border-b-2 border-[transparent] py-2 px-4",{"text-main":i.value==2}]),onClick:o[4]||(o[4]=l(e=>d(2),["prevent"])),href:"#"},"\u5357\u90E8",2),t("a",{class:k(["border-b-2 border-[transparent] py-2 px-4",{"text-main":i.value==3}]),onClick:o[5]||(o[5]=l(e=>d(3),["prevent"])),href:"#"},"\u6771\u90E8",2),t("a",{class:k(["border-b-2 border-[transparent] py-2 px-4",{"text-main":i.value==4}]),onClick:o[6]||(o[6]=l(e=>d(4),["prevent"])),href:"#"},"\u5916\u5CF6",2)]),t("div",Y,[t("div",G,[I,t("div",J,[(n(!0),r(v,null,g(u("north"),e=>(n(),r("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:e.value,onClick:l(h=>b(c).push(`/city/${e.value}`),["prevent"])},p(e.name),9,K))),128))])]),t("div",O,[Q,t("div",W,[(n(!0),r(v,null,g(u("central"),e=>(n(),r("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:e.value,onClick:l(h=>b(c).push(`/city/${e.value}`),["prevent"])},p(e.name),9,X))),128))])]),t("div",Z,[ee,t("div",te,[(n(!0),r(v,null,g(u("south"),e=>(n(),r("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:e.value,onClick:l(h=>b(c).push(`/city/${e.value}`),["prevent"])},p(e.name),9,oe))),128))])]),t("div",se,[ne,t("div",re,[(n(!0),r(v,null,g(u("east"),e=>(n(),r("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:e.value,onClick:l(h=>b(c).push(`/city/${e.value}`),["prevent"])},p(e.name),9,le))),128))])]),t("div",ae,[ie,t("div",de,[(n(!0),r(v,null,g(u("island"),e=>(n(),r("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:e.value,onClick:l(h=>b(c).push(`/city/${e.value}`),["prevent"])},p(e.name),9,ce))),128))])])])])),t("div",ue,[z(s.$slots,"footer"),he])]),_:3}))}};export{ke as default};
