"use strict";(self.webpackChunkyoutube_ex=self.webpackChunkyoutube_ex||[]).push([[189],{6711:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var a=i(5475),n=i(579);const t=e=>{let{videos:s}=e;return(0,n.jsx)(n.Fragment,{children:s.map(((e,s)=>(0,n.jsxs)("div",{className:"video",children:[(0,n.jsx)("div",{className:"video__thumb play__icon",children:(0,n.jsx)(a.N_,{to:`/video/${e.id.videoId}`,style:{backgroundImage:`url(${e.snippet.thumbnails.high.url})`}})}),(0,n.jsxs)("div",{className:"video__info",children:[(0,n.jsx)("div",{className:"title",children:(0,n.jsx)(a.N_,{to:`/video/${e.id.videoId}`,children:e.snippet.title})}),(0,n.jsx)("div",{className:"info",children:(0,n.jsx)("span",{className:"author",children:(0,n.jsx)(a.N_,{to:`/channel/${e.snippet.channelId}`,children:e.snippet.channelTitle})})})]})]},s)))})}},7189:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var a=i(5043),n=i(3216),t=i(4649),c=i(6711),d=i(3862),l=i(579);const o=()=>{const{searchId:e}=(0,n.g)(),[s,i]=(0,a.useState)([]),[o,r]=(0,a.useState)(null),[h,p]=(0,a.useState)(!0);(0,a.useEffect)((()=>{i([]),u(e),p(!0)}),[e]);const u=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,d.T)(`search?part=snippet&q=${e}&pageToken=${s}`).then((e=>{console.log(e),r(e.nextPageToken),i((s=>[...s,...e.items])),p(!1)})).catch((e=>{console.error(e),p(!1)}))},v=h?"isLoading":"isLoaded";return(0,l.jsx)(t.A,{title:"\uc720\ud29c\ube0c \uac80\uc0c9",description:"\uc720\ud29c\ube0c \uac80\uc0c9 \uacb0\uacfc \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4",children:(0,l.jsxs)("section",{id:"searchPage",className:v,children:[(0,l.jsxs)("h2",{children:["\ud83d\ude0a",(0,l.jsx)("em",{children:e})," \uac80\uc0c9 \uacb0\uacfc\uc785\ub2c8\ub2e4."]}),(0,l.jsx)("div",{className:"video__inner search",children:(0,l.jsx)(c.A,{videos:s})}),(0,l.jsx)("div",{className:"video__more",children:o&&(0,l.jsx)("button",{onClick:()=>{o&&u(e,o)},children:"\ub354\ubcf4\uae30"})})]})})}},3862:(e,s,i)=>{i.d(s,{T:()=>t});var a=i(6213);const n={params:{maxResults:"48"},headers:{"x-rapidapi-key":"9c3dd2c5a3msh6ae710c9b74c6a8p147e29jsn02870b8ebc3e","x-rapidapi-host":"youtube-v31.p.rapidapi.com"}},t=async e=>{const{data:s}=await a.A.get(`https://youtube-v31.p.rapidapi.com/${e}`,n);return console.log(s),s}}}]);
//# sourceMappingURL=189.6d60afdb.chunk.js.map