(this["webpackJsonpsurfly-demo"]=this["webpackJsonpsurfly-demo"]||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(18),s=n.n(a),i=(n(74),n(67)),l=n(125),c=n(59),u=n.n(c),f=(n(75),{widget_key:"0237ad51dae843cc8ca12af5cfa829ae"}),d={follower_redirect_url:"https://robertbl22-og.github.io/surfly-demo/",url:"https://renew.txdmv.gov/Renew/registrationrenewal/jsp/txdot_reg_ren_enter_vehicle_info.jsp"};var p=function(){var e=Object(o.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){Surfly.init(f,(function(e){if(e.success){console.log("Surfly successfully initialized!"),Surfly.isInsideSession||console.log("Surfly is in a session!");var t=Surfly.session(d);a(t),t.on("session_started",(function(){console.log("Surfly session started! FOO")}))}else console.log("Surfly was unable to initialize properly.")}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Let\u2019s start your renewal..."),r.a.createElement(l.a,{type:"primary",size:"large",icon:"arrow-right",onClick:function(){n&&n.startLeader()}},"Renew Registration Now")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},69:function(e,t,n){e.exports=n(123)},74:function(e,t,n){},75:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.ed1837d1.chunk.js.map