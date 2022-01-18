import{u as L,k as M,l as z,m as n,b as G,q as j,n as O,p as V,o as p,s as U,t as D,e as K,f as s,B as l,d as m,x as B,w as F,v as W,z as P,c as _,y as H,F as Y}from"./vendor.1559e045.js";import{e as q,f as J,d as X,b as Q}from"./bus.31a404cb.js";import{B as ee,c as te,_ as ae}from"./Header.1137ed49.js";import{L as se,d as oe,m as ne}from"./index.esm.4bcc8d34.js";import"./index.c41b9aaa.js";const le={class:"fixed top-[48px] max-w-md mx-auto w-full text-gray-400 bg-white dark:bg-black p-3"},ie={class:"flex items-center justify-between"},re={class:"py-2"},ce={class:"text-xl text-main"},ue={class:"text-sm text-right"},de={class:"mt-[140px]"},pe={class:"z-[5]"},me=s("div",{class:"w-full h-[50vh]",id:"map"},null,-1),he=[me],ge=["onClick"],_e={key:1,class:"p-2 text-center text-white bg-gray-700 basis-1/3"},ve={class:"p-2 text-lg font-bold truncate rounded basis-2/3"},Se={setup(fe){const h=L(),R=M(),N=z(),{city:i,stop:r}=R.params,w=n(),x=n([]),T=G(()=>h.getters.theme),y=n([]);let b=!1;const v=n(Date.now()+30*1e3),k=n(),g=n({lat:"",lon:""}),d=n(!1),A=e=>{te.forEach(a=>{a.value===i&&(w.value=a.name)})},Z=e=>e<60?"\u9032\u7AD9\u4E2D":e<180?"\u5373\u5C07\u9032\u7AD9":`${Math.ceil(e/60)-1}\u5206\u9418`,S=()=>{h.dispatch("handLoadingToggle");const e=[];x.value.forEach(a=>{X(i,a.RouteName.Zh_tw).then(t=>{t.data.forEach(o=>{o.StopName.Zh_tw===r&&Q(i,a.RouteName.Zh_tw).then(u=>{o.Direction?o.Direction_text=u.data[0].DepartureStopNameZh:o.Direction_text=u.data[0].DestinationStopNameZh,e.push(o)}).catch(u=>{console.log(u)})})}).catch(t=>{console.log(t)})}),y.value=e,h.dispatch("handLoadingToggle")},$=async()=>{try{const e=await q(i,r);g.value.lat=e.data[0].StopPosition.PositionLat,g.value.lon=e.data[0].StopPosition.PositionLon}catch(e){console.log(e)}},C=async()=>{try{const e=await J(i,r);let a=[];e.data.forEach(t=>{a.map(u=>u.RouteName.Zh_tw).indexOf(t.RouteName.Zh_tw)===-1&&a.push(t)}),x.value=a,S()}catch(e){console.log(e)}},c=n({google:null,map:null,markers:null}),E=async e=>{const a=new se({apiKey:"AIzaSyAFKPiMUc5jyVnzoWAJush-EDagXdyHgVc",version:"weekly",libraries:["places"],language:"zh-TW"});c.value.google=await a.load(),c.value.map=new c.value.google.maps.Map(document.getElementById("map"),{center:{lat:g.value.lat,lng:g.value.lon},zoom:16,maxZoom:20,minZoom:3,streetViewControl:!1,mapTypeControl:!1,disableDefaultUI:!0,styles:e?"":oe});const t=new google.maps.InfoWindow({content:`<div class="w-full font-bold text-center text-md">${r}</div>`}),o=new google.maps.Marker({position:c.value.map.getCenter(),icon:{url:ne,scaledSize:new google.maps.Size(24,32)},map:c.value.map});o.addListener("click",()=>{t.open({anchor:o,map:c.value.map})})},I=e=>{switch(e){case 1:return"\u5C1A\u672A\u767C\u8ECA";case 2:return"\u4EA4\u7BA1\u4E0D\u505C\u9760";case 3:return"\u672B\u73ED\u99DB\u96E2";case 4:return"\u4ECA\u65E5\u505C\u99DB"}},f=()=>{setTimeout(()=>{if(b)return;const e=v.value-Date.now();k.value=Math.ceil((v.value-Date.now())/1e3),e<=0&&(S(),v.value=Date.now()+30*1e3),f()},1e3)};return j(()=>h.getters.theme,(e,a)=>{E(e)}),O(()=>{A(),$(),C(),f(),V(()=>{b=!0})}),(e,a)=>(p(),U(ee,null,{header:D(()=>[K(ae)]),body:D(()=>[s("div",le,[s("div",ie,[s("div",re,[s("p",null,l(w.value)+"\uFF5C\u7AD9\u724C",1),s("p",ce,l(m(r)),1)]),s("div",null,[s("p",ue,l(k.value)+"\u79D2\u5F8C\u66F4\u65B0",1),s("button",{class:"p-2 my-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800",onClick:a[0]||(a[0]=B(t=>{d.value=!d.value,E(m(T))},["prevent"]))},l(d.value?"\u5730\u5716\u95DC\u9589":"\u5730\u5716\u986F\u793A"),1)])])]),s("div",de,[F(s("div",pe,he,512),[[W,d.value]]),s("div",{class:P(["bg-white dark:bg-black dark:text-white px-3 overflow-y-scroll h-[calc(100vh-140px)]",{"max-h-[calc(50vh-140px)]":d.value}])},[(p(!0),_(Y,null,H(y.value,t=>(p(),_("a",{class:"flex flex-row block my-3 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 items-inherit",onClick:B(o=>m(N).push(`/bus/${m(i)}/${t.RouteName.Zh_tw}?direction=${t.Direction}&stop=${m(r)}`),["prevent"]),key:t.RouteID},[t.StopStatus===0?(p(),_("div",{key:0,class:P(["p-2 text-center text-white basis-1/3",{"bg-main":t.EstimateTime<60,"bg-main/75":t.EstimateTime<=180&&t.EstimateTime>=60,"bg-gray-500":t.EstimateTime>181}])},[s("p",null,l(Z(t.EstimateTime)),1)],2)):(p(),_("div",_e,[s("p",null,l(I(t.StopStatus)),1)])),s("p",ve,l(`${t.RouteName.Zh_tw}-\u5F80${t.Direction_text}`),1)],8,ge))),128))],2)])]),_:1}))}};export{Se as default};