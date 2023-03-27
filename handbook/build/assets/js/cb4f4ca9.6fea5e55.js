"use strict";(self.webpackChunkthingsgateway=self.webpackChunkthingsgateway||[]).push([[261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),d=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?l.createElement(g,c(c({ref:t},s),{},{components:n})):l.createElement(g,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var d=2;d<i;d++)c[d]=n[d];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const i={id:"collectdevice",title:"\u91c7\u96c6\u8bbe\u5907\u914d\u7f6e\u8bf4\u660e",sidebar_label:"5.1\u3001\u91c7\u96c6\u8bbe\u5907"},c=void 0,a={unversionedId:"05\u3001\u7f51\u5173\u914d\u7f6e/collectdevice",id:"05\u3001\u7f51\u5173\u914d\u7f6e/collectdevice",title:"\u91c7\u96c6\u8bbe\u5907\u914d\u7f6e\u8bf4\u660e",description:"\u66f4\u6539\u91c7\u96c6\u8bbe\u5907/\u53d8\u91cf/\u4e0a\u4f20\u8bbe\u5907/\u63d2\u4ef6\u7b49\uff0c\u9700\u8981\u91cd\u542f\u7ebf\u7a0b\uff08\u7f51\u5173\u72b6\u6001-\u8fd0\u884c\u72b6\u6001-\u5168\u90e8\u91cd\u542f/\u5355\u4e2a\u91c7\u96c6\u8bbe\u5907\u91cd\u542f\uff09",source:"@site/docs/05\u3001\u7f51\u5173\u914d\u7f6e/5.1\u3001\u91c7\u96c6\u8bbe\u5907.mdx",sourceDirName:"05\u3001\u7f51\u5173\u914d\u7f6e",slug:"/05\u3001\u7f51\u5173\u914d\u7f6e/collectdevice",permalink:"/thingsgateway/docs/05\u3001\u7f51\u5173\u914d\u7f6e/collectdevice",draft:!1,editUrl:"https://gitee.com/diego2098/ThingsGateway/tree/master/handbook/docs/05\u3001\u7f51\u5173\u914d\u7f6e/5.1\u3001\u91c7\u96c6\u8bbe\u5907.mdx",tags:[],version:"current",frontMatter:{id:"collectdevice",title:"\u91c7\u96c6\u8bbe\u5907\u914d\u7f6e\u8bf4\u660e",sidebar_label:"5.1\u3001\u91c7\u96c6\u8bbe\u5907"},sidebar:"tutorialSidebar",previous:{title:"04\u3001\u5feb\u901f\u542f\u52a8",permalink:"/thingsgateway/docs/quickstart"},next:{title:"5.2\u3001\u53d8\u91cf",permalink:"/thingsgateway/docs/05\u3001\u7f51\u5173\u914d\u7f6e/variable"}},o={},d=[{value:"\uff08\u4e00\uff09\u6dfb\u52a0/\u4fee\u6539\u91c7\u96c6\u8bbe\u5907",id:"\u4e00\u6dfb\u52a0\u4fee\u6539\u91c7\u96c6\u8bbe\u5907",level:3},{value:"\u540d\u79f0",id:"\u540d\u79f0",level:4},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:4},{value:"\u8bbe\u5907\u9a71\u52a8\u540d\u79f0",id:"\u8bbe\u5907\u9a71\u52a8\u540d\u79f0",level:4},{value:"\u8bbe\u5907\u4f7f\u80fd",id:"\u8bbe\u5907\u4f7f\u80fd",level:4},{value:"\u8f93\u51fa\u65e5\u5fd7",id:"\u8f93\u51fa\u65e5\u5fd7",level:4},{value:"\uff08\u4e8c\uff09\u5bfc\u5165\u5bfc\u51fa\u91c7\u96c6\u8bbe\u5907",id:"\u4e8c\u5bfc\u5165\u5bfc\u51fa\u91c7\u96c6\u8bbe\u5907",level:3},{value:"\u5bfc\u51fa\u6a21\u677f",id:"\u5bfc\u51fa\u6a21\u677f",level:4},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:4},{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",level:4}],s={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"\u914d\u7f6e\u987b\u77e5")),(0,r.kt)("p",{parentName:"admonition"}," \u66f4\u6539\u91c7\u96c6\u8bbe\u5907/\u53d8\u91cf/\u4e0a\u4f20\u8bbe\u5907/\u63d2\u4ef6\u7b49\uff0c\u9700\u8981\u91cd\u542f\u7ebf\u7a0b\uff08\u7f51\u5173\u72b6\u6001-\u8fd0\u884c\u72b6\u6001-\u5168\u90e8\u91cd\u542f/\u5355\u4e2a\u91c7\u96c6\u8bbe\u5907\u91cd\u542f\uff09")),(0,r.kt)("h3",{id:"\u4e00\u6dfb\u52a0\u4fee\u6539\u91c7\u96c6\u8bbe\u5907"},"\uff08\u4e00\uff09\u6dfb\u52a0/\u4fee\u6539\u91c7\u96c6\u8bbe\u5907"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(141).Z,width:"2340",height:"1461"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u8bbe\u5907\u57fa\u672c\u5c5e\u6027"),(0,r.kt)("div",null,(0,r.kt)("h4",{id:"\u540d\u79f0"},"\u540d\u79f0"),(0,r.kt)("p",null,"\u5f53\u524d\u91c7\u96c6\u8bbe\u5907\u540d\u79f0\uff0c\u5168\u5c40\u552f\u4e00(\u91c7\u96c6\u8bbe\u5907)"),(0,r.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u5f53\u524d\u91c7\u96c6\u8bbe\u5907\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u8bbe\u5907\u9a71\u52a8\u540d\u79f0"},"\u8bbe\u5907\u9a71\u52a8\u540d\u79f0"),(0,r.kt)("p",null,"\u5f53\u524d\u91c7\u96c6\u8bbe\u5907\u9009\u62e9\u7684\u91c7\u96c6\u9a71\u52a8\u63d2\u4ef6\u540d\u79f0\uff0c\u901a\u8fc7\u7ea7\u8054\u9009\u62e9\u5668\u9009\u62e9\u5bf9\u5e94\u9a71\u52a8\u540d\u79f0\u8bbe\u7f6e"),(0,r.kt)("h4",{id:"\u8bbe\u5907\u4f7f\u80fd"},"\u8bbe\u5907\u4f7f\u80fd"),(0,r.kt)("p",null,"\u542f\u52a8/\u505c\u7528\u91c7\u96c6\u8bbe\u5907"),(0,r.kt)("h4",{id:"\u8f93\u51fa\u65e5\u5fd7"},"\u8f93\u51fa\u65e5\u5fd7"),(0,r.kt)("p",null,"\u542f\u52a8/\u505c\u7528\u65e5\u5fd7\u8f93\u51fa"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u8bbe\u5907\u9644\u52a0\u5c5e\u6027"),(0,r.kt)("div",null,(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u4e0d\u540c\u7684\u9a71\u52a8,\u7f51\u5173\u4f1a\u5c06\u5bf9\u5e94\u7684\u63d2\u4ef6\u914d\u7f6e\u89c4\u5219\u4fdd\u5b58\u5728\u9644\u52a0\u5c5e\u6027\u5185")),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u5e94\u7684\u5c5e\u6027\u63cf\u8ff0\u53ef\u4ee5\u67e5\u770b\u8f93\u5165\u6846\u5360\u4f4d\u6587\u672c\u6216\u8005\u6d6e\u52a8Tips\u5c1d\u8bd5\u7406\u89e3\uff1b\u6216\u8005\u67e5\u770b\u7b2c\u516d\u8282\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u9a71\u52a8\u8bf4\u660e")))),(0,r.kt)("h3",{id:"\u4e8c\u5bfc\u5165\u5bfc\u51fa\u91c7\u96c6\u8bbe\u5907"},"\uff08\u4e8c\uff09\u5bfc\u5165\u5bfc\u51fa\u91c7\u96c6\u8bbe\u5907"),(0,r.kt)("h4",{id:"\u5bfc\u51fa\u6a21\u677f"},"\u5bfc\u51fa\u6a21\u677f"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6304).Z,width:"2309",height:"1457"}),"\n",(0,r.kt)("img",{src:n(4564).Z,width:"1694",height:"1525"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u91c7\u96c6\u8bbe\u5907\u7684excel\u6a21\u677f\uff0c\u586b\u5165\u89c4\u5219\u53c2\u8003\u7b2c\u4e00\u5c0f\u8282"),(0,r.kt)("h4",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8292).Z,width:"2311",height:"1449"})),(0,r.kt)("p",null,"\u5f39\u7a97\u9009\u62e9\u5bfc\u5165\u7684excel\u6587\u4ef6\u540e\uff0c\u70b9\u51fb\u4e0b\u4e00\u6b65\u8fdb\u884c\u6821\u9a8c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9997).Z,width:"2307",height:"1453"})),(0,r.kt)("p",null," \u6839\u636e\u7ea2\u8272\u5b57\u4f53\u63d0\u793a\uff0c\u4fee\u6539\u5bf9\u5e94\u9519\u8bef\u5217\u5b57\u6bb5"),(0,r.kt)("p",null," \u5168\u90e8\u6b63\u5e38\u65f6\u53ef\u8fdb\u884c\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9336).Z,width:"2307",height:"1448"})),(0,r.kt)("p",null," \u70b9\u51fb\u4e0a\u4f20\uff0c\u7b49\u5f85\u5bfc\u5165\u5b8c\u6210\uff0c\u5b8c\u6210\u540e\u81ea\u52a8\u9000\u51fa\u5f39\u7a97\uff0c\u5426\u5219\u63d0\u793a\u9519\u8bef"),(0,r.kt)("h4",{id:"\u5bfc\u51fa"},"\u5bfc\u51fa"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2615).Z,width:"2312",height:"1460"})),(0,r.kt)("p",null," \u70b9\u51fb\u5bfc\u51fa\uff0c\u7b49\u5f85\u5bfc\u51fa\u5b8c\u6210\uff0c\u81ea\u52a8\u4e0b\u8f7d\u6587\u4ef6"))}p.isMDXComponent=!0},141:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/addcollectdevice1-1b9fed86650cce3efd395acc4250f6a9.png"},6304:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/collectdevice2-09bc559b492349e0ce7224acd229f08c.png"},4564:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/collectdevice3-5b6bc92d7787f723bd9383b762064826.png"},8292:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/collectdevice4-c2e30a3051880de147b92c823555c808.png"},9997:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/collectdevice5-20010fa5e892f2290381fc1546a75735.png"},9336:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/collectdevice6-be9ff5b78c023604a146820cc8e7f365.png"},2615:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/collectdevice7-9d9c65423f518ac70e101d0acba35b74.png"}}]);