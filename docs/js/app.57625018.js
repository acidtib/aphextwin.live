(function(t){function e(e){for(var a,s,l=e[0],i=e[1],c=e[2],d=0,p=[];d<l.length;d++)s=l[d],n[s]&&p.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=r("bb71");r("da64");a["a"].use(n["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[t._v(t._s(t.set.title))])]),r("v-spacer"),r("v-btn",{attrs:{color:"success",href:"https://aphex.sfo2.digitaloceanspaces.com/Aphex%20Twin%20Live%20at%20Limelight%20NYC%20MID%201990s.mp3",target:"_blank"}},[t._v("\n      Download Set\n      "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_download")])],1)],1),r("v-content",[r("Home")],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":"","text-md-left":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-card",[r("iframe",{attrs:{width:"100%",height:"300",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/543596490&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}})])],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v("What is this site?")]),r("div",[r("a",{attrs:{href:"https://www.residentadvisor.net/news/43146",target:"_blank"}},[t._v("RA News")]),t._v(" recently reported on a rare set of Aphex Twin that was secretly recorded in the 90s and recently uploaded to "),r("a",{attrs:{href:"https://soundcloud.com/phlite/aphex-twin-live-at-limelight-nyc-1991-or-1992",target:"_blank"}},[t._v("soundcloud")]),t._v(".\n              The set has already reached soundclouds maximum download, so i made this site real quick to archive and share the set.\n            ")])])])],1)],1),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v("Tracklist")]),r("div",[t._v("\n              track list will go here :)\n            ")])])])],1)],1)],1)],1)},i=[],c={data:function(){return{set:{title:"Aphex Twin Live at Limelight NYC MID 1990s"}}}},u=c,d=r("2877"),p=r("6544"),f=r.n(p),h=r("b0af"),v=r("12b2"),m=r("a523"),b=r("0e8f"),w=r("a722"),_=Object(d["a"])(u,l,i,!1,null,"12057f58",null),y=_.exports;f()(_,{VCard:h["a"],VCardTitle:v["a"],VContainer:m["a"],VFlex:b["a"],VLayout:w["a"]});var g={name:"App",components:{Home:y},data:function(){return{set:{title:"Aphex Twin Live at Limelight NYC MID 1990s"}}}},x=g,T=r("7496"),V=r("8336"),k=r("549c"),O=r("132d"),j=r("9910"),C=r("71d9"),A=r("2a7f"),L=Object(d["a"])(x,o,s,!1,null,null,null),M=L.exports;f()(L,{VApp:T["a"],VBtn:V["a"],VContent:k["a"],VIcon:O["a"],VSpacer:j["a"],VToolbar:C["a"],VToolbarTitle:A["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.57625018.js.map