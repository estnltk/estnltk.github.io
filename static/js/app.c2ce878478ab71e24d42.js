webpackJsonp([2,0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(23),i=a(r),s=n(90),u=a(s),o=n(83);a(o);new i.default({el:"#app",template:"<App/>",components:{App:u.default}})},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=a(r),s=n(23),u=a(s),o=n(91),d=a(o);t.default={name:"App",components:{Estnltk:d.default},data:function(){return{text:"Siia kirjutatud teksti analüüsib Estnltk.",updateTime:0,data:[]}},created:function(){this.update()},watch:{text:function(){(this.text.endsWith(" ")||Date.now()-this.updateTime>=2)&&(this.updateTime=Date.now(),this.update())}},methods:{update:function(){var e=new XMLHttpRequest;e.open("POST","https://estnltk-demo.keeleressursid.ee/estnltk",!0),e.setRequestHeader("Content-Type","application/json; charset=UTF-8"),e.send((0,i.default)({text:this.text}));var t=this;e.onload=function(){u.default.set(t.data,0,JSON.parse(this.response))}}}}},42:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return new m.default(function(t){return setTimeout(t,e)})}function i(e,t){for(var t=e.$el;t.firstChild;)t.removeChild(t.firstChild);t.innerHTML="",t.innerHTML=e.data.text,b.default.nextTick(function(){var n=["paragraphs","sentences","words","named_entities"],a=!0,r=!1,i=void 0;try{for(var s,o=(0,p.default)(n);!(a=(s=o.next()).done);a=!0){var d=s.value;if("text"==d);else{var f=!0,l=!1,v=void 0;try{for(var h,x=(0,p.default)(e.data[d]);!(f=(h=x.next()).done);f=!0){var m=h.value,y=m.start,b=m.end,w={},_=!0,T=!1,g=void 0;try{for(var R,M=(0,p.default)((0,c.default)(m));!(_=(R=M.next()).done);_=!0){var F=R.value;"start"!==F&&"end"!==F&&("string"==typeof m[F]?w[F]=m[F]:w[F]=(0,u.default)(m[F]))}}catch(e){T=!0,g=e}finally{try{!_&&M.return&&M.return()}finally{if(T)throw g}}"paragraphs"==d?k([t],y,b,d,"p",w):k([t],y,b,d,"span",w)}}catch(e){l=!0,v=e}finally{try{!f&&x.return&&x.return()}finally{if(l)throw v}}}}}catch(e){r=!0,i=e}finally{try{!a&&o.return&&o.return()}finally{if(r)throw i}}})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(24),u=a(s),o=n(46),d=a(o),f=n(44),c=a(f),l=n(43),p=a(l),v=n(45),h=a(v),x=n(25),m=a(x),k=function(){var e=(0,h.default)(d.default.mark(function e(t,n,a,i,s,u){var o,f,l,v,h,x,m,k,y,b,w,_,T,R,M,F,j;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(g.default.initialized){e.next=5;break}return e.next=3,r(1);case 3:e.next=0;break;case 5:o=g.default.createRange(),o.moveToBookmark({containerNode:t[0],start:n,end:a}),o.splitBoundaries(),f=o.getNodes([3]),l=0,v=f.length,x=!0,m=!1,k=void 0,e.prev=14,y=(0,p.default)(f);case 16:if(x=(b=y.next()).done){e.next=46;break}if(w=b.value,h=document.createElement(s),h.className=i,0!=l){e.next=41;break}for(h.classList.add("first"),_=!0,T=!1,R=void 0,e.prev=25,M=(0,p.default)((0,c.default)(u));!(_=(F=M.next()).done);_=!0)j=F.value,h.dataset[j]=u[j];e.next=33;break;case 29:e.prev=29,e.t0=e.catch(25),T=!0,R=e.t0;case 33:e.prev=33,e.prev=34,!_&&M.return&&M.return();case 36:if(e.prev=36,!T){e.next=39;break}throw R;case 39:return e.finish(36);case 40:return e.finish(33);case 41:w.parentNode.insertBefore(h,w),h.appendChild(w);case 43:x=!0,e.next=16;break;case 46:e.next=52;break;case 48:e.prev=48,e.t1=e.catch(14),m=!0,k=e.t1;case 52:e.prev=52,e.prev=53,!x&&y.return&&y.return();case 55:if(e.prev=55,!m){e.next=58;break}throw k;case 58:return e.finish(55);case 59:return e.finish(52);case 60:h.classList.add("last");case 61:case"end":return e.stop()}},e,this,[[14,48,52,60],[25,29,33,41],[34,,36,40],[53,,55,59]])}));return function(t,n,a,r,i,s){return e.apply(this,arguments)}}(),y=n(23),b=a(y),w=n(84),_=a(w),T=n(22),g=a(T),R=n(86),M=(a(R),n(87)),F=(a(M),_.default.debounce(i,200));t.default={name:"estnltk",props:["data"],data:function(){return{}},mounted:function(){var e=this;i(e,parent)},watch:{data:function(){this.render()}},methods:{render:function(){var e=this;F(e,parent)}}}},81:function(e,t){},82:function(e,t){},83:function(e,t){},90:function(e,t,n){var a,r;n(81),a=n(41);var i=n(92);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=a},91:function(e,t,n){var a,r;n(82),a=n(42);var i=n(93);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,e.exports=a},92:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{id:"box"},domProps:{value:e._s(e.text)},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})," ",e._l(e.data,function(e){return[t("estnltk",{attrs:{data:e}})]})])},staticRenderFns:[]}},93:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"estnltk"})},staticRenderFns:[]}}});
//# sourceMappingURL=app.c2ce878478ab71e24d42.js.map
