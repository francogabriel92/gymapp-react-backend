(this["webpackJsonpgymapp-react-frontend"]=this["webpackJsonpgymapp-react-frontend"]||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),s=n.n(c),l=n(8),i=n.n(l),o=n(10),u=n(7),d=n(27),j=n(11),b=(n(133),n(28)),h=n.n(b),O="/api/clients",x=function(e){return{headers:{Authorization:"bearer ".concat(e)}}},m={get:function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x(t),e.prev=1,e.next=4,h.a.get(O,n);case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(n),e.prev=1,e.next=4,h.a.post(O,t,a);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(n),e.prev=1,e.next=4,h.a.put("".concat(O,"/").concat(t.id),t,a);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),addTime:function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=x(a),e.prev=1,e.next=4,h.a.put("".concat(O,"/addtime/").concat(t.id),n,r);case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),erase:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(n),e.prev=1,e.next=4,h.a.delete("".concat(O,"/").concat(t.id),a);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()},p=n(58),f=n(272),g=n(270),v=n(1),y=function(e){var t=e.user;return Object(v.jsx)("div",{children:Object(v.jsxs)(f.a,{bg:"dark",expand:"sm",variant:"dark",animation:"false",children:[Object(v.jsx)(f.a.Brand,{children:"GymApp"}),Object(v.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(f.a.Collapse,{animation:"false",id:"basic-navbar-nav",children:Object(v.jsxs)(g.a,{className:"ml-auto",children:[Object(v.jsx)(p.LinkContainer,{to:"/",children:Object(v.jsx)(g.a.Link,{children:"Home"})}),t?Object(v.jsx)(p.LinkContainer,{to:"/clients",children:Object(v.jsx)(g.a.Link,{children:"Clients"})}):null,t?Object(v.jsx)(p.LinkContainer,{to:"/account",children:Object(v.jsx)(g.a.Link,{children:"Account"})}):Object(v.jsx)(p.LinkContainer,{to:"/login",children:Object(v.jsx)(g.a.Link,{children:"Login"})})]})})]})})},C=n(265),k=n(263),w=n(122),S=n(273),H=n(268),N=n(264),D=function(e){var t=new Date;return e.setHours(0,0,0,0)<=t.setHours(0,0,0,0)},L={capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},calculateAge:function(e){var t=new Date-e;return Math.floor(t/315576e5)},dateIsPast:D,getStats:function(e){var t=new Date;return{unsubClients:e.filter((function(e){return D(new Date(e.subEndDate))})).length,subClients:e.filter((function(e){return!D(new Date(e.subEndDate))})).length,closeToExpire:e.filter((function(e){var n=Math.floor(new Date(e.subEndDate).getTime()-t.getTime())/26298e5;return n<1&&n>0}))}}},T=n(18),E=n(47),A=n(269),I=function(e){var t=e.open,n=e.handleOpen,r=e.title,c=e.label,s=e.value,l=e.client,d=e.token,j=e.currentClientHandler,b=e.listHandler,h=e.list,O=Object(a.useState)(s),x=Object(u.a)(O,2),p=x[0],f=x[1],g=Object(a.useState)(""),y=Object(u.a)(g,2),C=y[0],S=y[1],D="Birthday"===c?"birthDate":c.toLowerCase(),L=function(e){S(e),setTimeout((function(){return S("")}),5e3)},I=function(){return n(!1)},P=function(e,t){switch(e){case"mail":return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())||(L("Invalid mail."),!1);case"gender":var n=t.toLowerCase();return"male"===n||"female"===n||"other"===n||(L("You must enter male, female or other"),!1);default:return!0}},F=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=Object(E.a)({},D,p),!P(D,p)){e.next=16;break}return a=Object(T.a)(Object(T.a)({},l),n),e.prev=4,e.next=7,m.update(a,d);case 7:r=e.sent,b(h.map((function(e){return e.id===r.data.id?r.data:e}))),j(r.data),I(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(H.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,animation:!1,show:t,onHide:I,children:[Object(v.jsx)(H.a.Header,{closeButton:!0,children:Object(v.jsx)(H.a.Title,{children:r})}),Object(v.jsx)(H.a.Body,{children:Object(v.jsxs)(A.a,{onSubmit:F,children:[Object(v.jsx)(k.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(A.a.Control,{label:c,name:D,type:"birthDate"===D?"date":"text",onChange:function(e){return f(e.target.value)},value:p})})}),C.length>0?Object(v.jsx)(k.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)("p",{className:"text-center text-danger mt-2",children:C})})}):null,Object(v.jsxs)(H.a.Footer,{children:[Object(v.jsx)(N.a,{variant:"dark",type:"submit",children:"Save changes"}),Object(v.jsx)(N.a,{variant:"secondary",onClick:I,children:"Close"})]})]})})]})})},P=function(e){var t=e.label,n=e.value,r=e.client,c=e.token,s=e.currentClientHandler,l=e.list,i=e.listHandler,o=Object(a.useState)(!1),d=Object(u.a)(o,2),j=d[0],b=d[1];return Object(v.jsxs)(C.a,{children:[Object(v.jsxs)(k.a,{noGutters:!0,className:"text-center",children:[Object(v.jsx)(w.a,{className:"text-center m-1",children:t}),Object(v.jsx)(w.a,{children:Object(v.jsx)("input",{className:"text-center m-1",readOnly:!0,value:n,onClick:function(){if("Subscription ends at"===t||"Age"===t)return null;b(!0)}})})]}),Object(v.jsx)(I,{client:r,title:"Modify ".concat(t),open:j,handleOpen:b,label:t,value:n,token:c,currentClientHandler:s,list:l,listHandler:i})]})},F=n(75),B=function(e){var t=e.table,n=e.client,r=e.currentClientHandler,c=e.list,s=e.listHandler,l=e.token,d=Object(F.a)(e,["table","client","currentClientHandler","list","listHandler","token"]),j=Object(a.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1],x=Object(a.useState)(null),p=Object(u.a)(x,2),f=p[0],g=p[1],y=Object(a.useState)({subQty:"",subType:""}),C=Object(u.a)(y,2),k=C[0],w=C[1],S=function(){return O(!h)},D=function(e){return w(Object(T.a)(Object(T.a)({},k),{},Object(E.a)({},e.target.name,e.target.value)))},L=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!I()){e.next=15;break}return e.prev=2,e.next=5,m.addTime(n,k,l);case 5:a=e.sent,s(c.map((function(e){return e.id===a.data.id?a.data:e}))),r(a.data),S(),w(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0.message);case 15:case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){return k.subQty<=0||0===k.subQty.length?(P("* Number must be more than 0"),!1):""!==k.subType||(P("* Must select a type"),!1)},P=function(e){g(e),setTimeout((function(){g(null)}),5e3)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N.a,Object(T.a)(Object(T.a)({variant:"dark",className:t?"":"m-1",onClick:S},d),{},{children:t?"Add":"Add Time"})),Object(v.jsxs)(H.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,animation:!1,show:h,onHide:S,children:[Object(v.jsx)(H.a.Header,{closeButton:!0,children:Object(v.jsx)(H.a.Title,{children:"Add time"})}),Object(v.jsxs)(A.a,{onSubmit:L,children:[Object(v.jsx)(H.a.Body,{children:Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(A.a.Control,{className:"mb-1",type:"number",onChange:D,name:"subQty",value:k.subQty}),Object(v.jsx)(A.a.Check,{type:"radio",label:"Months",id:"sub-months",name:"subType",value:"months",onChange:D}),Object(v.jsx)(A.a.Check,{type:"radio",label:"Days",id:"sub-days",name:"subType",value:"days",onChange:D}),f?Object(v.jsx)("p",{className:"text-danger",children:f}):null]})}),Object(v.jsxs)(H.a.Footer,{children:[Object(v.jsx)(N.a,{variant:"dark",type:"submit",children:"Add"}),Object(v.jsx)(N.a,{variant:"secondary",onClick:S,children:"Close"})]})]})]})]})},G=function(e){var t=e.client,n=e.token,r=e.listHandler,c=e.list,s=e.currentClientHandler,l=e.dashboard,d=Object(a.useState)(!1),j=Object(u.a)(d,2),b=j[0],h=j[1],O=Object(a.useState)(""),x=Object(u.a)(O,2),p=x[0],f=x[1],g=Object(a.useState)(""),y=Object(u.a)(g,2),H=y[0],D=y[1],T=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you really want to delete ".concat(t.name,"?"))){e.next=12;break}return e.prev=1,e.next=4,m.erase(t,n);case 4:r(c.filter((function(e){return e.id!==t.id}))),s(null),window.alert("".concat(t.name," deleted successfully.")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return t.birthDate=new Date(t.birthDate),t.age=L.calculateAge(t.birthDate),t.subEndDate=new Date(t.subEndDate),Object(v.jsxs)(S.a,{border:"secondary",className:"m-3 p-3",children:[Object(v.jsx)(S.a.Title,{className:"text-center",children:t.name}),Object(v.jsx)(S.a.Subtitle,{className:"text-center",children:L.dateIsPast(t.subEndDate)?Object(v.jsx)("p",{className:"text-danger",children:"Unsubscribed"}):Object(v.jsx)("p",{className:"text-success",children:"Subscribed"})}),Object(v.jsx)("p",{className:"text-center small",children:"(Click on a field to modify its value)"}),Object(v.jsx)(S.a.Body,{children:Object(v.jsxs)(C.a,{children:[Object(v.jsxs)(k.a,{children:[Object(v.jsxs)(w.a,{xs:12,lg:6,children:[Object(v.jsx)(P,{token:n,client:t,label:"Age",value:t.birthDate?t.age:"-",currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(P,{token:n,client:t,label:"Address",value:t.address?t.address:"-",currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(P,{token:n,client:t,label:"Mail",value:t.mail?t.mail:"-",currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(P,{token:n,client:t,label:"Gender",value:L.capitalizeFirstLetter(t.gender),currentClientHandler:s,listHandler:r,list:c})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(P,{token:n,client:t,label:"Birthday",value:t.birthDate?t.birthDate.toLocaleDateString():"-",currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(P,{token:n,client:t,label:"City",value:t.city?t.city:"-",currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(P,{token:n,client:t,label:"Phone",value:t.phone?t.phone:"-",currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(P,{token:n,client:t,label:"Subscription ends at",value:t.subEndDate?t.subEndDate.toLocaleDateString():"-",className:L.dateIsPast(t.subEndDate)?"table-danger":null,currentClientHandler:s,listHandler:r,list:c})]})]}),Object(v.jsx)(k.a,{className:"text-center m-3",children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(B,{token:n,client:t,currentClientHandler:s,listHandler:r,list:c}),Object(v.jsx)(N.a,{variant:"dark",onClick:function(){f("Name"),D(t.name),h(!0)},children:"Change name"}),Object(v.jsx)(N.a,{className:"m-1",onClick:function(){return T()},variant:"danger",children:"Remove"}),l?null:Object(v.jsx)(N.a,{variant:"secondary",onClick:function(){return s(null)},children:"Close"})]})})]})}),Object(v.jsx)(I,{client:t,title:"Modify ".concat(p),open:b,handleOpen:h,label:p,value:H,token:n,currentClientHandler:s,listHandler:r,list:c})]})},M=(n(159),function(e){var t=e.title,n=e.children;return Object(v.jsxs)(S.a,{bg:"dark",text:"light",className:".card",children:[Object(v.jsx)(S.a.Header,{children:t}),Object(v.jsx)(S.a.Body,{scrollable:"true",children:n})]})}),q=(n(160),function(e){var t=e.clientList,n=e.setClientList,r=e.user,c=Object(a.useState)({}),s=Object(u.a)(c,2),l=s[0],i=s[1],o=Object(a.useState)(!1),d=Object(u.a)(o,2),j=d[0],b=d[1],h=Object(a.useState)(null),O=Object(u.a)(h,2),x=O[0],m=O[1],p=function(){return b(!j)};return Object(a.useEffect)((function(){i(L.getStats(t))}),[t]),Object(v.jsxs)("div",{className:"text-center mt-2",children:[Object(v.jsx)("h2",{children:"Dashboard"}),Object(v.jsx)(C.a,{className:"mt-4",children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)(w.a,{children:Object(v.jsxs)(M,{title:"Total Clients",children:[Object(v.jsx)(S.a.Text,{className:"h1",children:t.length}),Object(v.jsxs)(S.a.Text,{children:[Object(v.jsx)("span",{className:"text-success",children:"Subscribed"})," : ",l.subClients]}),Object(v.jsxs)(S.a.Text,{children:[Object(v.jsx)("span",{className:"text-danger",children:"Unsubscribeds"})," : ",l.unsubClients]})]})}),Object(v.jsx)(w.a,{children:Object(v.jsx)(M,{title:"Close to Expire",children:t.length>0&&l.closeToExpire?l.closeToExpire.map((function(e){return e.subEndDate=new Date(e.subEndDate),Object(v.jsxs)(S.a.Text,{onClick:function(){p(),m(e)},style:{cursor:"pointer"},children:[e.name," - ",e.subEndDate.toLocaleDateString()]},e.id)})):null})})]})}),Object(v.jsx)(H.a,{show:j,onHide:p,animation:!1,children:Object(v.jsx)(H.a.Body,{style:{background:"#343a40"},children:Object(v.jsx)(G,{dashboard:!0,client:x,token:r?r.token:null,listHandler:n,list:t,currentClientHandler:m})})})]})}),U=n(266),z=function(e){var t=e.client,n=e.token,a=e.listHandler,c=e.list,s=e.currentClientHandler,l=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you really want to delete ".concat(t.name,"?"))){e.next=12;break}return e.prev=1,e.next=4,m.erase(t,n);case 4:a(c.filter((function(e){return e.id!==t.id}))),s(null),window.alert("".concat(t.name," deleted successfully.")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return t.birthDate=new Date(t.birthDate),t.age=L.calculateAge(t.birthDate),t.subEndDate=new Date(t.subEndDate),Object(v.jsx)(r.a.Fragment,{children:Object(v.jsxs)("tr",{className:"text-center",style:{cursor:"pointer"},onClick:function(){return s(t)},children:[Object(v.jsx)("td",{children:t.name}),Object(v.jsx)("td",{children:t.birthDate?t.age:"-"}),Object(v.jsx)("td",{children:t.birthDate?t.birthDate.toLocaleDateString():"-"}),Object(v.jsx)("td",{children:t.phone?t.phone:"-"}),Object(v.jsx)("td",{className:L.dateIsPast(t.subEndDate)?"table-danger":null,children:t.subEndDate?t.subEndDate.toLocaleDateString():"-"}),Object(v.jsx)("td",{children:Object(v.jsx)(B,{table:!0,size:"sm",token:n,client:t,currentClientHandler:s,listHandler:a,list:c,children:"Add"})}),Object(v.jsx)("td",{children:Object(v.jsx)(N.a,{size:"sm",variant:"danger",onClick:function(){return l()},children:"Remove"})})]})})},Q=function(e){var t=e.clients,n=e.token,a=e.listHandler,r=e.list,c=e.currentClientHandler;return Object(v.jsx)("div",{className:"mt-4",children:Object(v.jsxs)(U.a,{size:"sm",striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{className:"text-center",children:[Object(v.jsx)("th",{children:"Fullname"}),Object(v.jsx)("th",{children:"Age"}),Object(v.jsx)("th",{children:"Birthdate"}),Object(v.jsx)("th",{children:"Phone"}),Object(v.jsx)("th",{children:"Sub's end date"}),Object(v.jsx)("th",{}),Object(v.jsx)("th",{})]})}),Object(v.jsx)("tbody",{children:t.length>0?t.map((function(e){return Object(v.jsx)(z,{client:e,token:n,listHandler:a,list:r,currentClientHandler:c},e.id)})):Object(v.jsx)("tr",{children:Object(v.jsx)("td",{colSpan:"7",className:"m-3 alert alert-primary text-center",children:"No Clients found!"})})})]})})},R=(n(161),function(e){var t=e.itemPerPage,n=void 0===t?10:t,r=e.totalItems,c=void 0===r?0:r,s=e.currentPage,l=e.paginate,i=Object(a.useState)(0),o=Object(u.a)(i,2),d=o[0],j=o[1];Object(a.useEffect)((function(){c>0&&n>0&&j(Math.ceil(c/n))}),[c,n]);var b=Object(a.useMemo)((function(){for(var e=[],t=function(t){e.push(Object(v.jsx)("li",{className:"page-item text-dark",children:Object(v.jsx)("a",{className:"page-link",href:"#/",onClick:function(){return l(t)},children:t})},t))},n=1;n<=d;n++)t(n);return e}),[d,l]);return 0===d?null:Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(v.jsx)("li",{className:"page-item",onClick:function(){return 1!==s?l(s-1):null},children:Object(v.jsx)("a",{className:"page-link",href:"#/",children:"Previous"})}),b,Object(v.jsx)("li",{className:"page-item",onClick:function(){return s!==d?l(s+1):null},children:Object(v.jsx)("a",{className:"page-link",href:"#/",children:"Next"})})]})})}),V=function(e){var t=e.filter,n=e.currentPage,r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],l=c[1];return Object(v.jsx)("div",{children:Object(v.jsx)(A.a,{children:Object(v.jsx)(A.a.Row,{className:"m-0",children:Object(v.jsx)(w.a,{children:Object(v.jsx)(A.a.Control,{onChange:function(e){l(e.target.value),t(e.target.value),n(1)},value:s||"",type:"text",placeholder:"Enter client to search..."})})})})})},J=function(e){var t=e.user,n=(e.userHandler,e.clientList),r=e.setClientList,c=Object(a.useState)(""),s=Object(u.a)(c,2),l=s[0],i=s[1],o=Object(a.useState)(1),j=Object(u.a)(o,2),b=j[0],h=j[1],O=Object(a.useState)(0),x=Object(u.a)(O,2),m=x[0],p=x[1],f=Object(a.useState)(void 0),g=Object(u.a)(f,2),y=g[0],k=g[1];Object(a.useEffect)((function(){p(n.length)}),[n]);var w=Object(a.useMemo)((function(){var e=n;return l&&(e=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))),p(e.length),e.slice(4*(b-1),4*(b-1)+4)}),[n,b,l]);return Object(v.jsx)("div",{children:Object(v.jsxs)(C.a,{className:"align-items-center",children:[Object(v.jsx)("h3",{className:"text-center m-4",children:"Clients"}),Object(v.jsx)(V,{filter:i,currentPage:h}),Object(v.jsx)(Q,{clients:w,token:t?t.token:null,listHandler:r,list:n,currentClientHandler:k}),Object(v.jsx)(R,{itemPerPage:4,totalItems:m,currentPage:b,paginate:function(e){return h(e)}}),Object(v.jsx)(d.Link,{to:"/addclient",children:Object(v.jsx)(N.a,{className:"text-center",variant:"dark",children:"Add client"})}),y?Object(v.jsx)(G,{client:y,token:t?t.token:null,listHandler:r,list:n,currentClientHandler:k}):null]})})},Y=n(30),Z=function(e){var t=e.label,n=Object(F.a)(e,["label"]),a=Object(Y.c)(n),r=Object(u.a)(a,2),c=r[0],s=r[1];return Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(A.a.Label,{children:t}),Object(v.jsx)(A.a.Control,Object(T.a)(Object(T.a)({},c),n)),s.touched&&s.error&&Object(v.jsx)("div",{className:"mt-2 text-danger",children:s.error})]})},W=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$={username:"",password:"",remember:!1},K=function(e){var t=e.loginHandler,n=e.redirectHandler;return Object(v.jsx)(Y.b,{initialValues:$,onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(a,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(a);case 3:c=e.sent,t(c),window.localStorage.setItem("loggedGymAppUser",JSON.stringify(c)),r.setSubmitting(!1),r.resetForm(),n(!0),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.isSubmitting,r=e.values,c=e.errors;return Object(v.jsxs)(A.a,{className:"text-center",onSubmit:n,children:[Object(v.jsx)(k.a,{children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(Z,{label:"Username",name:"username",onChange:t,value:r.username,error:c.username}),Object(v.jsx)(Z,{label:"Password",name:"password",type:"password",onChange:t,value:r.mail,error:c.mail}),Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(A.a.Label,{children:"Remember me?"}),Object(v.jsx)(Y.a,{type:"checkbox",name:"remember",className:"ml-2"})]}),Object(v.jsx)(A.a.Group,{children:Object(v.jsx)(N.a,{type:"submit",disabled:a,variant:"light",children:"Login"})})]})}),Object(v.jsx)(k.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(A.a.Label,{children:"Not registered yet?"})})}),Object(v.jsx)(k.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(A.a.Group,{children:Object(v.jsx)(d.Link,{to:"/signup",children:Object(v.jsx)(N.a,{variant:"success",children:"Sign Up"})})})})})]})}})},X=function(e){var t=e.loginHandler,n=Object(a.useState)(!1),r=Object(u.a)(n,2),c=r[0],s=r[1];return c?Object(v.jsx)(j.c,{to:"/home"}):Object(v.jsx)(C.a,{fluid:!0,className:"mt-4",children:Object(v.jsx)(k.a,{className:"align-items-center",children:Object(v.jsx)(w.a,{xs:10,sm:6,md:5,lg:4,className:"mx-auto",children:Object(v.jsx)(S.a,{border:"dark",bg:"dark",text:"light",children:Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)(S.a.Title,{className:"text-center",children:"Login"}),Object(v.jsx)(K,{loginHandler:t,redirectHandler:s})]})})})})})},_=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1];if(r)return Object(v.jsx)(j.c,{to:"/home"});return Object(v.jsxs)(C.a,{className:"text-center",children:[Object(v.jsx)("h3",{children:"Under construction"}),Object(v.jsx)(N.a,{variant:"dark",onClick:function(){return window.localStorage.removeItem("loggedGymAppUser"),e.loginHandler(null),void c(!0)},children:"Logout"})]})},ee=n(16),te=ee.c().shape({name:ee.e().required("Is required"),mail:ee.e().email("Enter a valid e-mail"),address:ee.e(),city:ee.e(),birthDate:ee.a().max(new Date,"Invalid date").min(new Date("1900-01-01"),"Must be after 1900"),phone:ee.e(),gender:ee.e().required("Is required"),subQty:ee.b().min(0,"Must be major or equal to 0."),subType:ee.e().required("Is required")}),ne={name:"",mail:"",address:"",city:"",birthDate:"",phone:"",gender:"",subQty:"",subType:""},ae=function(e){var t=e.user,n=e.modalHandler,a=e.clientList,r=e.clientListHandler;return Object(v.jsx)(Y.b,{initialValues:ne,onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(c,s){var l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=Object(T.a)({},c),e.prev=1,e.next=4,m.create(l,t.token);case 4:o=e.sent,r(a.concat(o.data)),n(!0),s.resetForm(),s.setSubmitting(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),s.setSubmitting(!1);case 15:case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:te,children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.isValid,r=e.isSubmitting,c=e.resetForm,s=e.values,l=e.errors;return Object(v.jsxs)(A.a,{className:"m-4",onSubmit:n,children:[Object(v.jsxs)(k.a,{children:[Object(v.jsxs)(w.a,{sm:6,children:[Object(v.jsx)(Z,{label:"Fullname",name:"name",onChange:t,value:s.name,error:l.name}),Object(v.jsx)(Z,{label:"Mail",name:"mail",onChange:t,value:s.mail,error:l.mail}),Object(v.jsx)(Z,{label:"Address",name:"address",onChange:t,value:s.address,error:l.address}),Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(A.a.Label,{children:"Birthdate"}),Object(v.jsx)(A.a.Control,{name:"birthDate",type:"date",value:s.birthDate,onChange:t,error:l.birthDate})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(Z,{label:"City",name:"city",onChange:t,value:s.city,error:l.city}),Object(v.jsx)(Z,{label:"Phone",name:"phone",onChange:t,value:s.phone,error:l.phone}),Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(A.a.Label,{children:"Gender"}),s.gender.touched&&s.gender.error&&Object(v.jsx)("div",{className:"mt-2 text-danger",children:s.gender.error}),Object(v.jsx)(A.a.Check,{type:"radio",id:"gender-male",label:"Male",name:"gender",value:"male",onChange:t}),Object(v.jsx)(A.a.Check,{type:"radio",label:"Female",id:"gender-female",name:"gender",value:"female",onChange:t}),Object(v.jsx)(A.a.Check,{type:"radio",label:"Other",id:"gender-other",name:"gender",value:"other",onChange:t})]}),Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(Z,{label:"Subscription time",className:{width:"40%"},type:"number",name:"subQty",onChange:t,value:s.subQty,error:l.subQty}),Object(v.jsx)(A.a.Check,{type:"radio",label:"Months",id:"sub-months",name:"subType",value:"months",onChange:t}),Object(v.jsx)(A.a.Check,{type:"radio",label:"Days",id:"sub-days",name:"subType",value:"days",onChange:t})]})]})]}),Object(v.jsx)(k.a,{className:"mt-3 justify-content-center",children:Object(v.jsxs)(A.a.Group,{children:[Object(v.jsx)(N.a,{variant:"dark",className:"mr-4",type:"submit",disabled:!a||r,children:"Create client"}),Object(v.jsx)(N.a,{variant:"secondary",onClick:c,children:"Clear"})]})})]})}})},re=function(e){var t=e.open,n=e.handleOpen,a=e.title,r=e.message,c=e.children,s=function(){return n(!1)};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(H.a,{size:"m","aria-labelledby":"contained-modal-title-vcenter",centered:!0,animation:!1,show:t,onHide:s,children:[Object(v.jsx)(H.a.Header,{closeButton:!0,children:Object(v.jsx)(H.a.Title,{children:a})}),Object(v.jsxs)(H.a.Body,{children:[Object(v.jsx)("p",{children:r}),c]}),Object(v.jsx)(H.a.Footer,{children:Object(v.jsx)(N.a,{variant:"dark",onClick:s,children:"Ok"})})]})})},ce=function(e){var t=e.user,n=e.clientList,r=e.clientListHandler,c=Object(a.useState)(!1),s=Object(u.a)(c,2),l=s[0],i=s[1];return Object(v.jsxs)(C.a,{children:[Object(v.jsx)("h3",{className:"text-center mt-3",children:"Add new client"}),Object(v.jsx)(ae,{user:t,modalHandler:i,clientList:n,clientListHandler:r}),Object(v.jsx)(re,{title:"Success!",message:"Client added successfully.",open:l,handleOpen:i})]})},se=function(){return Object(v.jsx)("footer",{className:"page-footer font-small pt-1",children:Object(v.jsx)("p",{className:"footer-copyright text-center py-3",children:"\xa9 2021 Copyright: Franco Gabriel Sanchez"})})},le=n(271),ie=n.p+"static/media/carousel-image-1.295f0ba5.webp",oe=n.p+"static/media/carousel-image-2.51ae8fc8.webp",ue=(n(260),function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(le.a,{animation:"false",children:[Object(v.jsxs)(le.a.Item,{children:[Object(v.jsx)("img",{src:ie,alt:"Slide 1",className:"homepage-img"}),Object(v.jsxs)(le.a.Caption,{className:"caption",children:[Object(v.jsx)("h3",{children:"Manage your clients"}),Object(v.jsx)("p",{children:"Change their subscription time, manage all the data from one place."})]})]}),Object(v.jsxs)(le.a.Item,{children:[Object(v.jsx)("img",{src:oe,alt:"Slide 2",className:"homepage-img"}),Object(v.jsxs)(le.a.Caption,{className:"caption",children:[Object(v.jsx)("h3",{children:"Easy and flexible access to information"}),Object(v.jsx)("p",{children:"Friendly user interface to access easily to data."})]})]})]}),Object(v.jsxs)(re,{open:n,handleOpen:r,title:"Welcome!",message:"For testing purposes you can use the followings credentials: ",children:[Object(v.jsxs)("p",{children:["Username: ",Object(v.jsx)("strong",{children:"demo"})]}),Object(v.jsxs)("p",{children:["Password: ",Object(v.jsx)("strong",{children:"demo123"})]}),Object(v.jsx)("p",{children:"Thank you."})]})]})}),de=n(267),je=function(){return Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsx)("h4",{children:"Loading..."}),Object(v.jsx)(de.a,{className:"m-3",animation:"border",role:"status"})]})},be=ee.c().shape({name:ee.e().required("Is required"),password:ee.e().required("Is required").min(6,"Must have at least 6 characters long"),username:ee.e().required("Is required"),passwordConfirm:ee.e().oneOf([ee.d("password"),null],"Passwords must match").required("You need to confirm your password")}),he={create:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/business",t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},Oe={name:"",username:"",password:"",passwordConfirm:""},xe=function(e){var t=e.redirectHandler;return Object(v.jsx)(Y.b,{initialValues:Oe,onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=Object(T.a)({},n),e.next=4,he.create(r);case 4:c=e.sent,console.log(c),a.resetForm(),a.setSubmitting(!1),t(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),a.setSubmitting(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),validationSchema:be,children:function(e){var t=e.handleChange,n=e.handleSubmit,a=e.isSubmitting,r=e.isValid,c=e.values,s=e.errors;return Object(v.jsxs)(A.a,{className:"text-center",onSubmit:n,children:[Object(v.jsx)(k.a,{children:Object(v.jsxs)(w.a,{children:[Object(v.jsx)(Z,{label:"Name",name:"name",onChange:t,value:c.name,error:s.name}),Object(v.jsx)(Z,{label:"Username",name:"username",onChange:t,value:c.username,error:s.username}),Object(v.jsx)(Z,{label:"Password",name:"password",type:"password",onChange:t,value:c.password,error:s.password}),Object(v.jsx)(Z,{label:"Confirm password",name:"passwordConfirm",type:"password",onChange:t,value:c.passwordConfirm,error:s.passwordConfirm})]})}),Object(v.jsx)(k.a,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(N.a,{variant:"success",type:"submit",disabled:!r||a,children:"Register"})})})]})}})},me=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return n?Object(v.jsx)(j.c,{to:"/home"}):Object(v.jsx)(C.a,{fluid:!0,className:"mt-4",children:Object(v.jsx)(k.a,{className:"align-items-center",children:Object(v.jsx)(w.a,{xs:10,sm:6,md:5,lg:4,className:"mx-auto",children:Object(v.jsx)(S.a,{border:"dark",bg:"dark",text:"light",children:Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)(S.a.Title,{className:"text-center",children:"Sign Up"}),Object(v.jsx)(xe,{redirectHandler:r})]})})})})})},pe=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(u.a)(c,2),l=s[0],b=s[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),x=O[0],p=O[1];return Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedGymAppUser");if(e){var t=JSON.parse(e);r(t)}}),[]),Object(a.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,m.get(n.token);case 4:200===(t=e.sent).status&&(p(!1),b(t.data)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),p(!1),window.localStorage.removeItem("loggedGymAppUser"),r(null);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(v.jsx)(d.BrowserRouter,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{user:n}),Object(v.jsxs)(j.g,{children:[Object(v.jsx)(j.d,{path:"/login",children:Object(v.jsx)(X,{loginHandler:r})}),Object(v.jsx)(j.d,{path:"/clients",children:Object(v.jsx)(J,{user:n,userHandler:r,clientList:l,setClientList:b})}),Object(v.jsx)(j.d,{path:"/account",children:Object(v.jsx)(_,{loginHandler:r})}),Object(v.jsx)(j.d,{path:"/addclient",children:Object(v.jsx)(ce,{user:n,clientList:l,clientListHandler:b})}),Object(v.jsx)(j.d,{path:"/signup",children:Object(v.jsx)(me,{})}),Object(v.jsx)(j.d,{path:"/",children:n?x?Object(v.jsx)(je,{}):Object(v.jsx)(q,{clientList:l,setClientList:b,user:n}):Object(v.jsx)(ue,{})})]}),Object(v.jsx)(se,{})]})})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(pe,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.aca85f40.chunk.js.map