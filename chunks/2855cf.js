(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{QeBL:function(e,t,a){"use strict";a.r(t);a("HVTF");var n=a("OT5E"),c=a("9og8"),s=a("tJVT"),r=a("WmNS"),i=a.n(r),u=a("q1tI"),l=a("ag2L"),o=a("kigl"),d=a("RKie"),m=a.n(d);t["default"]=function(){Object(l["useTitle"])("\u51e1\u4eba\u6709\u559c");var e=Object(l["useRequest"])(),t=Object(s["a"])(e,1),a=t[0],r=u["useState"]([]),d=Object(s["a"])(r,2),v=d[0],_=d[1],b=u["useState"](0),p=Object(s["a"])(b,2),f=p[0],h=p[1],w=u["useRef"](0),k=u["useRef"](!1),g=u["useCallback"]((function(e){return function(){h(e)}}),[]),E=u["useCallback"](Object(c["a"])(i.a.mark((function e(){var t;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return k.current=!0,w.current+=1,e.next=4,a.get("https://rmtapi.cbg.cn/list/4908/".concat(w.current,".html"),{pagesize:10});case 4:return t=e.sent,_(null===v||void 0===v?void 0:v.concat(t.data.lists)),k.current=!1,e.abrupt("return",t.data.lists);case 8:case"end":return e.stop()}}),e)}))),[a,v]),O=u["useCallback"]((function(e){var t=e.target,a=t.scrollHeight,n=t.scrollTop;!k.current&&a-n<1e3&&E()}),[E]),j=u["useMemo"]((function(){return v[f]||{}}),[v,f]),N=u["useCallback"]((function(){n["default"].success("end",0)}),[]),C=u["useCallback"]((function(){document.addEventListener("keydown",(function(e){n["default"].success(e.which,0)}),!1)}),[]),y=Object(o["usePreload"])(Object(c["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:C();case 3:case"end":return e.stop()}}),e)})))),x=Object(s["a"])(y,1),L=x[0];return L(u["createElement"]("div",{className:m.a.page},u["createElement"]("video",{className:m.a.video,src:(null===j||void 0===j?void 0:j.videourl_hd)||(null===j||void 0===j?void 0:j.videourl),controls:!0,controlsList:"nodownload",autoPlay:!0,muted:!1,onEnded:N}),u["createElement"]("div",{className:m.a.list,onScroll:O},null===v||void 0===v?void 0:v.map((function(e,t){var a=e.thumb,n=e.title;return u["createElement"]("div",{key:a,className:m.a.item,onClick:g(t)},u["createElement"]("img",{className:m.a.thumb,src:a,alt:""}),u["createElement"]("div",{className:m.a.content},u["createElement"]("div",{className:m.a.title},n)))})))))}},RKie:function(e,t,a){e.exports={page:"page___1IPmL",video:"video___1Cvyd",list:"list___1o6ac",item:"item___1tUJs",thumb:"thumb___252_s",content:"content___3My1A",title:"title___2cyli"}}}]);