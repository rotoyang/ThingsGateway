"use strict";(self.webpackChunkthingsgateway=self.webpackChunkthingsgateway||[]).push([[6950],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=u(n),g=a,s=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return n?r.createElement(s,i(i({ref:e},c),{},{components:n})):r.createElement(s,i({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},626:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"pluginopcuaclient",title:"OPCUA\u91c7\u96c6\u63d2\u4ef6"},i=void 0,p={unversionedId:"pluginopcuaclient",id:"pluginopcuaclient",title:"OPCUA\u91c7\u96c6\u63d2\u4ef6",description:"\u4e00\u3001\u8bbe\u5907\u6269\u5c55\u5c5e\u6027",source:"@site/docs/pluginopcuaclient.mdx",sourceDirName:".",slug:"/pluginopcuaclient",permalink:"/thingsgateway-docs/docs/pluginopcuaclient",draft:!1,editUrl:"https://gitee.com/diego2098/ThingsGateway/tree/master/handbook/docs/pluginopcuaclient.mdx",tags:[],version:"current",frontMatter:{id:"pluginopcuaclient",title:"OPCUA\u91c7\u96c6\u63d2\u4ef6"},sidebar:"docs",previous:{title:"OPCDA\u91c7\u96c6\u63d2\u4ef6",permalink:"/thingsgateway-docs/docs/pluginopcdaclient"},next:{title:"S7\u91c7\u96c6\u63d2\u4ef6",permalink:"/thingsgateway-docs/docs/pluginsiemens"}},o={},u=[{value:"\u4e00\u3001\u8bbe\u5907\u6269\u5c55\u5c5e\u6027",id:"\u4e00\u8bbe\u5907\u6269\u5c55\u5c5e\u6027",level:2},{value:"\u4e8c\u3001\u53d8\u91cf\u914d\u7f6e",id:"\u4e8c\u53d8\u91cf\u914d\u7f6e",level:2},{value:"\u53d8\u91cf\u5730\u5740\u8bf4\u660e",id:"\u53d8\u91cf\u5730\u5740\u8bf4\u660e",level:3},{value:"\u53d8\u91cf\u7279\u6b8a\u65b9\u6cd5\u8bf4\u660e",id:"\u53d8\u91cf\u7279\u6b8a\u65b9\u6cd5\u8bf4\u660e",level:3},{value:"\u4e09\u3001\u8bc1\u4e66\u8bf4\u660e",id:"\u4e09\u8bc1\u4e66\u8bf4\u660e",level:2}],c={toc:u};function d(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bbe\u5907\u6269\u5c55\u5c5e\u6027"},"\u4e00\u3001\u8bbe\u5907\u6269\u5c55\u5c5e\u6027"),(0,a.kt)("img",{src:n(8024).Z,width:"500"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c/\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OPCURL"),(0,a.kt)("td",{parentName:"tr",align:null},"OPCUA URL"),(0,a.kt)("td",{parentName:"tr",align:null},"opc.tcp://127.0.0.1:49320")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u8d26\u53f7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3a\u7a7a\u65f6\u91c7\u7528\u533f\u540d\u65b9\u5f0f\u767b\u5f55"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5bc6\u7801"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u7b56\u7565"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5b89\u5168\u8ba4\u8bc1/\u8bc1\u4e66\u65b9\u5f0f\u767b\u5f55"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6fc0\u6d3b\u8ba2\u9605"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u91c7\u7528OPC\u8ba2\u9605\u65b9\u5f0f\u8bfb\u53d6\u53d8\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u9891\u7387"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u66f4\u65b0\u9891\u7387\u6216\u8005\u8fde\u8bfb\u9891\u7387"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6b7b\u533a"),(0,a.kt)("td",{parentName:"tr",align:null},"OPC\u6b7b\u533a"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u5206\u7ec4\u5927\u5c0f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9694\u8bbe\u5b9a\u5927\u5c0f\u5206\u4e00\u4e2aOPCGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"500")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u8fde\u9891\u7387"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u65ad\u5f00\u8fde\u63a5\uff0c\u6bcf\u9694\u8bbe\u5b9a\u65f6\u95f4\u91cd\u65b0\u8fde\u63a5"),(0,a.kt)("td",{parentName:"tr",align:null},"5000")))),(0,a.kt)("h2",{id:"\u4e8c\u53d8\u91cf\u914d\u7f6e"},"\u4e8c\u3001\u53d8\u91cf\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u53d8\u91cf\u5730\u5740\u8bf4\u660e"},"\u53d8\u91cf\u5730\u5740\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5730\u5740\u5373\u4e3a OPC NodeId")),(0,a.kt)("h3",{id:"\u53d8\u91cf\u7279\u6b8a\u65b9\u6cd5\u8bf4\u660e"},"\u53d8\u91cf\u7279\u6b8a\u65b9\u6cd5\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u63d2\u4ef6\u8c03\u8bd5\u754c\u9762\u53ef\u5bfc\u51faOPC Item")),(0,a.kt)("h2",{id:"\u4e09\u8bc1\u4e66\u8bf4\u660e"},"\u4e09\u3001\u8bc1\u4e66\u8bf4\u660e"),(0,a.kt)("p",null,"\u8bc1\u4e66\u53ef\u4ee5\u5728\u8f6f\u4ef6\u76ee\u5f55\\OPCUAClientCertificate\u4e0b\u67e5\u770b\u6216\u8005\u5bfc\u51fa/\u590d\u5236"),(0,a.kt)("img",{src:n(3887).Z,width:"700"}))}d.isMDXComponent=!0},8024:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/pluginopcuaclient-1-fe3279d7e832b03d49ca22ef855c16b2.png"},3887:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/pluginopcuaclient-3-79be0019722d7110b6229ed10c4f0d6e.png"}}]);