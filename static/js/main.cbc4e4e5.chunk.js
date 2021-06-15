(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{57:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),l=(a(62),a(38)),o=a(12),u=a(24),s=a(16),d=a(112),m=a(111),f=a(101),b=a(102),j=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),u=o[0],d=o[1],j=function(){var t=c.trim();t?(e.addItem(t),r(""),d(!1)):d(!0)},v=u?i.a.createElement("div",{className:"error-message"},"Title is requared"):null;return i.a.createElement("div",null,i.a.createElement(m.a,{error:!!u,helperText:u,variant:"outlined",label:"Type value",value:c,onChange:function(e){r(e.currentTarget.value),d(!1)},onKeyPress:function(e){"Enter"===e.key&&j()}}),i.a.createElement(f.a,{onClick:j},i.a.createElement(b.a,null)),v)},v=(a(68),function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(e.title),o=Object(s.a)(l,2),u=o[0],d=o[1];return c?i.a.createElement(m.a,{value:u,onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.changeTitle(u)}}):i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.title)}),O=a(113),E=a(104),h=a(103);var p=function(e){var t=e.tasks.map((function(t){return i.a.createElement("div",{className:t.isDone?"is-done":""},i.a.createElement(O.a,{onChange:function(a){return e.changeTaskStatus(t.id,a.currentTarget.checked,e.todoListID)},checked:t.isDone}),i.a.createElement(v,{title:t.title,changeTitle:function(a){e.changeTaskTitle(t.id,a,e.todoListID)}}),i.a.createElement(f.a,{onClick:function(){return e.removeTask(t.id,e.todoListID)}}," ",i.a.createElement(h.a,null)," "))}));return i.a.createElement("div",{className:"TodoList"},i.a.createElement("div",null,i.a.createElement(v,{title:e.title,changeTitle:function(t){return e.changeTodoListTitle(e.todoListID,t)}}),i.a.createElement(f.a,{onClick:function(){return e.removeTodoList(e.todoListID)}}," ",i.a.createElement(h.a,null)," "),i.a.createElement("div",null,i.a.createElement(j,{addItem:function(t){return e.addTask(t,e.todoListID)}})),i.a.createElement("div",null,t),i.a.createElement("div",null,i.a.createElement(E.a,{color:"all"===e.filter?"primary":"default",variant:"all"===e.filter?"contained":"outlined",onClick:function(){return e.changeFilter("all",e.todoListID)}},"All"),i.a.createElement(E.a,{color:"active"===e.filter?"primary":"default",variant:"active"===e.filter?"contained":"outlined",onClick:function(){return e.changeFilter("active",e.todoListID)}},"Active"),i.a.createElement(E.a,{color:"completed"===e.filter?"primary":"default",variant:"completed"===e.filter?"contained":"outlined",onClick:function(){return e.changeFilter("completed",e.todoListID)}},"Completed"))))},g=a(105),T=a(70),k=a(106),D=a(107),L=a(109),I=a(110),y=a(108);var C=function(){var e,t=Object(d.a)(),a=Object(d.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),r=Object(s.a)(c,2),m=r[0],b=r[1],v=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(d.a)(),title:"html",isDone:!0},{id:Object(d.a)(),title:"JS",isDone:!0},{id:Object(d.a)(),title:"React",isDone:!1}]),Object(u.a)(e,a,[{id:Object(d.a)(),title:"Bread",isDone:!0},{id:Object(d.a)(),title:"Beer",isDone:!0},{id:Object(d.a)(),title:"Fish",isDone:!1}]),e)),O=Object(s.a)(v,2),h=O[0],C=O[1];function w(e){switch(e.filter){case"active":return h[e.id].filter((function(e){return!e.isDone}));case"completed":return h[e.id].filter((function(e){return e.isDone}));default:return h[e.id]}}var S=m.map((function(e){return i.a.createElement(g.a,{item:!0},i.a.createElement(T.a,{style:{padding:"10px"}},i.a.createElement(p,{key:e.id,todoListID:e.id,changeTaskStatus:B,filter:e.filter,addTask:x,changeFilter:A,title:e.title,tasks:w(e),removeTask:F,removeTodoList:J,changeTaskTitle:N,changeTodoListTitle:W})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(k.a,{position:"static"},i.a.createElement(D.a,null,i.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(y.a,null)),i.a.createElement(L.a,{variant:"h6"},"News"),i.a.createElement(E.a,{color:"inherit"},"Login"))),i.a.createElement(I.a,{fixed:!0},i.a.createElement(g.a,{container:!0,style:{padding:"20px"}},i.a.createElement(j,{addItem:function(e){var t=Object(d.a)();b([{id:t,title:e,filter:"all"}].concat(Object(l.a)(m))),C(Object(o.a)(Object(o.a)({},h),{},Object(u.a)({},t,[])))}})),i.a.createElement(g.a,{container:!0,spacing:3},S)));function F(e,t){h[t]=h[t].filter((function(t){return t.id!==e})),C(Object(o.a)({},h))}function x(e,t){var a={id:Object(d.a)(),title:e,isDone:!1};C(Object(o.a)(Object(o.a)({},h),{},Object(u.a)({},t,[a].concat(Object(l.a)(h[t])))))}function B(e,t,a){h[a]=h[a].map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{isDone:t}):a})),C(Object(o.a)({},h))}function N(e,t,a){h[a]=h[a].map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{title:t}):a})),C(Object(o.a)({},h))}function W(e,t){m=m.map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{title:t}):a})),b(m)}function A(e,t){b(m.map((function(a){return a.id===t?Object(o.a)(Object(o.a)({},a),{},{filter:e}):a})))}function J(e){b(m.filter((function(t){return t.id!==e}))),delete h[e]}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.cbc4e4e5.chunk.js.map