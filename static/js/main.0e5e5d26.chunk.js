(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"name":"Random Daily Fact","thumbnail":"rdf","url":"https://www.randomdailyfact.com/","description":"A website that displays a new fact every day with nice styling. You can enable notifications so that every day, it reminds you to look at the new fact and shows you a new fact. It is also a PWA, so you can install it on any platform as an app.","importance":0.75},{"name":"Pixel Art Maker","thumbnail":"pxart","url":"https://alexanderbira.github.io/Pixel-Art-Maker/","description":"A website to make pixel art with. You can use different grid dimensions, tools (like line, eraser, fill), colour picker (RGBAHSL, CSS input, native picker) with colour storage. You can export as a .pxart file to edit later, or a PNG.","importance":0.75},{"name":"Cookie Clicker Clone","thumbnail":"clicker","url":"https://clicker.alexanderbirabe.repl.co/","description":"My copy of <a href=\'https://orteil.dashnet.org/cookieclicker/\' target=\'_blank\'>the original Cookie Clicker</a>. All the visuals are stolen from there, but the logic and styling was made by me.","importance":0.3},{"name":"Circles Animation","thumbnail":"circles","url":"https://circles.alexanderbirabe.repl.co/","description":"An interactive display of patterns within easing. Generate circles swaying side to side, and adjust / export the settings","importance":0.3},{"name":"Wealth Comparer","thumbnail":"wealth","url":"https://wealth-compare.alexanderbirabe.repl.co/","description":"See how long it would take you to have as much money as the richest people, with a reference timescale. You can type in a yearly salary or have it calculated. Available in English, French, and Spanish. Uses the Forbes 400 API.","importance":0.4},{"name":"Jump Game","thumbnail":"jump","url":"https://jump.alexanderbirabe.repl.co/","description":"A game where you jump over / duck under blocks to get as far as you can. You can play as different sprites. It gets progressively harder in many ways.","importance":0.4},{"name":"Spinning Arcs","thumbnail":"arcs","url":"https://arcs.alexanderbirabe.repl.co/","description":"Generate nice animations of arcs spinning. You can control the speed, colour, size, and more.","importance":0.35},{"name":"Tic Tac Toe","thumbnail":"xo","url":"https://ox.alexanderbirabe.repl.co/","description":"Play tic tac toe either against a computer with 4 difficulty levels ranging from very easy to impossible, against a friend on the same device, or create a room and share the code so your friends can play with you - even if they\'re not there with you.","importance":0.7},{"name":"Click game","thumbnail":"click","url":"https://click.alexanderbirabe.repl.co/","description":"Hit the spacebar just as the moving bar is in the green zone to get points.","importance":0.15},{"name":"Text to Speech","thumbnail":"tts","url":"https://tts.alexanderbirabe.repl.co/","description":"Convert some text to an MP3 file that you can download. Uses the Python gTTS module.","importance":0.35},{"name":"Note Taker","thumbnail":"noteTaker","url":"https://note-taker.alexanderbirabe.repl.co/","description":"Type text and hit enter for it to be saved. Can also solve mathematical expressions, and store single-lettered variables for reuse. Comes with different themes.","importance":0.8},{"name":"JS Tips","thumbnail":"jstips","url":"https://jst-1.alexanderbirabe.repl.co/","description":"A website filled with often overlooked features of JavaScript with a great navigation system.","importance":0.8}]')},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var i={"./arcs.png":19,"./circles.png":20,"./click.png":21,"./clicker.png":22,"./jst.png":23,"./jstips.png":24,"./jump.png":25,"./noteTaker.png":26,"./notes.png":27,"./pxart.png":28,"./rdf.png":29,"./tts.png":30,"./wealth.png":31,"./xo.png":32};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=18},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/arcs.3d707474.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/circles.85284585.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/click.e594b691.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/clicker.2b9a01a9.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/jst.61731d83.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/jstips.43944bef.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/jump.62f40f32.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/noteTaker.856f259d.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/notes.b01ed644.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/pxart.5f03cf73.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/rdf.4e3cbd0a.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tts.7e6f40bb.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/wealth.2685e782.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/xo.ec94ad2d.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),r=a.n(n),c=a(8),s=a.n(c),o=a(2),l=a(3),u=a(5),d=a(4),m=(a(15),a(9)),p=(a(16),a(17),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsx)("a",{href:this.props.url,target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("section",{className:"demo",children:[Object(i.jsx)("img",{src:this.props.image,alt:"thumbnail"}),Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:this.props.name}),Object(i.jsx)("p",{children:this.props.description})]})]})})}}]),a}(r.a.Component)),h=a(6);h.map((function(e){return e.importance+=Math.random()})),h.sort((function(e,t){return t.importance-e.importance}));for(var f,b=(f=a(18)).keys().map(f),g=[],j=0;j<b.length;j++)g[j]=new Image,g[j].src=b[j];var x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).handleNext=function(){"undefined"==typeof i.timeout&&(document.getElementsByTagName("section")[0].classList=["demo leave"],i.timeout=setTimeout((function(){i.setState({cardNum:i.state.cardNum===i.state.cardMax?0:i.state.cardNum+1}),document.getElementsByTagName("section")[0].classList=["demo enter"],i.timeout=void 0}),1e3))},i.handlePrev=function(){"undefined"==typeof i.timeout&&(document.getElementsByTagName("section")[0].classList=["demo enter2"],i.timeout=setTimeout((function(){i.setState({cardNum:0===i.state.cardNum?i.state.cardMax:i.state.cardNum-1}),document.getElementsByTagName("section")[0].classList=["demo leave2"],i.timeout=void 0}),1e3))},i.handleAny=function(e){var t=i.state.cardNum;"undefined"==typeof i.timeout&&e<t?(document.getElementsByTagName("section")[0].classList=["demo enter2"],i.timeout=setTimeout((function(){i.setState({cardNum:e}),document.getElementsByTagName("section")[0].classList=["demo leave2"],i.timeout=void 0}),1e3)):e>t&&(document.getElementsByTagName("section")[0].classList=["demo leave"],i.timeout=setTimeout((function(){i.setState({cardNum:e}),document.getElementsByTagName("section")[0].classList=["demo enter"],i.timeout=void 0}),1e3))},i.state={cardNum:0,cardMax:b.length-3},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("main",{children:[Object(i.jsx)("h1",{children:Object(i.jsx)("u",{children:"Site Demos"})}),Object(i.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",marginBottom:"15vh"},children:[Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)("button",{onClick:this.handlePrev,className:"demoNav",title:"see previous card",children:"\u1438"}),Object(i.jsx)(p,Object(m.a)({image:b.find((function(t){return!!t.default.includes(h[e.state.cardNum].thumbnail)})).default},h[this.state.cardNum])),Object(i.jsx)("button",{onClick:this.handleNext,className:"demoNav",title:"see next card",children:"\u1433"})]}),Object(i.jsx)("nav",{children:h.map((function(t,a){var n=t.name;return Object(i.jsx)("button",{onClick:function(){return e.handleAny(a)},title:n,className:"navButton",style:{background:e.state.cardNum===a?"black":"transparent"}},a)}))})]})]})}}]),a}(r.a.Component),v=(a(33),a.p+"static/media/profile.dfbe78c2.png"),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsx)("header",{children:Object(i.jsxs)("div",{id:"aboutMe",children:[Object(i.jsx)("img",{id:"profilePic",src:v,alt:""}),Object(i.jsxs)("p",{id:"meDescription",children:["Hey, I'm Alexander and I do functional web design in my free time",Object(i.jsx)("br",{}),"I'm fairly competent in HTML, CSS, JS (ES6), React, React-Native, PHP, and Python"]})]})})}}]),a}(r.a.Component),O=(a(34),a.p+"static/media/front-end-libraries-certificate.d3a429c5.png"),k=a.p+"static/media/javascript-algorithms-and-data-structures-certificate.c4991312.png",w=a.p+"static/media/responsive-web-design-certificate.a977bd21.png",N=a.p+"static/media/codepen.02878408.svg",C=a.p+"static/media/freecodecamp.4c409bea.svg",T=a.p+"static/media/github.b4696068.svg",S=a.p+"static/media/replit.a24b1542.svg",A=a.p+"static/media/stackoverflow.3c83c6b7.svg",I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).handleFocus=function(e){i.setState({focused:e})},i.state={focused:void 0},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("footer",{children:[Object(i.jsx)("h1",{children:Object(i.jsx)("u",{children:"Follow"})}),["",Object(i.jsx)("img",{src:O,alt:"front-end-libraries-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"}),Object(i.jsx)("img",{src:k,alt:"javascript-algorithms-and-data-structures-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"}),Object(i.jsx)("img",{src:w,alt:"responsive-web-design-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"})][this.state.focused],Object(i.jsxs)("div",{className:"certificates",children:[Object(i.jsx)("img",{src:O,alt:"front-end-libraries-certificate",onClick:function(){return e.handleFocus(1)}}),Object(i.jsx)("img",{src:k,alt:"javascript-algorithms-and-data-structures-certificate",onClick:function(){return e.handleFocus(2)}}),Object(i.jsx)("img",{src:w,alt:"responsive-web-design-certificate",onClick:function(){return e.handleFocus(3)}})]}),Object(i.jsxs)("div",{className:"socials",children:[Object(i.jsx)("a",{href:"https://repl.it/@AlexanderBirabe",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:S,className:"socialIcon",alt:"repl.it"})}),Object(i.jsx)("a",{href:"https://github.com/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:T,className:"socialIcon",alt:"github"})}),Object(i.jsx)("a",{href:"https://stackoverflow.com/users/12309608/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:A,className:"socialIcon",alt:"stackoverflow"})}),Object(i.jsx)("a",{href:"https://www.freecodecamp.org/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:C,className:"socialIcon",alt:"freecodecamp"})}),Object(i.jsx)("a",{href:"https://codepen.io/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:N,className:"socialIcon",alt:"codepen"})})]})]})}}]),a}(r.a.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(y,{}),Object(i.jsx)(x,{}),Object(i.jsx)(I,{})]})}}]),a}(r.a.Component);s.a.render(Object(i.jsx)(F,{}),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.0e5e5d26.chunk.js.map