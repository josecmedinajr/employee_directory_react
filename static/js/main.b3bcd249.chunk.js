(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Roger Federer","image":"./images/Roger.jpg","role":"Technical Master","nationality":"Switzerland","department":"Tennis Players"},{"id":2,"name":"Serena Williams","image":"./images/Serena.jpg","role":"Tennis Diva","nationality":"United States","department":"Tennis Players"},{"id":3,"name":"Rafael Nadal","image":"./images/Rafa.jpg","role":"The Spanish Bull","nationality":"Spain","department":"Tennis Players"},{"id":4,"name":"Simona Halep","image":"./images/Simona.jpg","role":"Small Romanian Giant","nationality":"Romania","department":"Tennis Players"},{"id":5,"name":"Novak Djokovik","image":"./images/Novak.jpg","role":"Flexible Wonder","nationality":"Serbia","department":"Tennis Players"},{"id":6,"name":"Bianca Andreescu","image":"./images/Bianca.jpg","role":"Young Dynamite","nationality":"Canada","department":"Tennis Players"},{"id":7,"name":"Juan Martin Del Potro","image":"./images/JuanMartin.jpg","role":"La Torre de Tandil","nationality":"Argentin","department":"Tennis Players"},{"id":8,"name":"Naomi Osaka","image":"./images/Naomi.jpg","role":"Young Sensation","nationality":"Japan","department":"Tennis Players"},{"id":9,"name":"Stefanos Tsitsipas","image":"./images/Stefanos.jpg","role":"The Thoughtful Greek","nationality":"Greece","department":"Tennis Players"},{"id":10,"name":"Julia Goerges","image":"./images/Julia.jpg","role":"Gorgeous Goerges","nationality":"Germany","department":"Tennis Players"},{"id":11,"name":"Stan Wawrinka","image":"./images/Stan.jpg","role":"Stanimal","nationality":"Switzerland","department":"Tennis Players"},{"id":12,"name":"Belinda Bencic","image":"./images/Belinda.jpg","role":"Swiss Coolness","nationality":"Switzerland","department":"Tennis Players"},{"id":13,"name":"Andrea Petkovic","image":"./images/Andrea.jpg","role":"The Petkorazzi","nationality":"Germany","department":"Tennis Players"}]')},function(e,a,n){e.exports=n(16)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(6),o=n.n(i),l=(n(14),n(7)),s=n(1),m=n(2),c=n(4),p=n(3),d=(n(15),{backgroundColor:"white",margin:"40px",border:"10px solid grey",borderRadius:"20px"}),u=function(e){Object(c.a)(n,e);var a=Object(p.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body",style:d},r.a.createElement("h3",{className:"card-title"},this.props.name),r.a.createElement("img",{src:this.props.image,className:"card-img-top",alt:"img"}),r.a.createElement("p",{className:"card-text"},this.props.role),r.a.createElement("p",{className:"card-text"},this.props.nationality),r.a.createElement("p",{className:"card-text"},this.props.department)))}}]),n}(r.a.Component),g=function(e){Object(c.a)(n,e);var a=Object(p.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"employee"},this.props.employees.map((function(e){return r.a.createElement(u,{key:e.id,name:e.name,role:e.role,department:e.department,image:e.image,nationality:e.nationality})})))}}]),n}(t.Component),y={fontSize:"20px",color:"red"},h=function(e){var a=e.onClick,n=e.children;return r.a.createElement("div",null,r.a.createElement("button",{onClick:a,style:y},n))},f=n(8),T=function(e){Object(c.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={employees:f},e.handleInputChange=function(a){var n=a.target,t=n.name,r=n.value;e.setState(Object(l.a)({},t,r))},e.sortEmployees=function(e,a){console.log(e.name);var n=e.name.toUpperCase(),t=a.name.toUpperCase(),r=0;return n>t?r=1:n<t&&(r=-1),console.log(r),r},e.filterEmployees=function(){return e.state.employees.filter((function(e){return"Tennis Player"===e.department}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"TENNIS PLAYERS DIRECTORY"),r.a.createElement("div",null,"Professional Tennis Players - WTA and ATP Tours."),r.a.createElement("h6",null,"*WTA and ATP Tours would not disclose the players' email addresses/phone numbers :)"),r.a.createElement(h,{onClick:function(){return e.setState({employees:e.state.employees.sort(e.sortEmployees)})}},"Sort by Player's First Name"),r.a.createElement(g,{employees:this.state.employees}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b3bcd249.chunk.js.map