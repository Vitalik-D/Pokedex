(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/pokeball-icon-transparent-9.9586f4ea.jpg"},13:function(e,t,n){e.exports=n.p+"static/media/pngfind.com-ash-greninja-png-2124784.3d751cc6.png"},22:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(27),n(28),n(12)),s=n.n(i),u=n(13),l=n.n(u),p=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:s.a,alt:"logo"})),r.a.createElement("div",{className:"logo-center"},r.a.createElement("img",{src:l.a,alt:"pokemon"})," "),r.a.createElement("div",null," "))},m=(n(29),function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"Developed by Vitalik Diadychko"))}),d=n(2),f=n.n(d),h=n(4),v=n(14),k=n(15),E=n(20),g=n(16),b=n(21),y=(n(31),n(7)),O=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 897,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?limit=".concat(897));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",{type:"COUNTER",payload:n});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=n(18),x=n.n(j),w=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,pokemons:[],countPok:0,searchString:"",data:[]},n.imgId=function(e){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")},n.handleSearch=function(e){var t=e.currentTarget.value.toLowerCase().trim(),a=n.state.data,r=new RegExp(t.split("").join(".*"),"i"),c=a.filter((function(e){if(e.name.match(r))return e}));n.setState({searchString:t,pokemons:c})},n}return Object(b.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.initCounter();case 2:t=e.sent,this.setState({pokemons:t.payload.results,data:t.payload.results,isLoaded:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoaded,a=t.pokemons,c=t.searchString,o=this.state.countPok;return r.a.createElement("div",{className:"pokemon-block"},r.a.createElement("input",{placeholder:"Enter pokemon name...",onChange:this.handleSearch,value:c,className:"search"}),n?r.a.createElement("div",{className:"Pokemon"},a.map((function(t){return r.a.createElement("div",{key:o++},r.a.createElement("img",{src:e.imgId(t.url)+".png",alt:"pokemon"}),r.a.createElement("p",null,t.name))}))):r.a.createElement("div",{className:"Loader"},r.a.createElement(x.a,{sizeUnit:"px",size:150,color:"red"})))}}]),t}(r.a.Component),N=Object(y.b)((function(e){return{COUNTER:e.COUNTER}}),(function(e){return{initCounter:function(){var t=Object(h.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,O();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(w),C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(N,null),r.a.createElement(m,null))},S={COUNTER:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNTER":return t.payload;default:return e}}},R=n(5),T=Object(R.b)(S),U=Object(R.c)(T);o.a.render(r.a.createElement((function(){return r.a.createElement(y.a,{store:U},r.a.createElement(C,null))}),null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5a2ad3de.chunk.js.map