import{a as h,r as re,R as zt}from"./vendor-7d1efa17.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Q=function(){return Q=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Q.apply(this,arguments)};function De(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function X(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}function Pt(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var nr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rr=Pt(function(e){return nr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ar(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ir(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var or=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ir(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ar(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),q="-ms-",lt="-moz-",M="-webkit-",Pn="comm",Rt="rule",At="decl",sr="@import",Rn="@keyframes",cr=Math.abs,pt=String.fromCharCode,lr=Object.assign;function ur(e,t){return V(e,0)^45?(((t<<2^V(e,0))<<2^V(e,1))<<2^V(e,2))<<2^V(e,3):0}function An(e){return e.trim()}function fr(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Ot(e,t){return e.indexOf(t)}function V(e,t){return e.charCodeAt(t)|0}function Ye(e,t,n){return e.slice(t,n)}function ve(e){return e.length}function Mt(e){return e.length}function nt(e,t){return t.push(e),e}function dr(e,t){return e.map(t).join("")}var vt=1,je=1,Mn=0,G=0,F=0,He="";function ht(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:vt,column:je,length:o,return:""}}function Ve(e,t){return lr(ht("",null,null,"",null,null,0),e,{length:-e.length},t)}function pr(){return F}function vr(){return F=G>0?V(He,--G):0,je--,F===10&&(je=1,vt--),F}function J(){return F=G<Mn?V(He,G++):0,je++,F===10&&(je=1,vt++),F}function me(){return V(He,G)}function at(){return G}function Je(e,t){return Ye(He,e,t)}function Ke(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dn(e){return vt=je=1,Mn=ve(He=e),G=0,[]}function $n(e){return He="",e}function it(e){return An(Je(G-1,St(e===91?e+2:e===40?e+1:e)))}function hr(e){for(;(F=me())&&F<33;)J();return Ke(e)>2||Ke(F)>3?"":" "}function mr(e,t){for(;--t&&J()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return Je(e,at()+(t<6&&me()==32&&J()==32))}function St(e){for(;J();)switch(F){case e:return G;case 34:case 39:e!==34&&e!==39&&St(F);break;case 40:e===41&&St(e);break;case 92:J();break}return G}function gr(e,t){for(;J()&&e+F!==47+10;)if(e+F===42+42&&me()===47)break;return"/*"+Je(t,G-1)+"*"+pt(e===47?e:J())}function br(e){for(;!Ke(me());)J();return Je(e,G)}function Vt(e){return $n(ot("",null,null,null,[""],e=Dn(e),0,[0],e))}function ot(e,t,n,r,a,i,o,s,c){for(var u=0,l=0,m=o,k=0,b=0,y=0,d=1,x=1,S=1,O=0,w="",p=a,v=i,f=r,g=w;x;)switch(y=O,O=J()){case 40:if(y!=108&&V(g,m-1)==58){Ot(g+=D(it(O),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:g+=it(O);break;case 9:case 10:case 13:case 32:g+=hr(y);break;case 92:g+=mr(at()-1,7);continue;case 47:switch(me()){case 42:case 47:nt(yr(gr(J(),at()),t,n),c);break;default:g+="/"}break;case 123*d:s[u++]=ve(g)*S;case 125*d:case 59:case 0:switch(O){case 0:case 125:x=0;case 59+l:b>0&&ve(g)-m&&nt(b>32?qt(g+";",r,n,m-1):qt(D(g," ","")+";",r,n,m-2),c);break;case 59:g+=";";default:if(nt(f=Ut(g,t,n,u,l,a,s,w,p=[],v=[],m),i),O===123)if(l===0)ot(g,t,f,f,p,i,m,s,v);else switch(k===99&&V(g,3)===110?100:k){case 100:case 109:case 115:ot(e,f,f,r&&nt(Ut(e,f,f,0,0,a,s,w,a,p=[],m),v),a,v,m,s,r?p:v);break;default:ot(g,f,f,f,[""],v,0,s,v)}}u=l=b=0,d=S=1,w=g="",m=o;break;case 58:m=1+ve(g),b=y;default:if(d<1){if(O==123)--d;else if(O==125&&d++==0&&vr()==125)continue}switch(g+=pt(O),O*d){case 38:S=l>0?1:(g+="\f",-1);break;case 44:s[u++]=(ve(g)-1)*S,S=1;break;case 64:me()===45&&(g+=it(J())),k=me(),l=m=ve(w=g+=br(at())),O++;break;case 45:y===45&&ve(g)==2&&(d=0)}}return i}function Ut(e,t,n,r,a,i,o,s,c,u,l){for(var m=a-1,k=a===0?i:[""],b=Mt(k),y=0,d=0,x=0;y<r;++y)for(var S=0,O=Ye(e,m+1,m=cr(d=o[y])),w=e;S<b;++S)(w=An(d>0?k[S]+" "+O:D(O,/&\f/g,k[S])))&&(c[x++]=w);return ht(e,t,n,a===0?Rt:s,c,u,l)}function yr(e,t,n){return ht(e,t,n,Pn,pt(pr()),Ye(e,2,-2),0)}function qt(e,t,n,r){return ht(e,t,n,At,Ye(e,0,r),Ye(e,r+1,-1),r)}function Ae(e,t){for(var n="",r=Mt(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Xt(e,t,n,r){switch(e.type){case sr:case At:return e.return=e.return||e.value;case Pn:return"";case Rn:return e.return=e.value+"{"+Ae(e.children,r)+"}";case Rt:e.value=e.props.join(",")}return ve(n=Ae(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yt(e){var t=Mt(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function xr(e){return function(t){t.root||(t=t.return)&&e(t)}}var wr=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var a=t(r);return n.set(r,a),a}},Or=function(t,n,r){for(var a=0,i=0;a=i,i=me(),a===38&&i===12&&(n[r]=1),!Ke(i);)J();return Je(t,G)},Sr=function(t,n){var r=-1,a=44;do switch(Ke(a)){case 0:a===38&&me()===12&&(n[r]=1),t[r]+=Or(G-1,n,r);break;case 2:t[r]+=it(a);break;case 4:if(a===44){t[++r]=me()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=pt(a)}while(a=J());return t},kr=function(t,n){return $n(Sr(Dn(t),n))},Kt=new WeakMap,Cr=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Kt.get(r))&&!a){Kt.set(t,!0);for(var i=[],o=kr(n,i),s=r.props,c=0,u=0;c<o.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?o[c].replace(/&\f/g,s[l]):s[l]+" "+o[c]}}},Er=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Tn(e,t){switch(ur(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+lt+e+q+e+e;case 6828:case 4268:return M+e+q+e+e;case 6165:return M+e+q+"flex-"+e+e;case 5187:return M+e+D(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return M+e+q+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return M+e+q+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+q+D(e,"shrink","negative")+e;case 5292:return M+e+q+D(e,"basis","preferred-size")+e;case 6060:return M+"box-"+D(e,"-grow","")+M+e+q+D(e,"grow","positive")+e;case 4554:return M+D(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ve(e)-1-t>6)switch(V(e,t+1)){case 109:if(V(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+lt+(V(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ot(e,"stretch")?Tn(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(V(e,t+1)!==115)break;case 6444:switch(V(e,ve(e)-3-(~Ot(e,"!important")&&10))){case 107:return D(e,":",":"+M)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(V(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+q+"$2box$3")+e}break;case 5936:switch(V(e,t+11)){case 114:return M+e+q+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+q+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+q+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+q+e+e}return e}var Pr=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case At:t.return=Tn(t.value,t.length);break;case Rn:return Ae([Ve(t,{value:D(t.value,"@","@"+M)})],a);case Rt:if(t.length)return dr(t.props,function(i){switch(fr(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ae([Ve(t,{props:[D(i,/:(read-\w+)/,":"+lt+"$1")]})],a);case"::placeholder":return Ae([Ve(t,{props:[D(i,/:(plac\w+)/,":"+M+"input-$1")]}),Ve(t,{props:[D(i,/:(plac\w+)/,":"+lt+"$1")]}),Ve(t,{props:[D(i,/:(plac\w+)/,q+"input-$1")]})],a)}return""})}},st=typeof document<"u",Rr=st?void 0:wr(function(){return Pt(function(){var e={};return function(t){return e[t]}})}),Ar=[Pr],Nn=function(t){var n=t.key;if(st&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(p){var v=p.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=t.stylisPlugins||Ar,i={},o,s=[];st&&(o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(p){for(var v=p.getAttribute("data-emotion").split(" "),f=1;f<v.length;f++)i[v[f]]=!0;s.push(p)}));var c,u=[Cr,Er];if(st){var l,m=[Xt,xr(function(p){l.insert(p)})],k=Yt(u.concat(a,m)),b=function(v){return Ae(Vt(v),k)};c=function(v,f,g,C){l=g,b(v?v+"{"+f.styles+"}":f.styles),C&&(w.inserted[f.name]=!0)}}else{var y=[Xt],d=Yt(u.concat(a,y)),x=function(v){return Ae(Vt(v),d)},S=Rr(a)(n),O=function(v,f){var g=f.name;return S[g]===void 0&&(S[g]=x(v?v+"{"+f.styles+"}":f.styles)),S[g]};c=function(v,f,g,C){var R=f.name,E=O(v,f);if(w.compat===void 0)return C&&(w.inserted[R]=!0),E;if(C)w.inserted[R]=E;else return E}}var w={key:n,sheet:new or({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return w.sheet.hydrate(s),w},Mr=typeof document<"u",Gt=function(t){return t()},Dr=zt["useInsertionEffect"]?zt["useInsertionEffect"]:!1,$r=Mr&&Dr||Gt,Tr=typeof document<"u",ut=re.createContext(typeof HTMLElement<"u"?Nn({key:"css"}):null);ut.Provider;var In=function(t){return re.forwardRef(function(n,r){var a=re.useContext(ut);return t(n,a,r)})};Tr||(In=function(t){return function(n){var r=re.useContext(ut);return r===null?(r=Nn({key:"css"}),re.createElement(ut.Provider,{value:r},t(n,r))):t(n,r)}});var Nr=re.createContext({}),kt=typeof document<"u";function Ir(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var jn=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||kt===!1&&t.compat!==void 0)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},jr=function(t,n,r){jn(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",o=n;do{var s=t.insert(n===o?"."+a:"",o,t.sheet,!0);!kt&&s!==void 0&&(i+=s),o=o.next}while(o!==void 0);if(!kt&&i.length!==0)return i}};function Lr(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Br={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wr=/[A-Z]|^ms/g,Fr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ln=function(t){return t.charCodeAt(1)===45},Zt=function(t){return t!=null&&typeof t!="boolean"},xt=Pt(function(e){return Ln(e)?e:e.replace(Wr,"-$&").toLowerCase()}),Qt=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Fr,function(r,a,i){return he={name:a,styles:i,next:he},a})}return Br[t]!==1&&!Ln(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ge(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return he={name:n.name,styles:n.styles,next:he},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)he={name:r.name,styles:r.styles,next:he},r=r.next;var a=n.styles+";";return a}return Hr(e,t,n)}case"function":{if(e!==void 0){var i=he,o=n(e);return he=i,Ge(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Hr(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Ge(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Zt(o)&&(r+=xt(i)+":"+Qt(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Zt(o[s])&&(r+=xt(i)+":"+Qt(i,o[s])+";");else{var c=Ge(e,t,o);switch(i){case"animation":case"animationName":{r+=xt(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Jt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,he,zr=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";he=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Ge(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Ge(r,n,t[s]),a&&(i+=o[s]);Jt.lastIndex=0;for(var c="",u;(u=Jt.exec(i))!==null;)c+="-"+u[1];var l=Lr(i)+c;return{name:l,styles:i,next:he}},Vr=rr,Ur=function(t){return t!=="theme"},_t=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Vr:Ur},en=function(t,n,r){var a;if(n){var i=n.shouldForwardProp;a=t.__emotion_forwardProp&&i?function(o){return t.__emotion_forwardProp(o)&&i(o)}:i}return typeof a!="function"&&r&&(a=t.__emotion_forwardProp),a},qr=typeof document<"u",Xr=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;jn(n,r,a);var i=$r(function(){return jr(n,r,a)});if(!qr&&i!==void 0){for(var o,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return re.createElement("style",(o={},o["data-emotion"]=n.key+" "+s,o.dangerouslySetInnerHTML={__html:i},o.nonce=n.sheet.nonce,o))}return null},Yr=function e(t,n){var r=t.__emotion_real===t,a=r&&t.__emotion_base||t,i,o;n!==void 0&&(i=n.label,o=n.target);var s=en(t,n,r),c=s||_t(a),u=!c("as");return function(){var l=arguments,m=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&m.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)m.push.apply(m,l);else{m.push(l[0][0]);for(var k=l.length,b=1;b<k;b++)m.push(l[b],l[0][b])}var y=In(function(d,x,S){var O=u&&d.as||a,w="",p=[],v=d;if(d.theme==null){v={};for(var f in d)v[f]=d[f];v.theme=re.useContext(Nr)}typeof d.className=="string"?w=Ir(x.registered,p,d.className):d.className!=null&&(w=d.className+" ");var g=zr(m.concat(p),x.registered,v);w+=x.key+"-"+g.name,o!==void 0&&(w+=" "+o);var C=u&&s===void 0?_t(O):c,R={};for(var E in d)u&&E==="as"||C(E)&&(R[E]=d[E]);return R.className=w,R.ref=S,re.createElement(re.Fragment,null,re.createElement(Xr,{cache:x,serialized:g,isStringTag:typeof O=="string"}),re.createElement(O,R))});return y.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=a,y.__emotion_styles=m,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(d,x){return e(d,wt({},n,x,{shouldForwardProp:en(y,x,!0)})).apply(void 0,m)},y}},Kr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],z=Yr.bind();Kr.forEach(function(e){z[e]=z(e)});var Bn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],a=0;a<arguments.length;a++){var i=arguments[a];if(i){var o=typeof i;if(o==="string"||o==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Bn);var H=Bn.exports,Gr=h.createContext(void 0),Zr=function(){var e=h.useContext(Gr);return e},Qr=function(e){var t=h.useState(!!e&&window.matchMedia(e).matches),n=t[0],r=t[1];return h.useEffect(function(){if(e){var a=window.matchMedia(e),i=function(){a.matches!==n&&r(a.matches)};return i(),a.addEventListener("change",i),function(){return a.removeEventListener("change",i)}}},[n,e]),n},B={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},$={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},Jr=z.div(tn||(tn=X([`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`],[`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`]))),tn,_r={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},ea=z.aside(nn||(nn=X([`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `,`;

  width: `,`;
  min-width: `,`;

  &.`,` {
    width: `,`;
    min-width: `,`;
  }

  &.`,` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`,` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `,`

    &.`,` {
      `,`
    }

    &.`,` {
      `,`
    }

    &.`,` {
      right: -`,`;

      &.`,` {
        right: -`,`;
      }

      &.`,` {
        right: 0;
      }
    }
  }

  `,`
`],[`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `,`;

  width: `,`;
  min-width: `,`;

  &.`,` {
    width: `,`;
    min-width: `,`;
  }

  &.`,` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`,` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `,`

    &.`,` {
      `,`
    }

    &.`,` {
      `,`
    }

    &.`,` {
      right: -`,`;

      &.`,` {
        right: -`,`;
      }

      &.`,` {
        right: 0;
      }
    }
  }

  `,`
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},B.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},B.rtl,B.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},B.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},B.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},B.rtl,function(e){var t=e.width;return t},B.collapsed,function(e){var t=e.collapsedWidth;return t},B.toggled,function(e){var t=e.rootStyles;return t}),ta=z.div(rn||(rn=X([`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `,`
`],[`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `,`
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),na=z.img(an||(an=X([`
  &.`,` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`],[`
  &.`,` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`])),B.image),mt=h.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),ki=h.forwardRef(function(e,t){var n,r=e.collapsed,a=e.toggled,i=e.onBackdropClick,o=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,m=e.defaultCollapsed,k=e.className,b=e.children,y=e.breakPoint,d=e.customBreakPoint,x=e.backgroundColor,S=x===void 0?"rgb(249, 249, 249, 0.7)":x,O=e.transitionDuration,w=O===void 0?300:O,p=e.image,v=e.rtl,f=e.rootStyles,g=De(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),C=function(){if(d)return"(max-width: ".concat(d,")");if(y)return["xs","sm","md","lg","xl","xxl"].includes(y)?"(max-width: ".concat(_r[y],")"):y==="always"||y==="all"?(y==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(y,")")},R=h.useRef();R.current=function(_){o==null||o(_)};var E=Qr(C()),T=h.useState(!1),I=T[0],N=T[1],P=Zr(),Z=r??(!I&&m?!0:P==null?void 0:P.collapsed),W=a??(P==null?void 0:P.toggled),j=function(){i==null||i(),P==null||P.updateSidebarState({toggled:!1})};return h.useEffect(function(){var _;(_=R.current)===null||_===void 0||_.call(R,E)},[E]),h.useEffect(function(){P==null||P.updateSidebarState({broken:E,rtl:v,transitionDuration:w})},[E,P==null?void 0:P.updateSidebarState,v,w]),h.useEffect(function(){I||(P==null||P.updateSidebarState({collapsed:m}),N(!0))},[m,I,P==null?void 0:P.updateSidebarState]),h.createElement(mt.Provider,{value:{collapsed:Z,toggled:W,rtl:v,transitionDuration:w}},h.createElement(ea,Q({ref:t,"data-testid":"".concat(B.root,"-test-id"),rtl:v,rootStyles:f,width:c,collapsedWidth:l,transitionDuration:w,className:H(B.root,(n={},n[B.collapsed]=Z,n[B.toggled]=W,n[B.broken]=E,n[B.rtl]=v,n),k)},g),h.createElement(ta,{"data-testid":"".concat(B.container,"-test-id"),className:B.container,backgroundColor:S},b),p&&h.createElement(na,{"data-testid":"".concat(B.image,"-test-id"),src:p,alt:"sidebar background",className:B.image}),E&&W&&h.createElement(Jr,{"data-testid":"".concat(B.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:j,onKeyPress:j,className:B.backdrop})))}),nn,rn,an,Wn=z.ul(on||(on=X([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),on,ra=z.nav(sn||(sn=X([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),$.root,function(e){var t=e.rootStyles;return t}),Fn=h.createContext(void 0),ft=h.createContext(0),aa=function(e,t){var n=e.children,r=e.className,a=e.transitionDuration,i=a===void 0?300:a,o=e.closeOnClick,s=o===void 0?!1:o,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,m=De(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),k=h.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return h.createElement(Fn.Provider,{value:k},h.createElement(ft.Provider,{value:0},h.createElement(ra,Q({ref:t,className:H($.root,r),rootStyles:c},m),h.createElement(Wn,null,n))))},Ci=h.forwardRef(aa),sn,Dt=function(){var e=h.useContext(Fn);if(e===void 0)throw new Error("Menu Component is required!");return e},ia=z.div(cn||(cn=X([`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height `,`ms;
  box-sizing: border-box;
  background-color: white;

  `,`

  `,`

  `,`;

  `,`;
`],[`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: height `,`ms;
  box-sizing: border-box;
  background-color: white;

  `,`

  `,`

  `,`;

  `,`;
`])),function(e){var t=e.transitionDuration;return t},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n&&`
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `},function(e){var t=e.defaultOpen;return t&&"height: auto;display: block;"},function(e){var t=e.collapsed,n=e.firstLevel,r=e.openWhenCollapsed;return t&&n?`
      position: fixed;
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: `.concat(r?"visible":"hidden",`;
     `):`
      position: static!important;
      transform: none!important;
      `},function(e){var t=e.rootStyles;return t}),oa=function(e,t){var n=e.children,r=e.open,a=e.openWhenCollapsed,i=e.firstLevel,o=e.collapsed,s=e.defaultOpen,c=De(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=Dt().transitionDuration,l=h.useState(s)[0];return h.createElement(ia,Q({"data-testid":"".concat($.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:o,open:r,openWhenCollapsed:a,transitionDuration:u,defaultOpen:l},c),h.createElement(Wn,null,n))},sa=h.forwardRef(oa),cn,Hn=z.span(ln||(ln=X([`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `,`;
`],[`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `,`;
`])),function(e){var t=e.rootStyles;return t}),ln,zn=z.span(un||(un=X([`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `,`

  `,`;
`],[`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `,`

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),un,Vn=z.span(fn||(fn=X([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),fn,Un=z.span(dn||(dn=X([`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),dn,ca=z.span(pn||(pn=X([`
  `,`

  `,`;
`],[`
  `,`

  `,`;
`])),function(e){var t=e.collapsed,n=e.level,r=e.rtl;return t&&n===0&&`
    position: absolute;
    `.concat(r?"left: 10px;":"right: 10px;",`
    top: 50%;
    transform: translateY(-50%);
    
    `)},function(e){var t=e.rootStyles;return t}),la=z.span(vn||(vn=X([`
  display: inline-block;
  transition: transform 0.3s;
  `,`

  width: 5px;
  height: 5px;
  transform: rotate(`,`);
`],[`
  display: inline-block;
  transition: transform 0.3s;
  `,`

  width: 5px;
  height: 5px;
  transform: rotate(`,`);
`])),function(e){var t=e.rtl;return t?`
          border-left: 2px solid currentcolor;
          border-top: 2px solid currentcolor;
        `:` border-right: 2px solid currentcolor;
          border-bottom: 2px solid currentcolor;
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),ua=z.span(hn||(hn=X([`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`],[`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`]))),pn,vn,hn,Y="top",ie="bottom",oe="right",K="left",$t="auto",_e=[Y,ie,oe,K],Le="start",Ze="end",fa="clippingParents",qn="viewport",Ue="popper",da="reference",mn=_e.reduce(function(e,t){return e.concat([t+"-"+Le,t+"-"+Ze])},[]),Xn=[].concat(_e,[$t]).reduce(function(e,t){return e.concat([t,t+"-"+Le,t+"-"+Ze])},[]),pa="beforeRead",va="read",ha="afterRead",ma="beforeMain",ga="main",ba="afterMain",ya="beforeWrite",xa="write",wa="afterWrite",Oa=[pa,va,ha,ma,ga,ba,ya,xa,wa];function be(e){return e?(e.nodeName||"").toLowerCase():null}function se(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function $e(e){var t=se(e).Element;return e instanceof t||e instanceof Element}function ae(e){var t=se(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Tt(e){if(typeof ShadowRoot>"u")return!1;var t=se(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Sa(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},a=t.attributes[n]||{},i=t.elements[n];!ae(i)||!be(i)||(Object.assign(i.style,r),Object.keys(a).forEach(function(o){var s=a[o];s===!1?i.removeAttribute(o):i.setAttribute(o,s===!0?"":s)}))})}function ka(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var a=t.elements[r],i=t.attributes[r]||{},o=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=o.reduce(function(c,u){return c[u]="",c},{});!ae(a)||!be(a)||(Object.assign(a.style,s),Object.keys(i).forEach(function(c){a.removeAttribute(c)}))})}}var Ca={name:"applyStyles",enabled:!0,phase:"write",fn:Sa,effect:ka,requires:["computeStyles"]};function ge(e){return e.split("-")[0]}var Me=Math.max,dt=Math.min,Be=Math.round;function Ct(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Yn(){return!/^((?!chrome|android).)*safari/i.test(Ct())}function We(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),a=1,i=1;t&&ae(e)&&(a=e.offsetWidth>0&&Be(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Be(r.height)/e.offsetHeight||1);var o=$e(e)?se(e):window,s=o.visualViewport,c=!Yn()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/a,l=(r.top+(c&&s?s.offsetTop:0))/i,m=r.width/a,k=r.height/i;return{width:m,height:k,top:l,right:u+m,bottom:l+k,left:u,x:u,y:l}}function Nt(e){var t=We(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Kn(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Tt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function xe(e){return se(e).getComputedStyle(e)}function Ea(e){return["table","td","th"].indexOf(be(e))>=0}function Pe(e){return(($e(e)?e.ownerDocument:e.document)||window.document).documentElement}function gt(e){return be(e)==="html"?e:e.assignedSlot||e.parentNode||(Tt(e)?e.host:null)||Pe(e)}function gn(e){return!ae(e)||xe(e).position==="fixed"?null:e.offsetParent}function Pa(e){var t=/firefox/i.test(Ct()),n=/Trident/i.test(Ct());if(n&&ae(e)){var r=xe(e);if(r.position==="fixed")return null}var a=gt(e);for(Tt(a)&&(a=a.host);ae(a)&&["html","body"].indexOf(be(a))<0;){var i=xe(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function et(e){for(var t=se(e),n=gn(e);n&&Ea(n)&&xe(n).position==="static";)n=gn(n);return n&&(be(n)==="html"||be(n)==="body"&&xe(n).position==="static")?t:n||Pa(e)||t}function It(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function qe(e,t,n){return Me(e,dt(t,n))}function Ra(e,t,n){var r=qe(e,t,n);return r>n?n:r}function Gn(){return{top:0,right:0,bottom:0,left:0}}function Zn(e){return Object.assign({},Gn(),e)}function Qn(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Aa=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Zn(typeof t!="number"?t:Qn(t,_e))};function Ma(e){var t,n=e.state,r=e.name,a=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,s=ge(n.placement),c=It(s),u=[K,oe].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!o)){var m=Aa(a.padding,n),k=Nt(i),b=c==="y"?Y:K,y=c==="y"?ie:oe,d=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],x=o[c]-n.rects.reference[c],S=et(i),O=S?c==="y"?S.clientHeight||0:S.clientWidth||0:0,w=d/2-x/2,p=m[b],v=O-k[l]-m[y],f=O/2-k[l]/2+w,g=qe(p,f,v),C=c;n.modifiersData[r]=(t={},t[C]=g,t.centerOffset=g-f,t)}}function Da(e){var t=e.state,n=e.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||Kn(t.elements.popper,a)&&(t.elements.arrow=a))}var $a={name:"arrow",enabled:!0,phase:"main",fn:Ma,effect:Da,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(e){return e.split("-")[1]}var Ta={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Na(e){var t=e.x,n=e.y,r=window,a=r.devicePixelRatio||1;return{x:Be(t*a)/a||0,y:Be(n*a)/a||0}}function bn(e){var t,n=e.popper,r=e.popperRect,a=e.placement,i=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,m=e.isFixed,k=o.x,b=k===void 0?0:k,y=o.y,d=y===void 0?0:y,x=typeof l=="function"?l({x:b,y:d}):{x:b,y:d};b=x.x,d=x.y;var S=o.hasOwnProperty("x"),O=o.hasOwnProperty("y"),w=K,p=Y,v=window;if(u){var f=et(n),g="clientHeight",C="clientWidth";if(f===se(n)&&(f=Pe(n),xe(f).position!=="static"&&s==="absolute"&&(g="scrollHeight",C="scrollWidth")),f=f,a===Y||(a===K||a===oe)&&i===Ze){p=ie;var R=m&&f===v&&v.visualViewport?v.visualViewport.height:f[g];d-=R-r.height,d*=c?1:-1}if(a===K||(a===Y||a===ie)&&i===Ze){w=oe;var E=m&&f===v&&v.visualViewport?v.visualViewport.width:f[C];b-=E-r.width,b*=c?1:-1}}var T=Object.assign({position:s},u&&Ta),I=l===!0?Na({x:b,y:d}):{x:b,y:d};if(b=I.x,d=I.y,c){var N;return Object.assign({},T,(N={},N[p]=O?"0":"",N[w]=S?"0":"",N.transform=(v.devicePixelRatio||1)<=1?"translate("+b+"px, "+d+"px)":"translate3d("+b+"px, "+d+"px, 0)",N))}return Object.assign({},T,(t={},t[p]=O?d+"px":"",t[w]=S?b+"px":"",t.transform="",t))}function Ia(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:ge(t.placement),variation:Fe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,bn(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,bn(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ja={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ia,data:{}},rt={passive:!0};function La(e){var t=e.state,n=e.instance,r=e.options,a=r.scroll,i=a===void 0?!0:a,o=r.resize,s=o===void 0?!0:o,c=se(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,rt)}),s&&c.addEventListener("resize",n.update,rt),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,rt)}),s&&c.removeEventListener("resize",n.update,rt)}}var Ba={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:La,data:{}},Wa={left:"right",right:"left",bottom:"top",top:"bottom"};function ct(e){return e.replace(/left|right|bottom|top/g,function(t){return Wa[t]})}var Fa={start:"end",end:"start"};function yn(e){return e.replace(/start|end/g,function(t){return Fa[t]})}function jt(e){var t=se(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Lt(e){return We(Pe(e)).left+jt(e).scrollLeft}function Ha(e,t){var n=se(e),r=Pe(e),a=n.visualViewport,i=r.clientWidth,o=r.clientHeight,s=0,c=0;if(a){i=a.width,o=a.height;var u=Yn();(u||!u&&t==="fixed")&&(s=a.offsetLeft,c=a.offsetTop)}return{width:i,height:o,x:s+Lt(e),y:c}}function za(e){var t,n=Pe(e),r=jt(e),a=(t=e.ownerDocument)==null?void 0:t.body,i=Me(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=Me(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-r.scrollLeft+Lt(e),c=-r.scrollTop;return xe(a||n).direction==="rtl"&&(s+=Me(n.clientWidth,a?a.clientWidth:0)-i),{width:i,height:o,x:s,y:c}}function Bt(e){var t=xe(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function Jn(e){return["html","body","#document"].indexOf(be(e))>=0?e.ownerDocument.body:ae(e)&&Bt(e)?e:Jn(gt(e))}function Xe(e,t){var n;t===void 0&&(t=[]);var r=Jn(e),a=r===((n=e.ownerDocument)==null?void 0:n.body),i=se(r),o=a?[i].concat(i.visualViewport||[],Bt(r)?r:[]):r,s=t.concat(o);return a?s:s.concat(Xe(gt(o)))}function Et(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Va(e,t){var n=We(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function xn(e,t,n){return t===qn?Et(Ha(e,n)):$e(t)?Va(t,n):Et(za(Pe(e)))}function Ua(e){var t=Xe(gt(e)),n=["absolute","fixed"].indexOf(xe(e).position)>=0,r=n&&ae(e)?et(e):e;return $e(r)?t.filter(function(a){return $e(a)&&Kn(a,r)&&be(a)!=="body"}):[]}function qa(e,t,n,r){var a=t==="clippingParents"?Ua(e):[].concat(t),i=[].concat(a,[n]),o=i[0],s=i.reduce(function(c,u){var l=xn(e,u,r);return c.top=Me(l.top,c.top),c.right=dt(l.right,c.right),c.bottom=dt(l.bottom,c.bottom),c.left=Me(l.left,c.left),c},xn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function _n(e){var t=e.reference,n=e.element,r=e.placement,a=r?ge(r):null,i=r?Fe(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(a){case Y:c={x:o,y:t.y-n.height};break;case ie:c={x:o,y:t.y+t.height};break;case oe:c={x:t.x+t.width,y:s};break;case K:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=a?It(a):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case Le:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Ze:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function Qe(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=r===void 0?e.placement:r,i=n.strategy,o=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?fa:s,u=n.rootBoundary,l=u===void 0?qn:u,m=n.elementContext,k=m===void 0?Ue:m,b=n.altBoundary,y=b===void 0?!1:b,d=n.padding,x=d===void 0?0:d,S=Zn(typeof x!="number"?x:Qn(x,_e)),O=k===Ue?da:Ue,w=e.rects.popper,p=e.elements[y?O:k],v=qa($e(p)?p:p.contextElement||Pe(e.elements.popper),c,l,o),f=We(e.elements.reference),g=_n({reference:f,element:w,strategy:"absolute",placement:a}),C=Et(Object.assign({},w,g)),R=k===Ue?C:f,E={top:v.top-R.top+S.top,bottom:R.bottom-v.bottom+S.bottom,left:v.left-R.left+S.left,right:R.right-v.right+S.right},T=e.modifiersData.offset;if(k===Ue&&T){var I=T[a];Object.keys(E).forEach(function(N){var P=[oe,ie].indexOf(N)>=0?1:-1,Z=[Y,ie].indexOf(N)>=0?"y":"x";E[N]+=I[Z]*P})}return E}function Xa(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?Xn:c,l=Fe(r),m=l?s?mn:mn.filter(function(y){return Fe(y)===l}):_e,k=m.filter(function(y){return u.indexOf(y)>=0});k.length===0&&(k=m);var b=k.reduce(function(y,d){return y[d]=Qe(e,{placement:d,boundary:a,rootBoundary:i,padding:o})[ge(d)],y},{});return Object.keys(b).sort(function(y,d){return b[y]-b[d]})}function Ya(e){if(ge(e)===$t)return[];var t=ct(e);return[yn(e),t,yn(t)]}function Ka(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!0:o,c=n.fallbackPlacements,u=n.padding,l=n.boundary,m=n.rootBoundary,k=n.altBoundary,b=n.flipVariations,y=b===void 0?!0:b,d=n.allowedAutoPlacements,x=t.options.placement,S=ge(x),O=S===x,w=c||(O||!y?[ct(x)]:Ya(x)),p=[x].concat(w).reduce(function(Se,ee){return Se.concat(ge(ee)===$t?Xa(t,{placement:ee,boundary:l,rootBoundary:m,padding:u,flipVariations:y,allowedAutoPlacements:d}):ee)},[]),v=t.rects.reference,f=t.rects.popper,g=new Map,C=!0,R=p[0],E=0;E<p.length;E++){var T=p[E],I=ge(T),N=Fe(T)===Le,P=[Y,ie].indexOf(I)>=0,Z=P?"width":"height",W=Qe(t,{placement:T,boundary:l,rootBoundary:m,altBoundary:k,padding:u}),j=P?N?oe:K:N?ie:Y;v[Z]>f[Z]&&(j=ct(j));var _=ct(j),le=[];if(i&&le.push(W[I]<=0),s&&le.push(W[j]<=0,W[_]<=0),le.every(function(Se){return Se})){R=T,C=!1;break}g.set(T,le)}if(C)for(var ye=y?3:1,we=function(ee){var ce=p.find(function(ke){var te=g.get(ke);if(te)return te.slice(0,ee).every(function(ze){return ze})});if(ce)return R=ce,"break"},Oe=ye;Oe>0;Oe--){var Te=we(Oe);if(Te==="break")break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}}var Ga={name:"flip",enabled:!0,phase:"main",fn:Ka,requiresIfExists:["offset"],data:{_skip:!1}};function wn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function On(e){return[Y,oe,ie,K].some(function(t){return e[t]>=0})}function Za(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,i=t.modifiersData.preventOverflow,o=Qe(t,{elementContext:"reference"}),s=Qe(t,{altBoundary:!0}),c=wn(o,r),u=wn(s,a,i),l=On(c),m=On(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}var Qa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Za};function Ja(e,t,n){var r=ge(e),a=[K,Y].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],s=i[1];return o=o||0,s=(s||0)*a,[K,oe].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function _a(e){var t=e.state,n=e.options,r=e.name,a=n.offset,i=a===void 0?[0,0]:a,o=Xn.reduce(function(l,m){return l[m]=Ja(m,t.rects,i),l},{}),s=o[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}var ei={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:_a};function ti(e){var t=e.state,n=e.name;t.modifiersData[n]=_n({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ni={name:"popperOffsets",enabled:!0,phase:"read",fn:ti,data:{}};function ri(e){return e==="x"?"y":"x"}function ai(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!1:o,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,m=n.padding,k=n.tether,b=k===void 0?!0:k,y=n.tetherOffset,d=y===void 0?0:y,x=Qe(t,{boundary:c,rootBoundary:u,padding:m,altBoundary:l}),S=ge(t.placement),O=Fe(t.placement),w=!O,p=It(S),v=ri(p),f=t.modifiersData.popperOffsets,g=t.rects.reference,C=t.rects.popper,R=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(f){if(i){var N,P=p==="y"?Y:K,Z=p==="y"?ie:oe,W=p==="y"?"height":"width",j=f[p],_=j+x[P],le=j-x[Z],ye=b?-C[W]/2:0,we=O===Le?g[W]:C[W],Oe=O===Le?-C[W]:-g[W],Te=t.elements.arrow,Se=b&&Te?Nt(Te):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Gn(),ce=ee[P],ke=ee[Z],te=qe(0,g[W],Se[W]),ze=w?g[W]/2-ye-te-ce-E.mainAxis:we-te-ce-E.mainAxis,bt=w?-g[W]/2+ye+te+ke+E.mainAxis:Oe+te+ke+E.mainAxis,Ne=t.elements.arrow&&et(t.elements.arrow),yt=Ne?p==="y"?Ne.clientTop||0:Ne.clientLeft||0:0,tt=(N=T==null?void 0:T[p])!=null?N:0,ue=j+ze-tt-yt,fe=j+bt-tt,A=qe(b?dt(_,ue):_,j,b?Me(le,fe):le);f[p]=A,I[p]=A-j}if(s){var U,Ce=p==="x"?Y:K,Ee=p==="x"?ie:oe,L=f[v],ne=v==="y"?"height":"width",de=L+x[Ce],pe=L-x[Ee],Re=[Y,K].indexOf(S)!==-1,Ie=(U=T==null?void 0:T[v])!=null?U:0,Wt=Re?de:L-g[ne]-C[ne]-Ie+E.altAxis,Ft=Re?L+g[ne]+C[ne]-Ie-E.altAxis:pe,Ht=b&&Re?Ra(Wt,L,Ft):qe(b?Wt:de,L,b?Ft:pe);f[v]=Ht,I[v]=Ht-L}t.modifiersData[r]=I}}var ii={name:"preventOverflow",enabled:!0,phase:"main",fn:ai,requiresIfExists:["offset"]};function oi(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function si(e){return e===se(e)||!ae(e)?jt(e):oi(e)}function ci(e){var t=e.getBoundingClientRect(),n=Be(t.width)/e.offsetWidth||1,r=Be(t.height)/e.offsetHeight||1;return n!==1||r!==1}function li(e,t,n){n===void 0&&(n=!1);var r=ae(t),a=ae(t)&&ci(t),i=Pe(t),o=We(e,a,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((be(t)!=="body"||Bt(i))&&(s=si(t)),ae(t)?(c=We(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Lt(i))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function ui(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function a(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&a(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||a(i)}),r}function fi(e){var t=ui(e);return Oa.reduce(function(n,r){return n.concat(t.filter(function(a){return a.phase===r}))},[])}function di(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function pi(e){var t=e.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Sn={placement:"bottom",modifiers:[],strategy:"absolute"};function kn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function vi(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,a=t.defaultOptions,i=a===void 0?Sn:a;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Sn,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},m=[],k=!1,b={state:l,setOptions:function(S){var O=typeof S=="function"?S(l.options):S;d(),l.options=Object.assign({},i,l.options,O),l.scrollParents={reference:$e(s)?Xe(s):s.contextElement?Xe(s.contextElement):[],popper:Xe(c)};var w=fi(pi([].concat(r,l.options.modifiers)));return l.orderedModifiers=w.filter(function(p){return p.enabled}),y(),b.update()},forceUpdate:function(){if(!k){var S=l.elements,O=S.reference,w=S.popper;if(kn(O,w)){l.rects={reference:li(O,et(w),l.options.strategy==="fixed"),popper:Nt(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var p=0;p<l.orderedModifiers.length;p++){if(l.reset===!0){l.reset=!1,p=-1;continue}var v=l.orderedModifiers[p],f=v.fn,g=v.options,C=g===void 0?{}:g,R=v.name;typeof f=="function"&&(l=f({state:l,options:C,name:R,instance:b})||l)}}}},update:di(function(){return new Promise(function(x){b.forceUpdate(),x(l)})}),destroy:function(){d(),k=!0}};if(!kn(s,c))return b;b.setOptions(u).then(function(x){!k&&u.onFirstUpdate&&u.onFirstUpdate(x)});function y(){l.orderedModifiers.forEach(function(x){var S=x.name,O=x.options,w=O===void 0?{}:O,p=x.effect;if(typeof p=="function"){var v=p({state:l,name:S,instance:b,options:w}),f=function(){};m.push(v||f)}})}function d(){m.forEach(function(x){return x()}),m=[]}return b}}var hi=[Ba,ni,ja,Ca,ei,Ga,ii,$a,Qa],mi=vi({defaultModifiers:hi}),gi=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,a=h.useContext(mt),i=a.collapsed,o=a.toggled,s=a.transitionDuration,c=h.useRef();return h.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=mi(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),h.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,o,r,n]),{popperInstance:c.current}},er=function(e){var t=e.rtl,n=e.level,r=e.collapsed,a=e.disabled,i=e.active;return`
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    `.concat(t?`padding-left: 20px;
           padding-right: `.concat(n===0?20:(r?n:n+1)*20,`px;
            `):`padding-right: 20px;
           padding-left: `.concat(n===0?20:(r?n:n+1)*20,`px;
           `),`

    &:hover {
      background-color: #f3f3f3;
    }

    `).concat(a&&` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `,`

    `).concat(i&&"background-color: #e2eef9;",`
  
  `)},bi=function(e,t){var n=e.className,r=e.component,a=e.children,i=De(e,["className","component","children"]);if(r){if(typeof r=="string")return h.createElement(r,Q(Q({className:H(n)},i),{ref:t}),a);var o=r.props,s=o.className,c=De(o,["className"]);return h.cloneElement(r,Q(Q(Q({className:H(n,s)},i),c),{ref:t}),a)}else return h.createElement("a",Q({ref:t,className:H(n)},i),a)},tr=h.forwardRef(bi),yi=z.li(Cn||(Cn=X([`
  position: relative;
  width: 100%;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`],[`
  position: relative;
  width: 100%;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},$.button,function(e){var t=e.level,n=e.disabled,r=e.active,a=e.collapsed,i=e.rtl;return er({level:t,disabled:n,active:r,collapsed:a,rtl:i})},function(e){var t=e.buttonStyles;return t}),xi=function(e,t){var n,r=e.children,a=e.className,i=e.label,o=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,m=e.defaultOpen,k=e.active,b=k===void 0?!1:k,y=e.disabled,d=y===void 0?!1:y,x=e.rootStyles,S=e.component,O=e.onOpenChange,w=e.onClick,p=e.onKeyUp,v=De(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),f=h.useContext(ft),g=h.useContext(mt),C=g.collapsed,R=g.rtl,E=g.transitionDuration,T=Dt(),I=T.renderExpandIcon,N=T.closeOnClick,P=T.menuItemStyles,Z=T.transitionDuration,W=h.useState(!!m),j=W[0],_=W[1],le=h.useState(!1),ye=le[0],we=le[1],Oe=h.useState(!1),Te=Oe[0],Se=Oe[1],ee=h.useRef(null),ce=h.useRef(null),ke=h.useRef(),te=gi({level:f,buttonRef:ee,contentRef:ce}).popperInstance,ze=function(){var A=ce.current;if(A){A.style.display="block",A.style.overflow="hidden",A.style.height="auto";var U=A.offsetHeight;A.style.height="0px",A.offsetHeight,A.style.height="".concat(U,"px"),ke.current=setTimeout(function(){A.style.overflow="auto",A.style.height="auto"},Z)}},bt=function(){var A=ce.current;A&&(A.style.overflow="hidden",A.style.height="".concat(A.offsetHeight,"px"),A.offsetHeight,A.style.height="0px",ke.current=setTimeout(function(){A.style.overflow="auto",A.style.display="none"},Z))},Ne=function(){if(!(f===0&&C)){clearTimeout(Number(ke.current));var A=l??j;A?bt():ze(),O==null||O(!A),typeof l>"u"&&_(!j)}},yt=function(A){w==null||w(A),Ne()},tt=function(A){p==null||p(A),A.key==="Enter"&&Ne()},ue=function(A){if(P){var U={level:f,disabled:d,active:b,isSubmenu:!0,open:l??j},Ce=P.root,Ee=P.button,L=P.label,ne=P.icon,de=P.prefix,pe=P.suffix,Re=P.subMenuContent,Ie=P.SubMenuExpandIcon;switch(A){case"root":return typeof Ce=="function"?Ce(U):Ce;case"button":return typeof Ee=="function"?Ee(U):Ee;case"label":return typeof L=="function"?L(U):L;case"icon":return typeof ne=="function"?ne(U):ne;case"prefix":return typeof de=="function"?de(U):de;case"suffix":return typeof pe=="function"?pe(U):pe;case"SubMenuExpandIcon":return typeof Ie=="function"?Ie(U):Ie;case"subMenuContent":return typeof Re=="function"?Re(U):Re;default:return}}};h.useEffect(function(){setTimeout(function(){return te==null?void 0:te.update()},E),C&&f===0&&we(!1)},[C,f,R,E,te]),h.useEffect(function(){var A=function(L){var ne,de,pe;!ye&&(!((ne=ee.current)===null||ne===void 0)&&ne.contains(L))?we(!0):(N&&!(!((de=L.closest(".".concat($.menuItemRoot)))===null||de===void 0)&&de.classList.contains($.subMenuRoot))||!(!((pe=ce.current)===null||pe===void 0)&&pe.contains(L))&&ye)&&we(!1)},U=function(L){A(L.target)},Ce=function(L){L.key==="Enter"?A(L.target):L.key==="Escape"&&we(!1)},Ee=function(){document.removeEventListener("click",U),document.removeEventListener("keyup",Ce)};return Ee(),C&&f===0&&(document.addEventListener("click",U,!1),document.addEventListener("keyup",Ce,!1)),function(){Ee()}},[C,f,N,ye]),h.useEffect(function(){Se(!0)},[]);var fe=(n={},n[$.active]=b,n[$.disabled]=d,n[$.open]=l??j,n);return h.createElement(yi,{ref:t,className:H($.menuItemRoot,$.subMenuRoot,fe,a),menuItemStyles:ue("root"),level:f,collapsed:C,rtl:R,disabled:d,active:b,buttonStyles:ue("button"),rootStyles:x},h.createElement(tr,Q({"data-testid":"".concat($.button,"-test-id"),ref:ee,title:s,className:H($.button,fe),onClick:yt,onKeyUp:tt,component:S,tabIndex:0},v),o&&h.createElement(zn,{rtl:R,className:H($.icon,fe),rootStyles:ue("icon")},o),c&&h.createElement(Vn,{collapsed:C,transitionDuration:E,firstLevel:f===0,className:H($.prefix,fe),rtl:R,rootStyles:ue("prefix")},c),h.createElement(Hn,{className:H($.label,fe),rootStyles:ue("label")},i),u&&h.createElement(Un,{collapsed:C,transitionDuration:E,firstLevel:f===0,className:H($.suffix,fe),rootStyles:ue("suffix")},u),h.createElement(ca,{rtl:R,className:H($.SubMenuExpandIcon,fe),collapsed:C,level:f,rootStyles:ue("SubMenuExpandIcon")},I?I({level:f,disabled:d,active:b,open:l??j}):C&&f===0?h.createElement(ua,null):h.createElement(la,{rtl:R,open:l??j}))),h.createElement(sa,{ref:ce,openWhenCollapsed:ye,open:l??j,firstLevel:f===0,collapsed:C,defaultOpen:l&&!Te||m,className:H($.subMenuContent,fe),rootStyles:ue("subMenuContent")},h.createElement(ft.Provider,{value:f+1},r)))};h.forwardRef(xi);var Cn,wi=z.li(En||(En=X([`
  width: 100%;
  position: relative;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`],[`
  width: 100%;
  position: relative;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},$.button,function(e){var t=e.level,n=e.disabled,r=e.active,a=e.collapsed,i=e.rtl;return er({level:t,disabled:n,active:r,collapsed:a,rtl:i})},function(e){var t=e.buttonStyles;return t}),Oi=function(e,t){var n,r=e.children,a=e.icon,i=e.className,o=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,m=l===void 0?!1:l,k=e.component,b=e.rootStyles,y=De(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),d=h.useContext(ft),x=h.useContext(mt),S=x.collapsed,O=x.rtl,w=x.transitionDuration,p=Dt().menuItemStyles,v=function(g){if(p){var C={level:d,disabled:m,active:u,isSubmenu:!1},R=p.root,E=p.button,T=p.label,I=p.icon,N=p.prefix,P=p.suffix;switch(g){case"root":return typeof R=="function"?R(C):R;case"button":return typeof E=="function"?E(C):E;case"label":return typeof T=="function"?T(C):T;case"icon":return typeof I=="function"?I(C):I;case"prefix":return typeof N=="function"?N(C):N;case"suffix":return typeof P=="function"?P(C):P;default:return}}},f=(n={},n[$.active]=u,n[$.disabled]=m,n);return h.createElement(wi,{ref:t,className:H($.menuItemRoot,f,i),menuItemStyles:v("root"),level:d,collapsed:S,rtl:O,disabled:m,active:u,buttonStyles:v("button"),rootStyles:b},h.createElement(tr,Q({className:H($.button,f),"data-testid":"".concat($.button,"-test-id"),component:k,tabIndex:0},y),a&&h.createElement(zn,{rtl:O,className:H($.icon,f),rootStyles:v("icon")},a),o&&h.createElement(Vn,{collapsed:S,transitionDuration:w,firstLevel:d===0,className:H($.prefix,f),rtl:O,rootStyles:v("prefix")},o),h.createElement(Hn,{className:H($.label,f),rootStyles:v("label")},r),s&&h.createElement(Un,{collapsed:S,transitionDuration:w,firstLevel:d===0,className:H($.suffix,f),rootStyles:v("suffix")},s)))},Ei=h.forwardRef(Oi),En;export{Ci as M,ki as S,Ei as a};
