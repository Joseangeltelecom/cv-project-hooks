(this["webpackJsonpcv-project-class"]=this["webpackJsonpcv-project-class"]||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),r=(n(18),n(3)),o=n(4),l=(n(6),n(23)),m=n(0);function j(e){return e.firstName?Object(m.jsxs)("div",{className:"textSection",children:[Object(m.jsx)(l.a,{children:Object(m.jsx)("button",{onClick:e.handleEdit,children:"Edit"})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"First Name:"})," ",e.firstName]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Last Name:"})," ",e.lastName]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Email:"})," ",e.email]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Phone Number:"})," ",e.phoneNumber]})]}):e.company?Object(m.jsxs)("div",{className:"textSection",children:[Object(m.jsx)(l.a,{children:Object(m.jsx)("button",{onClick:e.handleEdit,children:"Edit"})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Company Name:"})," ",e.company]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Position:"}),e.position]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"From:"})," ",e.from]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"To:"})," ",e.to]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Tasks:"})," ",e.tasks]})]}):Object(m.jsxs)("div",{className:"textSection",children:[Object(m.jsx)(l.a,{children:Object(m.jsx)("button",{onClick:e.handleEdit,children:"Edit"})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"School Name:"})," ",e.schoolName]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"Study:"})," ",e.title]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"From: "}),e.from]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"categoryText",children:"To:"})," ",e.to]})]})}var u=function(e){var t=function(t,n){var c=t.target,a=c.name,i=c.value,s=Object(r.a)(e.personal);s[n][a]=i,e.setPersonal(s)},n=Object(c.useState)(!0),a=Object(o.a)(n,2),i=a[0],s=a[1],u=function(e){e.preventDefault(),s((function(e){return!e}))};return i?Object(m.jsx)(l.a,{children:Object(m.jsxs)("form",{className:"box",onSubmit:u,children:[Object(m.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",className:"mr10",value:e.item.firstName,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",className:"mr10",value:e.item.lastName,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"example@gmail.com",className:"mr10",value:e.item.email,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"text",name:"phoneNumber",placeholder:"Phone Number",className:"mr10",value:e.item.phoneNumber,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("button",{className:"formBtn",children:"Save"})]},e.id)}):Object(m.jsx)(j,{firstName:e.item.firstName,lastName:e.item.lastName,email:e.item.email,phoneNumber:e.item.phoneNumber,handleEdit:u})};var d=function(e){var t=function(t,n){var c=t.target,a=c.name,i=c.value,s=Object(r.a)(e.education);s[n][a]=i,e.setEducation(s)},n=Object(c.useState)(!0),a=Object(o.a)(n,2),i=a[0],s=a[1],u=function(e){e.preventDefault(),s((function(e){return!e}))};return i?Object(m.jsx)(l.a,{children:Object(m.jsxs)("form",{className:"box",onSubmit:u,children:[Object(m.jsx)("input",{type:"text",name:"schoolName",placeholder:"School Name",className:"mr10",value:e.item.schoolName,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"text",name:"title",placeholder:"Title of study",className:"mr10",value:e.item.title,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"date",name:"from",placeholder:"From",className:"mr10",value:e.item.from,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"date",name:"to",placeholder:"To",className:"mr10",value:e.item.to,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("button",{className:"formBtn",children:"Save"}),e.education.length>1&&Object(m.jsx)("input",{type:"button",value:"remove",className:"mr10",onClick:function(){return function(t){var n=Object(r.a)(e.education);n.splice(t,1),e.setEducation(n)}(e.id)}})]},e.id)}):Object(m.jsx)(j,{schoolName:e.item.schoolName,title:e.item.title,from:e.item.from,to:e.item.to,handleEdit:u})};var b=function(e){var t=function(t,n){var c=t.target,a=c.name,i=c.value,s=Object(r.a)(e.experience);s[n][a]=i,e.setExperience(s)},n=Object(c.useState)(!0),a=Object(o.a)(n,2),i=a[0],s=a[1],u=function(e){e.preventDefault(),s((function(e){return!e}))};return i?Object(m.jsx)(l.a,{children:Object(m.jsxs)("form",{className:"box",onSubmit:u,children:[Object(m.jsx)("input",{type:"text",name:"company",placeholder:"Company",className:"mr10",value:e.item.company,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"text",name:"position",placeholder:"Position",className:"mr10",value:e.item.position,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"date",name:"from",placeholder:"From",className:"mr10",value:e.item.from,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"date",name:"to",placeholder:"To",className:"mr10",value:e.item.to,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("input",{type:"text",name:"tasks",placeholder:"Tasks",className:"mr10",value:e.item.tasks,onChange:function(n){return t(n,e.id)},required:!0}),Object(m.jsx)("button",{className:"formBtn",children:"Save"}),e.experience.length>1&&Object(m.jsx)("input",{type:"button",value:"remove",className:"mr10",onClick:function(){return function(t){var n=Object(r.a)(e.experience);n.splice(t,1),e.setExperience(n)}(e.id)}})]},e.id)}):Object(m.jsx)(j,{company:e.item.company,position:e.item.position,from:e.item.from,to:e.item.to,tasks:e.item.tasks,handleEdit:u})},p=n(13),h=n(24);var x=function(){var e=Object(c.useState)([{firstName:"",lastName:"",email:"",phoneNumber:""}]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([{schoolName:"",title:"",from:"",to:""}]),s=Object(o.a)(i,2),j=s[0],x=s[1],O=Object(c.useState)([{company:"",position:"",from:"",to:"",tasks:""}]),f=Object(o.a)(O,2),N=f[0],v=f[1],y=function(e){"education"===e?x([].concat(Object(r.a)(j),[{schoolName:"",title:"",from:"",to:""}])):v([].concat(Object(r.a)(N),[{company:"",position:"",from:"",to:"",tasks:""}]))};return Object(m.jsx)(p.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)("h1",{children:"Create your CV for Free!"}),Object(m.jsx)("h2",{children:"Personal Information"})]}),n.map((function(e,t){return Object(m.jsx)(u,{item:e,id:t,personal:n,setPersonal:a})})),Object(m.jsx)(h.a,{children:Object(m.jsx)("h2",{children:"Education"})}),j.map((function(e,t){return Object(m.jsx)(d,{item:e,id:t,education:j,setEducation:x})})),Object(m.jsx)(l.a,{children:Object(m.jsx)("button",{value:"add",onClick:function(){return y("education")},children:"Add"})}),Object(m.jsx)(h.a,{children:Object(m.jsx)("h2",{children:"Experience"})}),N.map((function(e,t){return Object(m.jsx)(b,{item:e,id:t,experience:N,setExperience:v})})),Object(m.jsx)(l.a,{children:Object(m.jsx)("button",{value:"add",onClick:y,children:"Add"})}),Object(m.jsx)(l.a,{children:Object(m.jsx)("button",{onClick:function(){window.print()},className:"print",children:"Print"})})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),O()},6:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.ebf394b8.chunk.js.map