(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),s=(a(22),a(48)),i=a(49),o=a(47),m=a(5),u=a(6),d=a(8),h=a(7),v=a(9),E=a(14);var b=function(e){var t="btn";return t+=" btn-"+(e.type||"light"),t+={big:"btn-lg",small:"btn-sm"}[e.size]||"",l.a.createElement("button",{type:"button",className:t,onClick:e.onClick},e.children)},f=(a(24),a(26),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={items:[{id:1,name:"Cras justo odio"},{id:2,name:"Dapibus ac facilisis in"},{id:3,name:"Morbi leo risus"},{id:4,name:"Porta ac consectetur ac"},{id:5,name:"Vestibulum at eros"}]},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.items;return l.a.createElement("div",{className:"items-panel"},l.a.createElement("ul",null,l.a.createElement(E.a,null,t.map(function(a,n){return l.a.createElement("li",{key:a.id,className:"list-group-item"},l.a.createElement("div",{className:"name"},a.name),l.a.createElement("div",{className:"btn-group"},n>0?l.a.createElement(b,{type:"primary",onClick:function(){return e.sortUp(n)}},"Up"):null,n<t.length-1?l.a.createElement(b,{type:"dark",onClick:function(){return e.sortDown(n)}},"Down"):null))}))))}},{key:"sortUp",value:function(e){this.resort(e,-1)}},{key:"sortDown",value:function(e){this.resort(e,1)}},{key:"resort",value:function(e,t){var a=this.state.items,n=a[e];a.splice(e,1),a.splice(e+t,0,n),this.setState({items:a})}}]),t}(l.a.Component)),p=(a(28),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={index:0},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=[{title:"Item A",body:"Body A"},{title:"Item B",body:"Body B"},{title:"Item C",body:"Body C"}];return l.a.createElement("div",{className:"my-tabs"},l.a.createElement("ul",{className:"navs"},t.map(function(t,a){return l.a.createElement("li",{key:a,className:a===e.state.index?"active":"",onClick:function(){return e.setState({index:a})}},t.title)})),l.a.createElement("div",{className:"panes"},t.map(function(t,a){return l.a.createElement("div",{key:a,className:"pane",style:{display:a===e.state.index?"block":"none"}},t.body)})))}}]),t}(l.a.Component)),g=(a(30),a(32),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:"",message:"",subject:"vue",agree:!1,statemanage:"redux",errors:{},test:1},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errors;return l.a.createElement("div",{className:"myform"},l.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},l.a.createElement("div",{className:"title"},"Forms"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Text input",value:this.state.name,onChange:function(t){return e.onFieldChange("name",t)},onBlur:function(t){return e.validateField("name")}})),t.name?l.a.createElement("p",{class:"help is-danger"},t.name):null),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Email",value:this.state.email,onChange:function(t){return e.onFieldChange("email",t)},onBlur:function(t){return e.validateField("email")}})),t.email?l.a.createElement("p",{class:"help is-danger"},t.email):null),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",placeholder:"Message",value:this.state.message,onChange:function(t){return e.onFieldChange("message",t)}}))),l.a.createElement("div",{class:"field"},l.a.createElement("label",{class:"label"},"Subject"),l.a.createElement("div",{class:"control"},l.a.createElement("div",{class:"select"},l.a.createElement("select",{value:this.state.subject,onChange:function(t){return e.onFieldChange("subject",t)}},l.a.createElement("option",{value:""},"\u8bf7\u9009\u62e9"),l.a.createElement("option",{value:"react"},"React Js"),l.a.createElement("option",{value:"vue"},"VueJs"))))),l.a.createElement("div",{class:"field"},l.a.createElement("div",{class:"control"},l.a.createElement("label",{class:"checkbox"},l.a.createElement("input",{type:"checkbox",checked:this.state.agree,onChange:function(t){return e.onFieldChange("agree",t,"checked")}}),"I agree to the ",l.a.createElement("a",{href:"#"},"terms and conditions")))),l.a.createElement("div",{class:"field"},l.a.createElement("div",{class:"control"},l.a.createElement("label",{class:"radio"},l.a.createElement("input",{type:"radio",name:"statemanage",value:"redux",checked:"redux"===this.state.statemanage,onChange:function(t){return e.onFieldChange("statemanage",t)}}),"Redux"),l.a.createElement("label",{class:"radio"},l.a.createElement("input",{type:"radio",name:"statemanage",value:"mobx",checked:"mobx"===this.state.statemanage,onChange:function(t){return e.onFieldChange("statemanage",t)}}),"MobX"))),l.a.createElement("div",{class:"field is-grouped"},l.a.createElement("div",{class:"control"},l.a.createElement("button",{class:"button is-link",type:"submit"},"Submit")),l.a.createElement("div",{class:"control"},l.a.createElement("button",{class:"button is-text",type:"button"},"Reset")))))}},{key:"onFieldChange",value:function(e,t,a){var n=t.target[a||"value"],l={};l[e]=n,this.setState(l)}},{key:"onSubmit",value:function(e){e.preventDefault(),this.validateField()&&(console.log(this.state.test),this.setState({test:2}),console.log(this.state.test))}},{key:"validateField",value:function(e){var t=this.state.errors;if(e&&"name"!==e||(this.state.name?t.name=null:t.name="\u8bf7\u8f93\u5165\u540d\u79f0"),!e||"email"===e){this.state.email&&!/^[-\w]+@[-\w]+(\.[-\w]+)+$/.test(this.state.email)?t.email="\u8bf7\u6b63\u786e\u8f93\u5165Email":t.email=null}for(var a in this.setState({errors:t}),t)if(t[a])return!1;return!0}}]),t}(n.Component)),k=a(15),y=a.n(k),w=(a(34),a(36),a(38),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={markdown:""},a.ref=l.a.createRef(),console.log("ctor"),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("mount");var e=window.localStorage.getItem("markdownContent");e&&this.setState({markdown:e})}},{key:"render",value:function(){var e=this;console.log("render");var t=this.state.markdown,a=y()(t);return l.a.createElement("div",{className:"markdown"},l.a.createElement("div",{className:"toolbar"},l.a.createElement(N,{icon:"icon-editor-bold",onClick:function(){return e.onBold()}}),l.a.createElement(N,{icon:"icon-editor-italic"}),l.a.createElement(N,{icon:"icon-editor-underline"}),l.a.createElement(N,{icon:"icon-editor-list-bulleted"})),l.a.createElement("div",{className:"body box"},l.a.createElement("div",{className:"editor"},l.a.createElement("textarea",{ref:this.ref,className:"textarea",value:t,onChange:function(t){return e.onChange(t)}})),l.a.createElement("div",{className:"preview markdown-body",dangerouslySetInnerHTML:{__html:a}})))}},{key:"onChange",value:function(e){this.setValue(e.target.value)}},{key:"onBold",value:function(){var e=this.ref.current,t=e.selectionStart,a=e.selectionEnd,n=this.state.markdown.substring(t,a),l=this.state.markdown;l=l.substr(0,t)+"**"+n+"**"+l.substr(a),this.setValue(l)}},{key:"setValue",value:function(e){this.setState({markdown:e}),window.localStorage.setItem("markdownContent",e)}}]),t}(l.a.Component)),N=function(e){return l.a.createElement("button",{className:"button is-small",onClick:e.onClick},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"iconfont ".concat(e.icon)})))},C=w,j=(a(40),function(){return l.a.createElement("div",{className:"index"},l.a.createElement("div",{className:"navs"},l.a.createElement(o.a,{to:"/updown"},"\u5217\u8868"),l.a.createElement(o.a,{to:"/tabs"},"Tab\u5207\u6362"),l.a.createElement(o.a,{to:"/forms"},"\u8868\u5355"),l.a.createElement(o.a,{to:"/markdown"},"Markdown\u7f16\u8f91\u5668")))}),x=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(i.a,{path:"/",exact:!0,component:j}),l.a.createElement(i.a,{path:"/updown",component:f}),l.a.createElement(i.a,{path:"/tabs",component:p}),l.a.createElement(i.a,{path:"/forms",component:g}),l.a.createElement(i.a,{path:"/markdown",component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.f4c571bf.chunk.js.map