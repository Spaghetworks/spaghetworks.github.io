"use strict";(self.webpackChunkspaghetworks_github_io=self.webpackChunkspaghetworks_github_io||[]).push([[20],{9613:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:r},l),{},{components:t})):o.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5010:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(7366),n=(t(9496),t(9613));const a={},i="Cursor Camera Movement",c={unversionedId:"developers-guide/core/cursor-camera-movement",id:"developers-guide/core/cursor-camera-movement",title:"Cursor Camera Movement",description:"EditorCursorUp and -Down will increment or decrement the cursor's Y coordinate, respectively, and invert when the camera is rotated over.",source:"@site/docs/developers-guide/core/cursor-camera-movement.md",sourceDirName:"developers-guide/core",slug:"/developers-guide/core/cursor-camera-movement",permalink:"/docs/developers-guide/core/cursor-camera-movement",draft:!1,tags:[],version:"current",lastUpdatedAt:1693074108,formattedLastUpdatedAt:"Aug 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Construct Editor-Simulation Translation",permalink:"/docs/developers-guide/core/construct-editor-simulation-translation"},next:{title:"Editor Block Hierarchy",permalink:"/docs/developers-guide/core/editor-block-hierarchy"}},s={},u=[],l={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cursor-camera-movement"},"Cursor Camera Movement"),(0,n.kt)("p",null,"EditorCursorUp and -Down will increment or decrement the cursor's Y coordinate, respectively, and invert when the camera is rotated over."),(0,n.kt)("p",null,"EditorCursor","[","Forward|Left|Back|Right] will modify the cursor's X and Z coordinates (Forward is Z\xaf and Left is X\xaf), rotated into place by ",(0,n.kt)("inlineCode",{parentName:"p"},"round(azimuth/(pi/2)) * pi/2"),"."))}d.isMDXComponent=!0}}]);