"use strict";(self.webpackChunkspaghetworks_github_io=self.webpackChunkspaghetworks_github_io||[]).push([[678],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var o=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(f,c(c({ref:r},s),{},{components:t})):o.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7130:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7366),n=(t(9496),t(9613));const a={},c="Character Controller",i={unversionedId:"developers-guide/core/character-controller",id:"developers-guide/core/character-controller",title:"Character Controller",description:"Use moveandslide for most (all?) movements.",source:"@site/docs/developers-guide/core/character-controller.md",sourceDirName:"developers-guide/core",slug:"/developers-guide/core/character-controller",permalink:"/docs/developers-guide/core/character-controller",draft:!1,tags:[],version:"current",lastUpdatedAt:1693074108,formattedLastUpdatedAt:"Aug 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Changing Block to Place",permalink:"/docs/developers-guide/core/changing-block-to-place"},next:{title:"Color Codes",permalink:"/docs/developers-guide/core/color-codes"}},l={},d=[{value:"Crouching not yet implemented",id:"crouching-not-yet-implemented",level:2}],s={toc:d},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"character-controller"},"Character Controller"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"move_and_slide")," for most (all?) movements.\nAir control is fine, but at significantly reduced authority.\nJump produces upward acceleration for the first few frames after takeoff to permit jumps of different heights.\nDirectional inputs are vector summed, then normalized. No diagonal running."),(0,n.kt)("p",null,"Camera is azimuth-altitude Euler. The cursor should be locked by default, but may be unlocked momentarily by holding alt.\nThe camera is parented to the upper characterbody sphere."),(0,n.kt)("h2",{id:"crouching-not-yet-implemented"},"Crouching not yet implemented"),(0,n.kt)("p",null,'Crouching is controlled by a rigidbody "head" affixed to the lower characterbody sphere by a slider joint. The upper characterbody sphere follows the rigidbody head.\nCrouch lowers the rigidbody head by modifying the joint parameters. Nominal height is 175cm (17.5 blocks), crouching height is 85cm (8.5 blocks).'))}p.isMDXComponent=!0}}]);