(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("L1EO"),e("lmye"),e("D/wG"),e("wCa+"),e("JBxO"),e("FdtR");var a=function(n){return new Promise((function(t){setTimeout((function(){t(n)}),n)}))},o=function(n){return console.log("Resolved after "+n+"ms")};a(2e3).then(o),a(1e3).then(o),a(1500).then(o);var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))};c(i,"Mango").then(o),c(i,"Lux").then(o);var r=function(n){var t,e,a=(t=200,e=500,Math.floor(Math.random()*(e-t+1)+t));return new Promise((function(t,e){var o=Math.random()>.3;setTimeout((function(){o?t({id:n.id,wait:a}):e(n.id)}),a)}))},u=function(n){var t=n.id,e=n.wait;console.log("Transaction "+t+" processed in "+e+"ms")},s=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};r({id:70,amount:150}).then(u).catch(s),r({id:71,amount:230}).then(u).catch(s),r({id:72,amount:75}).then(u).catch(s),r({id:73,amount:100}).then(u).catch(s)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.477aadc326f9027476b6.js.map