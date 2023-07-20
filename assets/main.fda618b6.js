import{o as v,c as h,a as ce,u as H,b as G,d as F,e as K,f as e,g as P,w as i,h as ee,i as ue,r as ye,j as Z,v as U,k as te,F as L,l as de,m as ge,n as xe,p as w,q as Y,s as oe,t as ae,x as I,y as R,z as ke,A as m,B as we,C as _e,L as pe,D as $e,E as Ce,G as Te,H as Se}from"./vendor.85291796.js";const Ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))y(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const x of u.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&y(x)}).observe(document,{childList:!0,subtree:!0});function b(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function y(r){if(r.ep)return;r.ep=!0;const u=b(r);fetch(r.href,u)}};Ee();var Pe=(l,t)=>{const b=l.__vccOpts||l;for(const[y,r]of t)b[y]=r;return b};const De={},Me={class:"w-screen h-screen z-30 text-white bg-black/50 backdrop-blur-md flex items-center justify-center fixed top-0 left-0"},Le=ce('<div><p class="flex-1 text-center text-2xl font-bold italic"><span class="text-main text-2xl font-bold italic">T</span>aiwan<span class="text-main text-2xl font-bold italic">B</span>us </p><div class="my-3 flex items-center justify-center space-x-2 animate-pulse"><div class="w-4 h-4 bg-orange-400 rounded-full"></div><div class="w-4 h-4 bg-orange-400 rounded-full"></div><div class="w-4 h-4 bg-orange-400 rounded-full"></div></div><p class="text-center">\u8CC7\u6599\u8B80\u53D6\u4E2D</p></div>',1),Re=[Le];function Be(l,t){return v(),h("div",Me,Re)}var Ne=Pe(De,[["render",Be]]);const Ie={class:"relative flex items-center justify-center w-full p-2 text-gray-400 bg-white dark:bg-black"},Ae=e("div",{class:"absolute top-0 right-0 left-0 bottom-0 z-[-1]"},null,-1),je={class:"flex-1"},ze=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),Oe=[ze],Ze=e("h1",{class:"flex-1 text-2xl italic font-bold text-center"},[e("span",{class:"text-2xl italic font-bold text-main"},"T"),ue("aiwan"),e("span",{class:"text-2xl italic font-bold text-main"},"B"),ue("us ")],-1),Ve=[Ze],He={class:"flex items-center justify-end flex-1"},Ge={for:"toggleTheme",class:"flex items-center cursor-pointer"},Fe={class:"relative"},Ke=["checked"],Ue=ce('<div class="block h-8 bg-gray-600 rounded-full w-14"></div><svg xmlns="http://www.w3.org/2000/svg" class="moon h-6 w-6 absolute text-white right-[3px] bottom-2/4 translate-y-2/4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="sun h-6 w-6 absolute text-white left-[3px] bottom-2/4 translate-y-2/4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg><div id="toggleDot" class="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>',4),qe={__name:"Header",setup(l){const t=H(),b=G(),y=F();K(()=>t.getters.theme);const r=K(()=>!document.documentElement.classList.contains("dark"));o();const u=f=>{y.go(f)},x=()=>{b.path==="/"?window.location.hash="":(y.push("/"),console.log("check"))},C=f=>{document.getElementById("toggleDot"),f.currentTarget.checked?(document.documentElement.classList.remove("dark"),t.dispatch("handThemeSet",!0)):(document.documentElement.classList.add("dark"),t.dispatch("handThemeSet",!1))};function o(){return"matchMedia"in window?matchMedia("(prefers-color-scheme: dark)").matches:void 0}return(f,n)=>(v(),h("header",Ie,[Ae,e("div",je,[P(b).path!="/"?(v(),h("a",{key:0,onClick:n[0]||(n[0]=i(s=>u(-1),["prevent"])),href:"#"},Oe)):ee("",!0)]),e("a",{href:"#",onClick:n[1]||(n[1]=i(s=>x(),["prevent"]))},Ve),e("div",He,[e("label",Ge,[e("div",Fe,[e("input",{checked:r.value,type:"checkbox",id:"toggleTheme",class:"sr-only",onChange:n[2]||(n[2]=s=>C(s))},null,40,Ke),Ue])])])]))}},We={class:"max-w-md mx-auto"},Ye={class:"fixed top-0 max-w-md mx-auto z-10 w-full"},Xe={__name:"App",setup(l){const t=H(),b=K(()=>t.getters.loading);return(y,r)=>{const u=ye("router-view");return v(),h(L,null,[Z(te(Ne,null,null,512),[[U,b.value]]),e("div",We,[e("div",Ye,[te(qe)]),te(u)])],64)}}},q=[{name:"\u81FA\u5317\u5E02",value:"Taipei",municipality:!0,area:"north"},{name:"\u65B0\u5317\u5E02",value:"NewTaipei",municipality:!0,area:"north"},{name:"\u6843\u5712\u5E02",value:"Taoyuan",municipality:!0,area:"north"},{name:"\u81FA\u4E2D\u5E02",value:"Taichung",municipality:!0,area:"central"},{name:"\u81FA\u5357\u5E02",value:"Tainan",municipality:!0,area:"south"},{name:"\u9AD8\u96C4\u5E02",value:"Kaohsiung",municipality:!0,area:"south"},{name:"\u57FA\u9686\u5E02",value:"Keelung",municipality:!1,area:"north"},{name:"\u65B0\u7AF9\u5E02",value:"Hsinchu",municipality:!1,area:"north"},{name:"\u65B0\u7AF9\u7E23",value:"HsinchuCounty",municipality:!1,area:"north"},{name:"\u82D7\u6817\u7E23",value:"MiaoliCounty",municipality:!1,area:"central"},{name:"\u5F70\u5316\u7E23",value:"ChanghuaCounty",municipality:!1,area:"central"},{name:"\u5357\u6295\u7E23",value:"NantouCounty",municipality:!1,area:"central"},{name:"\u96F2\u6797\u7E23",value:"YunlinCounty",municipality:!1,area:"central"},{name:"\u5609\u7FA9\u7E23",value:"ChiayiCounty",municipality:!1,area:"south"},{name:"\u5609\u7FA9\u5E02",value:"Chiayi",municipality:!1,area:"south"},{name:"\u5C4F\u6771\u7E23",value:"PingtungCounty",municipality:!1,area:"south"},{name:"\u5B9C\u862D\u7E23",value:"YilanCounty",municipality:!1,area:"north"},{name:"\u82B1\u84EE\u7E23",value:"HualienCounty",municipality:!1,area:"east"},{name:"\u81FA\u6771\u7E23",value:"TaitungCounty",municipality:!1,area:"east"},{name:"\u91D1\u9580\u7E23",value:"KinmenCounty",municipality:!1,area:"island"},{name:"\u6F8E\u6E56\u7E23",value:"PenghuCounty",municipality:!1,area:"island"},{name:"\u9023\u6C5F\u7E23",value:"LienchiangCounty",municipality:!1,area:"island"}],A=de.create({baseURL:"https://tdx.transportdata.tw/api/basic/v2/Bus/"});async function ve(){const l={grant_type:"client_credentials",client_id:"st86374-0ecc12e2-da3b-45a9",client_secret:"8193d254-d04d-45ef-ba48-960367c809fd"};let t="https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";try{let y=(await de({method:"POST",url:t,data:xe.stringify(l),headers:{"content-type":"application/x-www-form-urlencoded"}})).data.access_token;return ge.set("token",y,{expires:1}),y}catch(b){throw b}}let X=!1,se=[];function Je(l){se.forEach(t=>t(l)),se=[],X=!1}function Qe(l){se.push(l)}A.interceptors.request.use(async l=>{let t=ge.get("token");return t||(t=await ve()),l.headers.authorization=`Bearer ${t}`,l},async l=>{const t=l.config;if(l.response.status===401&&!t._retry){if(X)return new Promise(y=>{Qe(r=>{t.headers.authorization=`Bearer ${r}`,y(A(t))})});X=!0;try{const b=await ve();return Je(b),t.headers.authorization=`Bearer ${b}`,A(t)}catch(b){return Promise.reject(b)}finally{X=!1}}return Promise.reject(l)});const et=l=>A.get(`Route/City/${l}`),he=(l,t)=>A.get(`EstimatedTimeOfArrival/City/${l}/${t}`),tt=(l,t)=>A.get(`StopOfRoute/City/${l}/${t}`),ot=(l,t)=>A.get(`StopOfRoute/City/${l}?$filter=Stops/any(c: c/StopName/Zh_tw eq '${t}')`),me=(l,t)=>A.get(`Route/City/${l}/${t}`),at=(l,t)=>A.get(`Stop/City/${l}?$filter=StopName/Zh_tw eq '${t}'`),st={class:"bg-top bg-cover bg-no-repeat bg-[url('@/assets/img/banner-2.jpeg')] dark:bg-[url('@/assets/img/banner.jpeg')] w-full min-h-[calc(50vh-40px)] relative overflow-hidden"},nt=e("div",{class:"absolute w-full h-[30px] scale-150 bg-white dark:bg-black bottom-[-20px] blur-sm"},null,-1),lt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 h-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),rt=[lt],it={key:0,class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 grid-rows-4 p-2 min-h-[50vh]"},ct=["onClick"],ut={key:1},dt={class:"sticky top-[47px] flex items-center bg-white dark:bg-black dark:text-white"},gt={class:"text-black bg-white dark:text-white dark:bg-black"},pt={class:"js-block",id:"north"},vt=e("h2",{class:"p-2 mx-3 text-2xl font-bold text-main"},"\u5317\u90E8",-1),ht={class:"dark:text-white text-xl gap-2 grid grid-flow-row-dense grid-cols-2 grid-rows-4 p-2 min-h-[50vh]"},mt=["onClick"],bt={class:"js-block",id:"central"},ft=e("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u4E2D\u90E8",-1),yt={class:"text-xl gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[37.5vh]"},xt=["onClick"],kt={class:"js-block",id:"south"},wt=e("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u5357\u90E8",-1),_t={class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[37.5vh]"},$t=["onClick"],Ct={class:"js-block",id:"east"},Tt=e("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u6771\u90E8",-1),St={class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[12.5vh]"},Et=["onClick"],Pt={class:"js-block",id:"island"},Dt=e("h2",{class:"mx-3 text-2xl font-bold text-main"},"\u5916\u5CF6",-1),Mt={class:"dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[25vh]"},Lt=["onClick"],Rt={class:"p-2 text-center text-gray-400 bg-white footer dark:bg-black"},Bt=e("p",null,"Copyright\xA92022 TangYuCheng",-1),Nt={__name:"Home",setup(l){const t=G(),b=F(),y=w("home"),r=w(-1);Y(()=>{window.addEventListener("scroll",C)}),oe(()=>{window.removeEventListener("scroll",C)});const u=f=>{let n;return f?n=q.filter(s=>s.area===f):n=q.filter(s=>s.municipality),n},x=f=>{if(f>-1){const n=document.querySelectorAll(".js-block");scrollTo(n[f].offsetTop,n[f].offsetTop-90),setTimeout(()=>{r.value=f},500)}else scrollTo(window.offsetTop,window.offsetTop)},C=f=>{f=document.documentElement;const n=document.querySelectorAll(".js-block");for(let s=n.length-1;s>=0;s--)if(f.scrollTop-100>=n[s].offsetTop-n[0].offsetTop){r.value=s;break}},o=f=>{y.value=f,f==="all"?(y.value="all",setTimeout(()=>{x(0)},0)):y.value="home"};return ae(()=>t.hash,(f,n)=>{n?y.value="home":y.value="all"}),(f,n)=>(v(),h(L,null,[e("div",st,[nt,Z(e("a",{class:"fixed z-10 left-[8px] top-[8px] text-gray-400",onClick:n[0]||(n[0]=i(s=>(o("home"),x(-1)),["prevent"])),href:"#"},rt,512),[[U,y.value=="all"]])]),y.value==="home"?(v(),h("div",it,[(v(!0),h(L,null,I(u(),s=>(v(),h("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:s.value,onClick:i(D=>P(b).push(`/city/${s.value}`),["prevent"])},m(s.name),9,ct))),128)),e("button",{class:"col-span-2 duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",onClick:n[1]||(n[1]=i(s=>o("all"),["prevent"]))}," \u5168\u90E8\u57CE\u5E02 ")])):(v(),h("div",ut,[e("div",dt,[e("a",{class:R(["border-b-2 border-[transparent] py-2 px-4",{"text-main":r.value==0}]),onClick:n[2]||(n[2]=i(s=>x(0),["prevent"])),href:"#"},"\u5317\u90E8",2),e("a",{class:R(["border-b-2 border-[transparent] py-2 px-4",{"text-main":r.value==1}]),onClick:n[3]||(n[3]=i(s=>x(1),["prevent"])),href:"#"},"\u4E2D\u90E8",2),e("a",{class:R(["border-b-2 border-[transparent] py-2 px-4",{"text-main":r.value==2}]),onClick:n[4]||(n[4]=i(s=>x(2),["prevent"])),href:"#"},"\u5357\u90E8",2),e("a",{class:R(["border-b-2 border-[transparent] py-2 px-4",{"text-main":r.value==3}]),onClick:n[5]||(n[5]=i(s=>x(3),["prevent"])),href:"#"},"\u6771\u90E8",2),e("a",{class:R(["border-b-2 border-[transparent] py-2 px-4",{"text-main":r.value==4}]),onClick:n[6]||(n[6]=i(s=>x(4),["prevent"])),href:"#"},"\u5916\u5CF6",2)]),e("div",gt,[e("div",pt,[vt,e("div",ht,[(v(!0),h(L,null,I(u("north"),s=>(v(),h("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:s.value,onClick:i(D=>P(b).push(`/city/${s.value}`),["prevent"])},m(s.name),9,mt))),128))])]),e("div",bt,[ft,e("div",yt,[(v(!0),h(L,null,I(u("central"),s=>(v(),h("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:s.value,onClick:i(D=>P(b).push(`/city/${s.value}`),["prevent"])},m(s.name),9,xt))),128))])]),e("div",kt,[wt,e("div",_t,[(v(!0),h(L,null,I(u("south"),s=>(v(),h("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:s.value,onClick:i(D=>P(b).push(`/city/${s.value}`),["prevent"])},m(s.name),9,$t))),128))])]),e("div",Ct,[Tt,e("div",St,[(v(!0),h(L,null,I(u("east"),s=>(v(),h("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:s.value,onClick:i(D=>P(b).push(`/city/${s.value}`),["prevent"])},m(s.name),9,Et))),128))])]),e("div",Pt,[Dt,e("div",Mt,[(v(!0),h(L,null,I(u("island"),s=>(v(),h("button",{class:"duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:s.value,onClick:i(D=>P(b).push(`/city/${s.value}`),["prevent"])},m(s.name),9,Lt))),128))])])])])),e("div",Rt,[ke(f.$slots,"footer"),Bt])],64))}},It={class:"bg-white dark:bg-black relative mt-[48px]"},At={class:"flex items-center w-full p-3 text-black bg-white border-b-2 dark:text-white border-main dark:bg-black"},jt={class:"text-center text-xl min-w-[100px]"},zt=["disabled"],Ot=["disabled"],Zt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),Vt=[Zt],Ht=["onClick"],Gt={class:"text-xl font-bold"},Ft={class:"text-right"},Kt={class:"text-md"},Ut={class:"text-sm"},qt={key:0,class:"h-[calc(50vh-108px)] p-3 grid grid-cols-5 grid-rows-4 gap-2"},Wt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),Yt=[Wt],Xt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"})],-1),Jt=[Xt],Qt={__name:"City",setup(l){const t=H(),b=G(),y=F(),{city:r}=b.params,u=w(),x=we([]);w(null);const C=w(!1),o=w(""),f=async()=>{t.dispatch("handLoadingToggle");try{const T=await et(r);x.value=T.data,t.dispatch("handLoadingToggle")}catch(T){console.log(T)}},n=T=>{q.forEach(a=>{a.value===r&&(u.value=a.name)})},s=()=>o.value===""?x.value:x.value.filter(a=>a.RouteName.Zh_tw.includes(o.value)),D=()=>{C.value=!0;let T=document.createElement("input");document.body.appendChild(T),T.focus(),setTimeout(()=>{document.getElementById("searchInput").focus(),document.getElementById("searchInput").click(),document.body.removeChild(T)},0)},B=()=>{o.value===""?o.value="":o.value=o.value.slice(0,-1)},_=(T,a)=>{switch(T){case"clear":o.value="";break;case"back":B();break;case"more":D();break}};return Y(()=>{f(),n()}),(T,a)=>(v(),h("div",It,[e("div",At,[e("p",jt,m(u.value),1),Z(e("input",{class:"w-full px-2 py-1 bg-white border border-gray-400 rounded dark:bg-black flex-2",placeholder:"\u641C\u5C0B\u516C\u8ECA\u865F",id:"searchInput",type:"text",disabled:!C.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d)},null,8,zt),[[_e,o.value]]),e("button",{class:R(["pl-2 text-center",{"text-transparent":!C.value,"text-main":C.value}]),onClick:a[1]||(a[1]=i(d=>C.value=!1,["prevent"])),disabled:!C.value},Vt,10,Ot)]),e("div",{class:R(["dark:text-white px-3 h-[50vh] overflow-y-scroll",{"h-[50vh]":!C.value,"h-[calc(100vh-108px)]":C.value}])},[(v(!0),h(L,null,I(s(),d=>(v(),h("a",{class:"flex items-center justify-between block p-3 my-3 duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white",key:d.RouteID,onClick:i(z=>P(y).push(`/bus/${P(r)}/${d.RouteName.Zh_tw}`),["prevent"])},[e("p",Gt,m(d.RouteName.Zh_tw),1),e("div",Ft,[e("p",Kt,m(d.DepartureStopNameZh)+" - "+m(d.DestinationStopNameZh),1),e("p",Ut,m(d.SubRoutes[0].FirstBusTime?`${d.SubRoutes[0].FirstBusTime}-${d.SubRoutes[0].LastBusTime}`:"-"),1)])],8,Ht))),128))],2),C.value?ee("",!0):(v(),h("div",qt,[e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[2]||(a[2]=i(d=>o.value+="\u7D05",["prevent"]))}," \u7D05 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[3]||(a[3]=i(d=>o.value+="\u85CD",["prevent"]))}," \u85CD "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[4]||(a[4]=i(d=>o.value+="1",["prevent"]))}," 1 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[5]||(a[5]=i(d=>o.value+="2",["prevent"]))}," 2 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[6]||(a[6]=i(d=>o.value+="3",["prevent"]))}," 3 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[7]||(a[7]=i(d=>o.value+="\u7DA0",["prevent"]))}," \u7DA0 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[8]||(a[8]=i(d=>o.value+="\u68D5",["prevent"]))}," \u68D5 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[9]||(a[9]=i(d=>o.value+="4",["prevent"]))}," 4 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[10]||(a[10]=i(d=>o.value+="5",["prevent"]))}," 5 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[11]||(a[11]=i(d=>o.value+="6",["prevent"]))}," 6 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[12]||(a[12]=i(d=>o.value+="\u6A58",["prevent"]))}," \u6A58 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[13]||(a[13]=i(d=>o.value+="\u5C0F",["prevent"]))}," \u5C0F "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[14]||(a[14]=i(d=>o.value+="7",["prevent"]))}," 7 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[15]||(a[15]=i(d=>o.value+="8",["prevent"]))}," 8 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[16]||(a[16]=i(d=>o.value+="9",["prevent"]))}," 9 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[17]||(a[17]=i(d=>_("more"),["prevent"]))}," \u66F4\u591A "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[18]||(a[18]=i(d=>o.value+="\u5E79\u7DDA",["prevent"]))}," \u5E79\u7DDA "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[19]||(a[19]=i(d=>_("clear"),["prevent"]))},Yt),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[20]||(a[20]=i(d=>o.value+="0",["prevent"]))}," 0 "),e("button",{class:"text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[21]||(a[21]=i(d=>_("back"),["prevent"]))},Jt)]))]))}},be=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}];var fe="/taiwanbus/assets/marker.f63975cb.png";const eo={class:"fixed top-[48px] max-w-md mx-auto w-full text-gray-400 bg-white dark:bg-black p-3"},to={class:"grid grid-cols-2 grid-rows-1"},oo={class:"py-2"},ao={class:"text-xl text-main"},so={class:""},no={class:"text-sm text-right"},lo={class:"flex items-center justify-end my-2"},ro={class:"grid grid-cols-2 grid-rows-1"},io={class:"mt-[166px]"},co={class:"z-[5]"},uo=e("div",{class:"w-full h-[50vh]",id:"map"},null,-1),go=[uo],po=["onClick"],vo={key:1,class:"p-2 text-center text-white bg-gray-700 basis-1/3"},ho={class:"p-2 text-lg font-bold text-right rounded basis-2/3"},mo={key:0,class:"fixed top-0 z-20 w-full h-full max-w-md mx-auto bg-black/50 backdrop-blur-md"},bo={class:"relative w-full h-full"},fo={class:"absolute w-[90%] right-2/4 bottom-2/4 translate-x-2/4 translate-y-2/4 rounded-lg bg-white dark:bg-black"},yo={class:"flex items-center justify-between p-2 text-lg text-gray-400 border-b"},xo=e("p",null,"\u516C\u8ECA\u8CC7\u8A0A",-1),ko=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),wo=[ko],_o={class:"p-3 text-black dark:text-white"},$o=e("p",{class:"text-lg text-main text-bold"},"\u982D\u672B\u73ED\u8ECA\uFF1A",-1),Co=e("p",{class:"text-lg text-main text-bold"},"\u6536\u8CBB\u65B9\u5F0F\uFF1A",-1),To=e("p",{class:"text-lg text-main text-bold"},"\u5BA2\u904B\u696D\u8005\uFF1A",-1),So={class:"text-center"},Eo=["href"],Po={__name:"Bus",setup(l){const t=H(),b=G(),y=F();let r=!1;const{city:u,bus:x}=b.params,C=w(),o=w(0),f=w([]),n=w({}),s=w(Date.now()+30*1e3),D=w(),B=w(!1),_=w([]),T=w(!1),a=c=>{q.forEach(p=>{p.value===u&&(C.value=p.name)})},d=()=>{t.dispatch("handLoadingToggle"),he(u,x).then(c=>{let p=c.data.sort((S,O)=>S.StopID-O.StopID),N=[];for(let S=0;S<p.length;S++)(S===0||p[S].StopID-p[0].StopID<1e4)&&N.push(p[S]);f.value=N,t.dispatch("handLoadingToggle")}).catch(c=>{console.log(c)})},z=K(()=>t.getters.theme),J=async()=>{try{const c=await me(u,x);n.value=c.data[0]}catch(c){console.log(c)}},j=c=>{switch(Number(c)){case 1:return"\u5C1A\u672A\u767C\u8ECA";case 2:return"\u4EA4\u7BA1\u4E0D\u505C\u9760";case 3:return"\u672B\u73ED\u99DB\u96E2";case 4:return"\u4ECA\u65E5\u505C\u99DB"}},W=c=>c<60?"\u9032\u7AD9\u4E2D":c<180?"\u5373\u5C07\u9032\u7AD9":`${Math.ceil(c/60)-1}\u5206\u9418`,Q=async()=>{try{const c=await tt(u,x);_.value=c.data,d()}catch(c){console.log(c)}},V=()=>{try{let c=b.fullPath.toString(),p=c.indexOf("="),N=c.indexOf("=",p+1),S=c[p+1];o.value=S?1:0}catch(c){console.log(c)}},g=w({google:null,map:null,markers:null}),$=async c=>{const p=new pe({apiKey:"AIzaSyAFKPiMUc5jyVnzoWAJush-EDagXdyHgVc",version:"weekly",libraries:["places"],language:"zh-TW"});g.value.google=await p.load(),g.value.map=new g.value.google.maps.Map(document.getElementById("map"),{center:{lat:_.value[o.value].Stops[0].StopPosition.PositionLat,lng:_.value[o.value].Stops[0].StopPosition.PositionLon},zoom:16,maxZoom:20,minZoom:3,streetViewControl:!1,mapTypeControl:!1,disableDefaultUI:!0,styles:c?"":be}),g.value.markers=[],_.value[o.value].Stops.forEach(S=>{let O={lat:S.StopPosition.PositionLat,lng:S.StopPosition.PositionLon};g.value.markers.push(O)}),new google.maps.Polyline({path:g.value.markers,geodesic:!0,strokeColor:"#F97316",strokeOpacity:1,strokeWeight:2}).setMap(g.value.map),k(g.value.map)},k=()=>{for(let p=0;p<_.value[o.value].Stops.length;p++)if(_.value[o.value].Stops[p].StopID-_.value[o.value].Stops[0].StopID<1e4){const N=new google.maps.InfoWindow({width:320,content:`<div class="w-full text-center min-w-[100px] min-h-[55px]">
        <p class="mb-3 font-bold text-md">${p+1}. ${_.value[o.value].Stops[p].StopName.Zh_tw}</p>
        <div>
        <a class="p-2 text-white rounded bg-main" href="https://st86374.github.io/taiwanbus/#/stop/${u}/${_.value[o.value].Stops[p].StopName.Zh_tw}">\u516C\u8ECA\u67E5\u8A62</a>
        </div>
        </div>`});var c={url:fe,scaledSize:new google.maps.Size(24,32)};const S=new google.maps.Marker({position:{lat:_.value[o.value].Stops[p].StopPosition.PositionLat,lng:_.value[o.value].Stops[p].StopPosition.PositionLon},icon:c,map:g.value.map});S.addListener("click",()=>{N.open({anchor:S,map:g.value.map})})}},M=()=>{setTimeout(()=>{if(r)return;const c=s.value-Date.now();D.value=Math.ceil((s.value-Date.now())/1e3),c<=0&&(d(),s.value=Date.now()+30*1e3),M()},1e3)};return ae(()=>t.getters.theme,(c,p)=>{$(c)}),Y(()=>{a(),Q(),J(),M(),V()}),oe(()=>{r=!0}),(c,p)=>{var N,S,O,ne,le,re,ie;return v(),h(L,null,[e("div",eo,[e("div",to,[e("div",oo,[e("p",null,m(C.value)+"\uFF5C\u516C\u8ECA",1),e("p",ao,m(P(x)),1)]),e("div",so,[e("p",no,m(D.value)+"\u79D2\u5F8C\u66F4\u65B0",1),e("div",lo,[e("button",{class:"p-2 mr-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:p[0]||(p[0]=i(E=>T.value=!0,["prevent"]))}," \u516C\u8ECA\u8CC7\u8A0A "),e("button",{id:"testt",class:"p-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:p[1]||(p[1]=i(E=>{B.value=!B.value,$(z.value)},["prevent"]))},m(B.value?"\u5730\u5716\u95DC\u9589":"\u5730\u5716\u986F\u793A"),1)])])]),e("div",ro,[e("button",{class:R(["truncate border-b-2",{"border-main":o.value==0,"text-main":o.value==0,"border-transparent":o.value!=0}]),onClick:p[2]||(p[2]=i(E=>{o.value=0,$(z.value)},["prevent"]))},m(`\u5F80${n.value.DestinationStopNameZh}`),3),e("button",{class:R(["truncate border-b-2",{"border-main":o.value==1,"text-main":o.value==1,"border-transparent":o.value!=1}]),onClick:p[3]||(p[3]=i(E=>{o.value=1,$(z.value)},["prevent"]))},m(`\u5F80${n.value.DepartureStopNameZh}`),3)])]),e("div",io,[Z(e("div",co,go,512),[[U,B.value]]),e("div",{class:R(["px-3 overflow-y-scroll bg-white dark:bg-black dark:text-white",{"max-h-[calc(50vh-164px)]":B.value}])},[(v(!0),h(L,null,I(f.value,E=>Z((v(),h("a",{key:E.StopID,class:"flex flex-row block my-3 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 items-inherit",onClick:i(Ko=>P(y).push(`/stop/${P(u)}/${E.StopName.Zh_tw}`),["prevent"])},[E.StopStatus===0?(v(),h("div",{key:0,class:R(["p-2 text-center text-white basis-1/3",{"bg-main":E.EstimateTime<60,"bg-main/75":E.EstimateTime<=180&&E.EstimateTime>=60,"bg-gray-500":E.EstimateTime>181}])},[e("p",null,m(W(E.EstimateTime)),1)],2)):(v(),h("div",vo,[e("p",null,m(j(E.StopStatus)),1)])),e("p",ho,m(E.StopName.Zh_tw),1)],8,po)),[[U,E.Direction==o.value]])),128))],2)]),T.value?(v(),h("div",mo,[e("div",bo,[e("div",fo,[e("div",yo,[xo,e("div",{onClick:p[4]||(p[4]=E=>T.value=!1)},wo)]),e("div",_o,[$o,e("p",null,"\u5E73\u65E5\uFF1A"+m((N=n.value)==null?void 0:N.SubRoutes[0].FirstBusTime)+"-"+m((S=n.value)==null?void 0:S.SubRoutes[0].LastBusTime),1),e("p",null,"\u5047\u65E5\uFF1A"+m((O=n.value)==null?void 0:O.SubRoutes[0].HolidayFirstBusTime)+"-"+m((ne=n.value)==null?void 0:ne.SubRoutes[0].HolidayLastBusTime),1),Co,e("p",null,m(((le=n.value)==null?void 0:le.TicketPriceDescriptionZh)||"-"),1),To,e("p",null,m((re=n.value.Operators[0])==null?void 0:re.OperatorName.Zh_tw),1),e("div",So,[e("a",{class:"inline-block px-3 py-2 text-white rounded bg-main",target:"_blank",href:(ie=n.value)==null?void 0:ie.RouteMapImageUrl},"\u8A73\u7D30\u8CC7\u8A0A",8,Eo)])])])])])):ee("",!0)],64)}}},Do={class:"fixed top-[48px] max-w-md mx-auto w-full text-gray-400 bg-white dark:bg-black p-3"},Mo={class:"flex items-center justify-between"},Lo={class:"py-2"},Ro={class:"text-xl text-main"},Bo={class:"text-sm text-right"},No={class:"mt-[140px]"},Io={class:"z-[5]"},Ao=e("div",{class:"w-full h-[50vh]",id:"map"},null,-1),jo=[Ao],zo=["onClick"],Oo={key:1,class:"p-2 text-center text-white bg-gray-700 basis-1/3"},Zo={class:"p-2 text-lg font-bold truncate rounded basis-2/3"},Vo={__name:"Stop",setup(l){const t=H(),b=G(),y=F(),{city:r,stop:u}=b.params,x=w(),C=w([]),o=K(()=>t.getters.theme),f=w([]);let n=!1;const s=w(Date.now()+30*1e3),D=w(),B=w({lat:"",lon:""}),_=w(!1),T=g=>{q.forEach($=>{$.value===r&&(x.value=$.name)})},a=g=>g<60?"\u9032\u7AD9\u4E2D":g<180?"\u5373\u5C07\u9032\u7AD9":`${Math.ceil(g/60)-1}\u5206\u9418`,d=()=>{t.dispatch("handLoadingToggle");const g=[];C.value.forEach($=>{he(r,$.RouteName.Zh_tw).then(k=>{k.data.forEach(M=>{M.StopName.Zh_tw===u&&me(r,$.RouteName.Zh_tw).then(c=>{M.Direction?M.Direction_text=c.data[0].DepartureStopNameZh:M.Direction_text=c.data[0].DestinationStopNameZh,g.push(M)}).catch(c=>{console.log(c)})})}).catch(k=>{console.log(k)})}),f.value=g,t.dispatch("handLoadingToggle")},z=async()=>{try{const g=await at(r,u);B.value.lat=g.data[0].StopPosition.PositionLat,B.value.lon=g.data[0].StopPosition.PositionLon}catch(g){console.log(g)}},J=async()=>{try{const g=await ot(r,u);let $=[];g.data.forEach(k=>{$.map(c=>c.RouteName.Zh_tw).indexOf(k.RouteName.Zh_tw)===-1&&$.push(k)}),C.value=$,d()}catch(g){console.log(g)}},j=w({google:null,map:null,markers:null}),W=async g=>{const $=new pe({apiKey:"AIzaSyAFKPiMUc5jyVnzoWAJush-EDagXdyHgVc",version:"weekly",libraries:["places"],language:"zh-TW"});j.value.google=await $.load(),j.value.map=new j.value.google.maps.Map(document.getElementById("map"),{center:{lat:B.value.lat,lng:B.value.lon},zoom:16,maxZoom:20,minZoom:3,streetViewControl:!1,mapTypeControl:!1,disableDefaultUI:!0,styles:g?"":be});const k=new google.maps.InfoWindow({content:`<div class="w-full font-bold text-center text-md">${u}</div>`}),M=new google.maps.Marker({position:j.value.map.getCenter(),icon:{url:fe,scaledSize:new google.maps.Size(24,32)},map:j.value.map});M.addListener("click",()=>{k.open({anchor:M,map:j.value.map})})},Q=g=>{switch(g){case 1:return"\u5C1A\u672A\u767C\u8ECA";case 2:return"\u4EA4\u7BA1\u4E0D\u505C\u9760";case 3:return"\u672B\u73ED\u99DB\u96E2";case 4:return"\u4ECA\u65E5\u505C\u99DB"}},V=()=>{setTimeout(()=>{if(n)return;const g=s.value-Date.now();D.value=Math.ceil((s.value-Date.now())/1e3),g<=0&&(d(),s.value=Date.now()+30*1e3),V()},1e3)};return ae(()=>t.getters.theme,(g,$)=>{W(g)}),Y(()=>{T(),z(),J(),V(),oe(()=>{n=!0})}),(g,$)=>(v(),h(L,null,[e("div",Do,[e("div",Mo,[e("div",Lo,[e("p",null,m(x.value)+"\uFF5C\u7AD9\u724C",1),e("p",Ro,m(P(u)),1)]),e("div",null,[e("p",Bo,m(D.value)+"\u79D2\u5F8C\u66F4\u65B0",1),e("button",{class:"p-2 my-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:$[0]||($[0]=i(k=>{_.value=!_.value,W(o.value)},["prevent"]))},m(_.value?"\u5730\u5716\u95DC\u9589":"\u5730\u5716\u986F\u793A"),1)])])]),e("div",No,[Z(e("div",Io,jo,512),[[U,_.value]]),e("div",{class:R(["bg-white dark:bg-black dark:text-white px-3 overflow-y-scroll h-[calc(100vh-140px)]",{"max-h-[calc(50vh-140px)]":_.value}])},[(v(!0),h(L,null,I(f.value,k=>(v(),h("a",{class:"flex flex-row block my-3 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 items-inherit",onClick:i(M=>P(y).push(`/bus/${P(r)}/${k.RouteName.Zh_tw}?direction=${k.Direction}&stop=${P(u)}`),["prevent"]),key:k.RouteID},[k.StopStatus===0?(v(),h("div",{key:0,class:R(["p-2 text-center text-white basis-1/3",{"bg-main":k.EstimateTime<60,"bg-main/75":k.EstimateTime<=180&&k.EstimateTime>=60,"bg-gray-500":k.EstimateTime>181}])},[e("p",null,m(a(k.EstimateTime)),1)],2)):(v(),h("div",Oo,[e("p",null,m(Q(k.StopStatus)),1)])),e("p",Zo,m(`${k.RouteName.Zh_tw}-\u5F80${k.Direction_text}`),1)],8,zo))),128))],2)])],64))}},Ho=[{path:"/",name:"Home",component:Nt},{path:"/city/:city",name:"City",component:Qt},{path:"/bus/:city/:bus",name:"Bus",component:Po},{path:"/stop/:city/:stop",name:"Stop",component:Vo}];var Go=$e({history:Ce(),routes:Ho});const Fo=Te({state(){return{loading:!1,theme:!0}},actions:{handLoadingToggle(l){l.commit("loadingToggle")},handThemeSet(l,t){l.commit("themeSet",t)}},mutations:{loadingToggle(l){l.loading=!l.loading},themeSet(l,t){l.theme=t}},getters:{loading(l){return l.loading},theme(l){return l.theme}}});Se(Xe).use(Go).use(Fo).mount("#app");