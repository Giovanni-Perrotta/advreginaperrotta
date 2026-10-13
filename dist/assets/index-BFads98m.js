(function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))A(O);new MutationObserver(O=>{for(const V of O)if(V.type==="childList")for(const U of V.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&A(U)}).observe(document,{childList:!0,subtree:!0});function h(O){const V={};return O.integrity&&(V.integrity=O.integrity),O.referrerPolicy&&(V.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?V.credentials="include":O.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function A(O){if(O.ep)return;O.ep=!0;const V=h(O);fetch(O.href,V)}})();function Fu(k){return k&&k.__esModule&&Object.prototype.hasOwnProperty.call(k,"default")?k.default:k}var El={exports:{}},yr={},Nl={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Dd(){if(zu)return F;zu=1;var k=Symbol.for("react.element"),D=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),U=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ae=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),oe=Symbol.iterator;function ee(d){return d===null||typeof d!="object"?null:(d=oe&&d[oe]||d["@@iterator"],typeof d=="function"?d:null)}var $e={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,te={};function Y(d,g,M){this.props=d,this.context=g,this.refs=te,this.updater=M||$e}Y.prototype.isReactComponent={},Y.prototype.setState=function(d,g){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,g,"setState")},Y.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function gt(){}gt.prototype=Y.prototype;function ut(d,g,M){this.props=d,this.context=g,this.refs=te,this.updater=M||$e}var be=ut.prototype=new gt;be.constructor=ut,He(be,Y.prototype),be.isPureReactComponent=!0;var ke=Array.isArray,et=Object.prototype.hasOwnProperty,Ce={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function We(d,g,M){var I,B={},$=null,X=null;if(g!=null)for(I in g.ref!==void 0&&(X=g.ref),g.key!==void 0&&($=""+g.key),g)et.call(g,I)&&!Pe.hasOwnProperty(I)&&(B[I]=g[I]);var Q=arguments.length-2;if(Q===1)B.children=M;else if(1<Q){for(var ne=Array(Q),Ae=0;Ae<Q;Ae++)ne[Ae]=arguments[Ae+2];B.children=ne}if(d&&d.defaultProps)for(I in Q=d.defaultProps,Q)B[I]===void 0&&(B[I]=Q[I]);return{$$typeof:k,type:d,key:$,ref:X,props:B,_owner:Ce.current}}function zt(d,g){return{$$typeof:k,type:d.type,key:g,ref:d.ref,props:d.props,_owner:d._owner}}function yt(d){return typeof d=="object"&&d!==null&&d.$$typeof===k}function Kt(d){var g={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(M){return g[M]})}var ct=/\/+/g;function Ie(d,g){return typeof d=="object"&&d!==null&&d.key!=null?Kt(""+d.key):g.toString(36)}function tt(d,g,M,I,B){var $=typeof d;($==="undefined"||$==="boolean")&&(d=null);var X=!1;if(d===null)X=!0;else switch($){case"string":case"number":X=!0;break;case"object":switch(d.$$typeof){case k:case D:X=!0}}if(X)return X=d,B=B(X),d=I===""?"."+Ie(X,0):I,ke(B)?(M="",d!=null&&(M=d.replace(ct,"$&/")+"/"),tt(B,g,M,"",function(Ae){return Ae})):B!=null&&(yt(B)&&(B=zt(B,M+(!B.key||X&&X.key===B.key?"":(""+B.key).replace(ct,"$&/")+"/")+d)),g.push(B)),1;if(X=0,I=I===""?".":I+":",ke(d))for(var Q=0;Q<d.length;Q++){$=d[Q];var ne=I+Ie($,Q);X+=tt($,g,M,ne,B)}else if(ne=ee(d),typeof ne=="function")for(d=ne.call(d),Q=0;!($=d.next()).done;)$=$.value,ne=I+Ie($,Q++),X+=tt($,g,M,ne,B);else if($==="object")throw g=String(d),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return X}function dt(d,g,M){if(d==null)return d;var I=[],B=0;return tt(d,I,"","",function($){return g.call(M,$,B++)}),I}function Le(d){if(d._status===-1){var g=d._result;g=g(),g.then(function(M){(d._status===0||d._status===-1)&&(d._status=1,d._result=M)},function(M){(d._status===0||d._status===-1)&&(d._status=2,d._result=M)}),d._status===-1&&(d._status=0,d._result=g)}if(d._status===1)return d._result.default;throw d._result}var se={current:null},S={transition:null},R={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:S,ReactCurrentOwner:Ce};function N(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:dt,forEach:function(d,g,M){dt(d,function(){g.apply(this,arguments)},M)},count:function(d){var g=0;return dt(d,function(){g++}),g},toArray:function(d){return dt(d,function(g){return g})||[]},only:function(d){if(!yt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},F.Component=Y,F.Fragment=h,F.Profiler=O,F.PureComponent=ut,F.StrictMode=A,F.Suspense=W,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,F.act=N,F.cloneElement=function(d,g,M){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var I=He({},d.props),B=d.key,$=d.ref,X=d._owner;if(g!=null){if(g.ref!==void 0&&($=g.ref,X=Ce.current),g.key!==void 0&&(B=""+g.key),d.type&&d.type.defaultProps)var Q=d.type.defaultProps;for(ne in g)et.call(g,ne)&&!Pe.hasOwnProperty(ne)&&(I[ne]=g[ne]===void 0&&Q!==void 0?Q[ne]:g[ne])}var ne=arguments.length-2;if(ne===1)I.children=M;else if(1<ne){Q=Array(ne);for(var Ae=0;Ae<ne;Ae++)Q[Ae]=arguments[Ae+2];I.children=Q}return{$$typeof:k,type:d.type,key:B,ref:$,props:I,_owner:X}},F.createContext=function(d){return d={$$typeof:U,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:V,_context:d},d.Consumer=d},F.createElement=We,F.createFactory=function(d){var g=We.bind(null,d);return g.type=d,g},F.createRef=function(){return{current:null}},F.forwardRef=function(d){return{$$typeof:G,render:d}},F.isValidElement=yt,F.lazy=function(d){return{$$typeof:ye,_payload:{_status:-1,_result:d},_init:Le}},F.memo=function(d,g){return{$$typeof:ae,type:d,compare:g===void 0?null:g}},F.startTransition=function(d){var g=S.transition;S.transition={};try{d()}finally{S.transition=g}},F.unstable_act=N,F.useCallback=function(d,g){return se.current.useCallback(d,g)},F.useContext=function(d){return se.current.useContext(d)},F.useDebugValue=function(){},F.useDeferredValue=function(d){return se.current.useDeferredValue(d)},F.useEffect=function(d,g){return se.current.useEffect(d,g)},F.useId=function(){return se.current.useId()},F.useImperativeHandle=function(d,g,M){return se.current.useImperativeHandle(d,g,M)},F.useInsertionEffect=function(d,g){return se.current.useInsertionEffect(d,g)},F.useLayoutEffect=function(d,g){return se.current.useLayoutEffect(d,g)},F.useMemo=function(d,g){return se.current.useMemo(d,g)},F.useReducer=function(d,g,M){return se.current.useReducer(d,g,M)},F.useRef=function(d){return se.current.useRef(d)},F.useState=function(d){return se.current.useState(d)},F.useSyncExternalStore=function(d,g,M){return se.current.useSyncExternalStore(d,g,M)},F.useTransition=function(){return se.current.useTransition()},F.version="18.3.1",F}var _u;function Rl(){return _u||(_u=1,Nl.exports=Dd()),Nl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Od(){if(Pu)return yr;Pu=1;var k=Rl(),D=Symbol.for("react.element"),h=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,O=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function U(G,W,ae){var ye,oe={},ee=null,$e=null;ae!==void 0&&(ee=""+ae),W.key!==void 0&&(ee=""+W.key),W.ref!==void 0&&($e=W.ref);for(ye in W)A.call(W,ye)&&!V.hasOwnProperty(ye)&&(oe[ye]=W[ye]);if(G&&G.defaultProps)for(ye in W=G.defaultProps,W)oe[ye]===void 0&&(oe[ye]=W[ye]);return{$$typeof:D,type:G,key:ee,ref:$e,props:oe,_owner:O.current}}return yr.Fragment=h,yr.jsx=U,yr.jsxs=U,yr}var Lu;function Md(){return Lu||(Lu=1,El.exports=Od()),El.exports}var a=Md(),Je=Rl();const Fd=Fu(Je);var Lo={},Cl={exports:{}},Fe={},zl={exports:{}},_l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Id(){return Ru||(Ru=1,(function(k){function D(S,R){var N=S.length;S.push(R);e:for(;0<N;){var d=N-1>>>1,g=S[d];if(0<O(g,R))S[d]=R,S[N]=g,N=d;else break e}}function h(S){return S.length===0?null:S[0]}function A(S){if(S.length===0)return null;var R=S[0],N=S.pop();if(N!==R){S[0]=N;e:for(var d=0,g=S.length,M=g>>>1;d<M;){var I=2*(d+1)-1,B=S[I],$=I+1,X=S[$];if(0>O(B,N))$<g&&0>O(X,B)?(S[d]=X,S[$]=N,d=$):(S[d]=B,S[I]=N,d=I);else if($<g&&0>O(X,N))S[d]=X,S[$]=N,d=$;else break e}}return R}function O(S,R){var N=S.sortIndex-R.sortIndex;return N!==0?N:S.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var V=performance;k.unstable_now=function(){return V.now()}}else{var U=Date,G=U.now();k.unstable_now=function(){return U.now()-G}}var W=[],ae=[],ye=1,oe=null,ee=3,$e=!1,He=!1,te=!1,Y=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function be(S){for(var R=h(ae);R!==null;){if(R.callback===null)A(ae);else if(R.startTime<=S)A(ae),R.sortIndex=R.expirationTime,D(W,R);else break;R=h(ae)}}function ke(S){if(te=!1,be(S),!He)if(h(W)!==null)He=!0,Le(et);else{var R=h(ae);R!==null&&se(ke,R.startTime-S)}}function et(S,R){He=!1,te&&(te=!1,gt(We),We=-1),$e=!0;var N=ee;try{for(be(R),oe=h(W);oe!==null&&(!(oe.expirationTime>R)||S&&!Kt());){var d=oe.callback;if(typeof d=="function"){oe.callback=null,ee=oe.priorityLevel;var g=d(oe.expirationTime<=R);R=k.unstable_now(),typeof g=="function"?oe.callback=g:oe===h(W)&&A(W),be(R)}else A(W);oe=h(W)}if(oe!==null)var M=!0;else{var I=h(ae);I!==null&&se(ke,I.startTime-R),M=!1}return M}finally{oe=null,ee=N,$e=!1}}var Ce=!1,Pe=null,We=-1,zt=5,yt=-1;function Kt(){return!(k.unstable_now()-yt<zt)}function ct(){if(Pe!==null){var S=k.unstable_now();yt=S;var R=!0;try{R=Pe(!0,S)}finally{R?Ie():(Ce=!1,Pe=null)}}else Ce=!1}var Ie;if(typeof ut=="function")Ie=function(){ut(ct)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,dt=tt.port2;tt.port1.onmessage=ct,Ie=function(){dt.postMessage(null)}}else Ie=function(){Y(ct,0)};function Le(S){Pe=S,Ce||(Ce=!0,Ie())}function se(S,R){We=Y(function(){S(k.unstable_now())},R)}k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(S){S.callback=null},k.unstable_continueExecution=function(){He||$e||(He=!0,Le(et))},k.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zt=0<S?Math.floor(1e3/S):5},k.unstable_getCurrentPriorityLevel=function(){return ee},k.unstable_getFirstCallbackNode=function(){return h(W)},k.unstable_next=function(S){switch(ee){case 1:case 2:case 3:var R=3;break;default:R=ee}var N=ee;ee=R;try{return S()}finally{ee=N}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=function(){},k.unstable_runWithPriority=function(S,R){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=ee;ee=S;try{return R()}finally{ee=N}},k.unstable_scheduleCallback=function(S,R,N){var d=k.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?d+N:d):N=d,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=N+g,S={id:ye++,callback:R,priorityLevel:S,startTime:N,expirationTime:g,sortIndex:-1},N>d?(S.sortIndex=N,D(ae,S),h(W)===null&&S===h(ae)&&(te?(gt(We),We=-1):te=!0,se(ke,N-d))):(S.sortIndex=g,D(W,S),He||$e||(He=!0,Le(et))),S},k.unstable_shouldYield=Kt,k.unstable_wrapCallback=function(S){var R=ee;return function(){var N=ee;ee=R;try{return S.apply(this,arguments)}finally{ee=N}}}})(_l)),_l}var Tu;function Ad(){return Tu||(Tu=1,zl.exports=Id()),zl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Ud(){if(Du)return Fe;Du=1;var k=Rl(),D=Ad();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A=new Set,O={};function V(e,t){U(e,t),U(e+"Capture",t)}function U(e,t){for(O[e]=t,e=0;e<t.length;e++)A.add(t[e])}var G=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W=Object.prototype.hasOwnProperty,ae=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ye={},oe={};function ee(e){return W.call(oe,e)?!0:W.call(ye,e)?!1:ae.test(e)?oe[e]=!0:(ye[e]=!0,!1)}function $e(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function He(e,t,n,r){if(t===null||typeof t>"u"||$e(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function te(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new te(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function ut(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,ut);Y[t]=new te(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,ut);Y[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,ut);Y[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});function be(e,t,n,r){var o=Y.hasOwnProperty(t)?Y[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(He(t,n,o,r)&&(n=null),r||o===null?ee(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ke=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),We=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),S=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var N=Object.assign,d;function g(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var M=!1;function I(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function B(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=I(e.type,!1),e;case 11:return e=I(e.type.render,!1),e;case 1:return e=I(e.type,!0),e;default:return""}}function $(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case Ce:return"Portal";case zt:return"Profiler";case We:return"StrictMode";case Ie:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}function X(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===We?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Ae(e))}function Dl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ne(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ro(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ol(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ml(e,t){t=t.checked,t!=null&&be(e,"checked",t,!1)}function To(e,t){Ml(e,t);var n=Q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Do(e,t.type,n):t.hasOwnProperty("defaultValue")&&Do(e,t.type,Q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Do(e,t,n){(t!=="number"||wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Q(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Il(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Dn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Q(n)}}function Al(e,t){var n=Q(t.value),r=Q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ul(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ql(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ql(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Vl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Iu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Bl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function $l(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Bl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Au=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(Au[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function Uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,un=null,cn=null;function Hl(e){if(e=rr(e)){if(typeof qo!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Hr(t),qo(e.stateNode,e.type,t))}}function Wl(e){un?cn?cn.push(e):cn=[e]:un=e}function Ql(){if(un){var e=un,t=cn;if(cn=un=null,Hl(e),t)for(e=0;e<t.length;e++)Hl(t[e])}}function Kl(e,t){return e(t)}function Yl(){}var Vo=!1;function Gl(e,t,n){if(Vo)return e(t,n);Vo=!0;try{return Kl(e,t,n)}finally{Vo=!1,(un!==null||cn!==null)&&(Yl(),Ql())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=Hr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Bo=!1;if(G)try{var In={};Object.defineProperty(In,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{Bo=!1}function Uu(e,t,n,r,o,i,l,s,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var An=!1,Sr=null,jr=!1,$o=null,qu={onError:function(e){An=!0,Sr=e}};function Vu(e,t,n,r,o,i,l,s,u){An=!1,Sr=null,Uu.apply(qu,arguments)}function Bu(e,t,n,r,o,i,l,s,u){if(Vu.apply(this,arguments),An){if(An){var m=Sr;An=!1,Sr=null}else throw Error(h(198));jr||(jr=!0,$o=m)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zl(e){if(Yt(e)!==e)throw Error(h(188))}function $u(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zl(o),e;if(i===r)return Zl(o),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Jl(e){return e=$u(e),e!==null?bl(e):null}function bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bl(e);if(t!==null)return t;e=e.sibling}return null}var ea=D.unstable_scheduleCallback,ta=D.unstable_cancelCallback,Hu=D.unstable_shouldYield,Wu=D.unstable_requestPaint,ce=D.unstable_now,Qu=D.unstable_getCurrentPriorityLevel,Ho=D.unstable_ImmediatePriority,na=D.unstable_UserBlockingPriority,Er=D.unstable_NormalPriority,Ku=D.unstable_LowPriority,ra=D.unstable_IdlePriority,Nr=null,ft=null;function Yu(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Nr,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Zu,Gu=Math.log,Xu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Gu(e)/Xu|0)|0}var Cr=64,zr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Un(s):(i&=l,i!==0&&(r=Un(i)))}else l=n&~o,l!==0?r=Un(l):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ju(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-nt(i),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=Ju(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oa(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function ec(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function ia(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var la,Yo,aa,sa,ua,Go=!1,Pr=[],_t=null,Pt=null,Lt=null,Vn=new Map,Bn=new Map,Rt=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function $n(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=rr(t),t!==null&&Yo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nc(e,t,n,r,o){switch(t){case"focusin":return _t=$n(_t,e,t,n,r,o),!0;case"dragenter":return Pt=$n(Pt,e,t,n,r,o),!0;case"mouseover":return Lt=$n(Lt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vn.set(i,$n(Vn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Bn.set(i,$n(Bn.get(i)||null,e,t,n,r,o)),!0}return!1}function da(e){var t=Gt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Xl(n),t!==null){e.blockedOn=t,ua(e.priority,function(){aa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ao=r,n.target.dispatchEvent(r),Ao=null}else return t=rr(n),t!==null&&Yo(t),e.blockedOn=n,!1;t.shift()}return!0}function fa(e,t,n){Lr(e)&&n.delete(t)}function rc(){Go=!1,_t!==null&&Lr(_t)&&(_t=null),Pt!==null&&Lr(Pt)&&(Pt=null),Lt!==null&&Lr(Lt)&&(Lt=null),Vn.forEach(fa),Bn.forEach(fa)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Go||(Go=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,rc)))}function Wn(e){function t(o){return Hn(o,e)}if(0<Pr.length){Hn(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Hn(_t,e),Pt!==null&&Hn(Pt,e),Lt!==null&&Hn(Lt,e),Vn.forEach(t),Bn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)da(n),n.blockedOn===null&&Rt.shift()}var dn=ke.ReactCurrentBatchConfig,Rr=!0;function oc(e,t,n,r){var o=K,i=dn.transition;dn.transition=null;try{K=1,Xo(e,t,n,r)}finally{K=o,dn.transition=i}}function ic(e,t,n,r){var o=K,i=dn.transition;dn.transition=null;try{K=4,Xo(e,t,n,r)}finally{K=o,dn.transition=i}}function Xo(e,t,n,r){if(Rr){var o=Zo(e,t,n,r);if(o===null)mi(e,t,r,Tr,n),ca(e,r);else if(nc(o,e,t,n,r))r.stopPropagation();else if(ca(e,r),t&4&&-1<tc.indexOf(e)){for(;o!==null;){var i=rr(o);if(i!==null&&la(i),i=Zo(e,t,n,r),i===null&&mi(e,t,r,Tr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else mi(e,t,r,null,n)}}var Tr=null;function Zo(e,t,n,r){if(Tr=null,e=Uo(r),e=Gt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tr=e,null}function pa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Ho:return 1;case na:return 4;case Er:case Ku:return 16;case ra:return 536870912;default:return 16}default:return 16}}var Tt=null,Jo=null,Dr=null;function ma(){if(Dr)return Dr;var e,t=Jo,n=t.length,r,o="value"in Tt?Tt.value:Tt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Dr=o.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function ha(){return!1}function Ue(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Mr:ha,this.isPropagationStopped=ha,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Ue(fn),Qn=N({},fn,{view:0,detail:0}),lc=Ue(Qn),ei,ti,Kn,Fr=N({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ei=e.screenX-Kn.screenX,ti=e.screenY-Kn.screenY):ti=ei=0,Kn=e),ei)},movementY:function(e){return"movementY"in e?e.movementY:ti}}),va=Ue(Fr),ac=N({},Fr,{dataTransfer:0}),sc=Ue(ac),uc=N({},Qn,{relatedTarget:0}),ni=Ue(uc),cc=N({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=Ue(cc),fc=N({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ue(fc),mc=N({},fn,{data:0}),ga=Ue(mc),hc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gc[e])?!!t[e]:!1}function ri(){return yc}var xc=N({},Qn,{key:function(e){if(e.key){var t=hc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wc=Ue(xc),kc=N({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Ue(kc),Sc=N({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),jc=Ue(Sc),Ec=N({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nc=Ue(Ec),Cc=N({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zc=Ue(Cc),_c=[9,13,27,32],oi=G&&"CompositionEvent"in window,Yn=null;G&&"documentMode"in document&&(Yn=document.documentMode);var Pc=G&&"TextEvent"in window&&!Yn,xa=G&&(!oi||Yn&&8<Yn&&11>=Yn),wa=" ",ka=!1;function Sa(e,t){switch(e){case"keyup":return _c.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Lc(e,t){switch(e){case"compositionend":return ja(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function Rc(e,t){if(pn)return e==="compositionend"||!oi&&Sa(e,t)?(e=ma(),Dr=Jo=Tt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xa&&t.locale!=="ko"?null:t.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tc[e.type]:t==="textarea"}function Na(e,t,n,r){Wl(r),t=Vr(t,"onChange"),0<t.length&&(n=new bo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Xn=null;function Dc(e){$a(e,0)}function Ir(e){var t=yn(e);if(Dl(t))return e}function Oc(e,t){if(e==="change")return t}var Ca=!1;if(G){var ii;if(G){var li="oninput"in document;if(!li){var za=document.createElement("div");za.setAttribute("oninput","return;"),li=typeof za.oninput=="function"}ii=li}else ii=!1;Ca=ii&&(!document.documentMode||9<document.documentMode)}function _a(){Gn&&(Gn.detachEvent("onpropertychange",Pa),Xn=Gn=null)}function Pa(e){if(e.propertyName==="value"&&Ir(Xn)){var t=[];Na(t,Xn,e,Uo(e)),Gl(Dc,t)}}function Mc(e,t,n){e==="focusin"?(_a(),Gn=t,Xn=n,Gn.attachEvent("onpropertychange",Pa)):e==="focusout"&&_a()}function Fc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(Xn)}function Ic(e,t){if(e==="click")return Ir(t)}function Ac(e,t){if(e==="input"||e==="change")return Ir(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Uc;function Zn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!W.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Ta(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ta(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Da(){for(var e=window,t=wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wr(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qc(e){var t=Da(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ta(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ra(n,i);var l=Ra(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vc=G&&"documentMode"in document&&11>=document.documentMode,mn=null,si=null,Jn=null,ui=!1;function Oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ui||mn==null||mn!==wr(r)||(r=mn,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&Zn(Jn,r)||(Jn=r,r=Vr(si,"onSelect"),0<r.length&&(t=new bo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},ci={},Ma={};G&&(Ma=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ur(e){if(ci[e])return ci[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ma)return ci[e]=t[n];return e}var Fa=Ur("animationend"),Ia=Ur("animationiteration"),Aa=Ur("animationstart"),Ua=Ur("transitionend"),qa=new Map,Va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){qa.set(e,t),V(t,[e])}for(var di=0;di<Va.length;di++){var fi=Va[di],Bc=fi.toLowerCase(),$c=fi[0].toUpperCase()+fi.slice(1);Dt(Bc,"on"+$c)}Dt(Fa,"onAnimationEnd"),Dt(Ia,"onAnimationIteration"),Dt(Aa,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Ua,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),V("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),V("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),V("onBeforeInput",["compositionend","keypress","textInput","paste"]),V("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hc=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bu(r,t,void 0,e),e.currentTarget=null}function $a(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ba(o,s,m),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,m=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ba(o,s,m),i=u}}}if(jr)throw e=$o,jr=!1,$o=null,e}function J(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(Ha(t,e,2,!1),n.add(r))}function pi(e,t,n){var r=0;t&&(r|=4),Ha(n,e,r,t)}var qr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[qr]){e[qr]=!0,A.forEach(function(n){n!=="selectionchange"&&(Hc.has(n)||pi(n,!1,e),pi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qr]||(t[qr]=!0,pi("selectionchange",!1,t))}}function Ha(e,t,n,r){switch(pa(t)){case 1:var o=oc;break;case 4:o=ic;break;default:o=Xo}n=o.bind(null,t,n,e),o=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function mi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Gt(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Gl(function(){var m=i,y=Uo(n),x=[];e:{var v=qa.get(e);if(v!==void 0){var j=bo,C=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":j=wc;break;case"focusin":C="focus",j=ni;break;case"focusout":C="blur",j=ni;break;case"beforeblur":case"afterblur":j=ni;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=jc;break;case Fa:case Ia:case Aa:j=dc;break;case Ua:j=Nc;break;case"scroll":j=lc;break;case"wheel":j=zc;break;case"copy":case"cut":case"paste":j=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=ya}var z=(t&4)!==0,de=!z&&e==="scroll",f=z?v!==null?v+"Capture":null:v;z=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Fn(c,f),w!=null&&z.push(tr(c,w,p)))),de)break;c=c.return}0<z.length&&(v=new j(v,C,null,n,y),x.push({event:v,listeners:z}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",v&&n!==Ao&&(C=n.relatedTarget||n.fromElement)&&(Gt(C)||C[xt]))break e;if((j||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,j?(C=n.relatedTarget||n.toElement,j=m,C=C?Gt(C):null,C!==null&&(de=Yt(C),C!==de||C.tag!==5&&C.tag!==6)&&(C=null)):(j=null,C=m),j!==C)){if(z=va,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(z=ya,w="onPointerLeave",f="onPointerEnter",c="pointer"),de=j==null?v:yn(j),p=C==null?v:yn(C),v=new z(w,c+"leave",j,n,y),v.target=de,v.relatedTarget=p,w=null,Gt(y)===m&&(z=new z(f,c+"enter",C,n,y),z.target=p,z.relatedTarget=de,w=z),de=w,j&&C)t:{for(z=j,f=C,c=0,p=z;p;p=vn(p))c++;for(p=0,w=f;w;w=vn(w))p++;for(;0<c-p;)z=vn(z),c--;for(;0<p-c;)f=vn(f),p--;for(;c--;){if(z===f||f!==null&&z===f.alternate)break t;z=vn(z),f=vn(f)}z=null}else z=null;j!==null&&Wa(x,v,j,z,!1),C!==null&&de!==null&&Wa(x,de,C,z,!0)}}e:{if(v=m?yn(m):window,j=v.nodeName&&v.nodeName.toLowerCase(),j==="select"||j==="input"&&v.type==="file")var _=Oc;else if(Ea(v))if(Ca)_=Ac;else{_=Fc;var P=Mc}else(j=v.nodeName)&&j.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(_=Ic);if(_&&(_=_(e,m))){Na(x,_,n,y);break e}P&&P(e,v,m),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Do(v,"number",v.value)}switch(P=m?yn(m):window,e){case"focusin":(Ea(P)||P.contentEditable==="true")&&(mn=P,si=m,Jn=null);break;case"focusout":Jn=si=mn=null;break;case"mousedown":ui=!0;break;case"contextmenu":case"mouseup":case"dragend":ui=!1,Oa(x,n,y);break;case"selectionchange":if(Vc)break;case"keydown":case"keyup":Oa(x,n,y)}var L;if(oi)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else pn?Sa(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(xa&&n.locale!=="ko"&&(pn||T!=="onCompositionStart"?T==="onCompositionEnd"&&pn&&(L=ma()):(Tt=y,Jo="value"in Tt?Tt.value:Tt.textContent,pn=!0)),P=Vr(m,T),0<P.length&&(T=new ga(T,e,null,n,y),x.push({event:T,listeners:P}),L?T.data=L:(L=ja(n),L!==null&&(T.data=L)))),(L=Pc?Lc(e,n):Rc(e,n))&&(m=Vr(m,"onBeforeInput"),0<m.length&&(y=new ga("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=L))}$a(x,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Fn(e,n),i!=null&&r.unshift(tr(e,i,o)),i=Fn(e,t),i!=null&&r.push(tr(e,i,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,m=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&m!==null&&(s=m,o?(u=Fn(n,i),u!=null&&l.unshift(tr(n,u,s))):o||(u=Fn(n,i),u!=null&&l.push(tr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Wc=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(Wc,`
`).replace(Qc,"")}function Br(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(h(425))}function $r(){}var hi=null,vi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,Kc=typeof clearTimeout=="function"?clearTimeout:void 0,Ka=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ka<"u"?function(e){return Ka.resolve(null).then(e).catch(Gc)}:yi;function Gc(e){setTimeout(function(){throw e})}function xi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Wn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),pt="__reactFiber$"+gn,nr="__reactProps$"+gn,xt="__reactContainer$"+gn,wi="__reactEvents$"+gn,Xc="__reactListeners$"+gn,Zc="__reactHandles$"+gn;function Gt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ya(e);e!==null;){if(n=e[pt])return n;e=Ya(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[pt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Hr(e){return e[nr]||null}var ki=[],xn=-1;function Mt(e){return{current:e}}function b(e){0>xn||(e.current=ki[xn],ki[xn]=null,xn--)}function Z(e,t){xn++,ki[xn]=e.current,e.current=t}var Ft={},Se=Mt(Ft),Re=Mt(!1),Xt=Ft;function wn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Te(e){return e=e.childContextTypes,e!=null}function Wr(){b(Re),b(Se)}function Ga(e,t,n){if(Se.current!==Ft)throw Error(h(168));Z(Se,t),Z(Re,n)}function Xa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(h(108,X(e)||"Unknown",o));return N({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,Xt=Se.current,Z(Se,e),Z(Re,Re.current),!0}function Za(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Xa(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,b(Re),b(Se),Z(Se,e)):b(Re),Z(Re,n)}var wt=null,Kr=!1,Si=!1;function Ja(e){wt===null?wt=[e]:wt.push(e)}function Jc(e){Kr=!0,Ja(e)}function It(){if(!Si&&wt!==null){Si=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Kr=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),ea(Ho,It),o}finally{K=t,Si=!1}}return null}var kn=[],Sn=0,Yr=null,Gr=0,Qe=[],Ke=0,Zt=null,kt=1,St="";function Jt(e,t){kn[Sn++]=Gr,kn[Sn++]=Yr,Yr=e,Gr=t}function ba(e,t,n){Qe[Ke++]=kt,Qe[Ke++]=St,Qe[Ke++]=Zt,Zt=e;var r=kt;e=St;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,kt=1<<32-nt(t)+o|n<<o|r,St=i+e}else kt=1<<i|n<<o|r,St=e}function ji(e){e.return!==null&&(Jt(e,1),ba(e,1,0))}function Ei(e){for(;e===Yr;)Yr=kn[--Sn],kn[Sn]=null,Gr=kn[--Sn],kn[Sn]=null;for(;e===Zt;)Zt=Qe[--Ke],Qe[Ke]=null,St=Qe[--Ke],Qe[Ke]=null,kt=Qe[--Ke],Qe[Ke]=null}var qe=null,Ve=null,re=!1,ot=null;function es(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ve=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ve=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(re){var t=Ve;if(t){var n=t;if(!ts(e,t)){if(Ni(e))throw Error(h(418));t=Ot(n.nextSibling);var r=qe;t&&ts(e,t)?es(r,n):(e.flags=e.flags&-4097|2,re=!1,qe=e)}}else{if(Ni(e))throw Error(h(418));e.flags=e.flags&-4097|2,re=!1,qe=e}}}function ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Xr(e){if(e!==qe)return!1;if(!re)return ns(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ni(e))throw rs(),Error(h(418));for(;t;)es(e,t),t=Ot(t.nextSibling)}if(ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=qe?Ot(e.stateNode.nextSibling):null;return!0}function rs(){for(var e=Ve;e;)e=Ot(e.nextSibling)}function jn(){Ve=qe=null,re=!1}function zi(e){ot===null?ot=[e]:ot.push(e)}var bc=ke.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function os(e){var t=e._init;return t(e._payload)}function is(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Wt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=yl(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function u(f,c,p,w){var _=p.type;return _===Pe?y(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Le&&os(_)===c.type)?(w=o(c,p.props),w.ref=or(f,c,p),w.return=f,w):(w=So(p.type,p.key,p.props,null,f.mode,w),w.ref=or(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=xl(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function y(f,c,p,w,_){return c===null||c.tag!==7?(c=an(p,f.mode,w,_),c.return=f,c):(c=o(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case et:return p=So(c.type,c.key,c.props,null,f.mode,p),p.ref=or(f,null,c),p.return=f,p;case Ce:return c=xl(c,f.mode,p),c.return=f,c;case Le:var w=c._init;return x(f,w(c._payload),p)}if(Dn(c)||R(c))return c=an(c,f.mode,p,null),c.return=f,c;Zr(f,c)}return null}function v(f,c,p,w){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case et:return p.key===_?u(f,c,p,w):null;case Ce:return p.key===_?m(f,c,p,w):null;case Le:return _=p._init,v(f,c,_(p._payload),w)}if(Dn(p)||R(p))return _!==null?null:y(f,c,p,w,null);Zr(f,p)}return null}function j(f,c,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case et:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,_);case Ce:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,_);case Le:var P=w._init;return j(f,c,p,P(w._payload),_)}if(Dn(w)||R(w))return f=f.get(p)||null,y(c,f,w,_,null);Zr(c,w)}return null}function C(f,c,p,w){for(var _=null,P=null,L=c,T=c=0,ge=null;L!==null&&T<p.length;T++){L.index>T?(ge=L,L=null):ge=L.sibling;var H=v(f,L,p[T],w);if(H===null){L===null&&(L=ge);break}e&&L&&H.alternate===null&&t(f,L),c=i(H,c,T),P===null?_=H:P.sibling=H,P=H,L=ge}if(T===p.length)return n(f,L),re&&Jt(f,T),_;if(L===null){for(;T<p.length;T++)L=x(f,p[T],w),L!==null&&(c=i(L,c,T),P===null?_=L:P.sibling=L,P=L);return re&&Jt(f,T),_}for(L=r(f,L);T<p.length;T++)ge=j(L,f,T,p[T],w),ge!==null&&(e&&ge.alternate!==null&&L.delete(ge.key===null?T:ge.key),c=i(ge,c,T),P===null?_=ge:P.sibling=ge,P=ge);return e&&L.forEach(function(Qt){return t(f,Qt)}),re&&Jt(f,T),_}function z(f,c,p,w){var _=R(p);if(typeof _!="function")throw Error(h(150));if(p=_.call(p),p==null)throw Error(h(151));for(var P=_=null,L=c,T=c=0,ge=null,H=p.next();L!==null&&!H.done;T++,H=p.next()){L.index>T?(ge=L,L=null):ge=L.sibling;var Qt=v(f,L,H.value,w);if(Qt===null){L===null&&(L=ge);break}e&&L&&Qt.alternate===null&&t(f,L),c=i(Qt,c,T),P===null?_=Qt:P.sibling=Qt,P=Qt,L=ge}if(H.done)return n(f,L),re&&Jt(f,T),_;if(L===null){for(;!H.done;T++,H=p.next())H=x(f,H.value,w),H!==null&&(c=i(H,c,T),P===null?_=H:P.sibling=H,P=H);return re&&Jt(f,T),_}for(L=r(f,L);!H.done;T++,H=p.next())H=j(L,f,T,H.value,w),H!==null&&(e&&H.alternate!==null&&L.delete(H.key===null?T:H.key),c=i(H,c,T),P===null?_=H:P.sibling=H,P=H);return e&&L.forEach(function(Td){return t(f,Td)}),re&&Jt(f,T),_}function de(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Pe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case et:e:{for(var _=p.key,P=c;P!==null;){if(P.key===_){if(_=p.type,_===Pe){if(P.tag===7){n(f,P.sibling),c=o(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Le&&os(_)===P.type){n(f,P.sibling),c=o(P,p.props),c.ref=or(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===Pe?(c=an(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=So(p.type,p.key,p.props,null,f.mode,w),w.ref=or(f,c,p),w.return=f,f=w)}return l(f);case Ce:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=xl(p,f.mode,w),c.return=f,f=c}return l(f);case Le:return P=p._init,de(f,c,P(p._payload),w)}if(Dn(p))return C(f,c,p,w);if(R(p))return z(f,c,p,w);Zr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=yl(p,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return de}var En=is(!0),ls=is(!1),Jr=Mt(null),br=null,Nn=null,_i=null;function Pi(){_i=Nn=br=null}function Li(e){var t=Jr.current;b(Jr),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){br=e,_i=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(_i!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(br===null)throw Error(h(308));Nn=e,br.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var bt=null;function Ti(e){bt===null?bt=[e]:bt.push(e)}function as(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ti(t)):(n.next=o.next,o.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ti(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ko(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,m=u.next;u.next=null,l===null?i=m:l.next=m,l=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=m:s.next=m,y.lastBaseUpdate=u))}if(i!==null){var x=o.baseState;l=0,y=m=u=null,s=i;do{var v=s.lane,j=s.eventTime;if((r&v)===v){y!==null&&(y=y.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,z=s;switch(v=t,j=n,z.tag){case 1:if(C=z.payload,typeof C=="function"){x=C.call(j,x,v);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=z.payload,v=typeof C=="function"?C.call(j,x,v):C,v==null)break e;x=N({},x,v);break e;case 2:At=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else j={eventTime:j,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(m=y=j,u=x):y=y.next=j,l|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(y===null&&(u=x),o.baseState=u,o.firstBaseUpdate=m,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=x}}function cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(h(191,o));o.call(r)}}}var ir={},mt=Mt(ir),lr=Mt(ir),ar=Mt(ir);function en(e){if(e===ir)throw Error(h(174));return e}function Oi(e,t){switch(Z(ar,t),Z(lr,e),Z(mt,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mo(t,e)}b(mt),Z(mt,t)}function zn(){b(mt),b(lr),b(ar)}function ds(e){en(ar.current);var t=en(mt.current),n=Mo(t,e.type);t!==n&&(Z(lr,e),Z(mt,n))}function Mi(e){lr.current===e&&(b(mt),b(lr))}var ie=Mt(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function Ii(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var ro=ke.ReactCurrentDispatcher,Ai=ke.ReactCurrentBatchConfig,tn=0,le=null,pe=null,he=null,oo=!1,sr=!1,ur=0,ed=0;function je(){throw Error(h(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function qi(e,t,n,r,o,i){if(tn=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?od:id,e=n(r,o),sr){i=0;do{if(sr=!1,ur=0,25<=i)throw Error(h(301));i+=1,he=pe=null,t.updateQueue=null,ro.current=ld,e=n(r,o)}while(sr)}if(ro.current=ao,t=pe!==null&&pe.next!==null,tn=0,he=pe=le=null,oo=!1,t)throw Error(h(300));return e}function Vi(){var e=ur!==0;return ur=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?le.memoizedState=he=e:he=he.next=e,he}function Ge(){if(pe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=he===null?le.memoizedState:he.next;if(t!==null)he=t,pe=e;else{if(e===null)throw Error(h(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},he===null?le.memoizedState=he=e:he=he.next=e}return he}function cr(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,m=i;do{var y=m.lane;if((tn&y)===y)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(s=u=x,l=r):u=u.next=x,le.lanes|=y,nn|=y}m=m.next}while(m!==null&&m!==i);u===null?l=r:u.next=s,rt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,nn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);rt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function fs(){}function ps(e,t){var n=le,r=Ge(),o=t(),i=!rt(r.memoizedState,o);if(i&&(r.memoizedState=o,De=!0),r=r.queue,Hi(vs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,dr(9,hs.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(h(349));(tn&30)!==0||ms(n,t,o)}return o}function ms(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hs(e,t,n,r){t.value=n,t.getSnapshot=r,gs(t)&&ys(e)}function vs(e,t,n){return n(function(){gs(t)&&ys(e)})}function gs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function ys(e){var t=jt(e,1);t!==null&&st(t,e,1,-1)}function xs(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=rd.bind(null,le,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ws(){return Ge().memoizedState}function io(e,t,n,r){var o=ht();le.flags|=e,o.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Ui(r,l.deps)){o.memoizedState=dr(t,n,i,r);return}}le.flags|=e,o.memoizedState=dr(1|t,n,i,r)}function ks(e,t){return io(8390656,8,e,t)}function Hi(e,t){return lo(2048,8,e,t)}function Ss(e,t){return lo(4,2,e,t)}function js(e,t){return lo(4,4,e,t)}function Es(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ns(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,Es.bind(null,t,e),n)}function Wi(){}function Cs(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zs(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _s(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n):(rt(n,t)||(n=oa(),le.lanes|=n,nn|=n,e.baseState=!0),t)}function td(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ai.transition;Ai.transition={};try{e(!1),t()}finally{K=n,Ai.transition=r}}function Ps(){return Ge().memoizedState}function nd(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e))Rs(t,n);else if(n=as(e,t,n,r),n!==null){var o=_e();st(n,e,r,o),Ts(n,t,r)}}function rd(e,t,n){var r=$t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,rt(s,l)){var u=t.interleaved;u===null?(o.next=o,Ti(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=as(e,t,o,r),n!==null&&(o=_e(),st(n,e,r,o),Ts(n,t,r))}}function Ls(e){var t=e.alternate;return e===le||t!==null&&t===le}function Rs(e,t){sr=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ts(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ko(e,n)}}var ao={readContext:Ye,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},od={readContext:Ye,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,Es.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nd.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:Wi,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=td.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=ht();if(re){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ve===null)throw Error(h(349));(tn&30)!==0||ms(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ks(vs.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,hs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ve.identifierPrefix;if(re){var n=St,r=kt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},id={readContext:Ye,useCallback:Cs,useContext:Ye,useEffect:Hi,useImperativeHandle:Ns,useInsertionEffect:Ss,useLayoutEffect:js,useMemo:zs,useReducer:Bi,useRef:ws,useState:function(){return Bi(cr)},useDebugValue:Wi,useDeferredValue:function(e){var t=Ge();return _s(t,pe.memoizedState,e)},useTransition:function(){var e=Bi(cr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fs,useSyncExternalStore:ps,useId:Ps,unstable_isNewReconciler:!1},ld={readContext:Ye,useCallback:Cs,useContext:Ye,useEffect:Hi,useImperativeHandle:Ns,useInsertionEffect:Ss,useLayoutEffect:js,useMemo:zs,useReducer:$i,useRef:ws,useState:function(){return $i(cr)},useDebugValue:Wi,useDeferredValue:function(e){var t=Ge();return pe===null?t.memoizedState=e:_s(t,pe.memoizedState,e)},useTransition:function(){var e=$i(cr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fs,useSyncExternalStore:ps,useId:Ps,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=N({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=$t(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(st(t,e,o,r),eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=$t(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(st(t,e,o,r),eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=$t(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(st(t,e,r,n),eo(t,e,r))}};function Ds(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(o,i):!0}function Os(e,t,n){var r=!1,o=Ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=Te(t)?Xt:Se.current,r=t.contextTypes,i=(r=r!=null)?wn(e,o):Ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ms(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Di(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=Te(t)?Xt:Se.current,o.context=wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&so.enqueueReplaceState(o,o.state,null),to(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=B(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Fs(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vo||(vo=!0,cl=r),Gi(e,t)},n}function Is(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gi(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function As(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=kd.bind(null,e,t,n),t.then(e,e))}function Us(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qs(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var sd=ke.ReactCurrentOwner,De=!1;function ze(e,t,n,r){t.child=e===null?ls(t,null,n,r):En(t,e.child,n,r)}function Vs(e,t,n,r,o){n=n.render;var i=t.ref;return Cn(t,o),r=qi(e,t,n,r,i,o),n=Vi(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(re&&n&&ji(t),t.flags|=1,ze(e,t,r,o),t.child)}function Bs(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!gl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$s(e,t,i,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function $s(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return Xi(e,t,n,r,o)}function Hs(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ln,Be),Be|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Ln,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Ln,Be),Be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Ln,Be),Be|=r;return ze(e,t,o,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xi(e,t,n,r,o){var i=Te(n)?Xt:Se.current;return i=wn(t,i),Cn(t,o),n=qi(e,t,n,r,i,o),r=Vi(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(re&&r&&ji(t),t.flags|=1,ze(e,t,n,o),t.child)}function Qs(e,t,n,r,o){if(Te(n)){var i=!0;Qr(t)}else i=!1;if(Cn(t,o),t.stateNode===null)co(e,t),Os(t,n,r),Ki(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ye(m):(m=Te(n)?Xt:Se.current,m=wn(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==m)&&Ms(t,l,r,m),At=!1;var v=t.memoizedState;l.state=v,to(t,r,l,o),u=t.memoizedState,s!==r||v!==u||Re.current||At?(typeof y=="function"&&(Qi(t,n,y,r),u=t.memoizedState),(s=At||Ds(t,n,s,r,v,u,m))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=m,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ss(e,t),s=t.memoizedProps,m=t.type===t.elementType?s:it(t.type,s),l.props=m,x=t.pendingProps,v=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ye(u):(u=Te(n)?Xt:Se.current,u=wn(t,u));var j=n.getDerivedStateFromProps;(y=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==x||v!==u)&&Ms(t,l,r,u),At=!1,v=t.memoizedState,l.state=v,to(t,r,l,o);var C=t.memoizedState;s!==x||v!==C||Re.current||At?(typeof j=="function"&&(Qi(t,n,j,r),C=t.memoizedState),(m=At||Ds(t,n,m,r,v,C,u)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),l.props=r,l.state=C,l.context=u,r=m):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,o)}function Zi(e,t,n,r,o,i){Ws(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Za(t,n,!1),Nt(e,t,i);r=t.stateNode,sd.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=En(t,e.child,null,i),t.child=En(t,null,s,i)):ze(e,t,s,i),t.memoizedState=r.state,o&&Za(t,n,!0),t.child}function Ks(e){var t=e.stateNode;t.pendingContext?Ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ga(e,t.context,!1),Oi(e,t.containerInfo)}function Ys(e,t,n,r,o){return jn(),zi(o),t.flags|=256,ze(e,t,n,r),t.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gs(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(ie,o&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=jo(l,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bi(n),t.memoizedState=Ji,e):el(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return ud(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Wt(s,i):(i=an(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?bi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ji,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function el(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&zi(r),En(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(h(422))),uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=jo({mode:"visible",children:r.children},o,0,null),i=an(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,l),t.child.memoizedState=bi(l),t.memoizedState=Ji,i);if((t.mode&1)===0)return uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(h(419)),r=Yi(i,r,void 0),uo(e,t,l,r)}if(s=(l&e.childLanes)!==0,De||s){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),st(r,e,o,-1))}return vl(),r=Yi(Error(h(421))),uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sd.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Ot(o.nextSibling),qe=t,re=!0,ot=null,e!==null&&(Qe[Ke++]=kt,Qe[Ke++]=St,Qe[Ke++]=Zt,kt=e.id,St=e.overflow,Zt=t),t=el(t,r.children),t.flags|=4096,t)}function Xs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Zs(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,n,t);else if(e.tag===19)Xs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ie,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&no(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}tl(t,!0,n,null,i);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function co(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t,n){switch(t.tag){case 3:Ks(t),jn();break;case 5:ds(t);break;case 1:Te(t.type)&&Qr(t);break;case 4:Oi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(Jr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ie,ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gs(e,t,n):(Z(ie,ie.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Zs(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return Nt(e,t,n)}var Js,nl,bs,eu;Js=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},nl=function(){},bs=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,en(mt.current);var i=null;switch(n){case"input":o=Ro(e,o),r=Ro(e,r),i=[];break;case"select":o=N({},o,{value:void 0}),r=N({},r,{value:void 0}),i=[];break;case"textarea":o=Oo(e,o),r=Oo(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Fo(n,r);var l;n=null;for(m in o)if(!r.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var s=o[m];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(O.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(s=o!=null?o[m]:void 0,r.hasOwnProperty(m)&&u!==s&&(u!=null||s!=null))if(m==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(O.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&J("scroll",e),i||s===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},eu=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Te(t.type)&&Wr(),Ee(t),null;case 3:return r=t.stateNode,zn(),b(Re),b(Se),Ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ot!==null&&(pl(ot),ot=null))),nl(e,t),Ee(t),null;case 5:Mi(t);var o=en(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)bs(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(e=en(mt.current),Xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<bn.length;o++)J(bn[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Ol(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":Il(r,i),J("invalid",r)}Fo(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),o=["children",""+s]):O.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":xr(r),Fl(r,i,!0);break;case"textarea":xr(r),Ul(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ql(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pt]=t,e[nr]=r,Js(e,t,!1,!1),t.stateNode=e;e:{switch(l=Io(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<bn.length;o++)J(bn[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":Ol(e,r),o=Ro(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=N({},r,{value:void 0}),J("invalid",e);break;case"textarea":Il(e,r),o=Oo(e,r),J("invalid",e);break;default:o=r}Fo(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?$l(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vl(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(O.hasOwnProperty(i)?u!=null&&i==="onScroll"&&J("scroll",e):u!=null&&be(e,i,u,l))}switch(n){case"input":xr(e),Fl(e,r,!1);break;case"textarea":xr(e),Ul(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=en(ar.current),en(mt.current),Xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(b(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ve!==null&&(t.mode&1)!==0&&(t.flags&128)===0)rs(),jn(),t.flags|=98560,i=!1;else if(i=Xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[pt]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else ot!==null&&(pl(ot),ot=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?me===0&&(me=3):vl())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return zn(),nl(e,t),e===null&&er(t.stateNode.containerInfo),Ee(t),null;case 10:return Li(t.type._context),Ee(t),null;case 17:return Te(t.type)&&Wr(),Ee(t),null;case 19:if(b(ie),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=no(e),l!==null){for(t.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Rn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=no(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return Ee(t),null}else 2*ce()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=ie.current,Z(ie,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Be&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function fd(e,t){switch(Ei(t),t.tag){case 1:return Te(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),b(Re),b(Se),Ii(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Mi(t),null;case 13:if(b(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ie),null;case 4:return zn(),null;case 10:return Li(t.type._context),null;case 22:case 23:return hl(),null;case 24:return null;default:return null}}var fo=!1,Ne=!1,pd=typeof WeakSet=="function"?WeakSet:Set,E=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function rl(e,t,n){try{n()}catch(r){ue(e,t,r)}}var tu=!1;function md(e,t){if(hi=Rr,e=Da(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,m=0,y=0,x=e,v=null;t:for(;;){for(var j;x!==n||o!==0&&x.nodeType!==3||(s=l+o),x!==i||r!==0&&x.nodeType!==3||(u=l+r),x.nodeType===3&&(l+=x.nodeValue.length),(j=x.firstChild)!==null;)v=x,x=j;for(;;){if(x===e)break t;if(v===n&&++m===o&&(s=l),v===i&&++y===r&&(u=l),(j=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=j}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vi={focusedElem:e,selectionRange:n},Rr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var z=C.memoizedProps,de=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?z:it(t.type,z),de);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return C=tu,tu=!1,C}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rl(t,n,i)}o=o.next}while(o!==r)}}function po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nu(e){var t=e.alternate;t!==null&&(e.alternate=null,nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[nr],delete t[wi],delete t[Xc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}var xe=null,lt=!1;function qt(e,t,n){for(n=n.child;n!==null;)iu(e,t,n),n=n.sibling}function iu(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Nr,n)}catch{}switch(n.tag){case 5:Ne||Pn(n,t);case 6:var r=xe,o=lt;xe=null,qt(e,t,n),xe=r,lt=o,xe!==null&&(lt?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(lt?(e=xe,n=n.stateNode,e.nodeType===8?xi(e.parentNode,n):e.nodeType===1&&xi(e,n),Wn(e)):xi(xe,n.stateNode));break;case 4:r=xe,o=lt,xe=n.stateNode.containerInfo,lt=!0,qt(e,t,n),xe=r,lt=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&rl(n,t,l),o=o.next}while(o!==r)}qt(e,t,n);break;case 1:if(!Ne&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ue(n,t,s)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,qt(e,t,n),Ne=r):qt(e,t,n);break;default:qt(e,t,n)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pd),t.forEach(function(r){var o=jd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,lt=!1;break e;case 3:xe=s.stateNode.containerInfo,lt=!0;break e;case 4:xe=s.stateNode.containerInfo,lt=!0;break e}s=s.return}if(xe===null)throw Error(h(160));iu(i,l,o),xe=null,lt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(m){ue(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{pr(3,e,e.return),po(3,e)}catch(z){ue(e,e.return,z)}try{pr(5,e,e.return)}catch(z){ue(e,e.return,z)}}break;case 1:at(t,e),vt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(at(t,e),vt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{On(o,"")}catch(z){ue(e,e.return,z)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ml(o,i),Io(s,l);var m=Io(s,i);for(l=0;l<u.length;l+=2){var y=u[l],x=u[l+1];y==="style"?$l(o,x):y==="dangerouslySetInnerHTML"?Vl(o,x):y==="children"?On(o,x):be(o,y,x,m)}switch(s){case"input":To(o,i);break;case"textarea":Al(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?sn(o,!!i.multiple,j,!1):v!==!!i.multiple&&(i.defaultValue!=null?sn(o,!!i.multiple,i.defaultValue,!0):sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[nr]=i}catch(z){ue(e,e.return,z)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(h(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(z){ue(e,e.return,z)}}break;case 3:if(at(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(z){ue(e,e.return,z)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ul=ce())),r&4&&lu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(m=Ne)||y,at(t,e),Ne=m):at(t,e),vt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(E=e,y=e.child;y!==null;){for(x=E=y;E!==null;){switch(v=E,j=v.child,v.tag){case 0:case 11:case 14:case 15:pr(4,v,v.return);break;case 1:Pn(v,v.return);var C=v.stateNode;if(typeof C.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(z){ue(r,n,z)}}break;case 5:Pn(v,v.return);break;case 22:if(v.memoizedState!==null){cu(x);continue}}j!==null?(j.return=v,E=j):cu(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{o=x.stateNode,m?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,u=x.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Bl("display",l))}catch(z){ue(e,e.return,z)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(z){ue(e,e.return,z)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:at(t,e),vt(e),r&4&&lu(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ru(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(On(o,""),r.flags&=-33);var i=ou(e);ll(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ou(e);il(e,s,l);break;default:throw Error(h(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e,t,n){E=e,su(e)}function su(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||fo;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ne;s=fo;var m=Ne;if(fo=l,(Ne=u)&&!m)for(E=o;E!==null;)l=E,u=l.child,l.tag===22&&l.memoizedState!==null?du(o):u!==null?(u.return=l,E=u):du(o);for(;i!==null;)E=i,su(i),i=i.sibling;E=o,fo=s,Ne=m}uu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,E=i):uu(e)}}function uu(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ne||po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cs(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Wn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ne||t.flags&512&&ol(t)}catch(v){ue(t,t.return,v)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function cu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function du(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{po(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ue(t,o,u)}}var i=t.return;try{ol(t)}catch(u){ue(t,i,u)}break;case 5:var l=t.return;try{ol(t)}catch(u){ue(t,l,u)}}}catch(u){ue(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var vd=Math.ceil,mo=ke.ReactCurrentDispatcher,al=ke.ReactCurrentOwner,Xe=ke.ReactCurrentBatchConfig,q=0,ve=null,fe=null,we=0,Be=0,Ln=Mt(0),me=0,mr=null,nn=0,ho=0,sl=0,hr=null,Oe=null,ul=0,Rn=1/0,Ct=null,vo=!1,cl=null,Vt=null,go=!1,Bt=null,yo=0,vr=0,dl=null,xo=-1,wo=0;function _e(){return(q&6)!==0?ce():xo!==-1?xo:xo=ce()}function $t(e){return(e.mode&1)===0?1:(q&2)!==0&&we!==0?we&-we:bc.transition!==null?(wo===0&&(wo=oa()),wo):(e=K,e!==0||(e=window.event,e=e===void 0?16:pa(e.type)),e)}function st(e,t,n,r){if(50<vr)throw vr=0,dl=null,Error(h(185));qn(e,n,r),((q&2)===0||e!==ve)&&(e===ve&&((q&2)===0&&(ho|=n),me===4&&Ht(e,we)),Me(e,r),n===1&&q===0&&(t.mode&1)===0&&(Rn=ce()+500,Kr&&It()))}function Me(e,t){var n=e.callbackNode;bu(e,t);var r=_r(e,e===ve?we:0);if(r===0)n!==null&&ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ta(n),t===1)e.tag===0?Jc(pu.bind(null,e)):Ja(pu.bind(null,e)),Yc(function(){(q&6)===0&&It()}),n=null;else{switch(ia(r)){case 1:n=Ho;break;case 4:n=na;break;case 16:n=Er;break;case 536870912:n=ra;break;default:n=Er}n=ku(n,fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fu(e,t){if(xo=-1,wo=0,(q&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=_r(e,e===ve?we:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ko(e,r);else{t=r;var o=q;q|=2;var i=hu();(ve!==e||we!==t)&&(Ct=null,Rn=ce()+500,on(e,t));do try{xd();break}catch(s){mu(e,s)}while(!0);Pi(),mo.current=i,q=o,fe!==null?t=0:(ve=null,we=0,t=me)}if(t!==0){if(t===2&&(o=Wo(e),o!==0&&(r=o,t=fl(e,o))),t===1)throw n=mr,on(e,0),Ht(e,r),Me(e,ce()),n;if(t===6)Ht(e,r);else{if(o=e.current.alternate,(r&30)===0&&!gd(o)&&(t=ko(e,r),t===2&&(i=Wo(e),i!==0&&(r=i,t=fl(e,i))),t===1))throw n=mr,on(e,0),Ht(e,r),Me(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:ln(e,Oe,Ct);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=ul+500-ce(),10<t)){if(_r(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yi(ln.bind(null,e,Oe,Ct),t);break}ln(e,Oe,Ct);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-nt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=yi(ln.bind(null,e,Oe,Ct),r);break}ln(e,Oe,Ct);break;case 5:ln(e,Oe,Ct);break;default:throw Error(h(329))}}}return Me(e,ce()),e.callbackNode===n?fu.bind(null,e):null}function fl(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=ko(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&pl(t)),e}function pl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function gd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~sl,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if((q&6)!==0)throw Error(h(327));Tn();var t=_r(e,0);if((t&1)===0)return Me(e,ce()),null;var n=ko(e,t);if(e.tag!==0&&n===2){var r=Wo(e);r!==0&&(t=r,n=fl(e,r))}if(n===1)throw n=mr,on(e,0),Ht(e,t),Me(e,ce()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Oe,Ct),Me(e,ce()),null}function ml(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Rn=ce()+500,Kr&&It())}}function rn(e){Bt!==null&&Bt.tag===0&&(q&6)===0&&Tn();var t=q;q|=1;var n=Xe.transition,r=K;try{if(Xe.transition=null,K=1,e)return e()}finally{K=r,Xe.transition=n,q=t,(q&6)===0&&It()}}function hl(){Be=Ln.current,b(Ln)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kc(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:zn(),b(Re),b(Se),Ii();break;case 5:Mi(r);break;case 4:zn();break;case 13:b(ie);break;case 19:b(ie);break;case 10:Li(r.type._context);break;case 22:case 23:hl()}n=n.return}if(ve=e,fe=e=Wt(e.current,null),we=Be=t,me=0,mr=null,sl=ho=nn=0,Oe=hr=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}bt=null}return e}function mu(e,t){do{var n=fe;try{if(Pi(),ro.current=ao,oo){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}oo=!1}if(tn=0,he=pe=le=null,sr=!1,ur=0,al.current=null,n===null||n.return===null){me=1,mr=t,fe=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=we,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,y=s,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var v=y.alternate;v?(y.updateQueue=v.updateQueue,y.memoizedState=v.memoizedState,y.lanes=v.lanes):(y.updateQueue=null,y.memoizedState=null)}var j=Us(l);if(j!==null){j.flags&=-257,qs(j,l,s,i,t),j.mode&1&&As(i,m,t),t=j,u=m;var C=t.updateQueue;if(C===null){var z=new Set;z.add(u),t.updateQueue=z}else C.add(u);break e}else{if((t&1)===0){As(i,m,t),vl();break e}u=Error(h(426))}}else if(re&&s.mode&1){var de=Us(l);if(de!==null){(de.flags&65536)===0&&(de.flags|=256),qs(de,l,s,i,t),zi(_n(u,s));break e}}i=u=_n(u,s),me!==4&&(me=2),hr===null?hr=[i]:hr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Fs(i,u,t);us(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Is(i,s,t);us(i,w);break e}}i=i.return}while(i!==null)}gu(n)}catch(_){t=_,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function hu(){var e=mo.current;return mo.current=ao,e===null?ao:e}function vl(){(me===0||me===3||me===2)&&(me=4),ve===null||(nn&268435455)===0&&(ho&268435455)===0||Ht(ve,we)}function ko(e,t){var n=q;q|=2;var r=hu();(ve!==e||we!==t)&&(Ct=null,on(e,t));do try{yd();break}catch(o){mu(e,o)}while(!0);if(Pi(),q=n,mo.current=r,fe!==null)throw Error(h(261));return ve=null,we=0,me}function yd(){for(;fe!==null;)vu(fe)}function xd(){for(;fe!==null&&!Hu();)vu(fe)}function vu(e){var t=wu(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?gu(e):fe=t,al.current=null}function gu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dd(n,t,Be),n!==null){fe=n;return}}else{if(n=fd(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);me===0&&(me=5)}function ln(e,t,n){var r=K,o=Xe.transition;try{Xe.transition=null,K=1,wd(e,t,n,r)}finally{Xe.transition=o,K=r}return null}function wd(e,t,n,r){do Tn();while(Bt!==null);if((q&6)!==0)throw Error(h(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ec(e,i),e===ve&&(fe=ve=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||go||(go=!0,ku(Er,function(){return Tn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Xe.transition,Xe.transition=null;var l=K;K=1;var s=q;q|=4,al.current=null,md(e,n),au(n,e),qc(vi),Rr=!!hi,vi=hi=null,e.current=n,hd(n),Wu(),q=s,K=l,Xe.transition=i}else e.current=n;if(go&&(go=!1,Bt=e,yo=o),i=e.pendingLanes,i===0&&(Vt=null),Yu(n.stateNode),Me(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=cl,cl=null,e;return(yo&1)!==0&&e.tag!==0&&Tn(),i=e.pendingLanes,(i&1)!==0?e===dl?vr++:(vr=0,dl=e):vr=0,It(),null}function Tn(){if(Bt!==null){var e=ia(yo),t=Xe.transition,n=K;try{if(Xe.transition=null,K=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,yo=0,(q&6)!==0)throw Error(h(331));var o=q;for(q|=4,E=e.current;E!==null;){var i=E,l=i.child;if((E.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var m=s[u];for(E=m;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:pr(8,y,i)}var x=y.child;if(x!==null)x.return=y,E=x;else for(;E!==null;){y=E;var v=y.sibling,j=y.return;if(nu(y),y===m){E=null;break}if(v!==null){v.return=j,E=v;break}E=j}}}var C=i.alternate;if(C!==null){var z=C.child;if(z!==null){C.child=null;do{var de=z.sibling;z.sibling=null,z=de}while(z!==null)}}E=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,E=l;else e:for(;E!==null;){if(i=E,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var c=e.current;for(E=c;E!==null;){l=E;var p=l.child;if((l.subtreeFlags&2064)!==0&&p!==null)p.return=l,E=p;else e:for(l=c;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:po(9,s)}}catch(_){ue(s,s.return,_)}if(s===l){E=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,E=w;break e}E=s.return}}if(q=o,It(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Nr,e)}catch{}r=!0}return r}finally{K=n,Xe.transition=t}}return!1}function yu(e,t,n){t=_n(n,t),t=Fs(e,t,1),e=Ut(e,t,1),t=_e(),e!==null&&(qn(e,1,t),Me(e,t))}function ue(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=_n(n,e),e=Is(t,e,1),t=Ut(t,e,1),e=_e(),t!==null&&(qn(t,1,e),Me(t,e));break}}t=t.return}}function kd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(we&n)===n&&(me===4||me===3&&(we&130023424)===we&&500>ce()-ul?on(e,0):sl|=n),Me(e,t)}function xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=_e();e=jt(e,t),e!==null&&(qn(e,t,n),Me(e,n))}function Sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xu(e,n)}function jd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),xu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)De=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return De=!1,cd(e,t,n);De=(e.flags&131072)!==0}else De=!1,re&&(t.flags&1048576)!==0&&ba(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;co(e,t),e=t.pendingProps;var o=wn(t,Se.current);Cn(t,n),o=qi(null,t,r,e,o,n);var i=Vi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(i=!0,Qr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Di(t),o.updater=so,t.stateNode=o,o._reactInternals=t,Ki(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,re&&i&&ji(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(co(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Nd(r),e=it(r,e),o){case 0:t=Xi(null,t,r,e,n);break e;case 1:t=Qs(null,t,r,e,n);break e;case 11:t=Vs(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,it(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Xi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Qs(e,t,r,o,n);case 3:e:{if(Ks(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ss(e,t),to(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=_n(Error(h(423)),t),t=Ys(e,t,r,n,o);break e}else if(r!==o){o=_n(Error(h(424)),t),t=Ys(e,t,r,n,o);break e}else for(Ve=Ot(t.stateNode.containerInfo.firstChild),qe=t,re=!0,ot=null,n=ls(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=Nt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return ds(t),e===null&&Ci(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,gi(r,o)?l=null:i!==null&&gi(r,i)&&(t.flags|=32),Ws(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return Gs(e,t,n);case 4:return Oi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),Vs(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(Jr,r._currentValue),r._currentValue=l,i!==null)if(rt(i.value,l)){if(i.children===o.children&&!Re.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Et(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ri(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(h(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ri(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Cn(t,n),o=Ye(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=it(r,t.pendingProps),o=it(r.type,o),Bs(e,t,r,o,n);case 15:return $s(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:it(r,o),co(e,t),t.tag=1,Te(r)?(e=!0,Qr(t)):e=!1,Cn(t,n),Os(t,r,o),Ki(t,r,o,n),Zi(null,t,r,!0,e,n);case 19:return Zs(e,t,n);case 22:return Hs(e,t,n)}throw Error(h(156,t.tag))};function ku(e,t){return ea(e,t)}function Ed(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Ed(e,t,n,r)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nd(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")gl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pe:return an(n.children,o,i,t);case We:l=8,o|=8;break;case zt:return e=Ze(12,n,t,o|2),e.elementType=zt,e.lanes=i,e;case Ie:return e=Ze(13,n,t,o),e.elementType=Ie,e.lanes=i,e;case tt:return e=Ze(19,n,t,o),e.elementType=tt,e.lanes=i,e;case se:return jo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:l=10;break e;case Kt:l=9;break e;case ct:l=11;break e;case dt:l=14;break e;case Le:l=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function jo(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cd(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wl(e,t,n,r,o,i,l,s,u){return e=new Cd(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function zd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Su(e){if(!e)return Ft;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Te(n))return Xa(e,n,t)}return t}function ju(e,t,n,r,o,i,l,s,u){return e=wl(n,r,!0,e,o,i,l,s,u),e.context=Su(null),n=e.current,r=_e(),o=$t(n),i=Et(r,o),i.callback=t??null,Ut(n,i,o),e.current.lanes=o,qn(e,o,r),Me(e,r),e}function Eo(e,t,n,r){var o=t.current,i=_e(),l=$t(o);return n=Su(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,l),e!==null&&(st(e,o,l,i),eo(e,o,l)),l}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kl(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function _d(){return null}var Nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sl(e){this._internalRoot=e}Co.prototype.render=Sl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Eo(e,t,null,null)},Co.prototype.unmount=Sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Eo(null,e,null,null)}),t[xt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=sa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&da(e)}};function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function Pd(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var m=No(l);i.call(m)}}var l=ju(t,r,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=l,e[xt]=l.current,er(e.nodeType===8?e.parentNode:e),rn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var m=No(u);s.call(m)}}var u=wl(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=u,e[xt]=u.current,er(e.nodeType===8?e.parentNode:e),rn(function(){Eo(t,u,n,r)}),u}function _o(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=No(l);s.call(u)}}Eo(t,l,e,o)}else l=Pd(n,t,e,o,r);return No(l)}la=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Ko(t,n|1),Me(t,ce()),(q&6)===0&&(Rn=ce()+500,It()))}break;case 13:rn(function(){var r=jt(e,1);if(r!==null){var o=_e();st(r,e,1,o)}}),kl(e,1)}},Yo=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=_e();st(t,e,134217728,n)}kl(e,134217728)}},aa=function(e){if(e.tag===13){var t=$t(e),n=jt(e,t);if(n!==null){var r=_e();st(n,e,t,r)}kl(e,t)}},sa=function(){return K},ua=function(e,t){var n=K;try{return K=e,t()}finally{K=n}},qo=function(e,t,n){switch(t){case"input":if(To(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Hr(r);if(!o)throw Error(h(90));Dl(r),To(r,o)}}}break;case"textarea":Al(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Kl=ml,Yl=rn;var Ld={usingClientEntryPoint:!1,Events:[rr,yn,Hr,Wl,Ql,ml]},gr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jl(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||_d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Nr=Po.inject(Rd),ft=Po}catch{}}return Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld,Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jl(t))throw Error(h(200));return zd(e,t,null,n)},Fe.createRoot=function(e,t){if(!jl(e))throw Error(h(299));var n=!1,r="",o=Nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wl(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,er(e.nodeType===8?e.parentNode:e),new Sl(t)},Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Jl(t),e=e===null?null:e.stateNode,e},Fe.flushSync=function(e){return rn(e)},Fe.hydrate=function(e,t,n){if(!zo(t))throw Error(h(200));return _o(null,e,t,!0,n)},Fe.hydrateRoot=function(e,t,n){if(!jl(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Nu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ju(t,null,e,1,n??null,o,!1,i,l),e[xt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Co(t)},Fe.render=function(e,t,n){if(!zo(t))throw Error(h(200));return _o(null,e,t,!1,n)},Fe.unmountComponentAtNode=function(e){if(!zo(e))throw Error(h(40));return e._reactRootContainer?(rn(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},Fe.unstable_batchedUpdates=ml,Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return _o(e,t,n,!1,r)},Fe.version="18.3.1-next-f1338f8080-20240426",Fe}var Ou;function qd(){if(Ou)return Cl.exports;Ou=1;function k(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k)}catch(D){console.error(D)}}return k(),Cl.exports=Ud(),Cl.exports}var Mu;function Vd(){if(Mu)return Lo;Mu=1;var k=qd();return Lo.createRoot=k.createRoot,Lo.hydrateRoot=k.hydrateRoot,Lo}var Bd=Vd();const $d=Fu(Bd),Hd=[{label:"Início",href:"#inicio"},{label:"Sobre",href:"#sobre"},{label:"Atuações",href:"#atuacoes"},{label:"Comprometimento",href:"#comprometimento"},{label:"FAQ",href:"#faq"},{label:"Contato",href:"/contato"}];function Pl(){const[k,D]=Je.useState(()=>window.scrollY>60||window.location.pathname==="/contato"),[h,A]=Je.useState(!1);Je.useEffect(()=>{const U=()=>{D(window.scrollY>60||window.location.pathname==="/contato")};return U(),window.addEventListener("scroll",U),()=>{window.removeEventListener("scroll",U)}},[]),Je.useEffect(()=>{if(!h){document.body.style.overflow="";return}return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[h]);const O=()=>{A(!1)},V=(U,G)=>{G.startsWith("#")&&window.location.pathname!=="/"&&(U.preventDefault(),window.location.href=`/${G}`)};return a.jsxs("header",{className:`header ${k?"header-scrolled":""}`,children:[a.jsxs("div",{className:"header-inner",children:[a.jsxs("a",{href:"/",className:"header-logo",onClick:O,"aria-label":"Regina Perrotta Advocacia - Início",children:[a.jsx("span",{className:"header-logo-serif",children:"Regina Perrotta"}),a.jsx("span",{className:"header-logo-sub",children:"Advocacia & Cidadania"})]}),a.jsx("nav",{className:`header-nav ${h?"open":""}`,"aria-label":"Navegação principal",children:Hd.map(U=>a.jsx("a",{href:U.href,onClick:G=>{O(),V(G,U.href)},className:"header-nav-link",children:U.label},U.href))}),h&&a.jsx("button",{type:"button",className:"header-menu-backdrop",onClick:O,"aria-label":"Fechar menu"}),a.jsxs("button",{type:"button",className:`header-burger ${h?"open":""}`,onClick:()=>A(U=>!U),"aria-label":h?"Fechar menu":"Abrir menu","aria-expanded":h,"aria-controls":"menu-principal",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]}),a.jsx("style",{children:`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition:
            background-color 0.4s ease,
            padding 0.4s ease,
            box-shadow 0.4s ease;
          padding: 20px 0;
        }

        .header-scrolled {
          background-color: rgba(74, 14, 18, 0.97);
          padding: 12px 0;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 102;
        }

        .header-logo {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
          position: relative;
          z-index: 103;
          text-decoration: none;
        }

        .header-logo-serif {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
        }

        .header-logo-sub {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent-400);
          margin-top: 2px;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 32px;
          position: relative;
          z-index: 103;
        }

        .header-nav-link {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          transition:
            color 0.3s ease,
            opacity 0.3s ease;
          position: relative;
          padding: 4px 0;
          text-decoration: none;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent-500);
          transition: width 0.3s ease;
        }

        .header-nav-link:hover {
          color: #fff;
        }

        .header-nav-link:hover::after {
          width: 100%;
        }

        .header-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
          position: relative;
          z-index: 104;
        }

        .header-burger span {
          display: block;
          width: 26px;
          height: 2px;
          background-color: #fff;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
          border-radius: 1px;
        }

        .header-burger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .header-burger.open span:nth-child(2) {
          opacity: 0;
        }

        .header-burger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .header-menu-backdrop {
          display: none;
        }

        @media (max-width: 900px) {
          .header {
            padding: 16px 0;
          }

          .header-scrolled {
            padding: 12px 0;
          }

          .header-inner {
            padding: 0 20px;
          }

          .header-logo-serif {
            font-size: 1.35rem;
          }

          .header-logo-sub {
            font-size: 0.6rem;
            letter-spacing: 0.18em;
          }

          .header-nav {
            position: fixed;
            top: 0;
            right: 0;
            width: min(380px, 88vw);
            height: 100vh;
            background-color: var(--primary-900);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 28px;
            padding: 80px 32px 40px;
            transform: translateX(100%);
            transition: transform 0.4s ease;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
            z-index: 103;
          }

          .header-nav.open {
            transform: translateX(0);
          }

          .header-nav-link {
            font-size: 1.2rem;
            font-family: var(--font-serif);
            color: rgba(255, 255, 255, 0.9);
            padding: 6px 0;
          }

          .header-nav-link::after {
            height: 2px;
          }

          .header-burger {
            display: flex;
          }

          .header-menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.35);
            border: 0;
            padding: 0;
            cursor: pointer;
            z-index: 102;
          }
        }

        @media (max-width: 480px) {
          .header-inner {
            padding: 0 16px;
          }

          .header-logo-serif {
            font-size: 1.2rem;
          }

          .header-logo-sub {
            font-size: 0.55rem;
            letter-spacing: 0.15em;
          }

          .header-nav {
            width: 90vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header,
          .header-nav,
          .header-nav-link,
          .header-nav-link::after,
          .header-burger span {
            transition: none;
          }
        }
      `})]})}function Wd(){return a.jsxs("section",{id:"inicio",className:"hero",children:[a.jsx("div",{className:"hero-bg"}),a.jsx("div",{className:"hero-overlay"}),a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsxs("div",{className:"hero-tag",children:[a.jsx("span",{className:"hero-tag-line"}),"Assistência Jurídica Especializada"]}),a.jsxs("h1",{className:"hero-title",children:["Defesa da cidadania,",a.jsx("br",{}),"dos direitos humanos",a.jsx("br",{}),"e do interesse público"]}),a.jsx("p",{className:"hero-subtitle",children:"Atuação em Direito Administrativo, Constitucional, Ambiental e Civil — com ética, transparência e compromisso com a efetividade dos direitos fundamentais."}),a.jsxs("div",{className:"hero-actions",children:[a.jsx("a",{href:"#atuacoes",className:"btn btn-primary",children:"Áreas de Atuação"}),a.jsx("a",{href:"https://wa.me/5544997754951?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline hero-btn-light",children:"Entrar em Contato"})]})]}),a.jsx("div",{className:"hero-photo",children:a.jsx("div",{className:"hero-photo-frame",children:a.jsx("div",{className:"hero-photo-image",role:"img","aria-label":"Dra. Regina Perrotta"})})})]}),a.jsxs("div",{className:"hero-scroll",children:[a.jsx("span",{children:"Role para conhecer"}),a.jsx("div",{className:"hero-scroll-line"})]}),a.jsx("style",{children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600');
          background-size: cover;
          background-position: center;
          animation: scaleIn 1.2s ease;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(74, 14, 18, 0.97) 0%,
            rgba(74, 14, 18, 0.94) 48%,
            rgba(74, 14, 18, 0.78) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
          align-items: center;
          gap: 60px;
        }

        .hero-copy {
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-400);
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero-tag-line {
          width: 40px;
          height: 1px;
          background-color: var(--accent-500);
        }

        .hero-title {
          color: #fff;
          font-weight: 400;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          line-height: 1.15;
          max-width: 760px;
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.75);
          max-width: 560px;
          margin-bottom: 40px;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease 0.6s both;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.8s both;
        }

        .hero-btn-light {
          color: #fff;
          border-color: rgba(255,255,255,0.35);
        }

        .hero-btn-light:hover {
          background-color: #fff;
          color: var(--primary-900);
          border-color: #fff;
        }

        .hero-photo {
          position: relative;
          justify-self: end;
          width: min(100%, 430px);
          animation: fadeIn 1s ease 0.5s both;
        }

        .hero-photo-frame {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 180px 180px 18px 18px;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 25px 60px rgba(0,0,0,0.35);
          background: rgba(255,255,255,0.05);
        }

        .hero-photo-image {
          width: 100%;
          height: 560px;
          background-image: url('/regina.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }

        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 3;
          animation: fadeIn 1.5s ease 1s both;
        }

        .hero-scroll span {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .hero-scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.5),
            transparent
          );
          position: relative;
        }

        .hero-scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(
            to bottom,
            var(--accent-400),
            transparent
          );
          animation: scrollHint 2s ease-in-out infinite;
        }

        @keyframes scrollHint {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }

          50% {
            transform: translateY(25px);
            opacity: 0;
          }
        }

        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-photo {
            justify-self: center;
            width: min(75vw, 360px);
          }

          .hero-copy {
            text-align: center;
          }

          .hero-tag {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 110px 0 60px;
          }

          .hero-photo {
            width: min(78vw, 330px);
          }

          .hero-photo-image {
            height: 440px;
          }

          .hero-scroll {
            display: none;
          }
        }
      `})]})}function Qd(){return a.jsxs("section",{id:"sobre",className:"about",style:{opacity:1,visibility:"visible",display:"block"},children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"about-content",style:{opacity:1,visibility:"visible",display:"block"},children:[a.jsxs("div",{className:"about-header",children:[a.jsx("span",{className:"section-label",children:"Sobre"}),a.jsx("h2",{className:"section-title",children:"Dra. Regina Perrotta"})]}),a.jsxs("div",{className:"about-quote",children:[a.jsx("span",{className:"about-quote-author",children:"Dra. Regina Perrotta"}),a.jsx("blockquote",{children:"“O Direito deveria ser inerente à existência humana, jamais algo pelo qual fosse necessário lutar. Mas, quando é negado, violado ou usurpado, cabe ao advogado ser a mão firme que o sustenta, a voz que o reivindica e a confiança de quem precisa vê-lo restabelecido.”"})]}),a.jsxs("div",{className:"about-text",children:[a.jsx("p",{children:"Regina Perrotta é advogada, com atuação voltada à defesa da cidadania, dos direitos humanos e do interesse público. Dedica sua trajetória à observação, fiscalização e defesa de direitos fundamentais, especialmente nas áreas do Direito Administrativo, Constitucional, Ambiental e dos direitos sociais, coletivos e difusos."}),a.jsx("p",{children:"Sua atuação é marcada pelo acompanhamento das políticas públicas e da Administração Pública, com atenção à legalidade, transparência, moralidade administrativa, acesso à informação, proteção do patrimônio público, meio ambiente, saúde pública e efetividade dos direitos assegurados pela Constituição Federal."}),a.jsx("p",{children:"Como observadora dos direitos humanos e da cidadania, desenvolve trabalho de fiscalização cidadã e controle social, acompanhando a atuação dos Poderes Públicos e instituições responsáveis pela proteção dos interesses da coletividade. Sua atuação busca transformar o exercício da cidadania em instrumento concreto de defesa da sociedade, especialmente diante de situações que envolvam omissões administrativas, utilização de recursos públicos, políticas sociais, proteção ambiental e direitos fundamentais."}),a.jsx("p",{children:"Para Regina Perrotta, cidadania não se limita ao reconhecimento de direitos: compreende também o direito de fiscalizar, questionar, exigir transparência e cobrar do Estado o cumprimento de seus deveres constitucionais."})]})]})}),a.jsx("style",{children:`
        .about {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;
          overflow: visible !important;
          padding: 90px 0 80px !important;
          margin: 0 !important;
          background-color: var(--neutral-50);
        }

        .about-content {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;
          overflow: visible !important;
          max-width: 900px;
          margin: 0 auto;
        }

        .about-header {
          display: block;
          text-align: center;
          margin-bottom: 40px;
        }

        .about-header .section-label {
          display: block;
          margin-bottom: 12px;
        }

        .about-header .section-title {
          margin: 0;
        }

        .about-quote {
          display: block;
          max-width: 760px;
          margin: 0 auto 42px;
          padding: 30px 36px;
          background-color: #fdf3f2;
          border-left: 2px solid var(--accent-500);
          text-align: center;
        }

        .about-quote-author {
          display: block;
          margin-bottom: 14px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--primary-700);
          letter-spacing: 0.04em;
        }

        .about-quote blockquote {
          display: block;
          margin: 0;
          font-family: var(--font-serif);
          font-size: clamp(1.35rem, 2vw, 1.65rem);
          line-height: 1.35;
          font-weight: 400;
          color: var(--primary-700);
        }

        .about-text {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          max-width: 820px;
          margin: 0 auto;
        }

        .about-text p {
          display: block;
          margin: 0 0 22px;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--neutral-600);
        }

        .about-text p:first-child {
          font-size: 1.05rem;
          color: var(--neutral-700);
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .about {
            padding: 70px 24px 60px !important;
          }

          .about-quote {
            padding: 24px 20px;
          }

          .about-quote blockquote {
            font-size: 1.3rem;
          }

          .about-text p {
            font-size: 0.96rem;
            line-height: 1.7;
          }
        }
      `})]})}function Tl(){const k=Je.useRef(null),[D,h]=Je.useState(!1);return Je.useEffect(()=>{const A=k.current;if(!A)return;const O=new IntersectionObserver(([V])=>{V.isIntersecting&&(h(!0),O.disconnect())},{threshold:.15});return O.observe(A),()=>O.disconnect()},[]),{ref:k,visible:D}}const Kd=[{number:"01",title:"Administrativo",text:"Atuação voltada à defesa dos direitos do cidadão em suas relações com a Administração Pública e ao controle da legalidade dos atos administrativos. Abrange o acompanhamento e questionamento de atos, omissões e decisões do Poder Público, o acesso à informação e a documentos públicos, a transparência administrativa, a fiscalização da aplicação de recursos públicos e a observância dos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.",text2:"A atuação compreende ainda medidas administrativas e judiciais destinadas à proteção do interesse público, do patrimônio público e dos direitos individuais, coletivos e difusos, especialmente diante de ilegalidades, omissões, negativas de acesso à informação ou situações em que a atuação estatal possa comprometer direitos assegurados pela Constituição e pela legislação.",quote:"No Direito Administrativo, defender o cidadão é lembrar ao Poder Público que toda autoridade nasce da lei, encontra limites na Constituição e somente se legitima quando exercida em favor do interesse público."},{number:"02",title:"Constitucional",text:"O Direito Constitucional é o alicerce e o grande guarda-chuva de proteção dos demais direitos, estabelecendo os limites do poder estatal e as garantias fundamentais que orientam todo o ordenamento jurídico.",text2:"A atuação nessa área parte da Constituição como instrumento efetivo de proteção da pessoa e da coletividade, abrangendo a defesa da cidadania, da dignidade humana, da igualdade, da liberdade, do devido processo legal, do acesso à informação, do meio ambiente equilibrado e dos direitos sociais, coletivos e difusos.",quote:"É a Constituição funcionando como parâmetro para fiscalizar o Estado, limitar abusos e assegurar que todos os demais direitos sejam reconhecidos, respeitados e concretizados."},{number:"03",title:"Meio Ambiente",text:"Atuação voltada à proteção do meio ambiente como direito fundamental, patrimônio coletivo e responsabilidade compartilhada entre Poder Público e sociedade. Abrange a fiscalização de atos e omissões administrativas, políticas públicas, licenciamento, uso e ocupação de áreas, recursos naturais, saneamento e situações capazes de produzir danos ambientais ou comprometer a qualidade de vida das presentes e futuras gerações.",text2:"A atuação jurídica busca não apenas a reparação do dano já ocorrido, mas principalmente sua prevenção, exigindo transparência, responsabilidade, cumprimento da legislação e atuação efetiva dos órgãos públicos responsáveis pela proteção ambiental.",quote:"Defender o meio ambiente é defender um direito que não pertence apenas a alguém, mas a todos — inclusive àqueles que ainda virão."},{number:"04",title:"Civil",text:"Atuação na proteção dos direitos da pessoa nas relações privadas e nas situações em que sua dignidade, liberdade, patrimônio, saúde, imagem, honra ou autonomia sejam ameaçados ou violados.",text2:"Compreende demandas relacionadas ao Direito do Consumidor, responsabilidade civil, contratos, relações com empresas e prestadores de serviços, planos e serviços de saúde, acesso e continuidade de tratamentos, reparação de danos e proteção diante de práticas abusivas. A atuação também alcança a defesa dos direitos da personalidade, da liberdade de expressão e de informação, inclusive diante de restrições indevidas, censura ou conflitos envolvendo honra, imagem e atividade informativa.",quote:null}];function Yd(){return a.jsxs("section",{id:"atuacoes",className:"areas",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"areas-header",children:[a.jsx("span",{className:"section-label",children:"Atuações"}),a.jsx("h2",{className:"section-title",children:"Áreas de Atuação"}),a.jsx("p",{className:"areas-intro",children:"Cada área representa um compromisso com a defesa de direitos fundamentais e o controle da atuação do Estado."})]}),a.jsx("div",{className:"areas-list",children:Kd.map((k,D)=>a.jsx(Gd,{area:k,index:D},k.number))})]}),a.jsx("style",{children:`
        .areas {
          background-color: #fff;
          padding: 80px 0;
        }

        .areas-header {
          text-align: center;
          margin-bottom: 54px;
        }

        .areas-header .section-label {
          margin-bottom: 12px;
        }

        .areas-intro {
          max-width: 540px;
          margin: 0 auto;
          font-size: 1.02rem;
          color: var(--neutral-500);
        }

        .areas-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .area-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 40px;
          padding: 56px 0;
          border-top: 1px solid var(--neutral-200);
          transition: background-color 0.4s ease;
        }

        .area-item:last-child {
          border-bottom: 1px solid var(--neutral-200);
        }

        .area-item:hover {
          background-color: var(--neutral-50);
        }

        .area-number {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 400;
          color: var(--accent-500);
          letter-spacing: 0.02em;
        }

        .area-content h3 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 500;
          color: var(--primary-900);
          margin-bottom: 20px;
        }

        .area-content p {
          margin-bottom: 16px;
          font-size: 0.96rem;
          color: var(--neutral-600);
        }

        .area-quote {
          margin-top: 24px;
          padding-left: 20px;
          border-left: 2px solid var(--accent-500);
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--primary-700);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .areas {
            padding: 60px 0;
          }

          .areas-header {
            margin-bottom: 40px;
          }

          .area-item {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 40px 0;
          }
        }
      `})]})}function Gd({area:k,index:D}){const{ref:h,visible:A}=Tl();return a.jsxs("div",{ref:h,className:`area-item reveal ${A?"visible":""}`,style:{transitionDelay:`${D*80}ms`},children:[a.jsx("div",{className:"area-number",children:k.number}),a.jsxs("div",{className:"area-content",children:[a.jsx("h3",{children:k.title}),a.jsx("p",{children:k.text}),k.text2&&a.jsx("p",{children:k.text2}),k.quote&&a.jsx("blockquote",{className:"area-quote",children:k.quote})]})]})}const Xd=[{icon:"confidentiality",title:"Confidencialidade",text:"Toda atuação é conduzida com ética, discrição e absoluto respeito à confidencialidade. Informações, documentos e circunstâncias confiados no exercício profissional são tratados com responsabilidade e proteção, preservando a privacidade, a segurança e a relação de confiança com cada cliente."},{icon:"empathy",title:"Empatia",text:"Cada situação envolve muito mais do que um processo ou uma questão jurídica: envolve pessoas, histórias e expectativas. A atuação é pautada pela escuta, pelo respeito e pela compreensão de cada realidade, aliando sensibilidade humana à responsabilidade e à firmeza profissional."},{icon:"personalized",title:"Atendimento Personalizado e Humano",text:"Cada pessoa e cada situação são únicas. Por isso, o atendimento é conduzido de forma próxima, individualizada e humana, com escuta atenta, comunicação clara e acompanhamento responsável, buscando compreender não apenas a questão jurídica, mas também as necessidades e particularidades de cada cliente."}];function Zd({name:k}){const D={confidentiality:a.jsxs(a.Fragment,{children:[a.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"1"}),a.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"}),a.jsx("circle",{cx:"12",cy:"16",r:"1.5"})]}),empathy:a.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),personalized:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"8",r:"4"}),a.jsx("path",{d:"M4 21c0-4.42 3.58-8 8-8s8 3.58 8 8"})]})};return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"value-icon-svg",children:D[k]})}function Jd(){const{ref:k,visible:D}=Tl();return a.jsxs("section",{id:"comprometimento",className:"commitment",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{ref:k,className:`commitment-header reveal ${D?"visible":""}`,children:[a.jsx("span",{className:"section-label section-label-light",children:"Comprometimento"}),a.jsx("h2",{className:"commitment-title",children:"Meu Comprometimento"}),a.jsx("p",{className:"commitment-intro",children:"Atuação responsável, humana e individualizada — porque cada caso é também uma história e uma vida."})]}),a.jsx("div",{className:"values-grid",children:Xd.map((h,A)=>a.jsx(bd,{value:h,index:A},h.title))})]}),a.jsx("style",{children:`
        .commitment {
          background-color: var(--primary-900);
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }

        .commitment::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(196,163,90,0.06) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .commitment-header {
          text-align: center;
          margin-bottom: 54px;
          position: relative;
          z-index: 1;
        }

        .section-label-light {
          color: var(--accent-400);
        }

        .commitment-title {
          color: #fff;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          margin-bottom: 18px;
        }

        .commitment-intro {
          color: rgba(255,255,255,0.68);
          max-width: 520px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .value-card {
          padding: 34px 30px;
          background-color: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          transition:
            background-color 0.4s ease,
            border-color 0.4s ease,
            transform 0.4s ease;
        }

        .value-card:hover {
          background-color: rgba(255,255,255,0.055);
          border-color: rgba(196,163,90,0.35);
          transform: translateY(-4px);
        }

        .value-icon-wrap {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          border: 1px solid rgba(196,163,90,0.35);
          border-radius: 50%;
          color: var(--accent-400);
        }

        .value-icon-svg {
          width: 23px;
          height: 23px;
        }

        .value-card h4 {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 14px;
        }

        .value-card p {
          color: rgba(255,255,255,0.64);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .commitment {
            padding: 70px 0;
          }

          .commitment-header {
            margin-bottom: 40px;
          }

          .value-card {
            padding: 30px 26px;
          }
        }
      `})]})}function bd({value:k,index:D}){const{ref:h,visible:A}=Tl();return a.jsxs("div",{ref:h,className:`value-card reveal ${A?"visible":""}`,style:{transitionDelay:`${D*120}ms`},children:[a.jsx("div",{className:"value-icon-wrap",children:a.jsx(Zd,{name:k.icon})}),a.jsx("h4",{children:k.title}),a.jsx("p",{children:k.text})]})}const ef=[{question:"O que fazer quando o direito à saúde é negado?",answer:"Negativas de exames, medicamentos, tratamentos, cirurgias ou atendimentos podem ser questionadas administrativa ou judicialmente, tanto no sistema público quanto na saúde suplementar, conforme cada situação."},{question:"Quando meus direitos civis estão sendo violados?",answer:"Quando há lesão ou ameaça à liberdade, honra, imagem, privacidade, patrimônio, igualdade ou outros direitos da pessoa, podem existir medidas jurídicas destinadas à proteção e reparação."},{question:"Para que serve uma Ação Popular?",answer:"A Ação Popular é um instrumento constitucional que permite ao cidadão questionar atos lesivos ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural."}];function tf(){const[k,D]=Je.useState(0);return a.jsxs("section",{id:"faq",className:"faq",children:[a.jsxs("div",{className:"container-narrow",children:[a.jsxs("div",{className:"faq-header",children:[a.jsx("span",{className:"section-label",children:"Dúvidas"}),a.jsx("h2",{className:"section-title",children:"Perguntas Frequentes"})]}),a.jsx("div",{className:"faq-list",children:ef.map((h,A)=>{const O=k===A;return a.jsxs("div",{className:`faq-item ${O?"open":""}`,children:[a.jsxs("button",{className:"faq-question",onClick:()=>D(O?null:A),"aria-expanded":O,children:[a.jsx("span",{children:h.question}),a.jsxs("span",{className:"faq-toggle",children:[a.jsx("span",{className:"faq-toggle-line"}),a.jsx("span",{className:`faq-toggle-line vertical ${O?"open":""}`})]})]}),a.jsx("div",{className:`faq-answer-wrap ${O?"open":""}`,children:a.jsx("div",{className:"faq-answer",children:a.jsx("p",{children:h.answer})})})]},A)})})]}),a.jsx("style",{children:`
        .faq {
          background-color: var(--neutral-50);
          padding: 80px 0;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .faq-item {
          border-bottom: 1px solid var(--neutral-200);
        }

        .faq-item:first-child {
          border-top: 1px solid var(--neutral-200);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          text-align: left;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--primary-900);
          transition: color 0.3s ease;
          gap: 20px;
        }

        .faq-question:hover {
          color: var(--primary-600);
        }

        .faq-toggle {
          position: relative;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-toggle-line {
          position: absolute;
          width: 16px;
          height: 1.5px;
          background-color: var(--accent-600);
          transition: all 0.3s ease;
        }

        .faq-toggle-line.vertical {
          transform: rotate(90deg);
        }

        .faq-toggle-line.vertical.open {
          transform: rotate(0deg);
          opacity: 0;
        }

        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .faq-answer-wrap.open {
          max-height: 300px;
        }

        .faq-answer {
          padding: 0 0 22px;
        }

        .faq-answer p {
          font-size: 0.95rem;
          color: var(--neutral-600);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .faq {
            padding: 65px 24px;
          }

          .faq-header {
            margin-bottom: 36px;
          }

          .faq-question {
            font-size: 1.1rem;
            padding: 20px 0;
          }
        }
      `})]})}function Ll(){return a.jsxs("footer",{id:"contato",className:"footer",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsx("div",{className:"footer-brand",children:a.jsx("img",{src:"/logo.png",alt:"Dra. Regina Perrotta",className:"footer-logo"})}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{className:"footer-col-title",children:"Contato"}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx("span",{className:"footer-contact-label",children:"WhatsApp"}),a.jsx("a",{href:"https://wa.me/5511954094265?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico.",target:"_blank",rel:"noopener noreferrer",children:"11 95409-4265"}),a.jsx("a",{href:"https://wa.me/5544997754951?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico.",target:"_blank",rel:"noopener noreferrer",children:"44 99775-4951"})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx("span",{className:"footer-contact-label",children:"E-mail"}),a.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=assistenciajuridica@advreginaperrotta.com.br",target:"_blank",rel:"noopener noreferrer",children:"assistenciajuridica@advreginaperrotta.com.br"})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{className:"footer-col-title",children:"Endereço"}),a.jsxs("p",{className:"footer-address",children:["Rua Prof. Luiz Eulálio Bueno Vidigal, 175 — sala 1087",a.jsx("br",{}),"Osasco — SP",a.jsx("br",{}),"CEP: 06093-085"]}),a.jsx("div",{className:"footer-links",children:a.jsx("a",{href:"/privacidade",className:"footer-link",children:"Política de Privacidade"})})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsx("p",{children:"© 2026 Regina Perrotta. Todos os direitos reservados."})})]}),a.jsx("style",{children:`
        .footer {
          background-color: #7f3438;
          padding: 80px 0 32px;
          color: rgba(255,255,255,0.7);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
          align-items: start;
        }

        .footer-brand {
          display: flex;
          align-items: flex-start;
        }

        .footer-logo {
          width: 134px;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-400);
          margin-bottom: 24px;
        }

        .footer-contact-item {
          margin-bottom: 20px;
        }

        .footer-contact-label {
          display: block;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 6px;
        }

        .footer-contact-item a {
          display: block;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.8);
          transition: color 0.3s ease;
          margin-bottom: 4px;
          text-decoration: none;
        }

        .footer-contact-item a:hover {
          color: var(--accent-400);
        }

        .footer-address {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-link {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: var(--accent-400);
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.18);
        }

        .footer-bottom p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 28px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-logo {
            width: 140px;
          }
        }
      `})]})}function nf(){const[k,D]=Je.useState(!1),[h,A]=Je.useState(!1),[O,V]=Je.useState(!1);async function U(G){G.preventDefault(),D(!0),A(!1),V(!1);const W=G.currentTarget,ae=new FormData(W);ae.append("_subject","Novo contato pelo site — Regina Perrotta Advocacia"),ae.append("_template","table"),ae.append("_captcha","false"),ae.append("_replyto",String(ae.get("email")||""));try{if(!(await fetch("https://formsubmit.co/ajax/assistenciajuridica@advreginaperrotta.com.br",{method:"POST",body:ae,headers:{Accept:"application/json"}})).ok)throw new Error("Erro ao enviar formulário");W.reset(),A(!0)}catch{V(!0)}finally{D(!1)}}return a.jsxs("section",{id:"contato",className:"contact",children:[a.jsxs("div",{className:"contact-container",children:[a.jsxs("div",{className:"contact-intro",children:[a.jsx("span",{className:"section-label",children:"Contato"}),a.jsx("h1",{children:"Entre em contato"}),a.jsx("p",{children:"Para informações, orientações e atendimento jurídico, entre em contato pelos canais abaixo."}),a.jsxs("div",{className:"contact-details",children:[a.jsxs("div",{className:"contact-detail",children:[a.jsx("span",{className:"contact-detail-label",children:"Telefone"}),a.jsx("a",{href:"https://wa.me/5511954094265?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico.",target:"_blank",rel:"noopener noreferrer",children:"11 95409-4265"}),a.jsx("a",{href:"https://wa.me/5544997754951?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico.",target:"_blank",rel:"noopener noreferrer",children:"44 99775-4951"})]}),a.jsxs("div",{className:"contact-detail",children:[a.jsx("span",{className:"contact-detail-label",children:"E-mail"}),a.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=assistenciajuridica@advreginaperrotta.com.br",target:"_blank",rel:"noopener noreferrer",children:"assistenciajuridica@advreginaperrotta.com.br"})]}),a.jsxs("div",{className:"contact-detail",children:[a.jsx("span",{className:"contact-detail-label",children:"Endereço profissional"}),a.jsxs("p",{children:["Rua Prof. Luiz Eulálio Bueno Vidigal, 175 — sala 1087",a.jsx("br",{}),"Osasco — SP",a.jsx("br",{}),"CEP: 06093-085"]})]})]})]}),a.jsxs("div",{className:"contact-form-wrap",children:[a.jsxs("div",{className:"contact-form-header",children:[a.jsx("h2",{children:"Fale comigo"}),a.jsx("p",{children:"Preencha os dados abaixo e envie sua mensagem."})]}),a.jsxs("form",{onSubmit:U,className:"contact-form",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{htmlFor:"nome",children:["Nome ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"nome",name:"Nome",type:"text",placeholder:"Seu nome",required:!0})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{htmlFor:"sobrenome",children:["Sobrenome ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"sobrenome",name:"Sobrenome",type:"text",placeholder:"Seu sobrenome",required:!0})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{htmlFor:"email",children:["E-mail ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"email",name:"E-mail",type:"email",placeholder:"Seu e-mail",required:!0})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{htmlFor:"endereco",children:"Endereço"}),a.jsx("input",{id:"endereco",name:"Endereço",type:"text",placeholder:"Seu endereço"})]})]}),a.jsxs("div",{className:"form-field",children:[a.jsx("label",{htmlFor:"telefone",children:"Telefone"}),a.jsx("input",{id:"telefone",name:"Telefone",type:"tel",placeholder:"Seu telefone"})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{htmlFor:"assunto",children:["Assunto ",a.jsx("span",{children:"*"})]}),a.jsx("input",{id:"assunto",name:"Assunto",type:"text",placeholder:"Assunto da mensagem",required:!0})]}),a.jsxs("div",{className:"form-field",children:[a.jsxs("label",{htmlFor:"mensagem",children:["Mensagem ",a.jsx("span",{children:"*"})]}),a.jsx("textarea",{id:"mensagem",name:"Mensagem",placeholder:"Escreva sua mensagem",rows:6,required:!0})]}),a.jsx("button",{type:"submit",className:"contact-submit",disabled:k,children:k?"Enviando...":"Enviar mensagem"}),h&&a.jsx("div",{className:"form-success",children:"Sua mensagem foi enviada com sucesso."}),O&&a.jsx("div",{className:"form-error",children:"Não foi possível enviar a mensagem. Tente novamente ou entre em contato pelo telefone ou e-mail."})]})]})]}),a.jsx("style",{children:`
        .contact {
          min-height: 100vh;
          background-color: var(--neutral-50);
          padding: 150px 0 100px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-intro {
          padding-top: 20px;
        }

        .contact-intro h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          color: var(--primary-700);
          margin: 12px 0 24px;
        }

        .contact-intro > p {
          max-width: 520px;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--neutral-600);
          margin-bottom: 56px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-detail {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-detail-label {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-600);
          margin-bottom: 10px;
        }

        .contact-detail a,
        .contact-detail p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--neutral-700);
          text-decoration: none;
          margin: 0;
        }

        .contact-detail a:hover {
          color: var(--primary-700);
        }

        .contact-form-wrap {
          background-color: #fff;
          padding: 48px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .contact-form-header {
          margin-bottom: 32px;
        }

        .contact-form-header h2 {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 400;
          color: var(--primary-700);
          margin-bottom: 8px;
        }

        .contact-form-header p {
          font-size: 0.9rem;
          color: var(--neutral-500);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
        }

        .form-field label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--primary-700);
          margin-bottom: 7px;
        }

        .form-field label span {
          color: var(--primary-700);
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid var(--neutral-300);
          background-color: #fff;
          padding: 12px 13px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--neutral-700);
          outline: none;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 130px;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--primary-600);
          box-shadow: 0 0 0 2px rgba(74, 14, 18, 0.08);
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: var(--neutral-400);
        }

        .contact-submit {
          width: 100%;
          border: none;
          background-color: var(--primary-700);
          color: #fff;
          padding: 14px 20px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          cursor: pointer;
          transition:
            background-color 0.3s ease,
            opacity 0.3s ease;
        }

        .contact-submit:hover {
          background-color: var(--primary-900);
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .form-success {
          padding: 12px 14px;
          background-color: #eef7ef;
          border: 1px solid #c8dfca;
          color: #315d36;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .form-error {
          padding: 12px 14px;
          background-color: #fff1f1;
          border: 1px solid #e1bcbc;
          color: #7a2020;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .contact {
            padding: 130px 0 80px;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .contact-form-wrap {
            padding: 36px;
          }
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 0 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .contact-form-wrap {
            padding: 28px 22px;
          }
        }
      `})]})}function rf(){return a.jsxs("main",{className:"privacy-page",children:[a.jsx("section",{className:"privacy-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("span",{className:"section-label",children:"Privacidade"}),a.jsx("h1",{className:"privacy-title",children:"Política de Privacidade e Proteção de Dados"}),a.jsx("p",{className:"privacy-intro",children:"Transparência, responsabilidade e respeito à privacidade no tratamento de dados pessoais."})]})}),a.jsx("section",{className:"privacy-content",children:a.jsxs("div",{className:"container-narrow",children:[a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"1. Compromisso com a privacidade"}),a.jsx("p",{children:"A Regina Perrotta Advocacia & Cidadania valoriza a privacidade, a segurança das informações e a proteção dos dados pessoais de seus clientes, visitantes e demais pessoas que utilizem este site."}),a.jsx("p",{children:"Esta Política de Privacidade estabelece as informações sobre a forma como dados pessoais eventualmente fornecidos por meio deste site são tratados, especialmente quando o usuário utiliza os canais de contato ou solicita informações sobre atendimento jurídico."}),a.jsx("p",{children:"O tratamento de dados pessoais é realizado de acordo com a legislação aplicável, especialmente a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD)."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"2. Dados pessoais que podem ser coletados"}),a.jsx("p",{children:"Ao utilizar os canais de contato disponibilizados neste site, o usuário poderá fornecer voluntariamente informações necessárias para sua identificação e para o estabelecimento de comunicação, incluindo nome, sobrenome, endereço de e-mail, telefone e demais informações inseridas no conteúdo da mensagem."}),a.jsx("p",{children:"O conteúdo da mensagem poderá conter informações relacionadas à situação apresentada pelo usuário, inclusive informações de natureza pessoal ou relacionadas a uma questão jurídica."}),a.jsx("p",{children:"Recomenda-se que, no primeiro contato, o usuário não encaminhe documentos, dados pessoais sensíveis ou informações que não sejam necessárias para a finalidade da solicitação."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"3. Finalidade do tratamento"}),a.jsx("p",{children:"Os dados pessoais fornecidos pelo usuário poderão ser utilizados para responder solicitações, estabelecer contato, prestar informações sobre os serviços jurídicos, compreender a demanda apresentada, avaliar eventual solicitação de atendimento e possibilitar a comunicação necessária entre o usuário e a profissional."}),a.jsx("p",{children:"As informações serão utilizadas de acordo com a finalidade para a qual foram fornecidas e dentro dos limites estabelecidos pela legislação aplicável e pelas obrigações profissionais relacionadas ao exercício da advocacia."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"4. Formulário de contato e serviços de terceiros"}),a.jsx("p",{children:"As informações inseridas pelo usuário no formulário de contato poderão ser encaminhadas por meio de serviço tecnológico de terceiros utilizado para possibilitar o recebimento e processamento da mensagem enviada pelo site."}),a.jsx("p",{children:"O tratamento realizado por eventual fornecedor tecnológico observará as condições aplicáveis ao respectivo serviço. O compartilhamento técnico necessário ao funcionamento do formulário não significa comercialização dos dados pessoais fornecidos pelo usuário."}),a.jsx("p",{children:"O usuário também poderá optar por entrar em contato diretamente por WhatsApp ou por e-mail. Ao utilizar esses canais externos, o tratamento de dados também estará sujeito às políticas e condições dos respectivos provedores de serviço."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"5. Compartilhamento de informações"}),a.jsx("p",{children:"Os dados pessoais não são comercializados."}),a.jsx("p",{children:"O eventual compartilhamento de informações poderá ocorrer quando necessário para o funcionamento dos canais de comunicação, para a prestação de serviços, para cumprimento de obrigação legal ou regulatória, para o exercício regular de direitos ou em outras hipóteses autorizadas pela legislação aplicável."}),a.jsx("p",{children:"Quando houver utilização de fornecedores tecnológicos para funcionamento do site ou encaminhamento das mensagens, o acesso aos dados será limitado ao necessário para a finalidade do serviço correspondente."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"6. Segurança das informações"}),a.jsx("p",{children:"São adotadas medidas compatíveis com a natureza das informações tratadas para reduzir os riscos de acesso não autorizado, perda, alteração, divulgação ou utilização indevida dos dados pessoais."}),a.jsx("p",{children:"A proteção das informações e a preservação da confidencialidade constituem compromissos permanentes na utilização deste site e nos canais de atendimento."}),a.jsx("p",{children:"Nenhum sistema eletrônico conectado à internet está sujeito a risco zero. Por essa razão, as medidas de segurança são continuamente consideradas de acordo com a natureza das informações e das atividades desenvolvidas."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"7. Direitos do titular dos dados"}),a.jsx("p",{children:"Nos termos da Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018 —, o titular dos dados pessoais possui os direitos previstos na legislação, observadas as hipóteses legais e as limitações aplicáveis a cada situação."}),a.jsx("p",{children:"Entre os direitos assegurados pela legislação estão a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos, inexatos ou desatualizados e demais direitos previstos na LGPD."}),a.jsx("p",{children:"O exercício de determinado direito poderá depender da análise da situação concreta e da existência de fundamento legal para a manutenção ou tratamento das informações."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"8. Dados relacionados ao atendimento jurídico"}),a.jsx("p",{children:"Informações eventualmente fornecidas para análise de uma questão jurídica poderão apresentar natureza pessoal, profissional ou sensível. Essas informações serão tratadas de acordo com a finalidade do atendimento e com as obrigações profissionais, legais e éticas aplicáveis à advocacia."}),a.jsx("p",{children:"O usuário deve utilizar os canais de contato com cautela, encaminhando apenas as informações necessárias para a finalidade pretendida, especialmente quando houver dados pessoais de terceiros, documentos ou informações protegidas por sigilo."}),a.jsx("p",{children:"O envio de uma mensagem pelo site não constitui, por si só, contratação de serviços advocatícios ou constituição de relação profissional entre o usuário e a advogada."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"9. Conservação dos dados"}),a.jsx("p",{children:"Os dados pessoais poderão ser mantidos pelo período necessário para cumprir as finalidades para as quais foram coletados, atender obrigações legais ou regulatórias, preservar direitos, exercer regularmente direitos em processos judiciais ou administrativos e cumprir outras hipóteses autorizadas pela legislação."}),a.jsx("p",{children:"Encerrada a finalidade que justificou o tratamento, os dados poderão ser eliminados, ressalvadas as hipóteses em que sua conservação seja necessária ou autorizada pela legislação."})]}),a.jsxs("section",{className:"privacy-section",children:[a.jsx("h2",{children:"10. Contato sobre privacidade e proteção de dados"}),a.jsx("p",{children:"Para dúvidas, solicitações relacionadas à privacidade ou exercício dos direitos previstos na legislação de proteção de dados, o usuário poderá entrar em contato pelo e-mail:"}),a.jsx("p",{className:"privacy-email",children:a.jsx("a",{href:"mailto:assistenciajuridica@advreginaperrotta.com.br",children:"assistenciajuridica@advreginaperrotta.com.br"})}),a.jsx("p",{children:"As solicitações serão analisadas de acordo com a legislação aplicável e poderão exigir informações necessárias para confirmação da identidade do solicitante e adequada compreensão do pedido."})]}),a.jsxs("section",{className:"privacy-section privacy-final",children:[a.jsx("h2",{children:"11. Atualizações desta política"}),a.jsx("p",{children:"Esta Política de Privacidade poderá ser atualizada sempre que necessário para refletir alterações na legislação, nos serviços oferecidos, nas tecnologias utilizadas ou nas práticas de tratamento de dados pessoais."}),a.jsx("p",{children:"A versão disponibilizada nesta página será considerada a versão vigente da Política de Privacidade."}),a.jsx("p",{className:"privacy-updated",children:"Última atualização: outubro de 2026."})]})]})}),a.jsx("style",{children:`
        .privacy-page {
          background-color: var(--neutral-50);
          min-height: 100vh;
        }

        .privacy-hero {
          padding: 150px 0 90px;
          background-color: var(--primary-900);
          color: #fff;
        }

        .privacy-hero .section-label {
          color: var(--accent-400);
          margin-bottom: 16px;
        }

        .privacy-title {
          max-width: 850px;
          margin: 0 0 24px;
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: 1.08;
          font-weight: 400;
          color: #fff;
        }

        .privacy-intro {
          max-width: 650px;
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
        }

        .privacy-content {
          padding: 90px 0 110px;
          background-color: var(--neutral-50);
        }

        .privacy-section {
          padding: 0 0 48px;
          margin-bottom: 48px;
          border-bottom: 1px solid var(--neutral-200);
        }

        .privacy-section:last-child {
          margin-bottom: 0;
        }

        .privacy-section h2 {
          margin: 0 0 20px;
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 3vw, 2rem);
          line-height: 1.2;
          font-weight: 400;
          color: var(--primary-900);
        }

        .privacy-section p {
          margin: 0 0 16px;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--neutral-600);
        }

        .privacy-section p:last-child {
          margin-bottom: 0;
        }

        .privacy-email a {
          color: var(--primary-700);
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .privacy-email a:hover {
          color: var(--accent-600);
        }

        .privacy-updated {
          margin-top: 24px !important;
          font-size: 0.85rem !important;
          color: var(--neutral-500) !important;
        }

        .privacy-final {
          padding-bottom: 0;
          border-bottom: 0;
        }

        @media (max-width: 768px) {
          .privacy-hero {
            padding: 120px 0 70px;
          }

          .privacy-content {
            padding: 60px 0 80px;
          }

          .privacy-section {
            padding-bottom: 36px;
            margin-bottom: 36px;
          }
        }
      `})]})}function of(){const k=window.location.pathname;return k==="/privacidade"?a.jsxs(a.Fragment,{children:[a.jsx(Pl,{}),a.jsx(rf,{}),a.jsx(Ll,{})]}):k==="/contato"?a.jsxs(a.Fragment,{children:[a.jsx(Pl,{}),a.jsx(nf,{}),a.jsx(Ll,{})]}):a.jsxs(a.Fragment,{children:[a.jsx(Pl,{}),a.jsxs("main",{children:[a.jsx(Wd,{}),a.jsx(Qd,{}),a.jsx(Yd,{}),a.jsx(Jd,{}),a.jsx(tf,{})]}),a.jsx(Ll,{})]})}$d.createRoot(document.getElementById("root")).render(a.jsx(Fd.StrictMode,{children:a.jsx(of,{})}));
