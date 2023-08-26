"use strict";(self.webpackChunkspaghetworks_github_io=self.webpackChunkspaghetworks_github_io||[]).push([[648],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7366),o=(r(9496),r(9613));const a={},i="Block Loading System",l={unversionedId:"developers-guide/core/block-loading-system",id:"developers-guide/core/block-loading-system",title:"Block Loading System",description:"The block loading system deserializes block definitions from config files, assets, and scripts.",source:"@site/docs/developers-guide/core/block-loading-system.md",sourceDirName:"developers-guide/core",slug:"/developers-guide/core/block-loading-system",permalink:"/docs/developers-guide/core/block-loading-system",draft:!1,tags:[],version:"current",lastUpdatedAt:1693074108,formattedLastUpdatedAt:"Aug 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Block Definition",permalink:"/docs/developers-guide/core/block-definition"},next:{title:"Changing Block to Place",permalink:"/docs/developers-guide/core/changing-block-to-place"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-loading-system"},"Block Loading System"),(0,o.kt)("p",null,"The block loading system deserializes block definitions from config files, assets, and scripts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read and parse file to structured data per ",(0,o.kt)("a",{parentName:"li",href:"/docs/developers-guide/core/block-definition"},"Block Definition")),(0,o.kt)("li",{parentName:"ul"},"Assemble scene"),(0,o.kt)("li",{parentName:"ul"},"Place scene in collection"),(0,o.kt)("li",{parentName:"ul"},"Emit signal with name")),(0,o.kt)("p",null,"Scene assembly is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start scene assembly with a MeshInstance, Area3D, and CollisionShape (all defaults)"),(0,o.kt)("li",{parentName:"ul"},"Configure the MeshInstance and CollisionShape by asset references or cuboid helper function"),(0,o.kt)("li",{parentName:"ul"},"Iterate over all entries in the module list, writing the appropriate parameters to each module before adding"),(0,o.kt)("li",{parentName:"ul"},"Attach metadata to MeshInstance")))}u.isMDXComponent=!0}}]);