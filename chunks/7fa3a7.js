(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("9og8"),c=a("tJVT"),r=a("WmNS"),s=a.n(r),i=a("q1tI"),l=a("ag2L"),u=a("kigl"),o=a("RKie"),d=a.n(o);t["default"]=function(){Object(l["useTitle"])("\u51e1\u4eba\u6709\u559c");var e=Object(l["useRequest"])(),t=Object(c["a"])(e,1),a=t[0],r=i["useState"]([]),o=Object(c["a"])(r,2),m=o[0],v=o[1],_=i["useState"](0),p=Object(c["a"])(_,2),b=p[0],f=p[1],h=i["useRef"](0),w=i["useRef"](!1),g=i["useCallback"]((function(e){return function(){f(e)}}),[]),k=i["useCallback"](Object(n["a"])(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return w.current=!0,h.current+=1,e.next=4,a.get("https://rmtapi.cbg.cn/list/4908/".concat(h.current,".html"),{pagesize:100});case 4:return t=e.sent,v(null===m||void 0===m?void 0:m.concat(t.data.lists)),w.current=!1,e.abrupt("return",t.data.lists);case 8:case"end":return e.stop()}}),e)}))),[a,m]),j=i["useCallback"]((function(e){var t=e.target,a=t.scrollHeight,n=t.scrollTop;!w.current&&a-n<1e3&&k()}),[k]),O=i["useMemo"]((function(){return m[b]||{}}),[m,b]),N=Object(u["usePreload"])(Object(n["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:case"end":return e.stop()}}),e)})))),E=Object(c["a"])(N,1),x=E[0];return x(i["createElement"]("div",{className:d.a.page},i["createElement"]("video",{className:d.a.video,src:(null===O||void 0===O?void 0:O.videourl_hd)||(null===O||void 0===O?void 0:O.videourl),controls:!0,controlsList:"nodownload",autoPlay:!0,muted:!1}),i["createElement"]("div",{className:d.a.list,onScroll:j},null===m||void 0===m?void 0:m.map((function(e,t){var a=e.thumb,n=e.title;return i["createElement"]("div",{key:a,className:d.a.item,onClick:g(t)},i["createElement"]("img",{className:d.a.thumb,src:a,alt:""}),i["createElement"]("div",{className:d.a.content},i["createElement"]("div",{className:d.a.title},n)))})))))}},RKie:function(e,t,a){e.exports={page:"page___1IPmL",video:"video___1Cvyd",list:"list___1o6ac",item:"item___1tUJs",thumb:"thumb___252_s",content:"content___3My1A",title:"title___2cyli"}}}]);