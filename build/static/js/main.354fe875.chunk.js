(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{16:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);n(16);var c=n(15),r=n.n(c),o=n(6),i=n(3),a=n(2),u=n(4),s=n.n(u),j="/api/notes",l=function(){return s.a.get(j).then((function(t){return t.data}))},f=function(t){return s.a.post(j,t).then((function(t){return t.data}))},b=function(t,e){return s.a.put("".concat(j,"/").concat(t),e).then((function(t){return t.data}))},d=n(0),m=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(d.jsxs)("li",{children:[e.content,Object(d.jsx)("button",{onClick:n,children:c})]})},p=function(t){var e=t.message;return null===e?null:Object(d.jsx)("div",{className:"error",children:e})},O=function(){return Object(d.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(d.jsx)("br",{}),Object(d.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},h=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),s=u[0],j=u[1],h=Object(a.useState)(!0),v=Object(i.a)(h,2),x=v[0],g=v[1],S=Object(a.useState)("some error happened..."),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){l().then((function(t){c(t)}))}),[]);var C=x?n:n.filter((function(t){return t.important}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsx)(p,{message:y}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(d.jsx)("ul",{children:C.map((function(t){return Object(d.jsx)(m,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});b(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:new Date,important:Math.random()>.5};f(e).then((function(t){c(n.concat(t)),j("")}))},children:[Object(d.jsx)("input",{value:s,onChange:function(t){console.log(t.target.value),j(t.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"save"})]}),Object(d.jsx)(O,{})]})};r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.354fe875.chunk.js.map