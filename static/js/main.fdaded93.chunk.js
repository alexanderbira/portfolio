(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"name":"Random Daily Fact","thumbnail":"rdf","url":"https://www.randomdailyfact.com/","description":"A website that displays a new fact every day with nice styling. You can enable notifications so that every day, it reminds you to look at the new fact and shows you a new fact.","importance":0.5},{"name":"Pixel Art Maker","thumbnail":"pxart","url":"https://alexanderbira.github.io/Pixel-Art-Maker/","description":"A website to make pixel art with. You can use different grid dimensions, tools (like line, eraser, fill), colour picker (RGBAHSL, CSS input, native picker) with colour storage. You can export as a .pxart file to edit later, or a PNG.","importance":0.75},{"name":"Cookie Clicker Clone","thumbnail":"clicker","url":"https://clicker.alexanderbirabe.repl.co/","description":"My copy of <a href=\'https://orteil.dashnet.org/cookieclicker/\' target=\'_blank\'>the original Cookie Clicker</a>. All the visuals are stolen from there, but the logic and styling was made by me.","importance":0.3},{"name":"Circles Animation","thumbnail":"circles","url":"https://circles.alexanderbirabe.repl.co/","description":"An interactive display of patterns within easing. Generate circles swaying side to side, and adjust / export the settings","importance":0.3},{"name":"Wealth Comparer","thumbnail":"wealth","url":"https://wealth-compare.alexanderbirabe.repl.co/","description":"See how long it would take you to have as much money as the richest people, with a reference timescale. You can type in a yearly salary or have it calculated. Available in English, French, and Spanish. Uses the Forbes 400 API.","importance":0.4},{"name":"Jump Game","thumbnail":"jump","url":"https://jump.alexanderbirabe.repl.co/","description":"A game where you jump over / duck under blocks to get as far as you can. You can play as different sprites. It gets progressively harder in many ways.","importance":0.45},{"name":"Spinning Arcs","thumbnail":"arcs","url":"https://arcs.alexanderbirabe.repl.co/","description":"Generate nice animations of arcs spinning. You can control the speed, colour, size, and more.","importance":0.35},{"name":"Tic Tac Toe","thumbnail":"xo","url":"https://ox.alexanderbirabe.repl.co/","description":"Play tic tac toe either against a computer with 4 difficulty levels ranging from very easy to impossible, against a friend on the same device, or create a room and share the code so your friends can play with you - even if they\'re not there with you.","importance":0.7},{"name":"Click game","thumbnail":"click","url":"https://click.alexanderbirabe.repl.co/","description":"Hit the spacebar just as the moving bar is in the green zone to get points.","importance":0.15},{"name":"Text to Speech","thumbnail":"tts","url":"https://tts.alexanderbirabe.repl.co/","description":"Convert some text to an MP3 file that you can download. Uses the Python gTTS module.","importance":0.35},{"name":"Note Taker","thumbnail":"notes","url":"https://note-taker.alexanderbirabe.repl.co/","description":"Type text and hit enter for it to be saved. Can also solve mathematical expressions, and store single-lettered variables for reuse. Comes with different themes.","importance":0.8},{"name":"JS Tips","thumbnail":"jst","url":"https://JST-1.alexanderbirabe.repl.co/","description":"A website filled with often overlooked features of JavaScript with a great navigation system.","importance":0.7}]')},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a.n(r),c=a(20),o=a.n(c),s=a(4),l=a(5),u=a(7),d=a(6),b=(a(28),a(29),a.p+"static/media/code.c49bd4e1.svg"),h=a.p+"static/media/certificate.e0264981.svg",p=a.p+"static/media/follow.35d21793.svg",j=a(11),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("nav",{children:[Object(n.jsx)(j.b,{to:"/",title:"Home",children:Object(n.jsx)("div",{style:{cursor:"pointer"},children:"Alexanderbira"})}),Object(n.jsxs)("div",{id:"icons",children:[Object(n.jsx)(j.b,{to:"/demos",title:"Demos",children:Object(n.jsx)("img",{src:b,alt:"code",draggable:"false",onMouseDown:function(e){return e.preventDefault()}})}),Object(n.jsx)(j.b,{to:"/certificates",title:"Certificates",children:Object(n.jsx)("img",{src:h,alt:"certificate",draggable:"false",onMouseDown:function(e){return e.preventDefault()}})}),Object(n.jsx)(j.b,{to:"/follow",title:"Follow",children:Object(n.jsx)("img",{src:p,alt:"follow",draggable:"false",onMouseDown:function(e){return e.preventDefault()}})})]})]})}}]),a}(i.a.Component),f=(a(35),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Home"})})}}]),a}(i.a.Component)),O=a(22),x=(a(36),a(14));x.forEach((function(e){e.importance+=Math.random()})),x.sort((function(e,t){return t.importance-e.importance}));var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Demos"}),x.map((function(e){return Object(n.jsx)(g,Object(O.a)({},e))}))]})}}]),a}(i.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.thumbnail,r=e.description,i=e.url;return Object(n.jsxs)("div",{className:"siteRow",children:[Object(n.jsx)("a",{href:i,children:Object(n.jsx)("img",{src:"".concat("/portfolio","/thumbnails/").concat(a,".png"),alt:t})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("p",{children:r})]})]})}}]),a}(i.a.Component),y=(a(37),a.p+"static/media/front-end-libraries-certificate.d3a429c5.png"),w=a.p+"static/media/javascript-algorithms-and-data-structures-certificate.c4991312.png",k=a.p+"static/media/responsive-web-design-certificate.a977bd21.png",C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Certificates"}),Object(n.jsxs)("div",{id:"certificate-wrapper",children:[Object(n.jsx)("img",{src:y,alt:"Front End Libraries Certifications"}),Object(n.jsx)("img",{src:w,alt:"Javascript Algorithms and Data Structures Certifications"}),Object(n.jsx)("img",{src:k,alt:"Responsive Web Design Certifications"})]})]})}}]),a}(i.a.Component),A=(a(38),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Follow"})})}}]),a}(i.a.Component)),S=a(2),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(m,{}),Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(f,{})}}),Object(n.jsx)(S.a,{path:"/demos",render:function(){return Object(n.jsx)(v,{})}}),Object(n.jsx)(S.a,{path:"/certificates",render:function(){return Object(n.jsx)(C,{})}}),Object(n.jsx)(S.a,{path:"/follow",render:function(){return Object(n.jsx)(A,{})}}),Object(n.jsx)(S.a,{status:404,render:function(){return Object(n.jsx)("h1",{children:"404 not found!"})}})]})]})}}]),a}(i.a.Component);o.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fdaded93.chunk.js.map