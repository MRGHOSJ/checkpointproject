(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){},147:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),c=a.n(r),s=(a(88),a(14)),o=a(15),i=a(17),u=a(16),h=a(18),d=a(7),b=a(80),p=a.n(b),m={apiKey:"AIzaSyCeJKEg5vxpBTJuId8GAFeXynfeBkUSZcE",authDomain:"myprojectcheckpoint.firebaseapp.com",databaseURL:"https://myprojectcheckpoint.firebaseio.com",projectId:"myprojectcheckpoint",storageBucket:"myprojectcheckpoint.appspot.com",messagingSenderId:"661605869137",appId:"1:661605869137:web:3bfe4c0735a05779"},y=(a(145),{width:"350px",border:"2px solid Black",padding:"20px"}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).name=e.name,a.url=e.url,a.age=e.age,a.other=e.other,a.personID=e.personID,a.handledeletebt=a.handledeletebt.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handledeletebt",value:function(e){this.props.deletebt(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:y},l.a.createElement("button",{className:"close",onClick:function(){return e.handledeletebt(e.personID)}},"x"),l.a.createElement("center",null,l.a.createElement("img",{src:this.url,className:"pic"}),l.a.createElement("h2",{className:"name"},"Name:",this.name),l.a.createElement("br",null),l.a.createElement("h4",null,"Age:",this.age),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h4",{className:"other"},"Other:"),l.a.createElement("p",null,this.other),l.a.createElement("br",null),l.a.createElement("hr",null)))}}]),t}(n.Component),g=(a(147),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={url:"",other:"",name:"",age:"",display:"none",displayobt:"block",displaycbc:"block"},e.handleUserage=e.handleUserage.bind(Object(d.a)(Object(d.a)(e))),e.handleUsername=e.handleUsername.bind(Object(d.a)(Object(d.a)(e))),e.handleUserother=e.handleUserother.bind(Object(d.a)(Object(d.a)(e))),e.handleUserurl=e.handleUserurl.bind(Object(d.a)(Object(d.a)(e))),e.submited=e.submited.bind(Object(d.a)(Object(d.a)(e))),e.openb=e.openb.bind(Object(d.a)(Object(d.a)(e))),e.closebc=e.closebc.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleUserage",value:function(e){this.setState({age:e.target.value})}},{key:"handleUserurl",value:function(e){this.setState({url:e.target.value})}},{key:"handleUserother",value:function(e){this.setState({other:e.target.value})}},{key:"handleUsername",value:function(e){this.setState({name:e.target.value})}},{key:"submited",value:function(){this.props.addperson(this.state.name,this.state.age,this.state.url,this.state.other),this.setState({url:"",other:"",name:"",age:""})}},{key:"openb",value:function(){this.setState({display:"block",displayobt:"none",displaycbc:"block"})}},{key:"closebc",value:function(){this.setState({display:"none",displayobt:"block",displaycbc:"none"})}},{key:"render",value:function(){var e={display:this.state.display},t={display:this.state.displayobt},a={display:this.state.displaycbc};return l.a.createElement("div",null,l.a.createElement("button",{className:"open-button",onClick:this.openb,style:t},"+"),l.a.createElement("center",null,l.a.createElement("div",{className:"form-popup",style:e},l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Name:"),l.a.createElement("input",{type:"text",maxlength:"10",onChange:this.handleUsername,value:this.state.name,placeholder:"name goes here"}),l.a.createElement("h2",null,"Icon Url:"),l.a.createElement("input",{type:"text",onChange:this.handleUserurl,value:this.state.url,placeholder:"image url"}),l.a.createElement("h2",null,"Age:"),l.a.createElement("input",{type:"number",onChange:this.handleUserage,value:this.state.age,placeholder:"age goes here"}),l.a.createElement("h2",null,"Other:"),l.a.createElement("input",{type:"text",onChange:this.handleUserother,value:this.state.other,placeholder:"Other things you want to inform about"}),l.a.createElement("button",{onClick:this.submited,className:"btn"},"Add"),l.a.createElement("button",{type:"button",className:"btn cancel",onClick:this.closebc,style:a},"Close")))))}}]),t}(n.Component)),f=a(63),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).dd=p.a.initializeApp(m),e.db=e.dd.database().ref().child("pplls"),e.addperson=e.addperson.bind(Object(d.a)(Object(d.a)(e))),e.state={pplls:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.state.pplls;this.db.on("child_added",function(a){t.push({id:a.key,name:a.val().name,age:a.val().age,url:a.val().url,other:a.val().other}),e.setState({pplls:t})}),this.db.on("child_removed",function(a){for(var n=0;n<t.length;n++)t[n].id===a.key&&t.splice(n,1);e.setState({pplls:t})})}},{key:"addperson",value:function(e,t,a,n){this.db.push().set({name:e,age:t,url:a,other:n})}},{key:"deletebt",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(f.b,null,this.state.pplls.map(function(t){return l.a.createElement(f.a,{size:4},l.a.createElement(v,{name:t.name,age:t.age,url:t.url,other:t.other,key:t.id,deletebt:e.deletebt}))}))),l.a.createElement(g,{addperson:this.addperson}))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Every Body That Added Himself Here"),l.a.createElement(j,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(190)},88:function(e,t,a){}},[[83,2,1]]]);
//# sourceMappingURL=main.107eb803.chunk.js.map