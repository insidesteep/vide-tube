(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{7223:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors",function(){return s(9193)}])},9193:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSP:function(){return u}});var t=s(5893);s(1955);var n=s(1664),l=s.n(n),c=s(1163),i=s(7294),r=s(902),o=s.n(r);let{appUrl:d,serverPort:h}=o(),m=e=>{let{authors:a,total:s,itemPerPage:n=10}=e,r=[],[o,h]=(0,i.useState)(s),[m,u]=(0,i.useState)(1),[x,j]=(0,i.useState)([]),[p,f]=(0,i.useState)(0),[N,g]=(0,i.useState)({firstname:"",lastname:"",patronymic:"",authorId:null}),[b,v]=(0,i.useState)(!1),y=(0,i.useRef)(null),_=(0,c.useRouter)();for(let w=1;w<=Math.ceil(o/n);w++)r.push(w);(0,i.useEffect)(()=>{j(a)},[a]),(0,i.useEffect)(()=>{f(o)},[o]),(0,i.useEffect)(()=>{let{page:e}=_.query;e&&u(e)},_.query.page);let k=e=>{g(a=>({...a,[e.target.name]:e.target.value}))},S=async()=>{let{firstname:e,lastname:a,patronymic:s}=N;try{let t=await fetch("".concat(d,"/api/authors"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:e,lastname:a,patronymic:s})}),n=await t.json();console.log(n),n.success?(j(n.data.authors),f(n.data.count),h(n.data.count),E(),alert("Автор добавлен")):alert("Не удалость добавить автора!")}catch(l){console.error(l,N),alert("Ошибка при создании автора!")}},C=e=>{v(!0),g(e),y.current.focus()},E=()=>{g({firstname:"",lastname:"",patronymic:"",authorId:""}),v(!1)},P=async e=>{try{let a=await fetch("".concat(d,"/api/authors"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)}),s=await a.json();console.log(s),s.success&&(y.current.blur(),E(),j(e=>e.map(e=>e._id==s.data._id?s.data:e)))}catch(t){console.error(t),alert("Ошибка при обновлении автора!")}};return(0,t.jsxs)("div",{className:"container-fluid upload-details ",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"main-title",children:(0,t.jsx)("h6",{children:b?"Редактирование автора":"Новый автор"})})})}),(0,t.jsx)("hr",{}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-lg-12",children:[(0,t.jsx)("div",{className:"osahan-form",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("div",{className:"d-flex alig-items-center",children:(0,t.jsx)("input",{ref:y,onChange:k,value:N.lastname,name:"lastname",type:"text",placeholder:"Фамилия",id:"e1",className:"form-control"})})})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("div",{className:"d-flex alig-items-center",children:(0,t.jsx)("input",{onChange:k,value:N.firstname,name:"firstname",type:"text",placeholder:"Имя",id:"e1",className:"form-control"})})})}),(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("div",{className:"d-flex alig-items-center",children:(0,t.jsx)("input",{onChange:k,value:N.patronymic,name:"patronymic",type:"text",placeholder:"Отчество",id:"e1",className:"form-control"})})})})]})}),(0,t.jsxs)("div",{className:"osahan-area text-center mt-3",children:[(0,t.jsx)("button",{className:"btn btn-outline-primary",disabled:!N.firstname||!N.lastname,onClick:b?P:S,children:b?"Обновить":"Сохранить"}),b&&(0,t.jsx)("button",{className:"btn btn-outline-secondary",disabled:!N.firstname||!N.lastname,onClick:E,children:"Отменить"})]})]})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"main-title",children:(0,t.jsx)("h6",{children:"Авторы"})})})}),(0,t.jsx)("div",{className:"row",children:x&&x.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("table",{className:"table table-dark table-bordered table-sm",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",children:"#"}),(0,t.jsx)("th",{scope:"col",children:"Фамилия"}),(0,t.jsx)("th",{scope:"col",children:"Имя"}),(0,t.jsx)("th",{scope:"col",children:"Отчество"}),(0,t.jsx)("th",{scope:"col",align:"right",children:"Действия"})]})}),(0,t.jsx)("tbody",{children:x.map((e,a)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"row",children:a+1}),(0,t.jsx)("td",{children:e.lastname}),(0,t.jsx)("td",{children:e.firstname}),(0,t.jsx)("td",{children:e.patronymic}),(0,t.jsxs)("td",{align:"right",children:[(0,t.jsx)("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>C({firstname:e.firstname,lastname:e.lastname,patronymic:e.patronymic||"",authorId:e._id}),children:"Изменить"}),(0,t.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",children:"Удалить"})]})]},e._id))})]}),x.length>0&&(0,t.jsx)("nav",{"aria-label":"Page navigation example",children:(0,t.jsxs)("ul",{className:"pagination justify-content-center pagination-sm mb-4",children:[(0,t.jsx)("li",{className:"page-item ".concat(m<=1?"disabled":""),children:(0,t.jsx)(l(),{className:"page-link",href:"/authors?page=".concat(m-1),tabIndex:"-1",children:"Предыдущий"})}),r.map(e=>(0,t.jsx)("li",{className:"page-item ".concat(m==e&&"active"),children:(0,t.jsx)(l(),{className:"page-link",href:"/authors?page=".concat(e),children:e})},e)),(0,t.jsx)("li",{className:"page-item ".concat(m>=r?"disabled":""),children:(0,t.jsx)(l(),{className:"page-link",href:"/authors?page=".concat(m+1),children:"Следующий"})})]})})]}):(0,t.jsx)("p",{className:"text-center",children:"Авторы не найдены"})})]})};var u=!0;a.default=m}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7223)}),_N_E=e.O()}]);