if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Animated-Shape.svg",revision:"1838ed9a9c3ab4e6c1ceeaffb3447baa"},{url:"/Wave.svg",revision:"65c7f46987828f925f550451f73575c3"},{url:"/_next/static/RP4C06JNomNjE4Mcn2CIj/_buildManifest.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/RP4C06JNomNjE4Mcn2CIj/_ssgManifest.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/988-83f401159b53b3fa4628.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/framework-717d42ae9e172961f2a5.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/main-a24fd78f98c3ac5c2849.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/_app-39ef2ea2a9d092faf330.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/games-5fe01024790f2c741349.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/games/%5Bid%5D-7d32fc1a4d07b79fc9ab.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/gangs-58f8a6eba6a3b5b0c311.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/index-ff68810a9d7d350472d1.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/mostwanted-818247be31acc43310c7.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/pages/voxnews-f49920637a4b1f5096e5.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/chunks/webpack-1a8a258926ecde76681b.js",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/_next/static/css/d03ce6fee2100f33e0bf.css",revision:"RP4C06JNomNjE4Mcn2CIj"},{url:"/android-chrome-192x192.png",revision:"d0ba8b722ca4a2666ae4ee018fbf5659"},{url:"/android-chrome-512x512.png",revision:"04066ce3416b10a5db370384537ee44c"},{url:"/animated-shape-corner.svg",revision:"fb1f6b19140ef4942c3a15a97908d2a3"},{url:"/apple-touch-icon.png",revision:"5342fa3b9e692cbacf16ed10ed4012f1"},{url:"/blob-group.svg",revision:"639ad610c7d9def00625d79a23fda799"},{url:"/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"/circuit-coliath.svg",revision:"6c9a5517718c43ff00fe18b99128a8a0"},{url:"/circuit-drlock.svg",revision:"e5ad69c3107794117df713e8addeef53"},{url:"/circuit-enforcers.svg",revision:"49b9db07b9a6a1b41aaa623cb68cd26e"},{url:"/circuit-norgyr.svg",revision:"bf778666853040f48f7e35434adf6afc"},{url:"/circuit-vansaar.svg",revision:"ac9020dfa2f470db000b690e479522f0"},{url:"/contour-line-bg.svg",revision:"885592330224ee5331a2d176d67b0a49"},{url:"/curve-line.svg",revision:"0b767ae833a75cac1f0afcc5ad61ee93"},{url:"/favicon-16x16.png",revision:"3c68a27bf6385eb00aa1a74444f25835"},{url:"/favicon-32x32.png",revision:"6fb3f4cb52df8d9765bee6fc881c79f4"},{url:"/favicon.ico",revision:"3668744f6b50b6ba2963d358f6aa3098"},{url:"/game-play.jpg",revision:"cf5d9b0889998ad3ffb35cc7b125d4db"},{url:"/games-bg.png",revision:"f3b5918cd3d949afdf36e28d87fe0927"},{url:"/hexagon.svg",revision:"b74a0e0ab3046e160357468c877dc8eb"},{url:"/icon-192x192.png",revision:"91d2cc577c4ef809de81b64f33a2b101"},{url:"/icon-256x256.png",revision:"8a1c312ad80ac7c2ceb165a0e79af113"},{url:"/icon-32.png",revision:"b15810c56cc705a62ba051082cb75614"},{url:"/icon-384x384.png",revision:"27eb6dceecd2d4513b75d10171187181"},{url:"/icon-512x512.png",revision:"1c072d1c6fe645c6e48fb2d00d77fb44"},{url:"/logo-gangs.png",revision:"b8e52bfd053b6f503fa6a53f075e8c27"},{url:"/manifest.json",revision:"0e197f22738fdde08dc99e8c4566bc68"},{url:"/map with player icons.svg",revision:"c59b895cfdba9f100d5d2606cf834865"},{url:"/meteor.svg",revision:"fa6f52af9893e7f84c8c24032ecce8af"},{url:"/models.png",revision:"59431462905fd8ff1ce1dce3f52a6812"},{url:"/mstile-150x150.png",revision:"e51ac50e50785a7b2cd7cf0f867dd2ef"},{url:"/news-bg.png",revision:"287e9fbb8277a3d798bf2bd13d625ae5"},{url:"/polygon-luminary.svg",revision:"cce1ada6656e9846e3cc063e4b7c29ec"},{url:"/rect-light.svg",revision:"470e5d7bb5a28ec5a8c4ed2a1217c3d5"},{url:"/safari-pinned-tab.svg",revision:"abd96c3c23522430b60262da635669e3"},{url:"/shiny-overlay.svg",revision:"71358449ba7dd75234b2357aa2b0b4ae"},{url:"/site.webmanifest",revision:"04a2ef6bf20d5dc63293e8656d926a9f"},{url:"/sons-of-norgyr.JPG",revision:"05ed4254515cc0f07bd11bb3d010f24a"},{url:"/sound-wave.svg",revision:"6932cff76a60300f0ebb035108d10cdd"},{url:"/techsump-network.JPG",revision:"917f66366919b089bd7145233285e525"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/wanted-1.png",revision:"557e3864be9e826c21d63adb8912fc5c"},{url:"/wanted-2.png",revision:"3f7e22945ad109428345143c81bc55a1"},{url:"/wanted-3.png",revision:"481f1fd7aadb2b0a97512d609b38e74f"},{url:"/wanted-4.png",revision:"e946367893df5eb0d1f8cc7773ba2a21"},{url:"/wanted-5.png",revision:"3d485781fa96a9bb7f6e84507ab611a4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
