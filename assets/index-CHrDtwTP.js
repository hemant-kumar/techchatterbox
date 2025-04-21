var uT=Object.defineProperty;var Cg=t=>{throw TypeError(t)};var dT=(t,e,n)=>e in t?uT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Mn=(t,e,n)=>dT(t,typeof e!="symbol"?e+"":e,n),wd=(t,e,n)=>e.has(t)||Cg("Cannot "+n);var A=(t,e,n)=>(wd(t,e,"read from private field"),n?n.call(t):e.get(t)),ue=(t,e,n)=>e.has(t)?Cg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),X=(t,e,n,r)=>(wd(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),rt=(t,e,n)=>(wd(t,e,"access private method"),n);var pl=(t,e,n,r)=>({set _(i){X(t,e,i,n)},get _(){return A(t,e,r)}});function hT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function za(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},cu={},$0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),pT=Symbol.for("react.portal"),fT=Symbol.for("react.fragment"),mT=Symbol.for("react.strict_mode"),gT=Symbol.for("react.profiler"),yT=Symbol.for("react.provider"),vT=Symbol.for("react.context"),wT=Symbol.for("react.forward_ref"),_T=Symbol.for("react.suspense"),bT=Symbol.for("react.memo"),xT=Symbol.for("react.lazy"),Pg=Symbol.iterator;function ET(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,J0={};function Xo(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||z0}Xo.prototype.isReactComponent={};Xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q0(){}q0.prototype=Xo.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||z0}var af=sf.prototype=new q0;af.constructor=sf;H0(af,Xo.prototype);af.isPureReactComponent=!0;var Rg=Array.isArray,W0=Object.prototype.hasOwnProperty,lf={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)W0.call(e,r)&&!K0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ha,type:t,key:o,ref:s,props:i,_owner:lf.current}}function TT(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function ST(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kg=/\/+/g;function _d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ST(""+t.key):e.toString(36)}function ql(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ha:case pT:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+_d(s,0):r,Rg(i)?(n="",t!=null&&(n=t.replace(kg,"$&/")+"/"),ql(i,e,n,"",function(c){return c})):i!=null&&(cf(i)&&(i=TT(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(kg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Rg(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+_d(o,a);s+=ql(o,e,n,l,i)}else if(l=ET(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+_d(o,a++),s+=ql(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function fl(t,e,n){if(t==null)return t;var r=[],i=0;return ql(t,r,"","",function(o){return e.call(n,o,i++)}),r}function IT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Wl={transition:null},AT={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:lf};function Q0(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Xo;ee.Fragment=fT;ee.Profiler=gT;ee.PureComponent=sf;ee.StrictMode=mT;ee.Suspense=_T;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AT;ee.act=Q0;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=H0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=lf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)W0.call(e,l)&&!K0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ha,type:t.type,key:i,ref:o,props:r,_owner:s}};ee.createContext=function(t){return t={$$typeof:vT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yT,_context:t},t.Consumer=t};ee.createElement=G0;ee.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:wT,render:t}};ee.isValidElement=cf;ee.lazy=function(t){return{$$typeof:xT,_payload:{_status:-1,_result:t},_init:IT}};ee.memo=function(t,e){return{$$typeof:bT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ee.unstable_act=Q0;ee.useCallback=function(t,e){return _t.current.useCallback(t,e)};ee.useContext=function(t){return _t.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ee.useEffect=function(t,e){return _t.current.useEffect(t,e)};ee.useId=function(){return _t.current.useId()};ee.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return _t.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ee.useRef=function(t){return _t.current.useRef(t)};ee.useState=function(t){return _t.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return _t.current.useTransition()};ee.version="18.3.1";$0.exports=ee;var b=$0.exports;const N=za(b),CT=hT({__proto__:null,default:N},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT=b,RT=Symbol.for("react.element"),kT=Symbol.for("react.fragment"),NT=Object.prototype.hasOwnProperty,DT=PT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OT={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)NT.call(e,r)&&!OT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RT,type:t,key:o,ref:s,props:i,_owner:DT.current}}cu.Fragment=kT;cu.jsx=Y0;cu.jsxs=Y0;U0.exports=cu;var f=U0.exports,X0={exports:{}},jt={},Z0={exports:{}},ew={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,D){var U=T.length;T.push(D);e:for(;0<U;){var B=U-1>>>1,H=T[B];if(0<i(H,D))T[B]=D,T[U]=H,U=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],U=T.pop();if(U!==D){T[0]=U;e:for(var B=0,H=T.length,ce=H>>>1;B<ce;){var Oe=2*(B+1)-1,At=T[Oe],de=Oe+1,Qt=T[de];if(0>i(At,U))de<H&&0>i(Qt,At)?(T[B]=Qt,T[de]=U,B=de):(T[B]=At,T[Oe]=U,B=Oe);else if(de<H&&0>i(Qt,U))T[B]=Qt,T[de]=U,B=de;else break e}}return D}function i(T,D){var U=T.sortIndex-D.sortIndex;return U!==0?U:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=T)r(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function x(T){if(y=!1,v(T),!w)if(n(l)!==null)w=!0,Z(E);else{var D=n(c);D!==null&&ae(x,D.startTime-T)}}function E(T,D){w=!1,y&&(y=!1,m(R),R=-1),p=!0;var U=d;try{for(v(D),h=n(l);h!==null&&(!(h.expirationTime>D)||T&&!Y());){var B=h.callback;if(typeof B=="function"){h.callback=null,d=h.priorityLevel;var H=B(h.expirationTime<=D);D=t.unstable_now(),typeof H=="function"?h.callback=H:h===n(l)&&r(l),v(D)}else r(l);h=n(l)}if(h!==null)var ce=!0;else{var Oe=n(c);Oe!==null&&ae(x,Oe.startTime-D),ce=!1}return ce}finally{h=null,d=U,p=!1}}var S=!1,I=null,R=-1,j=5,M=-1;function Y(){return!(t.unstable_now()-M<j)}function z(){if(I!==null){var T=t.unstable_now();M=T;var D=!0;try{D=I(!0,T)}finally{D?ne():(S=!1,I=null)}}else S=!1}var ne;if(typeof g=="function")ne=function(){g(z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Ee=ie.port2;ie.port1.onmessage=z,ne=function(){Ee.postMessage(null)}}else ne=function(){_(z,0)};function Z(T){I=T,S||(S=!0,ne())}function ae(T,D){R=_(function(){T(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){w||p||(w=!0,Z(E))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var U=d;d=D;try{return T()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=d;d=T;try{return D()}finally{d=U}},t.unstable_scheduleCallback=function(T,D,U){var B=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?B+U:B):U=B,T){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=U+H,T={id:u++,callback:D,priorityLevel:T,startTime:U,expirationTime:H,sortIndex:-1},U>B?(T.sortIndex=U,e(c,T),n(l)===null&&T===n(c)&&(y?(m(R),R=-1):y=!0,ae(x,U-B))):(T.sortIndex=H,e(l,T),w||p||(w=!0,Z(E))),T},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(T){var D=d;return function(){var U=d;d=D;try{return T.apply(this,arguments)}finally{d=U}}}})(ew);Z0.exports=ew;var LT=Z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT=b,Lt=LT;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tw=new Set,Xs={};function Ni(t,e){Do(t,e),Do(t+"Capture",e)}function Do(t,e){for(Xs[t]=e,t=0;t<e.length;t++)tw.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,jT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ng={},Dg={};function VT(t){return vh.call(Dg,t)?!0:vh.call(Ng,t)?!1:jT.test(t)?Dg[t]=!0:(Ng[t]=!0,!1)}function FT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BT(t,e,n,r){if(e===null||typeof e>"u"||FT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);nt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);nt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);nt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BT(e,n,i,r)&&(n=null),r||i===null?VT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=MT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),nw=Symbol.for("react.provider"),rw=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),iw=Symbol.for("react.offscreen"),Og=Symbol.iterator;function fs(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,bd;function Ps(t){if(bd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+t}var xd=!1;function Ed(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function UT(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Yi:return"Portal";case wh:return"Profiler";case pf:return"StrictMode";case _h:return"Suspense";case bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rw:return(t.displayName||"Context")+".Consumer";case nw:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:xh(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return xh(t(e))}catch{}}return null}function $T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zT(t){var e=ow(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=zT(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function aw(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Th(t,e){aw(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function uo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Rs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function lw(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HT=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){HT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function dw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JT=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(JT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kh=null,ho=null,po=null;function Fg(t){if(t=Wa(t)){if(typeof kh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=fu(e),kh(t.stateNode,t.type,e))}}function pw(t){ho?po?po.push(t):po=[t]:ho=t}function fw(){if(ho){var t=ho,e=po;if(po=ho=null,Fg(t),e)for(t=0;t<e.length;t++)Fg(e[t])}}function mw(t,e){return t(e)}function gw(){}var Td=!1;function yw(t,e,n){if(Td)return t(e,n);Td=!0;try{return mw(t,e,n)}finally{Td=!1,(ho!==null||po!==null)&&(gw(),fw())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Nh=!1;if(Kn)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Nh=!1}function qT(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Vs=!1,hc=null,pc=!1,Dh=null,WT={onError:function(t){Vs=!0,hc=t}};function KT(t,e,n,r,i,o,s,a,l){Vs=!1,hc=null,qT.apply(WT,arguments)}function GT(t,e,n,r,i,o,s,a,l){if(KT.apply(this,arguments),Vs){if(Vs){var c=hc;Vs=!1,hc=null}else throw Error(k(198));pc||(pc=!0,Dh=c)}}function Di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bg(t){if(Di(t)!==t)throw Error(k(188))}function QT(t){var e=t.alternate;if(!e){if(e=Di(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bg(i),t;if(o===r)return Bg(i),e;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function ww(t){return t=QT(t),t!==null?_w(t):null}function _w(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_w(t);if(e!==null)return e;t=t.sibling}return null}var bw=Lt.unstable_scheduleCallback,Ug=Lt.unstable_cancelCallback,YT=Lt.unstable_shouldYield,XT=Lt.unstable_requestPaint,Ne=Lt.unstable_now,ZT=Lt.unstable_getCurrentPriorityLevel,yf=Lt.unstable_ImmediatePriority,xw=Lt.unstable_UserBlockingPriority,fc=Lt.unstable_NormalPriority,eS=Lt.unstable_LowPriority,Ew=Lt.unstable_IdlePriority,uu=null,In=null;function tS(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:iS,nS=Math.log,rS=Math.LN2;function iS(t){return t>>>=0,t===0?32:31-(nS(t)/rS|0)|0}var vl=64,wl=4194304;function ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ks(a):(o&=s,o!==0&&(r=ks(o)))}else s=n&~i,s!==0?r=ks(s):o!==0&&(r=ks(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function oS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ln(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=oS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tw(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function Sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function aS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iw,wf,Aw,Cw,Pw,Lh=!1,_l=[],Sr=null,Ir=null,Ar=null,ta=new Map,na=new Map,fr=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $g(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function gs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Wa(e),e!==null&&wf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cS(t,e,n,r,i){switch(e){case"focusin":return Sr=gs(Sr,t,e,n,r,i),!0;case"dragenter":return Ir=gs(Ir,t,e,n,r,i),!0;case"mouseover":return Ar=gs(Ar,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ta.set(o,gs(ta.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,na.set(o,gs(na.get(o)||null,t,e,n,r,i)),!0}return!1}function Rw(t){var e=oi(t.target);if(e!==null){var n=Di(e);if(n!==null){if(e=n.tag,e===13){if(e=vw(n),e!==null){t.blockedOn=e,Pw(t.priority,function(){Aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=Wa(n),e!==null&&wf(e),t.blockedOn=n,!1;e.shift()}return!0}function zg(t,e,n){Kl(t)&&n.delete(e)}function uS(){Lh=!1,Sr!==null&&Kl(Sr)&&(Sr=null),Ir!==null&&Kl(Ir)&&(Ir=null),Ar!==null&&Kl(Ar)&&(Ar=null),ta.forEach(zg),na.forEach(zg)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Lh||(Lh=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,uS)))}function ra(t){function e(i){return ys(i,t)}if(0<_l.length){ys(_l[0],t);for(var n=1;n<_l.length;n++){var r=_l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&ys(Sr,t),Ir!==null&&ys(Ir,t),Ar!==null&&ys(Ar,t),ta.forEach(e),na.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Rw(n),n.blockedOn===null&&fr.shift()}var fo=nr.ReactCurrentBatchConfig,gc=!0;function dS(t,e,n,r){var i=he,o=fo.transition;fo.transition=null;try{he=1,_f(t,e,n,r)}finally{he=i,fo.transition=o}}function hS(t,e,n,r){var i=he,o=fo.transition;fo.transition=null;try{he=4,_f(t,e,n,r)}finally{he=i,fo.transition=o}}function _f(t,e,n,r){if(gc){var i=Mh(t,e,n,r);if(i===null)Ld(t,e,r,yc,n),$g(t,r);else if(cS(i,t,e,n,r))r.stopPropagation();else if($g(t,r),e&4&&-1<lS.indexOf(t)){for(;i!==null;){var o=Wa(i);if(o!==null&&Iw(o),o=Mh(t,e,n,r),o===null&&Ld(t,e,r,yc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ld(t,e,r,null,n)}}var yc=null;function Mh(t,e,n,r){if(yc=null,t=gf(r),t=oi(t),t!==null)if(e=Di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yc=t,null}function kw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZT()){case yf:return 1;case xw:return 4;case fc:case eS:return 16;case Ew:return 536870912;default:return 16}default:return 16}}var br=null,bf=null,Gl=null;function Nw(){if(Gl)return Gl;var t,e=bf,n=e.length,r,i="value"in br?br.value:br.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function Hg(){return!1}function Vt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?bl:Hg,this.isPropagationStopped=Hg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=Vt(Zo),qa=Ae({},Zo,{view:0,detail:0}),pS=Vt(qa),Id,Ad,vs,du=Ae({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vs&&(vs&&t.type==="mousemove"?(Id=t.screenX-vs.screenX,Ad=t.screenY-vs.screenY):Ad=Id=0,vs=t),Id)},movementY:function(t){return"movementY"in t?t.movementY:Ad}}),Jg=Vt(du),fS=Ae({},du,{dataTransfer:0}),mS=Vt(fS),gS=Ae({},qa,{relatedTarget:0}),Cd=Vt(gS),yS=Ae({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=Vt(yS),wS=Ae({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=Vt(wS),bS=Ae({},Zo,{data:0}),qg=Vt(bS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TS[t])?!!e[t]:!1}function Ef(){return SS}var IS=Ae({},qa,{key:function(t){if(t.key){var e=xS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ES[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AS=Vt(IS),CS=Ae({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Vt(CS),PS=Ae({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),RS=Vt(PS),kS=Ae({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),NS=Vt(kS),DS=Ae({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=Vt(DS),LS=[9,13,27,32],Tf=Kn&&"CompositionEvent"in window,Fs=null;Kn&&"documentMode"in document&&(Fs=document.documentMode);var MS=Kn&&"TextEvent"in window&&!Fs,Dw=Kn&&(!Tf||Fs&&8<Fs&&11>=Fs),Kg=" ",Gg=!1;function Ow(t,e){switch(t){case"keyup":return LS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function jS(t,e){switch(t){case"compositionend":return Lw(e);case"keypress":return e.which!==32?null:(Gg=!0,Kg);case"textInput":return t=e.data,t===Kg&&Gg?null:t;default:return null}}function VS(t,e){if(Zi)return t==="compositionend"||!Tf&&Ow(t,e)?(t=Nw(),Gl=bf=br=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dw&&e.locale!=="ko"?null:e.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FS[t.type]:e==="textarea"}function Mw(t,e,n,r){pw(r),e=vc(e,"onChange"),0<e.length&&(n=new xf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bs=null,ia=null;function BS(t){Ww(t,0)}function hu(t){var e=no(t);if(sw(e))return t}function US(t,e){if(t==="change")return e}var jw=!1;if(Kn){var Pd;if(Kn){var Rd="oninput"in document;if(!Rd){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),Rd=typeof Yg.oninput=="function"}Pd=Rd}else Pd=!1;jw=Pd&&(!document.documentMode||9<document.documentMode)}function Xg(){Bs&&(Bs.detachEvent("onpropertychange",Vw),ia=Bs=null)}function Vw(t){if(t.propertyName==="value"&&hu(ia)){var e=[];Mw(e,ia,t,gf(t)),yw(BS,e)}}function $S(t,e,n){t==="focusin"?(Xg(),Bs=e,ia=n,Bs.attachEvent("onpropertychange",Vw)):t==="focusout"&&Xg()}function zS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(ia)}function HS(t,e){if(t==="click")return hu(e)}function JS(t,e){if(t==="input"||t==="change")return hu(e)}function qS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:qS;function oa(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ey(t,e){var n=Zg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zg(n)}}function Fw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bw(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WS(t){var e=Bw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fw(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ey(n,o);var s=ey(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KS=Kn&&"documentMode"in document&&11>=document.documentMode,eo=null,jh=null,Us=null,Vh=!1;function ty(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||eo==null||eo!==dc(r)||(r=eo,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&oa(Us,r)||(Us=r,r=vc(jh,"onSelect"),0<r.length&&(e=new xf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},kd={},Uw={};Kn&&(Uw=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function pu(t){if(kd[t])return kd[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uw)return kd[t]=e[n];return t}var $w=pu("animationend"),zw=pu("animationiteration"),Hw=pu("animationstart"),Jw=pu("transitionend"),qw=new Map,ny="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){qw.set(t,e),Ni(e,[t])}for(var Nd=0;Nd<ny.length;Nd++){var Dd=ny[Nd],GS=Dd.toLowerCase(),QS=Dd[0].toUpperCase()+Dd.slice(1);Wr(GS,"on"+QS)}Wr($w,"onAnimationEnd");Wr(zw,"onAnimationIteration");Wr(Hw,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(Jw,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function ry(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GT(r,e,void 0,t),t.currentTarget=null}function Ww(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ry(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ry(i,a,c),o=l}}}if(pc)throw t=Dh,pc=!1,Dh=null,t}function we(t,e){var n=e[zh];n===void 0&&(n=e[zh]=new Set);var r=t+"__bubble";n.has(r)||(Kw(e,t,2,!1),n.add(r))}function Od(t,e,n){var r=0;e&&(r|=4),Kw(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[El]){t[El]=!0,tw.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||Od(n,!1,t),Od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Od("selectionchange",!1,e))}}function Kw(t,e,n,r){switch(kw(e)){case 1:var i=dS;break;case 4:i=hS;break;default:i=_f}n=i.bind(null,e,n,t),i=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ld(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=oi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}yw(function(){var c=o,u=gf(n),h=[];e:{var d=qw.get(t);if(d!==void 0){var p=xf,w=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":p=AS;break;case"focusin":w="focus",p=Cd;break;case"focusout":w="blur",p=Cd;break;case"beforeblur":case"afterblur":p=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RS;break;case $w:case zw:case Hw:p=vS;break;case Jw:p=NS;break;case"scroll":p=pS;break;case"wheel":p=OS;break;case"copy":case"cut":case"paste":p=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wg}var y=(e&4)!==0,_=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=ea(g,m),x!=null&&y.push(aa(g,x,v)))),_)break;g=g.return}0<y.length&&(d=new p(d,w,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Rh&&(w=n.relatedTarget||n.fromElement)&&(oi(w)||w[Gn]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=c,w=w?oi(w):null,w!==null&&(_=Di(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=c),p!==w)){if(y=Jg,x="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Wg,x="onPointerLeave",m="onPointerEnter",g="pointer"),_=p==null?d:no(p),v=w==null?d:no(w),d=new y(x,g+"leave",p,n,u),d.target=_,d.relatedTarget=v,x=null,oi(u)===c&&(y=new y(m,g+"enter",w,n,u),y.target=v,y.relatedTarget=_,x=y),_=x,p&&w)t:{for(y=p,m=w,g=0,v=y;v;v=Ji(v))g++;for(v=0,x=m;x;x=Ji(x))v++;for(;0<g-v;)y=Ji(y),g--;for(;0<v-g;)m=Ji(m),v--;for(;g--;){if(y===m||m!==null&&y===m.alternate)break t;y=Ji(y),m=Ji(m)}y=null}else y=null;p!==null&&iy(h,d,p,y,!1),w!==null&&_!==null&&iy(h,_,w,y,!0)}}e:{if(d=c?no(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=US;else if(Qg(d))if(jw)E=JS;else{E=zS;var S=$S}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=HS);if(E&&(E=E(t,c))){Mw(h,E,n,u);break e}S&&S(t,d,c),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Sh(d,"number",d.value)}switch(S=c?no(c):window,t){case"focusin":(Qg(S)||S.contentEditable==="true")&&(eo=S,jh=c,Us=null);break;case"focusout":Us=jh=eo=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,ty(h,n,u);break;case"selectionchange":if(KS)break;case"keydown":case"keyup":ty(h,n,u)}var I;if(Tf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Zi?Ow(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Dw&&n.locale!=="ko"&&(Zi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Zi&&(I=Nw()):(br=u,bf="value"in br?br.value:br.textContent,Zi=!0)),S=vc(c,R),0<S.length&&(R=new qg(R,t,null,n,u),h.push({event:R,listeners:S}),I?R.data=I:(I=Lw(n),I!==null&&(R.data=I)))),(I=MS?jS(t,n):VS(t,n))&&(c=vc(c,"onBeforeInput"),0<c.length&&(u=new qg("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=I))}Ww(h,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ea(t,n),o!=null&&r.unshift(aa(t,o,i)),o=ea(t,e),o!=null&&r.push(aa(t,o,i))),t=t.return}return r}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function iy(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ea(n,o),l!=null&&s.unshift(aa(n,l,a))):i||(l=ea(n,o),l!=null&&s.push(aa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var XS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function oy(t){return(typeof t=="string"?t:""+t).replace(XS,`
`).replace(ZS,"")}function Tl(t,e,n){if(e=oy(e),oy(t)!==e&&n)throw Error(k(425))}function wc(){}var Fh=null,Bh=null;function Uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,eI=typeof clearTimeout=="function"?clearTimeout:void 0,sy=typeof Promise=="function"?Promise:void 0,tI=typeof queueMicrotask=="function"?queueMicrotask:typeof sy<"u"?function(t){return sy.resolve(null).then(t).catch(nI)}:$h;function nI(t){setTimeout(function(){throw t})}function Md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ay(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),xn="__reactFiber$"+es,la="__reactProps$"+es,Gn="__reactContainer$"+es,zh="__reactEvents$"+es,rI="__reactListeners$"+es,iI="__reactHandles$"+es;function oi(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gn]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ay(t);t!==null;){if(n=t[xn])return n;t=ay(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[xn]||t[Gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function fu(t){return t[la]||null}var Hh=[],ro=-1;function Kr(t){return{current:t}}function xe(t){0>ro||(t.current=Hh[ro],Hh[ro]=null,ro--)}function me(t,e){ro++,Hh[ro]=t.current,t.current=e}var Fr={},pt=Kr(Fr),Tt=Kr(!1),bi=Fr;function Oo(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function _c(){xe(Tt),xe(pt)}function ly(t,e,n){if(pt.current!==Fr)throw Error(k(168));me(pt,e),me(Tt,n)}function Gw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,$T(t)||"Unknown",i));return Ae({},n,r)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,bi=pt.current,me(pt,t),me(Tt,Tt.current),!0}function cy(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Gw(t,e,bi),r.__reactInternalMemoizedMergedChildContext=t,xe(Tt),xe(pt),me(pt,t)):xe(Tt),me(Tt,n)}var Bn=null,mu=!1,jd=!1;function Qw(t){Bn===null?Bn=[t]:Bn.push(t)}function oI(t){mu=!0,Qw(t)}function Gr(){if(!jd&&Bn!==null){jd=!0;var t=0,e=he;try{var n=Bn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,mu=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),bw(yf,Gr),i}finally{he=e,jd=!1}}return null}var io=[],oo=0,xc=null,Ec=0,Ut=[],$t=0,xi=null,$n=1,zn="";function ti(t,e){io[oo++]=Ec,io[oo++]=xc,xc=t,Ec=e}function Yw(t,e,n){Ut[$t++]=$n,Ut[$t++]=zn,Ut[$t++]=xi,xi=t;var r=$n;t=zn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var o=32-ln(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$n=1<<32-ln(e)+i|n<<i|r,zn=o+t}else $n=1<<o|n<<i|r,zn=t}function If(t){t.return!==null&&(ti(t,1),Yw(t,1,0))}function Af(t){for(;t===xc;)xc=io[--oo],io[oo]=null,Ec=io[--oo],io[oo]=null;for(;t===xi;)xi=Ut[--$t],Ut[$t]=null,zn=Ut[--$t],Ut[$t]=null,$n=Ut[--$t],Ut[$t]=null}var Dt=null,Nt=null,Te=!1,rn=null;function Xw(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Nt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xi!==null?{id:$n,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Nt=null,!0):!1;default:return!1}}function Jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(Te){var e=Nt;if(e){var n=e;if(!uy(t,e)){if(Jh(t))throw Error(k(418));e=Cr(n.nextSibling);var r=Dt;e&&uy(t,e)?Xw(r,n):(t.flags=t.flags&-4097|2,Te=!1,Dt=t)}}else{if(Jh(t))throw Error(k(418));t.flags=t.flags&-4097|2,Te=!1,Dt=t}}}function dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Sl(t){if(t!==Dt)return!1;if(!Te)return dy(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uh(t.type,t.memoizedProps)),e&&(e=Nt)){if(Jh(t))throw Zw(),Error(k(418));for(;e;)Xw(t,e),e=Cr(e.nextSibling)}if(dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Dt?Cr(t.stateNode.nextSibling):null;return!0}function Zw(){for(var t=Nt;t;)t=Cr(t.nextSibling)}function Lo(){Nt=Dt=null,Te=!1}function Cf(t){rn===null?rn=[t]:rn.push(t)}var sI=nr.ReactCurrentBatchConfig;function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hy(t){var e=t._init;return e(t._payload)}function e_(t){function e(m,g){if(t){var v=m.deletions;v===null?(m.deletions=[g],m.flags|=16):v.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Nr(m,g),m.index=0,m.sibling=null,m}function o(m,g,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<g?(m.flags|=2,g):v):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,g,v,x){return g===null||g.tag!==6?(g=Hd(v,m.mode,x),g.return=m,g):(g=i(g,v),g.return=m,g)}function l(m,g,v,x){var E=v.type;return E===Xi?u(m,g,v.props.children,x,v.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===hr&&hy(E)===g.type)?(x=i(g,v.props),x.ref=ws(m,g,v),x.return=m,x):(x=rc(v.type,v.key,v.props,null,m.mode,x),x.ref=ws(m,g,v),x.return=m,x)}function c(m,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Jd(v,m.mode,x),g.return=m,g):(g=i(g,v.children||[]),g.return=m,g)}function u(m,g,v,x,E){return g===null||g.tag!==7?(g=vi(v,m.mode,x,E),g.return=m,g):(g=i(g,v),g.return=m,g)}function h(m,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hd(""+g,m.mode,v),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ml:return v=rc(g.type,g.key,g.props,null,m.mode,v),v.ref=ws(m,null,g),v.return=m,v;case Yi:return g=Jd(g,m.mode,v),g.return=m,g;case hr:var x=g._init;return h(m,x(g._payload),v)}if(Rs(g)||fs(g))return g=vi(g,m.mode,v,null),g.return=m,g;Il(m,g)}return null}function d(m,g,v,x){var E=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(m,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:return v.key===E?l(m,g,v,x):null;case Yi:return v.key===E?c(m,g,v,x):null;case hr:return E=v._init,d(m,g,E(v._payload),x)}if(Rs(v)||fs(v))return E!==null?null:u(m,g,v,x,null);Il(m,v)}return null}function p(m,g,v,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,a(g,m,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ml:return m=m.get(x.key===null?v:x.key)||null,l(g,m,x,E);case Yi:return m=m.get(x.key===null?v:x.key)||null,c(g,m,x,E);case hr:var S=x._init;return p(m,g,v,S(x._payload),E)}if(Rs(x)||fs(x))return m=m.get(v)||null,u(g,m,x,E,null);Il(g,x)}return null}function w(m,g,v,x){for(var E=null,S=null,I=g,R=g=0,j=null;I!==null&&R<v.length;R++){I.index>R?(j=I,I=null):j=I.sibling;var M=d(m,I,v[R],x);if(M===null){I===null&&(I=j);break}t&&I&&M.alternate===null&&e(m,I),g=o(M,g,R),S===null?E=M:S.sibling=M,S=M,I=j}if(R===v.length)return n(m,I),Te&&ti(m,R),E;if(I===null){for(;R<v.length;R++)I=h(m,v[R],x),I!==null&&(g=o(I,g,R),S===null?E=I:S.sibling=I,S=I);return Te&&ti(m,R),E}for(I=r(m,I);R<v.length;R++)j=p(I,m,R,v[R],x),j!==null&&(t&&j.alternate!==null&&I.delete(j.key===null?R:j.key),g=o(j,g,R),S===null?E=j:S.sibling=j,S=j);return t&&I.forEach(function(Y){return e(m,Y)}),Te&&ti(m,R),E}function y(m,g,v,x){var E=fs(v);if(typeof E!="function")throw Error(k(150));if(v=E.call(v),v==null)throw Error(k(151));for(var S=E=null,I=g,R=g=0,j=null,M=v.next();I!==null&&!M.done;R++,M=v.next()){I.index>R?(j=I,I=null):j=I.sibling;var Y=d(m,I,M.value,x);if(Y===null){I===null&&(I=j);break}t&&I&&Y.alternate===null&&e(m,I),g=o(Y,g,R),S===null?E=Y:S.sibling=Y,S=Y,I=j}if(M.done)return n(m,I),Te&&ti(m,R),E;if(I===null){for(;!M.done;R++,M=v.next())M=h(m,M.value,x),M!==null&&(g=o(M,g,R),S===null?E=M:S.sibling=M,S=M);return Te&&ti(m,R),E}for(I=r(m,I);!M.done;R++,M=v.next())M=p(I,m,R,M.value,x),M!==null&&(t&&M.alternate!==null&&I.delete(M.key===null?R:M.key),g=o(M,g,R),S===null?E=M:S.sibling=M,S=M);return t&&I.forEach(function(z){return e(m,z)}),Te&&ti(m,R),E}function _(m,g,v,x){if(typeof v=="object"&&v!==null&&v.type===Xi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ml:e:{for(var E=v.key,S=g;S!==null;){if(S.key===E){if(E=v.type,E===Xi){if(S.tag===7){n(m,S.sibling),g=i(S,v.props.children),g.return=m,m=g;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===hr&&hy(E)===S.type){n(m,S.sibling),g=i(S,v.props),g.ref=ws(m,S,v),g.return=m,m=g;break e}n(m,S);break}else e(m,S);S=S.sibling}v.type===Xi?(g=vi(v.props.children,m.mode,x,v.key),g.return=m,m=g):(x=rc(v.type,v.key,v.props,null,m.mode,x),x.ref=ws(m,g,v),x.return=m,m=x)}return s(m);case Yi:e:{for(S=v.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(m,g.sibling),g=i(g,v.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=Jd(v,m.mode,x),g.return=m,m=g}return s(m);case hr:return S=v._init,_(m,g,S(v._payload),x)}if(Rs(v))return w(m,g,v,x);if(fs(v))return y(m,g,v,x);Il(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,v),g.return=m,m=g):(n(m,g),g=Hd(v,m.mode,x),g.return=m,m=g),s(m)):n(m,g)}return _}var Mo=e_(!0),t_=e_(!1),Tc=Kr(null),Sc=null,so=null,Pf=null;function Rf(){Pf=so=Sc=null}function kf(t){var e=Tc.current;xe(Tc),t._currentValue=e}function Wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mo(t,e){Sc=t,Pf=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(Sc===null)throw Error(k(308));so=t,Sc.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var si=null;function Nf(t){si===null?si=[t]:si.push(t)}function n_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qn(t,r)}function Qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qn(t,n)}return i=r.interleaved,i===null?(e.next=e,Nf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qn(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vf(t,n)}}function py(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ic(t,e,n,r){var i=t.updateQueue;pr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,u=c=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(d=e,p=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(p,h,d);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,d=typeof w=="function"?w.call(p,h,d):w,d==null)break e;h=Ae({},h,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(u===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ti|=s,t.lanes=s,t.memoizedState=h}}function fy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Ka={},An=Kr(Ka),ca=Kr(Ka),ua=Kr(Ka);function ai(t){if(t===Ka)throw Error(k(174));return t}function Of(t,e){switch(me(ua,e),me(ca,t),me(An,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}xe(An),me(An,e)}function jo(){xe(An),xe(ca),xe(ua)}function i_(t){ai(ua.current);var e=ai(An.current),n=Ah(e,t.type);e!==n&&(me(ca,t),me(An,n))}function Lf(t){ca.current===t&&(xe(An),xe(ca))}var Se=Kr(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vd=[];function Mf(){for(var t=0;t<Vd.length;t++)Vd[t]._workInProgressVersionPrimary=null;Vd.length=0}var Xl=nr.ReactCurrentDispatcher,Fd=nr.ReactCurrentBatchConfig,Ei=0,Ie=null,Be=null,ze=null,Cc=!1,$s=!1,da=0,aI=0;function it(){throw Error(k(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Vf(t,e,n,r,i,o){if(Ei=o,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?dI:hI,t=n(r,i),$s){o=0;do{if($s=!1,da=0,25<=o)throw Error(k(301));o+=1,ze=Be=null,e.updateQueue=null,Xl.current=pI,t=n(r,i)}while($s)}if(Xl.current=Pc,e=Be!==null&&Be.next!==null,Ei=0,ze=Be=Ie=null,Cc=!1,e)throw Error(k(300));return t}function Ff(){var t=da!==0;return da=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ie.memoizedState=ze=t:ze=ze.next=t,ze}function Gt(){if(Be===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=ze===null?Ie.memoizedState:ze.next;if(e!==null)ze=e,Be=t;else{if(t===null)throw Error(k(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ze===null?Ie.memoizedState=ze=t:ze=ze.next=t}return ze}function ha(t,e){return typeof e=="function"?e(t):e}function Bd(t){var e=Gt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Ei&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Ie.lanes|=u,Ti|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,un(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ie.lanes|=o,Ti|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ud(t){var e=Gt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);un(o,e.memoizedState)||(Et=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function o_(){}function s_(t,e){var n=Ie,r=Gt(),i=e(),o=!un(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,Bf(c_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,pa(9,l_.bind(null,n,r,i,e),void 0,null),He===null)throw Error(k(349));Ei&30||a_(n,e,i)}return i}function a_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,r){e.value=n,e.getSnapshot=r,u_(e)&&d_(t)}function c_(t,e,n){return n(function(){u_(e)&&d_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function d_(t){var e=Qn(t,1);e!==null&&cn(e,t,1,-1)}function my(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=uI.bind(null,Ie,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h_(){return Gt().memoizedState}function Zl(t,e,n,r){var i=vn();Ie.flags|=t,i.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function gu(t,e,n,r){var i=Gt();r=r===void 0?null:r;var o=void 0;if(Be!==null){var s=Be.memoizedState;if(o=s.destroy,r!==null&&jf(r,s.deps)){i.memoizedState=pa(e,n,o,r);return}}Ie.flags|=t,i.memoizedState=pa(1|e,n,o,r)}function gy(t,e){return Zl(8390656,8,t,e)}function Bf(t,e){return gu(2048,8,t,e)}function p_(t,e){return gu(4,2,t,e)}function f_(t,e){return gu(4,4,t,e)}function m_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g_(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,m_.bind(null,e,t),n)}function Uf(){}function y_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function w_(t,e,n){return Ei&21?(un(n,e)||(n=Tw(),Ie.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function lI(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Fd.transition;Fd.transition={};try{t(!1),e()}finally{he=n,Fd.transition=r}}function __(){return Gt().memoizedState}function cI(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b_(t))x_(e,n);else if(n=n_(t,e,n,r),n!==null){var i=wt();cn(n,t,r,i),E_(n,e,r)}}function uI(t,e,n){var r=kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b_(t))x_(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,s)){var l=e.interleaved;l===null?(i.next=i,Nf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=n_(t,e,i,r),n!==null&&(i=wt(),cn(n,t,r,i),E_(n,e,r))}}function b_(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function x_(t,e){$s=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vf(t,n)}}var Pc={readContext:Kt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},dI={readContext:Kt,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:gy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,m_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cI.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:my,useDebugValue:Uf,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=my(!1),e=t[0];return t=lI.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=vn();if(Te){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),He===null)throw Error(k(349));Ei&30||a_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,gy(c_.bind(null,r,o,t),[t]),r.flags|=2048,pa(9,l_.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=vn(),e=He.identifierPrefix;if(Te){var n=zn,r=$n;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hI={readContext:Kt,useCallback:y_,useContext:Kt,useEffect:Bf,useImperativeHandle:g_,useInsertionEffect:p_,useLayoutEffect:f_,useMemo:v_,useReducer:Bd,useRef:h_,useState:function(){return Bd(ha)},useDebugValue:Uf,useDeferredValue:function(t){var e=Gt();return w_(e,Be.memoizedState,t)},useTransition:function(){var t=Bd(ha)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:s_,useId:__,unstable_isNewReconciler:!1},pI={readContext:Kt,useCallback:y_,useContext:Kt,useEffect:Bf,useImperativeHandle:g_,useInsertionEffect:p_,useLayoutEffect:f_,useMemo:v_,useReducer:Ud,useRef:h_,useState:function(){return Ud(ha)},useDebugValue:Uf,useDeferredValue:function(t){var e=Gt();return Be===null?e.memoizedState=t:w_(e,Be.memoizedState,t)},useTransition:function(){var t=Ud(ha)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:s_,useId:__,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yu={isMounted:function(t){return(t=t._reactInternals)?Di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=kr(t),o=Jn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Pr(t,o,i),e!==null&&(cn(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=kr(t),o=Jn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Pr(t,o,i),e!==null&&(cn(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=kr(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pr(t,i,r),e!==null&&(cn(e,t,r,n),Yl(e,t,r))}};function yy(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!oa(n,r)||!oa(i,o):!0}function T_(t,e,n){var r=!1,i=Fr,o=e.contextType;return typeof o=="object"&&o!==null?o=Kt(o):(i=St(e)?bi:pt.current,r=e.contextTypes,o=(r=r!=null)?Oo(t,i):Fr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function vy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yu.enqueueReplaceState(e,e.state,null)}function Gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Df(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Kt(o):(o=St(e)?bi:pt.current,i.context=Oo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Kh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yu.enqueueReplaceState(i,i.state,null),Ic(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",r=e;do n+=UT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fI=typeof WeakMap=="function"?WeakMap:Map;function S_(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,sp=r),Qh(t,e)},n}function I_(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function wy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CI.bind(null,t,e,n),e.then(t,t))}function _y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function by(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var mI=nr.ReactCurrentOwner,Et=!1;function gt(t,e,n,r){e.child=t===null?t_(e,null,n,r):Mo(e,t.child,n,r)}function xy(t,e,n,r,i){n=n.render;var o=e.ref;return mo(e,i),r=Vf(t,e,n,r,o,i),n=Ff(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yn(t,e,i)):(Te&&n&&If(e),e.flags|=1,gt(t,e,r,i),e.child)}function Ey(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Gf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,A_(t,e,o,r,i)):(t=rc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(s,r)&&t.ref===e.ref)return Yn(t,e,i)}return e.flags|=1,t=Nr(o,r),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(oa(o,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Yn(t,e,i)}return Yh(t,e,n,r,i)}function C_(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(lo,Rt),Rt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(lo,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(lo,Rt),Rt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,me(lo,Rt),Rt|=r;return gt(t,e,i,n),e.child}function P_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,i){var o=St(n)?bi:pt.current;return o=Oo(e,o),mo(e,i),n=Vf(t,e,n,r,o,i),r=Ff(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yn(t,e,i)):(Te&&r&&If(e),e.flags|=1,gt(t,e,n,i),e.child)}function Ty(t,e,n,r,i){if(St(n)){var o=!0;bc(e)}else o=!1;if(mo(e,i),e.stateNode===null)ec(t,e),T_(e,n,r),Gh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=St(n)?bi:pt.current,c=Oo(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&vy(e,s,r,c),pr=!1;var d=e.memoizedState;s.state=d,Ic(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Tt.current||pr?(typeof u=="function"&&(Kh(e,n,u,r),l=e.memoizedState),(a=pr||yy(e,n,a,r,d,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,r_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zt(e.type,a),s.props=c,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=St(n)?bi:pt.current,l=Oo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vy(e,s,r,l),pr=!1,d=e.memoizedState,s.state=d,Ic(e,r,s,i);var w=e.memoizedState;a!==h||d!==w||Tt.current||pr?(typeof p=="function"&&(Kh(e,n,p,r),w=e.memoizedState),(c=pr||yy(e,n,c,r,d,w,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,o,i)}function Xh(t,e,n,r,i,o){P_(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&cy(e,n,!1),Yn(t,e,o);r=e.stateNode,mI.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Mo(e,t.child,null,o),e.child=Mo(e,null,a,o)):gt(t,e,a,o),e.memoizedState=r.state,i&&cy(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?ly(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ly(t,e.context,!1),Of(t,e.containerInfo)}function Sy(t,e,n,r,i){return Lo(),Cf(i),e.flags|=256,gt(t,e,n,r),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var r=e.pendingProps,i=Se.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Se,i&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_u(s,r,0,null),t=vi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ep(n),e.memoizedState=Zh,t):$f(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gI(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nr(a,o):(o=vi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ep(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Zh,r}return o=t.child,t=o.sibling,r=Nr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $f(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,r){return r!==null&&Cf(r),Mo(e,t.child,null,n),t=$f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gI(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(k(422))),Al(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=_u({mode:"visible",children:r.children},i,0,null),o=vi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Mo(e,t.child,null,s),e.child.memoizedState=ep(s),e.memoizedState=Zh,o);if(!(e.mode&1))return Al(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=$d(o,r,void 0),Al(t,e,s,r)}if(a=(s&t.childLanes)!==0,Et||a){if(r=He,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qn(t,i),cn(r,t,i,-1))}return Kf(),r=$d(Error(k(421))),Al(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PI.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Nt=Cr(i.nextSibling),Dt=e,Te=!0,rn=null,t!==null&&(Ut[$t++]=$n,Ut[$t++]=zn,Ut[$t++]=xi,$n=t.id,zn=t.overflow,xi=e),e=$f(e,r.children),e.flags|=4096,e)}function Iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wh(t.return,e,n)}function zd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function N_(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(gt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iy(t,n,e);else if(t.tag===19)Iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zd(e,!0,n,null,o);break;case"together":zd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yI(t,e,n){switch(e.tag){case 3:R_(e),Lo();break;case 5:i_(e);break;case 1:St(e.type)&&bc(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Tc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(me(Se,Se.current&1),t=Yn(t,e,n),t!==null?t.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return N_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return Yn(t,e,n)}var D_,tp,O_,L_;D_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tp=function(){};O_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(An.current);var o=null;switch(n){case"input":i=Eh(t,i),r=Eh(t,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=Ih(t,i),r=Ih(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wc)}Ch(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&we("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};L_=function(t,e,n,r){n!==r&&(e.flags|=4)};function _s(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vI(t,e,n){var r=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return St(e.type)&&_c(),ot(e),null;case 3:return r=e.stateNode,jo(),xe(Tt),xe(pt),Mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(cp(rn),rn=null))),tp(t,e),ot(e),null;case 5:Lf(e);var i=ai(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ot(e),null}if(t=ai(An.current),Sl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[xn]=e,r[la]=o,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Ns.length;i++)we(Ns[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Lg(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":jg(r,o),we("invalid",r)}Ch(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Tl(r.textContent,a,t),i=["children",""+a]):Xs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":gl(r),Mg(r,o,!0);break;case"textarea":gl(r),Vg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[xn]=e,t[la]=r,D_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ph(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ns.length;i++)we(Ns[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Lg(t,r),i=Eh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),we("invalid",t);break;case"textarea":jg(t,r),i=Ih(t,r),we("invalid",t);break;default:i=r}Ch(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?hw(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uw(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&we("scroll",t):l!=null&&hf(t,o,l,s))}switch(n){case"input":gl(t),Mg(t,r,!1);break;case"textarea":gl(t),Vg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?uo(t,!!r.multiple,o,!1):r.defaultValue!=null&&uo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)L_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ai(ua.current),ai(An.current),Sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(o=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return ot(e),null;case 13:if(xe(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Nt!==null&&e.mode&1&&!(e.flags&128))Zw(),Lo(),e.flags|=98560,o=!1;else if(o=Sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(k(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[xn]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),o=!1}else rn!==null&&(cp(rn),rn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Ue===0&&(Ue=3):Kf())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return jo(),tp(t,e),t===null&&sa(e.stateNode.containerInfo),ot(e),null;case 10:return kf(e.type._context),ot(e),null;case 17:return St(e.type)&&_c(),ot(e),null;case 19:if(xe(Se),o=e.memoizedState,o===null)return ot(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)_s(o,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ac(t),s!==null){for(e.flags|=128,_s(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ne()>Fo&&(e.flags|=128,r=!0,_s(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ac(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_s(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Te)return ot(e),null}else 2*Ne()-o.renderingStartTime>Fo&&n!==1073741824&&(e.flags|=128,r=!0,_s(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ne(),e.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Wf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function wI(t,e){switch(Af(e),e.tag){case 1:return St(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jo(),xe(Tt),xe(pt),Mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(xe(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Se),null;case 4:return jo(),null;case 10:return kf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var Cl=!1,ct=!1,_I=typeof WeakSet=="function"?WeakSet:Set,F=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function np(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Ay=!1;function bI(t,e){if(Fh=gc,t=Bw(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===i&&(a=s),d===o&&++u===r&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},gc=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,_=w.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zt(e.type,y),_);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){Re(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return w=Ay,Ay=!1,w}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&np(e,n,o)}i=i.next}while(i!==r)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M_(t){var e=t.alternate;e!==null&&(t.alternate=null,M_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[la],delete e[zh],delete e[rI],delete e[iI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j_(t){return t.tag===5||t.tag===3||t.tag===4}function Cy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}function op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(op(t,e,n),t=t.sibling;t!==null;)op(t,e,n),t=t.sibling}var Ke=null,nn=!1;function lr(t,e,n){for(n=n.child;n!==null;)V_(t,e,n),n=n.sibling}function V_(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:ct||ao(n,e);case 6:var r=Ke,i=nn;Ke=null,lr(t,e,n),Ke=r,nn=i,Ke!==null&&(nn?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(nn?(t=Ke,n=n.stateNode,t.nodeType===8?Md(t.parentNode,n):t.nodeType===1&&Md(t,n),ra(t)):Md(Ke,n.stateNode));break;case 4:r=Ke,i=nn,Ke=n.stateNode.containerInfo,nn=!0,lr(t,e,n),Ke=r,nn=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&np(n,e,s),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!ct&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,lr(t,e,n),ct=r):lr(t,e,n);break;default:lr(t,e,n)}}function Py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _I),e.forEach(function(r){var i=RI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,nn=!1;break e;case 3:Ke=a.stateNode.containerInfo,nn=!0;break e;case 4:Ke=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(Ke===null)throw Error(k(160));V_(o,s,i),Ke=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F_(e,t),e=e.sibling}function F_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),yn(t),r&4){try{zs(3,t,t.return),vu(3,t)}catch(y){Re(t,t.return,y)}try{zs(5,t,t.return)}catch(y){Re(t,t.return,y)}}break;case 1:Yt(e,t),yn(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(Yt(e,t),yn(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(y){Re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&aw(i,o),Ph(a,s);var c=Ph(a,o);for(s=0;s<l.length;s+=2){var u=l[s],h=l[s+1];u==="style"?hw(i,h):u==="dangerouslySetInnerHTML"?uw(i,h):u==="children"?Zs(i,h):hf(i,u,h,c)}switch(a){case"input":Th(i,o);break;case"textarea":lw(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?uo(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?uo(i,!!o.multiple,o.defaultValue,!0):uo(i,!!o.multiple,o.multiple?[]:"",!1))}i[la]=o}catch(y){Re(t,t.return,y)}}break;case 6:if(Yt(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(y){Re(t,t.return,y)}}break;case 3:if(Yt(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(y){Re(t,t.return,y)}break;case 4:Yt(e,t),yn(t);break;case 13:Yt(e,t),yn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jf=Ne())),r&4&&Py(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||u,Yt(e,t),ct=c):Yt(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(F=t,u=t.child;u!==null;){for(h=F=u;F!==null;){switch(d=F,p=d.child,d.tag){case 0:case 11:case 14:case 15:zs(4,d,d.return);break;case 1:ao(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){Re(r,n,y)}}break;case 5:ao(d,d.return);break;case 22:if(d.memoizedState!==null){ky(h);continue}}p!==null?(p.return=d,F=p):ky(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dw("display",s))}catch(y){Re(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Re(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yt(e,t),yn(t),r&4&&Py(t);break;case 21:break;default:Yt(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var o=Cy(t);op(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Cy(t);ip(t,a,s);break;default:throw Error(k(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xI(t,e,n){F=t,B_(t)}function B_(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Cl;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=Cl;var c=ct;if(Cl=s,(ct=l)&&!c)for(F=i;F!==null;)s=F,l=s.child,s.tag===22&&s.memoizedState!==null?Ny(i):l!==null?(l.return=s,F=l):Ny(i);for(;o!==null;)F=o,B_(o),o=o.sibling;F=i,Cl=a,ct=c}Ry(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):Ry(t)}}function Ry(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&fy(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fy(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ct||e.flags&512&&rp(e)}catch(d){Re(e,e.return,d)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function ky(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Ny(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var o=e.return;try{rp(e)}catch(l){Re(e,o,l)}break;case 5:var s=e.return;try{rp(e)}catch(l){Re(e,s,l)}}}catch(l){Re(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var EI=Math.ceil,Rc=nr.ReactCurrentDispatcher,zf=nr.ReactCurrentOwner,qt=nr.ReactCurrentBatchConfig,se=0,He=null,je=null,Ze=0,Rt=0,lo=Kr(0),Ue=0,fa=null,Ti=0,wu=0,Hf=0,Hs=null,xt=null,Jf=0,Fo=1/0,Fn=null,kc=!1,sp=null,Rr=null,Pl=!1,xr=null,Nc=0,Js=0,ap=null,tc=-1,nc=0;function wt(){return se&6?Ne():tc!==-1?tc:tc=Ne()}function kr(t){return t.mode&1?se&2&&Ze!==0?Ze&-Ze:sI.transition!==null?(nc===0&&(nc=Tw()),nc):(t=he,t!==0||(t=window.event,t=t===void 0?16:kw(t.type)),t):1}function cn(t,e,n,r){if(50<Js)throw Js=0,ap=null,Error(k(185));Ja(t,n,r),(!(se&2)||t!==He)&&(t===He&&(!(se&2)&&(wu|=n),Ue===4&&mr(t,Ze)),It(t,r),n===1&&se===0&&!(e.mode&1)&&(Fo=Ne()+500,mu&&Gr()))}function It(t,e){var n=t.callbackNode;sS(t,e);var r=mc(t,t===He?Ze:0);if(r===0)n!==null&&Ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ug(n),e===1)t.tag===0?oI(Dy.bind(null,t)):Qw(Dy.bind(null,t)),tI(function(){!(se&6)&&Gr()}),n=null;else{switch(Sw(r)){case 1:n=yf;break;case 4:n=xw;break;case 16:n=fc;break;case 536870912:n=Ew;break;default:n=fc}n=K_(n,U_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U_(t,e){if(tc=-1,nc=0,se&6)throw Error(k(327));var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var r=mc(t,t===He?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dc(t,r);else{e=r;var i=se;se|=2;var o=z_();(He!==t||Ze!==e)&&(Fn=null,Fo=Ne()+500,yi(t,e));do try{II();break}catch(a){$_(t,a)}while(!0);Rf(),Rc.current=o,se=i,je!==null?e=0:(He=null,Ze=0,e=Ue)}if(e!==0){if(e===2&&(i=Oh(t),i!==0&&(r=i,e=lp(t,i))),e===1)throw n=fa,yi(t,0),mr(t,r),It(t,Ne()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!TI(i)&&(e=Dc(t,r),e===2&&(o=Oh(t),o!==0&&(r=o,e=lp(t,o))),e===1))throw n=fa,yi(t,0),mr(t,r),It(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ni(t,xt,Fn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=Jf+500-Ne(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$h(ni.bind(null,t,xt,Fn),e);break}ni(t,xt,Fn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-ln(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EI(r/1960))-r,10<r){t.timeoutHandle=$h(ni.bind(null,t,xt,Fn),r);break}ni(t,xt,Fn);break;case 5:ni(t,xt,Fn);break;default:throw Error(k(329))}}}return It(t,Ne()),t.callbackNode===n?U_.bind(null,t):null}function lp(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=xt,xt=n,e!==null&&cp(e)),t}function cp(t){xt===null?xt=t:xt.push.apply(xt,t)}function TI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!un(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Hf,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function Dy(t){if(se&6)throw Error(k(327));go();var e=mc(t,0);if(!(e&1))return It(t,Ne()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var r=Oh(t);r!==0&&(e=r,n=lp(t,r))}if(n===1)throw n=fa,yi(t,0),mr(t,e),It(t,Ne()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,xt,Fn),It(t,Ne()),null}function qf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Fo=Ne()+500,mu&&Gr())}}function Si(t){xr!==null&&xr.tag===0&&!(se&6)&&go();var e=se;se|=1;var n=qt.transition,r=he;try{if(qt.transition=null,he=1,t)return t()}finally{he=r,qt.transition=n,se=e,!(se&6)&&Gr()}}function Wf(){Rt=lo.current,xe(lo)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eI(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:jo(),xe(Tt),xe(pt),Mf();break;case 5:Lf(r);break;case 4:jo();break;case 13:xe(Se);break;case 19:xe(Se);break;case 10:kf(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(He=t,je=t=Nr(t.current,null),Ze=Rt=e,Ue=0,fa=null,Hf=wu=Ti=0,xt=Hs=null,si!==null){for(e=0;e<si.length;e++)if(n=si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}si=null}return t}function $_(t,e){do{var n=je;try{if(Rf(),Xl.current=Pc,Cc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Ei=0,ze=Be=Ie=null,$s=!1,da=0,zf.current=null,n===null||n.return===null){Ue=1,fa=e,je=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=_y(s);if(p!==null){p.flags&=-257,by(p,s,a,o,e),p.mode&1&&wy(o,c,e),e=p,l=c;var w=e.updateQueue;if(w===null){var y=new Set;y.add(l),e.updateQueue=y}else w.add(l);break e}else{if(!(e&1)){wy(o,c,e),Kf();break e}l=Error(k(426))}}else if(Te&&a.mode&1){var _=_y(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),by(_,s,a,o,e),Cf(Vo(l,a));break e}}o=l=Vo(l,a),Ue!==4&&(Ue=2),Hs===null?Hs=[o]:Hs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=S_(o,l,e);py(o,m);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Rr===null||!Rr.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=I_(o,a,e);py(o,x);break e}}o=o.return}while(o!==null)}J_(n)}catch(E){e=E,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function z_(){var t=Rc.current;return Rc.current=Pc,t===null?Pc:t}function Kf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(Ti&268435455)&&!(wu&268435455)||mr(He,Ze)}function Dc(t,e){var n=se;se|=2;var r=z_();(He!==t||Ze!==e)&&(Fn=null,yi(t,e));do try{SI();break}catch(i){$_(t,i)}while(!0);if(Rf(),se=n,Rc.current=r,je!==null)throw Error(k(261));return He=null,Ze=0,Ue}function SI(){for(;je!==null;)H_(je)}function II(){for(;je!==null&&!YT();)H_(je)}function H_(t){var e=W_(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?J_(t):je=e,zf.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wI(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,je=null;return}}else if(n=vI(n,e,Rt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ue===0&&(Ue=5)}function ni(t,e,n){var r=he,i=qt.transition;try{qt.transition=null,he=1,AI(t,e,n,r)}finally{qt.transition=i,he=r}return null}function AI(t,e,n,r){do go();while(xr!==null);if(se&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(aS(t,o),t===He&&(je=He=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,K_(fc,function(){return go(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qt.transition,qt.transition=null;var s=he;he=1;var a=se;se|=4,zf.current=null,bI(t,n),F_(n,t),WS(Bh),gc=!!Fh,Bh=Fh=null,t.current=n,xI(n),XT(),se=a,he=s,qt.transition=o}else t.current=n;if(Pl&&(Pl=!1,xr=t,Nc=i),o=t.pendingLanes,o===0&&(Rr=null),tS(n.stateNode),It(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=sp,sp=null,t;return Nc&1&&t.tag!==0&&go(),o=t.pendingLanes,o&1?t===ap?Js++:(Js=0,ap=t):Js=0,Gr(),null}function go(){if(xr!==null){var t=Sw(Nc),e=qt.transition,n=he;try{if(qt.transition=null,he=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Nc=0,se&6)throw Error(k(331));var i=se;for(se|=4,F=t.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(F=c;F!==null;){var u=F;switch(u.tag){case 0:case 11:case 15:zs(8,u,o)}var h=u.child;if(h!==null)h.return=u,F=h;else for(;F!==null;){u=F;var d=u.sibling,p=u.return;if(M_(u),u===c){F=null;break}if(d!==null){d.return=p,F=d;break}F=p}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zs(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,F=m;break e}F=o.return}}var g=t.current;for(F=g;F!==null;){s=F;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,F=v;else e:for(s=g;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vu(9,a)}}catch(E){Re(a,a.return,E)}if(a===s){F=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,F=x;break e}F=a.return}}if(se=i,Gr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{he=n,qt.transition=e}}return!1}function Oy(t,e,n){e=Vo(n,e),e=S_(t,e,1),t=Pr(t,e,1),e=wt(),t!==null&&(Ja(t,1,e),It(t,e))}function Re(t,e,n){if(t.tag===3)Oy(t,t,n);else for(;e!==null;){if(e.tag===3){Oy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=Vo(n,t),t=I_(e,t,1),e=Pr(e,t,1),t=wt(),e!==null&&(Ja(e,1,t),It(e,t));break}}e=e.return}}function CI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ze&n)===n&&(Ue===4||Ue===3&&(Ze&130023424)===Ze&&500>Ne()-Jf?yi(t,0):Hf|=n),It(t,e)}function q_(t,e){e===0&&(t.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var n=wt();t=Qn(t,e),t!==null&&(Ja(t,e,n),It(t,n))}function PI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q_(t,n)}function RI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),q_(t,n)}var W_;W_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,yI(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Te&&e.flags&1048576&&Yw(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ec(t,e),t=e.pendingProps;var i=Oo(e,pt.current);mo(e,n),i=Vf(null,e,r,t,i,n);var o=Ff();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(o=!0,bc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Df(e),i.updater=yu,e.stateNode=i,i._reactInternals=e,Gh(e,r,t,n),e=Xh(null,e,r,!0,o,n)):(e.tag=0,Te&&o&&If(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=NI(r),t=Zt(r,t),i){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=Ty(null,e,r,t,n);break e;case 11:e=xy(null,e,r,t,n);break e;case 14:e=Ey(null,e,r,Zt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Ty(t,e,r,i,n);case 3:e:{if(R_(e),t===null)throw Error(k(387));r=e.pendingProps,o=e.memoizedState,i=o.element,r_(t,e),Ic(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Vo(Error(k(423)),e),e=Sy(t,e,r,n,i);break e}else if(r!==i){i=Vo(Error(k(424)),e),e=Sy(t,e,r,n,i);break e}else for(Nt=Cr(e.stateNode.containerInfo.firstChild),Dt=e,Te=!0,rn=null,n=t_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lo(),r===i){e=Yn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return i_(e),t===null&&qh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Uh(r,i)?s=null:o!==null&&Uh(r,o)&&(e.flags|=32),P_(t,e),gt(t,e,s,n),e.child;case 6:return t===null&&qh(e),null;case 13:return k_(t,e,n);case 4:return Of(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mo(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),xy(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,me(Tc,r._currentValue),r._currentValue=s,o!==null)if(un(o.value,s)){if(o.children===i.children&&!Tt.current){e=Yn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Jn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mo(e,n),i=Kt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),Ey(t,e,r,i,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),ec(t,e),e.tag=1,St(r)?(t=!0,bc(e)):t=!1,mo(e,n),T_(e,r,i),Gh(e,r,i,n),Xh(null,e,r,!0,t,n);case 19:return N_(t,e,n);case 22:return C_(t,e,n)}throw Error(k(156,e.tag))};function K_(t,e){return bw(t,e)}function kI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new kI(t,e,n,r)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NI(t){if(typeof t=="function")return Gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===mf)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Gf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Xi:return vi(n.children,i,o,e);case pf:s=8,i|=8;break;case wh:return t=Jt(12,n,e,i|2),t.elementType=wh,t.lanes=o,t;case _h:return t=Jt(13,n,e,i),t.elementType=_h,t.lanes=o,t;case bh:return t=Jt(19,n,e,i),t.elementType=bh,t.lanes=o,t;case iw:return _u(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nw:s=10;break e;case rw:s=9;break e;case ff:s=11;break e;case mf:s=14;break e;case hr:s=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Jt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function vi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=iw,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Jd(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,r,i,o,s,a,l){return t=new DI(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Jt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(o),t}function OI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G_(t){if(!t)return Fr;t=t._reactInternals;e:{if(Di(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(St(n))return Gw(t,n,e)}return e}function Q_(t,e,n,r,i,o,s,a,l){return t=Qf(n,r,!0,t,i,o,s,a,l),t.context=G_(null),n=t.current,r=wt(),i=kr(n),o=Jn(r,i),o.callback=e??null,Pr(n,o,i),t.current.lanes=i,Ja(t,i,r),It(t,r),t}function bu(t,e,n,r){var i=e.current,o=wt(),s=kr(i);return n=G_(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(i,e,s),t!==null&&(cn(t,i,s,o),Yl(t,i,s)),s}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){Ly(t,e),(t=t.alternate)&&Ly(t,e)}function LI(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}xu.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));bu(t,e,null,null)};xu.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Si(function(){bu(null,t,null,null)}),e[Gn]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Rw(t)}};function Zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function My(){}function MI(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Oc(s);o.call(c)}}var s=Q_(e,r,t,0,null,!1,!1,"",My);return t._reactRootContainer=s,t[Gn]=s.current,sa(t.nodeType===8?t.parentNode:t),Si(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Oc(l);a.call(c)}}var l=Qf(t,0,!1,null,null,!1,!1,"",My);return t._reactRootContainer=l,t[Gn]=l.current,sa(t.nodeType===8?t.parentNode:t),Si(function(){bu(e,l,n,r)}),l}function Tu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Oc(s);a.call(l)}}bu(e,s,t,i)}else s=MI(n,e,t,i,r);return Oc(s)}Iw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ks(e.pendingLanes);n!==0&&(vf(e,n|1),It(e,Ne()),!(se&6)&&(Fo=Ne()+500,Gr()))}break;case 13:Si(function(){var r=Qn(t,1);if(r!==null){var i=wt();cn(r,t,1,i)}}),Yf(t,1)}};wf=function(t){if(t.tag===13){var e=Qn(t,134217728);if(e!==null){var n=wt();cn(e,t,134217728,n)}Yf(t,134217728)}};Aw=function(t){if(t.tag===13){var e=kr(t),n=Qn(t,e);if(n!==null){var r=wt();cn(n,t,e,r)}Yf(t,e)}};Cw=function(){return he};Pw=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};kh=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(k(90));sw(r),Th(r,i)}}}break;case"textarea":lw(t,n);break;case"select":e=n.value,e!=null&&uo(t,!!n.multiple,e,!1)}};mw=qf;gw=Si;var jI={usingClientEntryPoint:!1,Events:[Wa,no,fu,pw,fw,qf]},bs={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VI={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ww(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||LI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{uu=Rl.inject(VI),In=Rl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jI;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(e))throw Error(k(200));return OI(t,e,null,n)};jt.createRoot=function(t,e){if(!Zf(t))throw Error(k(299));var n=!1,r="",i=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,r,i),t[Gn]=e.current,sa(t.nodeType===8?t.parentNode:t),new Xf(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=ww(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Si(t)};jt.hydrate=function(t,e,n){if(!Eu(e))throw Error(k(200));return Tu(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Zf(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Q_(e,null,t,1,n??null,i,!1,o,s),t[Gn]=e.current,sa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xu(e)};jt.render=function(t,e,n){if(!Eu(e))throw Error(k(200));return Tu(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(k(40));return t._reactRootContainer?(Si(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gn]=null})}),!0):!1};jt.unstable_batchedUpdates=qf;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Tu(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(t){console.error(t)}}X_(),X0.exports=jt;var Su=X0.exports;const FI=za(Su);var Z_,jy=Su;Z_=jy.createRoot,jy.hydrateRoot;var BI=t=>{switch(t){case"success":return zI;case"info":return JI;case"warning":return HI;case"error":return qI;default:return null}},UI=Array(12).fill(0),$I=({visible:t})=>N.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},N.createElement("div",{className:"sonner-spinner"},UI.map((e,n)=>N.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),zI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),HI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),JI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),qI=N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},N.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),WI=()=>{let[t,e]=N.useState(document.hidden);return N.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},up=1,KI=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...r}=t,i=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:up++,o=this.toasts.find(a=>a.id===i),s=t.dismissible===void 0?!0:t.dismissible;return o?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...t,id:i,title:n}),{...a,...t,id:i,dismissible:s,title:n}):a):this.addToast({title:n,...r,dismissible:s,id:i}),i},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let r=t instanceof Promise?t:t(),i=n!==void 0;return r.then(async o=>{if(QI(o)&&!o.ok){i=!1;let s=typeof e.error=="function"?await e.error(`HTTP error! status: ${o.status}`):e.error,a=typeof e.description=="function"?await e.description(`HTTP error! status: ${o.status}`):e.description;this.create({id:n,type:"error",message:s,description:a})}else if(e.success!==void 0){i=!1;let s=typeof e.success=="function"?await e.success(o):e.success,a=typeof e.description=="function"?await e.description(o):e.description;this.create({id:n,type:"success",message:s,description:a})}}).catch(async o=>{if(e.error!==void 0){i=!1;let s=typeof e.error=="function"?await e.error(o):e.error,a=typeof e.description=="function"?await e.description(o):e.description;this.create({id:n,type:"error",message:s,description:a})}}).finally(()=>{var o;i&&(this.dismiss(n),n=void 0),(o=e.finally)==null||o.call(e)}),n},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||up++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},Pt=new KI,GI=(t,e)=>{let n=(e==null?void 0:e.id)||up++;return Pt.addToast({title:t,...e,id:n}),n},QI=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",YI=GI,XI=()=>Pt.toasts,wi=Object.assign(YI,{success:Pt.success,info:Pt.info,warning:Pt.warning,error:Pt.error,custom:Pt.custom,message:Pt.message,promise:Pt.promise,dismiss:Pt.dismiss,loading:Pt.loading},{getHistory:XI});function ZI(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}ZI(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function kl(t){return t.label!==void 0}var eA=3,tA="32px",nA=4e3,rA=356,iA=14,oA=20,sA=200;function aA(...t){return t.filter(Boolean).join(" ")}var lA=t=>{var e,n,r,i,o,s,a,l,c,u;let{invert:h,toast:d,unstyled:p,interacting:w,setHeights:y,visibleToasts:_,heights:m,index:g,toasts:v,expanded:x,removeToast:E,defaultRichColors:S,closeButton:I,style:R,cancelButtonStyle:j,actionButtonStyle:M,className:Y="",descriptionClassName:z="",duration:ne,position:ie,gap:Ee,loadingIcon:Z,expandByDefault:ae,classNames:T,icons:D,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:B,cn:H}=t,[ce,Oe]=N.useState(!1),[At,de]=N.useState(!1),[Qt,rr]=N.useState(!1),[ir,or]=N.useState(!1),[cl,Ui]=N.useState(0),[ei,ps]=N.useState(0),ul=N.useRef(null),sr=N.useRef(null),md=g===0,gd=g+1<=_,We=d.type,$i=d.dismissible!==!1,rT=d.className||"",iT=d.descriptionClassName||"",dl=N.useMemo(()=>m.findIndex(G=>G.toastId===d.id)||0,[m,d.id]),oT=N.useMemo(()=>{var G;return(G=d.closeButton)!=null?G:I},[d.closeButton,I]),Eg=N.useMemo(()=>d.duration||ne||nA,[d.duration,ne]),yd=N.useRef(0),zi=N.useRef(0),Tg=N.useRef(0),Hi=N.useRef(null),[Sg,sT]=ie.split("-"),Ig=N.useMemo(()=>m.reduce((G,ye,fe)=>fe>=dl?G:G+ye.height,0),[m,dl]),Ag=WI(),aT=d.invert||h,vd=We==="loading";zi.current=N.useMemo(()=>dl*Ee+Ig,[dl,Ig]),N.useEffect(()=>{Oe(!0)},[]),N.useLayoutEffect(()=>{if(!ce)return;let G=sr.current,ye=G.style.height;G.style.height="auto";let fe=G.getBoundingClientRect().height;G.style.height=ye,ps(fe),y(mn=>mn.find(gn=>gn.toastId===d.id)?mn.map(gn=>gn.toastId===d.id?{...gn,height:fe}:gn):[{toastId:d.id,height:fe,position:d.position},...mn])},[ce,d.title,d.description,y,d.id]);let ar=N.useCallback(()=>{de(!0),Ui(zi.current),y(G=>G.filter(ye=>ye.toastId!==d.id)),setTimeout(()=>{E(d)},sA)},[d,E,y,zi]);N.useEffect(()=>{if(d.promise&&We==="loading"||d.duration===1/0||d.type==="loading")return;let G,ye=Eg;return x||w||B&&Ag?(()=>{if(Tg.current<yd.current){let fe=new Date().getTime()-yd.current;ye=ye-fe}Tg.current=new Date().getTime()})():ye!==1/0&&(yd.current=new Date().getTime(),G=setTimeout(()=>{var fe;(fe=d.onAutoClose)==null||fe.call(d,d),ar()},ye)),()=>clearTimeout(G)},[x,w,ae,d,Eg,ar,d.promise,We,B,Ag]),N.useEffect(()=>{let G=sr.current;if(G){let ye=G.getBoundingClientRect().height;return ps(ye),y(fe=>[{toastId:d.id,height:ye,position:d.position},...fe]),()=>y(fe=>fe.filter(mn=>mn.toastId!==d.id))}},[y,d.id]),N.useEffect(()=>{d.delete&&ar()},[ar,d.delete]);function lT(){return D!=null&&D.loading?N.createElement("div",{className:"sonner-loader","data-visible":We==="loading"},D.loading):Z?N.createElement("div",{className:"sonner-loader","data-visible":We==="loading"},Z):N.createElement($I,{visible:We==="loading"})}return N.createElement("li",{"aria-live":d.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:sr,className:H(Y,rT,T==null?void 0:T.toast,(e=d==null?void 0:d.classNames)==null?void 0:e.toast,T==null?void 0:T.default,T==null?void 0:T[We],(n=d==null?void 0:d.classNames)==null?void 0:n[We]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:S,"data-styled":!(d.jsx||d.unstyled||p),"data-mounted":ce,"data-promise":!!d.promise,"data-removed":At,"data-visible":gd,"data-y-position":Sg,"data-x-position":sT,"data-index":g,"data-front":md,"data-swiping":Qt,"data-dismissible":$i,"data-type":We,"data-invert":aT,"data-swipe-out":ir,"data-expanded":!!(x||ae&&ce),style:{"--index":g,"--toasts-before":g,"--z-index":v.length-g,"--offset":`${At?cl:zi.current}px`,"--initial-height":ae?"auto":`${ei}px`,...R,...d.style},onPointerDown:G=>{vd||!$i||(ul.current=new Date,Ui(zi.current),G.target.setPointerCapture(G.pointerId),G.target.tagName!=="BUTTON"&&(rr(!0),Hi.current={x:G.clientX,y:G.clientY}))},onPointerUp:()=>{var G,ye,fe,mn;if(ir||!$i)return;Hi.current=null;let gn=Number(((G=sr.current)==null?void 0:G.style.getPropertyValue("--swipe-amount").replace("px",""))||0),hl=new Date().getTime()-((ye=ul.current)==null?void 0:ye.getTime()),cT=Math.abs(gn)/hl;if(Math.abs(gn)>=oA||cT>.11){Ui(zi.current),(fe=d.onDismiss)==null||fe.call(d,d),ar(),or(!0);return}(mn=sr.current)==null||mn.style.setProperty("--swipe-amount","0px"),rr(!1)},onPointerMove:G=>{var ye;if(!Hi.current||!$i)return;let fe=G.clientY-Hi.current.y,mn=G.clientX-Hi.current.x,gn=(Sg==="top"?Math.min:Math.max)(0,fe),hl=G.pointerType==="touch"?10:2;Math.abs(gn)>hl?(ye=sr.current)==null||ye.style.setProperty("--swipe-amount",`${fe}px`):Math.abs(mn)>hl&&(Hi.current=null)}},oT&&!d.jsx?N.createElement("button",{"aria-label":U,"data-disabled":vd,"data-close-button":!0,onClick:vd||!$i?()=>{}:()=>{var G;ar(),(G=d.onDismiss)==null||G.call(d,d)},className:H(T==null?void 0:T.closeButton,(i=d==null?void 0:d.classNames)==null?void 0:i.closeButton)},N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},N.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),N.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,d.jsx||N.isValidElement(d.title)?d.jsx||d.title:N.createElement(N.Fragment,null,We||d.icon||d.promise?N.createElement("div",{"data-icon":"",className:H(T==null?void 0:T.icon,(o=d==null?void 0:d.classNames)==null?void 0:o.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||lT():null,d.type!=="loading"?d.icon||(D==null?void 0:D[We])||BI(We):null):null,N.createElement("div",{"data-content":"",className:H(T==null?void 0:T.content,(s=d==null?void 0:d.classNames)==null?void 0:s.content)},N.createElement("div",{"data-title":"",className:H(T==null?void 0:T.title,(a=d==null?void 0:d.classNames)==null?void 0:a.title)},d.title),d.description?N.createElement("div",{"data-description":"",className:H(z,iT,T==null?void 0:T.description,(l=d==null?void 0:d.classNames)==null?void 0:l.description)},d.description):null),N.isValidElement(d.cancel)?d.cancel:d.cancel&&kl(d.cancel)?N.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||j,onClick:G=>{var ye,fe;kl(d.cancel)&&$i&&((fe=(ye=d.cancel).onClick)==null||fe.call(ye,G),ar())},className:H(T==null?void 0:T.cancelButton,(c=d==null?void 0:d.classNames)==null?void 0:c.cancelButton)},d.cancel.label):null,N.isValidElement(d.action)?d.action:d.action&&kl(d.action)?N.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||M,onClick:G=>{var ye,fe;kl(d.action)&&(G.defaultPrevented||((fe=(ye=d.action).onClick)==null||fe.call(ye,G),ar()))},className:H(T==null?void 0:T.actionButton,(u=d==null?void 0:d.classNames)==null?void 0:u.actionButton)},d.action.label):null))};function Vy(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var cA=t=>{let{invert:e,position:n="bottom-right",hotkey:r=["altKey","KeyT"],expand:i,closeButton:o,className:s,offset:a,theme:l="light",richColors:c,duration:u,style:h,visibleToasts:d=eA,toastOptions:p,dir:w=Vy(),gap:y=iA,loadingIcon:_,icons:m,containerAriaLabel:g="Notifications",pauseWhenPageIsHidden:v,cn:x=aA}=t,[E,S]=N.useState([]),I=N.useMemo(()=>Array.from(new Set([n].concat(E.filter(B=>B.position).map(B=>B.position)))),[E,n]),[R,j]=N.useState([]),[M,Y]=N.useState(!1),[z,ne]=N.useState(!1),[ie,Ee]=N.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Z=N.useRef(null),ae=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=N.useRef(null),D=N.useRef(!1),U=N.useCallback(B=>{var H;(H=E.find(ce=>ce.id===B.id))!=null&&H.delete||Pt.dismiss(B.id),S(ce=>ce.filter(({id:Oe})=>Oe!==B.id))},[E]);return N.useEffect(()=>Pt.subscribe(B=>{if(B.dismiss){S(H=>H.map(ce=>ce.id===B.id?{...ce,delete:!0}:ce));return}setTimeout(()=>{FI.flushSync(()=>{S(H=>{let ce=H.findIndex(Oe=>Oe.id===B.id);return ce!==-1?[...H.slice(0,ce),{...H[ce],...B},...H.slice(ce+1)]:[B,...H]})})})}),[]),N.useEffect(()=>{if(l!=="system"){Ee(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Ee("dark"):Ee("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:B})=>{Ee(B?"dark":"light")})},[l]),N.useEffect(()=>{E.length<=1&&Y(!1)},[E]),N.useEffect(()=>{let B=H=>{var ce,Oe;r.every(At=>H[At]||H.code===At)&&(Y(!0),(ce=Z.current)==null||ce.focus()),H.code==="Escape"&&(document.activeElement===Z.current||(Oe=Z.current)!=null&&Oe.contains(document.activeElement))&&Y(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[r]),N.useEffect(()=>{if(Z.current)return()=>{T.current&&(T.current.focus({preventScroll:!0}),T.current=null,D.current=!1)}},[Z.current]),E.length?N.createElement("section",{"aria-label":`${g} ${ae}`,tabIndex:-1},I.map((B,H)=>{var ce;let[Oe,At]=B.split("-");return N.createElement("ol",{key:B,dir:w==="auto"?Vy():w,tabIndex:-1,ref:Z,className:s,"data-sonner-toaster":!0,"data-theme":ie,"data-y-position":Oe,"data-x-position":At,style:{"--front-toast-height":`${((ce=R[0])==null?void 0:ce.height)||0}px`,"--offset":typeof a=="number"?`${a}px`:a||tA,"--width":`${rA}px`,"--gap":`${y}px`,...h},onBlur:de=>{D.current&&!de.currentTarget.contains(de.relatedTarget)&&(D.current=!1,T.current&&(T.current.focus({preventScroll:!0}),T.current=null))},onFocus:de=>{de.target instanceof HTMLElement&&de.target.dataset.dismissible==="false"||D.current||(D.current=!0,T.current=de.relatedTarget)},onMouseEnter:()=>Y(!0),onMouseMove:()=>Y(!0),onMouseLeave:()=>{z||Y(!1)},onPointerDown:de=>{de.target instanceof HTMLElement&&de.target.dataset.dismissible==="false"||ne(!0)},onPointerUp:()=>ne(!1)},E.filter(de=>!de.position&&H===0||de.position===B).map((de,Qt)=>{var rr,ir;return N.createElement(lA,{key:de.id,icons:m,index:Qt,toast:de,defaultRichColors:c,duration:(rr=p==null?void 0:p.duration)!=null?rr:u,className:p==null?void 0:p.className,descriptionClassName:p==null?void 0:p.descriptionClassName,invert:e,visibleToasts:d,closeButton:(ir=p==null?void 0:p.closeButton)!=null?ir:o,interacting:z,position:B,style:p==null?void 0:p.style,unstyled:p==null?void 0:p.unstyled,classNames:p==null?void 0:p.classNames,cancelButtonStyle:p==null?void 0:p.cancelButtonStyle,actionButtonStyle:p==null?void 0:p.actionButtonStyle,removeToast:U,toasts:E.filter(or=>or.position==de.position),heights:R.filter(or=>or.position==de.position),setHeights:j,expandByDefault:i,gap:y,loadingIcon:_,expanded:M,pauseWhenPageIsHidden:v,cn:x})}))})):null};const uA=({...t})=>f.jsx(cA,{className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t});function Un(t,e,{checkForDefaultPrevented:n=!0}={}){return function(i){if(t==null||t(i),n===!1||!i.defaultPrevented)return e==null?void 0:e(i)}}function dA(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function e1(...t){return e=>t.forEach(n=>dA(n,e))}function Oi(...t){return b.useCallback(e1(...t),t)}function hA(t,e=[]){let n=[];function r(o,s){const a=b.createContext(s),l=n.length;n=[...n,s];const c=h=>{var m;const{scope:d,children:p,...w}=h,y=((m=d==null?void 0:d[t])==null?void 0:m[l])||a,_=b.useMemo(()=>w,Object.values(w));return f.jsx(y.Provider,{value:_,children:p})};c.displayName=o+"Provider";function u(h,d){var y;const p=((y=d==null?void 0:d[t])==null?void 0:y[l])||a,w=b.useContext(p);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${o}\``)}return[c,u]}const i=()=>{const o=n.map(s=>b.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return b.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,pA(i,...e)]}function pA(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const h=l(o)[`__scope${c}`];return{...a,...h}},{});return b.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var em=b.forwardRef((t,e)=>{const{children:n,...r}=t,i=b.Children.toArray(n),o=i.find(fA);if(o){const s=o.props.children,a=i.map(l=>l===o?b.Children.count(s)>1?b.Children.only(null):b.isValidElement(s)?s.props.children:null:l);return f.jsx(dp,{...r,ref:e,children:b.isValidElement(s)?b.cloneElement(s,void 0,a):null})}return f.jsx(dp,{...r,ref:e,children:n})});em.displayName="Slot";var dp=b.forwardRef((t,e)=>{const{children:n,...r}=t;if(b.isValidElement(n)){const i=gA(n);return b.cloneElement(n,{...mA(r,n.props),ref:e?e1(e,i):i})}return b.Children.count(n)>1?b.Children.only(null):null});dp.displayName="SlotClone";var t1=({children:t})=>f.jsx(f.Fragment,{children:t});function fA(t){return b.isValidElement(t)&&t.type===t1}function mA(t,e){const n={...e};for(const r in e){const i=t[r],o=e[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...t,...n}}function gA(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var yA=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Li=yA.reduce((t,e)=>{const n=b.forwardRef((r,i)=>{const{asChild:o,...s}=r,a=o?em:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(a,{...s,ref:i})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function vA(t,e){t&&Su.flushSync(()=>t.dispatchEvent(e))}function Iu(t){const e=b.useRef(t);return b.useEffect(()=>{e.current=t}),b.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function wA(t,e=globalThis==null?void 0:globalThis.document){const n=Iu(t);b.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var _A="DismissableLayer",hp="dismissableLayer.update",bA="dismissableLayer.pointerDownOutside",xA="dismissableLayer.focusOutside",Fy,n1=b.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),r1=b.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=t,c=b.useContext(n1),[u,h]=b.useState(null),d=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=b.useState({}),w=Oi(e,I=>h(I)),y=Array.from(c.layers),[_]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),m=y.indexOf(_),g=u?y.indexOf(u):-1,v=c.layersWithOutsidePointerEventsDisabled.size>0,x=g>=m,E=SA(I=>{const R=I.target,j=[...c.branches].some(M=>M.contains(R));!x||j||(i==null||i(I),s==null||s(I),I.defaultPrevented||a==null||a())},d),S=IA(I=>{const R=I.target;[...c.branches].some(M=>M.contains(R))||(o==null||o(I),s==null||s(I),I.defaultPrevented||a==null||a())},d);return wA(I=>{g===c.layers.size-1&&(r==null||r(I),!I.defaultPrevented&&a&&(I.preventDefault(),a()))},d),b.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Fy=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),By(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=Fy)}},[u,d,n,c]),b.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),By())},[u,c]),b.useEffect(()=>{const I=()=>p({});return document.addEventListener(hp,I),()=>document.removeEventListener(hp,I)},[]),f.jsx(Li.div,{...l,ref:w,style:{pointerEvents:v?x?"auto":"none":void 0,...t.style},onFocusCapture:Un(t.onFocusCapture,S.onFocusCapture),onBlurCapture:Un(t.onBlurCapture,S.onBlurCapture),onPointerDownCapture:Un(t.onPointerDownCapture,E.onPointerDownCapture)})});r1.displayName=_A;var EA="DismissableLayerBranch",TA=b.forwardRef((t,e)=>{const n=b.useContext(n1),r=b.useRef(null),i=Oi(e,r);return b.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),f.jsx(Li.div,{...t,ref:i})});TA.displayName=EA;function SA(t,e=globalThis==null?void 0:globalThis.document){const n=Iu(t),r=b.useRef(!1),i=b.useRef(()=>{});return b.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let l=function(){i1(bA,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",i.current),i.current=l,e.addEventListener("click",i.current,{once:!0})):l()}else e.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",i.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function IA(t,e=globalThis==null?void 0:globalThis.document){const n=Iu(t),r=b.useRef(!1);return b.useEffect(()=>{const i=o=>{o.target&&!r.current&&i1(xA,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",i),()=>e.removeEventListener("focusin",i)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function By(){const t=new CustomEvent(hp);document.dispatchEvent(t)}function i1(t,e,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&i.addEventListener(t,e,{once:!0}),r?vA(i,o):i.dispatchEvent(o)}var ma=globalThis!=null&&globalThis.document?b.useLayoutEffect:()=>{};const AA=["top","right","bottom","left"],Br=Math.min,kt=Math.max,Lc=Math.round,Nl=Math.floor,Ur=t=>({x:t,y:t}),CA={left:"right",right:"left",bottom:"top",top:"bottom"},PA={start:"end",end:"start"};function pp(t,e,n){return kt(t,Br(e,n))}function Xn(t,e){return typeof t=="function"?t(e):t}function Zn(t){return t.split("-")[0]}function ts(t){return t.split("-")[1]}function tm(t){return t==="x"?"y":"x"}function nm(t){return t==="y"?"height":"width"}function $r(t){return["top","bottom"].includes(Zn(t))?"y":"x"}function rm(t){return tm($r(t))}function RA(t,e,n){n===void 0&&(n=!1);const r=ts(t),i=rm(t),o=nm(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=Mc(s)),[s,Mc(s)]}function kA(t){const e=Mc(t);return[fp(t),e,fp(e)]}function fp(t){return t.replace(/start|end/g,e=>PA[e])}function NA(t,e,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?o:s;default:return[]}}function DA(t,e,n,r){const i=ts(t);let o=NA(Zn(t),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),e&&(o=o.concat(o.map(fp)))),o}function Mc(t){return t.replace(/left|right|bottom|top/g,e=>CA[e])}function OA(t){return{top:0,right:0,bottom:0,left:0,...t}}function o1(t){return typeof t!="number"?OA(t):{top:t,right:t,bottom:t,left:t}}function jc(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Uy(t,e,n){let{reference:r,floating:i}=t;const o=$r(e),s=rm(e),a=nm(s),l=Zn(e),c=o==="y",u=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,d=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:u,y:r.y-i.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:h};break;case"left":p={x:r.x-i.width,y:h};break;default:p={x:r.x,y:r.y}}switch(ts(e)){case"start":p[s]-=d*(n&&c?-1:1);break;case"end":p[s]+=d*(n&&c?-1:1);break}return p}const LA=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:h}=Uy(c,r,l),d=r,p={},w=0;for(let y=0;y<a.length;y++){const{name:_,fn:m}=a[y],{x:g,y:v,data:x,reset:E}=await m({x:u,y:h,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});u=g??u,h=v??h,p={...p,[_]:{...p[_],...x}},E&&w<=50&&(w++,typeof E=="object"&&(E.placement&&(d=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:u,y:h}=Uy(c,d,l)),y=-1)}return{x:u,y:h,placement:d,strategy:i,middlewareData:p}};async function ga(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:p=0}=Xn(e,t),w=o1(p),_=a[d?h==="floating"?"reference":"floating":h],m=jc(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(_)))==null||n?_:_.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),g=h==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,v=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(v))?await(o.getScale==null?void 0:o.getScale(v))||{x:1,y:1}:{x:1,y:1},E=jc(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:v,strategy:l}):g);return{top:(m.top-E.top+w.top)/x.y,bottom:(E.bottom-m.bottom+w.bottom)/x.y,left:(m.left-E.left+w.left)/x.x,right:(E.right-m.right+w.right)/x.x}}const MA=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=Xn(t,e)||{};if(c==null)return{};const h=o1(u),d={x:n,y:r},p=rm(i),w=nm(p),y=await s.getDimensions(c),_=p==="y",m=_?"top":"left",g=_?"bottom":"right",v=_?"clientHeight":"clientWidth",x=o.reference[w]+o.reference[p]-d[p]-o.floating[w],E=d[p]-o.reference[p],S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let I=S?S[v]:0;(!I||!await(s.isElement==null?void 0:s.isElement(S)))&&(I=a.floating[v]||o.floating[w]);const R=x/2-E/2,j=I/2-y[w]/2-1,M=Br(h[m],j),Y=Br(h[g],j),z=M,ne=I-y[w]-Y,ie=I/2-y[w]/2+R,Ee=pp(z,ie,ne),Z=!l.arrow&&ts(i)!=null&&ie!==Ee&&o.reference[w]/2-(ie<z?M:Y)-y[w]/2<0,ae=Z?ie<z?ie-z:ie-ne:0;return{[p]:d[p]+ae,data:{[p]:Ee,centerOffset:ie-Ee-ae,...Z&&{alignmentOffset:ae}},reset:Z}}}),jA=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:y=!0,..._}=Xn(t,e);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const m=Zn(i),g=$r(a),v=Zn(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=d||(v||!y?[Mc(a)]:kA(a)),S=w!=="none";!d&&S&&E.push(...DA(a,y,w,x));const I=[a,...E],R=await ga(e,_),j=[];let M=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&j.push(R[m]),h){const ie=RA(i,s,x);j.push(R[ie[0]],R[ie[1]])}if(M=[...M,{placement:i,overflows:j}],!j.every(ie=>ie<=0)){var Y,z;const ie=(((Y=o.flip)==null?void 0:Y.index)||0)+1,Ee=I[ie];if(Ee)return{data:{index:ie,overflows:M},reset:{placement:Ee}};let Z=(z=M.filter(ae=>ae.overflows[0]<=0).sort((ae,T)=>ae.overflows[1]-T.overflows[1])[0])==null?void 0:z.placement;if(!Z)switch(p){case"bestFit":{var ne;const ae=(ne=M.filter(T=>{if(S){const D=$r(T.placement);return D===g||D==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(D=>D>0).reduce((D,U)=>D+U,0)]).sort((T,D)=>T[1]-D[1])[0])==null?void 0:ne[0];ae&&(Z=ae);break}case"initialPlacement":Z=a;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}};function $y(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function zy(t){return AA.some(e=>t[e]>=0)}const VA=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...i}=Xn(t,e);switch(r){case"referenceHidden":{const o=await ga(e,{...i,elementContext:"reference"}),s=$y(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:zy(s)}}}case"escaped":{const o=await ga(e,{...i,altBoundary:!0}),s=$y(o,n.floating);return{data:{escapedOffsets:s,escaped:zy(s)}}}default:return{}}}}};async function FA(t,e){const{placement:n,platform:r,elements:i}=t,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Zn(n),a=ts(n),l=$r(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,h=Xn(e,t);let{mainAxis:d,crossAxis:p,alignmentAxis:w}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof w=="number"&&(p=a==="end"?w*-1:w),l?{x:p*u,y:d*c}:{x:d*c,y:p*u}}const BA=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:o,placement:s,middlewareData:a}=e,l=await FA(e,t);return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},UA=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:_=>{let{x:m,y:g}=_;return{x:m,y:g}}},...l}=Xn(t,e),c={x:n,y:r},u=await ga(e,l),h=$r(Zn(i)),d=tm(h);let p=c[d],w=c[h];if(o){const _=d==="y"?"top":"left",m=d==="y"?"bottom":"right",g=p+u[_],v=p-u[m];p=pp(g,p,v)}if(s){const _=h==="y"?"top":"left",m=h==="y"?"bottom":"right",g=w+u[_],v=w-u[m];w=pp(g,w,v)}const y=a.fn({...e,[d]:p,[h]:w});return{...y,data:{x:y.x-n,y:y.y-r,enabled:{[d]:o,[h]:s}}}}}},$A=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Xn(t,e),u={x:n,y:r},h=$r(i),d=tm(h);let p=u[d],w=u[h];const y=Xn(a,e),_=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const v=d==="y"?"height":"width",x=o.reference[d]-o.floating[v]+_.mainAxis,E=o.reference[d]+o.reference[v]-_.mainAxis;p<x?p=x:p>E&&(p=E)}if(c){var m,g;const v=d==="y"?"width":"height",x=["top","left"].includes(Zn(i)),E=o.reference[h]-o.floating[v]+(x&&((m=s.offset)==null?void 0:m[h])||0)+(x?0:_.crossAxis),S=o.reference[h]+o.reference[v]+(x?0:((g=s.offset)==null?void 0:g[h])||0)-(x?_.crossAxis:0);w<E?w=E:w>S&&(w=S)}return{[d]:p,[h]:w}}}},zA=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,r;const{placement:i,rects:o,platform:s,elements:a}=e,{apply:l=()=>{},...c}=Xn(t,e),u=await ga(e,c),h=Zn(i),d=ts(i),p=$r(i)==="y",{width:w,height:y}=o.floating;let _,m;h==="top"||h==="bottom"?(_=h,m=d===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(m=h,_=d==="end"?"top":"bottom");const g=y-u.top-u.bottom,v=w-u.left-u.right,x=Br(y-u[_],g),E=Br(w-u[m],v),S=!e.middlewareData.shift;let I=x,R=E;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(R=v),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(I=g),S&&!d){const M=kt(u.left,0),Y=kt(u.right,0),z=kt(u.top,0),ne=kt(u.bottom,0);p?R=w-2*(M!==0||Y!==0?M+Y:kt(u.left,u.right)):I=y-2*(z!==0||ne!==0?z+ne:kt(u.top,u.bottom))}await l({...e,availableWidth:R,availableHeight:I});const j=await s.getDimensions(a.floating);return w!==j.width||y!==j.height?{reset:{rects:!0}}:{}}}};function Au(){return typeof window<"u"}function ns(t){return s1(t)?(t.nodeName||"").toLowerCase():"#document"}function Ot(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function On(t){var e;return(e=(s1(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function s1(t){return Au()?t instanceof Node||t instanceof Ot(t).Node:!1}function dn(t){return Au()?t instanceof Element||t instanceof Ot(t).Element:!1}function Rn(t){return Au()?t instanceof HTMLElement||t instanceof Ot(t).HTMLElement:!1}function Hy(t){return!Au()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ot(t).ShadowRoot}function Ga(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=hn(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function HA(t){return["table","td","th"].includes(ns(t))}function Cu(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function im(t){const e=om(),n=dn(t)?hn(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function JA(t){let e=zr(t);for(;Rn(e)&&!Bo(e);){if(im(e))return e;if(Cu(e))return null;e=zr(e)}return null}function om(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bo(t){return["html","body","#document"].includes(ns(t))}function hn(t){return Ot(t).getComputedStyle(t)}function Pu(t){return dn(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function zr(t){if(ns(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Hy(t)&&t.host||On(t);return Hy(e)?e.host:e}function a1(t){const e=zr(t);return Bo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Rn(e)&&Ga(e)?e:a1(e)}function ya(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=a1(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=Ot(i);if(o){const a=mp(s);return e.concat(s,s.visualViewport||[],Ga(i)?i:[],a&&n?ya(a):[])}return e.concat(i,ya(i,[],n))}function mp(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function l1(t){const e=hn(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=Rn(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,a=Lc(n)!==o||Lc(r)!==s;return a&&(n=o,r=s),{width:n,height:r,$:a}}function sm(t){return dn(t)?t:t.contextElement}function yo(t){const e=sm(t);if(!Rn(e))return Ur(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=l1(e);let s=(o?Lc(n.width):n.width)/r,a=(o?Lc(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const qA=Ur(0);function c1(t){const e=Ot(t);return!om()||!e.visualViewport?qA:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function WA(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Ot(t)?!1:e}function Ii(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=sm(t);let s=Ur(1);e&&(r?dn(r)&&(s=yo(r)):s=yo(t));const a=WA(o,n,r)?c1(o):Ur(0);let l=(i.left+a.x)/s.x,c=(i.top+a.y)/s.y,u=i.width/s.x,h=i.height/s.y;if(o){const d=Ot(o),p=r&&dn(r)?Ot(r):r;let w=d,y=mp(w);for(;y&&r&&p!==w;){const _=yo(y),m=y.getBoundingClientRect(),g=hn(y),v=m.left+(y.clientLeft+parseFloat(g.paddingLeft))*_.x,x=m.top+(y.clientTop+parseFloat(g.paddingTop))*_.y;l*=_.x,c*=_.y,u*=_.x,h*=_.y,l+=v,c+=x,w=Ot(y),y=mp(w)}}return jc({width:u,height:h,x:l,y:c})}function KA(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",s=On(r),a=e?Cu(e.floating):!1;if(r===s||a&&o)return n;let l={scrollLeft:0,scrollTop:0},c=Ur(1);const u=Ur(0),h=Rn(r);if((h||!h&&!o)&&((ns(r)!=="body"||Ga(s))&&(l=Pu(r)),Rn(r))){const d=Ii(r);c=yo(r),u.x=d.x+r.clientLeft,u.y=d.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function GA(t){return Array.from(t.getClientRects())}function gp(t,e){const n=Pu(t).scrollLeft;return e?e.left+n:Ii(On(t)).left+n}function QA(t){const e=On(t),n=Pu(t),r=t.ownerDocument.body,i=kt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=kt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+gp(t);const a=-n.scrollTop;return hn(r).direction==="rtl"&&(s+=kt(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:a}}function YA(t,e){const n=Ot(t),r=On(t),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;const c=om();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a,y:l}}function XA(t,e){const n=Ii(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=Rn(t)?yo(t):Ur(1),s=t.clientWidth*o.x,a=t.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:s,height:a,x:l,y:c}}function Jy(t,e,n){let r;if(e==="viewport")r=YA(t,n);else if(e==="document")r=QA(On(t));else if(dn(e))r=XA(e,n);else{const i=c1(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return jc(r)}function u1(t,e){const n=zr(t);return n===e||!dn(n)||Bo(n)?!1:hn(n).position==="fixed"||u1(n,e)}function ZA(t,e){const n=e.get(t);if(n)return n;let r=ya(t,[],!1).filter(a=>dn(a)&&ns(a)!=="body"),i=null;const o=hn(t).position==="fixed";let s=o?zr(t):t;for(;dn(s)&&!Bo(s);){const a=hn(s),l=im(s);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ga(s)&&!l&&u1(t,s))?r=r.filter(u=>u!==s):i=a,s=zr(s)}return e.set(t,r),r}function e2(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const s=[...n==="clippingAncestors"?Cu(e)?[]:ZA(e,this._c):[].concat(n),r],a=s[0],l=s.reduce((c,u)=>{const h=Jy(e,u,i);return c.top=kt(h.top,c.top),c.right=Br(h.right,c.right),c.bottom=Br(h.bottom,c.bottom),c.left=kt(h.left,c.left),c},Jy(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function t2(t){const{width:e,height:n}=l1(t);return{width:e,height:n}}function n2(t,e,n){const r=Rn(e),i=On(e),o=n==="fixed",s=Ii(t,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Ur(0);if(r||!r&&!o)if((ns(e)!=="body"||Ga(i))&&(a=Pu(e)),r){const p=Ii(e,!0,o,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else i&&(l.x=gp(i));let c=0,u=0;if(i&&!r&&!o){const p=i.getBoundingClientRect();u=p.top+a.scrollTop,c=p.left+a.scrollLeft-gp(i,p)}const h=s.left+a.scrollLeft-l.x-c,d=s.top+a.scrollTop-l.y-u;return{x:h,y:d,width:s.width,height:s.height}}function qd(t){return hn(t).position==="static"}function qy(t,e){if(!Rn(t)||hn(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return On(t)===n&&(n=n.ownerDocument.body),n}function d1(t,e){const n=Ot(t);if(Cu(t))return n;if(!Rn(t)){let i=zr(t);for(;i&&!Bo(i);){if(dn(i)&&!qd(i))return i;i=zr(i)}return n}let r=qy(t,e);for(;r&&HA(r)&&qd(r);)r=qy(r,e);return r&&Bo(r)&&qd(r)&&!im(r)?n:r||JA(t)||n}const r2=async function(t){const e=this.getOffsetParent||d1,n=this.getDimensions,r=await n(t.floating);return{reference:n2(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function i2(t){return hn(t).direction==="rtl"}const o2={convertOffsetParentRelativeRectToViewportRelativeRect:KA,getDocumentElement:On,getClippingRect:e2,getOffsetParent:d1,getElementRects:r2,getClientRects:GA,getDimensions:t2,getScale:yo,isElement:dn,isRTL:i2};function s2(t,e){let n=null,r;const i=On(t);function o(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const{left:c,top:u,width:h,height:d}=t.getBoundingClientRect();if(a||e(),!h||!d)return;const p=Nl(u),w=Nl(i.clientWidth-(c+h)),y=Nl(i.clientHeight-(u+d)),_=Nl(c),g={rootMargin:-p+"px "+-w+"px "+-y+"px "+-_+"px",threshold:kt(0,Br(1,l))||1};let v=!0;function x(E){const S=E[0].intersectionRatio;if(S!==l){if(!v)return s();S?s(!1,S):r=setTimeout(()=>{s(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(x,{...g,root:i.ownerDocument})}catch{n=new IntersectionObserver(x,g)}n.observe(t)}return s(!0),o}function a2(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=sm(t),u=i||o?[...c?ya(c):[],...ya(e)]:[];u.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const h=c&&a?s2(c,n):null;let d=-1,p=null;s&&(p=new ResizeObserver(m=>{let[g]=m;g&&g.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var v;(v=p)==null||v.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let w,y=l?Ii(t):null;l&&_();function _(){const m=Ii(t);y&&(m.x!==y.x||m.y!==y.y||m.width!==y.width||m.height!==y.height)&&n(),y=m,w=requestAnimationFrame(_)}return n(),()=>{var m;u.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),h==null||h(),(m=p)==null||m.disconnect(),p=null,l&&cancelAnimationFrame(w)}}const l2=BA,c2=UA,u2=jA,d2=zA,h2=VA,Wy=MA,p2=$A,f2=(t,e,n)=>{const r=new Map,i={platform:o2,...n},o={...i.platform,_c:r};return LA(t,e,{...i,platform:o})};var ic=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Vc(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!Vc(t[r],e[r]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&t.$$typeof)&&!Vc(t[o],e[o]))return!1}return!0}return t!==t&&e!==e}function h1(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Ky(t,e){const n=h1(t);return Math.round(e*n)/n}function Wd(t){const e=b.useRef(t);return ic(()=>{e.current=t}),e}function m2(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,h]=b.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[d,p]=b.useState(r);Vc(d,r)||p(r);const[w,y]=b.useState(null),[_,m]=b.useState(null),g=b.useCallback(T=>{T!==S.current&&(S.current=T,y(T))},[]),v=b.useCallback(T=>{T!==I.current&&(I.current=T,m(T))},[]),x=o||w,E=s||_,S=b.useRef(null),I=b.useRef(null),R=b.useRef(u),j=l!=null,M=Wd(l),Y=Wd(i),z=Wd(c),ne=b.useCallback(()=>{if(!S.current||!I.current)return;const T={placement:e,strategy:n,middleware:d};Y.current&&(T.platform=Y.current),f2(S.current,I.current,T).then(D=>{const U={...D,isPositioned:z.current!==!1};ie.current&&!Vc(R.current,U)&&(R.current=U,Su.flushSync(()=>{h(U)}))})},[d,e,n,Y,z]);ic(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,h(T=>({...T,isPositioned:!1})))},[c]);const ie=b.useRef(!1);ic(()=>(ie.current=!0,()=>{ie.current=!1}),[]),ic(()=>{if(x&&(S.current=x),E&&(I.current=E),x&&E){if(M.current)return M.current(x,E,ne);ne()}},[x,E,ne,M,j]);const Ee=b.useMemo(()=>({reference:S,floating:I,setReference:g,setFloating:v}),[g,v]),Z=b.useMemo(()=>({reference:x,floating:E}),[x,E]),ae=b.useMemo(()=>{const T={position:n,left:0,top:0};if(!Z.floating)return T;const D=Ky(Z.floating,u.x),U=Ky(Z.floating,u.y);return a?{...T,transform:"translate("+D+"px, "+U+"px)",...h1(Z.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:D,top:U}},[n,a,Z.floating,u.x,u.y]);return b.useMemo(()=>({...u,update:ne,refs:Ee,elements:Z,floatingStyles:ae}),[u,ne,Ee,Z,ae])}const g2=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:i}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?Wy({element:r.current,padding:i}).fn(n):{}:r?Wy({element:r,padding:i}).fn(n):{}}}},y2=(t,e)=>({...l2(t),options:[t,e]}),v2=(t,e)=>({...c2(t),options:[t,e]}),w2=(t,e)=>({...p2(t),options:[t,e]}),_2=(t,e)=>({...u2(t),options:[t,e]}),b2=(t,e)=>({...d2(t),options:[t,e]}),x2=(t,e)=>({...h2(t),options:[t,e]}),E2=(t,e)=>({...g2(t),options:[t,e]});var T2="Arrow",p1=b.forwardRef((t,e)=>{const{children:n,width:r=10,height:i=5,...o}=t;return f.jsx(Li.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:f.jsx("polygon",{points:"0,0 30,0 15,10"})})});p1.displayName=T2;var S2=p1;function I2(t,e=[]){let n=[];function r(o,s){const a=b.createContext(s),l=n.length;n=[...n,s];function c(h){const{scope:d,children:p,...w}=h,y=(d==null?void 0:d[t][l])||a,_=b.useMemo(()=>w,Object.values(w));return f.jsx(y.Provider,{value:_,children:p})}function u(h,d){const p=(d==null?void 0:d[t][l])||a,w=b.useContext(p);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const i=()=>{const o=n.map(s=>b.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return b.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return i.scopeName=t,[r,A2(i,...e)]}function A2(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:c})=>{const h=l(o)[`__scope${c}`];return{...a,...h}},{});return b.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}function C2(t){const[e,n]=b.useState(void 0);return ma(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,c=Array.isArray(l)?l[0]:l;s=c.inlineSize,a=c.blockSize}else s=t.offsetWidth,a=t.offsetHeight;n({width:s,height:a})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else n(void 0)},[t]),e}var f1="Popper",[m1,g1]=I2(f1),[Yj,y1]=m1(f1),v1="PopperAnchor",w1=b.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:r,...i}=t,o=y1(v1,n),s=b.useRef(null),a=Oi(e,s);return b.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:f.jsx(Li.div,{...i,ref:a})});w1.displayName=v1;var am="PopperContent",[P2,R2]=m1(am),_1=b.forwardRef((t,e)=>{var Qt,rr,ir,or,cl,Ui;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:h="partial",hideWhenDetached:d=!1,updatePositionStrategy:p="optimized",onPlaced:w,...y}=t,_=y1(am,n),[m,g]=b.useState(null),v=Oi(e,ei=>g(ei)),[x,E]=b.useState(null),S=C2(x),I=(S==null?void 0:S.width)??0,R=(S==null?void 0:S.height)??0,j=r+(o!=="center"?"-"+o:""),M=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},Y=Array.isArray(c)?c:[c],z=Y.length>0,ne={padding:M,boundary:Y.filter(N2),altBoundary:z},{refs:ie,floatingStyles:Ee,placement:Z,isPositioned:ae,middlewareData:T}=m2({strategy:"fixed",placement:j,whileElementsMounted:(...ei)=>a2(...ei,{animationFrame:p==="always"}),elements:{reference:_.anchor},middleware:[y2({mainAxis:i+R,alignmentAxis:s}),l&&v2({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?w2():void 0,...ne}),l&&_2({...ne}),b2({...ne,apply:({elements:ei,rects:ps,availableWidth:ul,availableHeight:sr})=>{const{width:md,height:gd}=ps.reference,We=ei.floating.style;We.setProperty("--radix-popper-available-width",`${ul}px`),We.setProperty("--radix-popper-available-height",`${sr}px`),We.setProperty("--radix-popper-anchor-width",`${md}px`),We.setProperty("--radix-popper-anchor-height",`${gd}px`)}}),x&&E2({element:x,padding:a}),D2({arrowWidth:I,arrowHeight:R}),d&&x2({strategy:"referenceHidden",...ne})]}),[D,U]=E1(Z),B=Iu(w);ma(()=>{ae&&(B==null||B())},[ae,B]);const H=(Qt=T.arrow)==null?void 0:Qt.x,ce=(rr=T.arrow)==null?void 0:rr.y,Oe=((ir=T.arrow)==null?void 0:ir.centerOffset)!==0,[At,de]=b.useState();return ma(()=>{m&&de(window.getComputedStyle(m).zIndex)},[m]),f.jsx("div",{ref:ie.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ee,transform:ae?Ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:At,"--radix-popper-transform-origin":[(or=T.transformOrigin)==null?void 0:or.x,(cl=T.transformOrigin)==null?void 0:cl.y].join(" "),...((Ui=T.hide)==null?void 0:Ui.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:f.jsx(P2,{scope:n,placedSide:D,onArrowChange:E,arrowX:H,arrowY:ce,shouldHideArrow:Oe,children:f.jsx(Li.div,{"data-side":D,"data-align":U,...y,ref:v,style:{...y.style,animation:ae?void 0:"none"}})})})});_1.displayName=am;var b1="PopperArrow",k2={top:"bottom",right:"left",bottom:"top",left:"right"},x1=b.forwardRef(function(e,n){const{__scopePopper:r,...i}=e,o=R2(b1,r),s=k2[o.placedSide];return f.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:f.jsx(S2,{...i,ref:n,style:{...i.style,display:"block"}})})});x1.displayName=b1;function N2(t){return t!==null}var D2=t=>({name:"transformOrigin",options:t,fn(e){var _,m,g;const{placement:n,rects:r,middlewareData:i}=e,s=((_=i.arrow)==null?void 0:_.centerOffset)!==0,a=s?0:t.arrowWidth,l=s?0:t.arrowHeight,[c,u]=E1(n),h={start:"0%",center:"50%",end:"100%"}[u],d=(((m=i.arrow)==null?void 0:m.x)??0)+a/2,p=(((g=i.arrow)==null?void 0:g.y)??0)+l/2;let w="",y="";return c==="bottom"?(w=s?h:`${d}px`,y=`${-l}px`):c==="top"?(w=s?h:`${d}px`,y=`${r.floating.height+l}px`):c==="right"?(w=`${-l}px`,y=s?h:`${p}px`):c==="left"&&(w=`${r.floating.width+l}px`,y=s?h:`${p}px`),{data:{x:w,y}}}});function E1(t){const[e,n="center"]=t.split("-");return[e,n]}var O2=w1,L2=_1,M2=x1;function j2(t,e){return b.useReducer((n,r)=>e[n][r]??n,t)}var T1=t=>{const{present:e,children:n}=t,r=V2(e),i=typeof n=="function"?n({present:r.isPresent}):b.Children.only(n),o=Oi(r.ref,F2(i));return typeof n=="function"||r.isPresent?b.cloneElement(i,{ref:o}):null};T1.displayName="Presence";function V2(t){const[e,n]=b.useState(),r=b.useRef({}),i=b.useRef(t),o=b.useRef("none"),s=t?"mounted":"unmounted",[a,l]=j2(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return b.useEffect(()=>{const c=Dl(r.current);o.current=a==="mounted"?c:"none"},[a]),ma(()=>{const c=r.current,u=i.current;if(u!==t){const d=o.current,p=Dl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&d!==p?"ANIMATION_OUT":"UNMOUNT"),i.current=t}},[t,l]),ma(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,h=p=>{const y=Dl(r.current).includes(p.animationName);if(p.target===e&&y&&(l("ANIMATION_END"),!i.current)){const _=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=_)})}},d=p=>{p.target===e&&(o.current=Dl(r.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:b.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function Dl(t){return(t==null?void 0:t.animationName)||"none"}function F2(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var B2="VisuallyHidden",S1=b.forwardRef((t,e)=>f.jsx(Li.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));S1.displayName=B2;var U2=S1,[Ru,Xj]=hA("Tooltip",[g1]),lm=g1(),I1="TooltipProvider",$2=700,Gy="tooltip.open",[z2,A1]=Ru(I1),C1=t=>{const{__scopeTooltip:e,delayDuration:n=$2,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=t,[s,a]=b.useState(!0),l=b.useRef(!1),c=b.useRef(0);return b.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),f.jsx(z2,{scope:e,isOpenDelayed:s,delayDuration:n,onOpen:b.useCallback(()=>{window.clearTimeout(c.current),a(!1)},[]),onClose:b.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a(!0),r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:b.useCallback(u=>{l.current=u},[]),disableHoverableContent:i,children:o})};C1.displayName=I1;var P1="Tooltip",[Zj,ku]=Ru(P1),yp="TooltipTrigger",H2=b.forwardRef((t,e)=>{const{__scopeTooltip:n,...r}=t,i=ku(yp,n),o=A1(yp,n),s=lm(n),a=b.useRef(null),l=Oi(e,a,i.onTriggerChange),c=b.useRef(!1),u=b.useRef(!1),h=b.useCallback(()=>c.current=!1,[]);return b.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),f.jsx(O2,{asChild:!0,...s,children:f.jsx(Li.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:Un(t.onPointerMove,d=>{d.pointerType!=="touch"&&!u.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:Un(t.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:Un(t.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:Un(t.onFocus,()=>{c.current||i.onOpen()}),onBlur:Un(t.onBlur,i.onClose),onClick:Un(t.onClick,i.onClose)})})});H2.displayName=yp;var J2="TooltipPortal",[e4,q2]=Ru(J2,{forceMount:void 0}),Uo="TooltipContent",R1=b.forwardRef((t,e)=>{const n=q2(Uo,t.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=t,s=ku(Uo,t.__scopeTooltip);return f.jsx(T1,{present:r||s.open,children:s.disableHoverableContent?f.jsx(k1,{side:i,...o,ref:e}):f.jsx(W2,{side:i,...o,ref:e})})}),W2=b.forwardRef((t,e)=>{const n=ku(Uo,t.__scopeTooltip),r=A1(Uo,t.__scopeTooltip),i=b.useRef(null),o=Oi(e,i),[s,a]=b.useState(null),{trigger:l,onClose:c}=n,u=i.current,{onPointerInTransitChange:h}=r,d=b.useCallback(()=>{a(null),h(!1)},[h]),p=b.useCallback((w,y)=>{const _=w.currentTarget,m={x:w.clientX,y:w.clientY},g=Y2(m,_.getBoundingClientRect()),v=X2(m,g),x=Z2(y.getBoundingClientRect()),E=tC([...v,...x]);a(E),h(!0)},[h]);return b.useEffect(()=>()=>d(),[d]),b.useEffect(()=>{if(l&&u){const w=_=>p(_,u),y=_=>p(_,l);return l.addEventListener("pointerleave",w),u.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",w),u.removeEventListener("pointerleave",y)}}},[l,u,p,d]),b.useEffect(()=>{if(s){const w=y=>{const _=y.target,m={x:y.clientX,y:y.clientY},g=(l==null?void 0:l.contains(_))||(u==null?void 0:u.contains(_)),v=!eC(m,s);g?d():v&&(d(),c())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[l,u,s,c,d]),f.jsx(k1,{...t,ref:o})}),[K2,G2]=Ru(P1,{isInside:!1}),k1=b.forwardRef((t,e)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...a}=t,l=ku(Uo,n),c=lm(n),{onClose:u}=l;return b.useEffect(()=>(document.addEventListener(Gy,u),()=>document.removeEventListener(Gy,u)),[u]),b.useEffect(()=>{if(l.trigger){const h=d=>{const p=d.target;p!=null&&p.contains(l.trigger)&&u()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,u]),f.jsx(r1,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:u,children:f.jsxs(L2,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[f.jsx(t1,{children:r}),f.jsx(K2,{scope:n,isInside:!0,children:f.jsx(U2,{id:l.contentId,role:"tooltip",children:i||r})})]})})});R1.displayName=Uo;var N1="TooltipArrow",Q2=b.forwardRef((t,e)=>{const{__scopeTooltip:n,...r}=t,i=lm(n);return G2(N1,n).isInside?null:f.jsx(M2,{...i,...r,ref:e})});Q2.displayName=N1;function Y2(t,e){const n=Math.abs(e.top-t.y),r=Math.abs(e.bottom-t.y),i=Math.abs(e.right-t.x),o=Math.abs(e.left-t.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function X2(t,e,n=5){const r=[];switch(e){case"top":r.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":r.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":r.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":r.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return r}function Z2(t){const{top:e,right:n,bottom:r,left:i}=t;return[{x:i,y:e},{x:n,y:e},{x:n,y:r},{x:i,y:r}]}function eC(t,e){const{x:n,y:r}=t;let i=!1;for(let o=0,s=e.length-1;o<e.length;s=o++){const a=e[o].x,l=e[o].y,c=e[s].x,u=e[s].y;l>r!=u>r&&n<(c-a)*(r-l)/(u-l)+a&&(i=!i)}return i}function tC(t){const e=t.slice();return e.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),nC(e)}function nC(t){if(t.length<=1)return t.slice();const e=[];for(let r=0;r<t.length;r++){const i=t[r];for(;e.length>=2;){const o=e[e.length-1],s=e[e.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))e.pop();else break}e.push(i)}e.pop();const n=[];for(let r=t.length-1;r>=0;r--){const i=t[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var rC=C1,D1=R1;function O1(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=O1(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function L1(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=O1(t))&&(r&&(r+=" "),r+=e);return r}const cm="-",iC=t=>{const e=sC(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:s=>{const a=s.split(cm);return a[0]===""&&a.length!==1&&a.shift(),M1(a,e)||oC(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}}},M1=(t,e)=>{var s;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?M1(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const o=t.join(cm);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},Qy=/^\[(.+)\]$/,oC=t=>{if(Qy.test(t)){const e=Qy.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},sC=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return lC(Object.entries(t.classGroups),n).forEach(([o,s])=>{vp(s,r,o,e)}),r},vp=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const o=i===""?e:Yy(e,i);o.classGroupId=n;return}if(typeof i=="function"){if(aC(i)){vp(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{vp(s,Yy(e,o),n,r)})})},Yy=(t,e)=>{let n=t;return e.split(cm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},aC=t=>t.isThemeGetter,lC=(t,e)=>e?t.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,i]}):t,cC=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),e++,e>t&&(e=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},j1="!",uC=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],o=e.length,s=a=>{const l=[];let c=0,u=0,h;for(let _=0;_<a.length;_++){let m=a[_];if(c===0){if(m===i&&(r||a.slice(_,_+o)===e)){l.push(a.slice(u,_)),u=_+o;continue}if(m==="/"){h=_;continue}}m==="["?c++:m==="]"&&c--}const d=l.length===0?a:a.substring(u),p=d.startsWith(j1),w=p?d.substring(1):d,y=h&&h>u?h-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:w,maybePostfixModifierPosition:y}};return n?a=>n({className:a,parseClassName:s}):s},dC=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},hC=t=>({cache:cC(t.cacheSize),parseClassName:uC(t),...iC(t)}),pC=/\s+/,fC=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,o=[],s=t.trim().split(pC);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:u,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:p}=n(c);let w=!!p,y=r(w?d.substring(0,p):d);if(!y){if(!w){a=c+(a.length>0?" "+a:a);continue}if(y=r(d),!y){a=c+(a.length>0?" "+a:a);continue}w=!1}const _=dC(u).join(":"),m=h?_+j1:_,g=m+y;if(o.includes(g))continue;o.push(g);const v=i(y,w);for(let x=0;x<v.length;++x){const E=v[x];o.push(m+E)}a=c+(a.length>0?" "+a:a)}return a};function mC(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=V1(e))&&(r&&(r+=" "),r+=n);return r}const V1=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=V1(t[r]))&&(n&&(n+=" "),n+=e);return n};function gC(t,...e){let n,r,i,o=s;function s(l){const c=e.reduce((u,h)=>h(u),t());return n=hC(c),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=fC(l,n);return i(l,u),u}return function(){return o(mC.apply(null,arguments))}}const ve=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},F1=/^\[(?:([a-z-]+):)?(.+)\]$/i,yC=/^\d+\/\d+$/,vC=new Set(["px","full","screen"]),wC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,bC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,xC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,EC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jn=t=>vo(t)||vC.has(t)||yC.test(t),cr=t=>rs(t,"length",kC),vo=t=>!!t&&!Number.isNaN(Number(t)),Kd=t=>rs(t,"number",vo),xs=t=>!!t&&Number.isInteger(Number(t)),TC=t=>t.endsWith("%")&&vo(t.slice(0,-1)),Q=t=>F1.test(t),ur=t=>wC.test(t),SC=new Set(["length","size","percentage"]),IC=t=>rs(t,SC,B1),AC=t=>rs(t,"position",B1),CC=new Set(["image","url"]),PC=t=>rs(t,CC,DC),RC=t=>rs(t,"",NC),Es=()=>!0,rs=(t,e,n)=>{const r=F1.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},kC=t=>_C.test(t)&&!bC.test(t),B1=()=>!1,NC=t=>xC.test(t),DC=t=>EC.test(t),OC=()=>{const t=ve("colors"),e=ve("spacing"),n=ve("blur"),r=ve("brightness"),i=ve("borderColor"),o=ve("borderRadius"),s=ve("borderSpacing"),a=ve("borderWidth"),l=ve("contrast"),c=ve("grayscale"),u=ve("hueRotate"),h=ve("invert"),d=ve("gap"),p=ve("gradientColorStops"),w=ve("gradientColorStopPositions"),y=ve("inset"),_=ve("margin"),m=ve("opacity"),g=ve("padding"),v=ve("saturate"),x=ve("scale"),E=ve("sepia"),S=ve("skew"),I=ve("space"),R=ve("translate"),j=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],Y=()=>["auto",Q,e],z=()=>[Q,e],ne=()=>["",jn,cr],ie=()=>["auto",vo,Q],Ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],ae=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",Q],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>[vo,Q];return{cacheSize:500,separator:":",theme:{colors:[Es],spacing:[jn,cr],blur:["none","",ur,Q],brightness:B(),borderColor:[t],borderRadius:["none","","full",ur,Q],borderSpacing:z(),borderWidth:ne(),contrast:B(),grayscale:D(),hueRotate:B(),invert:D(),gap:z(),gradientColorStops:[t],gradientColorStopPositions:[TC,cr],inset:Y(),margin:Y(),opacity:B(),padding:z(),saturate:B(),scale:B(),sepia:D(),skew:B(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",Q]}],container:["container"],columns:[{columns:[ur]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ee(),Q]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xs,Q]}],basis:[{basis:Y()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Q]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",xs,Q]}],"grid-cols":[{"grid-cols":[Es]}],"col-start-end":[{col:["auto",{span:["full",xs,Q]},Q]}],"col-start":[{"col-start":ie()}],"col-end":[{"col-end":ie()}],"grid-rows":[{"grid-rows":[Es]}],"row-start-end":[{row:["auto",{span:[xs,Q]},Q]}],"row-start":[{"row-start":ie()}],"row-end":[{"row-end":ie()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Q]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Q]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Q,e]}],"min-w":[{"min-w":[Q,e,"min","max","fit"]}],"max-w":[{"max-w":[Q,e,"none","full","min","max","fit","prose",{screen:[ur]},ur]}],h:[{h:[Q,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Q,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Q,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Q,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ur,cr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Kd]}],"font-family":[{font:[Es]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Q]}],"line-clamp":[{"line-clamp":["none",vo,Kd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",jn,Q]}],"list-image":[{"list-image":["none",Q]}],"list-style-type":[{list:["none","disc","decimal",Q]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",jn,cr]}],"underline-offset":[{"underline-offset":["auto",jn,Q]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ee(),AC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",IC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},PC]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:Z()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[jn,Q]}],"outline-w":[{outline:[jn,cr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:ne()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[jn,cr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",ur,RC]}],"shadow-color":[{shadow:[Es]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...ae(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ae()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ur,Q]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[v]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Q]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",Q]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",Q]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[xs,Q]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Q]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[jn,cr,Kd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},LC=gC(OC);function Nu(...t){return LC(L1(t))}const MC=rC,jC=b.forwardRef(({className:t,sideOffset:e=4,...n},r)=>f.jsx(D1,{ref:r,sideOffset:e,className:Nu("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));jC.displayName=D1.displayName;var Du=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ou=typeof window>"u"||"Deno"in globalThis;function en(){}function VC(t,e){return typeof t=="function"?t(e):t}function FC(t){return typeof t=="number"&&t>=0&&t!==1/0}function BC(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Xy(t,e){return typeof t=="function"?t(e):t}function UC(t,e){return typeof t=="function"?t(e):t}function Zy(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=t;if(s){if(r){if(e.queryHash!==um(s,e.options))return!1}else if(!wa(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||i&&i!==e.state.fetchStatus||o&&!o(e))}function ev(t,e){const{exact:n,status:r,predicate:i,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(n){if(va(e.options.mutationKey)!==va(o))return!1}else if(!wa(e.options.mutationKey,o))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function um(t,e){return((e==null?void 0:e.queryKeyHashFn)||va)(t)}function va(t){return JSON.stringify(t,(e,n)=>wp(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function wa(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!wa(t[n],e[n])):!1}function U1(t,e){if(t===e)return t;const n=tv(t)&&tv(e);if(n||wp(t)&&wp(e)){const r=n?t:Object.keys(t),i=r.length,o=n?e:Object.keys(e),s=o.length,a=n?[]:{};let l=0;for(let c=0;c<s;c++){const u=n?c:o[c];(!n&&r.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=U1(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return i===s&&l===i?t:a}return e}function tv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function wp(t){if(!nv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!nv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function nv(t){return Object.prototype.toString.call(t)==="[object Object]"}function $C(t){return new Promise(e=>{setTimeout(e,t)})}function zC(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?U1(t,e):e}function HC(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function JC(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var dm=Symbol();function $1(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===dm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var hi,gr,To,D0,qC=(D0=class extends Du{constructor(){super();ue(this,hi);ue(this,gr);ue(this,To);X(this,To,e=>{if(!Ou&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){A(this,gr)||this.setEventListener(A(this,To))}onUnsubscribe(){var e;this.hasListeners()||((e=A(this,gr))==null||e.call(this),X(this,gr,void 0))}setEventListener(e){var n;X(this,To,e),(n=A(this,gr))==null||n.call(this),X(this,gr,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){A(this,hi)!==e&&(X(this,hi,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof A(this,hi)=="boolean"?A(this,hi):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},hi=new WeakMap,gr=new WeakMap,To=new WeakMap,D0),z1=new qC,So,yr,Io,O0,WC=(O0=class extends Du{constructor(){super();ue(this,So,!0);ue(this,yr);ue(this,Io);X(this,Io,e=>{if(!Ou&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){A(this,yr)||this.setEventListener(A(this,Io))}onUnsubscribe(){var e;this.hasListeners()||((e=A(this,yr))==null||e.call(this),X(this,yr,void 0))}setEventListener(e){var n;X(this,Io,e),(n=A(this,yr))==null||n.call(this),X(this,yr,e(this.setOnline.bind(this)))}setOnline(e){A(this,So)!==e&&(X(this,So,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return A(this,So)}},So=new WeakMap,yr=new WeakMap,Io=new WeakMap,O0),Fc=new WC;function KC(){let t,e;const n=new Promise((i,o)=>{t=i,e=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),t(i)},n.reject=i=>{r({status:"rejected",reason:i}),e(i)},n}function GC(t){return Math.min(1e3*2**t,3e4)}function H1(t){return(t??"online")==="online"?Fc.isOnline():!0}var J1=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Gd(t){return t instanceof J1}function q1(t){let e=!1,n=0,r=!1,i;const o=KC(),s=y=>{var _;r||(d(new J1(y)),(_=t.abort)==null||_.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>z1.isFocused()&&(t.networkMode==="always"||Fc.isOnline())&&t.canRun(),u=()=>H1(t.networkMode)&&t.canRun(),h=y=>{var _;r||(r=!0,(_=t.onSuccess)==null||_.call(t,y),i==null||i(),o.resolve(y))},d=y=>{var _;r||(r=!0,(_=t.onError)==null||_.call(t,y),i==null||i(),o.reject(y))},p=()=>new Promise(y=>{var _;i=m=>{(r||c())&&y(m)},(_=t.onPause)==null||_.call(t)}).then(()=>{var y;i=void 0,r||(y=t.onContinue)==null||y.call(t)}),w=()=>{if(r)return;let y;const _=n===0?t.initialPromise:void 0;try{y=_??t.fn()}catch(m){y=Promise.reject(m)}Promise.resolve(y).then(h).catch(m=>{var S;if(r)return;const g=t.retry??(Ou?0:3),v=t.retryDelay??GC,x=typeof v=="function"?v(n,m):v,E=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,m);if(e||!E){d(m);return}n++,(S=t.onFail)==null||S.call(t,n,m),$C(x).then(()=>c()?void 0:p()).then(()=>{e?d(m):w()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?w():p().then(w),o)}}function QC(){let t=[],e=0,n=a=>{a()},r=a=>{a()},i=a=>setTimeout(a,0);const o=a=>{e?t.push(a):i(()=>{n(a)})},s=()=>{const a=t;t=[],a.length&&i(()=>{r(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{i=a}}}var yt=QC(),pi,L0,W1=(L0=class{constructor(){ue(this,pi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),FC(this.gcTime)&&X(this,pi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ou?1/0:5*60*1e3))}clearGcTimeout(){A(this,pi)&&(clearTimeout(A(this,pi)),X(this,pi,void 0))}},pi=new WeakMap,L0),Ao,Co,Bt,at,Ua,fi,tn,Vn,M0,YC=(M0=class extends W1{constructor(n){super();ue(this,tn);ue(this,Ao);ue(this,Co);ue(this,Bt);ue(this,at);ue(this,Ua);ue(this,fi);X(this,fi,!1),X(this,Ua,n.defaultOptions),this.setOptions(n.options),this.observers=[],X(this,Bt,n.cache),this.queryKey=n.queryKey,this.queryHash=n.queryHash,X(this,Ao,ZC(this.options)),this.state=n.state??A(this,Ao),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var n;return(n=A(this,at))==null?void 0:n.promise}setOptions(n){this.options={...A(this,Ua),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&A(this,Bt).remove(this)}setData(n,r){const i=zC(this.state.data,n,this.options);return rt(this,tn,Vn).call(this,{data:i,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),i}setState(n,r){rt(this,tn,Vn).call(this,{type:"setState",state:n,setStateOptions:r})}cancel(n){var i,o;const r=(i=A(this,at))==null?void 0:i.promise;return(o=A(this,at))==null||o.cancel(n),r?r.then(en).catch(en):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(A(this,Ao))}isActive(){return this.observers.some(n=>UC(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===dm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!BC(this.state.dataUpdatedAt,n)}onFocus(){var r;const n=this.observers.find(i=>i.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(r=A(this,at))==null||r.continue()}onOnline(){var r;const n=this.observers.find(i=>i.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(r=A(this,at))==null||r.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),A(this,Bt).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(r=>r!==n),this.observers.length||(A(this,at)&&(A(this,fi)?A(this,at).cancel({revert:!0}):A(this,at).cancelRetry()),this.scheduleGc()),A(this,Bt).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||rt(this,tn,Vn).call(this,{type:"invalidate"})}fetch(n,r){var c,u,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(A(this,at))return A(this,at).continueRetry(),A(this,at).promise}if(n&&this.setOptions(n),!this.options.queryFn){const d=this.observers.find(p=>p.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,o=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(X(this,fi,!0),i.signal)})},s=()=>{const d=$1(this.options,r),p={queryKey:this.queryKey,meta:this.meta};return o(p),X(this,fi,!1),this.options.persister?this.options.persister(d,p,this):d(p)},a={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};o(a),(c=this.options.behavior)==null||c.onFetch(a,this),X(this,Co,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&rt(this,tn,Vn).call(this,{type:"fetch",meta:(h=a.fetchOptions)==null?void 0:h.meta});const l=d=>{var p,w,y,_;Gd(d)&&d.silent||rt(this,tn,Vn).call(this,{type:"error",error:d}),Gd(d)||((w=(p=A(this,Bt).config).onError)==null||w.call(p,d,this),(_=(y=A(this,Bt).config).onSettled)==null||_.call(y,this.state.data,d,this)),this.scheduleGc()};return X(this,at,q1({initialPromise:r==null?void 0:r.initialPromise,fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var p,w,y,_;if(d===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){l(m);return}(w=(p=A(this,Bt).config).onSuccess)==null||w.call(p,d,this),(_=(y=A(this,Bt).config).onSettled)==null||_.call(y,d,this.state.error,this),this.scheduleGc()},onError:l,onFail:(d,p)=>{rt(this,tn,Vn).call(this,{type:"failed",failureCount:d,error:p})},onPause:()=>{rt(this,tn,Vn).call(this,{type:"pause"})},onContinue:()=>{rt(this,tn,Vn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),A(this,at).start()}},Ao=new WeakMap,Co=new WeakMap,Bt=new WeakMap,at=new WeakMap,Ua=new WeakMap,fi=new WeakMap,tn=new WeakSet,Vn=function(n){const r=i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...XC(i.data,this.options),fetchMeta:n.meta??null};case"success":return{...i,data:n.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=n.error;return Gd(o)&&o.revert&&A(this,Co)?{...A(this,Co),fetchStatus:"idle"}:{...i,error:o,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}};this.state=r(this.state),yt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),A(this,Bt).notify({query:this,type:"updated",action:n})})},M0);function XC(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:H1(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function ZC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var wn,j0,eP=(j0=class extends Du{constructor(e={}){super();ue(this,wn);this.config=e,X(this,wn,new Map)}build(e,n,r){const i=n.queryKey,o=n.queryHash??um(i,n);let s=this.get(o);return s||(s=new YC({cache:this,queryKey:i,queryHash:o,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(s)),s}add(e){A(this,wn).has(e.queryHash)||(A(this,wn).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=A(this,wn).get(e.queryHash);n&&(e.destroy(),n===e&&A(this,wn).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){yt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return A(this,wn).get(e)}getAll(){return[...A(this,wn).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Zy(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>Zy(e,r)):n}notify(e){yt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){yt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){yt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},wn=new WeakMap,j0),_n,mt,mi,bn,dr,V0,tP=(V0=class extends W1{constructor(n){super();ue(this,bn);ue(this,_n);ue(this,mt);ue(this,mi);this.mutationId=n.mutationId,X(this,mt,n.mutationCache),X(this,_n,[]),this.state=n.state||nP(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){A(this,_n).includes(n)||(A(this,_n).push(n),this.clearGcTimeout(),A(this,mt).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){X(this,_n,A(this,_n).filter(r=>r!==n)),this.scheduleGc(),A(this,mt).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){A(this,_n).length||(this.state.status==="pending"?this.scheduleGc():A(this,mt).remove(this))}continue(){var n;return((n=A(this,mi))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var o,s,a,l,c,u,h,d,p,w,y,_,m,g,v,x,E,S,I,R;X(this,mi,q1({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(j,M)=>{rt(this,bn,dr).call(this,{type:"failed",failureCount:j,error:M})},onPause:()=>{rt(this,bn,dr).call(this,{type:"pause"})},onContinue:()=>{rt(this,bn,dr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>A(this,mt).canRun(this)}));const r=this.state.status==="pending",i=!A(this,mi).canStart();try{if(!r){rt(this,bn,dr).call(this,{type:"pending",variables:n,isPaused:i}),await((s=(o=A(this,mt).config).onMutate)==null?void 0:s.call(o,n,this));const M=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,n));M!==this.state.context&&rt(this,bn,dr).call(this,{type:"pending",context:M,variables:n,isPaused:i})}const j=await A(this,mi).start();return await((u=(c=A(this,mt).config).onSuccess)==null?void 0:u.call(c,j,n,this.state.context,this)),await((d=(h=this.options).onSuccess)==null?void 0:d.call(h,j,n,this.state.context)),await((w=(p=A(this,mt).config).onSettled)==null?void 0:w.call(p,j,null,this.state.variables,this.state.context,this)),await((_=(y=this.options).onSettled)==null?void 0:_.call(y,j,null,n,this.state.context)),rt(this,bn,dr).call(this,{type:"success",data:j}),j}catch(j){try{throw await((g=(m=A(this,mt).config).onError)==null?void 0:g.call(m,j,n,this.state.context,this)),await((x=(v=this.options).onError)==null?void 0:x.call(v,j,n,this.state.context)),await((S=(E=A(this,mt).config).onSettled)==null?void 0:S.call(E,void 0,j,this.state.variables,this.state.context,this)),await((R=(I=this.options).onSettled)==null?void 0:R.call(I,void 0,j,n,this.state.context)),j}finally{rt(this,bn,dr).call(this,{type:"error",error:j})}}finally{A(this,mt).runNext(this)}}},_n=new WeakMap,mt=new WeakMap,mi=new WeakMap,bn=new WeakSet,dr=function(n){const r=i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=r(this.state),yt.batch(()=>{A(this,_n).forEach(i=>{i.onMutationUpdate(n)}),A(this,mt).notify({mutation:this,type:"updated",action:n})})},V0);function nP(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ct,$a,F0,rP=(F0=class extends Du{constructor(e={}){super();ue(this,Ct);ue(this,$a);this.config=e,X(this,Ct,new Map),X(this,$a,Date.now())}build(e,n,r){const i=new tP({mutationCache:this,mutationId:++pl(this,$a)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=Ol(e),r=A(this,Ct).get(n)??[];r.push(e),A(this,Ct).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=Ol(e);if(A(this,Ct).has(n)){const i=(r=A(this,Ct).get(n))==null?void 0:r.filter(o=>o!==e);i&&(i.length===0?A(this,Ct).delete(n):A(this,Ct).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=A(this,Ct).get(Ol(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=A(this,Ct).get(Ol(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){yt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...A(this,Ct).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>ev(n,r))}findAll(e={}){return this.getAll().filter(n=>ev(e,n))}notify(e){yt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return yt.batch(()=>Promise.all(e.map(n=>n.continue().catch(en))))}},Ct=new WeakMap,$a=new WeakMap,F0);function Ol(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function rv(t){return{onFetch:(e,n)=>{var u,h,d,p,w;const r=e.options,i=(d=(h=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:h.fetchMore)==null?void 0:d.direction,o=((p=e.state.data)==null?void 0:p.pages)||[],s=((w=e.state.data)==null?void 0:w.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let y=!1;const _=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(e.signal.aborted?y=!0:e.signal.addEventListener("abort",()=>{y=!0}),e.signal)})},m=$1(e.options,e.fetchOptions),g=async(v,x,E)=>{if(y)return Promise.reject();if(x==null&&v.pages.length)return Promise.resolve(v);const S={queryKey:e.queryKey,pageParam:x,direction:E?"backward":"forward",meta:e.options.meta};_(S);const I=await m(S),{maxPages:R}=e.options,j=E?JC:HC;return{pages:j(v.pages,I,R),pageParams:j(v.pageParams,x,R)}};if(i&&o.length){const v=i==="backward",x=v?iP:iv,E={pages:o,pageParams:s},S=x(r,E);a=await g(E,S,v)}else{const v=t??o.length;do{const x=l===0?s[0]??r.initialPageParam:iv(r,a);if(l>0&&x==null)break;a=await g(a,x),l++}while(l<v)}return a};e.options.persister?e.fetchFn=()=>{var y,_;return(_=(y=e.options).persister)==null?void 0:_.call(y,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function iv(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function iP(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var Pe,vr,wr,Po,Ro,_r,ko,No,B0,oP=(B0=class{constructor(t={}){ue(this,Pe);ue(this,vr);ue(this,wr);ue(this,Po);ue(this,Ro);ue(this,_r);ue(this,ko);ue(this,No);X(this,Pe,t.queryCache||new eP),X(this,vr,t.mutationCache||new rP),X(this,wr,t.defaultOptions||{}),X(this,Po,new Map),X(this,Ro,new Map),X(this,_r,0)}mount(){pl(this,_r)._++,A(this,_r)===1&&(X(this,ko,z1.subscribe(async t=>{t&&(await this.resumePausedMutations(),A(this,Pe).onFocus())})),X(this,No,Fc.subscribe(async t=>{t&&(await this.resumePausedMutations(),A(this,Pe).onOnline())})))}unmount(){var t,e;pl(this,_r)._--,A(this,_r)===0&&((t=A(this,ko))==null||t.call(this),X(this,ko,void 0),(e=A(this,No))==null||e.call(this),X(this,No,void 0))}isFetching(t){return A(this,Pe).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return A(this,vr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=A(this,Pe).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=A(this,Pe).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(Xy(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return A(this,Pe).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=A(this,Pe).get(r.queryHash),o=i==null?void 0:i.state.data,s=VC(e,o);if(s!==void 0)return A(this,Pe).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(t,e,n){return yt.batch(()=>A(this,Pe).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=A(this,Pe).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=A(this,Pe);yt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=A(this,Pe),r={type:"active",...t};return yt.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=yt.batch(()=>A(this,Pe).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(en).catch(en)}invalidateQueries(t={},e={}){return yt.batch(()=>{if(A(this,Pe).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=yt.batch(()=>A(this,Pe).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(en)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(en)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=A(this,Pe).build(this,e);return n.isStaleByTime(Xy(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(en).catch(en)}fetchInfiniteQuery(t){return t.behavior=rv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(en).catch(en)}ensureInfiniteQueryData(t){return t.behavior=rv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Fc.isOnline()?A(this,vr).resumePausedMutations():Promise.resolve()}getQueryCache(){return A(this,Pe)}getMutationCache(){return A(this,vr)}getDefaultOptions(){return A(this,wr)}setDefaultOptions(t){X(this,wr,t)}setQueryDefaults(t,e){A(this,Po).set(va(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...A(this,Po).values()];let n={};return e.forEach(r=>{wa(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){A(this,Ro).set(va(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...A(this,Ro).values()];let n={};return e.forEach(r=>{wa(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...A(this,wr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=um(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===dm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...A(this,wr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){A(this,Pe).clear(),A(this,vr).clear()}},Pe=new WeakMap,vr=new WeakMap,wr=new WeakMap,Po=new WeakMap,Ro=new WeakMap,_r=new WeakMap,ko=new WeakMap,No=new WeakMap,B0),sP=b.createContext(void 0),aP=({client:t,children:e})=>(b.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),f.jsx(sP.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_a.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const ov="popstate";function lP(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return _p("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bc(i)}return uP(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function K1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cP(){return Math.random().toString(36).substr(2,8)}function sv(t,e){return{usr:t.state,key:t.key,idx:e}}function _p(t,e,n,r){return n===void 0&&(n=null),_a({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?is(e):e,{state:n,key:e&&e.key||r||cP()})}function Bc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Er.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(_a({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function h(){a=Er.Pop;let _=u(),m=_==null?null:_-c;c=_,l&&l({action:a,location:y.location,delta:m})}function d(_,m){a=Er.Push;let g=_p(y.location,_,m);c=u()+1;let v=sv(g,c),x=y.createHref(g);try{s.pushState(v,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}o&&l&&l({action:a,location:y.location,delta:1})}function p(_,m){a=Er.Replace;let g=_p(y.location,_,m);c=u();let v=sv(g,c),x=y.createHref(g);s.replaceState(v,"",x),o&&l&&l({action:a,location:y.location,delta:0})}function w(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof _=="string"?_:Bc(_);return g=g.replace(/ $/,"%20"),Fe(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let y={get action(){return a},get location(){return t(i,s)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ov,h),l=_,()=>{i.removeEventListener(ov,h),l=null}},createHref(_){return e(i,_)},createURL:w,encodeLocation(_){let m=w(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(_){return s.go(_)}};return y}var av;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(av||(av={}));function dP(t,e,n){return n===void 0&&(n="/"),hP(t,e,n,!1)}function hP(t,e,n,r){let i=typeof e=="string"?is(e):e,o=hm(i.pathname||"/",n);if(o==null)return null;let s=G1(t);pP(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=TP(o);a=xP(s[l],c,r)}return a}function G1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Dr([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(Fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),G1(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:_P(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Q1(o.path))i(o,s,l)}),e}function Q1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Q1(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fP=/^:[\w-]+$/,mP=3,gP=2,yP=1,vP=10,wP=-2,lv=t=>t==="*";function _P(t,e){let n=t.split("/"),r=n.length;return n.some(lv)&&(r+=wP),e&&(r+=gP),n.filter(i=>!lv(i)).reduce((i,o)=>i+(fP.test(o)?mP:o===""?yP:vP),r)}function bP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xP(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=o==="/"?e:e.slice(o.length)||"/",h=cv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=cv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Dr([o,h.pathname]),pathnameBase:CP(Dr([o,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(o=Dr([o,h.pathnameBase]))}return s}function cv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,h)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let y=a[h]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[h];return p&&!w?c[d]=void 0:c[d]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function EP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),K1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return K1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?is(t):t;return{pathname:n?n.startsWith("/")?n:IP(n,e):e,search:PP(r),hash:RP(i)}}function IP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function AP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Y1(t,e){let n=AP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function X1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=is(t):(i=_a({},t),Fe(!i.pathname||!i.pathname.includes("?"),Qd("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Qd("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Qd("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let h=e.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=SP(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Dr=t=>t.join("/").replace(/\/\/+/g,"/"),CP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Z1=["post","put","patch","delete"];new Set(Z1);const NP=["get",...Z1];new Set(NP);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}const pm=b.createContext(null),DP=b.createContext(null),Mi=b.createContext(null),Lu=b.createContext(null),Qr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),eb=b.createContext(null);function OP(t,e){let{relative:n}=e===void 0?{}:e;Qa()||Fe(!1);let{basename:r,navigator:i}=b.useContext(Mi),{hash:o,pathname:s,search:a}=rb(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Dr([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Qa(){return b.useContext(Lu)!=null}function os(){return Qa()||Fe(!1),b.useContext(Lu).location}function tb(t){b.useContext(Mi).static||b.useLayoutEffect(t)}function fm(){let{isDataRoute:t}=b.useContext(Qr);return t?WP():LP()}function LP(){Qa()||Fe(!1);let t=b.useContext(pm),{basename:e,future:n,navigator:r}=b.useContext(Mi),{matches:i}=b.useContext(Qr),{pathname:o}=os(),s=JSON.stringify(Y1(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return tb(()=>{a.current=!0}),b.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=X1(c,JSON.parse(s),o,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Dr([e,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[e,r,s,o,t])}function nb(){let{matches:t}=b.useContext(Qr),e=t[t.length-1];return e?e.params:{}}function rb(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Mi),{matches:i}=b.useContext(Qr),{pathname:o}=os(),s=JSON.stringify(Y1(i,r.v7_relativeSplatPath));return b.useMemo(()=>X1(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function MP(t,e){return jP(t,e)}function jP(t,e,n,r){Qa()||Fe(!1);let{navigator:i}=b.useContext(Mi),{matches:o}=b.useContext(Qr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=os(),u;if(e){var h;let _=typeof e=="string"?is(e):e;l==="/"||(h=_.pathname)!=null&&h.startsWith(l)||Fe(!1),u=_}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let _=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=dP(t,{pathname:p}),y=$P(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Dr([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Dr([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return e&&y?b.createElement(Lu.Provider,{value:{location:ba({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Er.Pop}},y):y}function VP(){let t=qP(),e=kP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const FP=b.createElement(VP,null);class BP extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Qr.Provider,{value:this.props.routeContext},b.createElement(eb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function UP(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(pm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Qr.Provider,{value:e},r)}function $P(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||Fe(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let h=s[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:p}=n,w=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||w){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,h,d)=>{let p,w=!1,y=null,_=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||FP,l&&(c<0&&d===0?(w=!0,_=null):c===d&&(w=!0,_=h.route.hydrateFallbackElement||null)));let m=e.concat(s.slice(0,d+1)),g=()=>{let v;return p?v=y:w?v=_:h.route.Component?v=b.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=u,b.createElement(UP,{match:h,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?b.createElement(BP,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var ib=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ib||{}),Uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uc||{});function zP(t){let e=b.useContext(pm);return e||Fe(!1),e}function HP(t){let e=b.useContext(DP);return e||Fe(!1),e}function JP(t){let e=b.useContext(Qr);return e||Fe(!1),e}function ob(t){let e=JP(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function qP(){var t;let e=b.useContext(eb),n=HP(Uc.UseRouteError),r=ob(Uc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function WP(){let{router:t}=zP(ib.UseNavigateStable),e=ob(Uc.UseNavigateStable),n=b.useRef(!1);return tb(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ba({fromRouteId:e},o)))},[t,e])}function Xt(t){Fe(!1)}function KP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Er.Pop,navigator:o,static:s=!1,future:a}=t;Qa()&&Fe(!1);let l=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:o,static:s,future:ba({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=is(r));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:w="default"}=r,y=b.useMemo(()=>{let _=hm(u,l);return _==null?null:{location:{pathname:_,search:h,hash:d,state:p,key:w},navigationType:i}},[l,u,h,d,p,w,i]);return y==null?null:b.createElement(Mi.Provider,{value:c},b.createElement(Lu.Provider,{children:n,value:y}))}function GP(t){let{children:e,location:n}=t;return MP(bp(e),n)}new Promise(()=>{});function bp(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let o=[...e,i];if(r.type===b.Fragment){n.push.apply(n,bp(r.props.children,o));return}r.type!==Xt&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xp(){return xp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xp.apply(this,arguments)}function QP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XP(t,e){return t.button===0&&(!e||e==="_self")&&!YP(t)}function Ep(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function ZP(t,e){let n=Ep(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(o=>{n.append(i,o)})}),n}const eR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tR="6";try{window.__reactRouterVersion=tR}catch{}const nR="startTransition",uv=CT[nR];function rR(t){let{basename:e,children:n,future:r,window:i}=t,o=b.useRef();o.current==null&&(o.current=lP({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},u=b.useCallback(h=>{c&&uv?uv(()=>l(h)):l(h)},[l,c]);return b.useLayoutEffect(()=>s.listen(u),[s,u]),b.createElement(KP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const iR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:h}=e,d=QP(e,eR),{basename:p}=b.useContext(Mi),w,y=!1;if(typeof c=="string"&&oR.test(c)&&(w=c,iR))try{let v=new URL(window.location.href),x=c.startsWith("//")?new URL(v.protocol+c):new URL(c),E=hm(x.pathname,p);x.origin===v.origin&&E!=null?c=E+x.search+x.hash:y=!0}catch{}let _=OP(c,{relative:i}),m=sR(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:i,viewTransition:h});function g(v){r&&r(v),v.defaultPrevented||m(v)}return b.createElement("a",xp({},d,{href:w||_,onClick:y||o?r:g,ref:n,target:l}))});var dv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(dv||(dv={}));var hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hv||(hv={}));function sR(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=fm(),c=os(),u=rb(t,{relative:s});return b.useCallback(h=>{if(XP(h,n)){h.preventDefault();let d=r!==void 0?r:Bc(c)===Bc(u);l(t,{replace:d,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,u,r,i,n,t,o,s,a])}function aR(t){let e=b.useRef(Ep(t)),n=b.useRef(!1),r=os(),i=b.useMemo(()=>ZP(r.search,n.current?null:e.current),[r.search]),o=fm(),s=b.useCallback((a,l)=>{const c=Ep(typeof a=="function"?a(i):a);n.current=!0,o("?"+c,l)},[o,i]);return[i,s]}var lR=typeof Element<"u",cR=typeof Map=="function",uR=typeof Set=="function",dR=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function oc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!oc(t[r],e[r]))return!1;return!0}var o;if(cR&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!oc(r.value[1],e.get(r.value[0])))return!1;return!0}if(uR&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(dR&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(lR&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!oc(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var hR=function(e,n){try{return oc(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const pR=za(hR);var fR=function(t,e,n,r,i,o,s,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,s,a],u=0;l=new Error(e.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},mR=fR;const pv=za(mR);var gR=function(e,n,r,i){var o=r?r.call(i,e,n):void 0;if(o!==void 0)return!!o;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var u=s[c];if(!l(u))return!1;var h=e[u],d=n[u];if(o=r?r.call(i,h,d,u):void 0,o===!1||o===void 0&&h!==d)return!1}return!0};const yR=za(gR);var sb=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(sb||{}),Yd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},fv=Object.values(sb),mm={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},vR=Object.entries(mm).reduce((t,[e,n])=>(t[n]=e,t),{}),on="data-rh",wo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},_o=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},wR=t=>{let e=_o(t,"title");const n=_o(t,wo.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=_o(t,wo.DEFAULT_TITLE);return e||r||void 0},_R=t=>_o(t,wo.ON_CHANGE_CLIENT_STATE)||(()=>{}),Xd=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),bR=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),xR=t=>console&&typeof console.warn=="function"&&console.warn(t),Ts=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&xR(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,o)=>{const s={};o.filter(l=>{let c;const u=Object.keys(l);for(let d=0;d<u.length;d+=1){const p=u[d],w=p.toLowerCase();e.indexOf(w)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(w==="rel"&&l[w].toLowerCase()==="stylesheet")&&(c=w),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const h=l[c].toLowerCase();return r[c]||(r[c]={}),s[c]||(s[c]={}),r[c][h]?!1:(s[c][h]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const c=a[l],u={...r[c],...s[c]};r[c]=u}return i},[]).reverse()},ER=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},TR=t=>({baseTag:bR(["href"],t),bodyAttributes:Xd("bodyAttributes",t),defer:_o(t,wo.DEFER),encode:_o(t,wo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Xd("htmlAttributes",t),linkTags:Ts("link",["rel","href"],t),metaTags:Ts("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Ts("noscript",["innerHTML"],t),onChangeClientState:_R(t),scriptTags:Ts("script",["src","innerHTML"],t),styleTags:Ts("style",["cssText"],t),title:wR(t),titleAttributes:Xd("titleAttributes",t),prioritizeSeoTags:ER(t,wo.PRIORITIZE_SEO_TAGS)}),ab=t=>Array.isArray(t)?t.join(""):t,SR=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Zd=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(SR(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},mv=(t,e)=>({...t,[e]:void 0}),IR=["noscript","script","style"],Tp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),lb=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),AR=(t,e,n,r)=>{const i=lb(n),o=ab(e);return i?`<${t} ${on}="true" ${i}>${Tp(o,r)}</${t}>`:`<${t} ${on}="true">${Tp(o,r)}</${t}>`},CR=(t,e,n=!0)=>e.reduce((r,i)=>{const o=i,s=Object.keys(o).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const h=typeof o[u]>"u"?u:`${u}="${Tp(o[u],n)}"`;return c?`${c} ${h}`:h},""),a=o.innerHTML||o.cssText||"",l=IR.indexOf(t)===-1;return`${r}<${t} ${on}="true" ${s}${l?"/>":`>${a}</${t}>`}`},""),cb=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=mm[r];return n[i||r]=t[r],n},e),PR=(t,e,n)=>{const r={key:e,[on]:!0},i=cb(n,r);return[N.createElement("title",i,e)]},sc=(t,e)=>e.map((n,r)=>{const i={key:r,[on]:!0};return Object.keys(n).forEach(o=>{const a=mm[o]||o;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=n[o]}),N.createElement(t,i)}),Ft=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>PR(t,e.title,e.titleAttributes),toString:()=>AR(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>cb(e),toString:()=>lb(e)};default:return{toComponent:()=>sc(t,e),toString:()=>CR(t,e,n)}}},RR=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=Zd(t,Yd.meta),o=Zd(e,Yd.link),s=Zd(n,Yd.script);return{priorityMethods:{toComponent:()=>[...sc("meta",i.priority),...sc("link",o.priority),...sc("script",s.priority)],toString:()=>`${Ft("meta",i.priority,r)} ${Ft("link",o.priority,r)} ${Ft("script",s.priority,r)}`},metaTags:i.default,linkTags:o.default,scriptTags:s.default}},kR=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:o,styleTags:s,title:a="",titleAttributes:l,prioritizeSeoTags:c}=t;let{linkTags:u,metaTags:h,scriptTags:d}=t,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:u,metaTags:h,scriptTags:d}=RR(t)),{priority:p,base:Ft("base",e,r),bodyAttributes:Ft("bodyAttributes",n,r),htmlAttributes:Ft("htmlAttributes",i,r),link:Ft("link",u,r),meta:Ft("meta",h,r),noscript:Ft("noscript",o,r),script:Ft("script",d,r),style:Ft("style",s,r),title:Ft("title",{title:a,titleAttributes:l},r)}},Sp=kR,Ll=[],ub=!!(typeof window<"u"&&window.document&&window.document.createElement),Ip=class{constructor(t,e){Mn(this,"instances",[]);Mn(this,"canUseDOM",ub);Mn(this,"context");Mn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Ll:this.instances,add:t=>{(this.canUseDOM?Ll:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Ll:this.instances).indexOf(t);(this.canUseDOM?Ll:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Sp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},NR={},db=N.createContext(NR),gi,hb=(gi=class extends b.Component{constructor(n){super(n);Mn(this,"helmetData");this.helmetData=new Ip(this.props.context||{},gi.canUseDOM)}render(){return N.createElement(db.Provider,{value:this.helmetData.value},this.props.children)}},Mn(gi,"canUseDOM",ub),gi),qi=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${on}]`),i=[].slice.call(r),o=[];let s;return e&&e.length&&e.forEach(a=>{const l=document.createElement(t);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=c,h=typeof a[u]>"u"?"":a[u];l.setAttribute(c,h)}l.setAttribute(on,"true"),i.some((c,u)=>(s=u,l.isEqualNode(c)))?i.splice(s,1):o.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),o.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:o}},Ap=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(on),i=r?r.split(","):[],o=[...i],s=Object.keys(e);for(const a of s){const l=e[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const c=o.indexOf(a);c!==-1&&o.splice(c,1)}for(let a=o.length-1;a>=0;a-=1)n.removeAttribute(o[a]);i.length===o.length?n.removeAttribute(on):n.getAttribute(on)!==s.join(",")&&n.setAttribute(on,s.join(","))},DR=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=ab(t)),Ap("title",e)},gv=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:o,metaTags:s,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:u,title:h,titleAttributes:d}=t;Ap("body",r),Ap("html",i),DR(h,d);const p={baseTag:qi("base",n),linkTags:qi("link",o),metaTags:qi("meta",s),noscriptTags:qi("noscript",a),scriptTags:qi("script",c),styleTags:qi("style",u)},w={},y={};Object.keys(p).forEach(_=>{const{newTags:m,oldTags:g}=p[_];m.length&&(w[_]=m),g.length&&(y[_]=p[_].oldTags)}),e&&e(),l(t,w,y)},Ss=null,OR=t=>{Ss&&cancelAnimationFrame(Ss),t.defer?Ss=requestAnimationFrame(()=>{gv(t,()=>{Ss=null})}):(gv(t),Ss=null)},LR=OR,yv=class extends b.Component{constructor(){super(...arguments);Mn(this,"rendered",!1)}shouldComponentUpdate(e){return!yR(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=TR(e.get().map(o=>{const s={...o.props};return delete s.context,s}));hb.canUseDOM?LR(i):Sp&&(r=Sp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},yh,gm=(yh=class extends b.Component{shouldComponentUpdate(t){return!pR(mv(this.props,"helmetData"),mv(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return pv(fv.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${fv.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),pv(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return N.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...o}=r.props,s=Object.keys(o).reduce((l,c)=>(l[vR[c]||c]=o[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,i);break;default:e=this.mapObjectTypeChildren(r,e,s,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Ip)){const i=r;r=new Ip(i.context,!0),delete n.helmetData}return r?N.createElement(yv,{...n,context:r.value}):N.createElement(db.Consumer,null,i=>N.createElement(yv,{...n,context:i}))}},Mn(yh,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),yh);const Mu=b.forwardRef(({className:t,type:e,...n},r)=>f.jsx("input",{type:e,className:Nu("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...n}));Mu.displayName="Input";const vv=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,wv=L1,MR=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return wv(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=e,s=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],h=o==null?void 0:o[c];if(u===null)return null;const d=vv(u)||vv(h);return i[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:h,className:d,...p}=u;return Object.entries(p).every(w=>{let[y,_]=w;return Array.isArray(_)?_.includes({...o,...a}[y]):{...o,...a}[y]===_})?[...c,h,d]:c},[]);return wv(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},jR=MR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ju=b.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...i},o)=>{const s=r?em:"button";return f.jsx(s,{className:Nu(jR({variant:e,size:n,className:t})),ref:o,...i})});ju.displayName="Button";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pb=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>b.createElement("svg",{ref:l,...FR,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:pb("lucide",i),...a},[...s.map(([c,u])=>b.createElement(c,u)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=(t,e)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(BR,{ref:o,iconNode:e,className:pb(`lucide-${VR(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=fb("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=fb("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),mb=()=>{const[t,e]=b.useState(""),n=fm(),r=i=>{i.preventDefault(),t.trim()&&n(`/search?q=${encodeURIComponent(t.trim())}`)};return f.jsxs("form",{onSubmit:r,className:"flex w-full max-w-sm items-center space-x-2",children:[f.jsx(Mu,{type:"text",placeholder:"Search articles...",value:t,onChange:i=>e(i.target.value),className:"rounded-l-full"}),f.jsx(ju,{type:"submit",className:"rounded-r-full",children:f.jsx($R,{className:"h-4 w-4"})})]})},zR=()=>{const[t,e]=b.useState(!1);return f.jsx("header",{className:"sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b border-green-100",children:f.jsx("div",{className:"container mx-auto px-4",children:f.jsxs("nav",{className:"flex items-center justify-between h-16",children:[f.jsx(Ye,{to:"/",className:"text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent",children:"Tech Chatter Box"}),t?f.jsx("div",{className:"flex-grow mx-4",children:f.jsx(mb,{})}):f.jsxs("div",{className:"hidden md:flex gap-6",children:[f.jsx(Ye,{to:"/blog",className:"text-gray-600 hover:text-green-600 transition-colors",children:"All Posts"}),f.jsx(Ye,{to:"/categories",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Categories"}),f.jsx(Ye,{to:"/about",className:"text-gray-600 hover:text-green-600 transition-colors",children:"About"}),f.jsx(Ye,{to:"/contact",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Contact"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-full hover:bg-gray-100","aria-label":t?"Close search":"Open search",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-600",children:t?f.jsx("path",{d:"M18 6L6 18M6 6l12 12"}):f.jsx("path",{d:"M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5zm0 0L21 21"})})}),f.jsx("div",{className:"md:hidden",children:f.jsx("button",{className:"p-2 rounded-full hover:bg-gray-100","aria-label":"Menu",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-600",children:f.jsx("path",{d:"M4 12h16M4 6h16M4 18h16"})})})})]})]})})})},HR=()=>f.jsx("footer",{className:"bg-white border-t border-green-100",children:f.jsxs("div",{className:"container mx-auto px-4 py-8",children:[f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[f.jsxs("div",{className:"mb-4 md:mb-0",children:[f.jsx(Ye,{to:"/",className:"text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent",children:"Tech Chatter Box"}),f.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Your source for programming insights and tech news."})]}),f.jsxs("nav",{className:"flex flex-wrap gap-6 text-sm",children:[f.jsx(Ye,{to:"/privacy-policy",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Privacy Policy"}),f.jsx(Ye,{to:"/terms",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Terms of Service"}),f.jsx(Ye,{to:"/contact",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Contact"})]})]}),f.jsxs("div",{className:"text-center text-sm text-gray-500 mt-8",children:["© ",new Date().getFullYear()," Tech Chatter Box. All rights reserved."]})]})}),JR={id:"java_a101",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java 11","Java Updates","Java Features for Developers","New Java Features","Java Programming","Java Development","Java Features","Java 11 Guide","Java Tutorials","Java Programming Tips"],content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},qR={id:"java_a102",title:"Java 8 Features: The Evolution of Modern Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Lambda Expressions","Streams API","Java 8 Date API","Java 8 Updates","Java 8 Features","Java 8 Nashorn","Date and Time API","Java 8 Streams","Default Methods Java 8","Java 8"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 8 Features: The Evolution of Modern Java</title>
  <meta name="description" content="Explore Java 8's core features like lambdas, streams, functional interfaces, and the new date/time API." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java 8, released in March 2014, was a major turning point in the Java ecosystem. It introduced functional programming capabilities and brought a modern, expressive style to Java development. Let’s dive into its most impactful features.</p>

  <section>
    <h2>1. Lambda Expressions</h2>
    <p>Lambda expressions let you treat functionality as method arguments or code as data:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.forEach(name -&gt; System.out.println(name));</pre>
    <p>Shorter, cleaner, and more expressive code!</p>
  </section>

  <section>
    <h2>2. Functional Interfaces</h2>
    <p>Interfaces with a single abstract method can be used with lambdas:</p>
    <pre>@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

Greeting g = (name) -&gt; System.out.println("Hello " + name);</pre>
    <p>Java 8 introduced many built-in functional interfaces like <code>Predicate</code>, <code>Function</code>, <code>Consumer</code>, and more.</p>
  </section>

  <section>
    <h2>3. Streams API</h2>
    <p>Process collections in a functional style using pipelines:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(n -&gt; n.startsWith("A"))
     .map(String::toUpperCase)
     .forEach(System.out::println);</pre>
    <p>Streams make data processing concise and readable.</p>
  </section>

  <section>
    <h2>4. Default and Static Methods in Interfaces</h2>
    <p>Interfaces can now have method implementations:</p>
    <pre>interface Vehicle {
    default void start() {
        System.out.println("Vehicle started");
    }
}</pre>
    <p>This enabled backward compatibility without breaking existing implementations.</p>
  </section>

  <section>
    <h2>5. New Date and Time API (java.time)</h2>
    <p>The old <code>Date</code> and <code>Calendar</code> classes were replaced by a much cleaner and immutable API:</p>
    <pre>LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 1);

Period age = Period.between(birthday, today);
System.out.println("Age: " + age.getYears());</pre>
  </section>

  <section>
    <h2>6. Optional Class</h2>
    <p>A container object which may or may not contain a non-null value, avoiding null checks:</p>
    <pre>Optional&lt;String&gt; name = Optional.ofNullable(getName());

name.ifPresent(n -&gt; System.out.println("Hello " + n));</pre>
  </section>

  <section>
    <h2>7. Nashorn JavaScript Engine (Deprecated Later)</h2>
    <p>Java 8 introduced a lightweight JavaScript engine called Nashorn:</p>
    <pre>ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
engine.eval("print('Hello from JavaScript')");</pre>
    <p><em>(Note: Nashorn was deprecated in later versions and removed in Java 15.)</em></p>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 8 modernized the language and laid the foundation for functional programming in Java. It remains one of the most widely adopted versions, even years after its release.</p>
    <p>If you're maintaining Java 8 applications, knowing these features is essential — and if you're upgrading, many of these ideas carry forward into newer releases!</p>
  </section>

</body>
</html>
  `},WR={id:"java_a103",title:"Java 17 Features",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Pattern Matching Java 17","Java 17 Updates","Java 17 Security","Java 17","Java 17 JEPs","Sealed Classes","Pseudo-Random Number Generators Java 17","Java 17 Features","Java Performance","Java macOS Rendering"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 17 Features: A Complete Guide for Developers</title>
  <meta name="description" content="Explore the key features of Java 17, the latest LTS release including sealed classes, pattern matching, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java 17, released in September 2021, is a Long-Term Support (LTS) version and brings exciting updates and modern language enhancements. Let’s take a look at the top features every Java developer should know.</p>

  <section>
    <h2>1. Sealed Classes</h2>
    <p>Sealed classes let you restrict which classes can extend or implement a class or interface.</p>
    <pre>public sealed class Shape permits Circle, Square {}

final class Circle extends Shape {}
final class Square extends Shape {}</pre>
    <p>This gives you more control over class hierarchies and improves readability and maintainability.</p>
  </section>

  <section>
    <h2>2. Pattern Matching for <code>instanceof</code></h2>
    <p>Simplifies type casting when using <code>instanceof</code> checks:</p>
    <pre>if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}</pre>
    <p>No need for manual casting anymore!</p>
  </section>

  <section>
    <h2>3. Switch Expressions (Standard)</h2>
    <p>Switch expressions were finalized in Java 17, enabling more concise syntax:</p>
    <pre>String result = switch (day) {
    case MONDAY, FRIDAY -&gt; "Workday";
    case SATURDAY, SUNDAY -&gt; "Weekend";
    default -&gt; "Unknown";
};</pre>
  </section>

  <section>
    <h2>4. Text Blocks (Standard)</h2>
    <p>Text blocks make multi-line strings easier to read and write:</p>
    <pre>String json = """
{
  "name": "Java",
  "version": 17
}
""";</pre>
    <p>No more escaping quotes or newlines manually!</p>
  </section>

  <section>
    <h2>5. New <code>Record</code> Enhancements</h2>
    <p>Records, introduced in Java 14 and finalized in Java 16, now support better pattern matching and can be used with sealed types:</p>
    <pre>public record Point(int x, int y) {}</pre>
    <p>They reduce boilerplate for simple data carriers.</p>
  </section>

  <section>
    <h2>6. JEP 356: Enhanced Pseudo-Random Number Generators</h2>
    <p>A new set of interfaces and implementations for flexible and streamable random number generation:</p>
    <pre>RandomGenerator gen = RandomGeneratorFactory.of("L64X128MixRandom").create();
System.out.println(gen.nextInt());</pre>
  </section>

  <section>
    <h2>7. Strong Encapsulation of JDK Internals</h2>
    <p>Java 17 strongly encapsulates internal APIs. If you relied on <code>sun.*</code> packages, you’ll need to migrate to public APIs.</p>
  </section>

  <section>
    <h2>8. Deprecations and Removals</h2>
    <ul>
      <li>Removal of the Applet API</li>
      <li>Deprecation of the Security Manager</li>
      <li>Removal of RMI Activation system</li>
    </ul>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 17 brings modern language features, performance improvements, and better developer ergonomics — and as an LTS release, it’s built for stability.</p>
    <p>Time to upgrade? If you're on Java 8 or even Java 11, Java 17 is a smart step forward.</p>
  </section>

</body>
</html>
  `},KR={id:"java_a104",title:"Java 21 Features",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java 21 Features","Java 21 Performance","Java 21","Foreign Function API Java 21","Java Security Manager Removal","Project Loom","Java 21 JEPs","Java Virtual Threads","Record Patterns","Pattern Matching Java 21"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 21 Features: The Complete Guide for Developers</title>
  <meta name="description" content="Explore Java 21's powerful new features including virtual threads, pattern matching, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java 21, released in September 2023, is a major Long-Term Support (LTS) release. It brings cutting-edge features like virtual threads, record patterns, string templates, and more. Let’s dive into what’s new in Java 21!</p>

  <section>
    <h2>1. Virtual Threads (JEP 444)</h2>
    <p>Part of Project Loom, virtual threads are lightweight threads that scale your applications with minimal changes.</p>
    <pre>try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println("Hello from a virtual thread!"));
}</pre>
    <p>They’re ideal for handling high-concurrency applications like web servers.</p>
  </section>

  <section>
    <h2>2. Record Patterns (JEP 440)</h2>
    <p>Pattern matching now supports records, making deconstruction more elegant:</p>
    <pre>record Point(int x, int y) {}

static void print(Object obj) {
    if (obj instanceof Point(int x, int y)) {
        System.out.println("x = " + x + ", y = " + y);
    }
}</pre>
  </section>

  <section>
    <h2>3. Pattern Matching for <code>switch</code> (JEP 441)</h2>
    <p>Switch can now use type patterns, making decision trees concise and type-safe:</p>
    <pre>static String handleShape(Object shape) {
    return switch (shape) {
        case Circle c -&gt; "Circle radius: " + c.radius();
        case Rectangle r -&gt; "Rectangle area: " + (r.w() * r.h());
        default -&gt; "Unknown shape";
    };
}</pre>
  </section>

  <section>
    <h2>4. String Templates (Preview) (JEP 430)</h2>
    <p>String interpolation comes to Java with <code>STR</code> templates:</p>
    <pre>String name = "Java";
String greeting = STR."Hello, {name}!";
System.out.println(greeting);</pre>
    <p>This feature is in preview but hugely anticipated!</p>
  </section>

  <section>
    <h2>5. Unnamed Classes and Instance <code>main()</code> (Preview)</h2>
    <p>You can now write minimal Java programs with no class declaration:</p>
    <pre>void main() {
    System.out.println("Minimal Java app!");
}</pre>
    <p>Perfect for scripts, learning, or quick prototyping.</p>
  </section>

  <section>
    <h2>6. Scoped Values (Preview) (JEP 446)</h2>
    <p>Scoped values allow safe, efficient sharing of data between threads — especially useful with virtual threads:</p>
    <pre>ScopedValue&lt;String&gt; USERNAME = ScopedValue.newInstance();

ScopedValue.where(USERNAME, "alice").run(() -&gt; {
    System.out.println("Hello " + USERNAME.get());
});</pre>
  </section>

  <section>
    <h2>7. Structured Concurrency (Preview) (JEP 453)</h2>
    <p>Makes managing concurrent tasks easier and safer by treating them as a single unit of work:</p>
    <pre>try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future&lt;String&gt; user = scope.fork(() -&gt; fetchUser());
    Future&lt;String&gt; orders = scope.fork(() -&gt; fetchOrders());

    scope.join();
    scope.throwIfFailed();

    return user.result() + orders.result();
}</pre>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 21 modernizes the platform with features developers have wanted for years. If you’re using Java 17 or earlier, this LTS release is a solid upgrade.</p>
    <p>Java is more expressive, scalable, and fun than ever. Time to make the move!</p>
  </section>

</body>
</html>
  `},GR={id:"java_a105",title:"Java 25 Features (Preview) – What’s New in the Upcoming LTS Release",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java 25 JEPs","Project Panama","Virtual Machine Changes Java 25","Virtual Threads Java 25","Java 25 Features","Project Loom","Pattern Matching Java 25","Java Records Enhancements","Sealed Types Java 25","Java 25"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 25 Features (Preview) – What’s New in the Upcoming LTS Release</title>
  <meta name="description" content="Explore the new features coming in Java 25, including stable values, Valhalla value classes, and structured concurrency." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java 25 is expected to launch in <strong>September 2025</strong>, and it brings with it exciting advancements in memory optimization, concurrency, and performance. Here's what we know so far about this upcoming release.</p>

  <section>
    <h2>1. Stable Values (JEP 502 – Preview)</h2>
    <p>This introduces immutable objects treated as constants by the JVM. Stable values help optimize startup time and improve performance in multi-threaded environments.</p>
    <pre>static final StableValue&lt;String&gt; GREETING = StableValue.of("Hello");

System.out.println(GREETING.get());</pre>
  </section>

  <section>
    <h2>2. Removal of 32-bit x86 Port (JEP 503)</h2>
    <p>Java 25 will remove support for the 32-bit x86 architecture to modernize the JDK and reduce maintenance overhead.</p>
  </section>

  <section>
    <h2>3. Value Classes (Project Valhalla – Expected)</h2>
    <p>Value classes are identity-free, immutable data carriers that can be laid out more efficiently in memory.</p>
    <pre>value class RGB(int r, int g, int b) { }</pre>
    <p>This allows objects to behave more like primitives for better performance.</p>
  </section>

  <section>
    <h2>4. Record 'with' Expressions (Expected)</h2>
    <p>Expected in Java 25 is the ability to create modified versions of records easily:</p>
    <pre>record User(String name, int age) {}

User updated = oldUser with { age = 35 };</pre>
  </section>

  <section>
    <h2>5. Structured Concurrency (Preview)</h2>
    <p>Structured concurrency continues its preview journey, aiming to make concurrent programming simpler and more reliable.</p>
    <pre>try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future&lt;String&gt; result = scope.fork(() -&gt; doWork());
    scope.join();
    scope.throwIfFailed();
}</pre>
  </section>

  <section>
    <h2>6. Scoped Values Enhancements (Preview)</h2>
    <p>Scoped values enable sharing of contextual data without traditional parameter passing — useful for virtual threads.</p>
    <pre>ScopedValue&lt;String&gt; USER_ID = ScopedValue.newInstance();

ScopedValue.where(USER_ID, "u123").run(() -&gt; {
    System.out.println(USER_ID.get());
});</pre>
  </section>

  <section>
    <h2>📅 Release Timeline</h2>
    <ul>
      <li><strong>Rampdown Phase 1:</strong> June 5, 2025</li>
      <li><strong>Rampdown Phase 2:</strong> July 17, 2025</li>
      <li><strong>Release Candidate:</strong> August 7, 2025</li>
      <li><strong>General Availability:</strong> September 16, 2025</li>
    </ul>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 25 represents another step forward for the platform — enhancing expressiveness, performance, and safety. Whether you're a backend developer, systems architect, or tooling engineer, the upcoming changes will modernize and improve your Java workflow.</p>
  </section>

</body>
</html>
  `},QR={id:"java_a106",title:"Java Streams: A Modern Way to Process Data",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Stream Processing in Java","Java Functional Programming","Java Lambda Expressions","Java Parallel Streams","Java Streams","Java 8 Streams","Java Stream Examples","Java Data Processing","Java Streams API"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Streams: A Modern Way to Process Data</title>
  <meta name="description" content="Learn Java Streams with real-world examples. Understand map, filter, reduce, and how to write clean, functional-style code in Java." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Introduced in Java 8, the <code>Stream</code> API brings a functional approach to processing collections. With streams, you can perform operations like <strong>filtering</strong>, <strong>mapping</strong>, and <strong>reducing</strong> in a concise and readable way.</p>

  <section>
    <h2>🔍 What is a Stream?</h2>
    <p>A <code>Stream</code> represents a sequence of elements and supports sequential and parallel aggregate operations.</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(name -&gt; name.startsWith("A"))
     .forEach(System.out::println);</pre>
    <p>Output: <code>Alice</code></p>
  </section>

  <section>
    <h2>⚙️ Common Operations</h2>

    <h3>1. <code>filter()</code></h3>
    <p>Filters elements based on a condition:</p>
    <pre>List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3, 4, 5);
nums.stream()
    .filter(n -&gt; n % 2 == 0)
    .forEach(System.out::println);</pre>

    <h3>2. <code>map()</code></h3>
    <p>Transforms each element:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Java", "Python", "Go");

names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);</pre>

    <h3>3. <code>reduce()</code></h3>
    <p>Reduces the stream to a single value:</p>
    <pre>int sum = Stream.of(1, 2, 3, 4)
                .reduce(0, Integer::sum);

System.out.println(sum);</pre>
    <p>Output: <code>10</code></p>
  </section>

  <section>
    <h2>🔁 Collecting Results</h2>
    <p>You can collect stream results into collections:</p>
    <pre>List&lt;String&gt; filtered = names.stream()
                             .filter(n -&gt; n.length() &gt; 3)
                             .collect(Collectors.toList());</pre>
  </section>

  <section>
    <h2>🚀 Parallel Streams</h2>
    <p>Process elements in parallel using multiple threads:</p>
    <pre>list.parallelStream()
    .filter( ... )
    .map( ... )
    .collect(Collectors.toList());</pre>
    <p>Use with care — not always faster depending on workload and thread management.</p>
  </section>

  <section>
    <h2>✅ Summary</h2>
    <ul>
      <li>Streams make code cleaner and easier to read.</li>
      <li>They enable functional-style operations on collections.</li>
      <li>Use <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>collect</code> for powerful transformations.</li>
    </ul>
    <p>Java Streams = less boilerplate, more power. Try them in your next project!</p>
  </section>

</body>
</html>
  `},YR={id:"java_a107",title:"Java Streams: map() vs flatMap()",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java Functional Programming","map() vs flatMap()","Java Stream map()","Stream Transformation in Java","Java Streams","Java Stream flatMap()","Java 8 Streams","Java Stream Operations","Java Streams API"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Streams: map() vs flatMap()</title>
  <meta name="description" content="Understand the difference between map() and flatMap() in Java Streams with clear examples and use cases." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>

  <p>In Java Streams, both <code>map()</code> and <code>flatMap()</code> are used to transform data — but they behave differently based on the output structure. Let's break it down with real examples.</p>

  <section>
    <h2>✅ <code>map()</code> – One-to-One Transformation</h2>
    <p>Transforms each element into another value (e.g., <code>String</code> to <code>Integer</code>):</p>
    <pre>List&lt;String&gt; names = List.of("Alice", "Bob");

List&lt;Integer&gt; lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());

System.out.println(lengths); // Output: [5, 3]</pre>
  </section>

  <section>
    <h2>✅ <code>flatMap()</code> – One-to-Many Flattening</h2>
    <p>Each element is mapped to a <code>Stream</code>, and all streams are then flattened into a single stream:</p>
    <pre>List&lt;String&gt; sentences = List.of("Hello world", "Java Streams");

List&lt;String&gt; words = sentences.stream()
    .flatMap(s -&gt; Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());

System.out.println(words); // Output: [Hello, world, Java, Streams]</pre>
  </section>

  <section>
    <h2>🔁 Key Differences</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th><code>map()</code></th>
        <th><code>flatMap()</code></th>
      </tr>
      <tr>
        <td>Transformation</td>
        <td>One-to-One</td>
        <td>One-to-Many</td>
      </tr>
      <tr>
        <td>Output Type</td>
        <td><code>Stream&lt;T&gt;</code></td>
        <td><code>Stream&lt;U&gt;</code> (flattened)</td>
      </tr>
      <tr>
        <td>Use Case</td>
        <td>Transform each item</td>
        <td>Flatten nested structures</td>
      </tr>
    </table>
  </section>

  <section>
    <h2>📦 Nested List Example</h2>
    <pre>List&lt;List&lt;String&gt;&gt; listOfLists = List.of(
    List.of("A", "B"),
    List.of("C", "D")
);

// Using map()
Stream&lt;List&lt;String&gt;&gt; mapped = listOfLists.stream().map(list -&gt; list);
System.out.println(mapped.count()); // Output: 2

// Using flatMap()
Stream&lt;String&gt; flatMapped = listOfLists.stream().flatMap(List::stream);
System.out.println(flatMapped.count()); // Output: 4</pre>
  </section>

  <section>
    <h2>🎯 Conclusion</h2>
    <ul>
      <li>Use <code>map()</code> for simple transformations.</li>
      <li>Use <code>flatMap()</code> when each element produces a stream or collection, and you want a single flattened result.</li>
    </ul>
    <p>Mastering these two functions makes your Java Stream operations far more powerful and expressive!</p>
  </section>

</body>
</html>
  `},XR={id:"java_a108",title:"Lombok – Reduce Boilerplate in Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java Best Practices","Lombok Annotations","Java Code Simplification","Lombok Tutorial","Reduce Boilerplate Java","Project Lombok","Java Development Tools","Lombok Java","Java Productivity","Java Annotations"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lombok – Reduce Boilerplate in Java</title>
  <meta name="description" content="Learn how Project Lombok helps reduce boilerplate code in Java using annotations like @Getter, @Setter, @Builder, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p>Writing boilerplate code in Java — like getters, setters, constructors, and builders — can get repetitive. <strong>Project Lombok</strong> simplifies this with annotations that auto-generate code at compile-time, keeping your classes clean and focused.</p>

  <section>
    <h2>🔧 Setup</h2>
    <p>To use Lombok, add this dependency to your project:</p>
    <h4>➡️ Maven</h4>
    <pre>&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
  &lt;version&gt;1.18.30&lt;/version&gt;
  &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</pre>

    <h4>➡️ Gradle</h4>
    <pre>compileOnly 'org.projectlombok:lombok:1.18.30'
annotationProcessor 'org.projectlombok:lombok:1.18.30'</pre>
  </section>

  <section>
    <h2>📦 Example Without Lombok</h2>
    <pre>public class User {
  private String name;
  private int age;

  public User() {}

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public int getAge() { return age; }
  public void setAge(int age) { this.age = age; }
}</pre>
    <p>That's a lot of code for just a data class!</p>
  </section>

  <section>
    <h2>✅ Same Class With Lombok</h2>
    <pre>import lombok.Data;

@Data
public class User {
  private String name;
  private int age;
}</pre>
    <p>Done! <code>@Data</code> includes <code>@Getter</code>, <code>@Setter</code>, <code>@ToString</code>, <code>@EqualsAndHashCode</code>, and <code>@RequiredArgsConstructor</code>.</p>
  </section>

  <section>
    <h2>🎯 Common Lombok Annotations</h2>
    <ul>
      <li><code>@Getter</code> and <code>@Setter</code> – generates getters/setters</li>
      <li><code>@ToString</code> – generates a <code>toString()</code> method</li>
      <li><code>@EqualsAndHashCode</code> – adds <code>equals()</code> and <code>hashCode()</code></li>
      <li><code>@NoArgsConstructor</code>, <code>@AllArgsConstructor</code> – constructors</li>
      <li><code>@Builder</code> – fluent builder API</li>
      <li><code>@Value</code> – makes an immutable class (like Kotlin’s <code>data class</code>)</li>
    </ul>
  </section>

  <section>
    <h2>🚀 Builder Example</h2>
    <pre>@Builder
public class Product {
  private String name;
  private double price;
}

// Usage
Product p = Product.builder()
    .name("Laptop")
    .price(1200.0)
    .build();</pre>
  </section>

  <section>
    <h2>🛠 IDE Support</h2>
    <p>Lombok works in IntelliJ IDEA and Eclipse, but you may need to:</p>
    <ul>
      <li>Install the Lombok plugin</li>
      <li>Enable annotation processing in your IDE settings</li>
    </ul>
  </section>

  <section>
    <h2>📌 Conclusion</h2>
    <p>Lombok is a fantastic tool for reducing repetitive Java code. Use it wisely to simplify your codebase, but be sure your team understands what’s being auto-generated under the hood.</p>
  </section>

</body>
</html>
  `},ZR={id:"java_a109",title:"Testing Lombok-based Classes in Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Testing Lombok Classes","Lombok and JUnit","Java Test Automation","Java Testing Best Practices","Test Lombok Getters Setters","Unit Testing Java","Java Development","Lombok Tutorial","Lombok Java","Java Annotations"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Testing Lombok-based Classes in Java</title>
  <meta name="description" content="Learn how to effectively test Java classes that use Lombok annotations like @Data, @Builder, @EqualsAndHashCode, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p><strong>Lombok</strong> simplifies Java by auto-generating boilerplate like getters, setters, and constructors. But how do you **test** classes that use Lombok annotations?</p>

  <p>Here's a practical guide to unit testing Lombok-powered classes — and when you might want to go beyond relying on Lombok alone.</p>

  <section>
    <h2>✅ Lombok Class Example</h2>
    <p>Let’s use this simple class as our example:</p>
    <pre>import lombok.Data;

@Data
public class User {
  private String name;
  private int age;
}</pre>
    <p>Lombok generates <code>getName()</code>, <code>setName()</code>, <code>getAge()</code>, <code>setAge()</code>, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.</p>
  </section>

  <section>
    <h2>🔍 Should You Test Getters and Setters?</h2>
    <p>Generally, you <strong>don’t need to test Lombok-generated methods</strong> like getters and setters — they’re stable and widely trusted. However, you might want to test:</p>
    <ul>
      <li>Custom logic added manually</li>
      <li>Builder pattern usage</li>
      <li>Correct field population</li>
      <li>Equality and immutability (e.g., for value objects)</li>
    </ul>
  </section>

  <section>
    <h2>📦 Sample JUnit 5 Tests</h2>
    <pre>import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

  @Test
  void testGettersAndSetters() {
    User user = new User();
    user.setName("Alice");
    user.setAge(30);

    assertEquals("Alice", user.getName());
    assertEquals(30, user.getAge());
  }

  @Test
  void testEqualsAndHashCode() {
    User u1 = new User();
    u1.setName("Alice");
    u1.setAge(30);

    User u2 = new User();
    u2.setName("Alice");
    u2.setAge(30);

    assertEquals(u1, u2);
    assertEquals(u1.hashCode(), u2.hashCode());
  }

  @Test
  void testToString() {
    User user = new User();
    user.setName("Bob");
    user.setAge(25);

    String toString = user.toString();
    assertTrue(toString.contains("Bob"));
    assertTrue(toString.contains("25"));
  }
}</pre>
    <p><strong>Note:</strong> You’re not testing Lombok itself — you’re testing that your class behaves as expected with data populated.</p>
  </section>

  <section>
    <h2>🚀 Testing @Builder Classes</h2>
    <pre>import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {
  private String name;
  private double price;
}</pre>

    <p>JUnit test for <code>@Builder</code>:</p>
    <pre>@Test
void testBuilder() {
  Product p = Product.builder()
      .name("MacBook")
      .price(1999.99)
      .build();

  assertEquals("MacBook", p.getName());
  assertEquals(1999.99, p.getPrice());
}</pre>
  </section>

  <section>
    <h2>📌 Best Practices</h2>
    <ul>
      <li>📦 Don’t test auto-generated code unless it’s part of complex logic.</li>
      <li>🔍 Focus on testing behavior, not Lombok.</li>
      <li>🛠 Use IDEs or decompiled classes to inspect generated code if needed.</li>
      <li>✅ For teams: document that Lombok is used so others understand what's hidden.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p>Lombok reduces code clutter — and when used wisely, you don’t need to test the annotations themselves. Focus your tests on functionality and ensure the behavior is correct based on how your classes are used.</p>
    <p>Want to see how Lombok compares with <code>record</code> types in Java 14+? Stay tuned!</p>
  </section>

</body>
</html>
  `},ek={id:"java_a110",title:"Lombok vs Records: When to Use What?",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java Best Practices","Lombok Alternatives","Java Data Classes","Java Records vs Lombok","Java Code Simplification","Java 14 Records","Java Development Tips","Java Records","Project Lombok","Lombok vs Records"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lombok vs Records: When to Use What?</title>
  <meta name="description" content="Understand the differences between Lombok and Java Records, and know when to choose one over the other." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p>With Java's continuous evolution, two powerful tools for reducing boilerplate code have emerged: <strong>Lombok</strong> and <strong>Records</strong>. But when should you choose one over the other? In this post, we'll break down their strengths, differences, and which scenarios they shine in.</p>

  <section>
    <h2>🔧 Lombok: Auto-generating Boilerplate Code</h2>
    <p><strong>Lombok</strong> is a Java library that uses annotations to auto-generate boilerplate code like getters, setters, equals/hashCode, toString, and constructors. It’s widely used in legacy codebases to reduce verbosity while maintaining flexibility.</p>

    <h3>Popular Lombok Annotations</h3>
    <ul>
      <li><code>@Getter</code> / <code>@Setter</code> – auto-generates getters and setters</li>
      <li><code>@ToString</code> – generates the <code>toString()</code> method</li>
      <li><code>@EqualsAndHashCode</code> – generates <code>equals()</code> and <code>hashCode()</code> methods</li>
      <li><code>@Builder</code> – enables builder pattern</li>
      <li><code>@Value</code> – creates immutable objects with final fields</li>
    </ul>

    <h3>When to Use Lombok</h3>
    <ul>
      <li>Working with <strong>legacy code</strong> where you need flexibility with your classes.</li>
      <li>When you want to maintain <strong>mutability</strong> or <strong>custom logic</strong> in your classes.</li>
      <li>When you want more control over which methods get generated, using specific Lombok annotations as needed.</li>
    </ul>
  </section>

  <section>
    <h2>📦 Java Records: Immutable Data Structures</h2>
    <p><strong>Records</strong> were introduced in Java 14 as a feature of Project Amber to simplify working with immutable data objects. A record class is a special kind of class that provides automatic implementations for <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code> while making the object immutable by default.</p>

    <h3>Record Example</h3>
    <pre>public record User(String name, int age) {}</pre>
    <p>With just one line of code, a <code>record</code> auto-generates:</p>
    <ul>
      <li>A constructor with all fields</li>
      <li>Getters for all fields (no setters, as it's immutable)</li>
      <li><code>toString()</code>, <code>equals()</code>, and <code>hashCode()</code> methods</li>
    </ul>

    <h3>When to Use Records</h3>
    <ul>
      <li>When you need <strong>immutable data structures</strong> (no setters are allowed).</li>
      <li>When the class primarily holds <strong>data</strong> with no complex logic.</li>
      <li>When you want to easily work with <strong>records as keys in collections</strong> (e.g., in HashMap). The auto-generated <code>hashCode()</code> is very efficient.</li>
    </ul>
  </section>

  <section>
    <h2>🧮 Key Differences Between Lombok and Records</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th>Lombok</th>
        <th>Records</th>
      </tr>
      <tr>
        <td>Immutability</td>
        <td>Mutable (by default)</td>
        <td>Immutable by default</td>
      </tr>
      <tr>
        <td>Generated Methods</td>
        <td>Customizable via annotations</td>
        <td>Fixed set of methods (equals, hashCode, toString, constructor)</td>
      </tr>
      <tr>
        <td>Field Access</td>
        <td>Can be either mutable or immutable, depending on your choice of annotations</td>
        <td>Fields are final and can only be accessed via getter methods</td>
      </tr>
      <tr>
        <td>Complexity</td>
        <td>More flexible, can be used for any class type</td>
        <td>Best for simple data containers with no complex behavior</td>
      </tr>
      <tr>
        <td>Use Case</td>
        <td>Legacy code, mutable objects, fine-grained control</td>
        <td>Immutable data structures, DTOs, data-centric objects</td>
      </tr>
    </table>
  </section>

  <section>
    <h2>💡 When to Choose One Over the Other?</h2>
    <p>Here are some practical guidelines to help you decide when to use Lombok vs Records:</p>
    <ul>
      <li><strong>Choose Lombok</strong> when you need more flexibility in your data objects, need to support mutable fields, or when working with legacy code.</li>
      <li><strong>Choose Records</strong> when you want simple, immutable data containers with auto-generated methods for things like <code>toString()</code> and <code>equals()</code> — especially in new projects where immutability is preferred.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p>Both Lombok and Records serve different needs in the Java ecosystem. Lombok is a more flexible solution for reducing boilerplate code in mutable classes, while Records provide a clean, simple solution for immutable data objects. Understanding these differences will help you make the best choice for your project.</p>
    <p>Want to dive deeper into <strong>Lombok annotations</strong> or more about <strong>Java Records</strong>? Stay tuned for more!</p>
  </section>

</body>
</html>
  `},tk={id:"java_a111",title:"Java Records in Functional Programming",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Immutability in Java","Java Best Practices","Java Functional Constructs","Java Data Classes","Java 14 Records","Java Records Tutorial","Java Records","Java Functional Style","Functional Programming Java"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Records in Functional Programming</title>
  <meta name="description" content="Explore how Java Records align with functional programming principles like immutability, value semantics, and pure functions." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    ul {
      padding-left: 1.2rem;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java isn’t traditionally a functional programming (FP) language, but with the introduction of <strong>Records</strong> in Java 14+ (stable since Java 16), it’s become easier to write FP-inspired, data-oriented code.</p>

  <p>In this article, we’ll explore how <strong>Records</strong> support key functional programming principles like <em>immutability</em>, <em>value-based semantics</em>, and <em>pure data modeling</em>.</p>

  <section>
    <h2>📦 What Are Java Records?</h2>
    <p>Records are a concise way to declare <strong>immutable data carriers</strong> in Java. They auto-generate:</p>
    <ul>
      <li>Constructor</li>
      <li>Getters</li>
      <li><code>equals()</code> and <code>hashCode()</code></li>
      <li><code>toString()</code></li>
    </ul>

    <pre>public record User(String name, int age) {}</pre>

    <p>This class is equivalent to a verbose POJO, but it’s immutable and much cleaner.</p>
  </section>

  <section>
    <h2>🧠 Why Records Fit Functional Programming</h2>
    <p>Functional programming promotes writing <strong>pure functions</strong> that avoid mutable state. Here’s how records align:</p>
    <ul>
      <li>✅ <strong>Immutability</strong> – Record fields are <code>final</code> and cannot be changed after construction.</li>
      <li>✅ <strong>Value semantics</strong> – Two records with the same data are equal.</li>
      <li>✅ <strong>Data as a value</strong> – Emphasizes transforming data over modifying it.</li>
    </ul>
  </section>

  <section>
    <h2>🛠 Working with Records in Functional Style</h2>

    <h3>1. Record Transformation with Functions</h3>
    <p>Create pure functions that return new records instead of modifying existing ones:</p>
    <pre>public record Product(String name, double price) {}

public Product applyDiscount(Product p, double percent) {
  return new Product(p.name(), p.price() * (1 - percent / 100));
}</pre>

    <h3>2. Using Streams with Records</h3>
    <pre>List&lt;Product&gt; discounted = products.stream()
  .map(p -&gt; applyDiscount(p, 10))
  .toList();</pre>

    <p>Because records are immutable, these transformations are safe and side-effect-free.</p>
  </section>

  <section>
    <h2>🔁 Records as Algebraic Data Types (ADTs)</h2>
    <p>In FP, data is often modeled with **Algebraic Data Types** like sum types (variants). Java doesn’t have native sum types, but you can mimic them using sealed interfaces + records:</p>

    <pre>sealed interface Payment permits Card, Cash {}

record Card(String cardNumber) implements Payment {}
record Cash(double amount) implements Payment {}</pre>

    <p>This pattern mirrors pattern matching and variant-based logic in languages like Scala and Haskell.</p>

    <pre>String handlePayment(Payment p) {
  return switch (p) {
    case Card c -&gt; "Paid with card: " + c.cardNumber();
    case Cash c -&gt; "Paid in cash: " + c.amount();
  };
}</pre>
  </section>

  <section>
    <h2>🧼 Best Practices</h2>
    <ul>
      <li>✅ Use records to model **pure data**, especially DTOs, events, and config objects.</li>
      <li>✅ Favor **stateless transformations** over mutating logic.</li>
      <li>❌ Avoid adding mutable fields or logic-heavy methods to records.</li>
      <li>⚠️ Records are not suitable for ORM/JPA entities due to immutability and lack of no-arg constructor.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p><strong>Records + Functional Thinking = Cleaner, Safer Java</strong></p>
    <p>Java Records offer a powerful way to embrace functional programming principles, like immutability, pure functions, and value-based reasoning. They’re perfect for modeling data, applying transformations, and building more robust, testable code.</p>
    <p>Combine records with Streams, Optionals, and pattern matching — and your Java starts feeling surprisingly functional!</p>
  </section>

</body>
</html>
  `},nk={id:"java_a112",title:"JBang – Scripting with Java Like Never Before",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["JBang","Java Productivity Tools","Java Scripts","Java Scripting","Scripting with Java","Rapid Java Prototyping","JBang Tutorial","Java CLI Tools","Lightweight Java Development","Java Command Line Apps"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JBang – Scripting with Java Like Never Before</title>
  <meta name="description" content="Learn how JBang turns Java into a modern scripting language. Ideal for quick tools, prototyping, and automation using Java." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #fdfdfd;
      color: #333;
      line-height: 1.7;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #dcdcdc;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #f0f0f0;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    a {
      color: #2980b9;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>For decades, Java has been known as a powerful but verbose and heavyweight language—great for enterprise applications, not so much for scripts and quick tools. Enter <strong>JBang</strong>: a modern tool that breathes new life into Java by making it scriptable, lightweight, and even fun!</p>

  <section>
    <h2>🌟 What is JBang?</h2>
    <p><strong>JBang</strong> is a tool that allows you to run Java files as scripts — directly from the terminal — without needing to create a Maven or Gradle project. It's like using Python or Bash, but with Java!</p>

    <p>JBang compiles and runs your Java files behind the scenes, automatically handling:</p>
    <ul>
      <li>Dependency management</li>
      <li>Project setup</li>
      <li>JDK selection</li>
      <li>Script execution</li>
    </ul>

    <p>With JBang, you can write a complete Java program in a single file, include libraries with simple annotations, and run it instantly.</p>
  </section>

  <section>
    <h2>⚙️ Installing JBang</h2>

    <p>JBang supports all major OS platforms and can be installed in multiple ways:</p>
    <ul>
      <li><strong>macOS</strong>: <code>brew install jbangdev/tap/jbang</code></li>
      <li><strong>Linux</strong>: <code>curl -Ls https://sh.jbang.dev | bash</code></li>
      <li><strong>Windows</strong>: <a href="https://jbang.dev/download/">Download from jbang.dev</a> or use Scoop/Chocolatey</li>
      <li><strong>SDKMAN</strong>: <code>sdk install jbang</code></li>
    </ul>

    <p>Once installed, verify with:</p>
    <pre>jbang version</pre>
  </section>

  <section>
    <h2>🔧 Writing Your First Java Script</h2>

    <p>Create a file called <code>Hello.java</code> with the following:</p>

    <pre>//usr/bin/env jbang $0 $@ ; exit $?
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, JBang!");
    }
}</pre>

    <p>Run it:</p>
    <pre>jbang Hello.java</pre>

    <p>No project setup, no compilation step — just pure Java joy!</p>
  </section>

  <section>
    <h2>📦 Adding Dependencies</h2>

    <p>JBang allows you to add dependencies inline using <code>//DEPS</code>:</p>

    <pre>//DEPS com.squareup.okhttp3:okhttp:4.9.3
import okhttp3.OkHttpClient;
import okhttp3.Request;

public class FetchUrl {
    public static void main(String[] args) throws Exception {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
            .url("https://api.github.com")
            .build();
        var response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}</pre>

    <p>This is incredibly useful for building quick tools, integrations, or testing libraries.</p>
  </section>

  <section>
    <h2>🖇️ Advanced Features</h2>
    <ul>
      <li><strong>Top-level scripts</strong>: Java code without class wrappers (since Java 11+)</li>
      <li><strong>Template system</strong>: Reuse boilerplate with <code>jbang init --template</code></li>
      <li><strong>Alias support</strong>: Create your own local CLI tools with <code>jbang alias add</code></li>
      <li><strong>Native packaging</strong>: Convert your script to a native binary with <code>jbang export native</code></li>
    </ul>
  </section>

  <section>
    <h2>🧪 Comparing JBang with Other Tools</h2>
    <table border="1" cellpadding="10" style="border-collapse: collapse;">
      <thead>
        <tr>
          <th>Feature</th>
          <th>JBang</th>
          <th>JShell</th>
          <th>Maven</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quick scripting</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Dependency support</td>
          <td>✅</td>
          <td>Limited</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Classless top-level code</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Reusable scripts</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>💡 Use Cases</h2>
    <ul>
      <li>💼 Automating repetitive developer tasks</li>
      <li>🔬 Prototyping APIs and data transformations</li>
      <li>📦 Creating developer CLIs and tools</li>
      <li>📊 Quick data visualizations and reports</li>
      <li>📚 Teaching Java in workshops without setup overhead</li>
    </ul>
  </section>

  <section>
    <h2>📚 Resources & Links</h2>
    <ul>
      <li><a href="https://jbang.dev" target="_blank">Official JBang Website</a></li>
      <li><a href="https://github.com/jbangdev/jbang" target="_blank">GitHub Repository</a></li>
      <li><a href="https://jbang.dev/documentation/guide/latest/" target="_blank">Documentation & Examples</a></li>
    </ul>
  </section>

  <section>
    <h2>🎯 Conclusion</h2>
    <p><strong>JBang is the future of Java scripting.</strong> It strips away the verbosity and lets you use Java like a modern scripting language. Whether you're building automation tools, quick utilities, or full-on CLI apps, JBang offers a frictionless developer experience.</p>

    <p>✨ Give it a try, and Java might just become your new favorite scripting language.</p>
  </section>

</body>
</html>
  `},rk={id:"java_a113",title:"JBang vs JShell vs Kotlin Scripting",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["JBang","Java Scripting Tools","JBang vs JShell","Java Scripting Comparison","JShell Tutorial","Kotlin Scripting","Java Command Line Tools","Java vs Kotlin","Kotlin for Scripting","JShell"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JBang vs JShell vs Kotlin Scripting</title>
  <meta name="description" content="A developer-friendly comparison between JBang, JShell, and Kotlin scripting for fast Java-based scripts and prototyping." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      line-height: 1.7;
      color: #333;
      background: #fefefe;
      padding: 0 1.5rem;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
    ul {
      margin-left: 1.25rem;
    }
  </style>
</head>
<body>

  <p>Java developers have long wished for scripting capabilities that are as fast and flexible as Python or Bash. With modern tooling, that dream is closer than ever. In this post, we’ll explore and compare three powerful tools that bring scripting to the JVM world:</p>

  <ul>
    <li><strong>JBang</strong>: Full-powered Java scripting with dependency support</li>
    <li><strong>JShell</strong>: REPL-based exploration tool built into the JDK</li>
    <li><strong>Kotlin Scripting</strong>: Flexible scripting with Kotlin’s concise syntax</li>
  </ul>

  <h2>🎯 Use Case Overview</h2>

  <p>Before diving into the details, let’s briefly define where each tool shines:</p>

  <ul>
    <li><strong>JBang</strong>: Great for quick scripts, CLI tools, and automation with real dependencies</li>
    <li><strong>JShell</strong>: Ideal for quick experimentation and learning Java interactively</li>
    <li><strong>Kotlin Scripting</strong>: Perfect for concise scripts, DSLs, and integration into build tools</li>
  </ul>

  <h2>🔍 Feature Comparison</h2>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>JBang</th>
        <th>JShell</th>
        <th>Kotlin Scripting</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Requires Java knowledge</td>
        <td>✅</td>
        <td>✅</td>
        <td>⚠️ Familiarity with Kotlin</td>
      </tr>
      <tr>
        <td>Scriptable with top-level code</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Dependency support</td>
        <td>✅ <code>//DEPS</code></td>
        <td>⚠️ Limited (via startup script)</td>
        <td>✅ (via gradle.kts or annotations)</td>
      </tr>
      <tr>
        <td>Runs from CLI</td>
        <td>✅</td>
        <td>✅ (REPL)</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Compilation required</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
      </tr>
      <tr>
        <td>External library usage</td>
        <td>✅ (via Maven Central)</td>
        <td>⚠️ Workaround needed</td>
        <td>✅ (with script config)</td>
      </tr>
      <tr>
        <td>CLI App Development</td>
        <td>✅ (with Picocli)</td>
        <td>❌</td>
        <td>⚠️ DSL-friendly, not CLI focused</td>
      </tr>
    </tbody>
  </table>

  <h2>📜 Syntax Examples</h2>

  <h3>1. JBang Example</h3>
  <pre>//DEPS org.apache.commons:commons-lang3:3.12.0
import org.apache.commons.lang3.StringUtils;

public class Hello {
    public static void main(String[] args) {
        System.out.println(StringUtils.capitalize("hello jbang!"));
    }
}</pre>

  <h3>2. JShell Example</h3>
  <pre>jshell
jshell&gt; int a = 5;
jshell&gt; System.out.println(a * 2);</pre>

  <h3>3. Kotlin Script</h3>
  <pre>// File: hello.kts
val name = "Kotlin"
println("Hello, $name Scripting!")</pre>

  <p>To run: <code>kotlinc -script hello.kts</code></p>

  <h2>🔧 Installation Overview</h2>

  <ul>
    <li><strong>JBang</strong>: Install via <code>brew</code>, <code>sdkman</code>, or script from <a href="https://jbang.dev">jbang.dev</a></li>
    <li><strong>JShell</strong>: Comes with Java 9+ (<code>jshell</code> command)</li>
    <li><strong>Kotlin Scripting</strong>: Install <a href="https://kotlinlang.org/docs/command-line.html">Kotlin CLI tools</a></li>
  </ul>

  <h2>✅ When to Use What?</h2>

  <ul>
    <li>👨‍💻 <strong>Use JBang</strong> if you’re building quick scripts, tools, or want dependency management.</li>
    <li>📚 <strong>Use JShell</strong> for learning Java, testing ideas, or debugging APIs quickly.</li>
    <li>⚡ <strong>Use Kotlin scripting</strong> when you prefer Kotlin’s syntax and want to write concise, expressive scripts.</li>
  </ul>

  <h2>🔚 Final Thoughts</h2>

  <p>The JVM ecosystem now offers some amazing scripting tools. <strong>JBang</strong> makes Java scripting modern and powerful. <strong>JShell</strong> is excellent for interactive experimentation. And <strong>Kotlin scripting</strong> brings elegance and expressiveness to JVM scripting.</p>

  <p>Choose the tool that fits your workflow — or combine them!</p>

  <p>👉 Want a guide on <strong>creating CLI tools with JBang + Picocli</strong> or scripting APIs with Kotlin? Let me know!</p>

</body>
</html>
  `},ik={id:"java_a114",title:"Reactive Programming – with Project Reactor or RxJava",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Reactive Systems Java","Project Reactor","Reactive Programming","RxJava","Java Reactive Programming","Java Functional Programming","RxJava vs Project Reactor","Reactive Streams Java","Java Async Programming"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Reactive Programming – with Project Reactor or RxJava</title>
  <meta name="description" content="A deep dive into Reactive Programming using Project Reactor and RxJava. Learn the differences, use cases, and get hands-on examples." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>Reactive programming is a programming paradigm that deals with asynchronous data streams. Instead of executing tasks in a sequential manner, reactive programming allows you to manage streams of data asynchronously, making your programs more efficient and scalable. Two of the most popular libraries for reactive programming in Java are <strong>Project Reactor</strong> and <strong>RxJava</strong>.</p>

  <section>
    <h2>🌍 What is Reactive Programming?</h2>
    <p>Reactive programming focuses on building systems that are event-driven, non-blocking, and scalable. It allows for handling asynchronous data streams (such as events, network responses, or user input) in a declarative way. Reactive systems are inherently more responsive, resilient, and elastic.</p>

    <p>The key concepts in reactive programming are:</p>
    <ul>
      <li><strong>Observable Streams</strong>: Data that is asynchronously emitted over time.</li>
      <li><strong>Operators</strong>: Functions that allow you to manipulate the streams.</li>
      <li><strong>Backpressure</strong>: Handling the situation where the stream producer is faster than the consumer.</li>
    </ul>
  </section>

  <section>
    <h2>🚀 Project Reactor vs RxJava</h2>
    <p>Both Project Reactor and RxJava are libraries that implement the Reactive Streams specification, but they have different approaches, use cases, and features. Let's compare them based on several criteria.</p>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Project Reactor</th>
          <th>RxJava</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Developed by</td>
          <td>Spring Team</td>
          <td>ReactiveX Community</td>
        </tr>
        <tr>
          <td>JVM Compatibility</td>
          <td>Designed for JVM (Java, Kotlin, etc.)</td>
          <td>Supports JVM and other platforms (JavaScript, RxJS, etc.)</td>
        </tr>
        <tr>
          <td>Core Concepts</td>
          <td>Mono, Flux (Publisher types)</td>
          <td>Observable, Flowable</td>
        </tr>
        <tr>
          <td>Integration with Spring</td>
          <td>Perfect for Spring WebFlux and Spring Boot</td>
          <td>Can be integrated with Spring but not as seamless as Reactor</td>
        </tr>
        <tr>
          <td>Backpressure Support</td>
          <td>Fully integrated with backpressure handling</td>
          <td>Backpressure handling available in Flowable</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>More common in Spring-based projects</td>
          <td>Widely used in general Java-based projects</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Conclusion:</strong> If you're working within the Spring ecosystem, <strong>Project Reactor</strong> is the better choice as it integrates seamlessly with Spring WebFlux. On the other hand, <strong>RxJava</strong> is a more general-purpose reactive library and is widely used in non-Spring-based applications.</p>
  </section>

  <section>
    <h2>🔧 Basic Usage Examples</h2>

    <h3>1. Project Reactor Example</h3>
    <p>Let's look at a simple example using Project Reactor with <code>Mono</code> (single value) and <code>Flux</code> (multiple values).</p>

    <pre>import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

public class ReactorExample {
    public static void main(String[] args) {
        // Mono: Emit a single value
        Mono<String> mono = Mono.just("Hello, Reactor!");
        mono.subscribe(System.out::println);

        // Flux: Emit multiple values
        Flux<Integer> flux = Flux.just(1, 2, 3, 4, 5);
        flux.map(i -> i * 2)
            .subscribe(System.out::println);
    }
}</pre>

    <p>In this example, <code>Mono.just</code> emits a single value, while <code>Flux.just</code> emits multiple values, which can be manipulated using operators like <code>map</code>.</p>

    <h3>2. RxJava Example</h3>
    <p>Here's a similar example in RxJava using <code>Observable</code>:</p>

    <pre>import io.reactivex.Observable;

public class RxJavaExample {
    public static void main(String[] args) {
        // Observable: Emit multiple values
        Observable<Integer> observable = Observable.just(1, 2, 3, 4, 5);
        observable.map(i -> i * 2)
                  .subscribe(System.out::println);

        // Single: Emit a single value
        Observable<String> single = Observable.just("Hello, RxJava!");
        single.subscribe(System.out::println);
    }
}</pre>

    <p>RxJava uses <code>Observable</code> to represent streams of data and supports various operators like <code>map</code> and <code>subscribe</code>.</p>
  </section>

  <section>
    <h2>⚡ Advanced Features</h2>

    <h3>Backpressure Handling</h3>
    <p>Both Project Reactor and RxJava support backpressure, allowing you to control the flow of data when the consumer cannot keep up with the producer. For example, in Reactor, you can use the <code>onBackpressureBuffer</code> operator to buffer elements if the downstream consumer is slow.</p>

    <pre>Flux<Integer> flux = Flux.range(1, 1000)
        .onBackpressureBuffer();
    flux.subscribe(System.out::println);
</pre>

    <p>In RxJava, backpressure can be controlled using <code>Flowable</code>:</p>

    <pre>Flowable<Integer> flowable = Flowable.range(1, 1000)
        .onBackpressureBuffer();
    flowable.subscribe(System.out::println);
</pre>

    <h3>Composing Streams</h3>
    <p>Both libraries provide powerful operators to compose multiple streams, including <code>flatMap</code>, <code>concatMap</code>, and <code>merge</code>. This is essential for handling asynchronous tasks and creating complex pipelines.</p>
  </section>

  <section>
    <h2>🚀 Use Cases</h2>
    <ul>
      <li><strong>Real-Time Data</strong>: Use reactive programming for applications like chat systems, live dashboards, and event-driven systems.</li>
      <li><strong>Asynchronous APIs</strong>: Handle multiple I/O operations (e.g., database queries, network requests) without blocking the main thread.</li>
      <li><strong>Microservices</strong>: Reactive programming is ideal for building scalable, non-blocking microservices.</li>
      <li><strong>UIs</strong>: Build interactive and responsive UIs by combining reactive streams with JavaFX or similar frameworks.</li>
    </ul>
  </section>

  <section>
    <h2>🔚 Conclusion</h2>
    <p>Both Project Reactor and RxJava provide powerful tools for reactive programming. While Reactor is the go-to choice for Spring developers, RxJava remains a popular library for more general-purpose Java applications.</p>

    <p>Whether you're building an enterprise-grade system or just experimenting with asynchronous data, understanding and using reactive programming will significantly improve the responsiveness and scalability of your application.</p>

    <p>Have questions or need more examples? Drop a comment below!</p>
  </section>

</body>
</html>
  `},ok={id:"java_a115",title:"Building a Reactive REST API with Spring WebFlux and Project Reactor",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Non-blocking REST API","Project Reactor","Java WebFlux","Java Reactive Systems","Spring WebFlux","Reactive Programming Java","Spring Boot","Spring WebFlux Tutorial","Building REST APIs","Reactive REST API"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Building a Reactive REST API with Spring WebFlux and Project Reactor</title>
  <meta name="description" content="Learn how to build a scalable and non-blocking REST API using Spring WebFlux and Project Reactor. Perfect for high-performance applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>In modern application development, especially for scalable, high-performance systems, reactive programming has become an essential paradigm. With the help of tools like **Spring WebFlux** and **Project Reactor**, you can build efficient, non-blocking, and asynchronous REST APIs. This blog post will guide you through creating a **Reactive REST API** using **Spring WebFlux** and **Project Reactor**.</p>

  <section>
    <h2>🌍 What is Reactive Programming?</h2>
    <p>Reactive programming allows you to write code that reacts to asynchronous data streams. Instead of waiting for each task to complete before moving on to the next, reactive programming handles tasks concurrently and asynchronously. This is especially useful when building scalable, high-performance systems like REST APIs.</p>

    <p>The core components of reactive programming are:</p>
    <ul>
      <li><strong>Observable Streams</strong>: Data that is emitted asynchronously.</li>
      <li><strong>Operators</strong>: Functions that help manipulate and transform streams.</li>
      <li><strong>Backpressure</strong>: Handling situations when a producer generates data faster than the consumer can handle.</li>
    </ul>
  </section>

  <section>
    <h2>🔧 Setting Up Spring WebFlux</h2>
    <p>Before we dive into coding, let’s set up our project. You can use **Spring Boot** with **Spring WebFlux** for building your reactive REST API.</p>

    <h3>1. Set Up Spring Boot Project</h3>
    <p>Head over to <a href="https://start.spring.io" target="_blank">Spring Initializr</a> and create a new Spring Boot project with the following dependencies:</p>
    <ul>
      <li><strong>Spring WebFlux</strong></li>
      <li><strong>Spring Boot DevTools</strong></li>
      <li><strong>Project Lombok</strong> (for reducing boilerplate code)</li>
      <li><strong>Spring Data MongoDB</strong> (optional, for database integration)</li>
    </ul>
    <p>Download and unzip the project, then open it in your favorite IDE.</p>

    <h3>2. Add Dependencies in pom.xml</h3>
    <pre>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-webflux&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-mongodb&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>
  </section>

  <section>
    <h2>👨‍💻 Building the Reactive Controller</h2>
    <p>Now that our project is set up, let’s build a **Reactive REST Controller**. We'll create an API for managing books in a library using **Project Reactor**'s <code>Mono</code> and <code>Flux</code> types to handle single and multiple values asynchronously.</p>

    <h3>1. Create a Book Model</h3>
    <pre>import lombok.Data;

@Data
public class Book {
    private String id;
    private String title;
    private String author;
}</pre>

    <h3>2. Create a Reactive Repository</h3>
    <p>Next, let’s create a repository to interact with the database in a reactive manner. We will use **MongoDB** for this example.</p>
    <pre>import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface BookRepository extends ReactiveMongoRepository<Book, String> {
}</pre>

    <h3>3. Build the Reactive Controller</h3>
    <pre>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public Flux<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public Mono<Book> addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}
</pre>

    <p>In the code above:</p>
    <ul>
      <li><code>@GetMapping</code> returns a <code>Flux</code>, which represents a stream of books.</li>
      <li><code>@PostMapping</code> accepts a <code>Mono</code>, representing a single book.</li>
    </ul>
  </section>

  <section>
    <h2>🔌 Running the Application</h2>
    <p>To run the application, simply run the <code>SpringApplication.run</code> method in your main class:</p>

    <pre>import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactiveApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReactiveApiApplication.class, args);
    }
}
</pre>

    <p>Once the application is running, you can interact with the API at:</p>
    <ul>
      <li>GET <code>/books</code> to fetch all books.</li>
      <li>POST <code>/books</code> to add a new book.</li>
    </ul>
    <p>You can test the API using **Postman** or **cURL**.</p>
  </section>

  <section>
    <h2>⚡ Key Features of Reactive REST API</h2>
    <ul>
      <li><strong>Non-blocking I/O:</strong> The API responds without blocking threads, allowing for high concurrency.</li>
      <li><strong>Backpressure Handling:</strong> Reactive APIs can deal with a situation where the consumer can't keep up with the rate of data production.</li>
      <li><strong>Scalability:</strong> Since the application doesn't block threads, it can scale efficiently with minimal hardware resources.</li>
    </ul>
  </section>

  <section>
    <h2>🔚 Conclusion</h2>
    <p>In this post, we’ve built a simple **Reactive REST API** using **Spring WebFlux** and **Project Reactor**. We explored how reactive programming helps with building non-blocking, scalable systems. With this setup, you can now handle large amounts of traffic in your applications without worrying about thread contention.</p>

    <p>Want to dive deeper into **WebFlux** or integrate other databases like **Cassandra** or **Redis**? Let me know in the comments!</p>
  </section>

</body>
</html>
  `},sk={id:"java_a116",title:"Java with AI",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["AI Development with Java","Java Neural Networks","Java and AI Integration","Java AI","Java Deep Learning","Java AI Frameworks","Java Machine Learning","Artificial Intelligence Java","AI Libraries in Java"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java with AI – How Java Developers Can Leverage Artificial Intelligence</title>
  <meta name="description" content="Explore how Java developers can use AI libraries and tools like Deeplearning4j, DL4J, and OpenAI integrations to build intelligent applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <p>AI isn't just for Python developers. With a strong ecosystem and enterprise-grade tooling, Java can also be a powerful ally in building intelligent applications. In this post, we'll explore the top libraries, use cases, and strategies for using Java in the world of Artificial Intelligence.</p>

  <section>
    <h2>🧠 Why Use Java for AI?</h2>
    <ul>
      <li><strong>Scalability</strong>: Java is known for its scalability and multithreading capabilities.</li>
      <li><strong>Tooling & Ecosystem</strong>: Java offers robust IDEs, frameworks, and deployment tools.</li>
      <li><strong>Enterprise Integration</strong>: Java is widely used in enterprise applications where AI is increasingly being embedded.</li>
    </ul>
  </section>

  <section>
    <h2>🔧 Popular AI Libraries in Java</h2>
    <ul>
      <li><strong>Deeplearning4j (DL4J)</strong>: Java’s most popular deep learning library.</li>
      <li><strong>ND4J</strong>: Scientific computing library (NumPy for Java).</li>
      <li><strong>Smile</strong>: Machine learning library with classical algorithms.</li>
      <li><strong>JavaCPP</strong>: Java bindings for native C++ libraries like TensorFlow or PyTorch.</li>
      <li><strong>JPMML</strong>: Java support for PMML models trained in Python/R.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Example: Basic Neural Network with Deeplearning4j</h2>
    <pre>import org.deeplearning4j.nn.conf.MultiLayerConfiguration;
import org.deeplearning4j.nn.conf.NeuralNetConfiguration;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;
import org.deeplearning4j.optimize.listeners.ScoreIterationListener;

MultiLayerConfiguration conf = new NeuralNetConfiguration.Builder()
    .list()
    .layer(0, new DenseLayer.Builder().nIn(4).nOut(3).activation(Activation.RELU).build())
    .layer(1, new OutputLayer.Builder(LossFunctions.LossFunction.NEGATIVELOGLIKELIHOOD)
        .nIn(3).nOut(3).activation(Activation.SOFTMAX).build())
    .build();

MultiLayerNetwork model = new MultiLayerNetwork(conf);
model.init();
model.setListeners(new ScoreIterationListener(10));</code></pre>

    <p>This snippet shows a basic configuration of a neural network using DL4J. It’s suitable for simple classification tasks like the Iris dataset.</p>
  </section>

  <section>
    <h2>🧩 Integrating AI APIs (e.g., OpenAI, Hugging Face)</h2>
    <p>Java can integrate with AI APIs like <strong>OpenAI</strong> using HTTP clients:</p>

    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.openai.com/v1/completions"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</code></pre>

    <p>This enables Java apps to use models like GPT-4 or Claude for summarization, chat, or code generation.</p>
  </section>

  <section>
    <h2>🚀 Use Cases of AI in Java Projects</h2>
    <ul>
      <li>💬 Chatbots for enterprise support</li>
      <li>📈 Predictive analytics in banking/finance</li>
      <li>🔍 Smart search and recommendations</li>
      <li>🧾 Document classification and OCR</li>
      <li>⚠️ Fraud detection using anomaly detection</li>
    </ul>
  </section>

  <section>
    <h2>🔮 Future of Java in AI</h2>
    <p>As AI continues to evolve, Java is well-positioned to handle mission-critical AI workloads, especially in sectors where security, maintainability, and performance are key. With the rise of GraalVM and cloud-native Java (Quarkus, Micronaut), building fast and reactive AI microservices is more accessible than ever.</p>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java might not be the first language that comes to mind for AI, but its tooling, ecosystem, and enterprise presence make it a solid choice. Whether you're integrating with powerful APIs or training models with DL4J, Java gives you the stability of a mature platform combined with the innovation of modern AI.</p>

    <p>🔥 Want a hands-on tutorial for AI + Java with Spring Boot? Or a real-world chatbot example? Let me know in the comments!</p>
  </section>

</body>
</html>
  `},ak={id:"java_a117",title:"Using OpenAI API in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["OpenAI API","Spring Boot OpenAI","Spring Boot AI","ChatGPT API Java","Java OpenAI Integration","OpenAI Java Client","OpenAI with Spring Boot"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Using OpenAI API in Spring Boot – Multi-Step Conversation</title>
  <meta name="description" content="Build a multi-turn chat endpoint in Spring Boot using OpenAI's API and test it with JUnit." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2c3e50;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #1a202c;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #3182ce;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>Want to build a Java backend that can hold a real conversation with OpenAI’s GPT model? Let’s go beyond single-turn prompts and add support for multi-turn chat using Spring Boot and the OpenAI API. We’ll also include a test that covers a 3–4 step conversation!</p>

  <h2>📦 Step 1: Maven Dependencies</h2>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
    &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>🧠 Step 2: ChatController.java</h2>
  <pre>package com.example.openai;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private static final String OPENAI_API_KEY = "your-openai-api-key";

    @PostMapping
    public String chat(@RequestBody List&lt;Map&lt;String, String&gt;&gt; messages) throws Exception {
        String formattedMessages = messages.stream()
            .map(msg -&gt; String.format("{\\"role\\": \\"%s\\", \\"content\\": \\"%s\\"}",
                    msg.get("role"), msg.get("content")))
            .collect(Collectors.joining(","));

        String requestBody = """
        {
          "model": "gpt-3.5-turbo",
          "messages": [%s]
        }
        """.formatted(formattedMessages);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + OPENAI_API_KEY)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}</pre>

  <h2>🧪 Step 3: JUnit Test – Multi-Turn Chat</h2>
  <pre>package com.example.openai;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class ChatControllerTest {

    @Test
    void testMultiStepChat() {
        RestTemplate restTemplate = new RestTemplate();

        String url = "http://localhost:8080/api/chat";

        List&lt;Map&lt;String, String&gt;&gt; conversation = new ArrayList&lt;&gt;();
        conversation.add(Map.of("role", "user", "content", "Hi, who are you?"));
        conversation.add(Map.of("role", "assistant", "content", "I'm an AI trained by OpenAI. How can I help?"));
        conversation.add(Map.of("role", "user", "content", "What's the capital of Germany?"));
        conversation.add(Map.of("role", "assistant", "content", "The capital of Germany is Berlin."));
        conversation.add(Map.of("role", "user", "content", "Is it a good place to visit?"));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;List&lt;Map&lt;String, String&gt;&gt;&gt; request = new HttpEntity&lt;&gt;(conversation, headers);

        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(url, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("Berlin") || response.getBody().toLowerCase().contains("yes"));
    }
}</pre>

  <h2>✅ Expected Result</h2>
  <p>You should get a response that continues the conversation naturally, like:</p>
  <pre>{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Yes, Berlin is a vibrant city with rich history and culture!"
      }
    }
  ]
}</pre>

  <h2>💡 Tips</h2>
  <ul>
    <li>Use a logging library to persist message history.</li>
    <li>Store your API key in <code>application.yml</code> securely.</li>
    <li>Add streaming response support with WebClient for real-time output.</li>
  </ul>

  <h2>📌 Conclusion</h2>
  <p>You now have a Spring Boot app that can maintain chat history and simulate real conversations with OpenAI’s Chat API. Expand this to a full chatbot, integrate into Slack, or embed in web apps!</p>

</body>
</html>
  `},lk={id:"java_a118",title:"Spring Boot with AI",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["AI with Spring Boot","Java ML","Spring Boot AI","Spring Boot Machine Learning","Java AI","ML with Spring Boot","AI Integration Java","REST API for AI"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Spring Boot with AI – Bringing Intelligence to Your Backend</title>
  <meta name="description" content="Learn how to integrate AI with Spring Boot using APIs like OpenAI and libraries like DL4J for intelligent applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <p>Spring Boot is a popular framework for building robust Java applications. What if we could add intelligence to those apps? With the rise of AI APIs and Java ML libraries, integrating AI into your backend is easier than ever.</p>

  <section>
    <h2>🤖 What Kind of AI Can You Add to Spring Boot?</h2>
    <ul>
      <li><a href="https://codejava4u.blogspot.com/2025/04/using-openai-api-in-spring-boot.html" target="_blank"><strong>Text Generation</strong> – ChatGPT-style prompts via OpenAI</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/sentiment-analysis-using-hugging-face.html" target="_blank"><strong>Sentiment Analysis</strong> – Using Hugging Face APIs</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/building-recommendation-system-in.html" target="_blank"><strong>Recommendation Systems</strong></a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/image-recognition-with-deep-learning.html" target="_blank"><strong>Image Recognition</strong> – With deep learning frameworks</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/voice-chatbots-ai-assisted.html" target="_blank"><strong>Voice & Chatbots</strong> – AI-assisted conversational apps</a></li>
    </ul>
  </section>

  <section>
    <h2>🔌 Example 1: Using OpenAI API in Spring Boot</h2>
    <h3>1. Add dependencies (Maven)</h3>
    <pre>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;</pre>

    <h3>2. Create a REST controller to call the AI API</h3>
    <pre>import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.net.http.HttpRequest.*;
import java.util.Map;

@RestController
@RequestMapping("/ai")
public class AiController {

    private static final String API_KEY = "your-openai-api-key";

    @PostMapping("/generate")
    public String generateText(@RequestBody Map&lt;String, String&gt; payload) throws Exception {
        String prompt = payload.get("prompt");

        String requestBody = """
            {
              "model": "gpt-3.5-turbo",
              "messages": [{"role": "user", "content": "%s"}]
            }
        """.formatted(prompt);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + API_KEY)
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
</pre>

    <h3>3. Test with cURL or Postman</h3>
    <pre>curl -X POST http://localhost:8080/ai/generate   -H "Content-Type: application/json"   -d '{"prompt": "Write a Java joke."}'</pre>
  </section>

  <section>
    <h2>🧠 Example 2: Sentiment Analysis Using Hugging Face API</h2>
    <p>You can use the Hugging Face Inference API similarly to analyze sentiment.</p>
    <pre>HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english"))
    .header("Authorization", "Bearer YOUR_HF_API_KEY")
    .POST(HttpRequest.BodyPublishers.ofString("{"inputs": "This product is amazing!"}"))
    .build();</pre>
  </section>

  <section>
    <h2>🧮 Example 3: Train Your Own ML Model (Deeplearning4j)</h2>
    <p>Want to train a model right inside your Java app? Use DL4J (Deeplearning4j):</p>
    <pre>// Configure a neural network
MultiLayerConfiguration conf = new NeuralNetConfiguration.Builder()
  .list()
  .layer(new DenseLayer.Builder().nIn(10).nOut(5).build())
  .layer(new OutputLayer.Builder().nIn(5).nOut(2).build())
  .build();
</pre>
    <p>Train the model and expose it via a Spring Boot REST endpoint.</p>
  </section>

  <section>
    <h2>💡 Real-World Use Cases for Spring + AI</h2>
    <ul>
      <li>🛍 E-commerce: Product recommendations, smart search</li>
      <li>🏦 FinTech: Fraud detection, predictive analysis</li>
      <li>📞 Customer Support: Chatbots and voice assistants</li>
      <li>📃 Docs & Content: Summarization, translation, classification</li>
    </ul>
  </section>

  <section>
    <h2>📦 Bonus: Spring AI Project (Preview)</h2>
    <p><strong>Spring AI</strong> is an experimental project from the Spring team that makes it easier to integrate LLMs into Spring Boot apps. Stay tuned!</p>
    <p>GitHub: <a href="https://github.com/spring-projects/spring-ai" target="_blank">spring-projects/spring-ai</a></p>
  </section>

  <section>
    <h2>🧭 Conclusion</h2>
    <p>Spring Boot is a rock-solid platform for building backends, and now with AI integrations, it’s also smart. Whether you’re consuming APIs like OpenAI or training models yourself with DL4J, Java devs have powerful tools to build intelligent apps at scale.</p>
    <p>🔥 Want to see a chatbot with Spring Boot and WebSocket? Or a LangChain-style app in Java? Let me know!</p>
  </section>

</body>
</html>
  `},ck={id:"java_a119",title:"Sentiment Analysis Using Hugging Face API in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Hugging Face Java","Java Sentiment Analysis","Hugging Face Integration","NLP with Spring Boot","Hugging Face API","Sentiment Analysis","AI in Spring Boot","Spring Boot Sentiment Analysis"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sentiment Analysis Using Hugging Face API in Spring Boot</title>
  <meta name="description" content="Learn how to use Hugging Face’s Sentiment Analysis models in your Spring Boot app and expose a simple REST API for sentiment analysis." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>In this post, we'll demonstrate how to perform sentiment analysis using Hugging Face's pre-trained models in a Spring Boot application. The app will expose a simple REST API endpoint where users can submit text, and the API will return whether the sentiment of the text is positive or negative.</p>

  <h2>📦 Step 1: Maven Dependencies</h2>
  <p>To get started, we'll add the necessary dependencies to our <code>pom.xml</code> file for Spring Boot and HTTP client support:</p>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>⚡ Step 2: Controller for Sentiment Analysis</h2>
  <p>In this step, we will create a Spring Boot <code>RestController</code> that will handle the sentiment analysis requests. It will communicate with the Hugging Face API to analyze the text.</p>
  <pre>package com.example.huggingface;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;

@RestController
@RequestMapping("/api/sentiment")
public class SentimentController {

    private static final String HF_TOKEN = "your-huggingface-api-token";
    private static final String MODEL_ID = "distilbert-base-uncased-finetuned-sst-2-english"; // Hugging Face model for sentiment analysis

    @PostMapping
    public String analyzeSentiment(@RequestBody String text) throws Exception {
        String requestBody = "{ "inputs": "" + text.replace(""", "\\"") + "" }";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-inference.huggingface.co/models/" + MODEL_ID))
            .header("Authorization", "Bearer " + HF_TOKEN)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}</pre>

  <h2>🔑 Hugging Face Model Selection</h2>
  <p>For sentiment analysis, we’re using the <code>distilbert-base-uncased-finetuned-sst-2-english</code> model from Hugging Face. This model is fine-tuned specifically for sentiment analysis (positive or negative) on the SST-2 dataset, but you can choose other models if needed.</p>
  <ul>
    <li><a href="https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english">distilbert-base-uncased-finetuned-sst-2-english</a></li>
    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
  </ul>

  <h2>🧪 Step 3: Writing the Test Case</h2>
  <p>Let's write a simple JUnit test to ensure our sentiment analysis API works correctly.</p>
  <pre>package com.example.huggingface;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class SentimentControllerTest {

    @Test
    void testSentimentAnalysis() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/sentiment";

        String text = "I love using Hugging Face models! They are amazing!";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(text, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(url, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().toLowerCase().contains("positive"));
    }
}</pre>

  <h2>📌 Sample Response</h2>
  <p>When you send a request with the text "I love using Hugging Face models! They are amazing!", you should get a response indicating that the sentiment is positive:</p>
  <pre>[
  {
    "label": "POSITIVE",
    "score": 0.9998547439575195
  }
]</pre>

  <h2>💡 Tips for Improvement</h2>
  <ul>
    <li>Use the Hugging Face API’s <code>multi-class</code> classification for more nuanced sentiment analysis (e.g., Happy, Sad, Angry, etc.)</li>
    <li>Store your API token in a secure location (like environment variables or Spring's <code>application.yml</code>)</li>
    <li>Use <code>WebClient</code> in Spring for asynchronous requests if the model takes longer than usual to respond</li>
  </ul>

  <h2>🎉 Conclusion</h2>
  <p>By following this tutorial, you've successfully built a Spring Boot API that integrates with Hugging Face's powerful NLP models for sentiment analysis. This could easily be expanded to classify text sentiment in real-world applications like reviews, social media, or customer feedback.</p>

  <p>Feel free to explore Hugging Face's library for other models suited to your needs!</p>

</body>
</html>
  `},uk={id:"java_a120",title:"Building a Recommendation System in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Personalized Recommendations","Machine Learning Recommenders","Collaborative Filtering","Recommendation Systems","AI Recommendation Systems","Java Recommendation Systems","Recommender Algorithms","Content-Based Filtering"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Building a Recommendation System in Spring Boot</title>
  <meta name="description" content="Learn how to build a simple content-based recommendation system using Spring Boot and Hugging Face API to recommend items based on user preferences or content similarity." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Recommendation systems are widely used in platforms like Netflix, Amazon, and Spotify to suggest relevant content to users. In this post, we will learn how to build a simple **content-based recommendation system** using **Spring Boot** and **Hugging Face API**.</p>

  <h2>💡 What is a Content-Based Recommendation System?</h2>
  <p>Content-based filtering recommends items based on their features and the preferences of users. For example, it might recommend movies similar to a user's watched movie based on genre, director, or actors.</p>
  <ul>
    <li>**User preferences**: What the user likes (e.g., genres, artists, topics, etc.)</li>
    <li>**Item features**: Information about items (e.g., movie plots, product descriptions, etc.)</li>
  </ul>

  <h2>📦 Step 1: Setup Spring Boot Project</h2>
  <p>Let’s start by adding necessary dependencies in our <code>pom.xml</code>:</p>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>🔨 Step 2: Building the Recommendation Controller</h2>
  <p>We will create a Spring Boot controller that handles incoming requests for recommendations. We’ll use text similarity (cosine similarity or embeddings) to recommend similar content to the user.</p>
  <pre>package com.example.recommendation;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {

    private static final String HF_TOKEN = "your-huggingface-api-token";
    private static final String MODEL_ID = "sentence-transformers/all-MiniLM-L6-v2";  // Model to generate embeddings

    @PostMapping
    public List&lt;String&gt; getRecommendations(@RequestBody String userPreferences) throws Exception {
        // Use Hugging Face model to generate embeddings for user input and item descriptions
        String requestBody = "{ "inputs": "" + userPreferences.replace(""", "\\"") + "" }";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-inference.huggingface.co/models/" + MODEL_ID))
            .header("Authorization", "Bearer " + HF_TOKEN)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Get recommendations based on cosine similarity between embeddings (simplified here)
        List&lt;String&gt; recommendedItems = generateRecommendations(response.body());

        return recommendedItems;
    }

    private List&lt;String&gt; generateRecommendations(String response) {
        // Here we would process the embeddings and match with item features.
        // In a real-world scenario, you'd compare embeddings to a database of items.
        // For simplicity, we return some static recommendations.
        return Arrays.asList("Item 1", "Item 2", "Item 3", "Item 4");
    }
}</pre>

  <h2>🔑 Hugging Face Model Selection</h2>
  <p>In the above code, we are using the <code>sentence-transformers/all-MiniLM-L6-v2</code> model, which is designed for generating embeddings from text. This model converts text (such as user preferences or item descriptions) into numerical vectors, which can then be compared to recommend similar items.</p>
  <ul>
    <li><a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2">sentence-transformers/all-MiniLM-L6-v2</a></li>
    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
  </ul>

  <h2>🧪 Step 3: Writing the Test Case</h2>
  <p>Next, let's write a simple JUnit test to verify that our recommendation system works as expected.</p>
  <pre>package com.example.recommendation;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class RecommendationControllerTest {

    @Test
    void testGetRecommendations() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/recommendations";

        String userPreferences = "I love action movies with superheroes and thrillers";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(userPreferences, headers);
        ResponseEntity&lt;List&lt;String&gt;&gt; response = restTemplate.exchange(url, HttpMethod.POST, request, List.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().size() > 0);
    }
}</pre>

  <h2>📌 Sample Response</h2>
  <p>Once you call the recommendation API with the preferences text, the system should return a list of recommended items:</p>
  <pre>[
  "Item 1: Avengers: Endgame",
  "Item 2: The Dark Knight",
  "Item 3: Iron Man",
  "Item 4: Spider-Man: No Way Home"
]</pre>

  <h2>💡 Tips for Further Improvement</h2>
  <ul>
    <li>Instead of static recommendations, store item descriptions in a database and compare the embeddings for better results.</li>
    <li>Use more sophisticated recommendation models such as collaborative filtering in addition to content-based filtering.</li>
    <li>Consider implementing personalization by incorporating user profiles or historical behavior for improved recommendations.</li>
  </ul>

  <h2>🎉 Conclusion</h2>
  <p>Congratulations! You’ve now built a basic recommendation system that suggests items based on content similarity using Spring Boot and Hugging Face’s APIs. This approach can be extended to build more complex systems by incorporating features such as collaborative filtering, matrix factorization, and deep learning models.</p>

  <p>Feel free to explore the Hugging Face API to discover more advanced models for text similarity and recommendation systems!</p>

</body>
</html>
  `},dk={id:"java_a121",title:"Image Recognition with Deep Learning Frameworks",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Image Classification","TensorFlow Image Recognition","CNN Models","Deep Learning Frameworks","AI Image Processing","Image Recognition","Computer Vision","PyTorch Image Recognition","Deep Learning"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Image Recognition with Deep Learning Frameworks</title>
  <meta name="description" content="Learn how to build an image recognition system using deep learning frameworks like TensorFlow and PyTorch, with Java and Python integration." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Image recognition is at the heart of many real-world AI applications—from facial recognition to autonomous vehicles. In this post, we'll walk through building an image recognition system using Python-based deep learning frameworks like TensorFlow and PyTorch. We'll also touch on integrating it with a Java backend using REST APIs.</p>

  <h2>🚀 Tools & Frameworks</h2>
  <ul>
    <li><strong>TensorFlow / PyTorch</strong> – for deep learning model development</li>
    <li><strong>Flask</strong> – for serving the model as an API</li>
    <li><strong>Java (Spring Boot)</strong> – to consume the image recognition service</li>
  </ul>

  <h2>🧰 Step 1: Training or Using a Pretrained Model</h2>
  <p>We'll use a pretrained model like <code>ResNet50</code> from TensorFlow or PyTorch's torchvision.</p>

  <h3>🧠 Using ResNet50 with TensorFlow</h3>
  <pre>import tensorflow as tf
from tensorflow.keras.applications import resnet50
from tensorflow.keras.preprocessing import image
import numpy as np

model = resnet50.ResNet50(weights='imagenet')

def predict_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = resnet50.preprocess_input(x)
    preds = model.predict(x)
    return resnet50.decode_predictions(preds, top=3)[0]</pre>

  <h2>🌐 Step 2: Serving the Model via Flask</h2>
  <p>Wrap the model into a REST API using Flask:</p>

  <pre>from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    file.save("input.jpg")
    preds = predict_image("input.jpg")
    return jsonify(preds)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</pre>

  <h2>☕ Step 3: Consuming API from Java (Spring Boot)</h2>
  <p>Send an image file to the Flask service from your Spring Boot app:</p>

  <pre>@RestController
public class ImageController {

    @PostMapping("/analyze")
    public String analyzeImage() throws IOException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap&lt;String, Object&gt; body = new LinkedMultiValueMap&lt;&gt;();
        body.add("file", new FileSystemResource("src/main/resources/image.jpg"));

        HttpEntity&lt;MultiValueMap&lt;String, Object&gt;&gt; requestEntity = new HttpEntity&lt;&gt;(body, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity("http://localhost:5000/predict", requestEntity, String.class);

        return response.getBody();
    }
}</pre>

  <h2>📷 Try It Out</h2>
  <ul>
    <li>Download any sample image (e.g., cat, car, etc.)</li>
    <li>Start the Flask server: <code>python app.py</code></li>
    <li>Run your Spring Boot app</li>
    <li>Call the endpoint: <code>POST /analyze</code></li>
  </ul>

  <h2>💡 Optional: PyTorch Alternative</h2>
  <p>Here's how you can use PyTorch for the same task:</p>
  <pre>from torchvision import models, transforms
from PIL import Image
import torch

model = models.resnet50(pretrained=True)
model.eval()

def predict(img_path):
    img = Image.open(img_path)
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
    ])
    img_tensor = transform(img).unsqueeze(0)
    output = model(img_tensor)
    probs = torch.nn.functional.softmax(output[0], dim=0)
    return probs.topk(3)</pre>

  <h2>📌 Use Cases</h2>
  <ul>
    <li>Retail: Product image recognition</li>
    <li>Security: Surveillance & facial recognition</li>
    <li>Healthcare: Medical image diagnosis</li>
    <li>Automotive: Road sign & obstacle detection</li>
  </ul>

  <h2>🎯 Conclusion</h2>
  <p>We’ve successfully built an image recognition pipeline using deep learning frameworks and integrated it into a Java-based system via REST APIs. This hybrid approach lets you use Python’s ML ecosystem and Java’s backend power together.</p>

  <p>Next steps? Try adding custom models or real-time streaming input!</p>

</body>
</html>
  `},hk={id:"java_a122",title:"Voice & Chatbots – AI-Assisted Conversational Apps",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Voice AI","AI Chatbots","AI in Communication","Chatbots","Voice Assistants","Conversational AI","Virtual Assistants","Chatbot Development","Speech Recognition AI","NLP Applications"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Voice & Chatbots – AI-Assisted Conversational Apps</title>
  <meta name="description" content="Explore how to build voice and chatbot-based conversational applications using AI tools like OpenAI and Dialogflow with Java and Spring Boot." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Conversational AI has transformed the way users interact with applications. From customer service bots to voice-based virtual assistants, building intelligent chat interfaces is easier than ever with tools like OpenAI, Dialogflow, and Spring Boot. In this article, we'll look at how to design, implement, and integrate chatbot and voice assistants into your apps.</p>

  <h2>🚀 Why Conversational Interfaces?</h2>
  <ul>
    <li>Improve user experience with natural interaction</li>
    <li>Automate FAQs, bookings, and support</li>
    <li>Enable voice control for accessibility and IoT</li>
  </ul>

  <h2>🧠 Tools for AI-Powered Conversations</h2>
  <ul>
    <li><strong>OpenAI GPT (ChatGPT API)</strong> – Natural language understanding & generation</li>
    <li><strong>Dialogflow</strong> – NLP + multi-channel chatbot development</li>
    <li><strong>Spring Boot</strong> – Backend framework to integrate services</li>
    <li><strong>Twilio / Web Speech API</strong> – For voice-based interaction</li>
  </ul>

  <h2>💬 Chatbot with OpenAI + Spring Boot</h2>
  <p>Using the <code>/v1/chat/completions</code> endpoint from OpenAI, you can create an intelligent chatbot easily.</p>

  <h3>🧩 Sample Java Service</h3>
  <pre>@Service
public class ChatService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String askGPT(String userMessage) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth("YOUR_OPENAI_API_KEY");

        Map&lt;String, Object&gt; body = Map.of(
            "model", "gpt-3.5-turbo",
            "messages", List.of(
                Map.of("role", "user", "content", userMessage)
            )
        );

        HttpEntity&lt;Map&lt;String, Object&gt;&gt; request = new HttpEntity&lt;&gt;(body, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(
            "https://api.openai.com/v1/chat/completions",
            request,
            String.class
        );

        // Parse and return assistant's response
        return response.getBody(); // Simplified
    }
}</pre>

  <h3>💡 Example Controller</h3>
  <pre>@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/chat")
    public String chat(@RequestBody String userMessage) {
        return chatService.askGPT(userMessage);
    }
}</pre>

  <h2>🧠 Voice Input with Web Speech API (Browser-side)</h2>
  <pre>&lt;script&gt;
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    sendToBackend(text);
  };
  recognition.start();
&lt;/script&gt;</pre>

  <h2>📞 Voice Bot with Twilio</h2>
  <p>You can use Twilio to build a programmable voice assistant that connects with your GPT backend.</p>
  <pre>// In Twilio Function
exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say("Hello! Please ask your question after the beep.");
  twiml.record({
    transcribe: true,
    transcribeCallback: '/transcribe',
    maxLength: 30
  });
  callback(null, twiml);
};</pre>

  <h2>🤖 Alternative: Dialogflow Integration</h2>
  <p>Dialogflow supports rich conversation design, built-in NLP, and deployment on platforms like WhatsApp, Slack, and web.</p>
  <ul>
    <li>Create an agent in Dialogflow</li>
    <li>Train intents and responses</li>
    <li>Connect via Webhook to Spring Boot</li>
  </ul>

  <h2>🔌 Example Dialogflow Webhook</h2>
  <pre>@PostMapping("/dialogflow-webhook")
public Map&lt;String, Object&gt; handleWebhook(@RequestBody Map&lt;String, Object&gt; request) {
    String queryText = ((Map&lt;String, Object&gt;) request.get("queryResult")).get("queryText").toString();
    String reply = chatService.askGPT(queryText);
    return Map.of("fulfillmentText", reply);
}</pre>

  <h2>✅ Summary</h2>
  <ul>
    <li>Use GPT APIs for powerful free-form conversation</li>
    <li>Use Dialogflow for structured chatbot flows</li>
    <li>Use Twilio + Speech APIs for voice input/output</li>
    <li>Java (Spring Boot) serves as a powerful orchestrator</li>
  </ul>

  <h2>🔮 What’s Next?</h2>
  <ul>
    <li>Build a chatbot to integrate with customer support tickets</li>
    <li>Train your model with domain-specific FAQs</li>
    <li>Add text-to-speech for accessibility</li>
  </ul>

  <p>🎉 Let’s make Java apps more conversational!</p>

</body>
</html>
  `},pk={id:"java_a123",title:"Real-Time Camera Input for Image Recognition",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Deep Learning Camera","Real-Time Object Detection","Image Recognition Java","Real-Time Image Recognition","Live Image Processing","AI with Webcam","Computer Vision","Camera Input AI"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Real-Time Camera Input for Image Recognition</title>
  <meta name="description" content="Build an AI-powered image recognition system using real-time camera input via browser and Python-based deep learning." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    video, canvas {
      border: 2px solid #ccc;
      border-radius: 8px;
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      background: #2b6cb0;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #2c5282;
    }
  </style>
</head>
<body>

  <p>Imagine pointing your webcam at an object and instantly getting a prediction of what it is—just like Google Lens! In this guide, we’ll connect your browser's camera to a backend AI model built using TensorFlow or PyTorch, all in real-time.</p>

  <h2>🔧 Tech Stack</h2>
  <ul>
    <li><strong>HTML5 + JavaScript</strong> – to access webcam and capture frames</li>
    <li><strong>Flask</strong> (Python) – to serve the model and process images</li>
    <li><strong>TensorFlow or PyTorch</strong> – for the image classification model</li>
  </ul>

  <h2>🎬 Step 1: HTML + JS for Webcam Input</h2>
  <p>Use the <code>getUserMedia()</code> API to stream webcam video, and capture frames as images.</p>

  <pre>&lt;video id="video" width="480" height="360" autoplay&gt;&lt;/video&gt;
&lt;canvas id="canvas" width="480" height="360" style="display:none;"&gt;&lt;/canvas&gt;
&lt;br&gt;
&lt;button onclick="captureImage()"&gt;📷 Capture & Analyze&lt;/button&gt;
&lt;p id="result"&gt;&lt;/p&gt;

&lt;script&gt;
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream =&gt; { video.srcObject = stream; });

  function captureImage() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(blob =&gt; {
      const formData = new FormData();
      formData.append('file', blob, 'frame.jpg');

      fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      })
      .then(response =&gt; response.json())
      .then(data =&gt; {
        document.getElementById('result').innerText = "🔍 Prediction: " + data[0][1];
      });
    }, 'image/jpeg');
  }
&lt;/script&gt;</pre>

  <h2>🧠 Step 2: Flask Backend with AI Model</h2>
  <p>This Python backend uses <code>ResNet50</code> to classify the uploaded frame.</p>

  <pre>from flask import Flask, request, jsonify
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
model = ResNet50(weights='imagenet')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    file_path = 'temp.jpg'
    file.save(file_path)

    img = image.load_img(file_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    preds = model.predict(x)

    os.remove(file_path)
    return jsonify(decode_predictions(preds, top=3)[0])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</pre>

  <h2>🧪 Testing It Out</h2>
  <ol>
    <li>Start your Python server: <code>python app.py</code></li>
    <li>Open the HTML file in your browser (localhost or deploy)</li>
    <li>Allow camera access and click <strong>Capture & Analyze</strong></li>
    <li>See the object prediction result instantly!</li>
  </ol>

  <h2>🎯 Use Cases</h2>
  <ul>
    <li>Retail – Identify product SKUs visually</li>
    <li>Education – Real-time object identification</li>
    <li>Healthcare – Medical object detection</li>
    <li>Manufacturing – Real-time defect recognition</li>
  </ul>

  <h2>💡 Bonus Ideas</h2>
  <ul>
    <li>Use YOLO or MobileNet for object detection (not just classification)</li>
    <li>Stream predictions continuously while the video plays</li>
    <li>Build a full-stack app with Spring Boot as the orchestrator</li>
  </ul>

  <p>Now your browser is a real-time AI-powered lens! 📸</p>

</body>
</html>
  `},fk={id:"java_a124",title:"Virtual Threads (Project Loom)",author:"Hemant Kumar",date:"2025-04-13",category:"Java",keywords:["Java 21 Features","Lightweight Threads","Virtual Threads","Project Loom Java","Project Loom","Java Virtual Threads","Java Scalability","Java Concurrency","Java Threading Model"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Virtual Threads (Project Loom) – Lightweight Concurrency in Java</title>
  <meta name="description" content="Explore Virtual Threads from Project Loom in Java – Lightweight, scalable concurrency for modern applications." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <p>
    Java 21 brings one of the most awaited concurrency updates – <strong>Virtual Threads</strong> from <em>Project Loom</em>.
    Designed to dramatically reduce the complexity and resource cost of multithreaded programming, virtual threads enable
    scalable, high-throughput applications without complicated thread management.
  </p>

  <h2>🚀 What are Virtual Threads?</h2>

  <p>
    Virtual threads are <strong>lightweight threads</strong> managed by the Java Virtual Machine (JVM), not the OS.
    Unlike platform (or "native") threads, virtual threads use minimal memory and can scale to millions of concurrent tasks.
  </p>

  <ul>
    <li>✅ Lightweight</li>
    <li>✅ Non-blocking friendly</li>
    <li>✅ Familiar API (same <code>Thread</code> class)</li>
  </ul>

  <h2>✨ Why They Matter</h2>
  <p>
    Traditional Java threads are costly in memory (1MB+ per thread) and limited in scalability.
    With virtual threads, you can handle massive I/O-bound workloads using simple, synchronous-style code.
  </p>

  <h2>🛠️ Using Virtual Threads</h2>

  <h3>🔹 Basic Example</h3>

  <pre>public class VirtualThreadExample {
    public static void main(String[] args) {
        Runnable task = () -&gt; {
            System.out.println("Running on: " + Thread.currentThread());
        };

        Thread.startVirtualThread(task);
    }
}</pre>

  <p>
    This uses <code>Thread.startVirtualThread()</code> to create a virtual thread. It's as easy as working with normal threads.
  </p>

  <h3>🔹 Spawning Thousands</h3>

  <pre>public class VirtualThreadMassive {
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i &lt; 10_000; i++) {
            Thread.startVirtualThread(() -&gt; {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }

        Thread.sleep(2000);
        System.out.println("Done");
    }
}</pre>

  <p>
    You can spawn tens or hundreds of thousands of virtual threads without choking the JVM.
  </p>

  <h2>⚖️ Comparison: Platform vs Virtual Threads</h2>

  <table border="1" cellpadding="6" cellspacing="0">
    <thead>
      <tr><th>Feature</th><th>Platform Thread</th><th>Virtual Thread</th></tr>
    </thead>
    <tbody>
      <tr><td>Backed By</td><td>OS thread</td><td>JVM-managed</td></tr>
      <tr><td>Memory Overhead</td><td>~1MB</td><td>~a few KB</td></tr>
      <tr><td>Blocking APIs</td><td>Expensive</td><td>Handled efficiently</td></tr>
      <tr><td>Use Case</td><td>CPU-bound tasks</td><td>I/O-bound & massive concurrency</td></tr>
    </tbody>
  </table>

  <h2>📦 Thread Executors with Virtual Threads</h2>

  <pre>ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();

executor.submit(() -&gt; {
    System.out.println("Hello from virtual thread!");
});
executor.shutdown();</pre>

  <p>
    Java 21 introduces <code>Executors.newVirtualThreadPerTaskExecutor()</code> – ideal for apps like web servers or reactive pipelines.
  </p>

  <h2>🚧 Gotchas</h2>
  <ul>
    <li>Avoid thread-local-heavy code – virtual threads may not persist on the same carrier thread.</li>
    <li>Blocking native code (e.g., database drivers) may still cause thread pinning.</li>
    <li>Proper structured concurrency is recommended for managing lifecycle.</li>
  </ul>

  <h2>🎯 Use Cases</h2>
  <ul>
    <li>REST APIs handling thousands of requests</li>
    <li>Real-time chat systems</li>
    <li>Batch processing</li>
    <li>Message-driven microservices</li>
  </ul>

  <h2>🧪 Testing Virtual Threads</h2>
  <p>
    You can test virtual thread usage via:
  </p>
  <pre>System.out.println(Thread.currentThread().isVirtual());</pre>

  <h2>🔚 Conclusion</h2>
  <p>
    Virtual Threads in Java 21 simplify concurrency without sacrificing performance. They’re ideal for modern server-side
    development, enabling you to write straightforward, blocking-style code that scales like async.
  </p>

  <p>
    Try them out in your next Spring Boot service or REST API to boost scalability with minimal complexity!
  </p>

</body>
</html>
  `},mk={id:"ai_a101",title:"AI and Mid-Level Management: A New Era or a Threat?",author:"Hemant Kumar",date:"2025-04-22",category:"AI",keywords:["AI in Management","Mid-Level Management","AI and Jobs","Future of Work","AI Workplace Impact","Management Automation","AI Business Strategy","Middle Management Disruption"],content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI and Mid-Level Management: A New Era or a Threat?</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 960px;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
      background-color: #f9fafb;
    }
    h1, h2, h3 {
      color: #1a202c;
    }
    h1 {
      font-size: 2.2rem;
    }
    h2 {
      margin-top: 2rem;
    }
    p, ul {
      line-height: 1.7;
      margin-bottom: 1.2rem;
    }
    ul {
      padding-left: 1.2rem;
    }
    li {
      margin-bottom: 0.8rem;
    }
    em {
      color: #4a5568;
    }
  </style>
</head>
<body>

  <h1>AI and Mid-Level Management: A New Era or a Threat to the Middle Layer?</h1>

  <p>There’s no denying it—AI is reshaping how we work. As someone who’s been in the tech industry for over a decade, I’ve seen disruptive technologies come and go. But AI, especially in its current form, feels different. It’s not just automating repetitive tasks; it’s starting to think, analyze, and make decisions. And that puts a very specific layer of the corporate structure under pressure: mid-level management.</p>

  <h2>The Traditional Role of Mid-Level Managers</h2>
  <p>Mid-level managers have always played a crucial role in organizations. They translate high-level strategy into actionable plans, manage teams, coordinate cross-functional efforts, ensure deadlines are met, and keep everyone aligned. They're often the glue that holds the operations together.</p>
  <p>But here’s the thing: a lot of that coordination, reporting, and even decision-making is starting to get automated.</p>

  <h2>So What’s Changing?</h2>
  <p>Let’s look at a real-world scenario. Imagine a company that relies on regional managers to consolidate sales reports from multiple cities. In the past, this meant hours spent pulling data, formatting spreadsheets, generating summaries, and making decisions based on trends. Today? A well-tuned AI system can generate those reports in real time, with predictive analysis layered on top. Suddenly, the regional manager's report-prepping role becomes redundant.</p>

  <p>But it doesn’t stop there. AI tools are starting to:</p>
  <ul>
    <li>Assign tasks based on team performance data</li>
    <li>Monitor KPIs and raise alerts when targets are off-track</li>
    <li>Recommend optimization strategies based on real-time metrics</li>
    <li>Schedule meetings, manage calendars, and send follow-ups</li>
  </ul>

  <h2>Should Mid-Level Managers Be Worried?</h2>
  <p><strong>Honestly? Yes and no.</strong></p>
  <p>Yes—if they continue doing things the same way they did 5 years ago.<br/>
  No—if they recognize the shift and evolve.</p>
  <p>AI won’t replace humans wholesale, but it will replace roles that don’t adapt. Mid-level managers who rely solely on process control, report gathering, or people-herding are the most vulnerable. However, those who step into more strategic, creative, and people-centric responsibilities will remain not only relevant, but indispensable.</p>

  <h2>How Can Mid-Level Managers Adapt?</h2>

  <h3>1. Shift from Managing Tasks to Leading People</h3>
  <p>AI can organize tasks, but it can’t (yet) understand people’s fears, motivations, and aspirations. Emotional intelligence, mentorship, and conflict resolution are skills that are becoming even more important.</p>

  <h3>2. Become the Translator Between Tech and Business</h3>
  <p>Many executives don’t speak the language of machine learning models or data pipelines. Someone needs to bridge that gap. Mid-level managers can become that interface—translating technical insights from AI into business decisions and vice versa.</p>

  <h3>3. Champion Change, Don’t Resist It</h3>
  <p>Instead of fearing automation, embrace it. Lead AI adoption efforts. Be the first to experiment with AI-driven tools. When your team sees you bringing in smarter ways of working, you gain relevance.</p>

  <h3>4. Double Down on Strategy and Vision</h3>
  <p>With AI handling the grunt work, managers have more bandwidth to think ahead. Focus on long-term planning, process innovation, and value creation.</p>

  <h3>5. Upskill. Constantly.</h3>
  <p>You don’t need to become a data scientist, but understanding AI fundamentals, data interpretation, and digital transformation basics is a must.</p>

  <h2>Real-World Example: From Project Manager to Change Architect</h2>
  <p>Take the case of a project manager at a logistics firm. When AI tools began optimizing routes and handling delivery scheduling, his initial role started to shrink. But instead of resisting the shift, he began coordinating the company’s AI integration initiatives. He trained teams, collected feedback, and worked with leadership to refine workflows. Within a year, he was promoted to a new role: <em>Change Architect</em>—someone responsible for digital transformation. His salary went up, and so did his impact.</p>

  <h2>Final Thoughts</h2>
  <p>AI isn’t here to eliminate mid-level management. It’s here to force an evolution. For those willing to adapt, the role becomes more interesting, more strategic, and frankly, more human. The managers who will thrive are the ones who let go of the clipboard and lean into creativity, connection, and critical thinking.</p>

  <p><em>Because in the end, AI may run the systems—but it still takes people to lead the way forward.</em></p>

</body>
</html>
    `},gb={java_a101:JR,java_a102:qR,java_a103:WR,java_a104:KR,java_a105:GR,java_a106:QR,java_a107:YR,java_a108:XR,java_a109:ZR,java_a110:ek,java_a111:tk,java_a112:nk,java_a113:rk,java_a114:ik,java_a115:ok,java_a116:sk,java_a117:ak,java_a118:lk,java_a119:ck,java_a120:uk,java_a121:dk,java_a122:hk,java_a123:pk,java_a124:fk,ai_a101:mk},gk=t=>gb[t],ym=()=>Object.values(gb).sort((t,e)=>{const n=new Date(t.date).getTime();return new Date(e.date).getTime()-n}),Cp=t=>{const n=t.replace(/<[^>]+>/g,"").length;return Math.ceil(n/1125)};var _v={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},vb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=o>>2,h=(o&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,s||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||h==null)throw new vk;const d=o<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const w=c<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wk=function(t){const e=yb(t);return vb.encodeByteArray(e,!0)},$c=function(t){return wk(t).replace(/\./g,"")},_k=function(t){try{return vb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=()=>bk().__FIREBASE_DEFAULTS__,Ek=()=>{if(typeof process>"u"||typeof _v>"u")return;const t=_v.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_k(t[1]);return e&&JSON.parse(e)},vm=()=>{try{return xk()||Ek()||Tk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sk=t=>{var e,n;return(n=(e=vm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wb=t=>{const e=Sk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_b=()=>{var t;return(t=vm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ak(){var t;const e=(t=vm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ck(){return!Ak()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xb(){try{return typeof indexedDB=="object"}catch{return!1}}function Pk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="FirebaseError";class ji extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rk,Object.setPrototypeOf(this,ji.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eb.prototype.create)}}class Eb{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?kk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ji(i,a,r)}}function kk(t,e){return t.replace(Nk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nk=/\{\$([^}]+)}/g;function Pp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(bv(o)&&bv(s)){if(!Pp(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){return t&&t._delegate?t._delegate:t}class $o{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ik;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lk(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ok(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ok(t){return t===ri?void 0:t}function Lk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const jk={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Vk=oe.INFO,Fk={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Bk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tb{constructor(e){this.name=e,this._logLevel=Vk,this._logHandler=Bk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Uk=(t,e)=>e.some(n=>t instanceof n);let xv,Ev;function $k(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zk(){return Ev||(Ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sb=new WeakMap,Rp=new WeakMap,Ib=new WeakMap,eh=new WeakMap,wm=new WeakMap;function Hk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Or(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Sb.set(n,t)}).catch(()=>{}),wm.set(e,t),e}function Jk(t){if(Rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Rp.set(t,e)}let kp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ib.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qk(t){kp=t(kp)}function Wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return Ib.set(r,e.sort?e.sort():[e]),Or(r)}:zk().includes(t)?function(...e){return t.apply(th(this),e),Or(Sb.get(this))}:function(...e){return Or(t.apply(th(this),e))}}function Kk(t){return typeof t=="function"?Wk(t):(t instanceof IDBTransaction&&Jk(t),Uk(t,$k())?new Proxy(t,kp):t)}function Or(t){if(t instanceof IDBRequest)return Hk(t);if(eh.has(t))return eh.get(t);const e=Kk(t);return e!==t&&(eh.set(t,e),wm.set(e,t)),e}const th=t=>wm.get(t);function Gk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Or(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Or(s.result),l.oldVersion,l.newVersion,Or(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Qk=["get","getKey","getAll","getAllKeys","count"],Yk=["put","add","delete","clear"],nh=new Map;function Tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Yk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qk.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return nh.set(e,o),o}qk(t=>({...t,get:(e,n,r)=>Tv(e,n)||t.get(e,n,r),has:(e,n)=>!!Tv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Np="@firebase/app",Sv="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Tb("@firebase/app"),eN="@firebase/app-compat",tN="@firebase/analytics-compat",nN="@firebase/analytics",rN="@firebase/app-check-compat",iN="@firebase/app-check",oN="@firebase/auth",sN="@firebase/auth-compat",aN="@firebase/database",lN="@firebase/database-compat",cN="@firebase/functions",uN="@firebase/functions-compat",dN="@firebase/installations",hN="@firebase/installations-compat",pN="@firebase/messaging",fN="@firebase/messaging-compat",mN="@firebase/performance",gN="@firebase/performance-compat",yN="@firebase/remote-config",vN="@firebase/remote-config-compat",wN="@firebase/storage",_N="@firebase/storage-compat",bN="@firebase/firestore",xN="@firebase/firestore-compat",EN="firebase",TN="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="[DEFAULT]",SN={[Np]:"fire-core",[eN]:"fire-core-compat",[nN]:"fire-analytics",[tN]:"fire-analytics-compat",[iN]:"fire-app-check",[rN]:"fire-app-check-compat",[oN]:"fire-auth",[sN]:"fire-auth-compat",[aN]:"fire-rtdb",[lN]:"fire-rtdb-compat",[cN]:"fire-fn",[uN]:"fire-fn-compat",[dN]:"fire-iid",[hN]:"fire-iid-compat",[pN]:"fire-fcm",[fN]:"fire-fcm-compat",[mN]:"fire-perf",[gN]:"fire-perf-compat",[yN]:"fire-rc",[vN]:"fire-rc-compat",[wN]:"fire-gcs",[_N]:"fire-gcs-compat",[bN]:"fire-fst",[xN]:"fire-fst-compat","fire-js":"fire-js",[EN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map,Op=new Map;function IN(t,e){try{t.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xa(t){const e=t.name;if(Op.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Op.set(e,t);for(const n of Hc.values())IN(n,t);return!0}function Ab(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lr=new Eb("app","Firebase",AN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $o("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=TN;function Pb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=_b()),!n)throw Lr.create("no-options");const o=Hc.get(i);if(o){if(Pp(n,o.options)&&Pp(r,o.config))return o;throw Lr.create("duplicate-app",{appName:i})}const s=new Mk(i);for(const l of Op.values())s.addComponent(l);const a=new CN(n,r,s);return Hc.set(i,a),a}function Rb(t=Dp){const e=Hc.get(t);if(!e&&t===Dp&&_b())return Pb();if(!e)throw Lr.create("no-app",{appName:t});return e}function Mr(t,e,n){var r;let i=(r=SN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(a.join(" "));return}xa(new $o(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="firebase-heartbeat-database",RN=1,Ea="firebase-heartbeat-store";let rh=null;function kb(){return rh||(rh=Gk(PN,RN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function kN(t){try{const n=(await kb()).transaction(Ea),r=await n.objectStore(Ea).get(Nb(t));return await n.done,r}catch(e){if(e instanceof ji)Ci.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function Iv(t,e){try{const r=(await kb()).transaction(Ea,"readwrite");await r.objectStore(Ea).put(e,Nb(t)),await r.done}catch(n){if(n instanceof ji)Ci.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function Nb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=1024,DN=30*24*60*60*1e3;class ON{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Av();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=DN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Av(),{heartbeatsToSend:r,unsentEntries:i}=LN(this._heartbeatsCache.heartbeats),o=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Av(){return new Date().toISOString().substring(0,10)}function LN(t,e=NN){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Cv(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xb()?Pk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cv(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){xa(new $o("platform-logger",e=>new Xk(e),"PRIVATE")),xa(new $o("heartbeat",e=>new ON(e),"PRIVATE")),Mr(Np,Sv,t),Mr(Np,Sv,"esm2017"),Mr("fire-js","")}jN("");var VN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,_m=_m||{},q=VN||self;function Vu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FN(t){return Object.prototype.hasOwnProperty.call(t,ih)&&t[ih]||(t[ih]=++BN)}var ih="closure_uid_"+(1e9*Math.random()>>>0),BN=0;function UN(t,e,n){return t.call.apply(t.bind,arguments)}function $N(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=UN:dt=$N,dt.apply(null,arguments)}function Ml(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function Yr(){this.s=this.s,this.o=this.o}var zN=0;Yr.prototype.s=!1;Yr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zN!=0)&&FN(this)};Yr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Db=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vu(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var HN=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};q.addEventListener("test",n,e),q.removeEventListener("test",n,e)}catch{}return t}();function Ta(t){return/^[\s\xa0]*$/.test(t)}function Bu(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function En(t){return Bu().indexOf(t)!=-1}function xm(t){return xm[" "](t),t}xm[" "]=function(){};function JN(t,e){var n=VD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var qN=En("Opera"),zo=En("Trident")||En("MSIE"),Ob=En("Edge"),Lp=Ob||zo,Lb=En("Gecko")&&!(Bu().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),WN=Bu().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function Mb(){var t=q.document;return t?t.documentMode:void 0}var Mp;e:{var oh="",sh=function(){var t=Bu();if(Lb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ob)return/Edge\/([\d\.]+)/.exec(t);if(zo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WN)return/WebKit\/(\S+)/.exec(t);if(qN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sh&&(oh=sh?sh[1]:""),zo){var ah=Mb();if(ah!=null&&ah>parseFloat(oh)){Mp=String(ah);break e}}Mp=oh}var jp;if(q.document&&zo){var Rv=Mb();jp=Rv||parseInt(Mp,10)||void 0}else jp=void 0;var KN=jp;function Sa(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lb){e:{try{xm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Sa.$.h.call(this)}}qe(Sa,ht);var GN={2:"touch",3:"pen",4:"mouse"};Sa.prototype.h=function(){Sa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Uu="closure_listenable_"+(1e6*Math.random()|0),QN=0;function YN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++QN,this.fa=this.ia=!1}function $u(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Em(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function XN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jb(t){const e={};for(const n in t)e[n]=t[n];return e}const kv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<kv.length;o++)n=kv[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zu(t){this.src=t,this.g={},this.h=0}zu.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Fp(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new YN(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function Vp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Db(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&($u(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fp(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var Tm="closure_lm_"+(1e6*Math.random()|0),lh={};function Fb(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Fb(t,e[o],n,r,i);return null}return n=$b(n),t&&t[Uu]?t.O(e,n,Fu(r)?!!r.capture:!!r,i):ZN(t,e,n,!1,r,i)}function ZN(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=Fu(i)?!!i.capture:!!i,a=Im(t);if(a||(t[Tm]=a=new zu(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=eD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)HN||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ub(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eD(){function t(n){return e.call(t.src,t.listener,n)}const e=tD;return t}function Bb(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Bb(t,e[o],n,r,i);else r=Fu(r)?!!r.capture:!!r,n=$b(n),t&&t[Uu]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Fp(o,n,r,i),-1<n&&($u(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Im(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fp(e,n,r,i)),(n=-1<t?e[t]:null)&&Sm(n))}function Sm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Uu])Vp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ub(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Im(e))?(Vp(n,t),n.h==0&&(n.src=null,e[Tm]=null)):$u(t)}}}function Ub(t){return t in lh?lh[t]:lh[t]="on"+t}function tD(t,e){if(t.fa)t=!0;else{e=new Sa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Sm(t),t=n.call(r,e)}return t}function Im(t){return t=t[Tm],t instanceof zu?t:null}var ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function $b(t){return typeof t=="function"?t:(t[ch]||(t[ch]=function(e){return t.handleEvent(e)}),t[ch])}function Je(){Yr.call(this),this.i=new zu(this),this.S=this,this.J=null}qe(Je,Yr);Je.prototype[Uu]=!0;Je.prototype.removeEventListener=function(t,e,n,r){Bb(this,t,e,n,r)};function et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),Vb(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=jl(s,r,!0,e)&&i}if(s=e.g=t,i=jl(s,r,!0,e)&&i,i=jl(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=jl(s,r,!1,e)&&i}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$u(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function jl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&Vp(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Am=q.JSON.stringify;class nD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function rD(){var t=Cm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class iD{constructor(){this.h=this.g=null}add(e,n){const r=zb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zb=new nD(()=>new oD,t=>t.reset());class oD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aD(t){q.setTimeout(()=>{throw t},0)}let Ia,Aa=!1,Cm=new iD,Hb=()=>{const t=q.Promise.resolve(void 0);Ia=()=>{t.then(lD)}};var lD=()=>{for(var t;t=rD();){try{t.h.call(t.g)}catch(n){aD(n)}var e=zb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Aa=!1};function Hu(t,e){Je.call(this),this.h=t||1,this.g=e||q,this.j=dt(this.qb,this),this.l=Date.now()}qe(Hu,Je);L=Hu.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Pm(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Hu.$.N.call(this),Pm(this),delete this.g};function Rm(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function Jb(t){t.g=Rm(()=>{t.g=null,t.i&&(t.i=!1,Jb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cD extends Yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jb(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ca(t){Yr.call(this),this.h=t,this.g={}}qe(Ca,Yr);var Nv=[];function qb(t,e,n,r){Array.isArray(n)||(n&&(Nv[0]=n.toString()),n=Nv);for(var i=0;i<n.length;i++){var o=Fb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Wb(t){Em(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sm(e)},t),t.g={}}Ca.prototype.N=function(){Ca.$.N.call(this),Wb(this)};Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ju(){this.g=!0}Ju.prototype.Ea=function(){this.g=!1};function uD(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&h[1]=="type"?s+(u+"="+c+"&"):s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function dD(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function co(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pD(t,n)+(r?" "+r:"")})}function hD(t,e){t.info(function(){return"TIMEOUT: "+e})}Ju.prototype.info=function(){};function pD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Am(n)}catch{return e}}var Vi={},Dv=null;function qu(){return Dv=Dv||new Je}Vi.Ta="serverreachability";function Kb(t){ht.call(this,Vi.Ta,t)}qe(Kb,ht);function Pa(t){const e=qu();et(e,new Kb(e))}Vi.STAT_EVENT="statevent";function Gb(t,e){ht.call(this,Vi.STAT_EVENT,t),this.stat=e}qe(Gb,ht);function vt(t){const e=qu();et(e,new Gb(e,t))}Vi.Ua="timingevent";function Qb(t,e){ht.call(this,Vi.Ua,t),this.size=e}qe(Qb,ht);function Ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Wu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function km(){}km.prototype.h=null;function Ov(t){return t.h||(t.h=t.i())}function Xb(){}var Xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nm(){ht.call(this,"d")}qe(Nm,ht);function Dm(){ht.call(this,"c")}qe(Dm,ht);var Bp;function Ku(){}qe(Ku,km);Ku.prototype.g=function(){return new XMLHttpRequest};Ku.prototype.i=function(){return{}};Bp=new Ku;function Za(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ca(this),this.P=fD,t=Lp?125:void 0,this.V=new Hu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zb}function Zb(){this.i=null,this.g="",this.h=!1}var fD=45e3,ex={},Up={};L=Za.prototype;L.setTimeout=function(t){this.P=t};function $p(t,e,n){t.L=1,t.A=Qu(er(e)),t.u=n,t.S=!0,tx(t,null)}function tx(t,e){t.G=Date.now(),el(t),t.B=er(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),cx(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Zb,t.g=Rx(t.l,n?e:null,!t.u),0<t.O&&(t.M=new cD(dt(t.Pa,t,t.g),t.O)),qb(t.U,t.g,"readystatechange",t.nb),e=t.I?jb(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Pa(),uD(t.j,t.v,t.B,t.m,t.W,t.u)}L.nb=function(t){t=t.target;const e=this.M;e&&Tn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=Tn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Lp||this.g&&(this.h.h||this.g.ja()||Vv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pa(3):Pa(2)),Gu(this);var n=this.g.da();this.ca=n;t:if(nx(this)){var r=Vv(this.g);t="";var i=r.length,o=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){li(this),qs(this);var s="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,dD(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ta(a)){var c=a;break t}}c=null}if(n=c)co(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zp(this,n);else{this.i=!1,this.s=3,vt(12),li(this),qs(this);break e}}this.S?(rx(this,u,s),Lp&&this.i&&u==3&&(qb(this.U,this.V,"tick",this.mb),this.V.start())):(co(this.j,this.m,s,null),zp(this,s)),u==4&&li(this),this.i&&!this.J&&(u==4?Ix(this.l,this):(this.i=!1,el(this)))}else LD(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),li(this),qs(this)}}}catch{}finally{}};function nx(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function rx(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=mD(t,n),i==Up){e==4&&(t.s=4,vt(14),r=!1),co(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ex){t.s=4,vt(15),co(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else co(t.j,t.m,i,null),zp(t,i);nx(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fm(e),e.M=!0,vt(11))):(co(t.j,t.m,n,"[Invalid Chunked Response]"),li(t),qs(t))}L.mb=function(){if(this.g){var t=Tn(this.g),e=this.g.ja();this.o<e.length&&(Gu(this),rx(this,t,e),this.i&&t!=4&&el(this))}};function mD(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Up:(n=Number(e.substring(n,r)),isNaN(n)?ex:(r+=1,r+n>e.length?Up:(e=e.slice(r,r+n),t.o=r+n,e)))}L.cancel=function(){this.J=!0,li(this)};function el(t){t.Y=Date.now()+t.P,ix(t,t.P)}function ix(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ya(dt(t.lb,t),e)}function Gu(t){t.C&&(q.clearTimeout(t.C),t.C=null)}L.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(hD(this.j,this.B),this.L!=2&&(Pa(),vt(17)),li(this),this.s=2,qs(this)):ix(this,this.Y-t)};function qs(t){t.l.H==0||t.J||Ix(t.l,t)}function li(t){Gu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Pm(t.V),Wb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function zp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hp(n.i,t))){if(!t.K&&Hp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wc(n),ed(n);else break e;Vm(n),vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ya(dt(n.ib,n),6e3));if(1>=hx(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ci(n,11)}else if((t.K||n.g==t)&&Wc(n),!Ta(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var o=r.i;o.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Om(o,o.h),o.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,_e(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=Px(r,r.J?r.pa:null,r.Y),s.K){px(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(Gu(a),el(a)),r.g=s}else Tx(r);0<n.j.length&&td(n)}else c[0]!="stop"&&c[0]!="close"||ci(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ci(n,7):jm(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Pa(4)}catch{}}function gD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ox(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yD(t),r=gD(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var sx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _i(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _i){this.h=t.h,Jc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l;var e=t.i,n=new Ra;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lv(this,n),this.o=t.o}else t&&(e=String(t).match(sx))?(this.h=!1,Jc(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),qc(this,e[4]),this.l=Ds(e[5]||"",!0),Lv(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new Ra(null,this.h))}_i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,Mv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,Mv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?bD:_D,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,ED)),t.join("")};function er(t){return new _i(t)}function Jc(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lv(t,e,n){e instanceof Ra?(t.i=e,TD(t.i,t.h)):(n||(e=Os(e,xD)),t.i=new Ra(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Qu(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mv=/[#\/\?@]/g,_D=/[#\?:]/g,bD=/[#\?]/g,xD=/[#\?@]/g,ED=/#/g;function Ra(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xr(t){t.g||(t.g=new Map,t.h=0,t.i&&vD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Ra.prototype;L.add=function(t,e){Xr(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ax(t,e){Xr(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lx(t,e){return Xr(t),e=ss(t,e),t.g.has(e)}L.forEach=function(t,e){Xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){Xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};L.Z=function(t){Xr(this);let e=[];if(typeof t=="string")lx(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Xr(this),this.i=null,t=ss(this,t),lx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cx(t,e,n){ax(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),bm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TD(t,e){e&&!t.j&&(Xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ax(this,r),cx(this,i,n))},t)),t.j=e}var SD=class{constructor(t,e){this.g=t,this.map=e}};function ux(t){this.l=t||ID,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ID=10;function dx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hx(t){return t.h?1:t.g?t.g.size:0}function Hp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Om(t,e){t.g?t.g.add(e):t.h=e}function px(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ux.prototype.cancel=function(){if(this.i=fx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fx(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bm(t.i)}var AD=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function CD(){this.g=new AD}function PD(t,e,n){const r=n||"";try{ox(t,function(i,o){let s=i;Fu(i)&&(s=Am(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function RD(t,e){const n=new Ju;if(q.Image){const r=new Image;r.onload=Ml(Vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ml(Vl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ml(Vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ml(Vl,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yu(t){this.l=t.ec||null,this.j=t.ob||!1}qe(Yu,km);Yu.prototype.g=function(){return new Xu(this.l,this.j)};Yu.prototype.i=function(t){return function(){return t}}({});function Xu(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Xu,Je);var Lm=0;L=Xu.prototype;L.open=function(t,e){if(this.readyState!=Lm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ka(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tl(this)),this.readyState=Lm};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mx(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mx(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tl(this):ka(this),this.readyState==3&&mx(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,tl(this))};L.Ya=function(t){this.g&&(this.response=t,tl(this))};L.ka=function(){this.g&&tl(this)};function tl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ka(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ka(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kD=q.JSON.parse;function ke(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gx,this.L=this.M=!1}qe(ke,Je);var gx="",ND=/^https?$/i,DD=["POST","PUT"];L=ke.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bp.g(),this.C=this.u?Ov(this.u):Ov(Bp),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){jv(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=Db(DD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wx(this),0<this.B&&((this.L=OD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Rm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){jv(this,o)}};function OD(t){return zo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof _m<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function jv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yx(t),Zu(t)}function yx(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Zu(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zu(this,!0)),ke.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?vx(this):this.kb())};L.kb=function(){vx(this)};function vx(t){if(t.h&&typeof _m<"u"&&(!t.C[1]||Tn(t)!=4||t.da()!=2)){if(t.v&&Tn(t)==4)Rm(t.La,0,t);else if(et(t,"readystatechange"),Tn(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(sx)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!ND.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<Tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",yx(t)}}finally{Zu(t)}}}}function Zu(t,e){if(t.g){wx(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function wx(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Tn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kD(e)}};function Vv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function LD(t){const e={};t=(t.g&&2<=Tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ta(t[r]))continue;var n=sD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}XN(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _x(t){let e="";return Em(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Mm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_x(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bx(t){this.Ga=0,this.j=[],this.l=new Ju,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ux(t&&t.concurrentRequestLimit),this.Ja=new CD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=bx.prototype;L.ra=8;L.H=1;function jm(t){if(xx(t),t.H==3){var e=t.W++,n=er(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),nl(t,n),e=new Za(t,t.l,e),e.L=2,e.A=Qu(er(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.A,n=!0),n||(e.g=Rx(e.l,null),e.g.ha(e.A)),e.G=Date.now(),el(e)}Cx(t)}function ed(t){t.g&&(Fm(t),t.g.cancel(),t.g=null)}function xx(t){ed(t),t.u&&(q.clearTimeout(t.u),t.u=null),Wc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function td(t){if(!dx(t.i)&&!t.m){t.m=!0;var e=t.Na;Ia||Hb(),Aa||(Ia(),Aa=!0),Cm.add(e,t),t.C=0}}function MD(t,e){return hx(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ya(dt(t.Na,t,e),Ax(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Za(this,this.l,t);let o=this.s;if(this.U&&(o?(o=jb(o),Vb(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ex(this,i,e),n=er(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),nl(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(_x(o)))+"&"+e:this.o&&Mm(n,this.o,o)),Om(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,$p(i,n,null)):$p(i,n,e),this.H=2}}else this.H==3&&(t?Fv(this,t):this.j.length==0||dx(this.i)||Fv(this))};function Fv(t,e){var n;e?n=e.m:n=t.W++;const r=er(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),nl(t,r),t.o&&t.s&&Mm(r,t.o,t.s),n=new Za(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ex(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Om(t.i,n),$p(n,r,e)}function nl(t,e){t.na&&Em(t.na,function(n,r){_e(e,r,n)}),t.h&&ox({},function(n,r){_e(e,r,n)})}function Ex(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=o,0>c)o=Math.max(0,i[l].g-100),a=!1;else try{PD(u,s,"req"+c+"_")}catch{r&&r(u)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Tx(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ia||Hb(),Aa||(Ia(),Aa=!0),Cm.add(e,t),t.A=0}}function Vm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ya(dt(t.Ma,t),Ax(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,Sx(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ya(dt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),ed(this),Sx(this))};function Fm(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Sx(t){t.g=new Za(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=er(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),nl(t,e),t.o&&t.s&&Mm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Qu(er(e)),n.u=null,n.S=!0,tx(n,t)}L.ib=function(){this.v!=null&&(this.v=null,ed(this),Vm(this),vt(19))};function Wc(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Ix(t,e){var n=null;if(t.g==e){Wc(t),Fm(t),t.g=null;var r=2}else if(Hp(t.i,e))n=e.F,px(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=qu(),et(r,new Qb(r,n)),td(t)}else Tx(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&MD(t,e)||r==2&&Vm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}}function Ax(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ci(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new _i("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Jc(n,"https"),Qu(n)),RD(n.toString(),r)}else vt(2);t.H=0,t.h&&t.h.za(e),Cx(t),xx(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function Cx(t){if(t.H=0,t.ma=[],t.h){const e=fx(t.i);(e.length!=0||t.j.length!=0)&&(Pv(t.ma,e),Pv(t.ma,t.j),t.i.i.length=0,bm(t.j),t.j.length=0),t.h.ya()}}function Px(t,e,n){var r=n instanceof _i?er(n):new _i(n);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new _i(null);r&&Jc(o,r),e&&(o.g=e),i&&qc(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),nl(t,r),r}function Rx(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ke(new Yu({ob:n})):new ke(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function kx(){}L=kx.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Kc(){if(zo&&!(10<=Number(KN)))throw Error("Environmental error: no available transport.")}Kc.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Je.call(this),this.g=new bx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ta(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ta(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new as(this)}qe(Mt,Je);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Px(t,null,t.Y),td(t)};Mt.prototype.close=function(){jm(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Am(t),t=n);e.j.push(new SD(e.fb++,t)),e.H==3&&td(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,jm(this.g),delete this.g,Mt.$.N.call(this)};function Nx(t){Nm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(Nx,Nm);function Dx(){Dm.call(this),this.status=1}qe(Dx,Dm);function as(t){this.g=t}qe(as,kx);as.prototype.Ba=function(){et(this.g,"a")};as.prototype.Aa=function(t){et(this.g,new Nx(t))};as.prototype.za=function(t){et(this.g,new Dx)};as.prototype.ya=function(){et(this.g,"b")};function jD(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(pn,jD);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function uh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)uh(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){uh(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){uh(this,r),i=0;break}}this.h=i,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var VD={};function Bm(t){return-128<=t&&128>t?JN(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Sn(t){if(isNaN(t)||!isFinite(t))return bo;if(0>t)return Qe(Sn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Jp;return new pe(e,0)}function Ox(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(Ox(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Sn(Math.pow(e,8)),r=bo,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=Sn(Math.pow(e,o)),r=r.R(o).add(Sn(s))):(r=r.R(n),r=r.add(Sn(s)))}return r}var Jp=4294967296,bo=Bm(0),qp=Bm(1),Bv=Bm(16777216);L=pe.prototype;L.ea=function(){if(zt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Jp+r)*e,e*=Jp}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Hn(this))return"0";if(zt(this))return"-"+Qe(this).toString(t);for(var e=Sn(Math.pow(t,6)),n=this,r="";;){var i=Qc(n,e).g;n=Gc(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Hn(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}L.X=function(t){return t=Gc(this,t),zt(t)?-1:Hn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(qp)}L.abs=function(){return zt(this)?Qe(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Gc(t,e){return t.add(Qe(e))}L.R=function(t){if(Hn(this)||Hn(t))return bo;if(zt(this))return zt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(zt(t))return Qe(this.R(Qe(t)));if(0>this.X(Bv)&&0>t.X(Bv))return Sn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,Fl(n,2*r+2*i),n[2*r+2*i+1]+=o*l,Fl(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Fl(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Fl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function Fl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function Qc(t,e){if(Hn(e))throw Error("division by zero");if(Hn(t))return new As(bo,bo);if(zt(t))return e=Qc(Qe(t),e),new As(Qe(e.g),Qe(e.h));if(zt(e))return e=Qc(t,Qe(e)),new As(Qe(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qp,r=e;0>=r.X(t);)n=Uv(n),r=Uv(r);var i=Wi(n,1),o=Wi(r,1);for(r=Wi(r,2),n=Wi(n,2);!Hn(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=Wi(r,1),n=Wi(n,1)}return e=Gc(t,i.R(e)),new As(i,e)}for(i=bo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=Sn(n),s=o.R(e);zt(s)||0<s.X(t);)n-=r,o=Sn(n),s=o.R(e);Hn(o)&&(o=qp),i=i.add(o),t=Gc(t,s)}return new As(i,t)}L.gb=function(t){return Qc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function Uv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function Wi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new pe(i,t.h)}Kc.prototype.createWebChannel=Kc.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;Wu.NO_ERROR=0;Wu.TIMEOUT=8;Wu.HTTP_ERROR=6;Yb.COMPLETE="complete";Xb.EventType=Xa;Xa.OPEN="a";Xa.CLOSE="b";Xa.ERROR="c";Xa.MESSAGE="d";Je.prototype.listen=Je.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Sn;pe.fromString=Ox;var FD=function(){return new Kc},BD=function(){return qu()},dh=Wu,UD=Yb,$D=Vi,$v={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Bl=Xb,zD=ke,HD=pn,xo=pe;const zv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Tb("@firebase/firestore");function Cs(){return Pi.logLevel}function O(t,...e){if(Pi.logLevel<=oe.DEBUG){const n=e.map(Um);Pi.debug(`Firestore (${ls}): ${t}`,...n)}}function kn(t,...e){if(Pi.logLevel<=oe.ERROR){const n=e.map(Um);Pi.error(`Firestore (${ls}): ${t}`,...n)}}function Ho(t,...e){if(Pi.logLevel<=oe.WARN){const n=e.map(Um);Pi.warn(`Firestore (${ls}): ${t}`,...n)}}function Um(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function ge(t,e){t||J()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends ji{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class qD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WD{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qn,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qn)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new Lx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new lt(e)}}class KD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new QD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=XD(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Jo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new De(0,0))}static max(){return new W(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Na{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const ZD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Na{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return ZD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(be.fromString(e))}static fromName(e){return new $(be.fromString(e).popFirst(5))}static empty(){return new $(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new be(e.slice()))}}function eO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Hr(i,$.empty(),e)}function tO(t){return new Hr(t.readTime,t.key,-1)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(W.min(),$.empty(),-1)}static max(){return new Hr(W.max(),$.empty(),-1)}}function nO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==rO)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const c=l;n(e[c]).next(u=>{s[c]=u,++a,a===o&&r(s)},u=>i(u))}})}static doWhile(e,n){return new P((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new qn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ws(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=zm(r.target.error);this.V.reject(new Ws(e,i))}}static open(e,n,r,i){try{return new $m(n,e.transaction(i,r))}catch(o){throw new Ws(n,o)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new sO(n)}}class ui{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ui.S(zc())===12.2&&kn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),ii(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xb())return!1;if(ui.C())return!0;const e=zc(),n=ui.S(e),r=0<n&&n<10,i=ui.v(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const s=o.target.result;n(s)},i.onblocked=()=>{r(new Ws(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const s=o.target.error;s.name==="VersionError"?r(new V(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s.name==="InvalidStateError"?r(new V(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):r(new Ws(e,s))},i.onupgradeneeded=o=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const s=o.target.result;this.p.N(s,i.transaction,o.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const o=n==="readonly";let s=0;for(;;){++s;try{this.db=await this.O(e);const a=$m.open(this.db,e,o?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),P.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&s<3;if(O("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oO{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ii(this.k.delete())}}class Ws extends V{constructor(e,n){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function il(t){return t.name==="IndexedDbTransactionError"}class sO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(O("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ii(r)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),ii(this.store.add(e))}get(e){return ii(this.store.get(e)).next(n=>(n===void 0&&(n=null),O("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),ii(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),ii(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(r.range);return new P((s,a)=>{o.onerror=l=>{a(l.target.error)},o.onsuccess=l=>{s(l.target.result)}})}{const o=this.cursor(r),s=[];return this.G(o,(a,l)=>{s.push(l)}).next(()=>s)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((i,o)=>{r.onerror=s=>{o(s.target.error)},r.onsuccess=s=>{i(s.target.result)}})}H(e,n){O("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(o,s,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new P((r,i)=>{n.onerror=o=>{const s=zm(o.target.error);i(s)},n.onsuccess=o=>{const s=o.target.result;s?e(s.primaryKey,s.value).next(a=>{a?s.continue():r()}):r()}})}G(e,n){const r=[];return new P((i,o)=>{e.onerror=s=>{o(s.target.error)},e.onsuccess=s=>{const a=s.target.result;if(!a)return void i();const l=new oO(a),c=n(a.primaryKey,a.value,l);if(c instanceof P){const u=c.catch(h=>(l.done(),P.reject(h)));r.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ii(t){return new P((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=zm(r.target.error);n(i)}})}let Hv=!1;function zm(t){const e=ui.S(zc());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hv||(Hv=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Hm._e=-1;function nd(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function aO(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ul(this.root,e,this.comparator,!0)}}class Ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=o??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qv(this.data.getIterator())}getIteratorFrom(e){return new qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new sn([])}unionWith(e){let n=new tt(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Vx("Invalid base64 string: "+o):o}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const lO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=lO.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ri(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qm(t){const e=t.mapValue.fields.__previous_value__;return Jm(e)?qm(e):e}function Da(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,r,i,o,s,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jm(t)?4:uO(t)?9007199254740991:10:J()}function Nn(t,e){if(t===e)return!0;const n=ki(t);if(n!==ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Da(t).isEqual(Da(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Jr(i.timestampValue),a=Jr(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ri(i.bytesValue).isEqual(Ri(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Me(i.geoPointValue.latitude)===Me(o.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Me(i.integerValue)===Me(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Me(i.doubleValue),a=Me(o.doubleValue);return s===a?Yc(s)===Yc(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Jo(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(Jv(s)!==Jv(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Nn(s[l],a[l])))return!1;return!0}(t,e);default:return J()}}function La(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function qo(t,e){if(t===e)return 0;const n=ki(t),r=ki(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Me(o.integerValue||o.doubleValue),l=Me(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Wv(t.timestampValue,e.timestampValue);case 4:return Wv(Da(t),Da(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Ri(o),l=Ri(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=le(a[c],l[c]);if(u!==0)return u}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=le(Me(o.latitude),Me(s.latitude));return a!==0?a:le(Me(o.longitude),Me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=qo(a[c],l[c]);if(u)return u}return le(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===$l.mapValue&&s===$l.mapValue)return 0;if(o===$l.mapValue)return 1;if(s===$l.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),c=s.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=le(l[h],u[h]);if(d!==0)return d;const p=qo(a[l[h]],c[u[h]]);if(p!==0)return p}return le(l.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function Wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Jr(t),r=Jr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Wo(t){return Wp(t)}function Wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Wp(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Wp(n.fields[s])}`;return i+"}"}(t.mapValue):J()}function Kv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kp(t){return!!t&&"integerValue"in t}function Wm(t){return!!t&&"arrayValue"in t}function Gv(t){return!!t&&"nullValue"in t}function Qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ac(t){return!!t&&"mapValue"in t}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Ks(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ht(Ks(this.value))}}function Fx(t){const e=[];return cs(t.fields,(n,r)=>{const i=new Xe([n]);if(ac(r)){const o=Fx(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,W.min(),W.min(),W.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,W.min(),W.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,W.min(),W.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function Yv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(s.referenceValue),n.key):r=qo(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n="asc"){this.field=e,this.dir=n}}function dO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{}class Ve extends Bx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pO(e,n,r):n==="array-contains"?new gO(e,r):n==="in"?new yO(e,r):n==="not-in"?new vO(e,r):n==="array-contains-any"?new wO(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fO(e,r):new mO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qo(n,this.value)):n!==null&&ki(this.value)===ki(n)&&this.matchesComparison(qo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends Bx{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new fn(e,n)}matches(e){return Ux(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ux(t){return t.op==="and"}function $x(t){return hO(t)&&Ux(t)}function hO(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Gp(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Wo(t.value);if($x(t))return t.filters.map(e=>Gp(e)).join(",");{const e=t.filters.map(n=>Gp(n)).join(",");return`${t.op}(${e})`}}function zx(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&zx(s,i.filters[a]),!0):!1}(t,e):void J()}function Hx(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Wo(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(Hx).join(" ,")+"}"}(t):"Filter"}class pO extends Ve{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class fO extends Ve{constructor(e,n){super(e,"in",n),this.keys=Jx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mO extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Jx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class gO extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wm(n)&&La(n.arrayValue,this.value)}}class yO extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&La(this.value.arrayValue,n)}}class vO extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!La(this.value.arrayValue,n)}}class wO extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>La(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function Zv(t,e=null,n=[],r=[],i=null,o=null,s=null){return new _O(t,e,n,r,i,o,s)}function Km(t){const e=K(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wo(r)).join(",")),e.ce=n}return e.ce}function Gm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xv(t.startAt,e.startAt)&&Xv(t.endAt,e.endAt)}function Qp(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function bO(t,e,n,r,i,o,s,a){return new us(t,e,n,r,i,o,s,a)}function qx(t){return new us(t)}function e0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wx(t){return t.collectionGroup!==null}function Gs(t){const e=K(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new tt(Xe.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new Ma(o,r))}),n.has(Xe.keyField().canonicalString())||e.le.push(new Ma(Xe.keyField(),r))}return e.le}function Cn(t){const e=K(t);return e.he||(e.he=xO(e,Gs(t))),e.he}function xO(t,e){if(t.limitType==="F")return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ma(i.field,o)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yp(t,e){const n=t.filters.concat([e]);return new us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zc(t,e,n){return new us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rd(t,e){return Gm(Cn(t),Cn(e))&&t.limitType===e.limitType}function Kx(t){return`${Km(Cn(t))}|lt:${t.limitType}`}function Ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Hx(i)).join(", ")}]`),nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wo(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function id(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Gs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const c=Yv(s,a,l);return s.inclusive?c<=0:c<0}(r.startAt,Gs(r),i)||r.endAt&&!function(s,a,l){const c=Yv(s,a,l);return s.inclusive?c>=0:c>0}(r.endAt,Gs(r),i))}(t,e)}function EO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gx(t){return(e,n)=>{let r=!1;for(const i of Gs(t)){const o=TO(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function TO(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),c=a.data.field(o);return l!==null&&c!==null?qo(l,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return jx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=new Ce($.comparator);function tr(){return SO}const Qx=new Ce($.comparator);function Ls(...t){let e=Qx;for(const n of t)e=e.insert(n.key,n);return e}function Yx(t){let e=Qx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function di(){return Qs()}function Xx(){return Qs()}function Qs(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const IO=new Ce($.comparator),AO=new tt($.comparator);function te(...t){let e=AO;for(const n of t)e=e.add(n);return e}const CO=new tt(le);function PO(){return CO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function eE(t){return{integerValue:""+t}}function RO(t,e){return aO(e)?eE(e):Zx(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this._=void 0}}function kO(t,e,n){return t instanceof eu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Jm(o)&&(o=qm(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ja?nE(t,e):t instanceof Va?rE(t,e):function(i,o){const s=tE(i,o),a=t0(s)+t0(i.Ie);return Kp(s)&&Kp(i.Ie)?eE(a):Zx(i.serializer,a)}(t,e)}function NO(t,e,n){return t instanceof ja?nE(t,e):t instanceof Va?rE(t,e):n}function tE(t,e){return t instanceof tu?function(r){return Kp(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class eu extends od{}class ja extends od{constructor(e){super(),this.elements=e}}function nE(t,e){const n=iE(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Va extends od{constructor(e){super(),this.elements=e}}function rE(t,e){let n=iE(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class tu extends od{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function t0(t){return Me(t.integerValue||t.doubleValue)}function iE(t){return Wm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ja&&i instanceof ja||r instanceof Va&&i instanceof Va?Jo(r.elements,i.elements,Nn):r instanceof tu&&i instanceof tu?Nn(r.Ie,i.Ie):r instanceof eu&&i instanceof eu}(t.transform,e.transform)}class OO{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sd{}function oE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aE(t.key,Wn.none()):new ol(t.key,t.data,Wn.none());{const n=t.data,r=Ht.empty();let i=new tt(Xe.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Fi(t.key,r,new sn(i.toArray()),Wn.none())}}function LO(t,e,n){t instanceof ol?function(i,o,s){const a=i.value.clone(),l=r0(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,o,s){if(!lc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=r0(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(sE(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof ol?function(o,s,a,l){if(!lc(o.precondition,s))return a;const c=o.value.clone(),u=i0(o.fieldTransforms,l,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(o,s,a,l){if(!lc(o.precondition,s))return a;const c=i0(o.fieldTransforms,l,s),u=s.data;return u.setAll(sE(o)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(o,s,a){return lc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function MO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=tE(r.transform,i||null);o!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,o))}return n||null}function n0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Jo(r,i,(o,s)=>DO(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends sd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends sd{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function sE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r0(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,NO(s,a,n[i]))}return r}function i0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,kO(o,s,e))}return r}class aE extends sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jO extends sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&LO(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=oE(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Jo(this.mutations,e.mutations,(n,r)=>n0(n,r))&&Jo(this.baseMutations,e.baseMutations,(n,r)=>n0(n,r))}}class Qm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return IO}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Qm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,re;function UO(t){switch(t){default:return J();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function lE(t){if(t===void 0)return kn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Le.OK:return C.OK;case Le.CANCELLED:return C.CANCELLED;case Le.UNKNOWN:return C.UNKNOWN;case Le.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Le.INTERNAL:return C.INTERNAL;case Le.UNAVAILABLE:return C.UNAVAILABLE;case Le.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Le.NOT_FOUND:return C.NOT_FOUND;case Le.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Le.ABORTED:return C.ABORTED;case Le.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Le.DATA_LOSS:return C.DATA_LOSS;default:return J()}}(re=Le||(Le={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=new xo([4294967295,4294967295],0);function o0(t){const e=$O().encode(t),n=new HD;return n.update(e),new Uint8Array(n.digest())}function s0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new xo([n,r],0),new xo([i,o],0)]}class Ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=xo.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(xo.fromNumber(r)));return i.compare(zO)===1&&(i=new xo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=o0(e),[r,i]=s0(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);if(!this.Ae(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Ym(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Te===0)return;const n=o0(e),[r,i]=s0(n);for(let o=0;o<this.hashCount;o++){const s=this.de(r,i,o);this.Re(s)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,sl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ad(W.min(),i,new Ce(le),tr(),te())}}class sl{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sl(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class cE{constructor(e,n){this.targetId=e,this.fe=n}}class uE{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a0{constructor(){this.ge=0,this.pe=c0(),this.ye=ft.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=te(),n=te(),r=te();return this.pe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new sl(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=c0()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ge(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class HO{constructor(e){this.Be=e,this.ke=new Map,this.qe=tr(),this.Qe=l0(),this.Ke=new Ce(le)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const o=i.target;if(Qp(o))if(r===0){const s=new $(o.path);this.We(n,s,ut.newNoDocument(s,W.min()))}else ge(r===1);else{const s=this.Ze(n);if(s!==r){const a=this.Xe(e),l=a?this.et(a,e,s):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Ri(r).toUint8Array()}catch(l){if(l instanceof Vx)return Ho("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ym(s,i,o)}catch(l){return Ho(l instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Be.nt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((o,s)=>{const a=this.Ye(s);if(a){if(o.current&&Qp(a.target)){const l=new $(a.target.path);this.qe.get(l)!==null||this.st(s,l)||this.We(s,l,ut.newNoDocument(l,e))}o.De&&(n.set(s,o.ve()),o.Fe())}});let r=te();this.Qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.qe.forEach((o,s)=>s.setReadTime(e));const i=new ad(e,n,this.Ke,this.qe,r);return this.qe=tr(),this.Qe=l0(),this.Ke=new Ce(le),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new a0,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new tt(le),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new a0),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function l0(){return new Ce($.comparator)}function c0(){return new Ce($.comparator)}const JO={asc:"ASCENDING",desc:"DESCENDING"},qO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WO={and:"AND",or:"OR"};class KO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xp(t,e){return t.useProto3Json||nd(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GO(t,e){return nu(t,e.toTimestamp())}function Pn(t){return ge(!!t),W.fromTimestamp(function(n){const r=Jr(n);return new De(r.seconds,r.nanos)}(t))}function Xm(t,e){return Zp(t,e).canonicalString()}function Zp(t,e){const n=function(i){return new be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hE(t){const e=be.fromString(t);return ge(yE(e)),e}function ef(t,e){return Xm(t.databaseId,e.path)}function hh(t,e){const n=hE(e);if(n.get(1)!==t.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(fE(n))}function pE(t,e){return Xm(t.databaseId,e)}function QO(t){const e=hE(t);return e.length===4?be.emptyPath():fE(e)}function tf(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fE(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function u0(t,e,n){return{name:ef(t,e),fields:n.value.mapValue.fields}}function YO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,u){return c.useProto3Json?(ge(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(ge(u===void 0||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(c){const u=c.code===void 0?C.UNKNOWN:lE(c.code);return new V(u,c.message||"")}(s);n=new uE(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hh(t,r.document.name),o=Pn(r.document.updateTime),s=r.document.createTime?Pn(r.document.createTime):W.min(),a=new Ht({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(i,o,s,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new cc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hh(t,r.document),o=r.readTime?Pn(r.readTime):W.min(),s=ut.newNoDocument(i,o),a=r.removedTargetIds||[];n=new cc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hh(t,r.document),o=r.removedTargetIds||[];n=new cc([],o,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new BO(i,o),a=r.targetId;n=new cE(a,s)}}return n}function XO(t,e){let n;if(e instanceof ol)n={update:u0(t,e.key,e.value)};else if(e instanceof aE)n={delete:ef(t,e.key)};else if(e instanceof Fi)n={update:u0(t,e.key,e.data),updateMask:aL(e.fieldMask)};else{if(!(e instanceof jO))return J();n={verify:ef(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof eu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ja)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Va)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tu)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:GO(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:J()}(t,e.precondition)),n}function ZO(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Pn(i.updateTime):Pn(o);return s.isEqual(W.min())&&(s=Pn(o)),new OO(s,i.transformResults||[])}(n,e))):[]}function eL(t,e){return{documents:[pE(t,e.path)]}}function tL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pE(t,i);const o=function(c){if(c.length!==0)return gE(fn.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Gi(d.field),direction:iL(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Xp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:i}}function nL(t){let e=QO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let o=[];n.where&&(o=function(h){const d=mE(h);return d instanceof fn&&$x(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(h){return h.map(d=>function(w){return new Ma(Qi(w.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,nd(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Xc(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Xc(p,d)}(n.endAt)),bO(e,i,s,o,a,"F",l,c)}function rL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qi(n.unaryFilter.field);return Ve.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qi(n.unaryFilter.field);return Ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>mE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function iL(t){return JO[t]}function oL(t){return qO[t]}function sL(t){return WO[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Qi(t){return Xe.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Qv(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NAN"}};if(Gv(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qv(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NAN"}};if(Gv(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(n.field),op:oL(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>gE(i));return r.length===1?r[0]:{compositeFilter:{op:sL(n.op),filters:r}}}(t):J()}function aL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,i,o=W.min(),s=W.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e){this.ct=e}}function cL(t){const e=nL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(){this._n=new dL}addToCollectionParentIndex(e,n){return this._n.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Hr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class dL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(be.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ko(0)}static Ln(){return new Ko(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ys(r.mutation,i,sn.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Ls();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=tr();const s=Qs(),a=function(){return Qs()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Fi)?o=o.insert(c.key,c):u!==void 0?(s.set(c.key,u.mutation.getFieldMask()),Ys(u.mutation,c,u.mutation.getFieldMask(),De.now())):s.set(c.key,sn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((c,u)=>s.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new pL(u,(h=s.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new Ce((s,a)=>s-a),o=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||sn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Xx();u.forEach(d=>{if(!o.has(d)){const p=oE(n.get(d),r.get(d));p!==null&&h.set(d,p),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return $.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):P.resolve(di());let a=-1,l=o;return s.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),o.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,l,c,te())).next(u=>({batchId:a,changes:Yx(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Ls();return this.indexManager.getCollectionParents(e,o).next(a=>P.forEach(a,l=>{const c=function(h,d){return new us(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((h,d)=>{s=s.insert(h,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,ut.newInvalidDocument(u)))});let a=Ls();return s.forEach((l,c)=>{const u=o.get(l);u!==void 0&&Ys(u.mutation,c,sn.empty(),De.now()),id(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return P.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:cL(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.overlays=new Ce($.comparator),this.hr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=di();return P.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=di(),o=n.length+1,s=new $(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Ce((c,u)=>c-u);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=o.get(c.largestBatchId);u===null&&(u=di(),o=o.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=di(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new FO(n,r));let o=this.hr.get(n);o===void 0&&(o=te(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.Pr=new tt($e.Ir),this.Tr=new tt($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new $(new be([])),r=new $e(n,e),i=new $e(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new $(new be([])),r=new $e(n,e),i=new $e(n,e+1);let o=te();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return $.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new tt($e.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new VO(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.wr=this.wr.add(new $e(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(s)}lookupMutationBatch(e,n){return P.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const a=this.Sr(s.pr);o.push(a)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(le);return n.forEach(i=>{const o=new $e(i,0),s=new $e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],a=>{r=r.add(a.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const s=new $e(new $(o),0);let a=new tt(le);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},s),P.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(n.mutations,i=>{const o=new $e(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),i=this.wr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e){this.vr=e,this.docs=function(){return new Ce($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ut.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=tr();const s=n.path,a=new $(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||nO(tO(u),r)<=0||(i.has(u.key)||id(n,u))&&(o=o.insert(u.key,u.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,n,r,i){J()}Fr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wL(this)}getSize(e){return P.resolve(this.size)}}class wL extends hL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.persistence=e,this.Mr=new ds(n=>Km(n),Gm),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zm,this.targetCount=0,this.Lr=Ko.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),P.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ko(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.qn(n),P.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n){this.Br={},this.overlays={},this.kr=new Hm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new _L(this),this.indexManager=new uL,this.remoteDocumentCache=function(i){return new vL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new lL(n),this.$r=new mL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new yL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new xL(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class xL extends iO{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.zr=new Zm,this.jr=null}static Hr(e){return new eg(e)}get Jr(){if(this.jr)return this.jr;throw J()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const i=$.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,W.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return P.or([()=>P.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=te(),i=te();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new tg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ck()?8:ui.v(zc())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new EL;return this.Ji(e,n,s).next(a=>{if(o.result=a,this.Ui)return this.Yi(e,n,s,a.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Cs()<=oe.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(Cs()<=oe.DEBUG&&O("QueryEngine","Query:",Ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Cs()<=oe.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):P.resolve())}ji(e,n){if(e0(n))return P.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zc(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=te(...o);return this.zi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,s,l.readTime)?this.ji(e,Zc(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return e0(n)||i.isEqual(W.min())?P.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?P.resolve(null):(Cs()<=oe.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ki(n)),this.es(e,s,n,eO(i,-1)).next(a=>a))})}Zi(e,n){let r=new tt(Gx(e));return n.forEach((i,o)=>{id(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return Cs()<=oe.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ki(n)),this.zi.getDocumentsMatchingQuery(e,n,Hr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ce(le),this.rs=new ds(o=>Km(o),Gm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function IL(t,e,n,r){return new SL(t,e,n,r)}async function vE(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=te();for(const c of i){s.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of o){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:s,addedBatchIds:a}))})})}function AL(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=P.resolve();return d.forEach(w=>{p=p.next(()=>u.getEntry(l,w)).next(y=>{const _=c.docVersions.get(w);ge(_!==null),y.version.compareTo(_)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wE(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function CL(t,e){const n=K(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(o,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(o,u.addedDocuments,h)));let p=d.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(y,_,m){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(o,p))});let l=tr(),c=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,u))}),a.push(PL(o,s,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(W.min())){const u=n.Qr.getLastRemoteSnapshotVersion(o).next(h=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,c)).next(()=>l)}).then(o=>(n.ns=i,o))}function PL(t,e,n){let r=te(),i=te();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=tr();return n.forEach((a,l)=>{const c=o.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:s,ls:i}})}function RL(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kL(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new Tr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function nf(t,e,n){const r=K(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!il(s))throw s;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function d0(t,e,n){const r=K(t);let i=W.min(),o=te();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,c,u){const h=K(l),d=h.rs.get(u);return d!==void 0?P.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,s,Cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:W.min(),n?o:te())).next(a=>(NL(r,EO(e),a),{documents:a,hs:o})))}function NL(t,e,n){let r=t.ss.get(e)||W.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class h0{constructor(){this.activeTargetIds=PO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DL{constructor(){this.no=new h0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new h0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl=null;function ph(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class jL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${o}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get wo(){return!1}So(n,r,i,o,s){const a=ph(),l=this.bo(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,o,s),this.Co(n,l,c,i).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ho("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(n,r,i,o,s,a){return this.So(n,r,i,o,s)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ls}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}bo(n,r){const i=LL[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const o=ph();return new Promise((s,a)=>{const l=new zD;l.setWithCredentials(!0),l.listenOnce(UD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dh.NO_ERROR:const u=l.getResponseJson();O(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(u)),s(u);break;case dh.TIMEOUT:O(st,`RPC '${e}' ${o} timed out`),a(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const h=l.getStatus();if(O(st,`RPC '${e}' ${o} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const w=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(m)>=0?m:C.UNKNOWN}(p.status);a(new V(w,p.message))}else a(new V(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(C.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{O(st,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);O(st,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const i=ph(),o=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=FD(),a=BD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=o.join("");O(st,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=s.createWebChannel(u,l);let d=!1,p=!1;const w=new ML({lo:_=>{p?O(st,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(O(st,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(st,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},ho:()=>h.close()}),y=(_,m,g)=>{_.listen(m,v=>{try{g(v)}catch(x){setTimeout(()=>{throw x},0)}})};return y(h,Bl.EventType.OPEN,()=>{p||O(st,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Bl.EventType.CLOSE,()=>{p||(p=!0,O(st,`RPC '${e}' stream ${i} transport closed`),w.Vo())}),y(h,Bl.EventType.ERROR,_=>{p||(p=!0,Ho(st,`RPC '${e}' stream ${i} transport errored:`,_),w.Vo(new V(C.UNAVAILABLE,"The operation could not be completed")))}),y(h,Bl.EventType.MESSAGE,_=>{var m;if(!p){const g=_.data[0];ge(!!g);const v=g,x=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(x){O(st,`RPC '${e}' stream ${i} received error:`,x);const E=x.status;let S=function(j){const M=Le[j];if(M!==void 0)return lE(M)}(E),I=x.message;S===void 0&&(S=C.INTERNAL,I="Unknown error status: "+E+" with message "+x.message),p=!0,w.Vo(new V(S,I)),h.close()}else O(st,`RPC '${e}' stream ${i} received:`,g),w.mo(g)}}),y(a,$D.STAT_EVENT,_=>{_.stat===$v.PROXY?O(st,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===$v.NOPROXY&&O(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.Ro()},0),w}}function fh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){return new KO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,r,i,o,s,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new _E(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VL extends bE{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=YO(this.serializer,e),r=function(o){if(!("targetChange"in o))return W.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?Pn(s.readTime):W.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=tf(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=Qp(l)?{documents:eL(o,l)}:{query:tL(o,l).ut},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=dE(o,s.resumeToken);const c=Xp(o,s.expectedCount);c!==null&&(a.expectedCount=c)}else if(s.snapshotVersion.compareTo(W.min())>0){a.readTime=nu(o,s.snapshotVersion.toTimestamp());const c=Xp(o,s.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=rL(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=tf(this.serializer),n.removeTarget=e,this.t_(n)}}class FL extends bE{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=ZO(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.T_(r,n)}return ge(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=tf(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XO(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.So(e,Zp(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(C.UNKNOWN,o.toString())})}vo(e,n,r,i,o){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,Zp(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(C.UNKNOWN,s.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class UL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(kn(n),this.g_=!1):O("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=o,this.M_.io(s=>{r.enqueueAndForget(async()=>{Bi(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=K(l);c.v_.add(4),await al(c),c.x_.set("Unknown"),c.v_.delete(4),await cd(c)}(this))})}),this.x_=new UL(r,i)}}async function cd(t){if(Bi(t))for(const e of t.F_)await e(!0)}async function al(t){for(const e of t.F_)await e(!1)}function xE(t,e){const n=K(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),og(n)?ig(n):hs(n).Jo()&&rg(n,e))}function ng(t,e){const n=K(t),r=hs(n);n.C_.delete(e),r.Jo()&&EE(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Bi(n)&&n.x_.set("Unknown"))}function rg(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).c_(e)}function EE(t,e){t.O_.Oe(e),hs(t).l_(e)}function ig(t){t.O_=new HO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.x_.p_()}function og(t){return Bi(t)&&!hs(t).Ho()&&t.C_.size>0}function Bi(t){return K(t).v_.size===0}function TE(t){t.O_=void 0}async function zL(t){t.C_.forEach((e,n)=>{rg(t,e)})}async function HL(t,e){TE(t),og(t)?(t.x_.S_(e),ig(t)):t.x_.set("Unknown")}async function JL(t,e,n){if(t.x_.set("Online"),e instanceof uE&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof cc?t.O_.$e(e):e instanceof cE?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(W.min()))try{const r=await wE(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.O_.it(s);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=o.C_.get(c);u&&o.C_.set(c,u.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,c)=>{const u=o.C_.get(l);if(!u)return;o.C_.set(l,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),EE(o,l);const h=new Tr(u.target,l,c,u.sequenceNumber);rg(o,h)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!il(e))throw e;t.v_.add(1),await al(t),t.x_.set("Offline"),n||(n=()=>wE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await cd(t)})}function SE(t,e){return e().catch(n=>ru(t,n,e))}async function ud(t){const e=K(t),n=qr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;qL(e);)try{const i=await RL(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,WL(e,i)}catch(i){await ru(e,i)}IE(e)&&AE(e)}function qL(t){return Bi(t)&&t.D_.length<10}function WL(t,e){t.D_.push(e);const n=qr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function IE(t){return Bi(t)&&!qr(t).Ho()&&t.D_.length>0}function AE(t){qr(t).start()}async function KL(t){qr(t).d_()}async function GL(t){const e=qr(t);for(const n of t.D_)e.I_(n.mutations)}async function QL(t,e,n){const r=t.D_.shift(),i=Qm.from(r,e,n);await SE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ud(t)}async function YL(t,e){e&&qr(t).P_&&await async function(r,i){if(function(s){return UO(s)&&s!==C.ABORTED}(i.code)){const o=r.D_.shift();qr(r).Zo(),await SE(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ud(r)}}(t,e),IE(t)&&AE(t)}async function f0(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Bi(n);n.v_.add(3),await al(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await cd(n)}async function XL(t,e){const n=K(t);e?(n.v_.delete(2),await cd(n)):e||(n.v_.add(2),await al(n),n.x_.set("Unknown"))}function hs(t){return t.N_||(t.N_=function(n,r,i){const o=K(n);return o.R_(),new VL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:zL.bind(null,t),To:HL.bind(null,t),u_:JL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),og(t)?ig(t):t.x_.set("Unknown")):(await t.N_.stop(),TE(t))})),t.N_}function qr(t){return t.L_||(t.L_=function(n,r,i){const o=K(n);return o.R_(),new FL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:KL.bind(null,t),To:YL.bind(null,t),E_:GL.bind(null,t),T_:QL.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await ud(t)):(await t.L_.stop(),t.D_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new sg(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ag(t,e){if(kn("AsyncQueue",`${e}: ${t}`),il(t))return new V(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.B_=new Ce($.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):J():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,o,s,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Go(e,n,Eo.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class eM{constructor(){this.queries=new ds(e=>Kx(e),rd),this.onlineState="Unknown",this.W_=new Set}}async function tM(t,e){const n=K(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.K_()&&e.U_()&&(r=2):(o=new ZL,r=e.U_()?0:1);try{switch(r){case 0:o.q_=await n.onListen(i,!0);break;case 1:o.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=ag(s,`Initialization of query '${Ki(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.Q_.push(e),e.G_(n.onlineState),o.q_&&e.z_(o.q_)&&lg(n)}async function nM(t,e){const n=K(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.Q_.indexOf(e);s>=0&&(o.Q_.splice(s,1),o.Q_.length===0?i=e.U_()?0:1:!o.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rM(t,e){const n=K(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.Q_)a.z_(i)&&(r=!0);s.q_=i}}r&&lg(n)}function iM(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const o of i.Q_)o.onError(n);r.queries.delete(e)}function lg(t){t.W_.forEach(e=>{e.next()})}var rf,g0;(g0=rf||(rf={})).j_="default",g0.Cache="cache";class oM{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==rf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.key=e}}class PE{constructor(e){this.key=e}}class sM{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=te(),this.mutatedKeys=te(),this.ha=Gx(e),this.Pa=new Eo(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new m0,i=n?n.Pa:this.Pa;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=id(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?w!==y&&(r.track({type:3,doc:p}),_=!0):this.da(d,p)||(r.track({type:2,doc:p}),_=!0,(l&&this.ha(p,l)>0||c&&this.ha(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),_=!0):d&&!p&&(r.track({type:1,doc:d}),_=!0,(l||c)&&(a=!0)),_&&(p?(s=s.add(p),o=y?o.add(u):o.delete(u)):(s=s.delete(u),o=o.delete(u)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const u=this.query.limitType==="F"?s.last():s.first();s=s.delete(u.key),o=o.delete(u.key),r.track({type:1,doc:u})}return{Pa:s,Ea:r,Xi:a,mutatedKeys:o}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const s=e.Ea.k_();s.sort((u,h)=>function(p,w){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return y(p)-y(w)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,c=l!==this.ca;return this.ca=l,s.length!==0||c?{snapshot:new Go(this.query,e.Pa,o,s,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new m0,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=te(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new PE(r))}),this.la.forEach(r=>{e.has(r)||n.push(new CE(r))}),n}fa(e){this.ua=e.hs,this.la=te();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Go.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class aM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lM{constructor(e){this.key=e,this.pa=!1}}class cM{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new ds(a=>Kx(a),rd),this.Sa=new Map,this.ba=new Set,this.Da=new Ce($.comparator),this.Ca=new Map,this.va=new Zm,this.Fa={},this.Ma=new Map,this.xa=Ko.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function uM(t,e,n=!0){const r=LE(t);let i;const o=r.wa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ga()):i=await RE(r,e,n,!0),i}async function dM(t,e){const n=LE(t);await RE(n,e,!0,!1)}async function RE(t,e,n,r){const i=await kL(t.localStore,Cn(e)),o=i.targetId,s=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let a;return r&&(a=await hM(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&xE(t.remoteStore,i),a}async function hM(t,e,n,r,i){t.Na=(h,d,p)=>async function(y,_,m,g){let v=_.view.Ta(m);v.Xi&&(v=await d0(y.localStore,_.query,!1).then(({documents:I})=>_.view.Ta(I,v)));const x=g&&g.targetChanges.get(_.targetId),E=g&&g.targetMismatches.get(_.targetId)!=null,S=_.view.applyChanges(v,y.isPrimaryClient,x,E);return v0(y,_.targetId,S.Va),S.snapshot}(t,h,d,p);const o=await d0(t.localStore,e,!0),s=new sM(e,o.hs),a=s.Ta(o.documents),l=sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(a,t.isPrimaryClient,l);v0(t,n,c.Va);const u=new aM(e,n,s);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function pM(t,e,n){const r=K(t),i=r.wa.get(e),o=r.Sa.get(i.targetId);if(o.length>1)return r.Sa.set(i.targetId,o.filter(s=>!rd(s,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await nf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ng(r.remoteStore,i.targetId),of(r,i.targetId)}).catch(rl)):(of(r,i.targetId),await nf(r.localStore,i.targetId,!0))}async function fM(t,e){const n=K(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ng(n.remoteStore,r.targetId))}async function mM(t,e,n){const r=xM(t);try{const i=await function(s,a){const l=K(s),c=De.now(),u=a.reduce((p,w)=>p.add(w.key),te());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let w=tr(),y=te();return l.os.getEntries(p,u).next(_=>{w=_,w.forEach((m,g)=>{g.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,w)).next(_=>{h=_;const m=[];for(const g of a){const v=MO(g,h.get(g.key).overlayedDocument);v!=null&&m.push(new Fi(g.key,v,Fx(v.value.mapValue),Wn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,m,a)}).next(_=>{d=_;const m=_.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(p,_.batchId,m)})}).then(()=>({batchId:d.batchId,changes:Yx(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let c=s.Fa[s.currentUser.toKey()];c||(c=new Ce(le)),c=c.insert(a,l),s.Fa[s.currentUser.toKey()]=c}(r,i.batchId,n),await ll(r,i.changes),await ud(r.remoteStore)}catch(i){const o=ag(i,"Failed to persist write");n.reject(o)}}async function kE(t,e){const n=K(t);try{const r=await CL(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Ca.get(o);s&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.pa=!0:i.modifiedDocuments.size>0?ge(s.pa):i.removedDocuments.size>0&&(ge(s.pa),s.pa=!1))}),await ll(n,r,e)}catch(r){await rl(r)}}function y0(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((o,s)=>{const a=s.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=K(s);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&lg(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gM(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),o=i&&i.key;if(o){let s=new Ce($.comparator);s=s.insert(o,ut.newNoDocument(o,W.min()));const a=te().add(o),l=new ad(W.min(),new Map,new Ce(le),s,a);await kE(r,l),r.Da=r.Da.remove(o),r.Ca.delete(e),cg(r)}else await nf(r.localStore,e,!1).then(()=>of(r,e,n)).catch(rl)}async function yM(t,e){const n=K(t),r=e.batch.batchId;try{const i=await AL(n.localStore,e);DE(n,r,null),NE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ll(n,i)}catch(i){await rl(i)}}async function vM(t,e,n){const r=K(t);try{const i=await function(s,a){const l=K(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ge(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);DE(r,e,n),NE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ll(r,i)}catch(i){await rl(i)}}function NE(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function DE(t,e,n){const r=K(t);let i=r.Fa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||OE(t,r)})}function OE(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(ng(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),cg(t))}function v0(t,e,n){for(const r of n)r instanceof CE?(t.va.addReference(r.key,e),wM(t,r)):r instanceof PE?(O("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||OE(t,r.key)):J()}function wM(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ba.add(r),cg(t))}function cg(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new $(be.fromString(e)),r=t.xa.next();t.Ca.set(r,new lM(n)),t.Da=t.Da.insert(n,r),xE(t.remoteStore,new Tr(Cn(qx(n.path)),r,"TargetPurposeLimboResolution",Hm._e))}}async function ll(t,e,n){const r=K(t),i=[],o=[],s=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{s.push(r.Na(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=tg.Ki(l.targetId,c);o.push(u)}}))}),await Promise.all(s),r.ya.u_(i),await async function(l,c){const u=K(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>P.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!il(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),w=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(w);u.ns=u.ns.insert(d,y)}}}(r.localStore,o))}async function _M(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await vE(n.localStore,e);n.currentUser=e,function(o,s){o.Ma.forEach(a=>{a.forEach(l=>{l.reject(new V(C.CANCELLED,s))})}),o.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ll(n,r.us)}}function bM(t,e){const n=K(t),r=n.Ca.get(e);if(r&&r.pa)return te().add(r.key);{let i=te();const o=n.Sa.get(e);if(!o)return i;for(const s of o){const a=n.wa.get(s);i=i.unionWith(a.view.Ia)}return i}}function LE(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gM.bind(null,e),e.ya.u_=rM.bind(null,e.eventManager),e.ya.La=iM.bind(null,e.eventManager),e}function xM(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vM.bind(null,e),e}class w0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ld(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IL(this.persistence,new TL,e.initialUser,this.serializer)}createPersistence(e){return new bL(eg.Hr,this.serializer)}createSharedClientState(e){return new DL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>y0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_M.bind(null,this.syncEngine),await XL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eM}()}createDatastore(e){const n=ld(e.databaseInfo.databaseId),r=function(o){return new jL(o)}(e.databaseInfo);return function(o,s,a,l){return new BL(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new $L(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>y0(this.syncEngine,n,0),function(){return p0.D()?new p0:new OL}())}createSyncEngine(e,n){return function(i,o,s,a,l,c,u){const h=new cM(i,o,s,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=K(r);O("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await al(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=Mx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ag(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mh(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AM(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>f0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>f0(e.remoteStore,i)),t._onlineComponents=e}function IM(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IM(n))throw n;Ho("Error using user provided cache. Falling back to memory cache: "+n),await mh(t,new w0)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await mh(t,new w0);return t._offlineComponents}async function ME(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await _0(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await _0(t,new EM))),t._onlineComponents}function CM(t){return ME(t).then(e=>e.syncEngine)}async function PM(t){const e=await ME(t),n=e.eventManager;return n.onListen=uM.bind(null,e.syncEngine),n.onUnlisten=pM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fM.bind(null,e.syncEngine),n}function RM(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,c){const u=new TM({next:d=>{s.enqueueAndForget(()=>nM(o,h)),d.fromCache&&l.source==="server"?c.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new oM(a,u,{includeMetadataChanges:!0,ta:!0});return tM(o,h)}(await PM(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e,n){if(!n)throw new V(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kM(t,e,n,r){if(e===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x0(t){if(!$.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function E0(t){if($.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function iu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dd(t);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JD;switch(r.type){case"firstParty":return new GD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b0.get(n);r&&(O("ComponentProvider","Removing Datastore"),b0.delete(n),r.terminate())}(this),Promise.resolve()}}function NM(t,e,n,r={}){var i;const o=(t=iu(t,hd))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=lt.MOCK_USER;else{a=bb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(c)}t._authCredentials=new qD(new Lx(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class jr extends Zr{constructor(e,n,r){super(e,n,qx(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new $(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Fa(t,e,...n){if(t=Ai(t),VE("collection","path",e),t instanceof hd){const r=be.fromString(e,...n);return E0(r),new jr(t,null,r)}{if(!(t instanceof Wt||t instanceof jr))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return E0(r),new jr(t.firestore,null,r)}}function DM(t,e,...n){if(t=Ai(t),arguments.length===1&&(e=Mx.newId()),VE("doc","path",e),t instanceof hd){const r=be.fromString(e,...n);return x0(r),new Wt(t,null,new $(r))}{if(!(t instanceof Wt||t instanceof jr))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return x0(r),new Wt(t.firestore,t instanceof jr?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new _E(this,"async_queue_retry"),this.cu=()=>{const n=fh();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=fh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new qn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!il(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=sg.createAndSchedule(this,e,n,r,o=>this.Iu(o));return this.su.push(i),i}lu(){this.ou&&J()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ug extends hd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new OM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BE(this),this._firestoreClient.terminate()}}function LM(t,e){const n=typeof t=="object"?t:Rb(),r=typeof t=="string"?t:"(default)",i=Ab(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=wb("firestore");o&&NM(i,...o)}return i}function FE(t){return t._firestoreClient||BE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function BE(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,c,u){return new cO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,jE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new SM(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qo(ft.fromBase64String(e))}catch(n){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qo(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=/^__.*__$/;class jM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class pg{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ru(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new pg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return ou(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if($E(this.Vu)&&MM.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class VM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ld(e)}Cu(e,n,r,i=!1){return new pg({Vu:e,methodName:n,Du:r,path:Xe.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zE(t){const e=t._freezeSettings(),n=ld(t._databaseId);return new VM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FM(t,e,n,r,i,o={}){const s=t.Cu(o.merge||o.mergeFields?2:0,e,n,i);qE("Data must be an object, but it was:",s,r);const a=HE(r,s);let l,c;if(o.merge)l=new sn(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const u=[];for(const h of o.mergeFields){const d=UM(e,h,n);if(!s.contains(d))throw new V(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zM(u,d)||u.push(d)}l=new sn(u),c=s.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=s.fieldTransforms;return new jM(new Ht(a),l,c)}function BM(t,e,n,r=!1){return fg(n,t.Cu(r?4:3,e))}function fg(t,e){if(JE(t=Ai(t)))return qE("Unsupported field value:",e,t),HE(t,e);if(t instanceof UE)return function(r,i){if(!$E(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=fg(a,i.wu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ai(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=De.fromDate(r);return{timestampValue:nu(i.serializer,o)}}if(r instanceof De){const o=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,o)}}if(r instanceof hg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qo)return{bytesValue:dE(i.serializer,r._byteString)};if(r instanceof Wt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Su(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${dd(r)}`)}(t,e)}function HE(t,e){const n={};return jx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,i)=>{const o=fg(i,e.fu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function JE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof hg||t instanceof Qo||t instanceof Wt||t instanceof UE)}function qE(t,e,n){if(!JE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dd(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function UM(t,e,n){if((e=Ai(e))instanceof dg)return e._internalPath;if(typeof e=="string")return WE(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const $M=new RegExp("[~\\*/\\[\\]]");function WE(t,e,n){if(e.search($M)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dg(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new V(C.INVALID_ARGUMENT,a+t+l)}function zM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HM extends KE{data(){return super.data()}}function pd(t,e){return typeof e=="string"?WE(t,e):e instanceof dg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mg{}class gg extends mg{}function yg(t,e,...n){let r=[];e instanceof mg&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof vg).length,a=o.filter(l=>l instanceof fd).length;if(s>1||s>0&&a>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fd extends gg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=this._parse(e);return QE(e._query,n),new Zr(e.firestore,e.converter,Yp(e._query,n))}_parse(e){const n=zE(e.firestore);return function(o,s,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){I0(h,u);const p=[];for(const w of h)p.push(S0(l,o,w));d={arrayValue:{values:p}}}else d=S0(l,o,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||I0(h,u),d=BM(a,s,h,u==="in"||u==="not-in");return Ve.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function su(t,e,n){const r=e,i=pd("where",t);return fd._create(i,r,n)}class vg extends mg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)QE(s,l),s=Yp(s,l)}(e._query,n),new Zr(e.firestore,e.converter,Yp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wg extends gg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wg(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ma(o,s)}(e._query,this._field,this._direction);return new Zr(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new us(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function GE(t,e="asc"){const n=e,r=pd("orderBy",t);return wg._create(r,n)}class _g extends gg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _g(e,n,r)}_apply(e){return new Zr(e.firestore,e.converter,Zc(e._query,this._limit,this._limitType))}}function qM(t){return _g._create("limit",t,"F")}function S0(t,e,n){if(typeof(n=Ai(n))=="string"){if(n==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wx(e)&&n.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!$.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kv(t,new $(r))}if(n instanceof Wt)return Kv(t,n._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dd(n)}.`)}function I0(t,e){if(!Array.isArray(t)||t.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QE(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WM{convertValue(e,n="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new hg(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);ge(yE(r));const i=new Oa(r.get(1),r.get(3)),o=new $(r.popFirst(5));return i.isEqual(n)||kn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GM extends KE{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uc extends GM{data(e={}){return super.data(e)}}class QM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uc(this._firestore,this._userDataWriter,r.key,r,new Hl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),u=s.indexOf(a.doc.key)),{type:YM(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class XM extends WM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function bg(t){t=iu(t,Zr);const e=iu(t.firestore,ug),n=FE(e),r=new XM(e);return JM(t._query),RM(n,t._query).then(i=>new QM(e,r,t,i))}function YE(t,e){const n=iu(t.firestore,ug),r=DM(t),i=KM(t.converter,e);return ZM(n,[FM(zE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wn.exists(!1))]).then(()=>r)}function ZM(t,e){return function(r,i){const o=new qn;return r.asyncQueue.enqueueAndForget(async()=>mM(await CM(r),i,o)),o.promise}(FE(t),e)}(function(e,n=!0){(function(i){ls=i})(Cb),xa(new $o("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new ug(new WD(r.getProvider("auth-internal")),new YD(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(c.options.projectId,u)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Mr(zv,"4.5.0",e),Mr(zv,"4.5.0","esm2017")})();var ej="firebase",tj="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mr(ej,tj,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebasestorage.googleapis.com",nj="storageBucket",rj=2*60*1e3,ij=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ji{constructor(e,n,r=0){super(gh(e),`Firebase Storage: ${n} (${gh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Dn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Dn||(Dn={}));function gh(t){return"storage/"+t}function oj(){const t="An unknown error occurred, please check the error payload for server response.";return new Ln(Dn.UNKNOWN,t)}function sj(){return new Ln(Dn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aj(){return new Ln(Dn.CANCELED,"User canceled the upload/download.")}function lj(t){return new Ln(Dn.INVALID_URL,"Invalid URL '"+t+"'.")}function cj(t){return new Ln(Dn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function A0(t){return new Ln(Dn.INVALID_ARGUMENT,t)}function ZE(){return new Ln(Dn.APP_DELETED,"The Firebase app was deleted.")}function uj(t){return new Ln(Dn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(r.path==="")return r;throw cj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},y=n===XE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${_}`,"i"),v=[{regex:a,indices:l,postModify:o},{regex:p,indices:w,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<v.length;x++){const E=v[x],S=E.regex.exec(e);if(S){const I=S[E.indices.bucket];let R=S[E.indices.path];R||(R=""),r=new an(I,R),E.postModify(r);break}}if(r==null)throw lj(e);return r}}class dj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function d(){o&&clearTimeout(o)}function p(_,...m){if(c){d();return}if(_){d(),u.call(null,_,...m);return}if(l()||s){d(),u.call(null,_,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let w=!1;function y(_){w||(w=!0,d(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,y(!0)},n),y}function pj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fj(t){return t!==void 0}function C0(t,e,n,r){if(r<e)throw A0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A0(`Invalid value for '${t}'. Expected ${n} or less.`)}function mj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var au;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(au||(au={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yj{constructor(e,n,r,i,o,s,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,w)=>{this.resolve_=p,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Jl(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===au.NO_ERROR,l=o.getStatus();if(!a||gj(l,this.additionalRetryCodes_)&&this.retry){const u=o.getErrorCode()===au.ABORT;r(!1,new Jl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Jl(c,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fj(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=oj();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?ZE():aj();s(l)}else{const l=sj();s(l)}};this.canceled_?n(!1,new Jl(!1,null,!0)):this.backoffId_=hj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _j(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xj(t,e,n,r,i,o,s=!0){const a=mj(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return _j(c,e),vj(c,n),wj(c,o),bj(c,r),new yj(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ej(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Tj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new lu(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tj(this._location.path)}get storage(){return this._service}get parent(){const e=Ej(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new lu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uj(e)}}function P0(t,e){const n=e==null?void 0:e[nj];return n==null?null:an.makeFromBucketSpec(n,t)}function Sj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bb(i,t.app.options.projectId))}class Ij{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=XE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rj,this._maxUploadRetryTime=ij,this._requests=new Set,i!=null?this._bucket=an.makeFromBucketSpec(i,this._host):this._bucket=P0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=P0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new lu(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new dj(ZE());{const s=xj(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const R0="@firebase/storage",k0="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="storage";function Aj(t=Rb(),e){t=Ai(t);const r=Ab(t,eT).getImmediate({identifier:e}),i=wb("storage");return i&&Cj(r,...i),r}function Cj(t,e,n,r={}){Sj(t,e,n,r)}function Pj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ij(n,r,i,e,Cb)}function Rj(){xa(new $o(eT,Pj,"PUBLIC").setMultipleInstances(!0)),Mr(R0,k0,""),Mr(R0,k0,"esm2017")}Rj();const kj={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},tT=Pb(kj),Ba=LM(tT);Aj(tT);const Nj=async t=>{try{const e=yg(Fa(Ba,"subscriptions"),su("email","==",t));return(await bg(e)).empty?(await YE(Fa(Ba,"subscriptions"),{email:t,createdAt:De.now()}),wi.success("Successfully subscribed to the newsletter!"),!0):(wi.info("You're already subscribed to our newsletter!"),!0)}catch(e){return console.error("Error adding subscription: ",e),wi.error("Failed to subscribe. Please try again."),!1}},Dj=({className:t})=>{const[e,n]=b.useState(""),[r,i]=b.useState(!1),o=async s=>{if(s.preventDefault(),!(!e||!e.includes("@"))){i(!0);try{await Nj(e),n("")}catch(a){console.error("Error submitting email:",a)}finally{i(!1)}}};return f.jsxs("form",{onSubmit:o,className:`flex flex-col sm:flex-row justify-center gap-4 ${t}`,children:[f.jsxs("div",{className:"relative w-full max-w-sm",children:[f.jsx(UR,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),f.jsx(Mu,{type:"email",placeholder:"Enter your email",value:e,onChange:s=>n(s.target.value),className:"w-full rounded-full px-10 py-3 text-gray-900 shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 pl-10",required:!0})]}),f.jsx(ju,{type:"submit",disabled:r,className:"px-8 py-3 bg-white text-green-600 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform transition-transform duration-200",children:r?"Subscribing...":"Subscribe"})]})},Oj=()=>{const t=ym(),e=t[0],n=t.slice(1,7);return f.jsxs("div",{className:"min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-emerald-50",children:[f.jsxs("header",{className:"relative px-4 py-32 text-center overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(120deg,#84fab0,#8fd3f4)] opacity-5"}),f.jsx("h1",{className:"relative mb-6 text-7xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-fade-in",children:"Tech Chatter Box"}),f.jsx("p",{className:"mx-auto mb-12 max-w-2xl text-xl text-gray-600 leading-relaxed animate-fade-in",children:"Where code meets creativity. Exploring the intersection of technology, design, and the future of web development."}),f.jsxs("div",{className:"flex justify-center gap-4 animate-fade-in",children:[f.jsx(Ye,{to:"/blog",className:"px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105",children:"Start Reading"}),f.jsx("a",{href:"#newsletter",className:"px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-green-300 transition-all hover:scale-105",children:"Subscribe"})]})]}),f.jsxs("section",{className:"mx-auto max-w-7xl px-4 pb-20",children:[f.jsxs("h2",{className:"mb-12 text-4xl font-bold text-gray-900 text-center",children:["Latest ",f.jsx("span",{className:"text-green-600",children:"Stories"})]}),e&&f.jsx("div",{className:"mb-12",children:f.jsx("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:f.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[f.jsx("div",{className:"h-[400px] overflow-hidden rounded-xl",children:f.jsx("img",{src:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6",alt:e.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),f.jsxs("div",{className:"flex flex-col justify-center",children:[f.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4 w-fit",children:"Featured"}),f.jsx(Ye,{to:`/blog/${e.id}`,children:f.jsx("h3",{className:"mb-4 text-3xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors",children:e.title})}),f.jsxs("p",{className:"mb-6 text-gray-600 line-clamp-3",children:[e.content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,"").replace(/<[^>]*>/g,"").slice(0,150),"..."]}),f.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 mt-auto",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("img",{src:"/author.png",alt:e.author,className:"w-10 h-10 rounded-full"}),f.jsxs("div",{children:[f.jsx("p",{className:"font-medium text-gray-900",children:e.author}),f.jsx("p",{children:e.category})]})]}),f.jsxs("span",{children:[Cp(e.content)," min read"]})]})]})]})})}),f.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:n.map(r=>f.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[f.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:f.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:r.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),f.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4",children:r.category}),f.jsx(Ye,{to:`/blog/${r.id}`,children:f.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors",children:r.title})}),f.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[r.content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,"").replace(/<[^>]*>/g,"").slice(0,150),"..."]}),f.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("img",{src:"/author.png",alt:r.author,className:"w-8 h-8 rounded-full"}),f.jsx("span",{children:r.author})]}),f.jsxs("span",{children:[Cp(r.content)," min read"]})]})]},r.id))})]}),f.jsxs("section",{id:"newsletter",className:"relative py-24 mt-auto",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 skew-y-3 transform origin-bottom-right"}),f.jsxs("div",{className:"relative mx-auto max-w-2xl px-4 text-center",children:[f.jsx("h2",{className:"mb-4 text-4xl font-bold text-white",children:"Never Miss a Post"}),f.jsx("p",{className:"mb-8 text-green-100",children:"Join our newsletter and get the latest articles delivered straight to your inbox."}),f.jsx(Dj,{})]})]})]})},Yo={default:{keywords:["programming tutorials","java programming","tech news","web development","software engineering","Tech Chatter Box"],description:"Tech Chatter Box - Your go-to resource for programming tutorials, tech news, and developer insights."},pages:{blog:{keywords:["java tutorials","programming blog","coding tutorials","software development articles","tech blog"],description:"Explore our collection of in-depth programming tutorials and tech articles."},categories:{keywords:["programming categories","tech topics","coding subjects","development categories"],description:"Browse programming tutorials and articles by category."},about:{keywords:["tech blog about","programming community","developer resources"],description:"Learn more about Tech Chatter Box and our mission to educate developers."},contact:{keywords:["contact tech blog","programming help","developer support"],description:"Get in touch with Tech Chatter Box for questions or collaborations."}}},xg=({title:t="Tech Chatter Box",description:e,keywords:n,type:r="website",imageUrl:i="https://techchatterbox.com/og-image.png"})=>{const o=[...n||Yo.default.keywords].join(", "),s=e||Yo.default.description;return f.jsxs(gm,{children:[f.jsx("title",{children:t}),f.jsx("meta",{name:"description",content:s}),f.jsx("meta",{name:"keywords",content:o}),f.jsx("meta",{property:"og:type",content:r}),f.jsx("meta",{property:"og:title",content:t}),f.jsx("meta",{property:"og:description",content:s}),f.jsx("meta",{property:"og:image",content:i}),f.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),f.jsx("meta",{name:"twitter:title",content:t}),f.jsx("meta",{name:"twitter:description",content:s}),f.jsx("meta",{name:"twitter:image",content:i})]})},Lj=()=>{const t=ym();return f.jsxs(f.Fragment,{children:[f.jsx(xg,{title:"Blog - Tech Chatter Box",keywords:Yo.pages.blog.keywords,description:Yo.pages.blog.description}),f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:f.jsxs("div",{className:"container mx-auto px-4",children:[f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"All Blog Posts"}),f.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:t.map(e=>f.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[f.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:f.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:e.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),f.jsx(Ye,{to:`/blog/${e.id}`,className:"inline-block",children:f.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors",children:e.title})}),f.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[e.content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,"").replace(/<[^>]*>/g,"").slice(0,150),"..."]}),f.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("img",{src:"/author.png",alt:e.author,className:"w-8 h-8 rounded-full"}),f.jsx("span",{children:e.author})]}),f.jsxs("span",{children:[Cp(e.content)," min read"]})]})]},e.id))})]})})]})},Mj=({title:t,description:e,action:n,...r})=>{wi(t||"",{description:e,action:n?{label:n.label,onClick:n.onClick}:void 0,...r})},jj=()=>{const e=ym().reduce((o,s)=>(o[s.category]||(o[s.category]={count:0,color:r()}),o[s.category].count++,o),{}),n=Object.entries(e).map(([o,s])=>({name:o,count:s.count,color:s.color}));b.useEffect(()=>{Mj({title:"Categories Loaded",description:"Browse through our article categories",variant:"default"})},[]);function r(){const o=["purple","blue","green","rose","indigo","emerald"];return o[Math.floor(Math.random()*o.length)]}const i=o=>({purple:{bg:"bg-purple-100",text:"text-purple-700"},blue:{bg:"bg-blue-100",text:"text-blue-700"},green:{bg:"bg-green-100",text:"text-green-700"},rose:{bg:"bg-rose-100",text:"text-rose-700"},indigo:{bg:"bg-indigo-100",text:"text-indigo-700"},emerald:{bg:"bg-emerald-100",text:"text-emerald-700"}})[o]||{bg:"bg-gray-100",text:"text-gray-700"};return f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:f.jsxs("div",{className:"container mx-auto px-4",children:[f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-12",children:"Categories"}),f.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:n&&n.length>0?n.map(o=>{const s=i(o.color);return f.jsx(Ye,{to:`/blog?category=${o.name.toLowerCase()}`,className:"group block p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h3",{className:"text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:o.name}),f.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${s.bg} ${s.text}`,children:[o.count," posts"]})]})},o.name)}):f.jsx("p",{className:"text-gray-500 col-span-3 text-center py-10",children:"No categories found."})})]})})},Vj=()=>f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:f.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"About Tech Chatter Box"}),f.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[f.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Welcome to Tech Chatter Box, a community-driven blog dedicated to sharing knowledge, experiences, and insights about software development, design, and technology."}),f.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Our mission is to create a space where developers can learn from each other, stay updated with the latest trends, and grow their skills through high-quality content."}),f.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Our Values"}),f.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-6 space-y-2",children:[f.jsx("li",{children:"Quality over quantity"}),f.jsx("li",{children:"Community-driven learning"}),f.jsx("li",{children:"Practical, actionable content"}),f.jsx("li",{children:"Inclusive and accessible education"})]})]})]})}),Fj=()=>f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:f.jsxs("div",{className:"container mx-auto px-4 max-w-2xl",children:[f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Contact Us"}),f.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:f.jsxs("form",{className:"space-y-6",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),f.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your name"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),f.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"your@email.com"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),f.jsx("textarea",{id:"message",rows:4,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your message"})]}),f.jsx("button",{type:"submit",className:"w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:"Send Message"})]})})]})}),Bj=()=>{const t=os();return b.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center",children:f.jsxs("div",{className:"text-center px-4",children:[f.jsx("h1",{className:"text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4",children:"404"}),f.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Oops! Page not found"}),f.jsx(Ye,{to:"/",className:"inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity",children:"Return to Home"})]})})},nT=b.forwardRef(({className:t,...e},n)=>f.jsx("textarea",{className:Nu("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));nT.displayName="Textarea";const Uj=async t=>{try{return await YE(Fa(Ba,"comments"),{...t,createdAt:De.now()}),wi.success("Comment added successfully!"),!0}catch(e){return console.error("Error adding comment: ",e),wi.error("Failed to add comment. Please try again."),!1}},N0=async t=>{try{const e=yg(Fa(Ba,"comments"),su("postId","==",t),GE("createdAt","desc"));return(await bg(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error fetching comments: ",e),wi.error("Failed to load comments."),[]}},$j=()=>{const{id:t}=nb(),[e,n]=b.useState([]),[r,i]=b.useState({name:"",content:""}),[o,s]=b.useState(!1),[a,l]=b.useState(!0);b.useEffect(()=>{(async()=>{if(t){l(!0);const h=await N0(t);n(h),l(!1)}})()},[t]);const c=async u=>{if(u.preventDefault(),!(!r.name||!r.content)){s(!0);try{if(t&&await Uj({postId:t,name:r.name,content:r.content})){const d=await N0(t);n(d),i({name:"",content:""})}}finally{s(!1)}}};return f.jsxs("div",{className:"mt-12 pt-8 border-t border-gray-200",children:[f.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Comments"}),f.jsxs("form",{onSubmit:c,className:"mb-8 bg-gray-50 p-6 rounded-lg",children:[f.jsx("h4",{className:"text-xl font-medium mb-4",children:"Add a Comment"}),f.jsx("div",{className:"mb-4",children:f.jsx(Mu,{type:"text",placeholder:"Your Name",value:r.name,onChange:u=>i({...r,name:u.target.value}),className:"w-full",required:!0})}),f.jsx("div",{className:"mb-4",children:f.jsx(nT,{placeholder:"Write your comment here...",value:r.content,onChange:u=>i({...r,content:u.target.value}),className:"w-full h-32",required:!0})}),f.jsx(ju,{type:"submit",disabled:o,className:"bg-gradient-to-r from-green-500 to-emerald-600 text-white",children:o?"Posting...":"Post Comment"})]}),a?f.jsx("p",{className:"text-center text-gray-500",children:"Loading comments..."}):e.length>0?f.jsx("div",{className:"space-y-6",children:e.map(u=>f.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("p",{className:"font-medium",children:u.name}),f.jsx("p",{className:"text-sm text-gray-500",children:u.createdAt.toDate().toLocaleDateString()})]}),f.jsx("p",{className:"text-gray-700",children:u.content})]},u.id))}):f.jsx("p",{className:"text-center text-gray-500",children:"No comments yet. Be the first to comment!"})]})},zj=()=>{var n;const{id:t}=nb(),e=gk(t||"");return e?f.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:[f.jsxs(gm,{children:[f.jsxs("title",{children:[e.title," - Tech Chatter Box"]}),f.jsx("meta",{name:"description",content:e.title}),f.jsx("meta",{property:"og:title",content:`${e.title} - Tech Chatter Box`}),f.jsx("meta",{property:"og:description",content:e.title}),f.jsx("meta",{name:"keywords",content:(n=e.keywords)==null?void 0:n.join(", ")})]}),f.jsxs("article",{className:"container mx-auto px-4 max-w-3xl",children:[f.jsxs("div",{className:"mb-8",children:[f.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4",children:e.category}),f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:e.title}),f.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600 mb-8",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:"/author.png",alt:e.author,className:"w-10 h-10 rounded-full"}),f.jsx("span",{children:e.author})]}),f.jsxs("div",{className:"flex gap-4",children:[f.jsx("span",{children:e.date}),f.jsxs("span",{children:[e.readTime," min read"]})]})]})]}),f.jsx("div",{className:"prose prose-lg prose-green max-w-none",children:f.jsx("div",{dangerouslySetInnerHTML:{__html:e.content}})}),f.jsx($j,{})]})]}):f.jsxs("div",{className:"container mx-auto px-4 py-16",children:[f.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Post not found"}),f.jsx("p",{children:"The blog post you're looking for doesn't exist or has been removed."})]})},Hj=()=>f.jsxs(f.Fragment,{children:[f.jsx(xg,{title:"Privacy Policy - Tech Chatter Box",description:"Our privacy policy outlines how we collect, use, and protect your personal information.",keywords:[...Yo.default.keywords,"privacy policy","data protection","user privacy"]}),f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:f.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Privacy Policy"}),f.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[f.jsx("p",{className:"text-gray-600 mb-6",children:"Last updated: April 20, 2025"}),f.jsxs("section",{className:"mb-8",children:[f.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"1. Information We Collect"}),f.jsx("p",{className:"text-gray-600 mb-4",children:"We collect information that you provide directly to us, including:"}),f.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-2",children:[f.jsx("li",{children:"Contact information when you subscribe to our newsletter"}),f.jsx("li",{children:"Comments and feedback you provide on our blog posts"}),f.jsx("li",{children:"Information you submit through our contact form"})]})]}),f.jsxs("section",{className:"mb-8",children:[f.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"2. How We Use Your Information"}),f.jsx("p",{className:"text-gray-600 mb-4",children:"We use the information we collect to:"}),f.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-2",children:[f.jsx("li",{children:"Provide and improve our services"}),f.jsx("li",{children:"Send you updates and newsletters"}),f.jsx("li",{children:"Respond to your inquiries"}),f.jsx("li",{children:"Monitor and analyze website usage"})]})]})]})]})})]}),Jj=()=>f.jsxs(f.Fragment,{children:[f.jsx(xg,{title:"Terms of Service - Tech Chatter Box",description:"Our terms of service outline the rules and guidelines for using our website.",keywords:[...Yo.default.keywords,"terms of service","terms and conditions","user agreement"]}),f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:f.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[f.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Terms of Service"}),f.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[f.jsx("p",{className:"text-gray-600 mb-6",children:"Last updated: April 20, 2025"}),f.jsxs("section",{className:"mb-8",children:[f.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"1. Agreement to Terms"}),f.jsx("p",{className:"text-gray-600 mb-4",children:"By accessing our website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws."})]}),f.jsxs("section",{className:"mb-8",children:[f.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"2. Intellectual Property"}),f.jsx("p",{className:"text-gray-600 mb-4",children:"All content published on this website is the property of Tech Chatter Box and protected by international copyright laws."})]})]})]})})]}),qj=async t=>{try{const e=Fa(Ba,"blogPosts"),n=yg(e,su("titleLowerCase",">=",t.toLowerCase()),su("titleLowerCase","<=",t.toLowerCase()+""),GE("titleLowerCase"),qM(10));return(await bg(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){return console.error("Error searching blog posts: ",e),[]}},Wj=()=>{const[t]=aR(),e=t.get("q")||"",[n,r]=b.useState([]),[i,o]=b.useState(!1);return b.useEffect(()=>{(async()=>{if(e){o(!0);try{const a=await qj(e);r(a)}finally{o(!1)}}})()},[e]),f.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16",children:[f.jsx(gm,{children:f.jsxs("title",{children:['Search Results for "',e,'" - Tech Chatter Box']})}),f.jsxs("div",{className:"container mx-auto px-4",children:[f.jsxs("div",{className:"mb-10 text-center",children:[f.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Search Results"}),f.jsx("div",{className:"flex justify-center",children:f.jsx(mb,{})})]}),i?f.jsx("div",{className:"flex justify-center my-20",children:f.jsx("p",{className:"text-gray-500",children:"Searching..."})}):n.length>0?f.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:n.map(s=>f.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[f.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:f.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:s.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),f.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4",children:s.category}),f.jsx(Ye,{to:`/blog/${s.id}`,children:f.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors",children:s.title})}),f.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[s.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]})]},s.id))}):f.jsxs("div",{className:"text-center my-20",children:[f.jsxs("p",{className:"text-gray-500 mb-4",children:['No results found for "',e,'"']}),f.jsx("p",{className:"text-gray-600",children:"Try different keywords or check out our blog posts."}),f.jsx(Ye,{to:"/blog",className:"mt-6 inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:opacity-90 transition-all",children:"View All Posts"})]})]})]})},Kj=new oP,Gj=()=>f.jsx(hb,{children:f.jsx(aP,{client:Kj,children:f.jsx(MC,{children:f.jsxs("div",{className:"bg-[#F2FCE2] min-h-screen flex flex-col",children:[f.jsx(uA,{}),f.jsxs(rR,{children:[f.jsx(zR,{}),f.jsx("div",{className:"flex-grow",children:f.jsxs(GP,{children:[f.jsx(Xt,{path:"/",element:f.jsx(Oj,{})}),f.jsx(Xt,{path:"/blog",element:f.jsx(Lj,{})}),f.jsx(Xt,{path:"/blog/:id",element:f.jsx(zj,{})}),f.jsx(Xt,{path:"/categories",element:f.jsx(jj,{})}),f.jsx(Xt,{path:"/about",element:f.jsx(Vj,{})}),f.jsx(Xt,{path:"/contact",element:f.jsx(Fj,{})}),f.jsx(Xt,{path:"/privacy-policy",element:f.jsx(Hj,{})}),f.jsx(Xt,{path:"/terms",element:f.jsx(Jj,{})}),f.jsx(Xt,{path:"/search",element:f.jsx(Wj,{})}),f.jsx(Xt,{path:"*",element:f.jsx(Bj,{})})]})}),f.jsx(HR,{})]})]})})})});Z_(document.getElementById("root")).render(f.jsx(Gj,{}));
