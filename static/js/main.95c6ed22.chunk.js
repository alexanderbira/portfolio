(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"name":"Random Daily Fact","thumbnail":"rdf","url":"https://www.randomdailyfact.com/","description":"A website that displays a new fact every day with nice styling. You can enable notifications so that every day, it reminds you to look at the new fact and shows you a new fact. It is also a PWA, so you can install it on any platform as an app.","importance":0.75},{"name":"Pixel Art Maker","thumbnail":"pxart","url":"https://pixel-art-maker.alexbr.dev/","description":"A website to make pixel art with. You can use different grid dimensions, tools (like line, eraser, fill), colour picker (RGBAHSL, CSS input, native picker) with colour storage. You can export as a .pxart file to edit later, or a PNG.","importance":0.75},{"name":"Circles Animation","thumbnail":"circles","url":"https://circles.alexbr.dev","description":"An interactive display of patterns within easing. Generate circles swaying side to side, and adjust / export the settings","importance":0.3},{"name":"Wealth Comparer","thumbnail":"wealth","url":"https://wealth-compare.alexbr.dev","description":"See how long it would take you to have as much money as the richest people, with a reference timescale. You can type in a yearly salary or have it calculated. Available in English, French, and Spanish. Uses the Forbes 400 API.","importance":0.4},{"name":"Jump Game","thumbnail":"jump","url":"https://jump.alexbr.dev","description":"A game where you jump over / duck under blocks to get as far as you can. You can play as different sprites. It gets progressively harder in many ways.","importance":0.4},{"name":"Spinning Arcs","thumbnail":"arcs","url":"https://arcs.alexbr.dev","description":"Generate nice animations of arcs spinning. You can control the speed, colour, size, and more.","importance":0.35},{"name":"Tic Tac Toe","thumbnail":"xo","url":"https://ox.alexbr.dev","description":"Play tic tac toe either against a computer with 4 difficulty levels ranging from very easy to impossible, against a friend on the same device, or create a room and share the code so your friends can play with you - even if they\'re not there with you.","importance":0.7},{"name":"Click game","thumbnail":"click","url":"https://click.alexbr.dev","description":"Hit the spacebar just as the moving bar is in the green zone to get points.","importance":0.15},{"name":"Note Taker","thumbnail":"noteTaker","url":"https://note-taker.alexbr.dev","description":"Type text and hit enter for it to be saved. Can also solve mathematical expressions, and store single-lettered variables for reuse. Comes with different themes.","importance":0.8},{"name":"JS Tips","thumbnail":"jst","url":"https://jstips.alexbr.dev","description":"A website filled with often overlooked features of JavaScript with a great navigation system.","importance":0.8},{"name":"Periodic Table","thumbnail":"periodic","url":"https://ikea-periodic-table.roverthebluedog.repl.co/","description":"A periodic table using the https://neelpatel05.pythonanywhere.com API. Built in React, scales nicely, and you can click on an element to see more info. This was a collaboration between me and a friend.","importance":0.5}]')},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var i={"./arcs.webp":19,"./circles.webp":20,"./click.webp":21,"./jst.webp":22,"./jump.webp":23,"./noteTaker.webp":24,"./periodic.webp":25,"./pxart.webp":26,"./rdf.webp":27,"./tts.webp":28,"./wealth.webp":29,"./xo.webp":30};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=18},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/arcs.8163329e.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/circles.fcce5a23.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/click.1c8d6f28.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/jst.7a7b9c84.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/jump.0e60d709.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/noteTaker.0ab3f462.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/periodic.f4906722.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/pxart.088d536a.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/rdf.dd70ff7f.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/tts.7a81c529.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/wealth.f6c9c08c.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/xo.9f4cc2a3.webp"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a(1),n=a.n(r),c=a(8),s=a.n(c),o=a(2),l=a(3),d=a(5),u=a(4),m=(a(15),a(9)),p=(a(16),a(17),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsx)("a",{href:this.props.url,target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("section",{className:"demo",children:[Object(i.jsx)("img",{src:this.props.image,alt:"thumbnail"}),Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:this.props.name}),Object(i.jsx)("p",{children:this.props.description})]})]})})}}]),a}(n.a.Component)),h=a(6);h.map((function(e){return e.importance+=Math.random()})),h.sort((function(e,t){return t.importance-e.importance}));for(var b,f=(b=a(18)).keys().map(b),j=[],g=0;g<f.length;g++)j[g]=new Image,j[g].src=f[g];var v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).handleNext=function(){"undefined"==typeof i.timeout&&(document.getElementsByTagName("section")[0].classList=["demo leave"],i.timeout=setTimeout((function(){i.setState({cardNum:i.state.cardNum===i.state.cardMax?0:i.state.cardNum+1}),document.getElementsByTagName("section")[0].classList=["demo enter"],i.timeout=void 0}),1e3))},i.handlePrev=function(){"undefined"==typeof i.timeout&&(document.getElementsByTagName("section")[0].classList=["demo enter2"],i.timeout=setTimeout((function(){i.setState({cardNum:0===i.state.cardNum?i.state.cardMax:i.state.cardNum-1}),document.getElementsByTagName("section")[0].classList=["demo leave2"],i.timeout=void 0}),1e3))},i.handleAny=function(e){var t=i.state.cardNum;"undefined"==typeof i.timeout&&e<t?(document.getElementsByTagName("section")[0].classList=["demo enter2"],i.timeout=setTimeout((function(){i.setState({cardNum:e}),document.getElementsByTagName("section")[0].classList=["demo leave2"],i.timeout=void 0}),1e3)):e>t&&(document.getElementsByTagName("section")[0].classList=["demo leave"],i.timeout=setTimeout((function(){i.setState({cardNum:e}),document.getElementsByTagName("section")[0].classList=["demo enter"],i.timeout=void 0}),1e3))},i.state={cardNum:0,cardMax:f.length-2},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("main",{children:[Object(i.jsx)("h1",{children:"Site Demos"}),Object(i.jsx)("p",{children:"Here are some demos of websites I've made, pseudo-randomly sorted by how proud I am of them."}),Object(i.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",marginBottom:"15vh"},children:[Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)("button",{onClick:this.handlePrev,className:"demoNav",title:"see previous card",style:{marginRight:"10vmin"},children:"\u1438"}),Object(i.jsx)(p,Object(m.a)({image:f.find((function(t){return!!t.default.includes(h[e.state.cardNum].thumbnail)})).default},h[this.state.cardNum])),Object(i.jsx)("button",{onClick:this.handleNext,className:"demoNav",title:"see next card",style:{marginLeft:"10vmin"},children:"\u1433"})]}),Object(i.jsx)("nav",{children:h.map((function(t,a){var r=t.name;return Object(i.jsx)("button",{onClick:function(){return e.handleAny(a)},title:r,className:"navButton",style:{background:e.state.cardNum===a?"black":"transparent"}},a)}))})]})]})}}]),a}(n.a.Component),x=(a(31),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsx)("header",{children:Object(i.jsxs)("div",{id:"aboutMe",children:[Object(i.jsx)("img",{id:"profilePic",src:"/profile.webp",alt:""}),Object(i.jsxs)("p",{id:"meDescription",children:["Hey, I'm Alexander,",Object(i.jsx)("br",{}),"I do functional web development in my free time.",Object(i.jsx)("br",{}),"I code in in HTML, CSS, JS (ES6), React, React-Native, PHP, and Python."]})]})})}}]),a}(n.a.Component)),w=(a(32),a.p+"static/media/front-end-libraries-certificate.33dc36e1.webp"),y=a.p+"static/media/javascript-algorithms-and-data-structures-certificate.9c82b1e2.webp",O=a.p+"static/media/responsive-web-design-certificate.87643900.webp",k=a.p+"static/media/codecademy-typescript.8db82a73.webp",N=a.p+"static/media/data-visualisation-certificate.cd26fd2c.webp",C=a.p+"static/media/email.e500d95a.svg",I=a.p+"static/media/codepen.02878408.svg",T=a.p+"static/media/freecodecamp.4c409bea.svg",S=a.p+"static/media/github.b4696068.svg",A=a.p+"static/media/gist.78c1743b.svg",F=a.p+"static/media/replit.a24b1542.svg",B=a.p+"static/media/stackoverflow.3c83c6b7.svg",E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).handleFocus=function(e){i.setState({focused:e})},i.state={focused:void 0},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("footer",{children:[Object(i.jsx)("h1",{children:"Follow"}),["",Object(i.jsx)("img",{src:w,alt:"front-end-libraries-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"}),Object(i.jsx)("img",{src:y,alt:"javascript-algorithms-and-data-structures-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"}),Object(i.jsx)("img",{src:O,alt:"responsive-web-design-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"}),Object(i.jsx)("img",{src:k,alt:"typescript-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"}),Object(i.jsx)("img",{src:N,alt:"data-visualisation-certificate",style:{position:"fixed",bottom:0,height:"100vh",maxWidth:"100vw",zIndex:1e3,left:0,right:0,margin:"auto auto auto auto",cursor:"pointer"},onClick:function(){return e.handleFocus(0)},title:"click to hide"})][this.state.focused],Object(i.jsxs)("div",{className:"certificates",children:[Object(i.jsx)("img",{src:w,alt:"front-end-libraries-certificate",onClick:function(){return e.handleFocus(1)}}),Object(i.jsx)("img",{src:y,alt:"javascript-algorithms-and-data-structures-certificate",onClick:function(){return e.handleFocus(2)}}),Object(i.jsx)("img",{src:O,alt:"responsive-web-design-certificate",onClick:function(){return e.handleFocus(3)}}),Object(i.jsx)("img",{src:k,alt:"typescript-certificate",onClick:function(){return e.handleFocus(4)}}),Object(i.jsx)("img",{src:N,alt:"data-visualisation-certificate",onClick:function(){return e.handleFocus(5)}})]}),Object(i.jsxs)("div",{className:"socials",children:[Object(i.jsx)("a",{href:"mailto:mail@alexbr.dev",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:C,className:"socialIcon",alt:"mail@alexbr.dev"})}),Object(i.jsx)("a",{href:"https://repl.it/@AlexanderBirabe",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:F,className:"socialIcon",alt:"repl.it"})}),Object(i.jsx)("a",{href:"https://github.com/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:S,className:"socialIcon",alt:"github"})}),Object(i.jsx)("a",{href:"https://gist.github.com/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:A,className:"socialIcon",alt:"github gist"})}),Object(i.jsx)("a",{href:"https://stackoverflow.com/users/12309608/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:B,className:"socialIcon",alt:"stackoverflow"})}),Object(i.jsx)("a",{href:"https://www.freecodecamp.org/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:T,className:"socialIcon",alt:"freecodecamp"})}),Object(i.jsx)("a",{href:"https://codepen.io/alexanderbira",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:I,className:"socialIcon",alt:"codepen"})})]})]})}}]),a}(n.a.Component),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(x,{}),Object(i.jsx)(v,{}),Object(i.jsx)(E,{})]})}}]),a}(n.a.Component);s.a.render(Object(i.jsx)(P,{}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.95c6ed22.chunk.js.map