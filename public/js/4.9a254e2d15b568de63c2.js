(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,t,n){"use strict";var r,i,o=n(109),a=n(173),c=RegExp.prototype.exec,l=String.prototype.replace,s=c,u=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(u||d||p)&&(s=function(e){var t,n,r,i,a=this,s=p&&a.sticky,f=o.call(a),h=a.source,g=0,v=e;return s&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),v=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",f)),d&&(n=new RegExp("^"+h+"$(?!\\s)",f)),u&&(t=a.lastIndex),r=c.call(s?n:a,v),s?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:u&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),d&&r&&r.length>1&&l.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),e.exports=s},163:function(e,t,n){"use strict";var r=n(21),i=n(6),o=n(5),a=n(162),c=n(20),l=o("species"),s=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var f=o(e),h=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),g=h&&!i((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!h||!g||"replace"===e&&(!s||!u)||"split"===e&&!p){var v=/./[f],m=n(f,""[e],(function(e,t,n,r,i){return t.exec===a?h&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),b=m[0],w=m[1];r(String.prototype,e,b),r(RegExp.prototype,f,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&c(RegExp.prototype[f],"sham",!0)}},164:function(e,t,n){"use strict";var r=n(107).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},165:function(e,t,n){var r=n(26),i=n(162);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},166:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},167:function(e,t,n){var r=n(14),i=n(15).f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/;!r||"name"in o||i(o,"name",{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},168:function(e,t,n){"use strict";var r=n(7),i=n(106).map,o=n(6),a=n(105)("map"),c=a&&!o((function(){[].map.call({length:-1,0:1},(function(e){throw e}))}));r({target:"Array",proto:!0,forced:!a||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},169:function(e,t,n){"use strict";n(170),n(172),n(174),n(175),n(177);var r=n(0),i=n.n(r),o=n(70),a=/\[(.+)\]\((https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_+.~#?&//=]*)\)/gi,c=/^\*\s/,l=Object(r.memo)((function(e){var t=e.children.split(/\n/g),n=null;return t.reduce((function(e,r,l){if(0===(r=r.trim()).length)return e;var s=c.test(r);s&&(r=r.replace(c,""));var u=function(e){for(var t=[],n=e.split(a),r=0;r<n.length;r+=3){var c=n[r],l=n[r+1],s=n[r+2];c&&t.push(c),l&&s&&t.push(i.a.createElement(o.a,{key:r,to:s},l))}return t}(r);return s?(n||(n=[]),n.push(i.a.createElement("li",{key:n.length},u)),l+1!==t.length&&c.test(t[l+1])||(e.push(i.a.createElement("ul",{key:l},n)),n=null)):e.push(i.a.createElement("p",{key:l},u)),e}),[])}));n.d(t,"a",(function(){return l}))},170:function(e,t,n){"use strict";var r=n(7),i=n(171).left;r({target:"Array",proto:!0,forced:n(108)("reduce")},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},171:function(e,t,n){var r=n(37),i=n(24),o=n(47),a=n(35),c=function(e){return function(t,n,c,l){r(n);var s=i(t),u=o(s),p=a(s.length),d=e?p-1:0,f=e?-1:1;if(c<2)for(;;){if(d in u){l=u[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in u&&(l=n(l,u[d],d,s));return l}};e.exports={left:c(!1),right:c(!0)}},172:function(e,t,n){"use strict";var r=n(7),i=n(162);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},173:function(e,t,n){"use strict";var r=n(6);function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},174:function(e,t,n){"use strict";var r=n(163),i=n(9),o=n(24),a=n(35),c=n(48),l=n(36),s=n(164),u=n(165),p=Math.max,d=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){return[function(n,r){var i=l(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,o){if(r.REPLACE_KEEPS_$0||"string"==typeof o&&-1===o.indexOf("$0")){var l=n(t,e,this,o);if(l.done)return l.value}var f=i(e),h=String(this),g="function"==typeof o;g||(o=String(o));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}for(var w=[];;){var x=u(f,h);if(null===x)break;if(w.push(x),!m)break;""===String(x[0])&&(f.lastIndex=s(h,a(f.lastIndex),b))}for(var y,E="",S=0,I=0;I<w.length;I++){x=w[I];for(var k=String(x[0]),P=p(d(c(x.index),h.length),0),R=[],T=1;T<x.length;T++)R.push(void 0===(y=x[T])?y:String(y));var j=x.groups;if(g){var O=[k].concat(R,P,h);void 0!==j&&O.push(j);var C=String(o.apply(void 0,O))}else C=v(k,h,P,R,j,o);P>=S&&(E+=h.slice(S,P)+C,S=P+k.length)}return E+h.slice(S)}];function v(e,n,r,i,a,c){var l=r+e.length,s=i.length,u=g;return void 0!==a&&(a=o(a),u=h),t.call(c,u,(function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>s){var p=f(u/10);return 0===p?t:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):t}c=i[u-1]}return void 0===c?"":c}))}}))},175:function(e,t,n){"use strict";var r=n(163),i=n(176),o=n(9),a=n(36),c=n(110),l=n(164),s=n(35),u=n(165),p=n(162),d=n(6),f=[].push,h=Math.min,g=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);for(var c,l,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,d+"g");(c=p.call(g,r))&&!((l=g.lastIndex)>h&&(u.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&f.apply(u,c.slice(1)),s=c[0].length,h=l,u.length>=o));)g.lastIndex===c.index&&g.lastIndex++;return h===r.length?!s&&g.test("")||u.push(""):u.push(r.slice(h)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=a(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var p=o(e),d=String(this),f=c(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),b=new f(g?p:"^(?:"+p.source+")",m),w=void 0===i?4294967295:i>>>0;if(0===w)return[];if(0===d.length)return null===u(b,d)?[d]:[];for(var x=0,y=0,E=[];y<d.length;){b.lastIndex=g?y:0;var S,I=u(b,g?d:d.slice(y));if(null===I||(S=h(s(b.lastIndex+(g?0:y)),d.length))===x)y=l(d,y,v);else{if(E.push(d.slice(x,y)),E.length===w)return E;for(var k=1;k<=I.length-1;k++)if(E.push(I[k]),E.length===w)return E;y=x=S}}return E.push(d.slice(x)),E}]}),!g)},176:function(e,t,n){var r=n(13),i=n(26),o=n(5)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},177:function(e,t,n){"use strict";var r=n(7),i=n(178).trim;r({target:"String",proto:!0,forced:n(179)("trim")},{trim:function(){return i(this)}})},178:function(e,t,n){var r=n(36),i="["+n(166)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},179:function(e,t,n){var r=n(6),i=n(166);e.exports=function(e){return r((function(){return!!i[e]()||"​᠎"!="​᠎"[e]()||i[e].name!==e}))}},180:function(e,t,n){"use strict";n(167);var r=n(0),i=n.n(r),o=n(70),a="ZA8JHSFLaRcIQl4HFPRaP",c=Object(r.memo)((function(e){var t=e.logo,n=e.name,r=e.url;return i.a.createElement(o.a,{to:r},i.a.createElement("img",{alt:n,className:a,src:t}))}));n.d(t,"a",(function(){return c}))},181:function(e,t,n){"use strict";n(104);var r=n(0),i=n.n(r),o="_1gTg6H3rlHTeOxjnwApwXJ",a="_2Go4TBfqbMhZwPIlvuGn_8";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=Object(r.memo)((function(e){return i.a.createElement("ul",c({},e,{className:o}))})),s=Object(r.memo)((function(e){return i.a.createElement("li",c({},e,{className:a}))}));n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}))},186:function(e,t,n){"use strict";n.r(t);n(168),n(167);var r=n(0),i=n.n(r),o=n.p+"public/img/banif.0c014a55520a26da959e8e2e4f3a49a8.jpg",a=n.p+"public/img/cubic.c5774fcb9cc5d2050be7ca1ac5567961.png",c=[{name:"Banif - Credit Workflow Process",video:!1,desc:"\n        Web platform that implements the credit workflow process of Banif (one of Portuguese main banks):\n        * Account managers on any branch could start the process by creating a new proposal for a client;\n        * A proposal would then be sent for evaluation by a bank analyst;\n        * After analysis the proposal would pass by a decision process where it could suffer some changes. This process could be composed by one or more decision levels. The number of levels was dependent on the client situation and proposal conditions. On each level there were two or three users that could suggest changes and if both agreed they would pass to the next level.\n        * The results of the decision process would determine if the proposal was authorized or not.\n        * Independently of the decision result, the proposal would be sent back to the account manager that created it so he could present it to the client who would then decide to accept or refuse.\n        For each new proposal created, the system would load client information from the Central Database of the Portuguese Bank (BdP). The user pools for each phase of the process would be loaded from the internal bank databases, and if a proposal was approved by the bank it would be stored there.\n        Technologies used: WebSphere (IBM BPM 8.0.1 and IBM ODM 8.0.1), JavaScript (Client and Server side), jQuery, Dojo, Twitter Bootstrap, HTML, CSS, XML, JSON, Java, and Microsoft SQL Server.\n    ",institution:{url:"http://www.banif.pt/",logo:o,name:"Banif"}},{name:"Google Chrome Extension - Web Inspector",url:"https://chrome.google.com/webstore/detail/web-inspector/enibedkmbpadhfofcgjcphipflcbpelf?utm_source=chrome-ntp-icon",video:!1,desc:"\n        Chrome extension that allows users to inspect a web page contents and properties by clicking on certain page elements. Some examples:\n        * If a text element is clicked it will display the font used, the text size, the text color, and background color.\n        * If a link is clicked, besides the properties above, its source will also be displayed;\n        * If a image or video is clicked its dimensions and source URL will be displayed.\n        Technologies used: JavaScript, jQuery, Chrome API, CSS3, HTML5.\n    ",institution:!1},{name:"Epik",url:"http://epik.di.fct.unl.pt/epik",video:"//www.youtube.com/embed/PfHJn1gS4OE",desc:"\n        Epik (Edutainment by Playing and Interacting with Knowledge) is a web application for educational games development. It allows teachers to create activities for their students in the form of games. Those activities can be provided using a URL and for each one are generated activity logs that could be used for students assessment.\n        Technologies used: JavaScript, jQuery, KineticJS, JSON, HTML5, CSS3, PHP, CakePHP, NodeJS, XML, XML Schema, MySQL.\n    ",institution:{url:"",logo:n.p+"public/img/epik.bcf2d59b60dc15a6677e04568d2e0533.png",name:"Epik"}},{name:"Cubic",url:"http://epik.di.fct.unl.pt/moodle/",video:!1,desc:"\n        Cubic is a new theme for Moodle 2.3. Its objective is to provide users with a more user-friendly interface, which provides several forms of social awareness and some new concepts.\n        Besides this theme, I also developed other plugins for Moodle which can be found here: [https://moodle.org/plugins/browse.php?list=set&id=31](https://moodle.org/plugins/browse.php?list=set&id=31).\n        Technologies used: JavaScript, JSON, YUI, HTML5, CSS3, PHP, XML, MySQL.\n    ",institution:{url:"",logo:a,name:"Cubic"}},{name:"Coggitare - Forum",url:"http://coggitare.com/forum",video:!1,desc:"\n        Initially this project purpose was to provide users with scientific information about Vitamin-D. The development was finished but unfortunately the project had to be canceled, so now a simpler version of the website is being used on a new project still under construction.\n        Technologies used: JavaScript, jQuery, HTML5, CSS3, PHP, CakePHP, and MySQL.\n    ",institution:{url:"http://www.coggitare.com/forum/",logo:!1,name:"Coggitare"}}],l=n(70),s=n(180),u=n(38),p=n(169),d=n(181);n(104);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=Object(r.memo)((function(e){return i.a.createElement("iframe",f({},e,{frameBorder:"0",allowFullScreen:!0}))})),g="_2-A-A-I04f3DFXD_tQb1c5",v="v_gqDI5B9hH8BuU-m1qpC",m=Object(r.memo)((function(){return i.a.createElement(u.a,{title:"Projects"},i.a.createElement("h1",null,"Projects"),i.a.createElement(d.a,null,c.map((function(e,t){return i.a.createElement(d.b,{key:t},i.a.createElement("article",null,i.a.createElement("header",{className:g},i.a.createElement("div",null,i.a.createElement("h2",{className:v},e.name),e.institution.url&&i.a.createElement(l.a,{to:e.institution.url},e.institution.name)),e.institution.logo&&i.a.createElement(s.a,e.institution)),e.video&&i.a.createElement(h,{height:"350px",src:e.video,width:"100%"}),i.a.createElement(p.a,null,e.desc)))}))))}));n.d(t,"default",(function(){return m}))}}]);