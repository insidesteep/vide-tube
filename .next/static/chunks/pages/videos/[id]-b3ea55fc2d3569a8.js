(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{5634:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videos/[id]",function(){return s(8331)}])},8331:function(e,a,s){"use strict";s.a(e,async function(e,l){try{s.r(a),s.d(a,{__N_SSP:function(){return j},default:function(){return v}});var i=s(5893);s(5152);var c=s(1163),d=s(7294),t=s(381),r=s.n(t);s(1793);var o=s(902),n=s.n(o);let{appUrl:m,serverPort:h}=n();r().locale("ru");let x=()=>{},u=()=>{};x=(await Promise.all([s.e(89),s.e(579),s.e(558)]).then(s.bind(s,558))).generateDocument,u=(await Promise.all([s.e(89),s.e(579),s.e(558)]).then(s.bind(s,558))).getQrCodeImg;var j=!0;function v(e){let{data:a,isAuth:s}=e,[l,t]=(0,d.useState)(""),o=(0,c.useRouter)(),[n,h]=(0,d.useState)({fullname:"".concat(a.video.author.lastname," ").concat(a.video.author.firstname," ").concat(a.video.author.patronymic),department:a.video.category.name,theme:a.video.title,comments:a.video.title,url:l,urlYoutube:"https://youtu.be/".concat(a.video.youtubeId),qrcode:"",qrcodeYoutube:""});console.log(a);let{id:j}=o.query,v=(e,a)=>o.push("/".concat(a,"/").concat(e)),f=e=>h(a=>({...a,[e.target.name]:e.target.value})),N=async()=>{let e=window.location.href,s="https://youtu.be/".concat(a.video.youtubeId),l=await u(e),i=await u(s);t(e),h(a=>({...a,url:e,urlYoutube:s,qrcode:l,qrcodeYoutube:i}))};(0,d.useEffect)(()=>{N()},[]);let p=()=>navigator.clipboard.writeText(l),g=async()=>{try{await fetch("".concat(m,"/api/videos/viewcount"),{headers:{"Content-Type":"application/json"},body:JSON.stringify({videoId:j}),method:"POST"})}catch(e){console.error("Ошибка",e)}};(0,d.useEffect)(()=>{g()},[]);let b=e=>{e.preventDefault(),x(n)};return(0,i.jsxs)("div",{className:"container-fluid pb-0",children:[(0,i.jsx)("div",{className:"video-block section-padding",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-8",children:(0,i.jsxs)("div",{className:"single-video-left",children:[(0,i.jsx)("div",{className:"single-video",children:(0,i.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/".concat(a.video.youtubeId,"?rel=0&amp;controls=1&amp;showinfo=1&modestbranding=1"),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}),(0,i.jsxs)("div",{className:"single-video-title box mb-3",children:[(0,i.jsx)("h2",{children:(0,i.jsx)("a",{href:"#",children:a.video.title})}),(0,i.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,i.jsxs)("p",{className:"mb-0",children:[(0,i.jsx)("i",{className:"fas fa-eye"})," ",a.video.viewCount.toLocaleString()," просмотров"]}),(0,i.jsxs)("div",{children:[s&&(0,i.jsxs)("button",{className:"mb-0 btn btn-primary mr-2","data-toggle":"modal","data-target":"#exportToWord",children:[(0,i.jsx)("i",{className:"fa fa-file-word"})," Справка"]}),(0,i.jsxs)("button",{className:"mb-0 btn btn-primary","data-toggle":"modal","data-target":"#exampleModal",children:[(0,i.jsx)("i",{className:"fas fa-share"})," Поделиться"]})]})]})]}),(0,i.jsxs)("div",{className:"single-video-author box mb-3",children:[(0,i.jsx)("img",{className:"img-fluid",src:"/img/s4.png",alt:""}),(0,i.jsxs)("p",{onClick:()=>v(a.video.author._id,"authors"),children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("strong",{children:"".concat(a.video.author.lastname," ").concat(a.video.author.firstname," ").concat(a.video.author.patronymic)})})," ",(0,i.jsx)("span",{title:"","data-placement":"top","data-toggle":"tooltip","data-original-title":"Verified",children:(0,i.jsx)("i",{className:"fas fa-check-circle text-success"})})]}),(0,i.jsxs)("small",{children:["Опубликовано: ",r()(a.video.createAt).format("LL")]})]}),(0,i.jsxs)("div",{className:"single-video-info-content box mb-3",children:[(0,i.jsx)("h6",{children:"Категория :"}),(0,i.jsx)("p",{children:a.video.category.name}),(0,i.jsx)("h6",{children:"Описание :"}),(0,i.jsxs)("p",{children:[a.video.description," "]})]})]})}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"single-video-right",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"main-title",children:(0,i.jsx)("h6",{children:"Другие видео автора"})})}),(0,i.jsx)("div",{className:"col-md-12",children:a.otherVideos.map(e=>(0,i.jsxs)("div",{className:"video-card video-card-list",onClick:()=>v(e._id,"videos"),children:[(0,i.jsxs)("div",{className:"video-card-image",children:[(0,i.jsx)("a",{className:"play-icon",href:"#",children:(0,i.jsx)("i",{className:"fas fa-play-circle"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{className:"img-fluid",src:e.thumbnail,alt:""})}),(0,i.jsx)("div",{className:"time",children:e.duration})]}),(0,i.jsxs)("div",{className:"video-card-body",children:[(0,i.jsxs)("div",{className:"btn-group float-right right-action",children:[(0,i.jsx)("a",{href:"#",className:"right-action-link text-gray","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,i.jsx)("i",{className:"fa fa-ellipsis-v","aria-hidden":"true"})}),(0,i.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[(0,i.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,i.jsx)("i",{className:"fas fa-fw fa-star"})," \xa0 Top Rated"]}),(0,i.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,i.jsx)("i",{className:"fas fa-fw fa-signal"})," \xa0 Viewed"]}),(0,i.jsxs)("a",{className:"dropdown-item",href:"#",children:[(0,i.jsx)("i",{className:"fas fa-fw fa-times-circle"})," ","\xa0 Close"]})]})]}),(0,i.jsx)("div",{className:"video-title",children:(0,i.jsx)("a",{href:"#",children:e.title})}),(0,i.jsxs)("div",{className:"video-page text-success",children:["".concat(e.author.lastname," ").concat(e.author.firstname," ").concat(e.author.patronymic)," ",(0,i.jsx)("a",{title:"","data-placement":"top","data-toggle":"tooltip",href:"#","data-original-title":"Верифицирован",children:(0,i.jsx)("i",{className:"fas fa-check-circle text-success"})})]}),(0,i.jsxs)("div",{className:"video-view",children:[e.viewCount," просмотров \xa0",(0,i.jsx)("i",{className:"fas fa-calendar-alt"})," ",r()(e.createdAt).fromNow()]})]})]},e._id))})]})})})]})}),(0,i.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,i.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsx)("div",{className:"modal-header",children:"Поделиться"}),(0,i.jsx)("div",{className:"modal-body",children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("input",{className:"form-control",readOnly:!0,value:l}),(0,i.jsx)("button",{className:"btn btn-primary btn-sm",onClick:p,children:"Копировать"})]})})]})})}),s&&(0,i.jsx)("div",{className:"modal fade",id:"exportToWord",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,i.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsx)("div",{className:"modal-header",children:"Экспортировать справку"}),(0,i.jsxs)("div",{className:"modal-body",children:[(0,i.jsx)("div",{className:"osahan-form",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"Ф.И.О"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("input",{name:"fullname",value:n.fullname,type:"text",placeholder:"Фамилия Имя Отчество",id:"e1",className:"form-control",onChange:f})})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"Кафедра"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("input",{name:"department",value:n.department,type:"text",placeholder:"Название кафедры",id:"e1",className:"form-control",onChange:f})})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"Тема"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("input",{name:"theme",value:n.theme,type:"text",placeholder:"Название темы",id:"e1",className:"form-control",onChange:f})})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"Описание"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("textarea",{name:"comments",value:n.comments,type:"text",placeholder:"Описание",id:"e1",className:"form-control",onChange:f})})]})}),(0,i.jsxs)("div",{className:"col-lg-6",children:[(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"Ссылка на платформу"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("input",{name:"url",value:n.url,disabled:!0,type:"text",placeholder:"Ссылка на видео",id:"e1",className:"form-control"})})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"QR-CODE Платформа"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("img",{src:n.qrcode,width:"150px"})})]})})]}),(0,i.jsxs)("div",{className:"col-lg-6",children:[(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e1",children:"Ссылка YouTube"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("input",{name:"url",value:n.urlYoutube,disabled:!0,type:"text",placeholder:"Ссылка на видео",id:"e1",className:"form-control"})})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-group ",children:[(0,i.jsx)("label",{htmlFor:"e2",children:"QR-CODE YouTube"}),(0,i.jsx)("div",{className:"d-flex alig-items-center",children:(0,i.jsx)("img",{src:n.qrcodeYoutube,width:"150px"})})]})})]})]})}),(0,i.jsx)("div",{className:"osahan-area text-center mt-3",onClick:b,children:(0,i.jsx)("button",{className:"btn btn-outline-primary",children:"Сохранить"})}),(0,i.jsx)("hr",{})]})]})})})]})}l()}catch(f){l(f)}},1)}},function(e){e.O(0,[885,235,774,888,179],function(){return e(e.s=5634)}),_N_E=e.O()}]);