(this["webpackJsonpreact-auth-template"]=this["webpackJsonpreact-auth-template"]||[]).push([[0],{355:function(e,t,a){},551:function(e,t){},553:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(32),c=a.n(s),r=(a(355),a(6)),o=Object(n.createContext)(),i=a(2),l="SET_USERNAME",u="SET_USER_ID",d="SET_TOKEN",j="SET_SIGNEDIN",b="SET_STATE",p="SET_CURRENT_STOCK",O="SET_LISTS",m="SET_CURRENT_LIST",h=[l,u,d,j,b,p,O,m],f=function(e,t){switch(t.type){case l:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{userName:null}):Object(i.a)(Object(i.a)({},e),{},{userName:t.payload});case u:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{userId:null}):Object(i.a)(Object(i.a)({},e),{},{userId:t.payload});case d:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{token:null}):Object(i.a)(Object(i.a)({},e),{},{token:t.payload});case j:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{loggedIn:!1}):Object(i.a)(Object(i.a)({},e),{},{loggedIn:t.payload});case p:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{currentStock:{name:"Tesla",ticker:"TSLA"}}):Object(i.a)(Object(i.a)({},e),{},{currentStock:t.payload});case b:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{shouldSaveState:!1}):Object(i.a)(Object(i.a)({},e),{},{shouldSaveState:t.payload});case O:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{lists:null}):Object(i.a)(Object(i.a)({},e),{},{lists:t.payload});case m:return null===t.payload?Object(i.a)(Object(i.a)({},e),{},{currentList:null}):Object(i.a)(Object(i.a)({},e),{},{currentList:t.payload});default:return e}},x=a(29),g=a(26),k=(a(356),a(344)),v=a(165),y=a(33),w=a(1),N=Object(w.jsxs)("section",{className:"options",children:[Object(w.jsx)(y.c,{to:"/home",className:"nav-link",children:"Home"}),Object(w.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(w.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),S=Object(w.jsxs)("section",{className:"options",children:[Object(w.jsx)(y.c,{to:"/sign-in",className:"link login nav-link",children:"Sign In"}),Object(w.jsx)(y.c,{to:"/sign-up",className:"link register nav-link",children:"Sign Up"})]}),C=(n.Fragment,y.c,function(e){e.user;var t=Object(n.useContext)(o),a=t.state,s=(t.dispatch,a.userName),c=a.loggedIn;return Object(w.jsxs)(v.a,{bg:"success",variant:"dark",expand:"md",children:[Object(w.jsx)(v.a.Brand,{children:Object(w.jsx)(y.b,{to:"/home",style:{color:"#FFF",textDecoration:"none"},children:Object(w.jsx)("span",{className:"website-title",children:"BankRoll"})})}),Object(w.jsx)("section",{className:"navbar-auth-links",children:Object(w.jsxs)(k.a,{className:"ml-auto",children:[c&&Object(w.jsx)("span",{className:"navbar-text mr-2",children:Object(w.jsxs)("span",{className:"navbar-welcome-text",children:["Welcome, ",s]})}),c?N:S]})})]})}),P=a(22),E=a.n(P),T=a(38),I="https://fathomless-wave-79069.herokuapp.com/",L="http://localhost:4741",A="localhost"===window.location.hostname?L:I,D=a(45),F=a.n(D),M=function(e){return F()({url:A+"/signin/",method:"POST",data:{username:e.username,password:e.password}})},q=a(24),G=a(132),U=function(){var e=Object(n.useContext)(o),t=e.state,a=e.dispatch,s=t.loggedIn,c=Object(x.f)(),i=Object(n.useState)(""),u=Object(r.a)(i,2),d=u[0],j=u[1],b=Object(n.useState)(""),p=Object(r.a)(b,2),O=p[0],m=p[1],h=Object(n.useState)(""),f=Object(r.a)(h,2),k=f[0],v=f[1],y=Object(n.useState)(""),N=Object(r.a)(y,2),S=N[0],C=N[1],P=function(){var e=Object(T.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),(s=n={email:d,username:O,password:k,passwordConfirmation:S},console.log(s),F()({method:"POST",url:A+"/signup/",data:{email:s.email,username:s.username,password:s.password,password_confirmation:s.passwordConfirmation}})).then((function(){return M(n)})).then((function(e){console.log(e),a({type:l,payload:e.data.username})})).then((function(){Object(g.b)("User ".concat(O," successfully created!"),{type:"success"}),console.log("here")})).then((function(){return c.push("/sign-in")})).catch((function(e){j(""),m(""),v(""),C("")}));case 3:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}();return s?Object(w.jsx)(x.a,{to:"/"}):Object(w.jsx)("div",{className:"row signin-parent-wrapper",children:Object(w.jsxs)("div",{className:"signin-form-wrapper",children:[Object(w.jsx)("h3",{className:"signin-header3",children:"Sign Up"}),Object(w.jsxs)(q.a,{className:"signup-form",onSubmit:P,children:[Object(w.jsxs)(q.a.Group,{children:[Object(w.jsx)(q.a.Label,{children:"Email address"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",type:"email",name:"email",value:d,placeholder:"Enter email",onChange:function(e){return j(e.target.value)}})]}),Object(w.jsxs)(q.a.Group,{children:[Object(w.jsx)(q.a.Label,{children:"Username"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",type:"username",name:"username",value:O,placeholder:"Enter username",onChange:function(e){return m(e.target.value)}})]}),Object(w.jsxs)(q.a.Group,{children:[Object(w.jsx)(q.a.Label,{children:"Password"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",name:"password",value:k,type:"password",placeholder:"Password",onChange:function(e){return v(e.target.value)}})]}),Object(w.jsxs)(q.a.Group,{children:[Object(w.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",name:"passwordConfirmation",value:S,type:"password",placeholder:"Confirm Password",onChange:function(e){return C(e.target.value)}})]}),Object(w.jsx)(G.a,{variant:"success",type:"submit",className:"submit",children:"Submit"})]})]})})},_=function(){var e=Object(n.useContext)(o),t=e.state,a=e.dispatch,s=t.loggedIn,c=Object(n.useState)(""),i=Object(r.a)(c,2),b=i[0],p=i[1],O=Object(n.useState)(""),m=Object(r.a)(O,2),h=m[0],f=m[1];return s?Object(w.jsx)(x.a,{to:"/home"}):Object(w.jsx)("div",{className:"row signin-parent-wrapper",children:Object(w.jsxs)("div",{className:"signin-form-wrapper",children:[Object(w.jsx)("h3",{className:"signin-header3",children:"Login"}),Object(w.jsxs)(q.a,{onSubmit:function(e){e.preventDefault(),M({username:b,password:h}).then((function(e){console.log("login response: ",e),g.b.success("".concat(b," successfully signed in!")),a({type:u,payload:e.data.id}),a({type:d,payload:e.data.accessToken}),a({type:j,payload:!0}),a({type:l,payload:e.data.username})})).catch((function(e){console.log(e),g.b.error("Incorrect Username or Password",{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},className:"signin-form",children:[Object(w.jsxs)(q.a.Group,{controlId:"username",children:[Object(w.jsx)(q.a.Label,{className:"label-username",children:"Username"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",type:"username",name:"username",value:b,placeholder:"Enter Username",onChange:function(e){return p(e.target.value)}})]}),Object(w.jsxs)(q.a.Group,{controlId:"password",children:[Object(w.jsx)(q.a.Label,{children:"Password"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",name:"password",value:h,type:"password",placeholder:"Enter Password",onChange:function(e){return f(e.target.value)}})]}),Object(w.jsx)(G.a,{variant:"success",type:"submit",className:"submit",children:"Submit"})]})]})})},J=function(){var e=Object(n.useContext)(o),t=e.state,a=e.dispatch,s=Object(x.f)(),c=t.loggedIn,r=t.token;return Object(n.useEffect)((function(){clearInterval(window.intervalId),clearInterval(window.roomIntervalId),c&&function(e){return F()({url:A+"/signout/",method:"DELETE",headers:{"x-access-token":e}})}(r).then((function(e){console.log(e),g.b.success(e.data)})).finally((function(){h.forEach((function(e){a({type:e,payload:null})}))})).finally((function(){return s.push("/")}))}),[]),c?null:Object(w.jsx)(x.a,{to:"/sign-in"})},R=function(e){e.closeModal;var t=Object(n.useContext)(o),a=t.state,s=(t.dispatch,Object(x.f)()),c=a.loggedIn,i=a.token,l=a.userName,u=Object(n.useState)(""),d=Object(r.a)(u,2),j=d[0],b=d[1],p=Object(n.useState)(""),O=Object(r.a)(p,2),m=O[0],h=O[1],f=Object(n.useState)(""),k=Object(r.a)(f,2),v=k[0],y=k[1];return c?Object(w.jsx)("div",{className:"row signin-parent-wrapper ",children:Object(w.jsxs)("div",{className:"signin-form-wrapper",children:[Object(w.jsx)("h3",{className:"signin-header3",children:"Change Password"}),Object(w.jsxs)(q.a,{className:"changePass-form",onSubmit:function(e){e.preventDefault(),function(e,t,a,n,s){return F()({url:A+"/change-password/",method:"PATCH",headers:{"x-access-token":e},data:{username:t,password:a,newPassword:n,confirmPassword:s}})}(i,l,j,m,v).then((function(e){g.b.success("Successfully changed password")})).then((function(){return s.push("/home")})).catch((function(e){h(""),b(""),g.b.error("Failed to change password")}))},children:[Object(w.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(w.jsx)(q.a.Label,{children:"Old password"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",name:"oldPassword",value:j,type:"password",placeholder:"Old Password",onChange:function(e){return b(e.target.value)}})]}),Object(w.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(w.jsx)(q.a.Label,{children:"New Password"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",name:"newPassword",value:m,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(w.jsxs)(q.a.Group,{controllId:"confirmPassword",children:[Object(w.jsx)(q.a.Label,{children:"Confirm Password"}),Object(w.jsx)(q.a.Control,{required:!0,className:"username",name:"confirmPassword",value:v,type:"password",placeholder:"Confirm Password",onChange:function(e){return y(e.target.value)}})]}),Object(w.jsx)(G.a,{variant:"success",type:"submit",className:"submit",children:"Submit"})]})]})}):Object(w.jsx)(x.a,{to:"/"})},K=a(31),W=a(565),z=a(566),B=a(343),H=(a(403),function(e){var t=e.finnhubClient,a=Object(n.useContext)(o),s=a.state,c=a.dispatch,l=(a.lists,s.currentStock,Object(n.useState)("")),u=Object(r.a)(l,2),d=(u[0],u[1],Object(n.useState)([])),j=Object(r.a)(d,2),b=j[0],O=j[1],m={option:function(e,t){return Object(i.a)(Object(i.a)({},e),{},{color:t.isSelected?"white":"grey",padding:10})},control:function(){return{width:200}},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(i.a)(Object(i.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("section",{className:"search-bar",children:Object(w.jsx)(B.a,{cacheOptions:!0,onChange:function(e){try{t.symbolSearch(e.value,(function(e,t,a){if(t){for(var n=t.result.slice(0,3),s=n.length<3?3:n.length,r=[],o=0;o<s;o++){var i=n["".concat(o)].description,l=n["".concat(o)].symbol;l.includes(".")&&(l=l.slice(0,l.indexOf("."))),r.push({value:l,name:"".concat(i)})}var u={ticker:r[0].value,name:r[1].name};return c({type:p,payload:u}),0===b.filter((function(e){return e.value===r[0].value})).length&&O([{value:r[0].value}].concat(Object(K.a)(b))),r}}))}catch(a){g.b.error("An error occured, please try again")}},options:b,getOptionValue:function(e){return e.value},getOptionLabel:function(e){return e.value},styles:m,placeholder:"Search for a stock..."})})})}),V=a(564),$=a(567),X=a(162),Q=function(e,t){return F()({method:"POST",url:A+"/user/lists",headers:{"x-access-token":e},data:{name:t}})},Y=function(e,t){return F()({method:"DELETE",url:A+"/user/lists/"+t,headers:{"x-access-token":e}})},Z=function(e){return F()({method:"GET",url:A+"/user/lists",headers:{"x-access-token":e}})},ee=function(e,t,a,n){return F()({method:"POST",url:A+"/user/stocks",headers:{"x-access-token":e},data:{name:t,ticker:a,listId:n}})},te=function(e,t,a){return F()({method:"PATCH",url:A+"/user/stocks",headers:{"x-access-token":e},data:{listId:t,stockId:a}})},ae=a(560),ne=a(341),se=a(342),ce=a(116),re=a(114),oe=a(346),ie=function(e){var t=e.stock,a=e.data,n=e.dataMin,s=e.dataMax,c=e.showOpen,r=e.percentChange,o=t.openPrice>s?1.01*t.openPrice:s;return Object(w.jsxs)(ae.a,{width:.45*window.innerWidth,height:.18*window.innerWidth,data:a,margin:{top:50,right:30,left:20,bottom:5},children:[Object(w.jsxs)("defs",{children:[Object(w.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(w.jsx)("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),Object(w.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]}),Object(w.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(w.jsx)("stop",{offset:"5%",stopColor:r>0?"#82ca9d":"#ca8282",stopOpacity:.8}),Object(w.jsx)("stop",{offset:"95%",stopColor:r>0?"#82ca9d":"#ca8282",stopOpacity:0})]})]}),Object(w.jsx)(ne.a,{dataKey:"name",name:"Time"}),Object(w.jsx)(se.a,{type:"number",domain:[n,o]}),Object(w.jsx)(ce.a,{}),Object(w.jsx)(re.a,{}),c?Object(w.jsx)(oe.a,{type:"monotone",dataKey:"open",stroke:"#8884d8",fillOpacity:0,fill:"url(#colorUv)",dot:!1,legend:!1}):"",Object(w.jsx)(oe.a,{type:"monotone",dataKey:"price",name:t.ticker,stroke:r>0?"#82ca9d":"#ca8282",fillOpacity:1,fill:"url(#colorPv)"})]})},le=function(e){var t=e.finnhubClient,a=(e.nameOfStock,Object(n.useContext)(o)),s=a.state,c=a.dispatch,l=s.currentStock,u=s.currentList,d=s.token;l||c({type:p,payload:{name:"Tesla",ticker:"TSLA"}});var j=l.name,b=l.ticker,O=Object(n.useState)(null),h=Object(r.a)(O,2),f=h[0],x=h[1],k=Object(n.useState)({}),v=Object(r.a)(k,2),y=v[0],N=v[1],S=Object(n.useState)(0),C=Object(r.a)(S,2),P=C[0],I=C[1],L=Object(n.useState)(1e3),A=Object(r.a)(L,2),D=A[0],F=A[1],M=Object(n.useState)(0),q=Object(r.a)(M,2),G=q[0],U=q[1],_=Object(n.useState)(1),J=Object(r.a)(_,2),R=J[0],W=J[1],z=Object(n.useState)(null),B=Object(r.a)(z,2),H=B[0],Q=B[1],Y=Object(n.useState)(null),te=Object(r.a)(Y,2),ae=te[0],ne=te[1],se=Object(n.useState)(1),ce=Object(r.a)(se,2),re=ce[0],oe=ce[1];Object(n.useEffect)((function(){ne(new Date),Q(new Date(Object(X.a)(ae,"yyyy.mm.dd.9:00")).getTime()/1e3),N({name:j,ticker:b,openPrice:0,currentPrice:0})}),[]),Object(n.useEffect)((function(){b&&N({name:j,ticker:b})}),[b]),Object(n.useEffect)((function(){y.ticker&&t.quote(y.ticker,(function(e,t,a){t&&N(Object(i.a)(Object(i.a)({},y),{},{openPrice:t.pc,percentChange:t.dp.toFixed(2)}))}))}),[y.ticker]),Object(n.useEffect)((function(){y.openPrice&&setTimeout((function(){return le()}),100)}),[y.openPrice]),Object(n.useEffect)((function(){y.ticker&&setTimeout((function(){return le()}),100)}),[G]),Object(n.useEffect)((function(){f&&N(Object(i.a)(Object(i.a)({},y),{},{currentPrice:f[f.length-1].price}))}),[f]);var le=function(e){t.stockCandles(y.ticker?y.ticker:e,R,H-86400*G,Math.floor((new Date).getTime()/1e3),(function(e,t,a){if(e&&g.b.error("An unexpected error occurred. Please wait a few moments then try again"),y.openPrice){var n=t.c,s=[t.t,t.c],c=[],r=0;void 0!==s[0]&&(s[0].forEach((function(e){var t={name:Object(X.a)(new Date(1e3*e),"m/d/yy, h:MM"),price:s[1][r].toFixed(2),open:y.openPrice};r++,c.push(t)})),I(Math.min.apply(Math,Object(K.a)(n))),F(Math.max.apply(Math,Object(K.a)(n))),x(c))}}))},ue=function(e){parseInt(e.target.id)?U(parseInt(e.target.id)):U(e.target.id),0==e.target.id&&ae-H<=14400||0==e.target.id&&ae-H>14400?(W(1),oe(1)):e.target.id>0&&e.target.id<=7?(W(30),oe(0)):(e.target.id>7&&e.target.id,W(60),oe(0))},de=function(){var e=Object(T.a)(E.a.mark((function e(t){var a,n,s,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(d);case 2:if(a=e.sent,!(n=a.data.lists.filter((function(e){return e.name===u.name&&e.id})))){e.next=18;break}return e.next=7,ee(d,l.name,l.ticker,n[0].id);case 7:if("Stock is already in list"!==(s=e.sent).data){e.next=12;break}g.b.error(s.data),e.next=18;break;case 12:return e.next=14,Z(d);case 14:r=e.sent,o=r.data.lists.filter((function(e){return e.name===u.name&&e.id})),c({type:m,payload:o[0]}),g.b.success("Stock successfully added to list");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{className:"stock-name",children:j+" ("+b+")"}),Object(w.jsx)("h3",{className:"stock-price",children:"$"+y.currentPrice}),Object(w.jsxs)("span",{className:"stock-price-and-button",onClick:de,children:[Object(w.jsx)("h5",{className:"stock-percent-change",children:y.percentChange>0?"+"+y.percentChange+"% today":y.percentChange+"% today"}),Object(w.jsx)($.a,{placement:"top",delay:{show:25},overlay:function(e){var t=u?"Add to "+u.name:"Create a list!";return Object(w.jsx)(V.a,Object(i.a)(Object(i.a)({id:"button-tooltip"},e),{},{children:Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("span",{children:t})})}))}(),children:Object(w.jsx)("button",{className:"stock-add-button",children:Object(w.jsx)("img",{className:"stock-add-to-list",src:"https://icongr.am/clarity/add-text.svg?size=24"})})})]}),Object(w.jsx)("div",{className:"graph-wrapper",children:y.openPrice?Object(w.jsx)(ie,{data:f,stock:y,dataMin:P,dataMax:D,showOpen:re,percentChange:y.percentChange}):""}),Object(w.jsxs)("section",{className:"date-range-wrapper",children:[Object(w.jsx)("button",{className:"date-range-button",id:"0",onClick:ue,children:"1D"}),Object(w.jsx)("button",{className:"date-range-button",id:"7",onClick:ue,children:"1W"}),Object(w.jsx)("button",{className:"date-range-button",id:"14",onClick:ue,children:"2W"}),Object(w.jsx)("button",{className:"date-range-button",id:"30",onClick:ue,children:"1M"})]})]})},ue=function(e){var t=e.finnhubClient,a=Object(n.useContext)(o),s=a.state,c=a.dispatch,i=(s.loggedIn,s.token),l=s.lists,u=s.currentList,d=Object(n.useState)(null),j=Object(r.a)(d,2),b=j[0],O=j[1],h=Object(n.useState)({}),f=Object(r.a)(h,2),x=f[0],k=(f[1],Object(n.useState)({})),v=Object(r.a)(k,2),y=v[0],N=(v[1],Object(n.useState)([])),S=Object(r.a)(N,2),C=S[0],P=S[1],I=function(e,t){e.send(JSON.stringify({type:"unsubscribe",symbol:"AAPL"})),e.send(JSON.stringify({type:"unsubscribe",symbol:"TSLA"})),e.send(JSON.stringify({type:"unsubscribe",symbol:"MSFT"}))};Object(n.useEffect)(Object(T.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new WebSocket("wss://ws.finnhub.io?token=c7spe0qad3i9jn7rivng"),console.log(t),t.addEventListener("open",(function(e){setTimeout((function(){return t.send(JSON.stringify({type:"subscribe",symbol:"AAPL"}))}),100),setTimeout((function(){return t.send(JSON.stringify({type:"subscribe",symbol:"TSLA"}))}),100),setTimeout((function(){return t.send(JSON.stringify({type:"subscribe",symbol:"MSFT"}))}),100)})),t.addEventListener("message",(function(e){O(JSON.parse(e.data).data)})),e.abrupt("return",(function(){I(t)}));case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){}),[b]),Object(n.useEffect)(Object(T.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)}))),[l]),Object(n.useEffect)((function(){u&&u&&u.stocks&&(u.stocks.length?(P(u.stocks),u.stocks.map((function(e){t.quote(e.ticker,(function(t,a,n){if(a){e.ticker;var s=a.c.toFixed(2),c=a.dp.toFixed(2);x["".concat(e.ticker)]=s,y["".concat(e.ticker)]=c}}))}))):P(u.stocks))}),[u]);var L=function(e){if(l){var t=C.filter((function(t){return t.ticker==e.target.id}))[0];c({type:p,payload:t})}},A=function(){var e=Object(T.a)(E.a.mark((function e(t){var a,n,s,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(i);case 2:return a=e.sent,e.next=5,a.data.lists.filter((function(e){return e.name===u.name&&e.id}));case 5:return n=e.sent,e.next=8,u.stocks.filter((function(e){return e.ticker===t.target.value&&e.id}));case 8:if(s=e.sent,!n[0]||!s[0]){e.next=13;break}return e.next=12,te(i,n[0].id,s[0].id);case 12:e.sent;case 13:return e.next=15,Z(i);case 15:r=e.sent,o=r.data.lists.filter((function(e){return e.name===u.name&&e.id})),c({type:m,payload:o[0]}),g.b.success("Successfully deleted stock from list");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("section",{className:"stock-bar-wrapper",children:Object(w.jsx)("section",{className:"stock-bar-box",children:u?C.length?C.map((function(e){return Object(w.jsxs)("span",{className:"stock-bar-stock",children:[Object(w.jsx)("button",{className:"stock-bar-delete-stock",onClick:A,value:e.ticker,children:"X"}),Object(w.jsx)("h3",{className:"stock-bar-ticker",children:Object(w.jsx)("button",{className:"clickable",id:e.ticker,onClick:L,children:e.ticker})}),Object(w.jsxs)("div",{className:"stock-bar-price-pc-box",children:[Object(w.jsx)("h6",{className:"stock-bar-pc",children:y["".concat(e.ticker)]>0?"+"+y["".concat(e.ticker)]+"%":y["".concat(e.ticker)]+"%"}),Object(w.jsx)("h5",{className:"stock-bar-price",children:"$"+x["".concat(e.ticker)]})]})]},e.ticker)})):Object(w.jsx)("span",{className:"stock-bar-message",children:Object(w.jsx)("p",{children:"Add stocks!"})}):Object(w.jsx)("span",{className:"stock-bar-message",children:Object(w.jsx)("p",{children:"Add stocks to a list to get started!"})})})})})},de=function(){var e=Object(n.useContext)(o),t=e.state,a=e.dispatch,s=(t.loggedIn,t.token),c=t.lists,i=(t.currentList,Object(n.useState)(!1)),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),p=b[0],h=b[1];Object(n.useEffect)(Object(T.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)}))),[c]);var f=function(){var e=Object(T.a)(E.a.mark((function e(t){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(s);case 2:n=e.sent,c=n.data.lists.filter((function(e){return e.name===t.target.value&&e.id})),a({type:m,payload:c[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(T.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Q(s,p);case 3:if("List already exists"!==(n=e.sent).data){e.next=6;break}return e.abrupt("return",g.b.error(n.data));case 6:a({type:O,payload:n.data.lists}),h(""),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(T.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(s,t);case 2:return e.sent,e.next=5,Z(s);case 5:n=e.sent,a({type:O,payload:n.data.lists}),n.data.lists.length>1?a({type:m,payload:n.data.lists[n.data.lists.length-1]}):a({type:m,payload:null}),g.b.success("List deleted successfully");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[u?Object(w.jsxs)("form",{onSubmit:x,className:"create-list-form",children:[Object(w.jsx)("input",{value:p,onChange:function(e){h(e.target.value)},className:"create-list-input",placeholder:"Enter list name..."}),Object(w.jsx)("button",{onClick:x,className:"create-list",children:Object(w.jsx)("img",{src:"https://icongr.am/clarity/add.svg?size=16"})})]}):"",Object(w.jsxs)(W.a,{className:"stock-nav-wrapper",children:[Object(w.jsxs)("span",{className:"stock-nav-list-header-wrapper",children:[Object(w.jsx)("h2",{className:"stock-nav-list-header",children:"Lists"}),Object(w.jsx)("button",{className:"clickable-plus",onClick:function(e){d(!u)},children:u?Object(w.jsx)("img",{className:"stock-nav-add",src:"https://icongr.am/clarity/minus.svg?size=24"}):Object(w.jsx)("img",{className:"stock-nav-add",src:"https://icongr.am/clarity/add.svg?size=24"})})]}),c?c.map((function(e){return Object(w.jsxs)("h3",{className:"stock-list-name",children:[Object(w.jsx)("button",{className:"clickable",onClick:f,value:e.name,children:e.name}),Object(w.jsx)("button",{className:"delete-list-wrapper",onClick:function(){return k(e.name)},children:Object(w.jsx)("img",{className:"delete-list",src:"https://icongr.am/fontawesome/trash-o.svg?size=18"})})]},e.name)})):""]})]})},je=a(536);je.ApiClient.instance.authentications.api_key.apiKey="c7spe0qad3i9jn7rivng";var be=new je.DefaultApi,pe=function(){var e=Object(n.useContext)(o),t=e.state,a=e.dispatch,s=t.loggedIn,c=t.token,r=t.lists,i=t.currentList;return Object(n.useEffect)(Object(T.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=8;break}return e.next=3,Z(c);case 3:return t=e.sent,e.next=6,t.data.lists.map((function(e){return{name:e.name,stocks:Object(K.a)(e.stocks)}}));case 6:n=e.sent,a({type:O,payload:n});case 8:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)((function(){r&&(i||a({type:m,payload:r[0]}))}),[r]),s?Object(w.jsxs)(W.a,{fluid:!0,children:[Object(w.jsx)(z.a,{children:Object(w.jsx)(ue,{className:"stock-bar",finnhubClient:be})}),Object(w.jsx)(z.a,{className:"graph-content",children:Object(w.jsxs)("div",{className:"graph-content-wrapper",children:[Object(w.jsx)("div",{className:"get-data-col",children:Object(w.jsx)(le,{finnhubClient:be})}),Object(w.jsxs)("div",{className:"stock-nav-col",children:[Object(w.jsx)(H,{className:"search-bar",finnhubClient:be}),Object(w.jsx)(de,{className:"stock-nav"})]})]})})]}):""},Oe={loggedIn:!1,userId:null,userName:null,token:null,currentStock:{name:"Tesla",ticker:"TSLA"},lists:null,currentList:null},me=function(){var e=Object(n.useReducer)(f,Oe),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(w.jsxs)(o.Provider,{value:{state:a,dispatch:s},children:[Object(w.jsx)(g.a,{position:"bottom-right",autoClose:1e3,hideProgressBar:!0}),Object(w.jsx)(C,{}),Object(w.jsxs)("main",{className:"container-fluid",children:[Object(w.jsx)(x.b,{path:"/sign-up",component:U}),Object(w.jsx)(x.b,{path:"/sign-in",component:_}),Object(w.jsx)(x.b,{path:"/sign-out",component:J}),Object(w.jsx)(x.b,{path:"/change-password",component:R}),Object(w.jsx)(x.b,{path:"/home",component:pe})]})]})},he=Object(w.jsx)(y.a,{basename:"/bankroll",children:Object(w.jsx)(me,{})});c.a.render(he,document.getElementById("root"))}},[[553,1,2]]]);
//# sourceMappingURL=main.056701cb.chunk.js.map