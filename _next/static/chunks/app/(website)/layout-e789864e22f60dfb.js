(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2056],{5176:function(e,t,r){Promise.resolve().then(r.bind(r,4104)),Promise.resolve().then(r.bind(r,5827))},4104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(7437),s=r(3986),a=r(8910),i=r(6468),l=r(3159),o=r(2510),c=r(211);function d(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)(function(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(n&&(n+=" "),n+=t);return n}(t))}var f=r(2265);let x=e=>{let{children:t,direction:r="left",speed:s="fast",pauseOnHover:a=!0,className:i}=e,l=f.useRef(null),o=f.useRef(null);(0,f.useEffect)(()=>{l.current&&o.current&&(m(),h(),x(!0))},[]);let[c,x]=(0,f.useState)(!1),m=()=>{l.current&&("left"===r?l.current.style.setProperty("--animation-direction","forwards"):l.current.style.setProperty("--animation-direction","reverse"))},h=()=>{l.current&&("fast"===s?l.current.style.setProperty("--animation-duration","20s"):"normal"===s?l.current.style.setProperty("--animation-duration","40s"):l.current.style.setProperty("--animation-duration","80s"))};return(0,n.jsx)("div",{ref:l,className:d("scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",i),children:(0,n.jsxs)("div",{ref:o,className:d("flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",c&&"animate-scroll ",a&&"hover:[animation-play-state:paused]"),children:[t,t,t,t]})})};var m=r(7654),h=r(3163);function u(){let e=[...h.Z.coOrganizer,...h.Z.coSponsor,...h.Z.sponsors.map(e=>e.items).flat(),...h.Z.specialThanks,...h.Z.mediaPartners];return(0,n.jsxs)("div",{className:"relative mb-4 mt-16 flex flex-col items-center justify-center overflow-hidden rounded-md border-b border-t border-[#4620021A] antialiased md:mt-24",children:[(0,n.jsx)(x,{direction:"right",speed:"slow",children:e.slice(0,e.length/2).map((e,t)=>(0,n.jsx)(m.Z,{data:e,className:"w-[120px] md:w-[180px]"},t))}),(0,n.jsx)("div",{className:"w-full border-t border-[#4620021A]"}),(0,n.jsx)(x,{direction:"right",speed:"slow",children:e.slice(e.length/2,e.length).map((e,t)=>(0,n.jsx)(m.Z,{data:e,className:"w-[120px] md:w-[180px]"},t))})]})}var p=r(4033);let g=[{href:"https://sitcon.org/fb",icon:(0,n.jsx)(l.tBk,{})},{href:"https://sitcon.org/instagram",icon:(0,n.jsx)(l.Zf_,{})},{href:"https://sitcon.org/twitter",icon:(0,n.jsx)(o.LCd,{})},{href:"https://sitcon.org/tg",icon:(0,n.jsx)(l.AGi,{})},{href:"https://sitcon.org/plurk",icon:(0,n.jsx)(c.$dZ,{})},{href:"https://sitcon.org/discord",icon:(0,n.jsx)(l.j2d,{})},{href:"https://sitcon.org/yt",icon:(0,n.jsx)(l.V2E,{})},{href:"https://sitcon.org/flickr",icon:(0,n.jsx)(l.DY,{})},{href:"https://sitcon.org/odysee",icon:(0,n.jsx)(c.p8b,{})},{href:"https://sitcon.org/medium",icon:(0,n.jsx)(l.Vlo,{})}];function j(){let e=(0,p.usePathname)().startsWith("/sponsor");return(0,n.jsxs)(n.Fragment,{children:[!e&&(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:(0,s.m)("md:flex md:items-center md:justify-between","grid grid-cols-5 gap-4","mb-4 mt-10 px-5"),children:g.map((e,t)=>{let{href:r,icon:a}=e;return(0,n.jsx)("div",{className:(0,s.m)("flex items-center justify-center","md:-translate-y-[calc(var(--shift)*-1rem)]"),style:{"--shift":Math.sinh(Math.abs(t-(g.length/2-.5)))/15},children:(0,n.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"text-3xl text-[#462002] transition-all ease-in-out hover:-translate-y-2 hover:text-[#323232] lg:text-5xl",children:a})},r)})}),(0,n.jsxs)("footer",{className:"rounded-[100%_100%_0_0/50%_50%] bg-[#B1884C] py-10 text-center text-white",children:[(0,n.jsx)("div",{className:"text-lg font-bold",children:"學生計算機年會"}),(0,n.jsx)("div",{className:"text-lg",children:"Students' Information Technology Conference"}),(0,n.jsxs)("div",{className:"mt-4 flex items-center justify-center gap-20",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center leading-7",children:[(0,n.jsx)(a.jI5,{className:"text-5xl"}),(0,n.jsx)("div",{className:"mt-2 font-bold",children:"合作聯繫"}),(0,n.jsx)("a",{href:"mailto:contact@sitcon.org",className:"underline underline-offset-2",children:"contact@sitcon.org"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center leading-7",children:[(0,n.jsx)(i.Tx$,{className:"text-5xl"}),(0,n.jsx)("div",{className:"mt-2 font-bold",children:"票務問題"}),(0,n.jsx)("a",{href:"mailto:ticket@sitcon.org",className:"underline underline-offset-2",children:"ticket@sitcon.org"})]})]}),(0,n.jsx)("div",{className:"mt-2 font-bold",children:"歷年網站"}),(0,n.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-6",children:Array.from({length:11},(e,t)=>2013+t).map(e=>(0,n.jsx)("a",{href:"https://sitcon.org/".concat(e,"/"),target:"_blank",className:"underline underline-offset-2",children:e},e))})]})]})}},5827:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7437),s=r(1396),a=r.n(s),i=r(2265),l=r(6468),o=r(2167),c=r(8777),d=r(4033),f=r(5694);let x=[{name:"年會活動",href:"/events/"},{name:"議程表",href:"/agenda/"},{name:"會場地圖",href:"/venue/"},{name:"交通方式",href:"/traffic/"},{name:"報名資訊",href:"/signup/"},{name:"SITCON 團隊",href:"/staff/"},{name:"合作夥伴",href:"/sponsor/"}];function m(e){let{href:t,children:r}=e,s=(0,d.usePathname)()===t;return(0,n.jsxs)(a(),{href:t,className:"group relative px-2 py-1 font-rubik text-lg font-bold",children:[r,(0,n.jsx)(o.M,{children:s&&(0,n.jsx)(c.E.div,{className:"absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-[#462002]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10}})}),!s&&(0,n.jsx)(c.E.div,{className:"absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-[#462002] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50"})]})}function h(){let[e,t]=(0,i.useState)(!1),r=(0,f.Z)();return(0,i.useEffect)(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[e]),(0,n.jsxs)(n.Fragment,{children:[!r&&(0,n.jsx)(c.E.nav,{className:"sticky top-0 z-40 bg-[#F8F3E8]/90 backdrop-blur-lg",style:{position:"sticky"},layoutRoot:!0,layout:!0,children:(0,n.jsxs)("div",{className:"container flex items-center justify-between py-6",children:[(0,n.jsx)(a(),{href:"/",className:"font-rubik text-2xl font-bold",style:{background:"linear-gradient(90deg, rgba(56, 90, 172, 0.80) 0%, rgba(148, 110, 52, 0.75) 58.96%, #462002 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent"},children:"SITCON 2024"}),(0,n.jsxs)("div",{className:"flex gap-6 lg:hidden",children:[1706111999e3>new Date().getTime()&&(0,n.jsx)(a(),{href:"/cfp/poster/",className:"rounded-xl bg-[#FFCA73] px-3 font-bold text-[#462002] shadow-[0px_5px_8px_0px_#FFBA474D] hover:bg-[#e3b364] active:bg-[#cca15a]",children:"海報投稿"}),(0,n.jsx)("button",{onClick:()=>t(!e),children:(0,n.jsx)(l.pLT,{className:"text-2xl"})})]}),(0,n.jsxs)("div",{className:"hidden gap-2 lg:flex xl:gap-4",children:[x.map(e=>(0,n.jsx)(m,{href:e.href,children:e.name},e.name)),1706111999e3>new Date().getTime()&&(0,n.jsx)(a(),{href:"/cfp/poster/",className:"flex items-center justify-center rounded-xl bg-[#FFCA73] px-3 font-bold text-[#462002] shadow-[0px_5px_8px_0px_#FFBA474D] hover:bg-[#e3b364] active:bg-[#cca15a]",children:"海報投稿"})]})]})}),(0,n.jsx)(o.M,{children:e&&(0,n.jsxs)(c.E.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0},className:"fixed left-0 top-0 z-40 flex h-screen w-screen flex-col bg-[#F8F3E8]/90 backdrop-blur-lg",children:[(0,n.jsx)("div",{className:"absolute inset-0 -z-40 m-auto w-[350px] max-w-full opacity-10",style:{backgroundImage:"url('/2024/website/nav_mobile_bg.webp')",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),(0,n.jsx)("div",{className:"container flex items-center justify-end py-6",children:(0,n.jsx)("button",{onClick:()=>t(!e),children:(0,n.jsx)(l.bjh,{className:"text-2xl"})})}),(0,n.jsx)("div",{className:"container flex grow flex-col items-center justify-center gap-12 pb-40",children:x.map(e=>(0,n.jsx)(a(),{href:e.href,className:"font-rubik text-xl font-bold text-[#462002] decoration-[#462002] decoration-2 underline-offset-8 hover:underline",onClick:()=>t(!1),children:e.name},e.name))})]})})]})}},5694:function(e,t,r){"use strict";function n(){return"app"===new URLSearchParams(window.location.search).get("mode")}r.d(t,{Z:function(){return n}})},4033:function(e,t,r){e.exports=r(94)}},function(e){e.O(0,[3190,6281,1582,2306,2420,5717,1750,1396,8021,2439,7714,2971,2472,1744],function(){return e(e.s=5176)}),_N_E=e.O()}]);