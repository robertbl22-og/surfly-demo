(this["webpackJsonpsurfly-demo"]=this["webpackJsonpsurfly-demo"]||[]).push([[0],{100:function(e,t,n){e.exports=n(167)},105:function(e,t,n){},106:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(2),o=n.n(a),l=(n(105),n(85)),s=n(97),c=n(171),u=n(169),m=n(172),d=n(173),p=n(170),g=n(86),f=n.n(g),y=n(87),b=n.n(y);n(106);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=c.a.Header,E=c.a.Content,x=c.a.Footer,S=u.a.Title,O={widget_key:"0237ad51dae843cc8ca12af5cfa829ae"},j={leader_redirect_url:"https://robertbl22-og.github.io/surfly-demo/",follower_redirect_url:"https://robertbl22-og.github.io/surfly-demo/",url:"https://robertbl22-og.github.io/surfly-demo/",whitelist:[{pattern:".*renew\\.txdmv\\.gov.*",redirect:"https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp"}]};var _=function(){var e=Object(i.useState)({session:null,isSessionStarted:!1}),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){Surfly.init(O,(function(e){if(e.success)if(console.log("Surfly initResult.success!"),Surfly.isInsideSession)console.log("Surfly Surfly.isInsideSession:"),a(w({},n,{isSessionStarted:!0}));else{var t=Surfly.session(j);a(w({},n,{session:t})),t.on("session_started",(function(){console.log("Surfly 'session_started'!"),a(w({},n,{isSessionStarted:!0}))}))}else console.warn("Surfly was unable to initialize properly.")}))}),[]),r.a.createElement(c.a,null,r.a.createElement(v,{style:{backgroundColor:"white",height:"82px"}},r.a.createElement("img",{src:f.a,alt:"logo",style:{padding:"10px 0"}})),r.a.createElement(E,null,r.a.createElement("div",{style:{position:"relative",minHeight:"500px"}},r.a.createElement("div",{className:"App-header",style:{backgroundImage:"url(".concat(b.a,")")}},"\xa0"),r.a.createElement("div",null,r.a.createElement(m.a,{gutter:24},r.a.createElement(d.a,{offset:2,span:10,style:{marginTop:"48px"}},r.a.createElement(S,{style:{color:"white",fontSize:"36pt"}},"Texas Car Registration"),r.a.createElement(S,{level:4,style:{color:"white"}},r.a.createElement("ul",null,r.a.createElement("li",null,"Don't waste time waiting in line at the DMV"),r.a.createElement("li",null,"Avoid finding and printing forms"),r.a.createElement("li",null,"Skip the fines for expired registrations")))),r.a.createElement(d.a,{offset:2,span:8,style:{backgroundColor:"white",padding:"24px",marginTop:"48px",minHeight:"350px",textAlign:"center"}},r.a.createElement(S,{level:3,style:{marginBottom:"48px"}},"Let\u2019s start your renewal..."),r.a.createElement(p.a,{type:"primary",size:"large",icon:"api",style:{marginBottom:"10px",opacity:n.isSessionStarted?.3:1},onClick:function(){n&&n.session&&n.session.startLeader(null,{name:"John Doe",email:"john.doe@example.com",phone:"+123123123123"})},disabled:n.isSessionStarted,block:!0},"Connect to a Live Assistant"),r.a.createElement("br",null),n.isSessionStarted?r.a.createElement(p.a,{type:"primary",size:"large",icon:"arrow-right",onClick:function(){document.location="https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp"},block:!0},"Renew Registration Now"):null)))),r.a.createElement(m.a,{gutter:24,style:{marginTop:"48px"}},r.a.createElement(d.a,{offset:1,span:23},r.a.createElement(S,{level:2},"Duis aute irure dolor in reprehenderit"))),r.a.createElement(m.a,{gutter:24,style:{marginBottom:"48px"}},r.a.createElement(d.a,{offset:1,span:11},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement(d.a,{span:11},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.a.createElement(x,{style:{textAlign:"center",fontSize:"11px"}},r.a.createElement("a",{href:"https://www.google.com"},"Blocked URL"),"\xa0\xa0|\xa0\xa0About Us\xa0\xa0|\xa0\xa0Privacy Policy"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,n){e.exports=n.p+"static/media/tx-carreg-logo.845fa3c1.svg"},87:function(e,t,n){e.exports=n.p+"static/media/bg-banner.8469dda0.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.018e98bd.chunk.js.map