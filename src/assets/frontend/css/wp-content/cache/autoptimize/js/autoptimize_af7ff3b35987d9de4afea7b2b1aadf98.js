(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T5L96GD');
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
/*! lazysizes - v4.0.1 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=125,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&d.ricTimeout?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d&&m?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:698554,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
piCId='17174';piAId='530592';piHostname='pi.pardot.com';(function(){function async_load(){var s=document.createElement('script');s.type='text/javascript';s.src=('https:'==document.location.protocol?'https://pi':'http://cdn')+'.pardot.com/pd.js';var c=document.getElementsByTagName('script')[0];c.parentNode.insertBefore(s,c);}
if(window.attachEvent){window.attachEvent('onload',async_load);}
else{window.addEventListener('load',async_load,false);}})();

(function ($) {
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  $(document).ready(function(){
    $('.lazy').Lazy();
    $('.alphabinator-input').on({
      click: function() { $(this).select(); },
      change: function() { $(this).select(); },
      focus: function() { $(this).select(); }
    });
    $('.alphabinator-input').keypress(function(e) {
      var regex = new RegExp("^[a-zA-Z]+$");
      var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (!regex.test(key)) {
         e.preventDefault();
         return false;
      } else {
        $('.alphabinator-list').removeClass('active');
        console.log(key);
        $('.alphabinator-input').val(key.toUpperCase());
        $(".alphabinator-list[data-letter='"+key.toUpperCase()+"']").addClass('active');
        $(this).select();
      }
    });
    $('.alphabinator-toggle-next').click(function() {
      inputVal = $('.alphabinator-input').val();
      newInputVal = inputVal.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c = a.charCodeAt(0);
        switch(c) {
          case 90: return 'A';
          case 122: return 'a';
          default: return String.fromCharCode(++c);
        }
      });
      $('.alphabinator-list').removeClass('active');
      $('.alphabinator-input').val(newInputVal).trigger('input');
      $(".alphabinator-list[data-letter='"+newInputVal.toUpperCase()+"']").addClass('active');
    });
    $('.alphabinator-toggle-prev').click(function() {
      inputVal = $('.alphabinator-input').val();
      newInputVal = inputVal.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c = a.charCodeAt(0);
        switch(c) {
          case 65: return 'Z';
          case 97: return 'z';
          default: return String.fromCharCode(--c);
        }
      });
      $('.alphabinator-list').removeClass('active');
      $('.alphabinator-input').val(newInputVal).trigger('input');
      $(".alphabinator-list[data-letter='"+newInputVal.toUpperCase()+"']").addClass('active');
    });
    $('.alphabinator-input').select();
  });
})(jQuery);
/**
 * Analytics for Roadie site
 * Includes integrations for:
 * - Google Analytics
 * - Google Tag Manager
 * - Pardot
 */
var Analytics = (function($) {
    var t = {};
    t.getParameterByName = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    /**
     * Fancy GA plugins
     * See https://github.com/googleanalytics/autotrack
     */
    t.enableAutoTracker = function() {
        ga('require', 'eventTracker');
        ga('require', 'outboundLinkTracker');
        ga('require', 'urlChangeTracker');
    };
    /**
     * Determine page role
     * Assumed from URL, may need a more dynamic method
     * @return string
     */
    t.getPageRole = function() {
        var roles = [
            {
                'role': 'enterprise',
                'search': 'enterprise'
            },
            {
                'role': 'smb',
                'search': 'business'
            },
            {
                'role': 'personal',
                'search': 'sender'
            },
            {
                'role': 'driver',
                'search': 'driver'
            }
        ];
        var role = null;
        for(var i in roles) {
            if($('body').hasClass('role-' + roles[i].search)) {
                role = roles[i].role;
            }
        }
        return role;
    };
    /**
     * Push data to the GTM dataLayer based on page role
     */
    t.roleBasedPageView = function() {
        var role = t.getPageRole();
        if(!role) {
            return;
        }
        var data = {
            'mp-event': 'page viewed',
            'url': window.location.href,
            'pre-reg_role': role
        };
        dataLayer.push(data);
        ga('set', 'dimension1', role);
    };
    /**
     * To be called when the shipping calculator has been submitted
     * and results finish loading
     */
    t.shippingCalculator = function() {};
    /**
     * Thank you page-based conversions, differing per role
     */
    t.thankYouPages = function() {
        var path = window.location.pathname;
        var pages = [
            '/thank-you',
            '/business/thank-you',
            '/enterprise/thank-you',
            '/enterprise/thank-you-volume'
        ];
        if(pages.indexOf(path) == -1) {
            return;
        }
        var data = {
            'event': 'gaEvent',
            'mp-event': 'contact us completed',
            'details':{
                'category': 'brochure',
                'action': 'user completes contact us',
                'label': t.getPageRole(),
                'url': window.location.href,
                'pre-reg_role': t.getPageRole()
             }
        };
        dataLayer.push(data);
    };
    /**
     * Resources index defaults, based on page role
     */
     t.resourcesDefaults = function() {
         var role = t.getPageRole();
         if(!role) {
             return;
         }
         if(role == 'smb') {
             role = 'business';
         } else if(role == 'personal') {
             role = 'send';
         } else if(role == 'driver') {
             role = 'drive';
         }
         var queryString = '?type=all&topic=' + role;
         var href = $('#menu-item-760 a').attr('href');
         $('#menu-item-760 a').attr('href', href + queryString);
     };
    /**
     * Track links to documents as events in GA
     */
    t.trackDocuments = function() {
        var extensions = ['pdf', 'doc', 'docx', 'zip', 'xls'];
        for(var i in extensions) {
            $('a[href$="' + extensions[i] + '"]').click(function(e) {
                var re = /(?:\.([^.]+))?$/;
                var extension = re.exec($(this).attr('href'))[1];
                ga('send', 'event', 'Document', 'Download ' + extention, $(this).attr('href'));
                return true;
            });
        }
    };
    /**
     * User access a resource (article, whitepaper, etc)
     * after filling out a form
     */
    t.trackResourceAccess = function() {
        var code = t.getParameterByName('code');
        var path = window.location.pathname;
        if(!code || path.indexOf('/resources') == -1) {
            return;
        }
        var data = {
            'event': 'gaEvent',
            'mp-event': 'form completed',
            'details':{
                'category': 'brochure',
                'action': 'user completes form',
                'label': $('h1').text(),
                'asset': $('h1').text(),
                'url': window.location.href,
                'pre-reg_role': t.getPageRole()
             }
        };
        dataLayer.push(data);
    };
    t.trackSearch = function() {
        if(!t.getParameterByName('s')) {
            return;
        }
        var query = t.getParameterByName('s');
        var data = {
            'mp-event': 'site searched',
            'details':{
                'url': window.location.href,
                'search_term': query
            }
        };
        dataLayer.push(data);
    };
    t.trackContactIntent = function() {
        $('a[href*="contact-us"]').click(function(e) {
            var parent = $(this).closest('header, section');
            var location = '';
            if(parent.length) {
                location = parent.attr('id');
            }
            var data = {
              'event': 'gaEvent',
              'mp-event': 'contact us clicked',
              'details':{
                      'category': 'brochure',
                      'action': 'user clicks contact us',
                      'label': $(this).text(),
                      'call_to_action': $(this).text(),
                      'url': window.location.href,
                      'location': location,
                      'pre-reg_role': t.getPageRole()
                 }
            };
            dataLayer.push(data);
        });
    };
    t.trackEstimator = function(state, fields, price) {
        if(!state) {
            state = 'sent';
        }
        if(!price) {
            price = '';
        }
        var data = {
            'event': 'gaEvent',
            'mp-event': 'estimate ' + state,
            'details': {
                'Address From Field Changed': fields.pickup_location.address,
                'Address To Field Changed': fields.delivery_location.address,
                'From Lat': fields.pickup_location.latitude,
                'From Long': fields.pickup_location.longitude,
                'To Lat': fields.delivery_location.latitude,
                'To Long': fields.delivery_location.longitude,
                'Roadie Price': price,
                'Size Category': fields.size,
                'Size Field Changed': fields.size
            }
        };
        dataLayer.push(data);
    };
    t.trackDriverSignup = function() {
        $('form[action*="/drivers"], form[action*="/drivewithroadie"]').submit(function() {
            var data = {
                'event': 'gaEvent',
                'mp-event': 'sign up started',
                'details': {
                    'category': 'registation',
                    'action': 'user starts signup',
                    'label': 'driver',
                    'pre-reg_role': 'driver',
                    'location': 'driver form',
                    'ftue_role': 'driver',
                    'url': window.location.href
                }
            };
            dataLayer.push(data);
        });
    };
    t.init = function() {
        t.enableAutoTracker();
        t.trackDocuments();
        t.thankYouPages();
        t.resourcesDefaults();
        t.trackResourceAccess();
        t.trackSearch();
        t.trackContactIntent();
        t.trackDriverSignup();
    };
    return t;
})(jQuery);
jQuery(document).on('ready',function() {
    Analytics.init();
});
(function(){var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function l(){l=function(){};k.Symbol||(k.Symbol=ba)}var ca=0;function ba(a){return"jscomp_symbol_"+(a||"")+ca++}
function m(){l();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(this)}});m=function(){}}function da(a){var b=0;return ea(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ea(a){m();a={next:a};a[k.Symbol.iterator]=function(){return this};return a}function fa(a){m();l();m();var b=a[Symbol.iterator];return b?b.call(a):da(a)}
function n(a){if(!(a instanceof Array)){a=fa(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}function ha(a,b){function c(){}c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}var p=window.Element.prototype,ia=p.matches||p.matchesSelector||p.webkitMatchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector;
function ja(a,b){if(a&&1==a.nodeType&&b){if("string"==typeof b||1==b.nodeType)return a==b||ka(a,b);if("length"in b)for(var c=0,d;d=b[c];c++)if(a==d||ka(a,d))return!0}return!1}function ka(a,b){if("string"!=typeof b)return!1;if(ia)return ia.call(a,b);b=a.parentNode.querySelectorAll(b);for(var c=0,d;d=b[c];c++)if(d==a)return!0;return!1}function la(a){for(var b=[];a&&a.parentNode&&1==a.parentNode.nodeType;)a=a.parentNode,b.push(a);return b}
function q(a,b,c){function d(a){var d;if(h.composed&&"function"==typeof a.composedPath)for(var e=a.composedPath(),f=0,F;F=e[f];f++)1==F.nodeType&&ja(F,b)&&(d=F);else a:{if((d=a.target)&&1==d.nodeType&&b)for(d=[d].concat(la(d)),e=0;f=d[e];e++)if(ja(f,b)){d=f;break a}d=void 0}d&&c.call(d,a,d)}var e=document,h={composed:!0,S:!0},h=void 0===h?{}:h;e.addEventListener(a,d,h.S);return{j:function(){e.removeEventListener(a,d,h.S)}}}
function ma(a){var b={};if(!a||1!=a.nodeType)return b;a=a.attributes;if(!a.length)return{};for(var c=0,d;d=a[c];c++)b[d.name]=d.value;return b}var na=/:(80|443)$/,r=document.createElement("a"),t={};
function u(a){a=a&&"."!=a?a:location.href;if(t[a])return t[a];r.href=a;if("."==a.charAt(0)||"/"==a.charAt(0))return u(r.href);var b="80"==r.port||"443"==r.port?"":r.port,b="0"==b?"":b,c=r.host.replace(na,"");return t[a]={hash:r.hash,host:c,hostname:r.hostname,href:r.href,origin:r.origin?r.origin:r.protocol+"//"+c,pathname:"/"==r.pathname.charAt(0)?r.pathname:"/"+r.pathname,port:b,protocol:r.protocol,search:r.search}}var w=[];
function oa(a,b){var c=this;this.context=a;this.P=b;this.f=(this.c=/Task$/.test(b))?a.get(b):a[b];this.b=[];this.a=[];this.g=function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];return c.a[c.a.length-1].apply(null,[].concat(n(b)))};this.c?a.set(b,this.g):a[b]=this.g}function x(a,b,c){a=pa(a,b);a.b.push(c);qa(a)}function y(a,b,c){a=pa(a,b);c=a.b.indexOf(c);-1<c&&(a.b.splice(c,1),0<a.b.length?qa(a):a.j())}
function qa(a){a.a=[];for(var b,c=0;b=a.b[c];c++){var d=a.a[c-1]||a.f.bind(a.context);a.a.push(b(d))}}oa.prototype.j=function(){var a=w.indexOf(this);-1<a&&(w.splice(a,1),this.c?this.context.set(this.P,this.f):this.context[this.P]=this.f)};function pa(a,b){var c=w.filter(function(c){return c.context==a&&c.P==b})[0];c||(c=new oa(a,b),w.push(c));return c}
function z(a,b,c,d,e,h){if("function"==typeof d){var f=c.get("buildHitTask");return{buildHitTask:function(c){c.set(a,null,!0);c.set(b,null,!0);d(c,e,h);f(c)}}}return A({},a,b)}function B(a,b){var c=ma(a),d={};Object.keys(c).forEach(function(a){if(!a.indexOf(b)&&a!=b+"on"){var e=c[a];"true"==e&&(e=!0);"false"==e&&(e=!1);a=ra(a.slice(b.length));d[a]=e}});return d}
function sa(a){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):a()}function ta(a,b){var c;return function(d){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];clearTimeout(c);c=setTimeout(function(){return a.apply(null,[].concat(n(e)))},b)}}function ua(a){function b(){c||(c=!0,a())}var c=!1;setTimeout(b,2E3);return b}var C={};
function va(a,b){function c(){clearTimeout(e.timeout);e.send&&y(a,"send",e.send);delete C[d];e.R.forEach(function(a){return a()})}var d=a.get("trackingId"),e=C[d]=C[d]||{};clearTimeout(e.timeout);e.timeout=setTimeout(c,0);e.R=e.R||[];e.R.push(b);e.send||(e.send=function(a){return function(b){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];c();a.apply(null,[].concat(n(d)))}},x(a,"send",e.send))}
var A=Object.assign||function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(var d=0,e=c.length;d<e;d++){var h=Object(c[d]),f;for(f in h)Object.prototype.hasOwnProperty.call(h,f)&&(a[f]=h[f])}return a};function ra(a){return a.replace(/[\-\_]+(\w?)/g,function(a,c){return c.toUpperCase()})}function D(a){return"object"==typeof a&&null!==a}var E=function wa(b){return b?(b^16*Math.random()>>b/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,wa)};
function G(a,b){var c=window.GoogleAnalyticsObject||"ga";window[c]=window[c]||function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];(window[c].q=window[c].q||[]).push(b)};window.gaDevIds=window.gaDevIds||[];0>window.gaDevIds.indexOf("i5iSjo")&&window.gaDevIds.push("i5iSjo");window[c]("provide",a,b);window.gaplugins=window.gaplugins||{};window.gaplugins[a.charAt(0).toUpperCase()+a.slice(1)]=b}var H={T:1,U:2,V:3,X:4,Y:5,Z:6,$:7,aa:8,ba:9,W:10},I=Object.keys(H).length;
function J(a,b){a.set("\x26_av","2.4.1");var c=a.get("\x26_au"),c=parseInt(c||"0",16).toString(2);if(c.length<I)for(var d=I-c.length;d;)c="0"+c,d--;b=I-b;c=c.substr(0,b)+1+c.substr(b+1);a.set("\x26_au",parseInt(c||"0",2).toString(16))}function K(a,b){J(a,H.T);this.a=A({},b);this.g=a;this.b=this.a.stripQuery&&this.a.queryDimensionIndex?"dimension"+this.a.queryDimensionIndex:null;this.f=this.f.bind(this);this.c=this.c.bind(this);x(a,"get",this.f);x(a,"buildHitTask",this.c)}
K.prototype.f=function(a){var b=this;return function(c){if("page"==c||c==b.b){var d={location:a("location"),page:a("page")};return xa(b,d)[c]}return a(c)}};K.prototype.c=function(a){var b=this;return function(c){var d=xa(b,{location:c.get("location"),page:c.get("page")});c.set(d,null,!0);a(c)}};
function xa(a,b){var c=u(b.page||b.location),d=c.pathname;if(a.a.indexFilename){var e=d.split("/");a.a.indexFilename==e[e.length-1]&&(e[e.length-1]="",d=e.join("/"))}"remove"==a.a.trailingSlash?d=d.replace(/\/+$/,""):"add"==a.a.trailingSlash&&(/\.\w+$/.test(d)||"/"==d.substr(-1)||(d+="/"));d={page:d+(a.a.stripQuery?ya(a,c.search):c.search)};b.location&&(d.location=b.location);a.b&&(d[a.b]=c.search.slice(1)||"(not set)");return"function"==typeof a.a.urlFieldsFilter?(b=a.a.urlFieldsFilter(d,u),c={page:b.page,
location:b.location},a.b&&(c[a.b]=b[a.b]),c):d}function ya(a,b){if(Array.isArray(a.a.queryParamsWhitelist)){var c=[];b.slice(1).split("\x26").forEach(function(b){var d=fa(b.split("\x3d"));b=d.next().value;d=d.next().value;-1<a.a.queryParamsWhitelist.indexOf(b)&&d&&c.push([b,d])});return c.length?"?"+c.map(function(a){return a.join("\x3d")}).join("\x26"):""}return""}K.prototype.remove=function(){y(this.g,"get",this.f);y(this.g,"buildHitTask",this.c)};G("cleanUrlTracker",K);
function L(a,b){var c=this;J(a,H.U);if(window.addEventListener){this.a=A({events:["click"],fieldsObj:{},attributePrefix:"ga-"},b);this.f=a;this.c=this.c.bind(this);var d="["+this.a.attributePrefix+"on]";this.b={};this.a.events.forEach(function(a){c.b[a]=q(a,d,c.c)})}}
L.prototype.c=function(a,b){var c=this.a.attributePrefix;if(!(0>b.getAttribute(c+"on").split(/\s*,\s*/).indexOf(a.type))){var c=B(b,c),d=A({},this.a.fieldsObj,c);this.f.send(c.hitType||"event",z({transport:"beacon"},d,this.f,this.a.hitFilter,b,a))}};L.prototype.remove=function(){var a=this;Object.keys(this.b).forEach(function(b){a.b[b].j()})};G("eventTracker",L);
function za(a,b){var c=this;J(a,H.V);window.IntersectionObserver&&window.MutationObserver&&(this.a=A({rootMargin:"0px",fieldsObj:{},attributePrefix:"ga-"},b),this.c=a,this.M=this.M.bind(this),this.O=this.O.bind(this),this.K=this.K.bind(this),this.L=this.L.bind(this),this.b=null,this.items=[],this.i={},this.h={},sa(function(){c.a.elements&&c.observeElements(c.a.elements)}))}g=za.prototype;
g.observeElements=function(a){var b=this;a=M(this,a);this.items=this.items.concat(a.items);this.i=A({},a.i,this.i);this.h=A({},a.h,this.h);a.items.forEach(function(a){var c=b.h[a.threshold]=b.h[a.threshold]||new IntersectionObserver(b.O,{rootMargin:b.a.rootMargin,threshold:[+a.threshold]});(a=b.i[a.id]||(b.i[a.id]=document.getElementById(a.id)))&&c.observe(a)});this.b||(this.b=new MutationObserver(this.M),this.b.observe(document.body,{childList:!0,subtree:!0}));requestAnimationFrame(function(){})};
g.unobserveElements=function(a){var b=[],c=[];this.items.forEach(function(d){a.some(function(a){a=Aa(a);return a.id===d.id&&a.threshold===d.threshold&&a.trackFirstImpressionOnly===d.trackFirstImpressionOnly})?c.push(d):b.push(d)});if(b.length){var d=M(this,b),e=M(this,c);this.items=d.items;this.i=d.i;this.h=d.h;c.forEach(function(a){if(!d.i[a.id]){var b=e.h[a.threshold],c=e.i[a.id];c&&b.unobserve(c);d.h[a.threshold]||e.h[a.threshold].disconnect()}})}else this.unobserveAllElements()};
g.unobserveAllElements=function(){var a=this;Object.keys(this.h).forEach(function(b){a.h[b].disconnect()});this.b.disconnect();this.b=null;this.items=[];this.i={};this.h={}};function M(a,b){var c=[],d={},e={};b.length&&b.forEach(function(b){b=Aa(b);c.push(b);e[b.id]=a.i[b.id]||null;d[b.threshold]=a.h[b.threshold]||null});return{items:c,i:e,h:d}}g.M=function(a){for(var b=0,c;c=a[b];b++){for(var d=0,e;e=c.removedNodes[d];d++)N(this,e,this.L);for(d=0;e=c.addedNodes[d];d++)N(this,e,this.K)}};
function N(a,b,c){1==b.nodeType&&b.id in a.i&&c(b.id);for(var d=0,e;e=b.childNodes[d];d++)N(a,e,c)}
g.O=function(a){for(var b=[],c=0,d;d=a[c];c++)for(var e=0,h;h=this.items[e];e++){var f;if(f=d.target.id===h.id)(f=h.threshold)?f=d.intersectionRatio>=f:(f=d.intersectionRect,f=0<f.top||0<f.bottom||0<f.left||0<f.right);if(f){var v=h.id;f=document.getElementById(v);var v={transport:"beacon",eventCategory:"Viewport",eventAction:"impression",eventLabel:v,nonInteraction:!0},Na=A({},this.a.fieldsObj,B(f,this.a.attributePrefix));this.c.send("event",z(v,Na,this.c,this.a.hitFilter,f));h.trackFirstImpressionOnly&&
b.push(h)}}b.length&&this.unobserveElements(b)};g.K=function(a){var b=this,c=this.i[a]=document.getElementById(a);this.items.forEach(function(d){a==d.id&&b.h[d.threshold].observe(c)})};g.L=function(a){var b=this,c=this.i[a];this.items.forEach(function(d){a==d.id&&b.h[d.threshold].unobserve(c)});this.i[a]=null};g.remove=function(){this.unobserveAllElements()};G("impressionTracker",za);function Aa(a){"string"==typeof a&&(a={id:a});return A({threshold:0,trackFirstImpressionOnly:!0},a)}
function Ba(){this.a={}}function Ca(a,b){(a.a.externalSet=a.a.externalSet||[]).push(b)}Ba.prototype.ca=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];(this.a[a]=this.a[a]||[]).forEach(function(a){return a.apply(null,[].concat(n(c)))})};var O={},P=!1,Q;function R(a,b){b=void 0===b?{}:b;this.a={};this.b=a;this.w=b;this.l=null}ha(R,Ba);function S(a,b,c){a=["autotrack",a,b].join(":");O[a]||(O[a]=new R(a,c),P||(window.addEventListener("storage",Da),P=!0));return O[a]}
function Ea(){if(null!=Q)return Q;try{window.localStorage.setItem("autotrack","autotrack"),window.localStorage.removeItem("autotrack"),Q=!0}catch(a){Q=!1}return Q}R.prototype.get=function(){if(this.l)return this.l;if(Ea())try{this.l=Fa(window.localStorage.getItem(this.b))}catch(a){}return this.l=A({},this.w,this.l)};R.prototype.set=function(a){this.l=A({},this.w,this.l,a);if(Ea())try{var b=JSON.stringify(this.l);window.localStorage.setItem(this.b,b)}catch(c){}};
function Ga(a){a.l={};if(Ea())try{window.localStorage.removeItem(a.b)}catch(b){}}R.prototype.j=function(){delete O[this.b];Object.keys(O).length||(window.removeEventListener("storage",Da),P=!1)};function Da(a){var b=O[a.key];if(b){var c=A({},b.w,Fa(a.oldValue));a=A({},b.w,Fa(a.newValue));b.l=a;b.ca("externalSet",a,c)}}function Fa(a){var b={};if(a)try{b=JSON.parse(a)}catch(c){}return b}var T={};
function U(a,b,c){this.f=a;this.timeout=b||Ha;this.timeZone=c;this.b=this.b.bind(this);x(a,"sendHitTask",this.b);try{this.c=new Intl.DateTimeFormat("en-US",{timeZone:this.timeZone})}catch(d){}this.a=S(a.get("trackingId"),"session",{hitTime:0,isExpired:!1});this.a.get().id||this.a.set({id:E()})}function Ia(a,b,c){var d=a.get("trackingId");return T[d]?T[d]:T[d]=new U(a,b,c)}function V(a){return a.a.get().id}
U.prototype.isExpired=function(a){a=void 0===a?V(this):a;if(a!=V(this))return!0;a=this.a.get();if(a.isExpired)return!0;var b=a.hitTime;return b&&(a=new Date,b=new Date(b),a-b>6E4*this.timeout||this.c&&this.c.format(a)!=this.c.format(b))?!0:!1};U.prototype.b=function(a){var b=this;return function(c){a(c);var d=c.get("sessionControl");c="start"==d||b.isExpired();var d="end"==d,e=b.a.get();e.hitTime=+new Date;c&&(e.isExpired=!1,e.id=E());d&&(e.isExpired=!0);b.a.set(e)}};
U.prototype.j=function(){y(this.f,"sendHitTask",this.b);this.a.j();delete T[this.f.get("trackingId")]};var Ha=30;function W(a,b){J(a,H.W);window.addEventListener&&(this.b=A({increaseThreshold:20,sessionTimeout:Ha,fieldsObj:{}},b),this.f=a,this.c=Ja(this),this.g=ta(this.g.bind(this),500),this.o=this.o.bind(this),this.a=S(a.get("trackingId"),"plugins/max-scroll-tracker"),this.m=Ia(a,this.b.sessionTimeout,this.b.timeZone),x(a,"set",this.o),Ka(this))}
function Ka(a){100>(a.a.get()[a.c]||0)&&window.addEventListener("scroll",a.g)}
W.prototype.g=function(){var a=document.documentElement,b=document.body,a=Math.min(100,Math.max(0,Math.round(window.pageYOffset/(Math.max(a.offsetHeight,a.scrollHeight,b.offsetHeight,b.scrollHeight)-window.innerHeight)*100))),b=V(this.m);b!=this.a.get().sessionId&&(Ga(this.a),this.a.set({sessionId:b}));if(this.m.isExpired(this.a.get().sessionId))Ga(this.a);else if(b=this.a.get()[this.c]||0,a>b&&(100!=a&&100!=b||window.removeEventListener("scroll",this.g),b=a-b,100==a||b>=this.b.increaseThreshold)){var c=
{};this.a.set((c[this.c]=a,c.sessionId=V(this.m),c));a={transport:"beacon",eventCategory:"Max Scroll",eventAction:"increase",eventValue:b,eventLabel:String(a),nonInteraction:!0};this.b.maxScrollMetricIndex&&(a["metric"+this.b.maxScrollMetricIndex]=b);this.f.send("event",z(a,this.b.fieldsObj,this.f,this.b.hitFilter))}};W.prototype.o=function(a){var b=this;return function(c,d){a(c,d);var e={};(D(c)?c:(e[c]=d,e)).page&&(c=b.c,b.c=Ja(b),b.c!=c&&Ka(b))}};
function Ja(a){a=u(a.f.get("page")||a.f.get("location"));return a.pathname+a.search}W.prototype.remove=function(){this.m.j();window.removeEventListener("scroll",this.g);y(this.f,"set",this.o)};G("maxScrollTracker",W);var La={};function Ma(a,b){J(a,H.X);window.matchMedia&&(this.a=A({changeTemplate:this.changeTemplate,changeTimeout:1E3,fieldsObj:{}},b),D(this.a.definitions)&&(b=this.a.definitions,this.a.definitions=Array.isArray(b)?b:[b],this.b=a,this.c=[],Oa(this)))}
function Oa(a){a.a.definitions.forEach(function(b){if(b.name&&b.dimensionIndex){var c=Pa(b);a.b.set("dimension"+b.dimensionIndex,c);Qa(a,b)}})}function Pa(a){var b;a.items.forEach(function(a){Ra(a.media).matches&&(b=a)});return b?b.name:"(not set)"}
function Qa(a,b){b.items.forEach(function(c){c=Ra(c.media);var d=ta(function(){var c=Pa(b),d=a.b.get("dimension"+b.dimensionIndex);c!==d&&(a.b.set("dimension"+b.dimensionIndex,c),c={transport:"beacon",eventCategory:b.name,eventAction:"change",eventLabel:a.a.changeTemplate(d,c),nonInteraction:!0},a.b.send("event",z(c,a.a.fieldsObj,a.b,a.a.hitFilter)))},a.a.changeTimeout);c.addListener(d);a.c.push({fa:c,da:d})})}Ma.prototype.remove=function(){for(var a=0,b;b=this.c[a];a++)b.fa.removeListener(b.da)};
Ma.prototype.changeTemplate=function(a,b){return a+" \x3d\x3e "+b};G("mediaQueryTracker",Ma);function Ra(a){return La[a]||(La[a]=window.matchMedia(a))}function X(a,b){J(a,H.Y);window.addEventListener&&(this.a=A({formSelector:"form",shouldTrackOutboundForm:this.shouldTrackOutboundForm,fieldsObj:{},attributePrefix:"ga-"},b),this.b=a,this.c=q("submit",this.a.formSelector,this.f.bind(this)))}
X.prototype.f=function(a,b){var c={transport:"beacon",eventCategory:"Outbound Form",eventAction:"submit",eventLabel:u(b.action).href};if(this.a.shouldTrackOutboundForm(b,u)){navigator.sendBeacon||(a.preventDefault(),c.hitCallback=ua(function(){b.submit()}));var d=A({},this.a.fieldsObj,B(b,this.a.attributePrefix));this.b.send("event",z(c,d,this.b,this.a.hitFilter,b,a))}};
X.prototype.shouldTrackOutboundForm=function(a,b){a=b(a.action);return a.hostname!=location.hostname&&"http"==a.protocol.slice(0,4)};X.prototype.remove=function(){this.c.j()};G("outboundFormTracker",X);
function Y(a,b){var c=this;J(a,H.Z);window.addEventListener&&(this.a=A({events:["click"],linkSelector:"a, area",shouldTrackOutboundLink:this.shouldTrackOutboundLink,fieldsObj:{},attributePrefix:"ga-"},b),this.c=a,this.f=this.f.bind(this),this.b={},this.a.events.forEach(function(a){c.b[a]=q(a,c.a.linkSelector,c.f)}))}
Y.prototype.f=function(a,b){var c=this;if(this.a.shouldTrackOutboundLink(b,u)){var d=b.getAttribute("href")||b.getAttribute("xlink:href"),e=u(d),e={transport:"beacon",eventCategory:"Outbound Link",eventAction:a.type,eventLabel:e.href},h=A({},this.a.fieldsObj,B(b,this.a.attributePrefix)),f=z(e,h,this.c,this.a.hitFilter,b,a);if(navigator.sendBeacon||"click"!=a.type||"_blank"==b.target||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||1<a.which)this.c.send("event",f);else{var v=function(){window.removeEventListener("click",
v);if(!a.defaultPrevented){a.preventDefault();var b=f.hitCallback;f.hitCallback=ua(function(){"function"==typeof b&&b();location.href=d})}c.c.send("event",f)};window.addEventListener("click",v)}}};Y.prototype.shouldTrackOutboundLink=function(a,b){a=a.getAttribute("href")||a.getAttribute("xlink:href");b=b(a);return b.hostname!=location.hostname&&"http"==b.protocol.slice(0,4)};Y.prototype.remove=function(){var a=this;Object.keys(this.b).forEach(function(b){a.b[b].j()})};G("outboundLinkTracker",Y);
var Z=E();
function Sa(a,b){var c=this;J(a,H.$);document.visibilityState&&(this.a=A({sessionTimeout:Ha,visibleThreshold:5E3,sendInitialPageview:!1,fieldsObj:{}},b),this.b=a,this.g=document.visibilityState,this.m=null,this.o=!1,this.v=this.v.bind(this),this.s=this.s.bind(this),this.G=this.G.bind(this),this.N=this.N.bind(this),this.c=S(a.get("trackingId"),"plugins/page-visibility-tracker"),Ca(this.c,this.N),this.f=Ia(a,this.a.sessionTimeout,this.a.timeZone),x(a,"set",this.v),window.addEventListener("unload",this.G),
document.addEventListener("visibilitychange",this.s),va(this.b,function(){if("visible"==document.visibilityState)c.a.sendInitialPageview&&(Ta(c,{ea:!0}),c.o=!0),c.c.set({time:+new Date,state:"visible",pageId:Z,sessionId:V(c.f)});else if(c.a.sendInitialPageview&&c.a.pageLoadsMetricIndex){var a={},a=(a.transport="beacon",a.eventCategory="Page Visibility",a.eventAction="page load",a.eventLabel="(not set)",a["metric"+c.a.pageLoadsMetricIndex]=1,a.nonInteraction=!0,a);c.b.send("event",z(a,c.a.fieldsObj,
c.b,c.a.hitFilter))}}))}g=Sa.prototype;
g.s=function(){var a=this;if("visible"==document.visibilityState||"hidden"==document.visibilityState){var b=Ua(this),c={time:+new Date,state:document.visibilityState,pageId:Z,sessionId:V(this.f)};"visible"==document.visibilityState&&this.a.sendInitialPageview&&!this.o&&(Ta(this),this.o=!0);"hidden"==document.visibilityState&&this.m&&clearTimeout(this.m);this.f.isExpired(b.sessionId)?(Ga(this.c),"hidden"==this.g&&"visible"==document.visibilityState&&(clearTimeout(this.m),this.m=setTimeout(function(){a.c.set(c);
Ta(a,{hitTime:c.time})},this.a.visibleThreshold))):(b.pageId==Z&&"visible"==b.state&&Va(this,b),this.c.set(c));this.g=document.visibilityState}};function Ua(a){var b=a.c.get();"visible"==a.g&&"hidden"==b.state&&b.pageId!=Z&&(b.state="visible",b.pageId=Z,a.c.set(b));return b}
function Va(a,b,c){c=(c?c:{}).hitTime;var d={hitTime:c},d=(d?d:{}).hitTime;(b=b.time?(d||+new Date)-b.time:0)&&b>=a.a.visibleThreshold&&(b=Math.round(b/1E3),d={transport:"beacon",nonInteraction:!0,eventCategory:"Page Visibility",eventAction:"track",eventValue:b,eventLabel:"(not set)"},c&&(d.queueTime=+new Date-c),a.a.visibleMetricIndex&&(d["metric"+a.a.visibleMetricIndex]=b),a.b.send("event",z(d,a.a.fieldsObj,a.b,a.a.hitFilter)))}
function Ta(a,b){var c=b?b:{};b=c.hitTime;var c=c.ea,d={transport:"beacon"};b&&(d.queueTime=+new Date-b);c&&a.a.pageLoadsMetricIndex&&(d["metric"+a.a.pageLoadsMetricIndex]=1);a.b.send("pageview",z(d,a.a.fieldsObj,a.b,a.a.hitFilter))}g.v=function(a){var b=this;return function(c,d){var e={},e=D(c)?c:(e[c]=d,e);e.page&&e.page!==b.b.get("page")&&"visible"==b.g&&b.s();a(c,d)}};g.N=function(a,b){a.time!=b.time&&(b.pageId!=Z||"visible"!=b.state||this.f.isExpired(b.sessionId)||Va(this,b,{hitTime:a.time}))};
g.G=function(){"hidden"!=this.g&&this.s()};g.remove=function(){this.c.j();this.f.j();y(this.b,"set",this.v);window.removeEventListener("unload",this.G);document.removeEventListener("visibilitychange",this.s)};G("pageVisibilityTracker",Sa);
function Wa(a,b){J(a,H.aa);window.addEventListener&&(this.a=A({fieldsObj:{},hitFilter:null},b),this.b=a,this.u=this.u.bind(this),this.J=this.J.bind(this),this.D=this.D.bind(this),this.A=this.A.bind(this),this.B=this.B.bind(this),this.F=this.F.bind(this),"complete"!=document.readyState?window.addEventListener("load",this.u):this.u())}g=Wa.prototype;
g.u=function(){if(window.FB)try{window.FB.Event.subscribe("edge.create",this.B),window.FB.Event.subscribe("edge.remove",this.F)}catch(a){}window.twttr&&this.J()};g.J=function(){var a=this;try{window.twttr.ready(function(){window.twttr.events.bind("tweet",a.D);window.twttr.events.bind("follow",a.A)})}catch(b){}};function Xa(a){try{window.twttr.ready(function(){window.twttr.events.unbind("tweet",a.D);window.twttr.events.unbind("follow",a.A)})}catch(b){}}
g.D=function(a){if("tweet"==a.region){var b={transport:"beacon",socialNetwork:"Twitter",socialAction:"tweet",socialTarget:a.data.url||a.target.getAttribute("data-url")||location.href};this.b.send("social",z(b,this.a.fieldsObj,this.b,this.a.hitFilter,a.target,a))}};
g.A=function(a){if("follow"==a.region){var b={transport:"beacon",socialNetwork:"Twitter",socialAction:"follow",socialTarget:a.data.screen_name||a.target.getAttribute("data-screen-name")};this.b.send("social",z(b,this.a.fieldsObj,this.b,this.a.hitFilter,a.target,a))}};g.B=function(a){this.b.send("social",z({transport:"beacon",socialNetwork:"Facebook",socialAction:"like",socialTarget:a},this.a.fieldsObj,this.b,this.a.hitFilter))};
g.F=function(a){this.b.send("social",z({transport:"beacon",socialNetwork:"Facebook",socialAction:"unlike",socialTarget:a},this.a.fieldsObj,this.b,this.a.hitFilter))};g.remove=function(){window.removeEventListener("load",this.u);try{window.FB.Event.unsubscribe("edge.create",this.B),window.FB.Event.unsubscribe("edge.remove",this.F)}catch(a){}Xa(this)};G("socialWidgetTracker",Wa);
function Ya(a,b){J(a,H.ba);history.pushState&&window.addEventListener&&(this.a=A({shouldTrackUrlChange:this.shouldTrackUrlChange,trackReplaceState:!1,fieldsObj:{},hitFilter:null},b),this.b=a,this.c=location.pathname+location.search,this.H=this.H.bind(this),this.I=this.I.bind(this),this.C=this.C.bind(this),x(history,"pushState",this.H),x(history,"replaceState",this.I),window.addEventListener("popstate",this.C))}g=Ya.prototype;
g.H=function(a){var b=this;return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];a.apply(null,[].concat(n(d)));Za(b,!0)}};g.I=function(a){var b=this;return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];a.apply(null,[].concat(n(d)));Za(b,!1)}};g.C=function(){Za(this,!0)};
function Za(a,b){setTimeout(function(){var c=a.c,d=location.pathname+location.search;c!=d&&a.a.shouldTrackUrlChange.call(a,d,c)&&(a.c=d,a.b.set({page:d,title:document.title}),(b||a.a.trackReplaceState)&&a.b.send("pageview",z({transport:"beacon"},a.a.fieldsObj,a.b,a.a.hitFilter)))},0)}g.shouldTrackUrlChange=function(a,b){return!(!a||!b)};g.remove=function(){y(history,"pushState",this.H);y(history,"replaceState",this.I);window.removeEventListener("popstate",this.C)};G("urlChangeTracker",Ya);})();
/**
 * Minified by jsDelivr using UglifyJS v3.0.24.
 * Original file: /npm/js-cookie@2.2.0/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var f in i)i[f]&&(s+="; "+f,!0!==i[f]&&(s+="="+i[f]));return document.cookie=n+"="+r+s}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");this.json||'"'!==C.charAt(0)||(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
(function ($) {
  $(document).on('ready',function() {
    $('input[type="text"].estimator-input').geocomplete({
      country: "us",
      autoselect: false
    }).bind('geocode:result', function(event, result){
      $(this).next().val(result.geometry.location.lat());
      $(this).next().next().val(result.geometry.location.lng());
      form = $(this).closest('form');
      getGigPrice(form);
    }).on('click', function() {
      $(this).select();
    });
    $('select.estimator-input').on('change',function() {
      form = $(this).closest('form');
      getGigPrice(form);
    });
    $('.estimator-submit').click(function() {
      form = $(this).closest('form');
      getGigData(form);
      Analytics.trackEstimator('sent', data);
      return true;
    })
    function getGigData(form) {
      fromLat = form.find('.estimator-origin-lat');
      fromLng = form.find('.estimator-origin-lng');
      toLat = form.find('.estimator-destination-lat');
      toLng = form.find('.estimator-destination-lng');
      size = form.find('select');
      if (fromLat === 'undefined' || !fromLat.val() ||
          fromLng === 'undefined' || !fromLng.val() ||
          toLat === 'undefined' || !toLat.val() ||
          toLng === 'undefined' || !toLng.val() ||
          size === 'undefined' || !size.val())
          return null;
      if (size.val() === 'pet')
        var category = 'pet';
      else
        var category = 'shipment';
      var data = {
          category: category,
          size: size.val(),
          decline_insurance: false,
          pickup_location: {
            latitude: fromLat.val(),
            longitude: fromLng.val(),
            address: form.find('.estimator-origin input:first-of-type').val()
          },
          delivery_location: {
            latitude: toLat.val(),
            longitude: toLng.val(),
            address: form.find('.estimator-destination input:first-of-type').val()
          }
      };
      return data;
    }
    function getGigPrice(form, skip_tracking) {
      if(!skip_tracking) {
        skip_tracking = false;
      }
      submitBtn = form.find('.estimator-submit');
      submitBtnPrice = submitBtn.find('.number');
      var data = getGigData(form);
      if(!data) {
        return;
      }
      submitBtn.removeClass('error');
      submitBtn.addClass('loading');
      if(typeof estimateRequest !== 'undefined')
        estimateRequest.abort();
      var ajaxurl = 'https://api.roadie.com/gigs/estimate/';
      estimateRequest = $.ajax({
        headers: {
          ACCEPT: "version=3"
        },
        method: 'POST',
        url: ajaxurl,
        data: data,
        success: function(response){
          submitBtnPrice.text(response.total_price);
          submitBtn.removeClass('loading');
          if(skip_tracking === false) {
            Analytics.trackEstimator('generated', data, response.total_price);
          }
        },
        error: function(response) {
          submitBtn.removeClass('loading').addClass('error');
        }
      });
   }
   $('form.estimator-form').each(function() {
     getGigPrice($(this), true);
   });
  });
})(jQuery);
/**
 * Assumes an iframe formatted like the following:
 * <iframe src="about:blank" data-src="https://go.pardot.com/l/529592/2018-04-23/2wl6yy"></iframe>
 * The source needs to change and if the original src is preloaded, Pardot will not recognize the new query string
 *
 * Requires Cookie.js (included) and jQuery (not included)
 */
 function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var pardotFixes = (function($) {
    var t = {};
    t.checkQueryString = function() {
        var params = {
            'utm_content': null,
            'utm_term': null,
            'utm_campaign': null,
            'utm_medium': null,
            'utm_source': null
        };
        var utms = [];
        var utm_exists = false;
        for(var i in params) {
            var param = getParameterByName(i);
            if(!param) {
                continue;
            }
            utm_exists = true;
            utms.push(i + '=' + param);
        }
        if(!utm_exists) {
            return false;
        }
        return utms.join('&');
    };
    t.updateIframes = function() {
        var utm_cookie = t.checkQueryString();
        if(!utm_cookie) {
            utm_cookie = Cookies.get('utm_query');
        }
        if(utm_cookie) {
            Cookies.set('utm_query', utm_cookie);
            if(utm_cookie.substr(0, 1) === '&') {
                utm_cookie = utm_cookie.substr(1, utm_cookie.length - 1);
            }
        }
        $("iframe.pardotform").each(function(e) {
            var iframe = $(this);
            var src = iframe.attr('src');
            if(src.indexOf('?') == -1) {
                src = src + '?';
            } else {
                src = src + '&';
            }
            if(utm_cookie) {
                src = src + utm_cookie;
            }
            src = src + '&Conversion_Page_URL=' + encodeURIComponent(window.location.href);
            var iframe_clone = iframe.clone();
            iframe_clone.attr('src', src);
            iframe.before(iframe_clone);
            iframe.remove();
        });
    };
    t.init = function() {
        t.updateIframes();
    };
    return t;
})(jQuery);
jQuery(function() {
    pardotFixes.init();
});
function trackStateChange(title, url) {
  history.pushState({}, title, url); //History API
  ga('send', 'pageview', url); //Google Analytics Pageview
  piTracker(url); //Pardot Pageview
}
(function ($) {
    function setSlickCarouselHeight() {
      var carouselHeight = -1;
      $('.slick.carousel .slick-slide').each(function() {
        carouselHeight = carouselHeight > $(this).height() ? carouselHeight : $(this).height();
      });
      $('.slick.carousel .slick-slide').each(function() {
        $(this).height(carouselHeight);
      });
    }
    function setSlickBoxHeight() {
      var maxHeight = -1;
      $('.slick.boxes li').each(function() {
        $(this).css('height','auto');
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
      });
       $('.slick.boxes li').each(function() {
         $(this).height(maxHeight);
       });
      $('.slides').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
      });
    }
  $(document).on('ready',function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    $('iframe.pardotform').iFrameResize({
      log: true
    });
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll === 0) {
        $("body").removeClass("scrolled");
      } else {
        $("body").addClass("scrolled");
      }
    });
    $(window).scroll();
    $('a#back-to-top').on('click',function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    })
    $('.nav-toggle, .sliding-panel-fade-screen').on('click',function() {
      $('body').toggleClass('nav-open');
      $('html').toggleClass('noscroll');
    });
    $('#mobile-primary-replacement a[href="' + window.location + '"]').addClass('active');
    $('a[href^="https://www.youtube.com"]').each(function() {
      $(this).addClass('video-link');
    });
    $('a[href^="https://youtube.com"]').each(function() {
      $(this).addClass('video-link');
    });
    $('a[href^="https://www.vimeo.com"]').each(function() {
      $(this).addClass('video-link');
    });
    $('a[href^="https://vimeo.com"]').each(function() {
      $(this).addClass('video-link');
    });
    $('a.video-link').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    $('.fullbleed').closest('.cols').addClass('with-fullbleed');
    $('.col.left.type-image').parent('.cols').addClass('w-image-first');
    /* tabs */
    $('.slick.tabs').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      appendDots: '.tabs-navigation',
      fade: true,
      customPaging: function(slider, i) {
        var title = $(slider.$slides[i]).attr('data-title');
        var output = '<a>';
        output += '<span class=title>'+title+'</span></a>';
        return output;
      }
    });
    /* carousels */
    $('.slick.carousel').slick({
      dots: false,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      fade: true
    });
    $('.slick.boxes.dont-push-it').slick({
      arrows: true,
      dots: false,
      prevArrow: '#prev-arrow',
      nextArrow: '#next-arrow',
      slidesToShow: 3,
      slidesToScroll: 3,
      slide: '.slide',
      fade: false,
      responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.slick.boxes.push-it').slick({
      arrows: true,
      dots: false,
      prevArrow: '#prev-arrow',
      nextArrow: '#next-arrow',
      slidesToShow: 3,
      slidesToScroll: 3,
      slide: '.slide',
      fade: false,
      responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $(window).on('resize orientationchange', function(e) {
      var resizeTimer;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        setSlickBoxHeight();
        setSlickCarouselHeight();
      }, 500);
    });
    $('.js-accordion-trigger').bind('click', function() {
      $(this).parent().find('.submenu').slideToggle(350); // Apply toggle to ul
      $(this).parent().toggleClass('is-expanded');
    });
    var floatlabels = new FloatLabels( 'form:not(.no-float-label)', {
        style: 1
    });
    jQuery(document).bind('gform_post_render', function(){
       var floatlabels = new FloatLabels( 'form', {
          style: 1,
          prioritize: 'placeholder'
      });
    });
    $('li.has-menu-dropdown').hoverIntent(function(e) {
      var id = $(this).attr('id');
      var menu = $('#dropdown-for-' + id);
      $('.menu-dropdown').removeClass('is-visible');
      menu.addClass('is-visible');
      $(document).trigger('lazyStart');
    });
    $('header#site-header').on('mouseleave',function(e) {
      $('.menu-dropdown').removeClass('is-visible');
    });
    $(document).on('lazyStart', function() {
      $('.menu-lazy').lazy({
          bind: "event",
          delay: 0,
      });
    });
    if ($('.dropdown').length) {
      $('.dropdown-container').removeClass('open');
      $('.dropdown-menu').removeClass('show-menu');
      $(".dropdown-button").click(function(e) {
        e.stopPropagation();
        var $button, $menu, $otherMenu, $container, $otherContainer;
        $button = $(this);
        $container = $(this).closest(".dropdown-container");
        $otherContainer = $button.closest(".dropdown").siblings(".dropdown").find(".dropdown-container");
        $menu = $button.siblings(".dropdown-menu");
        $otherMenu = $button.closest(".dropdown").siblings(".dropdown").find(".dropdown-menu");
        $container.toggleClass("open");
        $menu.toggleClass("show-menu");
          $otherContainer.removeClass("open");
          $otherMenu.removeClass("show-menu");
        $menu.children("li").click(function(e) {
          e.stopPropagation();
          $menu.removeClass("show-menu");
          $container.removeClass("open");
          $button.html($(this).html());
        });
      });
      $(document).click(function(){
        $('.dropdown-container').removeClass("open");
        $('.dropdown-menu').removeClass("show-menu");
      });
    }
    function flip()
  	{
  		var flipCards = $('.team').children('li');
  		if (flipCards.length > 1)
  		{
  			randCard = Math.floor(Math.random() * flipCards.length);
  			var card = flipCards[randCard];
  			$(card).toggleClass('flipped');
  		}
  	};
  	setInterval(flip, 3000);
    if ($(window).width() > 830) {
      $('#follow').simpleScrollFollow({
        limit_elem : $('#page-content article')
      });
    }
    var $allVideos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='https://www.youtube.com']");
    $allVideos.each(function() {
      $(this).wrap('<div class="video-container"></div>');
    });
    function abortExisting() {
      if(!$.isEmptyObject(request)) {
        request.abort();
      }
    }
    function receiveHTML(data) {
      $('.ajax-incoming').html( $(data).find('.ajax-incoming').html() );
      $(".ajax-load-more-wrap").ajaxloadmore();
    }
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    function repopulateFilterElements() {
      var s = getParameterByName('s');
      var topic = getParameterByName('topic');
      var type = getParameterByName('type');
      if ( s ) {
        $('#s').val(s);
        $('.dropdown').attr('data-currentfilter', 'all');
        $('.dropdown .dropdown-button').html('All Types');
      }
      if ( topic ) {
        $('.dropdown[data-filterby="topic"]').attr('data-currentfilter', topic);
        $('.dropdown[data-filterby="topic"] .dropdown-button').html($('.dropdown[data-filterby="topic"] li[data-filter="' + topic + '"]').html());
      }
      if ( type ) {
        $('.dropdown[data-filterby="type"]').attr('data-currentfilter', type);
        $('.dropdown[data-filterby="type"] .dropdown-button').html($('.dropdown[data-filterby="type"] li[data-filter="' + type + '"]').html());
      }
    }
    var request = {};
    if ($('.ajax-filters').length) {
      $('.ajax-filters .dropdown-menu li').click(function() {
        var $dropdown = $(this).closest('.dropdown');
        var $selected = $(this);
        var filterKey = $dropdown.data('filterby');
        var filterVal = $selected.data('filter');
        var pathname = window.location.pathname.replace(/page.+\//,"");
          if (pathname == '/') { pathname = '/resources/'}
          var query = {};
          query[filterKey] = filterVal;
        $dropdown.data('currentfilter', filterVal);
        if ($dropdown.closest('.ajax-filters').hasClass('dual-filter')) {
          if ($dropdown.hasClass('first')) {
            $siblingDropdown = $('.dropdown.second');
          }
          if ($dropdown.hasClass('second')) {
            $siblingDropdown = $('.dropdown.first');
          }
          var siblingFilterKey = $siblingDropdown.data('filterby');
          var siblingFilterVal = $siblingDropdown.data('currentfilter');
          var query = {};
          query[siblingFilterKey] = siblingFilterVal;
          query[filterKey] = filterVal;
        }
        if ( filterVal ) {
            $('.ajax-incoming').html( '<div class="spinner"></div>');
          if ($('#searchform').length) {
            $('.searchfield').val('');
          }
          var title = 'Resources - Roadie';
          var queryString = '?' + $.param(query);
          trackStateChange(title, pathname + queryString);
          abortExisting();
          request = $.get(pathname, query)
          .done(function(data) {
            receiveHTML(data);
            request = {};
          });
        }
      })
    }
    if ($('#searchform').length) {
      $('#searchform').submit(function( e ){
        e.preventDefault();
        var term = $('#s').val();
        if ( term ){
          $('.dropdown.first a.dropdown-button').html('All Topics');
          $('.dropdown.second a.dropdown-button').html('All Types');
          var title = 'Resources - Roadie';
          trackStateChange(title, '/?s=' + term);
            $('.ajax-incoming').html( '<div class="spinner"></div>');
          abortExisting();
          request = $.get( '/', { s: term })
          .done(function(data) {
            receiveHTML(data);
            request = {};
          });
        }
      });
      $('#s').on( 'keyup', function(e){
        var s = getParameterByName('s');
        if (s) {
          if ( e.keyCode == 8 || e.keyCode == 46 ) {
            if ( $(this).val() == '' ) {
              var title = 'Resources - Roadie';
              trackStateChange(title, '/resources');
              $('.ajax-incoming').html( '<div class="spinner"></div>');
              abortExisting();
              request = $.get( 'resources')
              .done(function(data) {
                receiveHTML(data);
                request = {};
              });
            }
          }
        }
      });
    }
    window.onpopstate = function(event) {
      $('.ajax-incoming .posts').fadeOut(300, function() {
        $('.ajax-incoming').html( '<div class="spinner"></div>');
      })
      abortExisting();
      request = $.get(window.location)
      .done(function( data ){
        receiveHTML(data);
        repopulateFilterElements();
        request = {};
      });
    };
    $('#show-site-search').magnificPopup({
      items: {
        src: '#site-searchform',
        type: 'inline'
      }
    });
    $('#marc-bio-button').magnificPopup({
      items: {
        src: '#marc-bio',
        type: 'inline'
      }
    });
  });
  $(window).load(function() {
    setSlickCarouselHeight();
    setSlickBoxHeight();
    $('.menu-lazy, .lazy').lazy({
      bind: "event",
      delay: 0,
    });
  })
  if ($('body').hasClass('role-driver')) {
    $('ul#menu-header-account a[href$="app.roadie.com/registrations/new"]').each(function(){
      var newUrl = $(this).attr('href').replace('app.roadie.com/registrations/new', 'drive.roadie.com/signup');
      $(this).attr('href', newUrl);
    });
    $('ul#menu-header-account a[href$="app.roadie.com/"]').each(function(){
      var newUrl = $(this).attr('href').replace('app.roadie.com/', 'drive.roadie.com/');
      $(this).attr('href', newUrl);
    });
  }
})(jQuery);
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
/* Cycle2 core engine */
;(function($) {
"use strict";
var version = '2.1.6';
$.fn.cycle = function( options ) {
    var o;
    if ( this.length === 0 && !$.isReady ) {
        o = { s: this.selector, c: this.context };
        $.fn.cycle.log('requeuing slideshow (dom not ready)');
        $(function() {
            $( o.s, o.c ).cycle(options);
        });
        return this;
    }
    return this.each(function() {
        var data, opts, shortName, val;
        var container = $(this);
        var log = $.fn.cycle.log;
        if ( container.data('cycle.opts') )
            return; // already initialized
        if ( container.data('cycle-log') === false || 
            ( options && options.log === false ) ||
            ( opts && opts.log === false) ) {
            log = $.noop;
        }
        log('--c2 init--');
        data = container.data();
        for (var p in data) {
            if (data.hasOwnProperty(p) && /^cycle[A-Z]+/.test(p) ) {
                val = data[p];
                shortName = p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, lowerCase);
                log(shortName+':', val, '('+typeof val +')');
                data[shortName] = val;
            }
        }
        opts = $.extend( {}, $.fn.cycle.defaults, data, options || {});
        opts.timeoutId = 0;
        opts.paused = opts.paused || false; // #57
        opts.container = container;
        opts._maxZ = opts.maxZ;
        opts.API = $.extend ( { _container: container }, $.fn.cycle.API );
        opts.API.log = log;
        opts.API.trigger = function( eventName, args ) {
            opts.container.trigger( eventName, args );
            return opts.API;
        };
        container.data( 'cycle.opts', opts );
        container.data( 'cycle.API', opts.API );
        opts.API.trigger('cycle-bootstrap', [ opts, opts.API ]);
        opts.API.addInitialSlides();
        opts.API.preInitSlideshow();
        if ( opts.slides.length )
            opts.API.initSlideshow();
    });
};
$.fn.cycle.API = {
    opts: function() {
        return this._container.data( 'cycle.opts' );
    },
    addInitialSlides: function() {
        var opts = this.opts();
        var slides = opts.slides;
        opts.slideCount = 0;
        opts.slides = $(); // empty set
        slides = slides.jquery ? slides : opts.container.find( slides );
        if ( opts.random ) {
            slides.sort(function() {return Math.random() - 0.5;});
        }
        opts.API.add( slides );
    },
    preInitSlideshow: function() {
        var opts = this.opts();
        opts.API.trigger('cycle-pre-initialize', [ opts ]);
        var tx = $.fn.cycle.transitions[opts.fx];
        if (tx && $.isFunction(tx.preInit))
            tx.preInit( opts );
        opts._preInitialized = true;
    },
    postInitSlideshow: function() {
        var opts = this.opts();
        opts.API.trigger('cycle-post-initialize', [ opts ]);
        var tx = $.fn.cycle.transitions[opts.fx];
        if (tx && $.isFunction(tx.postInit))
            tx.postInit( opts );
    },
    initSlideshow: function() {
        var opts = this.opts();
        var pauseObj = opts.container;
        var slideOpts;
        opts.API.calcFirstSlide();
        if ( opts.container.css('position') == 'static' )
            opts.container.css('position', 'relative');
        $(opts.slides[opts.currSlide]).css({
            opacity: 1,
            display: 'block',
            visibility: 'visible'
        });
        opts.API.stackSlides( opts.slides[opts.currSlide], opts.slides[opts.nextSlide], !opts.reverse );
        if ( opts.pauseOnHover ) {
            if ( opts.pauseOnHover !== true )
                pauseObj = $( opts.pauseOnHover );
            pauseObj.hover(
                function(){ opts.API.pause( true ); }, 
                function(){ opts.API.resume( true ); }
            );
        }
        if ( opts.timeout ) {
            slideOpts = opts.API.getSlideOpts( opts.currSlide );
            opts.API.queueTransition( slideOpts, slideOpts.timeout + opts.delay );
        }
        opts._initialized = true;
        opts.API.updateView( true );
        opts.API.trigger('cycle-initialized', [ opts ]);
        opts.API.postInitSlideshow();
    },
    pause: function( hover ) {
        var opts = this.opts(),
            slideOpts = opts.API.getSlideOpts(),
            alreadyPaused = opts.hoverPaused || opts.paused;
        if ( hover )
            opts.hoverPaused = true; 
        else
            opts.paused = true;
        if ( ! alreadyPaused ) {
            opts.container.addClass('cycle-paused');
            opts.API.trigger('cycle-paused', [ opts ]).log('cycle-paused');
            if ( slideOpts.timeout ) {
                clearTimeout( opts.timeoutId );
                opts.timeoutId = 0;
                opts._remainingTimeout -= ( $.now() - opts._lastQueue );
                if ( opts._remainingTimeout < 0 || isNaN(opts._remainingTimeout) )
                    opts._remainingTimeout = undefined;
            }
        }
    },
    resume: function( hover ) {
        var opts = this.opts(),
            alreadyResumed = !opts.hoverPaused && !opts.paused,
            remaining;
        if ( hover )
            opts.hoverPaused = false; 
        else
            opts.paused = false;
        if ( ! alreadyResumed ) {
            opts.container.removeClass('cycle-paused');
            if ( opts.slides.filter(':animated').length === 0 )
                opts.API.queueTransition( opts.API.getSlideOpts(), opts._remainingTimeout );
            opts.API.trigger('cycle-resumed', [ opts, opts._remainingTimeout ] ).log('cycle-resumed');
        }
    },
    add: function( slides, prepend ) {
        var opts = this.opts();
        var oldSlideCount = opts.slideCount;
        var startSlideshow = false;
        var len;
        if ( $.type(slides) == 'string')
            slides = $.trim( slides );
        $( slides ).each(function(i) {
            var slideOpts;
            var slide = $(this);
            if ( prepend )
                opts.container.prepend( slide );
            else
                opts.container.append( slide );
            opts.slideCount++;
            slideOpts = opts.API.buildSlideOpts( slide );
            if ( prepend )
                opts.slides = $( slide ).add( opts.slides );
            else
                opts.slides = opts.slides.add( slide );
            opts.API.initSlide( slideOpts, slide, --opts._maxZ );
            slide.data('cycle.opts', slideOpts);
            opts.API.trigger('cycle-slide-added', [ opts, slideOpts, slide ]);
        });
        opts.API.updateView( true );
        startSlideshow = opts._preInitialized && (oldSlideCount < 2 && opts.slideCount >= 1);
        if ( startSlideshow ) {
            if ( !opts._initialized )
                opts.API.initSlideshow();
            else if ( opts.timeout ) {
                len = opts.slides.length;
                opts.nextSlide = opts.reverse ? len - 1 : 1;
                if ( !opts.timeoutId ) {
                    opts.API.queueTransition( opts );
                }
            }
        }
    },
    calcFirstSlide: function() {
        var opts = this.opts();
        var firstSlideIndex;
        firstSlideIndex = parseInt( opts.startingSlide || 0, 10 );
        if (firstSlideIndex >= opts.slides.length || firstSlideIndex < 0)
            firstSlideIndex = 0;
        opts.currSlide = firstSlideIndex;
        if ( opts.reverse ) {
            opts.nextSlide = firstSlideIndex - 1;
            if (opts.nextSlide < 0)
                opts.nextSlide = opts.slides.length - 1;
        }
        else {
            opts.nextSlide = firstSlideIndex + 1;
            if (opts.nextSlide == opts.slides.length)
                opts.nextSlide = 0;
        }
    },
    calcNextSlide: function() {
        var opts = this.opts();
        var roll;
        if ( opts.reverse ) {
            roll = (opts.nextSlide - 1) < 0;
            opts.nextSlide = roll ? opts.slideCount - 1 : opts.nextSlide-1;
            opts.currSlide = roll ? 0 : opts.nextSlide+1;
        }
        else {
            roll = (opts.nextSlide + 1) == opts.slides.length;
            opts.nextSlide = roll ? 0 : opts.nextSlide+1;
            opts.currSlide = roll ? opts.slides.length-1 : opts.nextSlide-1;
        }
    },
    calcTx: function( slideOpts, manual ) {
        var opts = slideOpts;
        var tx;
        if ( opts._tempFx )
            tx = $.fn.cycle.transitions[opts._tempFx];
        else if ( manual && opts.manualFx )
            tx = $.fn.cycle.transitions[opts.manualFx];
        if ( !tx )
            tx = $.fn.cycle.transitions[opts.fx];
        opts._tempFx = null;
        this.opts()._tempFx = null;
        if (!tx) {
            tx = $.fn.cycle.transitions.fade;
            opts.API.log('Transition "' + opts.fx + '" not found.  Using fade.');
        }
        return tx;
    },
    prepareTx: function( manual, fwd ) {
        var opts = this.opts();
        var after, curr, next, slideOpts, tx;
        if ( opts.slideCount < 2 ) {
            opts.timeoutId = 0;
            return;
        }
        if ( manual && ( !opts.busy || opts.manualTrump ) ) {
            opts.API.stopTransition();
            opts.busy = false;
            clearTimeout(opts.timeoutId);
            opts.timeoutId = 0;
        }
        if ( opts.busy )
            return;
        if ( opts.timeoutId === 0 && !manual )
            return;
        curr = opts.slides[opts.currSlide];
        next = opts.slides[opts.nextSlide];
        slideOpts = opts.API.getSlideOpts( opts.nextSlide );
        tx = opts.API.calcTx( slideOpts, manual );
        opts._tx = tx;
        if ( manual && slideOpts.manualSpeed !== undefined )
            slideOpts.speed = slideOpts.manualSpeed;
        if ( opts.nextSlide != opts.currSlide && 
            (manual || (!opts.paused && !opts.hoverPaused && opts.timeout) )) { // #62
            opts.API.trigger('cycle-before', [ slideOpts, curr, next, fwd ]);
            if ( tx.before )
                tx.before( slideOpts, curr, next, fwd );
            after = function() {
                opts.busy = false;
                if (! opts.container.data( 'cycle.opts' ) )
                    return;
                if (tx.after)
                    tx.after( slideOpts, curr, next, fwd );
                opts.API.trigger('cycle-after', [ slideOpts, curr, next, fwd ]);
                opts.API.queueTransition( slideOpts);
                opts.API.updateView( true );
            };
            opts.busy = true;
            if (tx.transition)
                tx.transition(slideOpts, curr, next, fwd, after);
            else
                opts.API.doTransition( slideOpts, curr, next, fwd, after);
            opts.API.calcNextSlide();
            opts.API.updateView();
        } else {
            opts.API.queueTransition( slideOpts );
        }
    },
    doTransition: function( slideOpts, currEl, nextEl, fwd, callback) {
        var opts = slideOpts;
        var curr = $(currEl), next = $(nextEl);
        var fn = function() {
            next.animate(opts.animIn || { opacity: 1}, opts.speed, opts.easeIn || opts.easing, callback);
        };
        next.css(opts.cssBefore || {});
        curr.animate(opts.animOut || {}, opts.speed, opts.easeOut || opts.easing, function() {
            curr.css(opts.cssAfter || {});
            if (!opts.sync) {
                fn();
            }
        });
        if (opts.sync) {
            fn();
        }
    },
    queueTransition: function( slideOpts, specificTimeout ) {
        var opts = this.opts();
        var timeout = specificTimeout !== undefined ? specificTimeout : slideOpts.timeout;
        if (opts.nextSlide === 0 && --opts.loop === 0) {
            opts.API.log('terminating; loop=0');
            opts.timeout = 0;
            if ( timeout ) {
                setTimeout(function() {
                    opts.API.trigger('cycle-finished', [ opts ]);
                }, timeout);
            }
            else {
                opts.API.trigger('cycle-finished', [ opts ]);
            }
            opts.nextSlide = opts.currSlide;
            return;
        }
        if ( opts.continueAuto !== undefined ) {
            if ( opts.continueAuto === false || 
                ($.isFunction(opts.continueAuto) && opts.continueAuto() === false )) {
                opts.API.log('terminating automatic transitions');
                opts.timeout = 0;
                if ( opts.timeoutId )
                    clearTimeout(opts.timeoutId);
                return;
            }
        }
        if ( timeout ) {
            opts._lastQueue = $.now();
            if ( specificTimeout === undefined )
                opts._remainingTimeout = slideOpts.timeout;
            if ( !opts.paused && ! opts.hoverPaused ) {
                opts.timeoutId = setTimeout(function() { 
                    opts.API.prepareTx( false, !opts.reverse ); 
                }, timeout );
            }
        }
    },
    stopTransition: function() {
        var opts = this.opts();
        if ( opts.slides.filter(':animated').length ) {
            opts.slides.stop(false, true);
            opts.API.trigger('cycle-transition-stopped', [ opts ]);
        }
        if ( opts._tx && opts._tx.stopTransition )
            opts._tx.stopTransition( opts );
    },
    advanceSlide: function( val ) {
        var opts = this.opts();
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.nextSlide = opts.currSlide + val;
        if (opts.nextSlide < 0)
            opts.nextSlide = opts.slides.length - 1;
        else if (opts.nextSlide >= opts.slides.length)
            opts.nextSlide = 0;
        opts.API.prepareTx( true,  val >= 0 );
        return false;
    },
    buildSlideOpts: function( slide ) {
        var opts = this.opts();
        var val, shortName;
        var slideOpts = slide.data() || {};
        for (var p in slideOpts) {
            if (slideOpts.hasOwnProperty(p) && /^cycle[A-Z]+/.test(p) ) {
                val = slideOpts[p];
                shortName = p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, lowerCase);
                opts.API.log('['+(opts.slideCount-1)+']', shortName+':', val, '('+typeof val +')');
                slideOpts[shortName] = val;
            }
        }
        slideOpts = $.extend( {}, $.fn.cycle.defaults, opts, slideOpts );
        slideOpts.slideNum = opts.slideCount;
        try {
            delete slideOpts.API;
            delete slideOpts.slideCount;
            delete slideOpts.currSlide;
            delete slideOpts.nextSlide;
            delete slideOpts.slides;
        } catch(e) {
        }
        return slideOpts;
    },
    getSlideOpts: function( index ) {
        var opts = this.opts();
        if ( index === undefined )
            index = opts.currSlide;
        var slide = opts.slides[index];
        var slideOpts = $(slide).data('cycle.opts');
        return $.extend( {}, opts, slideOpts );
    },
    initSlide: function( slideOpts, slide, suggestedZindex ) {
        var opts = this.opts();
        slide.css( slideOpts.slideCss || {} );
        if ( suggestedZindex > 0 )
            slide.css( 'zIndex', suggestedZindex );
        if ( isNaN( slideOpts.speed ) )
            slideOpts.speed = $.fx.speeds[slideOpts.speed] || $.fx.speeds._default;
        if ( !slideOpts.sync )
            slideOpts.speed = slideOpts.speed / 2;
        slide.addClass( opts.slideClass );
    },
    updateView: function( isAfter, isDuring, forceEvent ) {
        var opts = this.opts();
        if ( !opts._initialized )
            return;
        var slideOpts = opts.API.getSlideOpts();
        var currSlide = opts.slides[ opts.currSlide ];
        if ( ! isAfter && isDuring !== true ) {
            opts.API.trigger('cycle-update-view-before', [ opts, slideOpts, currSlide ]);
            if ( opts.updateView < 0 )
                return;
        }
        if ( opts.slideActiveClass ) {
            opts.slides.removeClass( opts.slideActiveClass )
                .eq( opts.currSlide ).addClass( opts.slideActiveClass );
        }
        if ( isAfter && opts.hideNonActive )
            opts.slides.filter( ':not(.' + opts.slideActiveClass + ')' ).css('visibility', 'hidden');
        if ( opts.updateView === 0 ) {
            setTimeout(function() {
                opts.API.trigger('cycle-update-view', [ opts, slideOpts, currSlide, isAfter ]);
            }, slideOpts.speed / (opts.sync ? 2 : 1) );
        }
        if ( opts.updateView !== 0 )
            opts.API.trigger('cycle-update-view', [ opts, slideOpts, currSlide, isAfter ]);
        if ( isAfter )
            opts.API.trigger('cycle-update-view-after', [ opts, slideOpts, currSlide ]);
    },
    getComponent: function( name ) {
        var opts = this.opts();
        var selector = opts[name];
        if (typeof selector === 'string') {
            return (/^\s*[\>|\+|~]/).test( selector ) ? opts.container.find( selector ) : $( selector );
        }
        if (selector.jquery)
            return selector;
        return $(selector);
    },
    stackSlides: function( curr, next, fwd ) {
        var opts = this.opts();
        if ( !curr ) {
            curr = opts.slides[opts.currSlide];
            next = opts.slides[opts.nextSlide];
            fwd = !opts.reverse;
        }
        $(curr).css('zIndex', opts.maxZ);
        var i;
        var z = opts.maxZ - 2;
        var len = opts.slideCount;
        if (fwd) {
            for ( i = opts.currSlide + 1; i < len; i++ )
                $( opts.slides[i] ).css( 'zIndex', z-- );
            for ( i = 0; i < opts.currSlide; i++ )
                $( opts.slides[i] ).css( 'zIndex', z-- );
        }
        else {
            for ( i = opts.currSlide - 1; i >= 0; i-- )
                $( opts.slides[i] ).css( 'zIndex', z-- );
            for ( i = len - 1; i > opts.currSlide; i-- )
                $( opts.slides[i] ).css( 'zIndex', z-- );
        }
        $(next).css('zIndex', opts.maxZ - 1);
    },
    getSlideIndex: function( el ) {
        return this.opts().slides.index( el );
    }
}; // API
$.fn.cycle.log = function log() {
    /*global console:true */
    if (window.console && console.log)
        console.log('[cycle2] ' + Array.prototype.join.call(arguments, ' ') );
};
$.fn.cycle.version = function() { return 'Cycle2: ' + version; };
function lowerCase(s) {
    return (s || '').toLowerCase();
}
$.fn.cycle.transitions = {
    custom: {
    },
    none: {
        before: function( opts, curr, next, fwd ) {
            opts.API.stackSlides( next, curr, fwd );
            opts.cssBefore = { opacity: 1, visibility: 'visible', display: 'block' };
        }
    },
    fade: {
        before: function( opts, curr, next, fwd ) {
            var css = opts.API.getSlideOpts( opts.nextSlide ).slideCss || {};
            opts.API.stackSlides( curr, next, fwd );
            opts.cssBefore = $.extend(css, { opacity: 0, visibility: 'visible', display: 'block' });
            opts.animIn = { opacity: 1 };
            opts.animOut = { opacity: 0 };
        }
    },
    fadeout: {
        before: function( opts , curr, next, fwd ) {
            var css = opts.API.getSlideOpts( opts.nextSlide ).slideCss || {};
            opts.API.stackSlides( curr, next, fwd );
            opts.cssBefore = $.extend(css, { opacity: 1, visibility: 'visible', display: 'block' });
            opts.animOut = { opacity: 0 };
        }
    },
    scrollHorz: {
        before: function( opts, curr, next, fwd ) {
            opts.API.stackSlides( curr, next, fwd );
            var w = opts.container.css('overflow','hidden').width();
            opts.cssBefore = { left: fwd ? w : - w, top: 0, opacity: 1, visibility: 'visible', display: 'block' };
            opts.cssAfter = { zIndex: opts._maxZ - 2, left: 0 };
            opts.animIn = { left: 0 };
            opts.animOut = { left: fwd ? -w : w };
        }
    }
};
$.fn.cycle.defaults = {
    allowWrap:        true,
    autoSelector:     '.cycle-slideshow[data-cycle-auto-init!=false]',
    delay:            0,
    easing:           null,
    fx:              'fade',
    hideNonActive:    true,
    loop:             0,
    manualFx:         undefined,
    manualSpeed:      undefined,
    manualTrump:      true,
    maxZ:             100,
    pauseOnHover:     false,
    reverse:          false,
    slideActiveClass: 'cycle-slide-active',
    slideClass:       'cycle-slide',
    slideCss:         { position: 'absolute', top: 0, left: 0 },
    slides:          '> img',
    speed:            500,
    startingSlide:    0,
    sync:             true,
    timeout:          4000,
    updateView:       0
};
$(document).ready(function() {
    $( $.fn.cycle.defaults.autoSelector ).cycle();
});
})(jQuery);
/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    autoHeight: 0, // setting this option to false disables autoHeight logic
    autoHeightSpeed: 250,
    autoHeightEasing: null
});    
$(document).on( 'cycle-initialized', function( e, opts ) {
    var autoHeight = opts.autoHeight;
    var t = $.type( autoHeight );
    var resizeThrottle = null;
    var ratio;
    if ( t !== 'string' && t !== 'number' )
        return;
    opts.container.on( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
    opts.container.on( 'cycle-destroyed', onDestroy );
    if ( autoHeight == 'container' ) {
        opts.container.on( 'cycle-before', onBefore );
    }
    else if ( t === 'string' && /\d+\:\d+/.test( autoHeight ) ) { 
        ratio = autoHeight.match(/(\d+)\:(\d+)/);
        ratio = ratio[1] / ratio[2];
        opts._autoHeightRatio = ratio;
    }
    if ( t !== 'number' ) {
        opts._autoHeightOnResize = function () {
            clearTimeout( resizeThrottle );
            resizeThrottle = setTimeout( onResize, 50 );
        };
        $(window).on( 'resize orientationchange', opts._autoHeightOnResize );
    }
    setTimeout( onResize, 30 );
    function onResize() {
        initAutoHeight( e, opts );
    }
});
function initAutoHeight( e, opts ) {
    var clone, height, sentinelIndex;
    var autoHeight = opts.autoHeight;
    if ( autoHeight == 'container' ) {
        height = $( opts.slides[ opts.currSlide ] ).outerHeight();
        opts.container.height( height );
    }
    else if ( opts._autoHeightRatio ) { 
        opts.container.height( opts.container.width() / opts._autoHeightRatio );
    }
    else if ( autoHeight === 'calc' || ( $.type( autoHeight ) == 'number' && autoHeight >= 0 ) ) {
        if ( autoHeight === 'calc' )
            sentinelIndex = calcSentinelIndex( e, opts );
        else if ( autoHeight >= opts.slides.length )
            sentinelIndex = 0;
        else 
            sentinelIndex = autoHeight;
        if ( sentinelIndex == opts._sentinelIndex )
            return;
        opts._sentinelIndex = sentinelIndex;
        if ( opts._sentinel )
            opts._sentinel.remove();
        clone = $( opts.slides[ sentinelIndex ].cloneNode(true) );
        clone.removeAttr( 'id name rel' ).find( '[id],[name],[rel]' ).removeAttr( 'id name rel' );
        clone.css({
            position: 'static',
            visibility: 'hidden',
            display: 'block'
        }).prependTo( opts.container ).addClass('cycle-sentinel cycle-slide').removeClass('cycle-slide-active');
        clone.find( '*' ).css( 'visibility', 'hidden' );
        opts._sentinel = clone;
    }
}    
function calcSentinelIndex( e, opts ) {
    var index = 0, max = -1;
    opts.slides.each(function(i) {
        var h = $(this).height();
        if ( h > max ) {
            max = h;
            index = i;
        }
    });
    return index;
}
function onBefore( e, opts, outgoing, incoming, forward ) {
    var h = $(incoming).outerHeight();
    opts.container.animate( { height: h }, opts.autoHeightSpeed, opts.autoHeightEasing );
}
function onDestroy( e, opts ) {
    if ( opts._autoHeightOnResize ) {
        $(window).off( 'resize orientationchange', opts._autoHeightOnResize );
        opts._autoHeightOnResize = null;
    }
    opts.container.off( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
    opts.container.off( 'cycle-destroyed', onDestroy );
    opts.container.off( 'cycle-before', onBefore );
    if ( opts._sentinel ) {
        opts._sentinel.remove();
        opts._sentinel = null;
    }
}
})(jQuery);
/*! caption plugin for Cycle2;  version: 20130306 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    caption:          '> .cycle-caption',
    captionTemplate:  '{{slideNum}} / {{slideCount}}',
    overlay:          '> .cycle-overlay',
    overlayTemplate:  '<div>{{title}}</div><div>{{desc}}</div>',
    captionModule:    'caption'
});    
$(document).on( 'cycle-update-view', function( e, opts, slideOpts, currSlide ) {
    if ( opts.captionModule !== 'caption' )
        return;
    var el;
    $.each(['caption','overlay'], function() {
        var name = this; 
        var template = slideOpts[name+'Template'];
        var el = opts.API.getComponent( name );
        if( el.length && template ) {
            el.html( opts.API.tmpl( template, slideOpts, opts, currSlide ) );
            el.show();
        }
        else {
            el.hide();
        }
    });
});
$(document).on( 'cycle-destroyed', function( e, opts ) {
    var el;
    $.each(['caption','overlay'], function() {
        var name = this, template = opts[name+'Template'];
        if ( opts[name] && template ) {
            el = opts.API.getComponent( 'caption' );
            el.empty();
        }
    });
});
})(jQuery);
/*! command plugin for Cycle2;  version: 20140415 */
(function($) {
"use strict";
var c2 = $.fn.cycle;
$.fn.cycle = function( options ) {
    var cmd, cmdFn, opts;
    var args = $.makeArray( arguments );
    if ( $.type( options ) == 'number' ) {
        return this.cycle( 'goto', options );
    }
    if ( $.type( options ) == 'string' ) {
        return this.each(function() {
            var cmdArgs;
            cmd = options;
            opts = $(this).data('cycle.opts');
            if ( opts === undefined ) {
                c2.log('slideshow must be initialized before sending commands; "' + cmd + '" ignored');
                return;
            }
            else {
                cmd = cmd == 'goto' ? 'jump' : cmd; // issue #3; change 'goto' to 'jump' internally
                cmdFn = opts.API[ cmd ];
                if ( $.isFunction( cmdFn )) {
                    cmdArgs = $.makeArray( args );
                    cmdArgs.shift();
                    return cmdFn.apply( opts.API, cmdArgs );
                }
                else {
                    c2.log( 'unknown command: ', cmd );
                }
            }
        });
    }
    else {
        return c2.apply( this, arguments );
    }
};
$.extend( $.fn.cycle, c2 );
$.extend( c2.API, {
    next: function() {
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;
        var count = opts.reverse ? -1 : 1;
        if ( opts.allowWrap === false && ( opts.currSlide + count ) >= opts.slideCount )
            return;
        opts.API.advanceSlide( count );
        opts.API.trigger('cycle-next', [ opts ]).log('cycle-next');
    },
    prev: function() {
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;
        var count = opts.reverse ? 1 : -1;
        if ( opts.allowWrap === false && ( opts.currSlide + count ) < 0 )
            return;
        opts.API.advanceSlide( count );
        opts.API.trigger('cycle-prev', [ opts ]).log('cycle-prev');
    },
    destroy: function() {
        this.stop(); //#204
        var opts = this.opts();
        var clean = $.isFunction( $._data ) ? $._data : $.noop;  // hack for #184 and #201
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.API.stop();
        opts.API.trigger( 'cycle-destroyed', [ opts ] ).log('cycle-destroyed');
        opts.container.removeData();
        clean( opts.container[0], 'parsedAttrs', false );
        if ( ! opts.retainStylesOnDestroy ) {
            opts.container.removeAttr( 'style' );
            opts.slides.removeAttr( 'style' );
            opts.slides.removeClass( opts.slideActiveClass );
        }
        opts.slides.each(function() {
            var slide = $(this);
            slide.removeData();
            slide.removeClass( opts.slideClass );
            clean( this, 'parsedAttrs', false );
        });
    },
    jump: function( index, fx ) {
        var fwd;
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;
        var num = parseInt( index, 10 );
        if (isNaN(num) || num < 0 || num >= opts.slides.length) {
            opts.API.log('goto: invalid slide index: ' + num);
            return;
        }
        if (num == opts.currSlide) {
            opts.API.log('goto: skipping, already on slide', num);
            return;
        }
        opts.nextSlide = num;
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.API.log('goto: ', num, ' (zero-index)');
        fwd = opts.currSlide < opts.nextSlide;
        opts._tempFx = fx;
        opts.API.prepareTx( true, fwd );
    },
    stop: function() {
        var opts = this.opts();
        var pauseObj = opts.container;
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.API.stopTransition();
        if ( opts.pauseOnHover ) {
            if ( opts.pauseOnHover !== true )
                pauseObj = $( opts.pauseOnHover );
            pauseObj.off('mouseenter mouseleave');
        }
        opts.API.trigger('cycle-stopped', [ opts ]).log('cycle-stopped');
    },
    reinit: function() {
        var opts = this.opts();
        opts.API.destroy();
        opts.container.cycle();
    },
    remove: function( index ) {
        var opts = this.opts();
        var slide, slideToRemove, slides = [], slideNum = 1;
        for ( var i=0; i < opts.slides.length; i++ ) {
            slide = opts.slides[i];
            if ( i == index ) {
                slideToRemove = slide;
            }
            else {
                slides.push( slide );
                $( slide ).data('cycle.opts').slideNum = slideNum;
                slideNum++;
            }
        }
        if ( slideToRemove ) {
            opts.slides = $( slides );
            opts.slideCount--;
            $( slideToRemove ).remove();
            if (index == opts.currSlide)
                opts.API.advanceSlide( 1 );
            else if ( index < opts.currSlide )
                opts.currSlide--;
            else
                opts.currSlide++;
            opts.API.trigger('cycle-slide-removed', [ opts, index, slideToRemove ]).log('cycle-slide-removed');
            opts.API.updateView();
        }
    }
});
$(document).on('click.cycle', '[data-cycle-cmd]', function(e) {
    e.preventDefault();
    var el = $(this);
    var command = el.data('cycle-cmd');
    var context = el.data('cycle-context') || '.cycle-slideshow';
    $(context).cycle(command, el.data('cycle-arg'));
});
})(jQuery);
/*! hash plugin for Cycle2;  version: 20130905 */
(function($) {
"use strict";
$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    onHashChange( opts, true );
    opts._onHashChange = function() {
        onHashChange( opts, false );
    };
    $( window ).on( 'hashchange', opts._onHashChange);
});
$(document).on( 'cycle-update-view', function( e, opts, slideOpts ) {
    if ( slideOpts.hash && ( '#' + slideOpts.hash ) != window.location.hash ) {
        opts._hashFence = true;
        window.location.hash = slideOpts.hash;
    }
});
$(document).on( 'cycle-destroyed', function( e, opts) {
    if ( opts._onHashChange ) {
        $( window ).off( 'hashchange', opts._onHashChange );
    }
});
function onHashChange( opts, setStartingSlide ) {
    var hash;
    if ( opts._hashFence ) {
        opts._hashFence = false;
        return;
    }
    hash = window.location.hash.substring(1);
    opts.slides.each(function(i) {
        if ( $(this).data( 'cycle-hash' ) == hash ) {
            if ( setStartingSlide === true ) {
                opts.startingSlide = i;
            }
            else {
                var fwd = opts.currSlide < i;
                opts.nextSlide = i;
                opts.API.prepareTx( true, fwd );
            }
            return false;
        }
    });
}
})(jQuery);
/*! loader plugin for Cycle2;  version: 20131121 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    loader: false
});
$(document).on( 'cycle-bootstrap', function( e, opts ) {
    var addFn;
    if ( !opts.loader )
        return;
    addFn = opts.API.add;
    opts.API.add = add;
    function add( slides, prepend ) {
        var slideArr = [];
        if ( $.type( slides ) == 'string' )
            slides = $.trim( slides );
        else if ( $.type( slides) === 'array' ) {
            for (var i=0; i < slides.length; i++ )
                slides[i] = $(slides[i])[0];
        }
        slides = $( slides );
        var slideCount = slides.length;
        if ( ! slideCount )
            return;
        slides.css('visibility','hidden').appendTo('body').each(function(i) { // appendTo fixes #56
            var count = 0;
            var slide = $(this);
            var images = slide.is('img') ? slide : slide.find('img');
            slide.data('index', i);
            images = images.filter(':not(.cycle-loader-ignore)').filter(':not([src=""])');
            if ( ! images.length ) {
                --slideCount;
                slideArr.push( slide );
                return;
            }
            count = images.length;
            images.each(function() {
                if ( this.complete ) {
                    imageLoaded();
                }
                else {
                    $(this).load(function() {
                        imageLoaded();
                    }).on("error", function() {
                        if ( --count === 0 ) {
                            opts.API.log('slide skipped; img not loaded:', this.src);
                            if ( --slideCount === 0 && opts.loader == 'wait') {
                                addFn.apply( opts.API, [ slideArr, prepend ] );
                            }
                        }
                    });
                }
            });
            function imageLoaded() {
                if ( --count === 0 ) {
                    --slideCount;
                    addSlide( slide );
                }
            }
        });
        if ( slideCount )
            opts.container.addClass('cycle-loading');
        function addSlide( slide ) {
            var curr;
            if ( opts.loader == 'wait' ) {
                slideArr.push( slide );
                if ( slideCount === 0 ) {
                    slideArr.sort( sorter );
                    addFn.apply( opts.API, [ slideArr, prepend ] );
                    opts.container.removeClass('cycle-loading');
                }
            }
            else {
                curr = $(opts.slides[opts.currSlide]);
                addFn.apply( opts.API, [ slide, prepend ] );
                curr.show();
                opts.container.removeClass('cycle-loading');
            }
        }
        function sorter(a, b) {
            return a.data('index') - b.data('index');
        }
    }
});
})(jQuery);
/*! pager plugin for Cycle2;  version: 20140415 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    pager:            '> .cycle-pager',
    pagerActiveClass: 'cycle-pager-active',
    pagerEvent:       'click.cycle',
    pagerEventBubble: undefined,
    pagerTemplate:    '<span>&bull;</span>'
});
$(document).on( 'cycle-bootstrap', function( e, opts, API ) {
    API.buildPagerLink = buildPagerLink;
});
$(document).on( 'cycle-slide-added', function( e, opts, slideOpts, slideAdded ) {
    if ( opts.pager ) {
        opts.API.buildPagerLink ( opts, slideOpts, slideAdded );
        opts.API.page = page;
    }
});
$(document).on( 'cycle-slide-removed', function( e, opts, index, slideRemoved ) {
    if ( opts.pager ) {
        var pagers = opts.API.getComponent( 'pager' );
        pagers.each(function() {
            var pager = $(this);
            $( pager.children()[index] ).remove();
        });
    }
});
$(document).on( 'cycle-update-view', function( e, opts, slideOpts ) {
    var pagers;
    if ( opts.pager ) {
        pagers = opts.API.getComponent( 'pager' );
        pagers.each(function() {
           $(this).children().removeClass( opts.pagerActiveClass )
            .eq( opts.currSlide ).addClass( opts.pagerActiveClass );
        });
    }
});
$(document).on( 'cycle-destroyed', function( e, opts ) {
    var pager = opts.API.getComponent( 'pager' );
    if ( pager ) {
        pager.children().off( opts.pagerEvent ); // #202
        if ( opts.pagerTemplate )
            pager.empty();
    }
});
function buildPagerLink( opts, slideOpts, slide ) {
    var pagerLink;
    var pagers = opts.API.getComponent( 'pager' );
    pagers.each(function() {
        var pager = $(this);
        if ( slideOpts.pagerTemplate ) {
            var markup = opts.API.tmpl( slideOpts.pagerTemplate, slideOpts, opts, slide[0] );
            pagerLink = $( markup ).appendTo( pager );
        }
        else {
            pagerLink = pager.children().eq( opts.slideCount - 1 );
        }
        pagerLink.on( opts.pagerEvent, function(e) {
            if ( ! opts.pagerEventBubble )
                e.preventDefault();
            opts.API.page( pager, e.currentTarget);
        });
    });
}
function page( pager, target ) {
    /*jshint validthis:true */
    var opts = this.opts();
    if ( opts.busy && ! opts.manualTrump )
        return;
    var index = pager.children().index( target );
    var nextSlide = index;
    var fwd = opts.currSlide < nextSlide;
    if (opts.currSlide == nextSlide) {
        return; // no op, clicked pager for the currently displayed slide
    }
    opts.nextSlide = nextSlide;
    opts._tempFx = opts.pagerFx;
    opts.API.prepareTx( true, fwd );
    opts.API.trigger('cycle-pager-activated', [opts, pager, target ]);
}
})(jQuery);
/*! prevnext plugin for Cycle2;  version: 20140408 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    next:           '> .cycle-next',
    nextEvent:      'click.cycle',
    disabledClass:  'disabled',
    prev:           '> .cycle-prev',
    prevEvent:      'click.cycle',
    swipe:          false
});
$(document).on( 'cycle-initialized', function( e, opts ) {
    opts.API.getComponent( 'next' ).on( opts.nextEvent, function(e) {
        e.preventDefault();
        opts.API.next();
    });
    opts.API.getComponent( 'prev' ).on( opts.prevEvent, function(e) {
        e.preventDefault();
        opts.API.prev();
    });
    if ( opts.swipe ) {
        var nextEvent = opts.swipeVert ? 'swipeUp.cycle' : 'swipeLeft.cycle swipeleft.cycle';
        var prevEvent = opts.swipeVert ? 'swipeDown.cycle' : 'swipeRight.cycle swiperight.cycle';
        opts.container.on( nextEvent, function(e) {
            opts._tempFx = opts.swipeFx;
            opts.API.next();
        });
        opts.container.on( prevEvent, function() {
            opts._tempFx = opts.swipeFx;
            opts.API.prev();
        });
    }
});
$(document).on( 'cycle-update-view', function( e, opts, slideOpts, currSlide ) {
    if ( opts.allowWrap )
        return;
    var cls = opts.disabledClass;
    var next = opts.API.getComponent( 'next' );
    var prev = opts.API.getComponent( 'prev' );
    var prevBoundry = opts._prevBoundry || 0;
    var nextBoundry = (opts._nextBoundry !== undefined)?opts._nextBoundry:opts.slideCount - 1;
    if ( opts.currSlide == nextBoundry )
        next.addClass( cls ).prop( 'disabled', true );
    else
        next.removeClass( cls ).prop( 'disabled', false );
    if ( opts.currSlide === prevBoundry )
        prev.addClass( cls ).prop( 'disabled', true );
    else
        prev.removeClass( cls ).prop( 'disabled', false );
});
$(document).on( 'cycle-destroyed', function( e, opts ) {
    opts.API.getComponent( 'prev' ).off( opts.nextEvent );
    opts.API.getComponent( 'next' ).off( opts.prevEvent );
    opts.container.off( 'swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle' );
});
})(jQuery);
/*! progressive loader plugin for Cycle2;  version: 20130315 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    progressive: false
});
$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    if ( !opts.progressive )
        return;
    var API = opts.API;
    var nextFn = API.next;
    var prevFn = API.prev;
    var prepareTxFn = API.prepareTx;
    var type = $.type( opts.progressive );
    var slides, scriptEl;
    if ( type == 'array' ) {
        slides = opts.progressive;
    }
    else if ($.isFunction( opts.progressive ) ) {
        slides = opts.progressive( opts );
    }
    else if ( type == 'string' ) {
        scriptEl = $( opts.progressive );
        slides = $.trim( scriptEl.html() );
        if ( !slides )
            return;
        if ( /^(\[)/.test( slides ) ) {
            try {
                slides = $.parseJSON( slides );
            }
            catch(err) {
                API.log( 'error parsing progressive slides', err );
                return;
            }
        }
        else {
            slides = slides.split( new RegExp( scriptEl.data('cycle-split') || '\n') );
            if ( ! slides[ slides.length - 1 ] )
                slides.pop();
        }
    }
    if ( prepareTxFn ) {
        API.prepareTx = function( manual, fwd ) {
            var index, slide;
            if ( manual || slides.length === 0 ) {
                prepareTxFn.apply( opts.API, [ manual, fwd ] );
                return;
            }
            if ( fwd && opts.currSlide == ( opts.slideCount-1) ) {
                slide = slides[ 0 ];
                slides = slides.slice( 1 );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    setTimeout(function() {
                        opts.API.advanceSlide( 1 );
                    },50);
                });
                opts.API.add( slide );
            }
            else if ( !fwd && opts.currSlide === 0 ) {
                index = slides.length-1;
                slide = slides[ index ];
                slides = slides.slice( 0, index );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    setTimeout(function() {
                        opts.currSlide = 1;
                        opts.API.advanceSlide( -1 );
                    },50);
                });
                opts.API.add( slide, true );
            }
            else {
                prepareTxFn.apply( opts.API, [ manual, fwd ] );
            }
        };
    }
    if ( nextFn ) {
        API.next = function() {
            var opts = this.opts();
            if ( slides.length && opts.currSlide == ( opts.slideCount - 1 ) ) {
                var slide = slides[ 0 ];
                slides = slides.slice( 1 );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    nextFn.apply( opts.API );
                    opts.container.removeClass('cycle-loading');
                });
                opts.container.addClass('cycle-loading');
                opts.API.add( slide );
            }
            else {
                nextFn.apply( opts.API );    
            }
        };
    }
    if ( prevFn ) {
        API.prev = function() {
            var opts = this.opts();
            if ( slides.length && opts.currSlide === 0 ) {
                var index = slides.length-1;
                var slide = slides[ index ];
                slides = slides.slice( 0, index );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    opts.currSlide = 1;
                    opts.API.advanceSlide( -1 );
                    opts.container.removeClass('cycle-loading');
                });
                opts.container.addClass('cycle-loading');
                opts.API.add( slide, true );
            }
            else {
                prevFn.apply( opts.API );
            }
        };
    }
});
})(jQuery);
/*! tmpl plugin for Cycle2;  version: 20121227 */
(function($) {
"use strict";
$.extend($.fn.cycle.defaults, {
    tmplRegex: '{{((.)?.*?)}}'
});
$.extend($.fn.cycle.API, {
    tmpl: function( str, opts /*, ... */) {
        var regex = new RegExp( opts.tmplRegex || $.fn.cycle.defaults.tmplRegex, 'g' );
        var args = $.makeArray( arguments );
        args.shift();
        return str.replace(regex, function(_, str) {
            var i, j, obj, prop, names = str.split('.');
            for (i=0; i < args.length; i++) {
                obj = args[i];
                if ( ! obj )
                    continue;
                if (names.length > 1) {
                    prop = obj;
                    for (j=0; j < names.length; j++) {
                        obj = prop;
                        prop = prop[ names[j] ] || str;
                    }
                } else {
                    prop = obj[str];
                }
                if ($.isFunction(prop))
                    return prop.apply(obj, args);
                if (prop !== undefined && prop !== null && prop != str)
                    return prop;
            }
            return str;
        });
    }
});    
})(jQuery);
/*!
 * Float Labels
 *
 * @version: 3.3.3
 * @author: Paul Ryley (http://geminilabs.io)
 * @url: https://geminilabs.github.io/float-labels.js
 * @license: MIT
 */
/** global: NodeList, Option */
;(function( window, document, undefined )
{
	"use strict";
	var Plugin = function( el, options )
	{
		this.el = this.isString( el ) ? document.querySelectorAll( el ) : [el];
		this.config = [];
		this.options = options;
		this.selectors = [];
		this.init();
		this.destroy = function() {
			this.loop( function( el ) {
				el.removeEventListener( 'reset', this.events.reset );
				this.removeClasses( el );
			}, function( field ) {
				this.reset( field );
			});
		};
		this.rebuild = function() {
			this.loop( null, function( field ) {
				this.floatLabel( field, true );
			});
		};
	};
	Plugin.prototype = {
		defaults: {
			customEvent: null,
			customLabel: null,
			customPlaceholder: null,
			exclude: '.no-label',
			inputRegex: /email|number|password|search|tel|text|url/,
			prefix: 'fl-',
			prioritize: 'label', // label|placeholder
			requiredClass: 'required',
			style: 0, // 0|1|2
			transform: 'input,select,textarea'
		},
		/** @return void */
		init: function()
		{
			this.initEvents();
			this.loop( function( el, i ) {
				var style = this.config[i].style;
				el.addEventListener( 'reset', this.events.reset );
				el.classList.add( this.prefixed( 'form' ));
				if( style ) {
					el.classList.add( this.prefixed( 'style-' + style ));
				}
			}, function( field ) {
				this.floatLabel( field );
			});
		},
		/** @return void */
		initEvents: function()
		{
			this.events = {
				blur: this.onBlur.bind( this ),
				change: this.onInput.bind( this ),
				focus: this.onFocus.bind( this ),
				input: this.onInput.bind( this ),
				reset: this.onReset.bind( this ),
			};
		},
		/** @return string */
		addRemove: function( bool )
		{
			return bool ? 'add' : 'remove';
		},
		/** @return null|void */
		build: function( el )
		{
			var labelEl = this.getLabel( el );
			if( !labelEl )return;
			el.classList.add( this.prefixed( el.tagName.toLowerCase() ));
			this.setLabel( labelEl, el );
			this.setPlaceholder( labelEl, el );
			this.wrapLabel( labelEl, el );
			this.handleEvents( el, 'add' );
			if( typeof this.config[this.current].customEvent === 'function' ) {
				this.config[this.current].customEvent.call( this, el );
			}
		},
		/** @return Element */
		createEl: function( tag, attributes )
		{
			var el = ( typeof tag === 'string' ) ? document.createElement( tag ) : tag;
			attributes = attributes || {};
			for( var key in attributes ) {
				if( !attributes.hasOwnProperty( key ))continue;
				el.setAttribute( key, attributes[key] );
			}
			return el;
		},
		/** @return object */
		extend: function()
		{
			var args = [].slice.call( arguments );
			var result = args[0];
			var extenders = args.slice(1);
			Object.keys( extenders ).forEach( function( i ) {
				for( var key in extenders[i] ) {
					if( !extenders[i].hasOwnProperty( key ))continue;
					result[key] = extenders[i][key];
				}
			});
			return result;
		},
		/** @return null|void */
		floatLabel: function( el, rebuild )
		{
			if( !el.getAttribute( 'id' ) || (
				el.tagName === 'INPUT' && !this.config[this.current].inputRegex.test( el.getAttribute( 'type' ))
			))return;
			if( this.hasParent( el )) {
				if( rebuild !== true )return;
				this.reset( el );
			}
			this.build( el );
		},
		/** @return string|false */
		getLabel: function( el )
		{
			var label = 'label[for="' + el.getAttribute( 'id' ) + '"]';
			var labelEl = this.el[this.current].querySelectorAll( label );
			if( labelEl.length > 1 ) {
				labelEl = el.parentNode.querySelectorAll( label );
			}
			if( labelEl.length === 1 ) {
				return labelEl[0];
			}
			return false;
		},
		/** @return string */
		getLabelText: function( labelEl, el )
		{
			var labelText = labelEl.textContent.replace( /[*:]/g, '' ).trim();
			var placeholderText = el.getAttribute( 'placeholder' );
			if( !labelText || ( labelText && placeholderText && this.config[this.current].prioritize === 'placeholder' )) {
				labelText = placeholderText;
			}
			return labelText;
		},
		/** @return void */
		handleEvents: function( el, action )
		{
			var events = this.events;
			['blur','input','focus'].forEach( function( event ) {
				if( el.type === 'file' && event === 'input' ) {
					event = 'change';
				}
				el[ action + 'EventListener']( event, events[event] );
			});
		},
		/** @return bool */
		hasParent: function( el )
		{
			return el.parentNode.classList.contains( this.prefixed( 'wrap' ));
		},
		/** @return bool */
		isString: function( str ) {
			return Object.prototype.toString.call( str ) === "[object String]";
		},
		/** @return void */
		loop: function( elCallback, fieldCallback ) {
			for( var i = 0; i < this.el.length; ++i ) {
				if( typeof this.selectors[i] === 'undefined' ) {
					var config = this.extend( {}, this.defaults, this.options, this.el[i].getAttribute( 'data-options' ));
					var exclude = ':not(' + config.exclude.split( /[\s,]+/ ).join( '):not(' ) + ')';
					this.selectors[i] = config.transform.replace( /,/g, exclude + ',' ) + exclude;
					this.config[i] = config;
				}
				var fields = this.el[i].querySelectorAll( this.selectors[i] );
				this.current = i;
				if( typeof elCallback === 'function' ) {
					elCallback.call( this, this.el[i], i );
				}
				for( var x = 0; x < fields.length; ++x ) {
					if( typeof fieldCallback === 'function' ) {
						fieldCallback.call( this, fields[x], i );
					}
				}
			}
		},
		/** @return void */
		onBlur: function( ev )
		{
			ev.target.parentNode.classList.remove( this.prefixed( 'has-focus' ));
		},
		/** @return void */
		onInput: function( ev )
		{
			ev.target.parentNode.classList[
				this.addRemove( ev.target.value.length )
			]( this.prefixed( 'is-active' ));
		},
		/** @return void */
		onFocus: function( ev )
		{
			ev.target.parentNode.classList.add( this.prefixed( 'has-focus' ));
		},
		/** @return void */
		onReset: function()
		{
			setTimeout( this.resetFields.bind( this ));
		},
		/** @return string */
		prefixed: function( value )
		{
			return this.config[this.current].prefix + value;
		},
		/** @return void */
		removeClasses: function( el )
		{
			var prefix = this.config[this.current].prefix;
			var classes = el.className.split( ' ' ).filter( function( c ) {
				return c.lastIndexOf( prefix, 0 ) !== 0;
			});
			el.className = classes.join( ' ' ).trim();
		},
		/** @return null|void */
		reset: function( el )
		{
			var parent = el.parentNode;
			if( !this.hasParent( el ))return;
			var fragment = document.createDocumentFragment();
			while( parent.firstElementChild ) {
				var childEl = parent.firstElementChild;
				this.removeClasses( childEl );
				fragment.appendChild( childEl );
			}
			parent.parentNode.replaceChild( fragment, parent );
			this.resetPlaceholder( el );
			this.handleEvents( el, 'remove' );
		},
		/** @return void */
		resetFields: function()
		{
			var fields = this.el[this.current].querySelectorAll( this.selectors[this.current] );
			for( var i = 0; i < fields.length; ++i ) {
				fields[i].parentNode.classList[
					this.addRemove( fields[i].tagName === 'SELECT' && fields[i].value !== '' )
				]( this.prefixed( 'is-active' ));
			}
		},
		/** @return void */
		resetPlaceholder: function( el )
		{
			var dataPlaceholder = 'data-placeholder';
			var originalPlaceholder = el.getAttribute( dataPlaceholder );
			if( originalPlaceholder !== null ) {
				el.removeAttribute( dataPlaceholder );
				el.setAttribute( 'placeholder', originalPlaceholder );
			}
		},
		/** @return void */
		setLabel: function( labelEl, el )
		{
			labelEl.classList.add( this.prefixed( 'label' ));
			labelEl.textContent = this.getLabelText( labelEl, el );
			if( typeof this.config[this.current].customLabel === 'function' ) {
				labelEl.textContent = this.config[this.current].customLabel.call( this, labelEl, el );
			}
		},
		/** @return void */
		setPlaceholder: function( labelEl, el )
		{
			var placeholderText = el.getAttribute( 'placeholder' );
			if( this.config[this.current].prioritize === 'label' || !placeholderText ) {
				if( placeholderText ) {
					el.setAttribute( 'data-placeholder', placeholderText );
				}
				placeholderText = this.getLabelText( labelEl, el );
			}
			if( typeof this.config[this.current].customPlaceholder === 'function' ) {
				placeholderText = this.config[this.current].customPlaceholder.call( this, placeholderText, el, labelEl );
			}
			if( el.tagName === 'SELECT' ) {
				this.setSelectPlaceholder( el, placeholderText );
			}
			else {
				el.setAttribute( 'placeholder', placeholderText );
			}
		},
		/** @return void */
		setSelectPlaceholder: function( el, placeholderText )
		{
			var childEl = el.firstElementChild;
			if( childEl.hasAttribute( 'value' ) && childEl.value ) {
				var selected = el.options[el.selectedIndex].defaultSelected !== true ? true : false;
				el.insertBefore( new Option( placeholderText, '', selected, selected ), childEl );
			}
			else {
				childEl.setAttribute( 'value', '' );
			}
			if( childEl.textContent === '' ) {
				childEl.textContent = placeholderText;
			}
		},
		/** @return void */
		wrapLabel: function( labelEl, el )
		{
			var wrapper = this.createEl( 'div', {
				class: this.prefixed( 'wrap' ) + ' ' + this.prefixed( 'wrap-' + el.tagName.toLowerCase() ),
			});
			if( el.value !== undefined && el.value.length ) {
				wrapper.classList.add( this.prefixed( 'is-active' ));
			}
			if( el.getAttribute( 'required' ) !== null || el.classList.contains( this.config[this.current].requiredClass )) {
				wrapper.classList.add( this.prefixed( 'is-required' ));
			}
			el.parentNode.insertBefore( wrapper, el );
			wrapper.appendChild( labelEl );
			wrapper.appendChild( el );
		},
	};
	if( typeof define === "function" && define.amd ) {
		define( [], function() { return Plugin; });
	}
	else if( typeof module === "object" && module.exports ) {
		module.exports = Plugin;
	}
	else {
		window.FloatLabels = Plugin;
	}
})( window, document );
/**
 * jQuery Geocoding and Places Autocomplete Plugin - V 1.6.5
 *
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2014
 * @author Ubilabs http://ubilabs.net, 2014
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */// # $.geocomplete()
(function(e,t,n,r){function u(t,n){this.options=e.extend(!0,{},i,n),this.input=t,this.$input=e(t),this._defaults=i,this._name="geocomplete",this.init()}var i={bounds:!0,country:null,map:!1,details:!1,detailsAttribute:"name",detailsScope:null,autoselect:!0,location:!1,mapOptions:{zoom:14,scrollwheel:!1,mapTypeId:"roadmap"},markerOptions:{draggable:!1},maxZoom:16,types:["geocode"],blur:!1,geocodeAfterResult:!1,restoreValueAfterBlur:!1},s="street_address route intersection political country administrative_area_level_1 administrative_area_level_2 administrative_area_level_3 colloquial_area locality sublocality neighborhood premise subpremise postal_code natural_feature airport park point_of_interest post_box street_number floor room lat lng viewport location formatted_address location_type bounds".split(" "),o="id place_id url website vicinity reference name rating international_phone_number icon formatted_phone_number".split(" ");e.extend(u.prototype,{init:function(){this.initMap(),this.initMarker(),this.initGeocoder(),this.initDetails(),this.initLocation()},initMap:function(){if(!this.options.map)return;if(typeof this.options.map.setCenter=="function"){this.map=this.options.map;return}this.map=new google.maps.Map(e(this.options.map)[0],this.options.mapOptions),google.maps.event.addListener(this.map,"click",e.proxy(this.mapClicked,this)),google.maps.event.addListener(this.map,"dragend",e.proxy(this.mapDragged,this)),google.maps.event.addListener(this.map,"idle",e.proxy(this.mapIdle,this)),google.maps.event.addListener(this.map,"zoom_changed",e.proxy(this.mapZoomed,this))},initMarker:function(){if(!this.map)return;var t=e.extend(this.options.markerOptions,{map:this.map});if(t.disabled)return;this.marker=new google.maps.Marker(t),google.maps.event.addListener(this.marker,"dragend",e.proxy(this.markerDragged,this))},initGeocoder:function(){var t=!1,n={types:this.options.types,bounds:this.options.bounds===!0?null:this.options.bounds,componentRestrictions:this.options.componentRestrictions};this.options.country&&(n.componentRestrictions={country:this.options.country}),this.autocomplete=new google.maps.places.Autocomplete(this.input,n),this.geocoder=new google.maps.Geocoder,this.map&&this.options.bounds===!0&&this.autocomplete.bindTo("bounds",this.map),google.maps.event.addListener(this.autocomplete,"place_changed",e.proxy(this.placeChanged,this)),this.$input.on("keypress."+this._name,function(e){if(e.keyCode===13)return!1}),this.options.geocodeAfterResult===!0&&this.$input.bind("keypress."+this._name,e.proxy(function(){event.keyCode!=9&&this.selected===!0&&(this.selected=!1)},this)),this.$input.bind("geocode."+this._name,e.proxy(function(){this.find()},this)),this.$input.bind("geocode:result."+this._name,e.proxy(function(){this.lastInputVal=this.$input.val()},this)),this.options.blur===!0&&this.$input.on("blur."+this._name,e.proxy(function(){if(this.options.geocodeAfterResult===!0&&this.selected===!0)return;this.options.restoreValueAfterBlur===!0&&this.selected===!0?setTimeout(e.proxy(this.restoreLastValue,this),0):this.find()},this))},initDetails:function(){function i(e){r[e]=t.find("["+n+"="+e+"]")}if(!this.options.details)return;if(this.options.detailsScope)var t=e(this.input).parents(this.options.detailsScope).find(this.options.details);else var t=e(this.options.details);var n=this.options.detailsAttribute,r={};e.each(s,function(e,t){i(t),i(t+"_short")}),e.each(o,function(e,t){i(t)}),this.$details=t,this.details=r},initLocation:function(){var e=this.options.location,t;if(!e)return;if(typeof e=="string"){this.find(e);return}e instanceof Array&&(t=new google.maps.LatLng(e[0],e[1])),e instanceof google.maps.LatLng&&(t=e),t&&(this.map&&this.map.setCenter(t),this.marker&&this.marker.setPosition(t))},destroy:function(){this.map&&(google.maps.event.clearInstanceListeners(this.map),google.maps.event.clearInstanceListeners(this.marker)),this.autocomplete.unbindAll(),google.maps.event.clearInstanceListeners(this.autocomplete),google.maps.event.clearInstanceListeners(this.input),this.$input.removeData(),this.$input.off(this._name),this.$input.unbind("."+this._name)},find:function(e){this.geocode({address:e||this.$input.val()})},geocode:function(t){if(!t.address)return;this.options.bounds&&!t.bounds&&(this.options.bounds===!0?t.bounds=this.map&&this.map.getBounds():t.bounds=this.options.bounds),this.options.country&&(t.region=this.options.country),this.geocoder.geocode(t,e.proxy(this.handleGeocode,this))},selectFirstResult:function(){var t="";e(".pac-item-selected")[0]&&(t="-selected");var n=e(".pac-container:last .pac-item"+t+":first span:nth-child(2)").text(),r=e(".pac-container:last .pac-item"+t+":first span:nth-child(3)").text(),i=n;return r&&(i+=" - "+r),this.$input.val(i),i},restoreLastValue:function(){this.lastInputVal&&this.$input.val(this.lastInputVal)},handleGeocode:function(e,t){if(t===google.maps.GeocoderStatus.OK){var n=e[0];this.$input.val(n.formatted_address),this.update(n),e.length>1&&this.trigger("geocode:multiple",e)}else this.trigger("geocode:error",t)},trigger:function(e,t){this.$input.trigger(e,[t])},center:function(e){e.viewport?(this.map.fitBounds(e.viewport),this.map.getZoom()>this.options.maxZoom&&this.map.setZoom(this.options.maxZoom)):(this.map.setZoom(this.options.maxZoom),this.map.setCenter(e.location)),this.marker&&(this.marker.setPosition(e.location),this.marker.setAnimation(this.options.markerOptions.animation))},update:function(e){this.map&&this.center(e.geometry),this.$details&&this.fillDetails(e),this.trigger("geocode:result",e)},fillDetails:function(t){var n={},r=t.geometry,i=r.viewport,s=r.bounds;e.each(t.address_components,function(t,r){var i=r.types[0];e.each(r.types,function(e,t){n[t]=r.long_name,n[t+"_short"]=r.short_name})}),e.each(o,function(e,r){n[r]=t[r]}),e.extend(n,{formatted_address:t.formatted_address,location_type:r.location_type||"PLACES",viewport:i,bounds:s,location:r.location,lat:r.location.lat(),lng:r.location.lng()}),e.each(this.details,e.proxy(function(e,t){var r=n[e];this.setDetail(t,r)},this)),this.data=n},setDetail:function(e,t){t===r?t="":typeof t.toUrlValue=="function"&&(t=t.toUrlValue()),e.is(":input")?e.val(t):e.text(t)},markerDragged:function(e){this.trigger("geocode:dragged",e.latLng)},mapClicked:function(e){this.trigger("geocode:click",e.latLng)},mapDragged:function(e){this.trigger("geocode:mapdragged",this.map.getCenter())},mapIdle:function(e){this.trigger("geocode:idle",this.map.getCenter())},mapZoomed:function(e){this.trigger("geocode:zoom",this.map.getZoom())},resetMarker:function(){this.marker.setPosition(this.data.location),this.setDetail(this.details.lat,this.data.location.lat()),this.setDetail(this.details.lng,this.data.location.lng())},placeChanged:function(){var e=this.autocomplete.getPlace();this.selected=!0;if(!e.geometry){if(this.options.autoselect){var t=this.selectFirstResult();this.find(t)}}else this.update(e)}}),e.fn.geocomplete=function(t){var n="plugin_geocomplete";if(typeof t=="string"){var r=e(this).data(n)||e(this).geocomplete().data(n),i=r[t];return typeof i=="function"?(i.apply(r,Array.prototype.slice.call(arguments,1)),e(this)):(arguments.length==2&&(i=arguments[1]),i)}return this.each(function(){var r=e.data(this,n);r||(r=new u(this,t),e.data(this,n,r))})}})(jQuery,window,document);
/*
 * File: iframeResizer.js
 * Desc: Force iframes to size to content.
 * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Reed Dadoune - reed@dadoune.com
 */
;(function(undefined) {
  'use strict';
  if(typeof window === 'undefined') return; // don't run for server side render
  var
    count                 = 0,
    logEnabled            = false,
    hiddenCheckEnabled    = false,
    msgHeader             = 'message',
    msgHeaderLen          = msgHeader.length,
    msgId                 = '[iFrameSizer]', //Must match iframe msg ID
    msgIdLen              = msgId.length,
    pagePosition          = null,
    requestAnimationFrame = window.requestAnimationFrame,
    resetRequiredMethods  = {max:1,scroll:1,bodyScroll:1,documentElementScroll:1},
    settings              = {},
    timer                 = null,
    logId                 = 'Host Page',
    defaults              = {
      autoResize                : true,
      bodyBackground            : null,
      bodyMargin                : null,
      bodyMarginV1              : 8,
      bodyPadding               : null,
      checkOrigin               : true,
      inPageLinks               : false,
      enablePublicMethods       : true,
      heightCalculationMethod   : 'bodyOffset',
      id                        : 'iFrameResizer',
      interval                  : 32,
      log                       : false,
      maxHeight                 : Infinity,
      maxWidth                  : Infinity,
      minHeight                 : 0,
      minWidth                  : 0,
      resizeFrom                : 'parent',
      scrolling                 : false,
      sizeHeight                : true,
      sizeWidth                 : false,
      warningTimeout            : 5000,
      tolerance                 : 0,
      widthCalculationMethod    : 'scroll',
      closedCallback            : function() {},
      initCallback              : function() {},
      messageCallback           : function() {warn('MessageCallback function not defined');},
      resizedCallback           : function() {},
      scrollCallback            : function() {return true;}
    };
  function addEventListener(obj,evt,func) {
    /* istanbul ignore else */ // Not testable in PhantonJS
    if ('addEventListener' in window) {
      obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in window) {//IE
      obj.attachEvent('on'+evt,func);
    }
  }
  function removeEventListener(el,evt,func) {
    /* istanbul ignore else */ // Not testable in phantonJS
    if ('removeEventListener' in window) {
      el.removeEventListener(evt,func, false);
    } else if ('detachEvent' in window) { //IE
      el.detachEvent('on'+evt,func);
    }
  }
  function setupRequestAnimationFrame() {
    var
      vendors = ['moz', 'webkit', 'o', 'ms'],
      x;
    for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
      requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    }
    if (!(requestAnimationFrame)) {
      log('setup','RequestAnimationFrame not supported');
    }
  }
  function getMyID(iframeId) {
    var retStr = 'Host page: '+iframeId;
    if (window.top !== window.self) {
      if (window.parentIFrame && window.parentIFrame.getId) {
        retStr = window.parentIFrame.getId()+': '+iframeId;
      } else {
        retStr = 'Nested host page: '+iframeId;
      }
    }
    return retStr;
  }
  function formatLogHeader(iframeId) {
    return msgId + '[' + getMyID(iframeId) + ']';
  }
  function isLogEnabled(iframeId) {
    return settings[iframeId] ? settings[iframeId].log : logEnabled;
  }
  function log(iframeId,msg) {
    output('log',iframeId,msg,isLogEnabled(iframeId));
  }
  function info(iframeId,msg) {
    output('info',iframeId,msg,isLogEnabled(iframeId));
  }
  function warn(iframeId,msg) {
    output('warn',iframeId,msg,true);
  }
  function output(type,iframeId,msg,enabled) {
    if (true === enabled && 'object' === typeof window.console) {
      console[type](formatLogHeader(iframeId),msg);
    }
  }
  function iFrameListener(event) {
    function resizeIFrame() {
      function resize() {
        setSize(messageData);
        setPagePosition(iframeId);
        callback('resizedCallback',messageData);
      }
      ensureInRange('Height');
      ensureInRange('Width');
      syncResize(resize,messageData,'init');
    }
    function processMsg() {
      var data = msg.substr(msgIdLen).split(':');
      return {
        iframe: settings[data[0]] && settings[data[0]].iframe,
        id:     data[0],
        height: data[1],
        width:  data[2],
        type:   data[3]
      };
    }
    function ensureInRange(Dimension) {
      var
        max  = Number(settings[iframeId]['max' + Dimension]),
        min  = Number(settings[iframeId]['min' + Dimension]),
        dimension = Dimension.toLowerCase(),
        size = Number(messageData[dimension]);
      log(iframeId,'Checking ' + dimension + ' is in range ' + min + '-' + max);
      if (size<min) {
        size=min;
        log(iframeId,'Set ' + dimension + ' to min value');
      }
      if (size>max) {
        size=max;
        log(iframeId,'Set ' + dimension + ' to max value');
      }
      messageData[dimension] = '' + size;
    }
    function isMessageFromIFrame() {
      function checkAllowedOrigin() {
        function checkList() {
          var
            i = 0,
            retCode = false;
          log(iframeId,'Checking connection is from allowed list of origins: ' + checkOrigin);
          for (; i < checkOrigin.length; i++) {
            if (checkOrigin[i] === origin) {
              retCode = true;
              break;
            }
          }
          return retCode;
        }
        function checkSingle() {
          var remoteHost  = settings[iframeId] && settings[iframeId].remoteHost;
          log(iframeId,'Checking connection is from: '+remoteHost);
          return origin === remoteHost;
        }
        return checkOrigin.constructor === Array ? checkList() : checkSingle();
      }
      var
        origin      = event.origin,
        checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;
      if (checkOrigin && (''+origin !== 'null') && !checkAllowedOrigin()) {
        throw new Error(
          'Unexpected message received from: ' + origin +
          ' for ' + messageData.iframe.id +
          '. Message was: ' + event.data +
          '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.'
        );
      }
      return true;
    }
    function isMessageForUs() {
      return msgId === (('' + msg).substr(0,msgIdLen)) && (msg.substr(msgIdLen).split(':')[0] in settings); //''+Protects against non-string msg
    }
    function isMessageFromMetaParent() {
      var retCode = messageData.type in {'true':1,'false':1,'undefined':1};
      if (retCode) {
        log(iframeId,'Ignoring init message from meta parent page');
      }
      return retCode;
    }
    function getMsgBody(offset) {
      return msg.substr(msg.indexOf(':')+msgHeaderLen+offset);
    }
    function forwardMsgFromIFrame(msgBody) {
      log(iframeId,'MessageCallback passed: {iframe: '+ messageData.iframe.id + ', message: ' + msgBody + '}');
      callback('messageCallback',{
        iframe: messageData.iframe,
        message: JSON.parse(msgBody)
      });
      log(iframeId,'--');
    }
    function getPageInfo() {
      var
        bodyPosition   = document.body.getBoundingClientRect(),
        iFramePosition = messageData.iframe.getBoundingClientRect();
      return JSON.stringify({
        iframeHeight: iFramePosition.height,
        iframeWidth:  iFramePosition.width,
        clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        clientWidth:  Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0),
        offsetTop:    parseInt(iFramePosition.top  - bodyPosition.top,  10),
        offsetLeft:   parseInt(iFramePosition.left - bodyPosition.left, 10),
        scrollTop:    window.pageYOffset,
        scrollLeft:   window.pageXOffset
      });
    }
    function sendPageInfoToIframe(iframe,iframeId) {
      function debouncedTrigger() {
        trigger(
          'Send Page Info',
          'pageInfo:' + getPageInfo(),
          iframe,
          iframeId
        );
      }
      debounceFrameEvents(debouncedTrigger,32,iframeId);
    }
    function startPageInfoMonitor() {
      function setListener(type,func) {
        function sendPageInfo() {
          if (settings[id]) {
            sendPageInfoToIframe(settings[id].iframe,id);
          } else {
            stop();
          }
        }
        ['scroll','resize'].forEach(function(evt) {
          log(id, type +  evt + ' listener for sendPageInfo');
          func(window,evt,sendPageInfo);
        });
      }
      function stop() {
        setListener('Remove ', removeEventListener);
      }
      function start() {
        setListener('Add ', addEventListener);
      }
      var id = iframeId; //Create locally scoped copy of iFrame ID
      start();
      if (settings[id]) {
        settings[id].stopPageInfo = stop;
      }
    }
    function stopPageInfoMonitor() {
      if (settings[iframeId] && settings[iframeId].stopPageInfo) {
        settings[iframeId].stopPageInfo();
        delete settings[iframeId].stopPageInfo;
      }
    }
    function checkIFrameExists() {
      var retBool = true;
      if (null === messageData.iframe) {
        warn(iframeId,'IFrame ('+messageData.id+') not found');
        retBool = false;
      }
      return retBool;
    }
    function getElementPosition(target) {
      var iFramePosition = target.getBoundingClientRect();
      getPagePosition(iframeId);
      return {
        x: Math.floor( Number(iFramePosition.left) + Number(pagePosition.x) ),
        y: Math.floor( Number(iFramePosition.top)  + Number(pagePosition.y) )
      };
    }
    function scrollRequestFromChild(addOffset) {
      /* istanbul ignore next */  //Not testable in Karma
      function reposition() {
        pagePosition = newPosition;
        scrollTo();
        log(iframeId,'--');
      }
      function calcOffset() {
        return {
          x: Number(messageData.width) + offset.x,
          y: Number(messageData.height) + offset.y
        };
      }
      function scrollParent() {
        if (window.parentIFrame) {
          window.parentIFrame['scrollTo'+(addOffset?'Offset':'')](newPosition.x,newPosition.y);
        } else {
          warn(iframeId,'Unable to scroll to requested position, window.parentIFrame not found');
        }
      }
      var
        offset = addOffset ? getElementPosition(messageData.iframe) : {x:0,y:0},
        newPosition = calcOffset();
      log(iframeId,'Reposition requested from iFrame (offset x:'+offset.x+' y:'+offset.y+')');
      if(window.top !== window.self) {
        scrollParent();
      } else {
        reposition();
      }
    }
    function scrollTo() {
      if (false !== callback('scrollCallback',pagePosition)) {
        setPagePosition(iframeId);
      } else {
        unsetPagePosition();
      }
    }
    function findTarget(location) {
      function jumpToTarget() {
        var jumpPosition = getElementPosition(target);
        log(iframeId,'Moving to in page link (#'+hash+') at x: '+jumpPosition.x+' y: '+jumpPosition.y);
        pagePosition = {
          x: jumpPosition.x,
          y: jumpPosition.y
        };
        scrollTo();
        log(iframeId,'--');
      }
      function jumpToParent() {
        if (window.parentIFrame) {
          window.parentIFrame.moveToAnchor(hash);
        } else {
          log(iframeId,'In page link #'+hash+' not found and window.parentIFrame not found');
        }
      }
      var
        hash     = location.split('#')[1] || '',
        hashData = decodeURIComponent(hash),
        target   = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
      if (target) {
        jumpToTarget();
      } else if(window.top!==window.self) {
        jumpToParent();
      } else {
        log(iframeId,'In page link #'+hash+' not found');
      }
    }
    function callback(funcName,val) {
      return chkCallback(iframeId,funcName,val);
    }
    function actionMsg() {
      if(settings[iframeId] && settings[iframeId].firstRun) firstRun();
      switch(messageData.type) {
      case 'close':
        if(settings[iframeId].closeRequestCallback) chkCallback(iframeId, 'closeRequestCallback', settings[iframeId].iframe);
        else closeIFrame(messageData.iframe);
        break;
      case 'message':
        forwardMsgFromIFrame(getMsgBody(6));
        break;
      case 'scrollTo':
        scrollRequestFromChild(false);
        break;
      case 'scrollToOffset':
        scrollRequestFromChild(true);
        break;
      case 'pageInfo':
        sendPageInfoToIframe(settings[iframeId] && settings[iframeId].iframe,iframeId);
        startPageInfoMonitor();
        break;
      case 'pageInfoStop':
        stopPageInfoMonitor();
        break;
      case 'inPageLink':
        findTarget(getMsgBody(9));
        break;
      case 'reset':
        resetIFrame(messageData);
        break;
      case 'init':
        resizeIFrame();
        callback('initCallback',messageData.iframe);
        break;
      default:
        resizeIFrame();
      }
    }
    function hasSettings(iframeId) {
      var retBool = true;
      if (!settings[iframeId]) {
        retBool = false;
        warn(messageData.type + ' No settings for ' + iframeId + '. Message was: ' + msg);
      }
      return retBool;
    }
    function iFrameReadyMsgReceived() {
      for (var iframeId in settings) {
        trigger('iFrame requested init',createOutgoingMsg(iframeId),document.getElementById(iframeId),iframeId);
      }
    }
    function firstRun() {
      if (settings[iframeId]) {
        settings[iframeId].firstRun = false;
      }
    }
    function clearWarningTimeout() {
      if (settings[iframeId]) {
        clearTimeout(settings[iframeId].msgTimeout);
        settings[iframeId].warningTimeout = 0;
      }
    }
    var
      msg = event.data,
      messageData = {},
      iframeId = null;
    if('[iFrameResizerChild]Ready' === msg) {
      iFrameReadyMsgReceived();
    } else if (isMessageForUs()) {
      messageData = processMsg();
      iframeId    = logId = messageData.id;
      if (settings[iframeId]) {
        settings[iframeId].loaded = true;
      }
      if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
        log(iframeId,'Received: '+msg);
        if ( checkIFrameExists() && isMessageFromIFrame() ) {
          actionMsg();
        }
      }
    } else {
      info(iframeId,'Ignored: '+msg);
    }
  }
  function chkCallback(iframeId,funcName,val) {
    var
      func = null,
      retVal = null;
    if(settings[iframeId]) {
      func = settings[iframeId][funcName];
      if( 'function' === typeof func) {
        retVal = func(val);
      } else {
        throw new TypeError(funcName+' on iFrame['+iframeId+'] is not a function');
      }
    }
    return retVal;
  }
  function closeIFrame(iframe) {
    var iframeId = iframe.id;
    log(iframeId,'Removing iFrame: '+iframeId);
    if (iframe.parentNode) { iframe.parentNode.removeChild(iframe); }
    chkCallback(iframeId,'closedCallback',iframeId);
    log(iframeId,'--');
    delete settings[iframeId];
  }
  function getPagePosition(iframeId) {
    if(null === pagePosition) {
      pagePosition = {
        x: (window.pageXOffset !== undefined) ? window.pageXOffset : document.documentElement.scrollLeft,
        y: (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop
      };
      log(iframeId,'Get page position: '+pagePosition.x+','+pagePosition.y);
    }
  }
  function setPagePosition(iframeId) {
    if(null !== pagePosition) {
      window.scrollTo(pagePosition.x,pagePosition.y);
      log(iframeId,'Set page position: '+pagePosition.x+','+pagePosition.y);
      unsetPagePosition();
    }
  }
  function unsetPagePosition() {
    pagePosition = null;
  }
  function resetIFrame(messageData) {
    function reset() {
      setSize(messageData);
      trigger('reset','reset',messageData.iframe,messageData.id);
    }
    log(messageData.id,'Size reset requested by '+('init'===messageData.type?'host page':'iFrame'));
    getPagePosition(messageData.id);
    syncResize(reset,messageData,'reset');
  }
  function setSize(messageData) {
    function setDimension(dimension) {
      messageData.iframe.style[dimension] = messageData[dimension] + 'px';
      log(
        messageData.id,
        'IFrame (' + iframeId +
        ') ' + dimension +
        ' set to ' + messageData[dimension] + 'px'
      );
    }
    function chkZero(dimension) {
      /* istanbul ignore next */  //Not testable in PhantomJS
      if (!hiddenCheckEnabled && '0' === messageData[dimension]) {
        hiddenCheckEnabled = true;
        log(iframeId,'Hidden iFrame detected, creating visibility listener');
        fixHiddenIFrames();
      }
    }
    function processDimension(dimension) {
      setDimension(dimension);
      chkZero(dimension);
    }
    var iframeId = messageData.iframe.id;
    if(settings[iframeId]) {
      if( settings[iframeId].sizeHeight) { processDimension('height'); }
      if( settings[iframeId].sizeWidth ) { processDimension('width'); }
    }
  }
  function syncResize(func,messageData,doNotSync) {
    /* istanbul ignore if */  //Not testable in PhantomJS
    if(doNotSync!==messageData.type && requestAnimationFrame) {
      log(messageData.id,'Requesting animation frame');
      requestAnimationFrame(func);
    } else {
      func();
    }
  }
  function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
    function postMessageToIFrame() {
      var target = settings[id] && settings[id].targetOrigin;
      log(id,'[' + calleeMsg + '] Sending msg to iframe['+id+'] ('+msg+') targetOrigin: '+target);
      iframe.contentWindow.postMessage( msgId + msg, target );
    }
    function iFrameNotFound() {
      warn(id,'[' + calleeMsg + '] IFrame('+id+') not found');
    }
    function chkAndSend() {
      if(iframe && 'contentWindow' in iframe && (null !== iframe.contentWindow)) { //Null test for PhantomJS
        postMessageToIFrame();
      } else {
        iFrameNotFound();
      }
    }
    function warnOnNoResponse() {
      function warning() {
        if (settings[id] && !settings[id].loaded && !errorShown) {
          errorShown = true;
          warn(id, 'IFrame has not responded within '+ settings[id].warningTimeout/1000 +' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.');
        }
      }
      if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
        settings[id].msgTimeout = setTimeout(warning, settings[id].warningTimeout);
      }
    }
    var errorShown = false;
    id = id || iframe.id;
    if(settings[id]) {
      chkAndSend();
      warnOnNoResponse();
    }
  }
  function createOutgoingMsg(iframeId) {
    return iframeId +
      ':' + settings[iframeId].bodyMarginV1 +
      ':' + settings[iframeId].sizeWidth +
      ':' + settings[iframeId].log +
      ':' + settings[iframeId].interval +
      ':' + settings[iframeId].enablePublicMethods +
      ':' + settings[iframeId].autoResize +
      ':' + settings[iframeId].bodyMargin +
      ':' + settings[iframeId].heightCalculationMethod +
      ':' + settings[iframeId].bodyBackground +
      ':' + settings[iframeId].bodyPadding +
      ':' + settings[iframeId].tolerance +
      ':' + settings[iframeId].inPageLinks +
      ':' + settings[iframeId].resizeFrom +
      ':' + settings[iframeId].widthCalculationMethod;
  }
  function setupIFrame(iframe,options) {
    function setLimits() {
      function addStyle(style) {
        if ((Infinity !== settings[iframeId][style]) && (0 !== settings[iframeId][style])) {
          iframe.style[style] = settings[iframeId][style] + 'px';
          log(iframeId,'Set '+style+' = '+settings[iframeId][style]+'px');
        }
      }
      function chkMinMax(dimension) {
        if (settings[iframeId]['min'+dimension]>settings[iframeId]['max'+dimension]) {
          throw new Error('Value for min'+dimension+' can not be greater than max'+dimension);
        }
      }
      chkMinMax('Height');
      chkMinMax('Width');
      addStyle('maxHeight');
      addStyle('minHeight');
      addStyle('maxWidth');
      addStyle('minWidth');
    }
    function newId() {
      var id = ((options && options.id) || defaults.id + count++);
      if  (null !== document.getElementById(id)) {
        id = id + count++;
      }
      return id;
    }
    function ensureHasId(iframeId) {
      logId=iframeId;
      if (''===iframeId) {
        iframe.id = iframeId =  newId();
        logEnabled = (options || {}).log;
        logId=iframeId;
        log(iframeId,'Added missing iframe ID: '+ iframeId +' (' + iframe.src + ')');
      }
      return iframeId;
    }
    function setScrolling() {
      log(iframeId,'IFrame scrolling ' + (settings[iframeId] && settings[iframeId].scrolling ? 'enabled' : 'disabled') + ' for ' + iframeId);
      iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? 'hidden' : 'auto';
      switch(settings[iframeId] && settings[iframeId].scrolling) {
        case true:
          iframe.scrolling = 'yes';
          break;
        case false:
          iframe.scrolling = 'no';
          break;
        default:
          iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : 'no';
      }
    }
    function setupBodyMarginValues() {
      if (('number'===typeof(settings[iframeId] && settings[iframeId].bodyMargin)) || ('0'===(settings[iframeId] && settings[iframeId].bodyMargin))) {
        settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
        settings[iframeId].bodyMargin   = '' + settings[iframeId].bodyMargin + 'px';
      }
    }
    function checkReset() {
      var
        firstRun           = settings[iframeId] && settings[iframeId].firstRun,
        resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;
      if (!firstRun && resetRequertMethod) {
        resetIFrame({iframe:iframe, height:0, width:0, type:'init'});
      }
    }
    function setupIFrameObject() {
      if(Function.prototype.bind && settings[iframeId]) { //Ignore unpolyfilled IE8.
        settings[iframeId].iframe.iFrameResizer = {
          close        : closeIFrame.bind(null,settings[iframeId].iframe),
          resize       : trigger.bind(null,'Window resize', 'resize', settings[iframeId].iframe),
          moveToAnchor : function(anchor) {
            trigger('Move to anchor','moveToAnchor:'+anchor, settings[iframeId].iframe,iframeId);
          },
          sendMessage  : function(message) {
            message = JSON.stringify(message);
            trigger('Send Message','message:'+message, settings[iframeId].iframe, iframeId);
          }
        };
      }
    }
    function init(msg) {
      function iFrameLoaded() {
        trigger('iFrame.onload', msg, iframe, undefined , true);
        checkReset();
      }
      addEventListener(iframe,'load',iFrameLoaded);
      trigger('init', msg, iframe, undefined, true);
    }
    function checkOptions(options) {
      if ('object' !== typeof options) {
        throw new TypeError('Options is not an object');
      }
    }
    function copyOptions(options) {
      for (var option in defaults) {
        if (defaults.hasOwnProperty(option)) {
          settings[iframeId][option] = options.hasOwnProperty(option) ? options[option] : defaults[option];
        }
      }
    }
    function getTargetOrigin (remoteHost) {
      return ('' === remoteHost || 'file://' === remoteHost) ? '*' : remoteHost;
    }
    function processOptions(options) {
      options = options || {};
      settings[iframeId] = {
        firstRun	: true,
        iframe		: iframe,
        remoteHost	: iframe.src.split('/').slice(0,3).join('/')
      };
      checkOptions(options);
      copyOptions(options);
      if (settings[iframeId]) {
        settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : '*';
      }
    }
    function beenHere() {
      return (iframeId in settings && 'iFrameResizer' in iframe);
    }
    var iframeId = ensureHasId(iframe.id);
    if (!beenHere()) {
      processOptions(options);
      setScrolling();
      setLimits();
      setupBodyMarginValues();
      init(createOutgoingMsg(iframeId));
      setupIFrameObject();
    } else {
      warn(iframeId,'Ignored iFrame, already setup.');
    }
  }
  function debouce(fn,time) {
    if (null === timer) {
      timer = setTimeout(function() {
        timer = null;
        fn();
      }, time);
    }
  }
  var frameTimer = {};
  function debounceFrameEvents(fn,time,frameId) {
    if (!frameTimer[frameId]) {
      frameTimer[frameId] = setTimeout(function() {
        frameTimer[frameId] = null;
        fn();
      }, time);
    }
  }
  /* istanbul ignore next */  //Not testable in PhantomJS
  function fixHiddenIFrames() {
    function checkIFrames() {
      function checkIFrame(settingId) {
        function chkDimension(dimension) {
          return '0px' === (settings[settingId] && settings[settingId].iframe.style[dimension]);
        }
        function isVisible(el) {
          return (null !== el.offsetParent);
        }
        if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension('height') || chkDimension('width'))) {
          trigger('Visibility change', 'resize', settings[settingId].iframe, settingId);
        }
      }
      for (var settingId in settings) {
        checkIFrame(settingId);
      }
    }
    function mutationObserved(mutations) {
      log('window','Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type);
      debouce(checkIFrames,16);
    }
    function createMutationObserver() {
      var
        target = document.querySelector('body'),
        config = {
          attributes            : true,
          attributeOldValue     : false,
          characterData         : true,
          characterDataOldValue : false,
          childList             : true,
          subtree               : true
        },
        observer = new MutationObserver(mutationObserved);
      observer.observe(target, config);
    }
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) createMutationObserver();
  }
  function resizeIFrames(event) {
    function resize() {
      sendTriggerMsg('Window '+event,'resize');
    }
    log('window','Trigger event: '+event);
    debouce(resize,16);
  }
  /* istanbul ignore next */  //Not testable in PhantomJS
  function tabVisible() {
    function resize() {
      sendTriggerMsg('Tab Visable','resize');
    }
    if('hidden' !== document.visibilityState) {
      log('document','Trigger event: Visiblity change');
      debouce(resize,16);
    }
  }
  function sendTriggerMsg(eventName,event) {
    function isIFrameResizeEnabled(iframeId) {
      return	settings[iframeId] &&
          'parent' === settings[iframeId].resizeFrom &&
          settings[iframeId].autoResize &&
          !settings[iframeId].firstRun;
    }
    for (var iframeId in settings) {
      if(isIFrameResizeEnabled(iframeId)) {
        trigger(eventName, event, document.getElementById(iframeId), iframeId);
      }
    }
  }
  function setupEventListeners() {
    addEventListener(window,'message',iFrameListener);
    addEventListener(window,'resize', function() {resizeIFrames('resize');});
    addEventListener(document,'visibilitychange',tabVisible);
    addEventListener(document,'-webkit-visibilitychange',tabVisible); //Andriod 4.4
    addEventListener(window,'focusin',function() {resizeIFrames('focus');}); //IE8-9
    addEventListener(window,'focus',function() {resizeIFrames('focus');});
  }
  function factory() {
    function init(options,element) {
      function chkType() {
        if(!element.tagName) {
          throw new TypeError('Object is not a valid DOM element');
        } else if ('IFRAME' !== element.tagName.toUpperCase()) {
          throw new TypeError('Expected <IFRAME> tag, found <'+element.tagName+'>');
        }
      }
      if(element) {
        chkType();
        setupIFrame(element, options);
        iFrames.push(element);
      }
    }
    function warnDeprecatedOptions(options) {
      if (options && options.enablePublicMethods) {
        warn('enablePublicMethods option has been removed, public methods are now always available in the iFrame');
      }
    }
    var iFrames;
    setupRequestAnimationFrame();
    setupEventListeners();
    return function iFrameResizeF(options,target) {
      iFrames = []; //Only return iFrames past in on this call
      warnDeprecatedOptions(options);
      switch (typeof(target)) {
      case 'undefined':
      case 'string':
        Array.prototype.forEach.call(
          document.querySelectorAll( target || 'iframe' ),
          init.bind(undefined, options)
        );
        break;
      case 'object':
        init(options,target);
        break;
      default:
        throw new TypeError('Unexpected data type ('+typeof(target)+')');
      }
      return iFrames;
    };
  }
  function createJQueryPublicMethod($) {
    if (!$.fn) {
      info('','Unable to bind to jQuery, it is not fully loaded.');
    } else if (!$.fn.iFrameResize) {
      $.fn.iFrameResize = function $iFrameResizeF(options) {
        function init(index, element) {
          setupIFrame(element, options);
        }
        return this.filter('iframe').each(init).end();
      };
    }
  }
  if (window.jQuery) { createJQueryPublicMethod(window.jQuery); }
  if (typeof define === 'function' && define.amd) {
    define([],factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') { //Node for browserfy
    module.exports = factory();
  } else {
    window.iFrameResize = window.iFrameResize || factory();
  }
})();
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.hoverIntent) {
        factory(jQuery);
    }
})(function($) {
    'use strict';
    var _cfg = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };
    var INSTANCE_COUNT = 0;
    var cX, cY;
    var track = function(ev) {
        cX = ev.pageX;
        cY = ev.pageY;
    };
    var compare = function(ev,$el,s,cfg) {
        if ( Math.sqrt( (s.pX-cX)*(s.pX-cX) + (s.pY-cY)*(s.pY-cY) ) < cfg.sensitivity ) {
            $el.off(s.event,track);
            delete s.timeoutId;
            s.isActive = true;
            ev.pageX = cX; ev.pageY = cY;
            delete s.pX; delete s.pY;
            return cfg.over.apply($el[0],[ev]);
        } else {
            s.pX = cX; s.pY = cY;
            s.timeoutId = setTimeout( function(){compare(ev, $el, s, cfg);} , cfg.interval );
        }
    };
    var delay = function(ev,$el,s,out) {
        delete $el.data('hoverIntent')[s.id];
        return out.apply($el[0],[ev]);
    };
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {
        var instanceId = INSTANCE_COUNT++;
        var cfg = $.extend({}, _cfg);
        if ( $.isPlainObject(handlerIn) ) {
            cfg = $.extend(cfg, handlerIn);
            if ( !$.isFunction(cfg.out) ) {
                cfg.out = cfg.over;
            }
        } else if ( $.isFunction(handlerOut) ) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }
        var handleHover = function(e) {
            var ev = $.extend({},e);
            var $el = $(this);
            var hoverIntentData = $el.data('hoverIntent');
            if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }
            var state = hoverIntentData[instanceId];
            if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }
            if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }
            var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent'+instanceId;
            if (e.type === 'mouseenter') {
                if (state.isActive) { return; }
                state.pX = ev.pageX; state.pY = ev.pageY;
                $el.off(mousemove,track).on(mousemove,track);
                state.timeoutId = setTimeout( function(){compare(ev,$el,state,cfg);} , cfg.interval );
            } else { // "mouseleave"
                if (!state.isActive) { return; }
                $el.off(mousemove,track);
                state.timeoutId = setTimeout( function(){delay(ev,$el,state,cfg.out);} , cfg.timeout );
            }
        };
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
});
/*! jQuery & Zepto Lazy v1.7.9 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
/**
 * @file jQuery Plugin: jquery.simple-scroll-follow
 * @version 3.1.1
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT License
 */
/** @external "jQuery.fn" */
/** @external jQuery */
(function (factory) {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {
/**
 * @public
 * @function external:"jQuery.fn".simpleScrollFollow
 * @arg {null|Object|String} [arg1] - オプション、またはサブメソッド名
 * @arg {boolean} [arg1.enabled=true] - スクロールを有効にするかどうかの真偽値
 * @arg {Object|string} [arg1.limit_elem=$('body')] - 追尾要素のスクロールの下限の基準となる要素のjQueryオブジェクト、またはセレクタ文字列
 * @arg {number} [arg1.min_width=0] - 追尾スクロールを有効にする最低限の画面幅
 * @return {Object} jQueryオブジェクト
 */
$.fn.simpleScrollFollow = function (arg1) {
  var subMethodArgs = Array.prototype.slice.call(arguments, 1);
  return this.each(function() {
    $.fn.simpleScrollFollow.processEach(this, arg1, subMethodArgs);
  });
};
/**
 * @private
 * @arg {Objectt} [elem] - 単一の要素のjQueryオブジェクト
 * @arg {null|Object|String} [arg1] - オプション、またはサブメソッド名
 * @arg {Array} [subMethodArgs] - 追尾要素のスクロールの下限の基準となる要素のjQueryオブジェクト、またはセレクタ文字列
 * @return {string} 単体テスト用に分岐名を返す
 */
$.fn.simpleScrollFollow.processEach = function(elem, arg1, subMethodArgs) {
  var instance = $(elem).data('simple-scroll-follow');
  if (instance && arg1 in instance && arg1.charAt(0) != '_') {
    instance[arg1].apply(instance, subMethodArgs);
    return 'call public method';
  } else if (typeof arg1 === 'object' || !arg1) {
    $(elem).data('simple-scroll-follow', new $.simpleScrollFollow(elem, arg1));
    return 'init plugin';
  } else {
    console.error('Sub-method "' +  arg1 + '" does not exist on $.simpleScrollFollow');
    return 'error';
  }
};
/**
 * @class external:jQuery.simpleScrollFollow
 * @arg {Object} elem - 単一のHTML要素
 * @arg {null|Object} option - オプションを格納した連想配列
 * @prop {Object} option - オプションを格納した連想配列
 * @prop {Object} follow - 追尾要素の情報を格納した連想配列
 * @prop {Object} follow.elem - 追尾するHTML要素のjQueryオブジェクト
 * @prop {number} follow.offset_top - 追尾要素の元々のオフセット・トップ
 * @prop {number} follow.offset_bottom - 追尾要素の元々のオフセット・ボトム
 * @prop {number} follow.offset_left - 追尾要素の元々のオフセット・レフト
 * @prop {number} follow.position_top - 追尾要素の元々のポジション・トップ
 * @prop {number} follow.width - 追尾要素の元々の幅
 * @prop {Object} timer - 連続したリサイズの発火を防ぐための遅延用のタイマー
 */
$.simpleScrollFollow = function(elem, option) {
  this._setOption(option);
  this._setFollow(elem);
  var self = this;
  $(window).scroll(function() {
    self._handleScroll.call(self);
  });
  this.timer = false;
  $(window).resize(function() {
    self._handleResize.call(self);
  });
};
$.extend($.simpleScrollFollow.prototype, /** @lends external:jQuery.simpleScrollFollow.prototype */ {
  /**
   * @public
   * @desc スクロールを有効または無効にする
   * @arg {boolean} [bool=true] - true: 有効にする、 false: 無効にする
   * @return {boolean} enabledが変更された値
   */
  setEnabled: function(bool) {
    if (bool === undefined || bool) {
      return this.option.enabled = true;
    } else {
      this._moveDefaultPosition();
      return this.option.enabled = false;
    }
  },
  /**
   * @private
   * @desc 元の位置に戻る
   */
  _moveDefaultPosition: function() {
    $(this.follow.elem)
      .css({
        position: '',
        top: '',
        bottom: '',
        left: '',
        right: ''
      })
      .width('');
  },
  /**
   * @private
   * @desc 追尾要素の設定をする
   * @return {Object} - プロパティfollowとなる追尾要素の設定
   */
  _setFollow: function(elem) {
    return this.follow = {
      elem: elem,
      width: $(elem).width(),
      offset_top: $(elem).offset().top - 125,
      offset_bottom: this._calcOffsetBottom(elem),
      offset_left: $(elem).offset().left,
      position_top: ($(elem).css('top') == 'auto') ?
        0 :
        Number($(elem).css('top').replace(/px$/, ''))
    };
  },
  /**
   * @private
   * @desc オプションを初期化する
   * @arg {Object} option - オプションを格納した連想配列
   * @return {Object} 単体テストのため、初期化済みのオプションを返す
   */
  _setOption: function(option) {
    this.option = $.extend({
      enabled: true,
      limit_elem: $('body'),
      min_width: 0,
      upper_side: null,
      lower_side: null
    }, option);
    if (typeof this.option.limit_elem == 'string') {
      this.option.limit_elem = $(this.option.limit_elem);
    }
    return this.option;
  },
  /**
   * @private
   * @desc offset_bottomを算出する
   * @arg {Object} elem - 算出する対象のHTML要素
   * @return {number} - 算出されたoffset_bottom
   */
  _calcOffsetBottom: function(elem) {
    return $(elem).offset().top + this._calcElemHeight(elem);
  },
  /**
   * @private
   * @arg {Object} elem - Target element to calc height
   * @return {number} - the height which includes border-width and padding
   */
  _calcElemHeight: function(elem) {
    return $(elem).height() +
           Number($(elem).css('border-top-width'   ).replace(/px$/, '')) +
           Number($(elem).css('border-bottom-width').replace(/px$/, '')) +
           Number($(elem).css('padding-top'        ).replace(/px$/, '')) +
           Number($(elem).css('padding-bottom'     ).replace(/px$/, ''));
  },
  /**
   * @private
   * @desc イベントハンドラ: 画面スクロール
   * @return {boolean} 画面スクロールが実行されたかどうか
   */
  _handleScroll: function() {
    if (!this.option.enabled) {
      return false;
    }
    if ($(window).width() < this.option.min_width) {
      this._moveDefaultPosition.call(this);
      return false;
    }
    var win = {
      scroll_top: this._getUpperSide(),
      scroll_bottom: this._getLowerSide()
    };
    var current = {
      offset_top: $(this.follow.elem).offset().top,
      offset_bottom: this._calcOffsetBottom(this.follow.elem)
    };
    var limit = {offset_bottom: this._calcOffsetBottom(this.option.limit_elem) - 60};
    if ((limit.offset_bottom - this.follow.offset_top) < (current.offset_bottom - current.offset_top)) {
      return false;
    }
    this._handleScrollMain(win, current, limit);
    return true;
  },
  /**
   * @private
   * @returns {number} Upper side of window
   */
  _getUpperSide: function() {
    var winScrollTop = $(window).scrollTop();
    if (this.option.upper_side) {
      var upperLimitBottom = this._calcOffsetBottom(this.option.upper_side);
      if (winScrollTop < upperLimitBottom) {
        winScrollTop = upperLimitBottom;
      }
    }
    return winScrollTop;
  },
  /**
   * @private
   * @returns {number} Lower side of window
   */
  _getLowerSide: function() {
    var winScrollBottom = $(window).scrollTop() + $(window).height();
    if (this.option.lower_side) {
      var lowerLimitTop = $(this.option.lower_side).offset().top;
      if (winScrollBottom > lowerLimitTop) {
        winScrollBottom = lowerLimitTop;
      }
    }
    return winScrollBottom;
  },
  /**
   * @private
   * @desc イベントハンドラ: 画面スクロール
   * @arg {Object} win - 画面の上端、下端
   * @arg {Object} current - 追尾要素の "現在の" 上端、下端
   * @arg {Object} limit - 下限要素の下端
   * @return {number} 実行された分岐の番号
   */
  _handleScrollMain: function(win, current, limit) {
    /* 分岐の構造
    if (画面上辺は上限より上か?) {
      要素上端は上限へ
    } else if (画面上辺は下限より下か?) {
      要素下端は下限へ
    } else if (画面高は要素高より高いか?) {
      if (下限 - 画面上辺は要素高より短いか?) {
        要素下端は下限へ
      } else {
        要素上端は画面上辺へ
      }
    } else {
      if (画面下辺は下限より下か?) {
        要素下端は下限へ
      } else if (画面下辺 - 上限 は、要素高より長いか?) {
        要素下端は画面下辺へ
      } else {
        要素上端は上限へ
      }
    }
    */
    if (win.scroll_top  < this.follow.offset_top) { // 画面上辺は上限より上か?
      this._move1(); // absolute: 要素上端は上限へ
      return 1;
    } else if (win.scroll_top > limit.offset_bottom) { // 画面上辺は下限より下か?
      this._move2(current, limit); // absolute: 要素下端は下限へ
      return 2;
    } else if ((win.scroll_bottom - win.scroll_top) > (current.offset_bottom - current.offset_top)) { // 画面高は要素高より高いか?
      if ((limit.offset_bottom - win.scroll_top) < (current.offset_bottom - current.offset_top)) { // 下限 - 画面上辺 は、要素高より短いか?
        this._move2(current, limit); // absolute: 要素下端は下限へ
        return 3;
      } else {
        this._move3(); // fixed: 要素上端は画面上辺へ
        return 4;
      }
    } else {
      if (win.scroll_bottom > limit.offset_bottom) { // 画面下辺は下限より下か?
        this._move2(current, limit); // absolute: 要素下端は下限へ
        return 5;
      } else if ((win.scroll_bottom - this.follow.offset_top) > (current.offset_bottom - current.offset_top)) { // 画面下辺 - 上限 は、要素高より長いか?
        this._move4(); // fixed: 要素下端は画面下辺へ
        return 6;
      } else {
        this._move1(); // absolute: 要素上端は上限へ
        return 7;
      }
    }
  },
  /**
   * @private
   * @desc absolute: 要素上端は上限へ
   */
  _move1: function() {
    $(this.follow.elem)
      .css({
        position: 'absolute',
        top: '',
        bottom: '',
        left: '',
        right: ''
      })
      .width(this.follow.width);
  },
  /**
   * @private
   * @desc absolute: 要素下端は下限へ
   * @arg {Object} current - 追尾要素の "現在の" 上端、下端
   * @arg {Object} limit - 下限要素の下端
   */
  _move2: function(current, limit) {
    $(this.follow.elem)
      .css({
        position: 'absolute',
        top: limit.offset_bottom - this.follow.offset_top - (current.offset_bottom - current.offset_top) + this.follow.position_top,
        bottom: 'auto',
        left: '',
        right: ''
      })
      .width(this.follow.width);
  },
  /**
   * @private
   * @desc fixed: 要素上端は画面上辺へ
   */
  _move3: function() {
    $(this.follow.elem)
      .css({
        position: 'fixed',
        top: this._getPositionToStickToWindow(this.option.upper_side),
        bottom: 'auto',
        left: this.follow.offset_left,
        right: 'auto'
      })
      .width(this.follow.width);
  },
  /**
   * @private
   * @desc fixed: 要素下端は画面下辺へ
   */
  _move4: function() {
    $(this.follow.elem)
      .css({
        position: 'fixed',
        top: 'auto',
        bottom: this._getPositionToStickToWindow(this.option.lower_side),
        left: this.follow.offset_left,
        right: 'auto'
      })
      .width(this.follow.width);
  },
  /**
   * @private
   * @arg {object} limit - this.option.upper_side or this.option.lower_side
   * @returns {number} position-top/bottom to stick to window
   */
  _getPositionToStickToWindow: function(limit) {
    if (limit) {
      return this._calcElemHeight(limit);
    } else {
      return 0;
    }
  },
  /**
   * @private
   * @desc イベントハンドラ: 画面リサイズ
   * @return {Object} 単体テストのためにthis.timerを返す
   */
  _handleResize: function() {
    if (this.timer !== false) {
      clearTimeout(this.timer);
    }
    var self = this;
    return this.timer = setTimeout(function() {
      self._moveDefaultPosition.call(self);
      self._setFollow.call(self, self.follow.elem);
      $(window).trigger('scroll');
    }, 200);
  }
});
}));
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 factory(require('jquery')); 
 } else { 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 
/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */
/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;
/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);
		if(mfp.st.callbacks) {
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor
		if( s['transition'] !== undefined ) {
			return true; 
		}
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
		return false;
	};
/**
 * Public functions
 */
MagnificPopup.prototype = {
	constructor: MagnificPopup,
	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);
		mfp.popupsCache = {};
	},
	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {
		var i;
		if(data.isObj === false) { 
			mfp.items = data.items.toArray();
			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}
		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}
		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		if(!mfp.bgOverlay) {
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});
			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});
			mfp.container = _getEl('container', mfp.wrap);
		}
		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');
		if(mfp.st.showCloseBtn) {
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}
		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}
		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}
		if(mfp.st.enableEscapeKey) {
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}
		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});
		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);
		var windowHeight = mfp.wH = _window.height();
		var windowStyles = {};
		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }
		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				$('body, html').css('overflow', 'hidden');
			}
		}
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}
		mfp.updateItemHTML();
		_mfpTrigger('BuildControls');
		$('html').css(windowStyles);
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );
		mfp._lastFocusedEl = document.activeElement;
		setTimeout(function() {
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);
		}, 16);
		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);
		return data;
	},
	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);
		mfp.isOpen = false;
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},
	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);
		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();
		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}
		mfp._removeClassFromMFP(classesToRemove);
		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}
		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;
		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	updateSize: function(winHeight) {
		if(mfp.isIOS) {
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}
		_mfpTrigger('Resize');
	},
	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];
		mfp.contentContainer.detach();
		if(mfp.content)
			mfp.content.detach();
		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}
		var type = item.type;
		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		mfp.currItem = item;
		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;
			_mfpTrigger('FirstMarkupParse', markup);
			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				mfp.currTemplate[type] = true;
			}
		}
		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);
		item.preloaded = true;
		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		mfp.container.prepend(mfp.contentContainer);
		_mfpTrigger('AfterChange');
	},
	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}
		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');
		mfp.contentContainer.append(mfp.content);
	},
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;
		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}
		if(item.el) {
			var types = mfp.types;
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}
			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}
		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);
		return mfp.items[index];
	},
	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};
		if(!options) {
			options = {};
		}
		var eName = 'click.magnificPopup';
		options.mainEl = el;
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}
		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		if(e.type) {
			e.preventDefault();
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},
	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {
		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}
			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}
			var data = {
				status: status,
				text: text
			};
			_mfpTrigger('UpdateStatus', data);
			status = data.status;
			text = data.text;
			mfp.preloader.html(text);
			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});
			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},
	/*
		"Private" helpers that aren't private at all
	 */
	_checkIfClose: function(target) {
		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}
		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;
		if(closeOnContent && closeOnBg) {
			return true;
		} else {
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}
		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );
		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);
				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}
			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},
	_getScrollbarSize: function() {
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}
}; /* MagnificPopup core prototype end */
/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],
	open: function(options, index) {
		_checkInstance();
		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},
	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},
	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},
	defaults: {
		disableOn: 0,
		key: null,
		midClick: false,
		mainClass: '',
		preloader: true,
		focus: '', // CSS selector of input to focus after popup is opened
		closeOnContentClick: false,
		closeOnBgClick: true,
		closeBtnInside: true,
		showCloseBtn: true,
		enableEscapeKey: true,
		modal: false,
		alignTop: false,
		removalDelay: 0,
		prependTo: null,
		fixedContentPos: 'auto',
		fixedBgPos: 'auto',
		overflowY: 'auto',
		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
		tClose: 'Close (Esc)',
		tLoading: 'Loading...',
		autoFocusLast: true
	}
};
$.fn.magnificPopup = function(options) {
	_checkInstance();
	var jqEl = $(this);
	if (typeof options === "string" ) {
		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;
			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}
	} else {
		options = $.extend(true, {}, options);
		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}
		mfp.addGroup(jqEl, options);
	}
	return jqEl;
};
/*>>core*/
/*>>inline*/
var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};
$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {
		initInline: function() {
			mfp.types.push(INLINE_NS);
			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},
		getInline: function(item, template) {
			_putInlineElementsBack();
			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);
				if(el.length) {
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}
					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}
				item.inlineElement = el;
				return el;
			}
			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});
/*>>inline*/
/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};
$.magnificPopup.registerModule(AJAX_NS, {
	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},
	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;
			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {
			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}
			mfp.updateStatus('loading');
			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};
					_mfpTrigger('ParseAjax', temp);
					mfp.appendContent( $(temp.data), AJAX_NS );
					item.finished = true;
					_removeAjaxCursor();
					mfp._setFocus();
					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);
					mfp.updateStatus('ready');
					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);
			mfp.req = $.ajax(opts);
			return '';
		}
	}
});
/*>>ajax*/
/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;
		var src = mfp.st.image.titleSrc;
		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};
$.magnificPopup.registerModule('image', {
	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},
	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';
			mfp.types.push('image');
			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});
			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});
			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;
			if(mfp.st.image.verticalFit) {
				var decr = 0;
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				item.hasSize = true;
				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				item.isCheckingImgSize = false;
				_mfpTrigger('ImageHasSize', item);
				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					item.imgHidden = false;
				}
			}
		},
		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {
			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {
					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}
						if(counter > 200) {
							clearInterval(_imgInterval);
						}
						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};
			mfpSetInterval(1);
		},
		getImage: function(item, template) {
			var guard = 0,
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);
								mfp.updateStatus('ready');
							}
							item.hasSize = true;
							item.loaded = true;
							_mfpTrigger('ImageLoadComplete');
						}
						else {
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}
						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;
			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;
				if(el.is('img')) {
					item.img = item.img.clone();
				}
				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}
			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);
			mfp.resizeImage();
			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);
				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}
			mfp.updateStatus('loading');
			item.loading = true;
			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}
			return template;
		}
	}
});
/*>>image*/
/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};
$.magnificPopup.registerModule('zoom', {
	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},
	proto: {
		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}
			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';
					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;
					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;
			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {
					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');
					image = mfp._getItemToZoom();
					if(!image) {
						showMainContent();
						return;
					}
					animatedImg = getElToAnimate(image);
					animatedImg.css( mfp._getOffset() );
					mfp.wrap.append(animatedImg);
					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {
							showMainContent();
							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images
						}, duration); // this timeout equals animation duration
					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					clearTimeout(openTimeout);
					mfp.st.removalDelay = duration;
					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}
			});
			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},
		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},
		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}
			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );
			/*
			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
			 */
			var obj = {
				width: el.width(),
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}
	}
});
/*>>zoom*/
/*>>iframe*/
var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				if(!isShowing) {
					el[0].src = _emptyPage;
				}
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};
$.magnificPopup.registerModule(IFRAME_NS, {
	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',
		srcAction: 'iframe_src',
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},
	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);
			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
			});
			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},
		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);
			mfp.updateStatus('ready');
			return template;
		}
	}
});
/*>>iframe*/
/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};
$.magnificPopup.registerModule('gallery', {
	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,
		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},
	proto: {
		initGallery: function() {
			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';
			mfp.direction = true; // true - next, false - prev
			if(!gSt || !gSt.enabled ) return false;
			_wrapClasses += ' mfp-gallery';
			_mfpOn(OPEN_EVENT+ns, function() {
				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}
				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});
			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});
			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});
			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);
					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});
					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});
			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});
			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});
		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;
			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);
			if(mfp.items[index].preloaded) {
				return;
			}
			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}
			_mfpTrigger('LazyLoad', item);
			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}
			item.preloaded = true;
		}
	}
});
/*>>gallery*/
/*>>retina*/
var RETINA_NS = 'retina';
$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	}, 
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {
				var st = mfp.st.retina,
					ratio = st.ratio;
				ratio = !isNaN(ratio) ? ratio : ratio();
				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}
		}
	}
});
/*>>retina*/
 _checkInstance(); }));
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/
 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = (function() {
        var instanceUid = 0;
        function Slick(element, settings) {
            var _ = this, dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
        }
        return Slick;
    }());
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }
        _.unload();
        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {},
            _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function() {
                        _.disableTransition();
                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };
    Slick.prototype.getNavTarget = function() {
        var _ = this,
            asNavFor = _.options.asNavFor;
        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
        return asNavFor;
    };
    Slick.prototype.asNavFor = function(index) {
        var _ = this,
            asNavFor = _.getNavTarget();
        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };
    Slick.prototype.applyTransition = function(slide) {
        var _ = this,
            transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }
    };
    Slick.prototype.autoPlayClear = function() {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };
    Slick.prototype.autoPlayIterator = function() {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
        if ( !_.paused && !_.interrupted && !_.focussed ) {
            if ( _.options.infinite === false ) {
                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }
                else if ( _.direction === 0 ) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;
                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }
                }
            }
            _.slideHandler( slideTo );
        }
    };
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === true ) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if( _.slideCount > _.options.slidesToShow ) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }
            } else {
                _.$prevArrow.add( _.$nextArrow )
                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });
            }
        }
    };
    Slick.prototype.buildDots = function() {
        var _ = this,
            i, dot;
        if (_.options.dots === true) {
            _.$slider.addClass('slick-dotted');
            dot = $('<ul />').addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active');
        }
    };
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });
        _.$slider.addClass('slick-slider');
        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };
    Slick.prototype.buildRows = function() {
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if(_.options.rows > 1) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );
            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });
        }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;
        if($target.is('a')) {
            event.preventDefault();
        }
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }
        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return;
        }
    };
    Slick.prototype.checkNavigable = function(index) {
        var _ = this,
            navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
        return index;
    };
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }
        _.$slider.off('focus.slick blur.slick');
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function() {
        var _ = this, originalSlides;
        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove();
        }
        if ( _.$prevArrow && _.$prevArrow.length ) {
            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }
        if ( _.$nextArrow && _.$nextArrow.length ) {
            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');
            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }
        if (_.$slides) {
            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
        _.unslicked = true;
        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };
    Slick.prototype.disableTransition = function(slide) {
        var _ = this,
            transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
            if (callback) {
                setTimeout(function() {
                    _.disableTransition(slideIndex);
                    callback.call();
                }, _.options.speed);
            }
        }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout(function() {
                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide;
    };
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1
                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function() {
        return this;
    };
    Slick.prototype.getSlideCount = function() {
        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }
        if (creation) {
            _.$slider.trigger('init', [_]);
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
        if ( _.options.autoplay ) {
            _.paused = false;
            _.autoPlay();
        }
    };
    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });
                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
                $(this).attr({
                    'role': 'presentation'
                });
                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }
        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }
        _.activateADA();
    };
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
    };
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }
        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if ( _.options.pauseOnHover ) {
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
    };
    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };
    Slick.prototype.lazyLoad = function() {
        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;
        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );
                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });
                };
                imageToLoad.onerror = function() {
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
                };
                imageToLoad.src = imageSource;
            });
        }
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({
            opacity: 1
        });
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if( !_.unslicked ) {
            _.$slider.trigger('afterChange', [_, index]);
            _.animating = false;
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }
            _.swipeLeft = null;
            if ( _.options.autoplay ) {
                _.autoPlay();
            }
            if (_.options.accessibility === true) {
                _.initADA();
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };
    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function( tryCount ) {
        tryCount = tryCount || 1;
        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;
        if ( $imgsToLoad.length ) {
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
            imageToLoad.onload = function() {
                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );
                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }
                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');
                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }
                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function() {
                if ( tryCount < 3 ) {
                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );
                } else {
                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
                    _.progressiveLazyLoad();
                }
            };
            imageToLoad.src = imageSource;
        } else {
            _.$slider.trigger('allImagesLoaded', [ _ ]);
        }
    };
    Slick.prototype.refresh = function( initializing ) {
        var _ = this, currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;
        }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, { currentSlide: currentSlide });
        _.init();
        if( !initializing ) {
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };
    Slick.prototype.registerBreakpoints = function() {
        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;
        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
            _.respondTo = _.options.respondTo || 'window';
            for ( breakpoint in responsiveSettings ) {
                l = _.breakpoints.length-1;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });
        }
    };
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger('reInit', [_]);
    };
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function(position) {
        var _ = this,
            positionProps = {},
            x, y;
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function() {
        var _ = this,
            targetLeft;
        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };
    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {
        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
        var _ = this, l, item, option, value, refresh = false, type;
        if( $.type( arguments[0] ) === 'object' ) {
            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ( $.type( arguments[0] ) === 'string' ) {
            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
                type = 'responsive';
            } else if ( typeof arguments[1] !== 'undefined' ) {
                type = 'single';
            }
        }
        if ( type === 'single' ) {
            _.options[option] = value;
        } else if ( type === 'multiple' ) {
            $.each( option , function( opt, val ) {
                _.options[opt] = val;
            });
        } else if ( type === 'responsive' ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== 'array' ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        }
        if ( refresh ) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
        _.$slider.trigger('setPosition', [_]);
    };
    Slick.prototype.setProps = function() {
        var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');
        _.$slides
            .eq(index)
            .addClass('slick-current');
        if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
                }
                if (index === 0) {
                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');
                }
            }
            _.$slides
                .eq(index)
                .addClass('slick-center');
        } else {
            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
                } else {
                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');
                }
            }
        }
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };
    Slick.prototype.setupInfinite = function() {
        var _ = this,
            i, slideIndex, infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });
            }
        }
    };
    Slick.prototype.interrupt = function( toggle ) {
        var _ = this;
        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
        if (sync === false) {
            _.asNavFor(index);
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
        _.animating = true;
        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if ( _.options.asNavFor ) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }
        _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }
        return 'vertical';
    };
    Slick.prototype.swipeEnd = function(event) {
        var _ = this,
            slideCount,
            direction;
        _.dragging = false;
        _.swiping = false;
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
        if ( _.touchObject.curX === undefined ) {
            return false;
        }
        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }
        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
            direction = _.swipeDirection();
            switch ( direction ) {
                case 'left':
                case 'down':
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case 'right':
                case 'up':
                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
            }
            if( direction != 'vertical' ) {
                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);
            }
        } else {
            if ( _.touchObject.startX !== _.touchObject.curX ) {
                _.slideHandler( _.currentSlide );
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }
        switch (event.data.action) {
            case 'start':
                _.swipeStart(event);
                break;
            case 'move':
                _.swipeMove(event);
                break;
            case 'end':
                _.swipeEnd(event);
                break;
        }
    };
    Slick.prototype.swipeMove = function(event) {
        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }
        swipeDirection = _.swipeDirection();
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function(event) {
        var _ = this,
            touches;
        _.interrupted = true;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.unload = function() {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();
            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');
        }
    };
    Slick.prototype.visibility = function() {
        var _ = this;
        if ( _.options.autoplay ) {
            if ( document[_.hidden] ) {
                _.interrupted = true;
            } else {
                _.interrupted = false;
            }
        }
    };
    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
}));
;
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
"use strict";Array.from||(Array.from=function(){var a=Object.prototype.toString,l=function(t){return"function"==typeof t||"[object Function]"===a.call(t)},o=Math.pow(2,53)-1,d=function(t){var a,e=(a=Number(t),isNaN(a)?0:0!==a&&isFinite(a)?(0<a?1:-1)*Math.floor(Math.abs(a)):a);return Math.min(Math.max(e,0),o)};return function(t){var a=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var e,o=1<arguments.length?arguments[1]:void 0;if(void 0!==o){if(!l(o))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(e=arguments[2])}for(var n,r=d(a.length),s=l(this)?Object(new this(r)):new Array(r),i=0;i<r;)n=a[i],s[i]=o?void 0===e?o(n,i):o.call(e,n,i):n,i+=1;return s.length=r,s}}());var almGetParameterByName=function(t,a){a||(a=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(a);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null};function _toConsumableArray(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}var alm_is_filtering=!1;!function(r){r.fn.almFilter=function(e,o,n){n.target?r(".ajax-load-more-wrap[data-id='"+n.target+"']").each(function(t){var a=r(this);r.fn.almFilterTransition(e,o,n,a)}):r(".ajax-load-more-wrap").each(function(t){var a=r(this);r.fn.almFilterTransition(e,o,n,a)})},r.fn.almFilterTransition=function(t,a,e,o){"slide"===t?o.slideUp(a,function(){n(a,e,o)}):"fade"===t||"masonry"===t?o.fadeOut(a,function(){n(a,e,o)}):n(a,e,o)};var n=function(t,a,e){var o=e.get(0),n=o.querySelectorAll(".alm-listing");[].concat(_toConsumableArray(n)).forEach(function(t){t.innerHTML=""});var r=o.querySelector(".alm-load-more-btn");r&&r.classList.remove("done"),s(t,a,e)},s=function(t,a,e){r.each(a,function(t,a){t=t.replace(/\W+/g,"-").replace(/([a-z\d])([A-Z])/g,"$1-$2"),r(".alm-listing",e).attr("data-"+t,a)}),r.isFunction(r.fn.almFilterComplete)&&r.fn.almFilterComplete(),"function"==typeof almFiltersAddonComplete&&almFiltersAddonComplete(e),alm_is_filtering=!0,e.fadeIn(t),a.target?r(".ajax-load-more-wrap[data-id="+a.target+"]").ajaxloadmore():r(".ajax-load-more-wrap").ajaxloadmore()}}(jQuery);var almMasonry=function t(a,e,o,n,r,s,i,l,d,p){var c=(i+100)/1e3+"s",_="scale(0.5)",g="scale(1)";"zoom-out"===r&&(_="translateY(-20px) scale(1.25)",g="translateY(0) scale(1)"),"slide-up"===r&&(_="translateY(50px)",g="translateY(0)"),"slide-down"===r&&(_="translateY(-50px)",g="translateY(0)"),"none"===r&&(g=_="translateY(0)"),n?isNaN(n)||(n=parseInt(n)):n=o,s="true"===s,p?(a.masonry("destroy"),a.append(e),t(a,e,o,r,s,i,!0,!0,!1)):l&&d?a.imagesLoaded(function(){a.masonry({itemSelector:o,transitionDuration:c,columnWidth:n,horizontalOrder:s,hiddenStyle:{transform:_,opacity:0},visibleStyle:{transform:g,opacity:1}}),almMasonryFadeIn(a[0].parentNode,i)}):e.imagesLoaded(function(){a.append(e).masonry("appended",e)})},almMasonryFadeIn=function(t,a){a/=10;var e=parseInt(t.style.opacity),o=setInterval(function(){.9<e&&(t.style.opacity=1,clearInterval(o)),t.style.opacity=e,e+=.1},a)};function _toConsumableArray(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}!function(v){v.ajaxloadmore=function(n,t){"true"===alm_localize.scrolltop&&v(window).scrollTop(0);var f=this;if(f.AjaxLoadMore={},f.window=v(window),f.page=0,f.posts=0,f.totalposts=0,f.proceed=!1,f.disable_ajax=!1,f.init=!0,f.loading=!0,f.finished=!1,f.prefix="alm-",f.el=n,f.container=n,f.container.addClass("alm-"+t).attr("data-alm-id",t),f.content=v(".alm-ajax",f.container),f.content_preloaded=v(".alm-listing.alm-preloaded",f.container),f.canonical_url=f.el.attr("data-canonical-url"),f.is_search=f.el.attr("data-search"),f.slug=f.el.attr("data-slug"),f.post_id=f.el.attr("data-post-id"),f.id=f.el.attr("data-id")?f.el.attr("data-id"):"",f.repeater=f.content.attr("data-repeater"),f.theme_repeater=f.content.attr("data-theme-repeater"),f.post_type=f.content.attr("data-post-type"),f.post_type=f.post_type.split(","),f.sticky_posts=f.content.attr("data-sticky-posts"),f.btnWrap=v(".alm-btn-wrap",f.container),f.button_label=f.content.attr("data-button-label"),f.button_loading_label=f.content.attr("data-button-loading-label"),f.scroll_distance=f.content.attr("data-scroll-distance"),f.scroll_distance=f.scroll_distance?parseInt(f.scroll_distance):150,f.scroll_container=f.content.attr("data-scroll-container"),f.max_pages=f.content.attr("data-max-pages"),f.max_pages=f.max_pages?parseInt(f.max_pages):0,f.pause_override=f.content.attr("data-pause-override"),f.pause=f.content.attr("data-pause"),f.transition=f.content.attr("data-transition"),f.transition_container=f.content.attr("data-transition-container"),f.tcc=f.content.attr("data-transition-container-classes"),f.speed=250,f.images_loaded=f.content.attr("data-images-loaded"),f.destroy_after=f.content.attr("data-destroy-after"),f.lang=f.content.attr("data-lang"),f.orginal_posts_per_page=f.content.attr("data-posts-per-page"),f.posts_per_page=f.content.attr("data-posts-per-page"),f.offset=f.content.attr("data-offset"),f.cache=f.content.attr("data-cache"),f.cache_id=f.content.attr("data-cache-id"),f.cache_path=f.content.attr("data-cache-path"),f.cache_logged_in=f.content.attr("data-cache-logged-in"),f.cta=f.content.attr("data-cta"),f.cta_position=f.content.attr("data-cta-position"),f.cta_repeater=f.content.attr("data-cta-repeater"),f.cta_theme_repeater=f.content.attr("data-cta-theme-repeater"),f.acf=f.content.attr("data-acf"),f.acf_field_type=f.content.attr("data-acf-field-type"),f.acf_field_name=f.content.attr("data-acf-field-name"),f.acf_post_id=f.content.attr("data-acf-post-id"),f.nextpage=f.content.attr("data-nextpage"),f.nextpage_urls=f.content.attr("data-nextpage-urls"),f.nextpage_scroll=f.content.attr("data-nextpage-scroll"),f.nextpage_pageviews=f.content.attr("data-nextpage-pageviews"),f.nextpage_post_id=f.content.attr("data-nextpage-post-id"),f.nextpage_startpage=f.content.attr("data-nextpage-startpage"),f.previous_post=f.content.attr("data-previous-post"),f.previous_post_id=f.content.attr("data-previous-post-id"),f.previous_post_taxonomy=f.content.attr("data-previous-post-taxonomy"),f.previous_post_excluded_terms=f.content.attr("data-previous-post-excluded-terms"),f.comments=f.content.attr("data-comments"),"true"===f.comments&&(f.content=v(".alm-comments",f.container)),f.comments_post_id=f.content.attr("data-comments_post_id"),f.comments_per_page=f.content.attr("data-comments_per_page"),f.comments_type=f.content.attr("data-comments_type"),f.comments_style=f.content.attr("data-comments_style"),f.comments_template=f.content.attr("data-comments_template"),f.comments_callback=f.content.attr("data-comments_callback"),f.filters=f.content.attr("data-filters"),f.restapi=f.content.attr("data-restapi"),f.restapi_base_url=f.content.attr("data-restapi-base-url"),f.restapi_namespace=f.content.attr("data-restapi-namespace"),f.restapi_endpoint=f.content.attr("data-restapi-endpoint"),f.restapi_template_id=f.content.attr("data-restapi-template-id"),f.restapi_debug=f.content.attr("data-restapi-debug"),f.seo=f.content.attr("data-seo"),f.preloaded=f.content.attr("data-preloaded"),f.preloaded_amount=f.content.attr("data-preloaded-amount"),f.paging=f.content.attr("data-paging"),f.users="true"===f.content.attr("data-users"),f.users&&(f.orginal_posts_per_page=f.content.attr("data-users-per-page"),f.posts_per_page=f.content.attr("data-users-per-page")),"true"===f.filters){f.filters=!0,f.filters_analtyics=f.content.attr("data-filters-analtyics"),f.filters_debug=f.content.attr("data-filters-debug"),f.filters_startpage=0;var a=almGetParameterByName("pg");null!==a&&(f.filters_startpage=parseInt(a),f.page=f.filters_startpage),f.isPaged=!1,0<f.filters_startpage&&(f.isPaged=!0,f.page=f.filters_startpage-1)}else f.filters=!1;"true"===f.restapi?(f.restapi=!0,void 0===f.restapi_debug&&(f.restapi_debug=!1),""===f.restapi_template_id&&(f.restapi=!1)):f.restapi=!1,"true"===f.paging?(f.paging=!0,f.paging_controls=!!f.content.attr("data-paging-controls"),f.paging_show_at_most=f.content.attr("data-paging-show-at-most"),f.paging_classes=f.content.attr("data-paging-classes"),f.paging_init=!0,f.paging_show_at_most=void 0===f.paging_show_at_most?7:f.paging_show_at_most,"true"===f.preloaded&&(f.pause=!0)):f.paging=!1,void 0===f.cache&&(f.cache=!1),void 0===f.cache_logged_in&&(f.cache_logged_in=!1),void 0===f.comments_per_page&&(f.comments_per_page="5"),"true"===f.preloaded?(f.preload_wrap=f.content.prev(".alm-preloaded"),f.preloaded_total_posts=parseInt(f.preload_wrap.attr("data-total-posts")),void 0===f.preloaded_amount&&(f.preloaded_amount=!1),f.preloaded_total_posts<=f.preloaded_amount&&(f.disable_ajax=!0)):f.preloaded="false",void 0===f.seo&&(f.seo=!1),"true"===f.seo&&(f.seo=!0),void 0===f.is_search&&(f.is_search=!1),f.search_value="true"===f.is_search?f.slug:"",f.permalink=f.content.attr("data-seo-permalink"),f.pageview=f.content.attr("data-seo-pageview"),f.start_page=f.content.attr("data-seo-start-page"),f.seo_trailing_slash="false"===f.content.attr("data-seo-trailing-slash")?"":"/",f.seo_leading_slash="true"===f.content.attr("data-seo-leading-slash")?"/":"",f.start_page?(f.seo_scroll=f.content.attr("data-seo-scroll"),f.seo_scroll_speed=f.content.attr("data-seo-scroll-speed"),f.seo_scrolltop=f.content.attr("data-seo-scrolltop"),f.seo_controls=f.content.attr("data-seo-controls"),f.isPaged=!1,1<f.start_page&&(f.isPaged=!0,f.posts_per_page=f.start_page*f.posts_per_page),f.paging&&(f.posts_per_page=f.orginal_posts_per_page)):f.start_page=1,"true"===f.nextpage?(f.nextpage=!0,f.posts_per_page=1):f.nextpage=!1,void 0===f.nextpage_urls&&(f.nextpage_urls="true"),void 0===f.nextpage_scroll&&(f.nextpage_scroll="250:30"),void 0===f.nextpage_pageviews&&(f.nextpage_pageviews="true"),void 0===f.nextpage_post_id&&(f.nextpage=!1,f.nextpage_post_id=null),void 0===f.nextpage_startpage&&(f.nextpage_startpage=1),1<f.nextpage_startpage&&(f.isPaged=!0),f.acf="true"===f.acf,void 0!==f.acf_field_type&&void 0!==f.acf_field_name&&void 0!==f.acf_post_id||(f.acf=!1),"true"===f.previous_post?(f.previous_post=!0,f.previous_post_permalink="",f.previous_post_title="",f.previous_post_slug=""):f.previous_post=!1,void 0===f.previous_post_id&&(f.previous_post_id=""),void 0===f.previous_post_taxonomy&&(f.previous_post_taxonomy=""),void 0===f.previous_post_excluded_terms&&(f.previous_post_excluded_terms=""),f.previous_post_title_template=f.content.attr("data-previous-post-title-template"),f.siteTitle=f.content.attr("data-previous-post-site-title"),f.siteTagline=f.content.attr("data-previous-post-site-tagline"),f.previous_post_pageview=f.content.attr("data-previous-post-pageview"),f.previous_post_scroll=f.content.attr("data-previous-post-scroll"),f.previous_post_scroll_speed=f.content.attr("data-previous-post-scroll-speed"),f.previous_post_scroll_top=f.content.attr("data-previous-post-scrolltop"),f.previous_post_controls=f.content.attr("data-previous-post-controls"),f.offset=void 0===f.offset?0:f.offset,(void 0===f.pause||f.seo&&1<f.start_page)&&(f.pause=!1),"true"===f.preloaded&&f.seo&&0<f.start_page&&(f.pause=!1),"true"===f.preloaded&&f.paging&&(f.pause=!0),void 0===f.repeater&&(f.repeater="default"),void 0===f.theme_repeater&&(f.theme_repeater="null"),f.max_pages=void 0===f.max_pages||0===f.max_pages?1e4:f.max_pages,f.scroll_distance=void 0===f.scroll_distance?150:f.scroll_distance,f.scroll_container=void 0===f.scroll_container?"":f.scroll_container,f.transition=void 0===f.transition?"fade":f.transition,f.tcc=void 0===f.tcc?"":f.tcc,f.is_masonry_preloaded=!1,"masonry"===f.transition&&(f.masonry_init=!0,f.masonry_selector=f.content.attr("data-masonry-selector"),f.masonry_columnwidth=f.content.attr("data-masonry-columnwidth"),f.masonry_animation=f.content.attr("data-masonry-animation"),f.masonry_horizontalorder=f.content.attr("data-masonry-horizontalorder"),void 0===f.masonry_animation&&(f.masonry_animation="standard"),void 0===f.masonry_horizontalorder&&(f.masonry_horizontalorder="true"),f.masonry_wrap=f.content,f.transition_container=!1,document.body.contains(f.content_preloaded.get(0))&&(f.masonry_wrap=f.content_preloaded,f.is_masonry_preloaded=!0)),void 0===f.content.attr("data-scroll")?f.scroll=!0:"false"===f.content.attr("data-scroll")?f.scroll=!1:f.scroll=!0,f.transition_container=void 0===f.transition_container||"true"===f.transition_container,f.images_loaded=void 0===f.images_loaded?"false":f.images_loaded,f.button_label=void 0===f.button_label?"Older Posts":f.button_label,f.button_loading_label=void 0!==f.button_loading_label&&f.button_loading_label,f.paging?f.content.parent().addClass("loading"):f.button=v(".alm-load-more-btn",f.container),f.AjaxLoadMore.loadPosts=function(){if(!f.disable_ajax)if(f.paging||(f.button.addClass("loading"),!1!==f.button_loading_label&&f.button.html(f.button_loading_label)),f.container.addClass("alm-loading"),f.loading=!0,"true"!==f.cache||f.cache_logged_in)f.AjaxLoadMore.ajax("standard");else{var t;if(f.init&&f.seo&&f.isPaged){t=f.cache_path+f.cache_id+"/page-1-"+f.start_page+".html"}else if(f.nextpage){var a;f.paging?a=parseInt(f.page)+1:(a=parseInt(f.page)+2,f.isPaged&&(a=parseInt(f.page)+parseInt(f.nextpage_startpage)+1)),t=f.cache_path+f.cache_id+"/page-"+a+".html"}else t=f.previous_post?f.cache_path+f.cache_id+"/"+f.previous_post_id+".html":f.cache_path+f.cache_id+"/page-"+(f.page+1)+".html";v.get(t,function(t){f.AjaxLoadMore.success(t,!0)}).fail(function(){f.AjaxLoadMore.ajax("standard")})}},f.AjaxLoadMore.ajax=function(a){var t="alm_query_posts";if(f.acf_array="",f.acf&&("relationship"!==f.acf_field_type&&(t="alm_acf_query"),f.acf_array={acf:"true",post_id:f.acf_post_id,field_type:f.acf_field_type,field_name:f.acf_field_name}),f.nextpage_array="",f.nextpage&&(t="alm_nextpage_query",f.nextpage_array={nextpage:"true",urls:f.nextpage_urls,scroll:f.nextpage_scroll,pageviews:f.nextpage_pageviews,post_id:f.nextpage_post_id,startpage:f.nextpage_startpage}),f.previous_post_array="",f.previous_post&&(f.previous_post_array={previous_post:"true",id:f.previous_post_id,slug:f.previous_post_slug}),f.comments_array="","true"===f.comments&&(t="alm_comments_query",f.posts_per_page=f.comments_per_page,f.comments_array={comments:"true",post_id:f.comments_post_id,per_page:f.comments_per_page,type:f.comments_type,style:f.comments_style,template:f.comments_template,callback:f.comments_callback}),f.users_array="",f.users&&(t="alm_users_query",f.users_array={users:"true",role:f.content.attr("data-users-role"),include:f.content.attr("data-users-include"),exclude:f.content.attr("data-users-exclude"),per_page:f.posts_per_page,order:f.content.attr("data-users-order"),orderby:f.content.attr("data-users-orderby")}),f.cta_array="","true"===f.cta&&(f.cta_array={cta:"true",cta_position:f.cta_position,cta_repeater:f.cta_repeater,cta_theme_repeater:f.cta_theme_repeater}),f.restapi){var i=wp.template(f.restapi_template_id),e=f.restapi_base_url+"/"+f.restapi_namespace+"/"+f.restapi_endpoint,o={id:n.attr("data-id"),post_id:f.post_id,posts_per_page:f.posts_per_page,page:f.page,offset:f.offset,slug:f.slug,canonical_url:f.canonical_url,post_type:f.post_type,post_format:f.content.attr("data-post-format"),category:f.content.attr("data-category"),category__not_in:f.content.attr("data-category-not-in"),tag:f.content.attr("data-tag"),tag__not_in:f.content.attr("data-tag-not-in"),taxonomy:f.content.attr("data-taxonomy"),taxonomy_terms:f.content.attr("data-taxonomy-terms"),taxonomy_operator:f.content.attr("data-taxonomy-operator"),taxonomy_relation:f.content.attr("data-taxonomy-relation"),meta_key:f.content.attr("data-meta-key"),meta_value:f.content.attr("data-meta-value"),meta_compare:f.content.attr("data-meta-compare"),meta_relation:f.content.attr("data-meta-relation"),meta_type:f.content.attr("data-meta-type"),author:f.content.attr("data-author"),year:f.content.attr("data-year"),month:f.content.attr("data-month"),day:f.content.attr("data-day"),post_status:f.content.attr("data-post-status"),order:f.content.attr("data-order"),orderby:f.content.attr("data-orderby"),post__in:f.content.attr("data-post-in"),post__not_in:f.content.attr("data-post-not-in"),search:f.content.attr("data-search"),custom_args:f.content.attr("data-custom-args"),lang:f.lang,preloaded:f.preloaded,preloaded_amount:f.preloaded_amount,seo_start_page:f.start_page};v.ajax({type:"GET",url:e,data:o,dataType:"JSON",beforeSend:function(){1==f.page||f.paging||f.button.addClass("loading")},success:function(t){var e="",o=t.html,a=t.meta,n=a.postcount,r=a.totalposts;v.each(o,function(t){var a=o[t];"true"===f.restapi_debug&&console.log(a),e+=i(a)});var s={html:e,meta:{postcount:n,totalposts:r}};f.AjaxLoadMore.success(s,!1)}})}else v.ajax({type:"GET",url:alm_localize.ajaxurl,dataType:"JSON",data:{action:t,nonce:alm_localize.alm_nonce,query_type:a,id:n.attr("data-id"),post_id:f.post_id,slug:f.slug,canonical_url:f.canonical_url,cache_id:f.cache_id,cache_logged_in:f.cache_logged_in,repeater:f.repeater,theme_repeater:f.theme_repeater,acf:f.acf_array,nextpage:f.nextpage_array,cta:f.cta_array,comments:f.comments_array,users:f.users_array,post_type:f.post_type,sticky_posts:f.sticky_posts,post_format:f.content.attr("data-post-format"),category:f.content.attr("data-category"),category__not_in:f.content.attr("data-category-not-in"),tag:f.content.attr("data-tag"),tag__not_in:f.content.attr("data-tag-not-in"),taxonomy:f.content.attr("data-taxonomy"),taxonomy_terms:f.content.attr("data-taxonomy-terms"),taxonomy_operator:f.content.attr("data-taxonomy-operator"),taxonomy_relation:f.content.attr("data-taxonomy-relation"),meta_key:f.content.attr("data-meta-key"),meta_value:f.content.attr("data-meta-value"),meta_compare:f.content.attr("data-meta-compare"),meta_relation:f.content.attr("data-meta-relation"),meta_type:f.content.attr("data-meta-type"),author:f.content.attr("data-author"),year:f.content.attr("data-year"),month:f.content.attr("data-month"),day:f.content.attr("data-day"),post_status:f.content.attr("data-post-status"),order:f.content.attr("data-order"),orderby:f.content.attr("data-orderby"),post__in:f.content.attr("data-post-in"),post__not_in:f.content.attr("data-post-not-in"),exclude:f.content.attr("data-exclude"),search:f.content.attr("data-search"),custom_args:f.content.attr("data-custom-args"),posts_per_page:f.posts_per_page,page:f.page,offset:f.offset,preloaded:f.preloaded,preloaded_amount:f.preloaded_amount,seo_start_page:f.start_page,paging:f.paging,previous_post:f.previous_post_array,lang:f.lang},beforeSend:function(){1==f.page||f.paging||f.button.addClass("loading")},success:function(t){"standard"===a?f.AjaxLoadMore.success(t,!1):"totalpages"===a&&f.paging&&f.nextpage?v.isFunction(v.fn.almBuildPagination)&&v.fn.almBuildPagination(t,f):"totalposts"===a&&f.paging&&v.isFunction(v.fn.almBuildPagination)&&v.fn.almBuildPagination(t,f)},error:function(t,a,e){f.AjaxLoadMore.error(t,a,e)}})},f.paging&&(f.nextpage?f.AjaxLoadMore.ajax("totalpages"):f.AjaxLoadMore.ajax("totalposts")),f.AjaxLoadMore.success=function(t,a){f.previous_post&&f.AjaxLoadMore.getPreviousPost();var e,o,n,r='style="opacity: 0; height: 0;"';if(a?e=t:(e=t.html,o=t.meta,f.posts=f.posts+o.postcount,n=o.postcount,f.totalposts=o.totalposts,"true"===f.preloaded&&(f.totalposts=f.totalposts-f.preloaded_amount)),f.data=v(e),a&&(n=f.data.length),f.init&&(f.paging?0<n&&(f.el=v('<div class="alm-reveal'+f.tcc+'" '+r+"/>"),f.el.append('<div class="alm-paging-content'+f.tcc+'"></div><div class="alm-paging-loading"></div>'),v(".alm-paging-content",f.el).append(f.data),f.content.append(f.el),f.AjaxLoadMore.fadeIn(f.el.get(0),f.speed),f.content.parent().removeClass("loading"),f.AjaxLoadMore.resetBtnText(),setTimeout(function(){v(".alm-paging-content",f.el).fadeIn(f.speed,"alm_easeInOutQuad",function(){var t=parseInt(f.content.css("padding-top")),a=parseInt(f.content.css("padding-bottom"));f.content.css("height",f.el.height()+t+a+"px"),v.isFunction(v.fn.almFadePageControls)&&v.fn.almFadePageControls(f.btnWrap)})},f.speed)):f.button.html(f.button_label),0===n&&(f.paging&&v.isFunction(v.fn.almPagingEmpty)&&v.fn.almPagingEmpty(f),v.isFunction(v.fn.almEmpty)&&v.fn.almEmpty(f)),f.isPaged&&(f.posts_per_page=f.users?f.content.attr("data-users-per-page"):f.content.attr("data-posts-per-page"),f.start_page&&(f.page=f.start_page-1),f.filters&&f.filters_startpage&&(f.page=f.filters_startpage-1,f.posts_per_page=f.content.attr("data-posts-per-page")))),0<n){if(f.paging)f.init?(f.container.removeClass("alm-loading"),f.AjaxLoadMore.triggerAddons(f)):v(".alm-paging-content",f.el).html("").append(f.data).almWaitForImages().done(function(){v(".alm-paging-loading",f.el).fadeOut(f.speed),v.isFunction(v.fn.almOnPagingComplete)&&v.fn.almOnPagingComplete(f),f.container.removeClass("alm-loading"),f.AjaxLoadMore.triggerAddons(f)});else{if(f.previous_post)f.el=v('<div class="alm-reveal alm-previous-post post-'+f.previous_post_id+'" '+r+' data-id="'+f.previous_post_id+'" data-title="'+f.previous_post_title+'" data-url="'+f.previous_post_permalink+'" data-page="'+f.page+'"/>'),f.el.append(f.data);else if(f.transition_container){var s=void 0,i=window.location.search;if(f.init&&1<f.start_page){var l=[],d=parseInt(f.posts_per_page);"true"===f.cta&&(d+=1);Math.ceil(n/d);for(var p=0;p<n;p+=d)l.push(f.data.slice(p,d+p));f.el=f.content;for(var c=0;c<l.length;c++){var _="true"===f.preloaded?1:0,g=void 0;0<c||"true"===f.preloaded?(s=c+1+_,g="default"===f.permalink?v('<div class="alm-reveal alm-seo'+f.tcc+'" data-url="'+f.canonical_url+f.search_value+"&paged="+s+'" data-page="'+s+'" />'):v('<div class="alm-reveal alm-seo'+f.tcc+'" data-url="'+f.canonical_url+f.seo_leading_slash+"page/"+s+f.seo_trailing_slash+f.search_value+'" data-page="'+s+'" />')):g=v('<div class="alm-reveal alm-seo'+f.tcc+'" data-url="'+f.canonical_url+f.search_value+'" data-page="1" />'),g.append(l[c]),g=v(g),f.el.append(g)}}else{if(f.seo&&0<f.page||"true"===f.preloaded){var u="true"===f.preloaded?1:0;s=f.page+1+u,f.seo?"default"===f.permalink?f.el=v('<div class="alm-reveal alm-seo'+f.tcc+'" '+r+' data-url="'+f.canonical_url+f.search_value+"&paged="+s+'" data-page="'+s+'" />'):f.el=v('<div class="alm-reveal alm-seo'+f.tcc+'" '+r+' data-url="'+f.canonical_url+f.seo_leading_slash+"page/"+s+f.seo_trailing_slash+f.search_value+'" data-page="'+s+'" />'):f.filters?f.el=v('<div class="alm-reveal alm-filters'+f.tcc+'" '+r+' data-url="'+f.canonical_url+i+'" data-page="'+s+'" />'):f.el=v('<div class="alm-reveal'+f.tcc+'" '+r+" />")}else f.filters?f.el=v('<div class="alm-reveal alm-filters'+f.tcc+'" '+r+' data-url="'+f.canonical_url+i+'" data-page="'+(f.page+1)+'" />'):f.seo?f.el=v('<div class="alm-reveal alm-seo'+f.tcc+'" '+r+' data-url="'+f.canonical_url+f.search_value+'" data-page="1" />'):f.el=v('<div class="alm-reveal'+f.tcc+'" '+r+" />");f.el.append(f.data)}}else f.el=f.data;("masonry"!==f.transition||f.init&&!f.is_masonry_preloaded)&&f.content.append(f.el),"masonry"===f.transition?(almMasonry(f.masonry_wrap,f.el,f.masonry_selector,f.masonry_columnwidth,f.masonry_animation,f.masonry_horizontalorder,f.speed,f.masonry_init,f.init,alm_is_filtering),f.masonry_init=!1,f.AjaxLoadMore.transitionEnd()):"none"===f.transition?(f.AjaxLoadMore.fadeIn(f.el.get(0),0),f.AjaxLoadMore.transitionEnd()):"true"===f.images_loaded?f.el.almWaitForImages().done(function(){f.transition_container&&f.AjaxLoadMore.fadeIn(f.el.get(0),f.speed),f.AjaxLoadMore.transitionEnd()}):(f.transition_container&&f.AjaxLoadMore.fadeIn(f.el.get(0),f.speed),f.AjaxLoadMore.transitionEnd())}v.isFunction(v.fn.almComplete)&&("true"===f.images_loaded?f.el.almWaitForImages().done(function(){v.fn.almComplete(f)}):v.fn.almComplete(f)),f.cache?n<f.posts_per_page&&f.AjaxLoadMore.triggerDone():f.posts>=f.totalposts&&!f.previous_post&&f.AjaxLoadMore.triggerDone()}else f.paging||(f.button.delay(f.speed).removeClass("loading").addClass("done"),f.AjaxLoadMore.resetBtnText()),f.AjaxLoadMore.triggerDone();if(void 0!==f.destroy_after&&""!==f.destroy_after){var m=f.page+1;"true"===f.preloaded&&m++,m==f.destroy_after&&f.AjaxLoadMore.destroyed()}alm_is_filtering=!1,f.init=!1},f.AjaxLoadMore.pagingPreloadedInit=function(t){t=null==t?"":t,f.el=v('<div class="alm-reveal'+f.tcc+'"/>'),f.el.append('<div class="alm-paging-content">'+t+'</div><div class="alm-paging-loading"></div>'),f.content.append(f.el),f.content.parent().removeClass("loading"),f.AjaxLoadMore.resetBtnText();var a=parseInt(f.content.css("padding-top")),e=parseInt(f.content.css("padding-bottom"));f.content.css("height",f.el.height()+a+e+"px"),""===t&&(v.isFunction(v.fn.almPagingEmpty)&&v.fn.almPagingEmpty(f),v.isFunction(v.fn.almEmpty)&&v.fn.almEmpty(f)),setTimeout(function(){v.isFunction(v.fn.almFadePageControls)&&v.fn.almFadePageControls(f.btnWrap)},f.speed)},f.AjaxLoadMore.pagingNextpageInit=function(t){f.el=v('<div class="alm-reveal alm-nextpage"/>'),f.el.append('<div class="alm-paging-content">'+t+'</div><div class="alm-paging-loading"></div>'),f.el.appendTo(f.content),f.content.parent().removeClass("loading"),f.AjaxLoadMore.resetBtnText();var a=parseInt(f.content.css("padding-top")),e=parseInt(f.content.css("padding-bottom"));f.content.css("height",f.el.height()+a+e+"px"),v.isFunction(v.fn.almSetNextPageVars)&&v.fn.almSetNextPageVars(f),setTimeout(function(){v.isFunction(v.fn.almFadePageControls)&&v.fn.almFadePageControls(f.btnWrap),v.isFunction(v.fn.almOnWindowResize)&&v.fn.almOnWindowResize(f)},f.speed)},f.fetchingPreviousPost=!1,f.AjaxLoadMore.getPreviousPost=function(){f.fetchingPreviousPost=!0;var t={action:"alm_query_previous_post",id:f.previous_post_id,taxonomy:f.previous_post_taxonomy,excluded_terms:f.previous_post_excluded_terms};v.ajax({type:"GET",dataType:"JSON",url:alm_localize.ajaxurl,data:t,success:function(t){t.has_previous_post?(f.content.attr("data-previous-post-id",t.prev_id),f.previous_post_id=t.prev_id,f.previous_post_permalink=t.prev_permalink,f.previous_post_title=t.prev_title,f.previous_post_slug=t.prev_slug):t.has_previous_post||f.AjaxLoadMore.triggerDone(),v.isFunction(v.fn.almSetPreviousPost)&&v.fn.almSetPreviousPost(f,t.current_id,t.permalink,t.title),f.fetchingPreviousPost=!1},error:function(t,a,e){f.AjaxLoadMore.error(t,a,e),f.fetchingPreviousPost=!1}})},f.AjaxLoadMore.triggerAddons=function(t){v.isFunction(v.fn.almSEO)&&t.seo&&v.fn.almSEO(t,!1),v.isFunction(v.fn.almSetNextPage)&&v.fn.almSetNextPage(t)},f.AjaxLoadMore.triggerDone=function(){f.loading=!1,f.finished=!0,f.paging||f.button.addClass("done"),v.isFunction(v.fn.almDone)&&setTimeout(function(){v.fn.almDone(f)},f.speed+10)},f.AjaxLoadMore.resetBtnText=function(){!1===f.button_loading_label||f.paging||f.button.html(f.button_label)},f.AjaxLoadMore.error=function(t,a,e){f.loading=!1,f.paging||(f.button.removeClass("loading"),f.AjaxLoadMore.resetBtnText()),console.log(e)},f.paging||f.fetchingPreviousPost||(f.button.unbind("click"),f.button.on("click",function(t){t.preventDefault(),"true"===f.pause&&(f.pause=!1,f.pause_override=!1,f.AjaxLoadMore.loadPosts()),f.loading||f.finished||v(this).hasClass("done")||(f.loading=!0,f.page++,f.AjaxLoadMore.loadPosts()),f.filters&&"function"==typeof almFiltersPaged&&almFiltersPaged(f)})),f.paging&&(f.window.unbind("resizeEnd"),f.window.bind("resizeEnd",function(){v.isFunction(v.fn.almOnWindowResize)&&v.fn.almOnWindowResize(f)}),f.window.unbind("resize"),f.window.bind("resize",function(){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout(function(){v(this).trigger("resizeEnd")},f.speed)})),f.AjaxLoadMore.isVisible=function(){return f.visible=!1,f.el.is(":visible")&&(f.visible=!0),f.visible},f.scroll&&!f.paging&&(""!==f.scroll_container&&(f.window=v(f.scroll_container)),f.window.bind("scroll touchstart",function(){if(f.AjaxLoadMore.isVisible()&&!f.fetchingPreviousPost){var t=f.button.offset().top,a=Math.round(t-(f.window.height()-f.scroll_distance)),e=f.window.scrollTop()>=a;""!==f.scroll_container&&(e=f.button.offset().top-(f.window.height()-f.scroll_distance)<f.window.offset().top),!f.loading&&!f.finished&&e&&f.page<f.max_pages-1&&f.proceed&&"true"===f.pause&&"true"===f.pause_override?f.button.trigger("click"):!f.loading&&!f.finished&&e&&f.page<f.max_pages-1&&f.proceed&&"true"!==f.pause&&f.button.trigger("click")}})),f.AjaxLoadMore.destroyed=function(){f.disable_ajax=!0,f.paging||(f.button.delay(f.speed).fadeOut(f.speed),v.isFunction(v.fn.almDestroyed)&&v.fn.almDestroyed(f))},f.AjaxLoadMore.fadeIn=function(t,a){if(0==a)t.style.opacity=1,t.style.height="auto";else{a/=10;var e=0,o=setInterval(function(){.9<e&&(t.style.opacity=1,clearInterval(o)),t.style.opacity=e,e+=.1},a);t.style.height="auto"}},f.AjaxLoadMore.transitionEnd=function(){setTimeout(function(){f.loading=!1,f.container.removeClass("alm-loading"),f.AjaxLoadMore.triggerAddons(f),f.paging||(f.button.delay(f.speed).removeClass("loading"),f.AjaxLoadMore.resetBtnText())},f.speed)},f.AjaxLoadMore.init=function(){("true"===f.preloaded&&1==f.destroy_after&&f.AjaxLoadMore.destroyed(),f.paging||f.previous_post||(f.disable_ajax?(f.finished=!0,f.button.addClass("done")):"true"===f.pause?(f.button.html(f.button_label),f.loading=!1):f.AjaxLoadMore.loadPosts()),f.previous_post&&(f.AjaxLoadMore.getPreviousPost(),f.loading=!1),"true"===f.preloaded&&f.seo&&!f.paging&&setTimeout(function(){v.isFunction(v.fn.almSEO)&&f.start_page<1&&v.fn.almSEO(f,!0)},f.speed),"true"!==f.preloaded||f.paging||setTimeout(function(){f.preloaded_total_posts<=parseInt(f.preloaded_amount)&&f.AjaxLoadMore.triggerDone(),0==f.preloaded_total_posts&&v.isFunction(v.fn.almEmpty)&&v.fn.almEmpty(f)},f.speed),f.nextpage)&&(1<v(".alm-nextpage").length&&v(".alm-nextpage").length==v(".alm-nextpage").eq(0).data("total-pages")&&f.AjaxLoadMore.triggerDone());f.window.bind("load",function(){f.is_masonry_preloaded&&(almMasonry(f.masonry_wrap,f.el,f.masonry_selector,f.masonry_columnwidth,f.masonry_animation,f.masonry_horizontalorder,f.speed,f.masonry_init,!0,!1),f.masonry_init=!1)})},f.AjaxLoadMore.init(),setTimeout(function(){f.proceed=!0},150),v.fn.almUpdateCurrentPage=function(t,a,e){e.page=t,e.nextpage&&!e.paging&&(e.page=e.page-1);var o="";e.paging_init&&"true"===e.preloaded?(o=v(".alm-preloaded .alm-reveal",e.el).html(),v(".alm-preloaded",e.el).remove(),e.preloaded_amount=0,e.AjaxLoadMore.pagingPreloadedInit(o),e.paging_init=!1,e.init=!1):e.paging_init&&e.nextpage?(o=v(".alm-nextpage",e.el).html(),v(".alm-nextpage",e.el).remove(),e.AjaxLoadMore.pagingNextpageInit(o),e.paging_init=!1,e.init=!1):e.AjaxLoadMore.loadPosts()},v.fn.almGetParentContainer=function(){return f.el.closest("#ajax-load-more")},v.fn.almGetObj=function(){return f},v.fn.almTriggerClick=function(){f.button.trigger("click")},v.easing.alm_easeInOutQuad=function(t,a,e,o,n){return(a/=n/2)<1?o/2*a*a+e:-o/2*(--a*(a-2)-1)+e}},v.fn.ajaxloadmore=function(){return this.each(function(t){new v.ajaxloadmore(v(this),t)})};var t=document.querySelectorAll(".ajax-load-more-wrap");t.length&&[].concat(_toConsumableArray(t)).forEach(function(t,a){new v.ajaxloadmore(v(t),a)})}(jQuery);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(require("jquery")):t(jQuery)}(function(g){var u="almWaitForImages";g.almWaitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},g.expr[":"]["has-src"]=function(t){return g(t).is('img[src][src!=""]')},g.expr[":"].uncached=function(t){return!!g(t).is(":has-src")&&!t.complete},g.fn.almWaitForImages=function(){var l,d,e,p=0,c=0,_=g.Deferred();if(g.isPlainObject(arguments[0])?(e=arguments[0].waitForAll,d=arguments[0].each,l=arguments[0].finished):1===arguments.length&&"boolean"===g.type(arguments[0])?e=arguments[0]:(l=arguments[0],d=arguments[1],e=arguments[2]),l=l||g.noop,d=d||g.noop,e=!!e,!g.isFunction(l)||!g.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var r=g(this),s=[],t=g.almWaitForImages.hasImageProperties||[],a=g.almWaitForImages.hasImageAttributes||[],i=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?r.find("*").addBack().each(function(){var n=g(this);n.is("img:has-src")&&s.push({src:n.attr("src"),element:n[0]}),g.each(t,function(t,a){var e,o=n.css(a);if(!o)return!0;for(;e=i.exec(o);)s.push({src:e[2],element:n[0]})}),g.each(a,function(t,a){var e,o=n.attr(a);if(!o)return!0;e=o.split(","),g.each(e,function(t,a){a=g.trim(a).split(" ")[0],s.push({src:a,element:n[0]})})})}):r.find("img:has-src").each(function(){s.push({src:this.src,element:this})}),p=s.length,(c=0)===p&&(l.call(r[0]),_.resolveWith(r[0])),g.each(s,function(t,o){var a=new Image,n="load."+u+" error."+u;g(a).one(n,function t(a){var e=[c,p,"load"==a.type];if(c++,d.apply(o.element,e),_.notifyWith(o.element,e),g(this).off(n,t),c==p)return l.call(r[0]),_.resolveWith(r[0]),!1}),a.src=o.src})}),_.promise()}});
piAId='530592';piCId='18046';piHostname='pi.pardot.com';(function(){function async_load(){var s=document.createElement('script');s.type='text/javascript';s.src=('https:'==document.location.protocol?'https://pi':'http://cdn')+'.pardot.com/pd.js';var c=document.getElementsByTagName('script')[0];c.parentNode.insertBefore(s,c);}
if(window.attachEvent){window.attachEvent('onload',async_load);}
else{window.addEventListener('load',async_load,false);}})();