(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("9Hrx"),r=n("r0ML"),c=n.n(r),o=n("Wbzz"),l=n("mwIZ"),i=n.n(l),u=n("qhky"),s=(n("9eSz"),n("jr2i"),n("Bl7J")),d=(n("aWpR"),n("k1TG")),f=n("8o2o"),m=n("ZCiN");var v=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},b=n("Xyuu"),p=n("XcHJ");function h(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}var O=Math.pow(2,31)-1;function E(){var e=Object(p.a)(),t=Object(r.useRef)();return h((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=O?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=O?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),O)}(t,a,Date.now()+r))},clear:n}}),[])}var j=n("TSYQ"),y=n.n(j),g=n("YECM"),x=n("dRu9"),C=n("17x9"),N=n.n(C),k=n("JCAc"),w=n("YdCC"),S=Object(w.a)("carousel-caption"),I=n("vUet"),T=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,o=e.children,l=e.className,i=Object(f.a)(e,["as","bsPrefix","children","className"]),u=y()(l,Object(I.a)(r,"carousel-item"));return c.a.createElement(a,Object(d.a)({ref:t},i,{className:u}),o)}));T.displayName="CarouselItem";var M=T;function R(e,t){var n=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,n++):e}))}var L=n("dbZe"),D=n("z+q/"),P={bsPrefix:N.a.string,as:N.a.elementType,slide:N.a.bool,fade:N.a.bool,controls:N.a.bool,indicators:N.a.bool,activeIndex:N.a.number,onSelect:N.a.func,onSlide:N.a.func,onSlid:N.a.func,interval:N.a.number,keyboard:N.a.bool,pause:N.a.oneOf(["hover",!1]),wrap:N.a.bool,touch:N.a.bool,prevIcon:N.a.node,prevLabel:N.a.string,nextIcon:N.a.node,nextLabel:N.a.string},z={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var H=c.a.forwardRef((function(e,t){var n=Object(k.a)(e,{activeIndex:"onSelect"}),a=n.as,o=void 0===a?"div":a,l=n.bsPrefix,i=n.slide,u=n.fade,s=n.controls,p=n.indicators,h=n.activeIndex,O=n.onSelect,j=n.onSlide,C=n.onSlid,N=n.interval,w=n.keyboard,S=n.onKeyDown,T=n.pause,M=n.onMouseOver,P=n.onMouseOut,z=n.wrap,H=n.touch,J=n.onTouchStart,A=n.onTouchMove,X=n.onTouchEnd,q=n.prevIcon,B=n.prevLabel,W=n.nextIcon,Z=n.nextLabel,K=n.className,Q=n.children,Y=Object(f.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),F=Object(I.a)(l,"carousel"),V=Object(r.useRef)(null),_=Object(r.useState)("next"),G=_[0],U=_[1],$=Object(r.useState)(!1),ee=$[0],te=$[1],ne=Object(r.useState)(h||0),ae=ne[0],re=ne[1];ee||h===ae||(V.current?U(V.current):U((h||0)>ae?"next":"prev"),i&&te(!0),re(h||0)),Object(r.useEffect)((function(){V.current&&(V.current=null)}));var ce,oe=0;!function(e,t){var n=0;c.a.Children.forEach(e,(function(e){c.a.isValidElement(e)&&t(e,n++)}))}(Q,(function(e,t){++oe,t===h&&(ce=e.props.interval)}));var le=Object(b.a)(ce),ie=Object(r.useCallback)((function(e){if(!ee){var t=ae-1;if(t<0){if(!z)return;t=oe-1}V.current="prev",O&&O(t,e)}}),[ee,ae,O,z,oe]),ue=Object(m.a)((function(e){if(!ee){var t=ae+1;if(t>=oe){if(!z)return;t=0}V.current="next",O&&O(t,e)}})),se=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:se.current,prev:ie,next:ue}}));var de=Object(m.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(se.current)&&ue()})),fe="next"===G?"left":"right";v((function(){i||(j&&j(ae,fe),C&&C(ae,fe))}),[ae]);var me=F+"-item-"+G,ve=F+"-item-"+fe,be=Object(r.useCallback)((function(e){Object(D.a)(e),j&&j(ae,fe)}),[j,ae,fe]),pe=Object(r.useCallback)((function(){te(!1),C&&C(ae,fe)}),[C,ae,fe]),he=Object(r.useCallback)((function(e){if(w&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ie(e);case"ArrowRight":return e.preventDefault(),void ue(e)}S&&S(e)}),[w,S,ie,ue]),Oe=Object(r.useState)(!1),Ee=Oe[0],je=Oe[1],ye=Object(r.useCallback)((function(e){"hover"===T&&je(!0),M&&M(e)}),[T,M]),ge=Object(r.useCallback)((function(e){je(!1),P&&P(e)}),[P]),xe=Object(r.useRef)(0),Ce=Object(r.useRef)(0),Ne=Object(r.useState)(!1),ke=Ne[0],we=Ne[1],Se=E(),Ie=Object(r.useCallback)((function(e){xe.current=e.touches[0].clientX,Ce.current=0,H&&we(!0),J&&J(e)}),[H,J]),Te=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Ce.current=0:Ce.current=e.touches[0].clientX-xe.current,A&&A(e)}),[A]),Me=Object(r.useCallback)((function(e){if(H){var t=Ce.current;if(Math.abs(t)<=40)return;t>0?ie(e):ue(e)}Se.set((function(){we(!1)}),N||void 0),X&&X(e)}),[H,ie,ue,Se,N,X]),Re=null!=N&&!Ee&&!ke&&!ee,Le=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(Re)return Le.current=window.setInterval(document.visibilityState?de:ue,null!=(e=null!=(t=le.current)?t:N)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Re,ue,le,N,de]);var De=Object(r.useMemo)((function(){return p&&Array.from({length:oe},(function(e,t){return function(e){O&&O(t,e)}}))}),[p,oe,O]);return c.a.createElement(o,Object(d.a)({ref:se},Y,{onKeyDown:he,onMouseOver:ye,onMouseOut:ge,onTouchStart:Ie,onTouchMove:Te,onTouchEnd:Me,className:y()(K,F,i&&"slide",u&&F+"-fade")}),p&&c.a.createElement("ol",{className:F+"-indicators"},R(Q,(function(e,t){return c.a.createElement("li",{key:t,className:t===ae?"active":void 0,onClick:De?De[t]:void 0})}))),c.a.createElement("div",{className:F+"-inner"},R(Q,(function(e,t){var n=t===ae;return i?c.a.createElement(x.e,{in:n,onEnter:n?be:void 0,onEntered:n?pe:void 0,addEndListener:g.a},(function(t){return c.a.cloneElement(e,{className:y()(e.props.className,n&&"entered"!==t&&me,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ve)})})):c.a.cloneElement(e,{className:y()(e.props.className,n&&"active")})}))),s&&c.a.createElement(c.a.Fragment,null,(z||0!==h)&&c.a.createElement(L.a,{className:F+"-control-prev",onClick:ie},q,B&&c.a.createElement("span",{className:"sr-only"},B)),(z||h!==oe-1)&&c.a.createElement(L.a,{className:F+"-control-next",onClick:ue},W,Z&&c.a.createElement("span",{className:"sr-only"},Z))))}));H.displayName="Carousel",H.propTypes=P,H.defaultProps=z,H.Caption=S,H.Item=M;var J=H,A=(n("q4sD"),n("JgAk")),X=n.n(A),q=function(e){var t=e.article,a=e.year,r=e.month,l=(e.category,n("OgWq")("./"+t.category+".svg"));return c.a.createElement("div",{className:X.a.preview},c.a.createElement(o.a,{to:"/archives/"+a+"/"+r+"/"+t.slug},c.a.createElement("img",{src:l,class:"card-img-top",alt:"..."}),c.a.createElement(J.Caption,null,t.title,c.a.createElement("p",null,r+"/"+t.day+"/"+a),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}))))},B=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=i()(this,"props.data.site.siteMetadata.title"),t=i()(this,"props.data.allContentfulBlogPost.edges"),n=(i()(this,"props.data.allContentfulPerson.edges")[0],i()(this,"props.data.allContentfulBlogPost.nodes.category"));return c.a.createElement(s.a,{location:this.props.location,title:e,category:n},c.a.createElement("div",{style:{background:"#fff"}},c.a.createElement(u.a,{title:e}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",{className:"section-headline"},"Recent articles"),c.a.createElement(J,null,t.map((function(e){var t=e.node;return c.a.createElement(J.Item,{interval:1e3},c.a.createElement(q,{article:t,year:t.year,month:t.month,category:t.category}))}))))))},t}(c.a.Component);t.default=B},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("r0ML");function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},aWpR:function(e,t,n){"use strict";var a=n("r0ML"),r=n.n(a),c=n("Wbzz");n("9eSz"),n("JgAk");t.a=function(e){var t=e.article,a=e.year,o=e.month;e.category;console.log(t);var l=n("OgWq")("./"+t.category+".svg");return r.a.createElement(c.a,{to:"/archives/"+a+"/"+o+"/"+t.slug},r.a.createElement("div",{class:"card"},r.a.createElement("img",{src:l,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h4",{class:"card-title",style:{alignContent:"center"}},t.title),r.a.createElement("p",{class:"card-text"},t.description.description),r.a.createElement("a",{href:"#!",class:"btn btn-primary"},"Button"))))}},jr2i:function(e,t,n){e.exports={hero:"hero-module--hero--1u2ZB",heroImage:"hero-module--heroImage--15qjR",heroDetails:"hero-module--heroDetails--oQ0Hz",heroHeadline:"hero-module--heroHeadline--24FEQ",heroTitle:"hero-module--heroTitle--3ygoX"}}}]);
//# sourceMappingURL=component---src-pages-index-js-c31399e2960e07cf6d10.js.map