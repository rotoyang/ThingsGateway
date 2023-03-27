"use strict";(self.webpackChunkthingsgateway=self.webpackChunkthingsgateway||[]).push([[242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||s;return r?o.createElement(b,a(a({ref:t},l),{},{components:r})):o.createElement(b,a({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,a[1]=d;for(var c=2;c<s;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const s={id:"modbusserverdemo",title:"ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e",sidebar_label:"8.2\u3001\u4f7f\u7528ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e"},a=void 0,d={unversionedId:"08\u3001Demo/modbusserverdemo",id:"08\u3001Demo/modbusserverdemo",title:"ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e",description:"\u63a5\u4e0a\u4e00\u7bc7\u6587\u7ae0\uff1a\u91c7\u96c6ModbusTcp\u8bbe\u5907\u6570\u636e",source:"@site/docs/08\u3001Demo/8.2\u3001\u4f7f\u7528ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e.mdx",sourceDirName:"08\u3001Demo",slug:"/08\u3001Demo/modbusserverdemo",permalink:"/thingsgateway/docs/08\u3001Demo/modbusserverdemo",draft:!1,editUrl:"https://gitee.com/diego2098/ThingsGateway/tree/master/handbook/docs/08\u3001Demo/8.2\u3001\u4f7f\u7528ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e.mdx",tags:[],version:"current",frontMatter:{id:"modbusserverdemo",title:"ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e",sidebar_label:"8.2\u3001\u4f7f\u7528ModbusServer\u63d2\u4ef6\u8f6c\u53d1\u6570\u636e"},sidebar:"tutorialSidebar",previous:{title:"8.1\u3001\u91c7\u96c6ModbusTcp\u8bbe\u5907\u6570\u636e",permalink:"/thingsgateway/docs/08\u3001Demo/modbusdemo"},next:{title:"8.3\u3001\u4f7f\u7528MqttServer\u63d2\u4ef6",permalink:"/thingsgateway/docs/08\u3001Demo/mqttserverdemo"}},i={},c=[{value:"\uff08\u4e00\uff09\u5efa\u7acb\u4e0a\u4f20\u8bbe\u5907",id:"\u4e00\u5efa\u7acb\u4e0a\u4f20\u8bbe\u5907",level:3},{value:"\uff08\u4e8c\uff09\u53d8\u91cf\u4e0a\u4f20\u5c5e\u6027\u4fee\u6539",id:"\u4e8c\u53d8\u91cf\u4e0a\u4f20\u5c5e\u6027\u4fee\u6539",level:3},{value:"\uff08\u4e09\uff09\u91cd\u542f\u91c7\u96c6\u7ebf\u7a0b",id:"\u4e09\u91cd\u542f\u91c7\u96c6\u7ebf\u7a0b",level:3},{value:"\uff08\u56db\uff09\u67e5\u770b\u72b6\u6001",id:"\u56db\u67e5\u770b\u72b6\u6001",level:3},{value:"\u6700\u540e\uff0c\u770b\u4e00\u4e0b\u5b9e\u65f6\u53d8\u5316\u6548\u679c",id:"\u6700\u540e\u770b\u4e00\u4e0b\u5b9e\u65f6\u53d8\u5316\u6548\u679c",level:3}],l={toc:c};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u63a5\u4e0a\u4e00\u7bc7\u6587\u7ae0\uff1a",(0,n.kt)("a",{parentName:"p",href:"modbusdemo"},"\u91c7\u96c6ModbusTcp\u8bbe\u5907\u6570\u636e")),(0,n.kt)("p",null,"\u91c7\u96c6\u6570\u636e\u4e4b\u540e\u5982\u4f55\u8f6c\u53d1/\u4e0a\u4f20\u5230\u5176\u4ed6\u8f6f\u4ef6\u5462\uff0c\u4e0b\u9762\u6f14\u793a\u7f51\u5173\u63d0\u4f9b\u7684ModbusServer\u63d2\u4ef6\u4f7f\u7528"),(0,n.kt)("h3",{id:"\u4e00\u5efa\u7acb\u4e0a\u4f20\u8bbe\u5907"},"\uff08\u4e00\uff09\u5efa\u7acb\u4e0a\u4f20\u8bbe\u5907"),(0,n.kt)("img",{src:r(2913).Z,width:"400"}),(0,n.kt)("img",{src:r(7310).Z,width:"400"}),(0,n.kt)("p",null," \u8bbe\u5907\u5c5e\u6027\u9ed8\u8ba4\uff0cIP\u4e3a127.0.0.1 \u7aef\u53e3503\uff08\u4e0d\u4e0emodbusSlave\u51b2\u7a81\uff09,\u5141\u8bb8\u5199\u5165"),(0,n.kt)("h3",{id:"\u4e8c\u53d8\u91cf\u4e0a\u4f20\u5c5e\u6027\u4fee\u6539"},"\uff08\u4e8c\uff09\u53d8\u91cf\u4e0a\u4f20\u5c5e\u6027\u4fee\u6539"),(0,n.kt)("img",{src:r(6047).Z,width:"700"}),(0,n.kt)("p",null,"\u53d8\u91cf\u4ece\u7ad9\u5730\u5740\u4e3a40001\uff0c\u5141\u8bb8\u5199\u5165"),(0,n.kt)("h3",{id:"\u4e09\u91cd\u542f\u91c7\u96c6\u7ebf\u7a0b"},"\uff08\u4e09\uff09\u91cd\u542f\u91c7\u96c6\u7ebf\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4235).Z,width:"2320",height:"1417"})),(0,n.kt)("p",null,"\u70b9\u51fb\u53f3\u8fb9\u6d6e\u52a8\u6309\u94ae\uff0c\u5168\u90e8\u91cd\u542f"),(0,n.kt)("h3",{id:"\u56db\u67e5\u770b\u72b6\u6001"},"\uff08\u56db\uff09\u67e5\u770b\u72b6\u6001"),(0,n.kt)("img",{src:r(5529).Z,width:"600"}),(0,n.kt)("p",null," \u4f7f\u7528ModbusPoll\u8fde\u63a5\u5230\u7f51\u5173"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5079).Z,width:"2256",height:"1296"})),(0,n.kt)("h3",{id:"\u6700\u540e\u770b\u4e00\u4e0b\u5b9e\u65f6\u53d8\u5316\u6548\u679c"},"\u6700\u540e\uff0c\u770b\u4e00\u4e0b\u5b9e\u65f6\u53d8\u5316\u6548\u679c"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7818).Z,width:"2246",height:"1347"})))}u.isMDXComponent=!0},2913:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusserverdemo1-2ef9e38f39be112b9676741069d3840e.png"},7310:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusserverdemo2-d15ad3dc5dbbc40ba7bf02837f7389e2.png"},6047:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusserverdemo3-32eefd15587c4f17605dbc3a819aa235.png"},5529:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusserverdemo5-8bcab0e2e34a946238d6fe199fdc065d.png"},4235:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusdemo4-9e3bec8728b35dda03913ba055cbede7.png"},5079:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusserverdemo4-83f02254d69ab83c8b1a81524130fee5.png"},7818:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/modbusserverdemo6-8aa277b3048d21f31f1c4a1f5e925f95.gif"}}]);