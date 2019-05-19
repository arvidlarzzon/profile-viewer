(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(64),i=n.n(l),c=(n(78),n(3)),s=n(4),o=n(6),u=n(5),m=n(7),p=n(65),h=n.n(p),d=n(71);var f=function(e){return r.a.createElement("header",{className:"Header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,"Profiles"),r.a.createElement(d.a,{className:"hamburger",onClick:e.toggleFilters}))},g=n(66),v=n.n(g),b=n(67),E=n.n(b),C=(n(102),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.profile.name,n="N/A";return t.first&&t.last&&(n=t.first.toUpperCase()+" "+t.last.toUpperCase()),r.a.createElement("div",{className:"ProfileCard",onClick:function(t){return e.props.profileClick(e.props.profile)}},r.a.createElement("img",{src:this.props.imageSrc,alt:"N/A",className:"thumbnail"}),r.a.createElement("div",{className:"name-container"},n))}}]),t}(r.a.Component)),O=n(70),k=(n(142),n(143),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).isMobile=function(){window.innerWidth<670?n.setState({isMobile:!0}):n.setState({isMobile:!1})},n.state={profiles:[],pages:[1,2,3,4,5],isMobile:window.innerWidth<670},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchInput.focus(),window.addEventListener("resize",this.isMobile)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.isMobile)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"FilterBar"+(this.state.isMobile?" mobile":"")},r.a.createElement("input",{type:"search",onChange:function(t){return e.props.searchChange(t)},className:"search-bar",placeholder:"Search...",value:this.props.searchValue,ref:function(t){e.searchInput=t}}),r.a.createElement("form",{action:"",className:"gender-picker"},r.a.createElement("label",null,r.a.createElement("input",{className:"gender-radio",type:"radio",name:"gender",value:"none",checked:"none"===this.props.selectedOption,onChange:this.props.handleOptionChange}),"All"),r.a.createElement("label",null,r.a.createElement("input",{className:"gender-radio",type:"radio",name:"gender",value:"male",checked:"male"===this.props.selectedOption,onChange:this.props.handleOptionChange}),"Male"),r.a.createElement("label",null,r.a.createElement("input",{className:"gender-radio",type:"radio",name:"gender",value:"female",checked:"female"===this.props.selectedOption,onChange:this.props.handleOptionChange}),"Female")),r.a.createElement(O.a,{current:this.props.page,onChange:this.props.pageChange,total:200,pageSize:40}))}}]),t}(r.a.Component));n(144);function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}var y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={profileId:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.profile,t="N/A";return e.name.first&&e.name.last&&(t=w(e.name.first)+" "+w(e.name.last)),r.a.createElement("div",{className:"Profile"},r.a.createElement("div",{className:"blurry-bg",style:{backgroundImage:"url(".concat(e.picture.large,")"),backgroundSize:"Cover"}}),r.a.createElement("div",{className:"blurry-container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{className:"image",src:e.picture.large,alt:"Profile Pic"})),r.a.createElement("div",{className:"name-container"},r.a.createElement("div",null,r.a.createElement("strong",null,"Name"),r.a.createElement("br",null)," ",t),r.a.createElement("div",null,r.a.createElement("strong",null,"Age:")," ",e.dob.age),r.a.createElement("div",null,"Member for "+e.registered.age+" years"))),r.a.createElement("div",{className:"clear-container"},r.a.createElement("div",{className:"description"},r.a.createElement("div",null,r.a.createElement("strong",null,"E-mail")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:"+e.email},e.email)),r.a.createElement("div",null,r.a.createElement("strong",null,"Phone")," ",r.a.createElement("br",null),e.cell),r.a.createElement("div",null,r.a.createElement("strong",null,"Born")," ",r.a.createElement("br",null),e.dob.date.toString().slice(0,10)),r.a.createElement("div",null,r.a.createElement("strong",null,"State")," ",r.a.createElement("br",null),w(e.location.state)),r.a.createElement("div",null,r.a.createElement("strong",null,"City")," ",r.a.createElement("br",null),w(e.location.city)),r.a.createElement("div",null,r.a.createElement("strong",null,"Street")," ",r.a.createElement("br",null),e.location.street))))}}]),t}(r.a.Component),j=n(21),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).setWrapperRef=n.setWrapperRef.bind(Object(j.a)(n)),n.handleClick=n.handleClick.bind(Object(j.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClick",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.props.clickHandler()}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.setWrapperRef},this.props.children)}}]),t}(a.Component);n(145);var M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).searchChange=function(e){n.setState({searchValue:e.target.value})},n.pageChange=function(e){n.setState({currentPage:e},function(){return n.getProfiles()})},n.getProfiles=function(){v.a.get("https://randomuser.me/api/?results=40&page=".concat(n.state.currentPage)).then(function(e){n.setState({profiles:e.data.results})}).catch(function(e){alert(e)})},n.handleOptionChange=function(e){n.setState({selectedGender:e.target.value})},n.profileClick=function(e){console.log(e),setTimeout(function(){n.setState({currentProfile:e})},100)},n.closeProfile=function(){n.setState({currentProfile:null})},n.state={profiles:e.profiles||[],currentProfile:null,currentPage:1,searchValue:"",selectedGender:"none"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getProfiles()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ProfileViewer"},this.state.currentProfile&&r.a.createElement(E.a,null,r.a.createElement(N,{clickHandler:this.closeProfile},r.a.createElement(y,{profile:this.state.currentProfile}))),this.props.showFilters&&r.a.createElement(k,{searchChange:this.searchChange,handleOptionChange:this.handleOptionChange,selectedOption:this.state.selectedGender,page:this.state.currentPage,pageChange:this.pageChange,showFilters:this.props.showFilters,searchValue:this.state.searchValue}),r.a.createElement("div",{className:"profile-container"},this.state.profiles.filter(function(t,n){if("none"===e.state.selectedGender||e.state.selectedGender===t.gender){if(!e.state.searchValue)return!0;if(function e(t,n){if("string"!==typeof t)return!1;for(var a in n)if("object"===typeof n[a]){if(e(t,n[a]))return!0}else if("string"===typeof n[a]&&t===n[a])return!0;return!1}(e.state.searchValue,t))return!0}return!1}).map(function(t,n){return r.a.createElement(C,{key:n,imageSrc:t.picture.large,profile:t,profileClick:e.profileClick})})))}}]),t}(r.a.Component),P=(n(146),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).isMobile=function(){window.innerWidth<670?n.setState({isMobile:!0}):n.setState({isMobile:!1})},n.toggleFilters=function(){n.setState({showFilters:!n.state.showFilters})},n.state={showFilters:!1,isMobile:window.innerWidth<670},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.isMobile)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.isMobile)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{toggleFilters:this.toggleFilters}),r.a.createElement("div",{className:"content-container"},r.a.createElement(M,{showFilters:this.state.showFilters})))}}]),t}(r.a.Component));i.a.render(r.a.createElement(P,null),document.getElementById("root"))},65:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},72:function(e,t,n){e.exports=n(147)},78:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.f473ab7a.chunk.js.map