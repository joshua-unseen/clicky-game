(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a.n(c),r=a(7),i=a.n(r),n=(a(16),a(1)),o=a(2),s=a(4),d=a(3),h=a(5),u=a(8),m=a.n(u),p=a(9),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={headerClass:"",headerText:"Click a Tile to Begin"},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props!==e?this.props.lost?this.setState({headerClass:"fail",headerText:"Fail!"}):this.props.score&&this.setState({headerClass:"nice",headerText:"Nice!"}):this.state.headerClass&&setTimeout(function(){t.setState({headerClass:""})},500)}},{key:"render",value:function(){return l.a.createElement("div",{className:"navbar sticky-top text-light bg-primary"},l.a.createElement("h1",null,"Clicky Game"),l.a.createElement("h3",{className:this.state.headerClass},this.state.headerText),l.a.createElement("h5",null,"Score: ",this.props.score," | High Score: ",this.props.hiScore))}}]),t}(l.a.Component);var v=function(){return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",null,"Clicky Game"),l.a.createElement("p",null,"Click the tiles, but don't click any tile more than once"))};var f=function(e){return l.a.createElement("img",{src:e.url+"?text="+e.id,id:e.id,className:"img-thumbnail m-3 tile",alt:"tile",onClick:e.clickHandler})};function b(e,t){return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}}(e),e.map(function(e){return l.a.createElement(f,{key:e.id,id:e.id,url:e.url,clicked:e.clicked,clickHandler:t})})}var g=function(e){return l.a.createElement("div",{className:"container d-flex flex-wrap justify-content-center mb-5"+(e.lost?" shaky":"")},b(e.tiles,e.clickHandler))};var E=function(e){return l.a.createElement("div",{className:"bg-primary fixed-bottom d-flex justify-content-between pt-1 pr-2"},l.a.createElement("span",null,l.a.createElement("img",{src:e.logo,alt:"logo",height:"36"}),l.a.createElement("strong",null,"Clicky Game")),l.a.createElement("span",null,"powered by React | coded by joshua-unseen"))},y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={tiles:p,score:0,hiScore:0,lost:!1},a.clickHandler=function(e){var t=a.state.score,c=a.state.hiScore,l=a.state.tiles,r=l.findIndex(function(t){return t.id==e.target.id}),i=l[r];i.clicked?(l.forEach(function(e){e.clicked=!1}),a.setState({tiles:l,score:0,lost:!0,headerText:"Fail!"})):(i.clicked=!0,c<=++t&&(c=t),a.setState({tiles:l,score:t,hiScore:c,lost:!1,headerText:"Nice!"}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,{lost:this.state.lost,score:this.state.score,hiScore:this.state.hiScore}),l.a.createElement(v,null),l.a.createElement(g,{tiles:this.state.tiles,clickHandler:this.clickHandler,lost:this.state.lost}),l.a.createElement(E,{logo:m.a}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},9:function(e){e.exports=[{id:1,clicked:!1,url:"https://via.placeholder.com/150"},{id:2,clicked:!1,url:"https://via.placeholder.com/150"},{id:3,clicked:!1,url:"https://via.placeholder.com/150"},{id:4,clicked:!1,url:"https://via.placeholder.com/150"},{id:5,clicked:!1,url:"https://via.placeholder.com/150"},{id:6,clicked:!1,url:"https://via.placeholder.com/150"},{id:7,clicked:!1,url:"https://via.placeholder.com/150"},{id:8,clicked:!1,url:"https://via.placeholder.com/150"},{id:9,clicked:!1,url:"https://via.placeholder.com/150"},{id:10,clicked:!1,url:"https://via.placeholder.com/150"},{id:11,clicked:!1,url:"https://via.placeholder.com/150"},{id:12,clicked:!1,url:"https://via.placeholder.com/150"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.f2a0298e.chunk.js.map