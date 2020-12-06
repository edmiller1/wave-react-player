(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),i=n(12),s=n.n(i),o=n(4),u=n.n(o),l=n(6),d=n(3),p=n(8),b=n(7),j=n(5),h=function(e){var t=e.setSongs,n=e.songs,a=e.audioRef,r=e.setCurrentSong,i=e.currentSong,s=e.isPlaying,o=e.setIsPlaying,p=e.setSongInfo,h=e.songInfo,f=function(e){t(n.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{active:t.id===e.id})})))},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.findIndex((function(e){return e.id===i.id})),"skip-forward"!==t){e.next=7;break}return e.next=4,r(n[(c+1)%n.length]);case 4:f(n[(c+1)%n.length]),e.next=17;break;case 7:if("skip-back"!==t){e.next=17;break}if((c-1)%n.length!==-1){e.next=14;break}return e.next=11,r(n[n.length-1]);case 11:return f(n[n.length-1]),s&&a.current.play(),e.abrupt("return");case 14:return e.next=16,r(n[c-1]);case 16:f(n[c-1]);case 17:s&&a.current.play();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=Math.round(h.currentTime/h.duration*100),v={transform:"translateX(".concat(O,"% )")};return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"time-control",children:[Object(c.jsx)("p",{children:g(h.currentTime)}),Object(c.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(i.color[0],", ").concat(i.color[1],")")},className:"track",children:[Object(c.jsx)("input",{onChange:function(e){a.current.currentTime=e.target.value,p(Object(d.a)(Object(d.a)({},h),{},{currentTime:e.target.value}))},min:0,max:h.duration||0,value:h.currentTime,type:"range"}),Object(c.jsx)("div",{style:v,className:"animate-track"})]}),Object(c.jsx)("p",{children:h.duration?g(h.duration):"0:00"})]}),Object(c.jsxs)("div",{className:"play-control",children:[Object(c.jsx)(b.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:j.a}),Object(c.jsx)(b.a,{onClick:function(){o(!s),s?a.current.pause():a.current.play()},className:"play",size:"2x",icon:s?j.d:j.e}),Object(c.jsx)(b.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:j.b})]})]})},f=function(e){var t=e.currentSong;return Object(c.jsxs)("div",{className:"song-container",children:[Object(c.jsx)("img",{src:t.cover,alt:t.name}),Object(c.jsx)("h2",{children:t.name}),Object(c.jsx)("h3",{children:t.artist})]})},g=(n(24),n(27));var m=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(g.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(g.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(g.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(g.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(g.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(g.a)(),active:!1}]},O=function(e){var t=e.song,n=e.setCurrentSong,a=e.songs,r=e.audioRef,i=e.isPlaying,s=e.setSongs,o=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:i&&r.current.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{onClick:function(){o(),s(a.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{active:e.id===t.id})})))},className:"library-song ".concat(t.active?"selected":""),children:[Object(c.jsx)("img",{src:t.cover,alt:t.name}),Object(c.jsxs)("div",{className:"song-description",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("h4",{children:t.artist})]})]})},v=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(c.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(c.jsx)("h2",{children:"Library"}),Object(c.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(c.jsx)(O,{setSongs:i,isPlaying:r,audioRef:a,songs:t,song:e,setCurrentSong:n},e.id)}))})]})},x=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{children:"Waves"}),Object(c.jsxs)("button",{onClick:function(){return t(!n)},children:["Library",Object(c.jsx)(b.a,{icon:j.c})]})]})};var y=function(){var e=Object(a.useState)(m()),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(n[0]),s=Object(p.a)(i,2),o=s[0],b=s[1],j=Object(a.useState)(!1),g=Object(p.a)(j,2),O=g[0],y=g[1],S=Object(a.useState)({currentTime:0,duration:0}),k=Object(p.a)(S,2),w=k[0],C=k[1],N=Object(a.useState)(!1),T=Object(p.a)(N,2),I=T[0],P=T[1],A=function(e){var t=e.target.currentTime,n=e.target.duration;C(Object(d.a)(Object(d.a)({},w),{},{currentTime:t,duration:n}))},R=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(e){return e.id===o.id})),e.next=3,b(n[(t+1)%n.length]);case 3:O&&L.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(a.useRef)(null);return Object(c.jsxs)("div",{className:"App ".concat(I?"library-active":""),children:[Object(c.jsx)(x,{libraryStatus:I,setLibraryStatus:P}),Object(c.jsx)(f,{currentSong:o}),Object(c.jsx)(h,{setSongs:r,songs:n,setSongInfo:C,songInfo:w,audioRef:L,isPlaying:O,setIsPlaying:y,currentSong:o,setCurrentSong:b}),Object(c.jsx)(v,{libraryStatus:I,songs:n,setCurrentSong:b,audioRef:L,isPlaying:O,setSongs:r}),Object(c.jsx)("audio",{onLoadedMetadata:A,onTimeUpdate:A,ref:L,src:o.audio,onEnded:function(){return R("skip-forward")}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.ae8ceab3.chunk.js.map