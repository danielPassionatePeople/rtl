(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{430:function(n,e,t){"use strict";var r=t(50),i=t(51);function a(){var n=Object(r.a)(["\n  color: white;\n  font-size: 24px;\n  font-family: 'Roboto', sans-serif;\n  text-align: left;\n"]);return a=function(){return n},n}e.a=i.b.h1(a())},437:function(n,e,t){"use strict";var r=t(50),i=t(51);function a(){var n=Object(r.a)(["\n  min-width: 152px;\n"]);return a=function(){return n},n}e.a=i.b.div(a())},438:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(50),i=t(51);function a(){var n=Object(r.a)(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return a=function(){return n},n}var o={fourK:2560,fullHD:1920,bigDesktop:1440,desktop:1200,tablet:1024,tabletPortrait:768,phone:425};e.b=Object.keys(o).reduce(function(n,e){var t=o[e]/16;return n[e]=function(){return Object(i.a)(a(),t,i.a.apply(void 0,arguments))},n},{})},439:function(n,e,t){"use strict";t.d(e,"b",function(){return a}),t.d(e,"a",function(){return o});var r=t(431),i=function(n){return n.shows},a=Object(r.createSelector)(i,function(n){return n.data}),o=Object(r.createSelector)(i,function(n){return n.isLoading})},503:function(n,e,t){"use strict";t.r(e);var r=t(22),i=t(450),a=t(76),o=t(122),c=t(164),u=t(50),s=t(2),l=t.n(s),d=t(51),b=t(451),f=t.n(b),p=t(498),m=t(436);function v(){var n=Object(u.a)(["\n  height: 384px;\n  width: 100%;\n  display: flex;\n  position: relative;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  align-content: flex-end;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0) 56%,\n      rgba(0, 0, 0, 0.78) 99%,\n      rgba(0, 0, 0, 0.8) 100%\n    );\n  }\n  z-index: 5;\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  filter: blur(20px);\n  position: absolute;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: 100% 359px;\n  z-index: 1;\n"]);return g=function(){return n},n}function h(){var n=Object(u.a)(["\n  width: 100%;\n  position: relative;\n"]);return h=function(){return n},n}var j=d.b.div(h()),O=d.b.div(g(),function(n){var e=n.image;return'url("'.concat(e,'")')}),x=d.b.div(v(),function(n){var e=n.image;return'url("'.concat(e,'")')}),k=function(n){var e=n.src;return l.a.createElement(j,null,l.a.createElement(O,{image:e}),l.a.createElement(x,{image:e}))},w=t(477),E=t.n(w),S=(t(493),t(495),t(497)),y=t(438);function T(){var n=Object(u.a)(["\n  max-width: 90%;\n  margin: 0 auto;\n  .slick-slide {\n    &:focus {\n      outline: none;\n    }\n    div {\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n"]);return T=function(){return n},n}var C=[1,3,4,5,6],z={dots:!1,infinite:!0,slidesToShow:C[4],useCSS:1,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:y.a.phone,settings:{slidesToShow:C[0]}},{breakpoint:y.a.tablet,settings:{slidesToShow:C[1]}},{breakpoint:y.a.desktop,settings:{slidesToShow:C[2]}},{breakpoint:y.a.bigDesktop,settings:{slidesToShow:C[3]}}],speed:200,touchThreshold:20,swipe:S.isMobile||S.isTablet},L=d.b.div(T()),I=function(n){var e=n.data,t=n.carouselItem,r=n.onClick;return l.a.createElement(L,{className:"CarouselSliderWrapper"},l.a.createElement(E.a,z,e.map(function(n,e){return l.a.createElement(t,{key:e,item:n,onClick:function(){return r(n)}})})))};function D(){var n=Object(u.a)(["\n  padding: 4px 10px;\n  border: 1px solid #737373;\n  border-radius: 2px;\n  margin: 0 5px;\n  color: #737373;\n  font-size: 14px;\n"]);return D=function(){return n},n}var M=d.b.div(D()),A=t(437),H=t(430);function J(){var n=Object(u.a)(["\n  font-size: 20px;\n  max-width: 160px; /* TODO This can be done properly */\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n"]);return J=function(){return n},n}function _(){var n=Object(u.a)(["\n  max-width: 100%;\n  object-fit: cover;\n  height: 100%;\n  background-color: #485461;\n  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);\n"]);return _=function(){return n},n}function F(){var n=Object(u.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 10px;\n  text-align: center;\n  height: 250px;\n  position: relative;\n"]);return F=function(){return n},n}var G=Object(d.b)(A.a)(F()),K=d.b.img(_()),N=Object(d.b)(H.a)(J()),P=function(n){var e=n.item,t=n.onClick;return l.a.createElement(s.Fragment,null,e&&l.a.createElement(G,{key:e.id,onClick:t},l.a.createElement(K,{src:Object(m.a)(["image","original"],e)}),l.a.createElement(N,null,e.name)))},R=t(48);function W(){var n=Object(u.a)(["\n  color: white;\n"]);return W=function(){return n},n}function q(){var n=Object(u.a)(["\n  font-size: 14px;\n"]);return q=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n  margin: 15px 0;\n"]);return B=function(){return n},n}function Q(){var n=Object(u.a)(["\n  margin-top: 30px;\n  max-width: 90vw;\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n  padding: 20px;\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1024px;\n  margin: 0 auto;\n  width: 100%;\n"]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n  margin: 10px 0;\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  display: block;\n  position: relative;\n  height: 100%;\n"]);return Z=function(){return n},n}var $=d.b.div(Z()),nn=d.b.div(Y()),en=Object(d.b)(H.a)(X()),tn=d.b.div(V()),rn=d.b.div(U()),an=d.b.div(Q()),on=d.b.div(B()),cn=d.b.article(q()),un=Object(d.b)(p.a)(W()),sn=function(n){var e=n.item,t=n.genres,r=n.episodes,i=n.onClickEpisode,a=n.isEpisode,o=n.match;return l.a.createElement($,null,l.a.createElement(nn,null,e&&l.a.createElement(k,{src:function(n){return Object(m.a)(["image","original"],n)}(e)}),l.a.createElement(tn,null,l.a.createElement(rn,null,l.a.createElement(en,null,e.name),l.a.createElement(cn,{dangerouslySetInnerHTML:{__html:e.summary}}),!f()(t)&&l.a.createElement(on,null,t.map(function(n){return l.a.createElement(M,{key:n},n)})),!a&&r&&l.a.createElement(an,null,l.a.createElement(I,{data:r,carouselItem:P,onClick:i})),a&&l.a.createElement(un,{to:"".concat(R.a,"/").concat(o.params.id)},"Go back to the show")))))},ln=t(431),dn=t(439),bn=function(n){return n.episodes},fn=Object(ln.createSelector)(bn,function(n){return n.data}),pn=Object(ln.createSelector)(bn,function(n){return n.isLoading}),mn=Object(m.b)("genres"),vn=function(n,e){return e&&e.find(function(e){return String(e.id)===n})},gn=Object(ln.createSelector)(dn.b,fn,function(n,e){return e?Object(m.a)(["match","params"],e):{}},function(n,e,t){return t.episodeId?e?vn(t.episodeId,e):{}:vn(t.id,n)}),hn=Object(ln.createSelector)(gn,function(n){var e=mn(n);return Array.isArray(e)?e:null}),jn=Object(ln.createStructuredSelector)({item:gn,genres:hn,episodes:fn,isShowsLoading:dn.a,isEpisodesLoading:pn}),On=t(165),xn=t(62),kn=t(127),wn=Object(c.a)({loadEpisodes:On.a});e.default=Object(o.b)(Object(o.d)(function(n){var e=Object(i.a)({},n);return Object(r.a)({},e,{isEpisode:!!e.match.params.episodeId})}),Object(a.connect)(jn,wn),Object(o.f)({onClickEpisode:function(n){var e=n.match;return function(n){var t=n.id,r=e.params.id;xn.a.push("".concat(R.a,"/").concat(r).concat(R.b,"/").concat(t))}}}),Object(o.c)({componentDidMount:function(){this.props.match.params.id&&this.props.loadEpisodes(this.props.match.params.id)}}),Object(o.a)(function(n){var e=n.isEpisodesLoading,t=n.isShowsLoading,r=n.item;return e||t||!r},Object(o.e)(kn.a),Object(o.e)(sn)))()}}]);
//# sourceMappingURL=0.861784a7.chunk.js.map