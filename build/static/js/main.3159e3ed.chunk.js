(this.webpackJsonposse=this.webpackJsonposse||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/clicktosee.e92ff569.png"},35:function(e,t,a){e.exports=a.p+"static/media/logo.8f70103c.svg"},36:function(e,t,a){e.exports=a.p+"static/media/lantern.58225369.svg"},37:function(e,t,a){e.exports=a.p+"static/media/github.1bb02710.svg"},38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},44:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),l=a.n(s),i=(a(43),a(5)),c=a(6),o=a(10),u=a(8),m=a(11),d=(a(44),a(9)),p=a(13),v=a(1),h=a.n(v),f=a(15),k=a(17),E=a.n(k),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={names:[],addMember:"",expData:{},waitingForAPI:!0,newTitle:null},a.handleUserNameChange=a.handleUserNameChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.sendToServer=a.sendToServer.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleUserNameChange",value:function(e){this.setState({addMember:e.target.value})}},{key:"handleSubmit",value:function(e){var t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""!==this.state.addMember){n.next=3;break}return n.abrupt("return");case 3:return t={userData:{name:this.state.addMember,loading:!1,loaded:!1,failed:!1,expData:{}}},a=this.state.names.concat(t),n.next=7,h.a.awrap(this.setState({names:a}));case 7:this.sendToServer(this.state.addMember),this.setState({addMember:""});case 9:case"end":return n.stop()}}),null,this)}},{key:"sendToServer",value:function(e){var t,a,n,r=this;return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.names,"https://osseapi.lavidadev.com/skillevent/create",a=function(e){var a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.state.names,"undefined"!==typeof a[e]){n.next=4;break}return n.abrupt("return","continue");case 4:if(!0!==a[e].userData.loaded&&!0!==a[e].userData.loading&&!0!==a[e].userData.failed){n.next=6;break}return n.abrupt("return","continue");case 6:return a[e].userData.loading=!0,a[e].userData.loaded=!1,a[e].userData.failed=!1,n.next=11,h.a.awrap(r.setState({names:a,waitingForAPI:!0}));case 11:return n.next=13,h.a.awrap(E.a.get("https://osseapi.lavidadev.com/skillevent/create",{params:{username:t[e].userData.name}}).then((function(t){return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(200!==t.status){n.next=8;break}return(a=r.state.names)[e].userData.loading=!1,a[e].userData.loaded=!0,a[e].userData.failed=!1,a[e].userData.expData=t.data,n.next=8,h.a.awrap(r.setState({names:a,waitingForAPI:!1}));case 8:case"end":return n.stop()}}))})).catch((function(t){return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(200===t.status){n.next=10;break}if(void 0!==(a=r.state.names)[e]){n.next=4;break}return n.abrupt("return");case 4:return a[e].userData.failed=!0,a[e].userData.loading=!1,a[e].userData.loaded=!1,n.next=9,h.a.awrap(r.setState({names:a,waitingForAPI:!1}));case 9:return n.abrupt("return");case 10:console.log(t);case 11:case"end":return n.stop()}}))})));case 13:case"end":return n.stop()}}))},n=0;case 4:if(!(t.length>n)){e.next=13;break}return e.next=7,h.a.awrap(a(n));case 7:if("continue"!==e.sent){e.next=10;break}return e.abrupt("continue",10);case 10:n++,e.next=4;break;case 13:case"end":return e.stop()}}),null,this)}},{key:"removeName",value:function(e){var t=this.state.names;delete t[e],this.setState({names:t})}},{key:"setStoredData",value:function(){var e,t,a,n,r;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(e=JSON.parse(localStorage.getItem("listicles")),t=prompt("name the event")){s.next=4;break}return s.abrupt("return");case 4:if(this.props.data.updateSelection(t),console.log(e),!Array.isArray(e)){s.next=14;break}return console.log("found array"),console.log(e),a={data:[this.state.names],eventName:t},e.push(a),localStorage.setItem("listicles",JSON.stringify(e)),s.abrupt("return");case 14:n={data:[this.state.names],eventName:t},(r=[]).push(n),console.log("did not find array"),localStorage.setItem("listicles",JSON.stringify(r));case 19:case"end":return s.stop()}}),null,this)}},{key:"showNamesList",value:function(){var e=this,t=this.state.names;if(Array.isArray(t)&&t.length)return r.a.createElement("ul",{className:"listview"},t.map((function(t,a){return r.a.createElement("li",{className:"list-item-names",key:a},e.state.names[a].userData.name,e.state.names[a].userData.loading?r.a.createElement("div",{className:"loadingio-spinner-rolling-zlhkp6cwop"},r.a.createElement("div",{className:"ldio-6zt3tgvfpyv"},r.a.createElement("div",null))):null,e.state.names[a].userData.loaded?r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},r.a.createElement("circle",{className:"path circle",fill:"none",stroke:"#73AF55",strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),r.a.createElement("polyline",{className:"path check",fill:"none",stroke:"#73AF55",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})):null,e.state.names[a].userData.failed?r.a.createElement("div",{onClick:function(){return e.removeName(a)}},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},r.a.createElement("circle",{className:"path circle",fill:"none",stroke:"#D06079",strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),r.a.createElement("line",{className:"path line",fill:"none",stroke:"#D06079",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",x1:"34.4",y1:"37.9",x2:"95.8",y2:"92.3"}),r.a.createElement("line",{className:"path line",fill:"none",stroke:"#D06079",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",x1:"95.8",y1:"38",x2:"34.4",y2:"92.2"}))):null)})))}},{key:"checkForAllLoaded",value:function(){var e=this.state.names,t=!0;if(Array.isArray(e)&&e.length)return e.map((function(e){t=!!e.userData.loaded,t=!e.userData.loading})),t}},{key:"checkForFailed",value:function(){var e=this.state.names;if(Array.isArray(e)&&e.length){for(var t=0;e.length>t;t++){var a=e[t];if(void 0!==a&&null!==a&&!0===e[t].userData.failed)return!0}return!1}}},{key:"canCreate",value:function(){return!(!this.state.names.length||!this.checkForAllLoaded()||this.checkForFailed())}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"form-info-wrapper"},r.a.createElement("article",null,r.a.createElement("p",null,"start typing to grab user data"),r.a.createElement("form",{className:"form-add-user",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"username-label"},"username:"),r.a.createElement("input",{className:"form-textfield",type:"text",value:this.state.addMember,onChange:this.handleUserNameChange}),r.a.createElement("input",{className:"form-button",type:"submit",value:"add"})),this.showNamesList(),r.a.createElement("div",{className:"ButtonsWrapper"},this.canCreate()?r.a.createElement(d.b,{onClick:function(){e.props.data.appStateUpdate(e.state.names),e.setStoredData()},className:"a-button",to:"/view"},"create clan event"):null),this.state.names.length?r.a.createElement("section",null,r.a.createElement("p",null,this.checkForAllLoaded()?"":"fletchin data"),r.a.createElement("p",{className:"status-message"},this.checkForFailed()?"failed username check(s). try rechecking if you think this is in error; otherwise remove failed usernames.":null)):null))}}]),t}(r.a.Component),N=(a(68),a(34)),b=a.n(N),y=function(){function e(){Object(i.a)(this,e),this.url="https://osseapi.lavidadev.com/skillevent/create",this.axios=new E.a.create}return Object(c.a)(e,[{key:"getUserData",value:function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(this.axios.get(this.url,{params:{username:e}}));case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}),null,this)}}]),e}(),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={list:a.getData(),current:[],selection:a.props.selectionName},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setCurrent().then((function(){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(e.updateCurrentDataSet(e.state.selection));case 2:return t=a.sent,a.next=5,h.a.awrap(e.setState({current:t}));case 5:case"end":return a.stop()}}))}))}},{key:"componentWillReceiveProps",value:function(e){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.selection===e.selectionName){t.next=5;break}return t.next=4,h.a.awrap(this.setState({selection:e.selectionName}));case 4:this.updateCurrentDataSet(this.state.selection);case 5:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){}},{key:"getData",value:function(){var e=JSON.parse(localStorage.getItem("listicles")),t=[];return t.push(e),t}},{key:"updateCurrentDataSet",value:function(e){var t,a,n,r=this;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=this.state.current,(a=t)[0].length)for(n=0;a[0].length>n;n++)a[0][n].eventName===e&&function(){for(var e=a[0][n].data[0],t=function(t){if(!1===e[t].userData.requested&&!1===e[t].userData.failed){var n=new y;e[t].userData.requested=!0,n.getUserData(e[t].userData.name).then((function(n){return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:200===n.status?(e[t].userData.failed=!1,e[t].userData.loaded=!0,e[t].userData.expData.dataPoints=n.data.dataPoints,r.setState({current:a})):(e[t].failed=!0,e[t].loaded=!1,r.setState({current:a}));case 1:case"end":return s.stop()}}))}))}},s=0;e.length>s;s++)t(s)}();return s.abrupt("return",a);case 4:case"end":return s.stop()}}),null,this)}},{key:"setCurrent",value:function(){var e,t,a,n,r,s;return h.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e=JSON.stringify(this.state.list),t=JSON.parse(e),(a=t)[0].length)for(n=0;a[0].length>n;n++)for(r=a[0][n].data[0],s=0;r.length>s;s++)!0===r[s].userData.loaded&&(r[s].userData.loaded=!1,r[s].userData.expData.dataPoints={},r[s].userData.requested=!1);return l.next=6,h.a.awrap(this.setState({current:a}));case 6:case"end":return l.stop()}}),null,this)}},{key:"showCard",value:function(){return null===this.props.selectionName?r.a.createElement("div",{className:"showOptions"},r.a.createElement("div",null,r.a.createElement("img",{src:b.a,width:"400px",alt:"click to display data"})),r.a.createElement(d.b,{to:"/"},"create a new event")):r.a.createElement("div",{className:"cardsWrapper"},this.renderAllStatsCard(this.props.selectionName))}},{key:"renderAllStatsCard",value:function(e){var t=this,a=this.state.list[0];if(a.length)for(var n=function(n){if(e===a[n].eventName){var s=a[n].eventName,l=a[n].data[0];return{v:l.map((function(e,a){return r.a.createElement("div",{key:a,className:"cardOuterWrapper"},r.a.createElement("div",{className:"cardTitle"},"username: ",e.userData.name),r.a.createElement("div",{className:"cardInnerWrapper"},t.renderStartingStats(s,l,n,a),t.renderCurrentStats(s,l,n,a),t.renderDifference(s,l,n,a)))}))}}},s=0;a.length>s;s++){var l=n(s);if("object"===typeof l)return l.v}}},{key:"renderStartingStats",value:function(e,t,a,n){if(this.state.current[0]){var s=this.state.list[0][a].data[0][n].userData.expData.dataPoints;return r.a.createElement("div",{className:"startColumn"},r.a.createElement("div",{className:"startColumnTitle"},"starting stats"),r.a.createElement("div",{className:"startColumnSkill"},r.a.createElement("div",{className:"startColumnTitle"},"skill")),r.a.createElement("div",{className:"startColumnRank"},r.a.createElement("div",{className:"startColumnTitle"},"rank")),r.a.createElement("div",{className:"startColumnLevel"},r.a.createElement("div",{className:"startColumnTitle"},"level")),r.a.createElement("div",{className:"startColumnExperience"},r.a.createElement("div",{className:"startColumnTitle"},"exp")),r.a.createElement("div",{className:"startingSkillList"},Object.keys(s).map((function(e,t){return r.a.createElement("div",{key:e,className:"skillWrapper"},r.a.createElement("div",{className:"skillHolder"},e),r.a.createElement("div",{className:"skillHolder"},s[e].rank),r.a.createElement("div",{className:"skillHolder"},s[e].level),r.a.createElement("div",{className:"skillHolder"},s[e].xp))}))))}}},{key:"renderCurrentStats",value:function(e,t,a,n){if(this.state.current[0]){var s=this.state.current[0][a].data[0][n].userData.expData.dataPoints,l=this.state.current[0][a].data[0][n].userData.loaded;return r.a.createElement("div",{className:"currentColumn"},l?null:r.a.createElement("div",{className:"loadingWrapper"},r.a.createElement("div",null,"fletchin stats"),r.a.createElement("div",{className:"loadingio-spinner-rolling-zlhkp6cwop"},r.a.createElement("div",{className:"ldio-6zt3tgvfpyv"},r.a.createElement("div",null)))),l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"currentColumnTitle"},"current stats"),r.a.createElement("div",{className:"currentColumnSkill"},r.a.createElement("div",{className:"currentColumnTitle"},"skill")),r.a.createElement("div",{className:"currentColumnRank"},r.a.createElement("div",{className:"currentColumnTitle"},"rank")),r.a.createElement("div",{className:"currentColumnLevel"},r.a.createElement("div",{className:"currentColumnTitle"},"level")),r.a.createElement("div",{className:"currentColumnExperience"},r.a.createElement("div",{className:"currentColumnTitle"},"exp")),r.a.createElement("div",{className:"currentSkillList"},Object.keys(s).map((function(e,t){return r.a.createElement("div",{key:e,className:"skillWrapper"},r.a.createElement("div",{className:"skillHolder"},e),r.a.createElement("div",{className:"skillHolder"},s[e].rank),r.a.createElement("div",{className:"skillHolder"},s[e].level),r.a.createElement("div",{className:"skillHolder"},s[e].xp))})))):null)}}},{key:"getDifferenceData",value:function(){console.log("gettting difference data")}},{key:"renderDifference",value:function(e,t,a,n){if(this.state.current[0]){var s=this.state.current[0][a].data[0][n].userData.expData.dataPoints,l=this.state.list[0][a].data[0][n].userData.expData.dataPoints,i=this.state.current[0][a].data[0][n].userData.loaded;return i&&this.getDifferenceData(a,n),r.a.createElement("div",{className:"diffColumn"},i?null:r.a.createElement("div",{className:"loadingWrapper"},r.a.createElement("div",null,"waiting on stats"),r.a.createElement("div",{className:"loadingio-spinner-rolling-zlhkp6cwop"},r.a.createElement("div",{className:"ldio-6zt3tgvfpyv"},r.a.createElement("div",null)))),i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"currentColumnTitle"},"stats diff"),r.a.createElement("div",{className:"currentColumnSkill"},r.a.createElement("div",{className:"currentColumnTitle"},"skill")),r.a.createElement("div",{className:"currentColumnRank"},r.a.createElement("div",{className:"currentColumnTitle"},"rank")),r.a.createElement("div",{className:"currentColumnLevel"},r.a.createElement("div",{className:"currentColumnTitle"},"level")),r.a.createElement("div",{className:"currentColumnExperience"},r.a.createElement("div",{className:"currentColumnTitle"},"exp")),r.a.createElement("div",{className:"currentSkillList"},Object.keys(s).map((function(e,t){return r.a.createElement("div",{key:e,className:"skillWrapper"},r.a.createElement("div",{className:"skillHolder"},e),r.a.createElement("div",{className:"skillHolder"},s[e].rank-l[e].rank),r.a.createElement("div",{className:"skillHolder"},s[e].level-l[e].level),r.a.createElement("div",{className:"skillHolder"},s[e].xp-l[e].xp))})))):null)}}},{key:"render",value:function(){return r.a.createElement("section",{className:"viewEventWrapper"},this.showCard())}}]),t}(r.a.Component),x=(a(69),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={storageData:[],selection:a.props.selectionName,refreshed:!1},a.getDataStart(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setSelection",value:function(e){this.setState({selection:e}),this.props.data.updateSelection(e)}},{key:"getDataStart",value:function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(JSON.parse(localStorage.getItem("listicles")));case 2:e=t.sent,this.setState({storageData:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"getData",value:function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(JSON.parse(localStorage.getItem("listicles")));case 2:e=a.sent,t=this.state.storageData,JSON.stringify(e)===JSON.stringify(t)||this.setState({storageData:e,selection:this.props.selectionName});case 5:case"end":return a.stop()}}),null,this)}},{key:"renderButtons",value:function(){var e=this;if(this.getData(),null!==this.state.storageData)return r.a.createElement("ul",null,this.state.storageData.map((function(t,a){return r.a.createElement(d.b,{to:"/view",replace:!0},r.a.createElement("li",{key:a,className:t.eventName===e.state.selection?"selected":"",onClick:function(){return e.setSelection(t.eventName)}},t.eventName))})))}},{key:"showCreatedEvents",value:function(){return r.a.createElement("div",{className:"card createdWrapper"},this.renderButtons())}},{key:"render",value:function(){return r.a.createElement("div",null,this.showCreatedEvents())}}]),t}(r.a.Component)),S=a(35),w=a.n(S),C=a(36),O=a.n(C),j=a(37),A=a.n(j),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:w.a,className:"App-logo App-header-item",alt:"logo"})),r.a.createElement("img",{src:O.a,className:"App-logo-lantern",alt:"lantern"})),r.a.createElement("a",{href:"/"},"OSRS:SE"),r.a.createElement("a",{href:"https://github.com/treygrr/osse"},r.a.createElement("img",{src:A.a,className:"App-logo-github",alt:"github"})))}}]),t}(r.a.Component),W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={names:[],addMember:"Typer Username",selection:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"appStateUpdate",value:function(e){e&&this.setState({names:e})}},{key:"updateSelection",value:function(e){e&&this.setState({selection:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(T,null),r.a.createElement(x,{data:{updateSelection:this.updateSelection.bind(this)},selectionName:this.state.selection}),r.a.createElement("div",{className:"App-body"},r.a.createElement(p.a,{path:"/view",render:function(t){return r.a.createElement(D,{selectionName:e.state.selection,names:e.state.names})}}),r.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(g,{data:{appStateUpdate:e.appStateUpdate.bind(e),updateSelection:e.updateSelection.bind(e),names:e.state.names,addMember:e.state.addMember}})}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3159e3ed.chunk.js.map