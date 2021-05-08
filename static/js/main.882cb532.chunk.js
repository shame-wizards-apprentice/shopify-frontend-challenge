(this["webpackJsonpshopify-frontend-challenge"]=this["webpackJsonpshopify-frontend-challenge"]||[]).push([[0],{71:function(t,e,a){},72:function(t,e,a){},93:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(13),c=a.n(r),i=a(18),s=(a(71),a(5)),l=a(125),d=(a(72),a(41)),b={nominations:[]},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_NOMINATIONS":return Object(s.a)({},e.payload);default:return t}},g={results:[]},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SEARCH_MOVIES":return Object(s.a)({},e.payload);default:return t}},h={mode:"Light"},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SWITCH_MODE":return Object(s.a)({},e.payload);default:return t}},O=Object(d.a)({nomination:m,result:u,mode:j}),x=Object(d.b)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=a(33),f=a(32),v=a(117),y=a(129),S=a(127),N=a(118),T=a(126),k=a(52),I=a.n(k),w={searchByTitle:function(t){return I.a.get("".concat("http://www.omdbapi.com/?s=").concat(t).concat("&apikey=6dfb3408"))}},A=a(2),C=function(t){return Object(A.jsx)(T.a,Object(s.a)({elevation:6,variant:"filled"},t))},D=Object(v.a)((function(t){return{form:{marginBottom:"5vh",marginLeft:"5vw",marginTop:"5vh"},searchBar:{width:"90vw",border:"1px solid black",borderRadius:"5px",padding:"5px",backgroundColor:"rgba(212, 211, 221, .3)",marginBottom:"2vh"},button:{width:"5vw",backgroundColor:"rgba(212, 211, 221, .8)",color:"rgba(0,0,0,.8)",height:"20px"},text:{color:"rgba(0,0,0,.8)",textAlign:"center"}}})),E=function(t){var e=D(),a=Object(o.useState)({search:""}),n=Object(f.a)(a,2),r=n[0],c=n[1],i=Object(o.useState)(!1),l=Object(f.a)(i,2),d=l[0],b=l[1],m=function(t,e){"clickaway"!==e&&b(!1)},g=function(t){t.preventDefault(),w.searchByTitle(r.search).then((function(t){"False"===t.data.Response?b(!0):(x.dispatch({type:"SEARCH_MOVIES",payload:Object(s.a)(Object(s.a)({},x.getState().result),{},{results:t.data.Search})}),localStorage.setItem("searchResults",JSON.stringify(t.data.Search)))}))};return Object(A.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:g,className:e.form,children:[Object(A.jsx)(y.a,{open:d,autoHideDuration:6e3,onClose:m,children:Object(A.jsx)(C,{onClose:m,severity:"error",children:"Oops! We couldn't find what you're looking for. Try again!"})}),Object(A.jsx)("h1",{className:"".concat(e.text," result-text"),children:"Search for a movie"}),Object(A.jsx)(S.a,{id:"outlined-basic",placeholder:"Search",variant:"outlined",name:"search",onChange:function(t){var e=t.target,a=e.name,o=e.value;c(Object(s.a)(Object(s.a)({},r),{},Object(p.a)({},a,o)))},className:"".concat(e.searchBar," search-bar")}),Object(A.jsx)("br",{}),Object(A.jsx)(N.a,{variant:"contained",onClick:g,className:e.button,id:"submit-button",children:"Submit"})]})},H=a(119),_=a(120),W=a(128),L=a(121),M=a(122),R=a(123),q=a(124),B=Object(v.a)((function(t){return{root:{minWidth:"10vw",minHeight:"30vh",maxWidth:"30vw",maxHeight:"30vh",boxShadow:"0 8px 16px 0",backgroundColor:"rgba(212, 211, 221, .7)"},content:{minWidth:"100%",minHeight:"100%",maxWidth:"50px",maxHeight:"50px",paddingTop:"5px"},media:{maxWidth:"100%",minHeight:"150px",maxHeight:"150px",minWidth:"100%",marginRight:t.spacing(-1)},text:{fontSize:".9em",margin:"0px",fontWeight:"bold",color:"rgba(0,0,0,.8)"},button:{margin:t.spacing(-1),fontSize:".9em",height:"2vh",color:"rgba(0,0,0,.8)"}}})),P=function(t){return Object(A.jsx)(T.a,Object(s.a)({elevation:6,variant:"filled"},t))},F=function(t){var e=B(),a=Object(o.useState)(!1),n=Object(f.a)(a,2),r=n[0],c=n[1],i=function(t,e){"clickaway"!==e&&c(!1)};return Object(A.jsxs)("div",{children:[Object(A.jsx)(y.a,{open:r,autoHideDuration:6e3,onClose:i,children:Object(A.jsx)(P,{onClose:i,severity:"error",children:"Oops! You have too many nominations! Remove one, or clear them all to nominate new movies."})}),Object(A.jsxs)(H.a,{"data-key":t.id,className:"".concat(e.root," result-card"),children:[Object(A.jsxs)(_.a,{children:[Object(A.jsx)(W.a,{title:t.longTitle,children:Object(A.jsx)(L.a,{className:e.media,image:t.Poster,title:t.Title})}),Object(A.jsxs)(M.a,{className:e.content,children:[Object(A.jsx)(R.a,{className:"".concat(e.text," result-text"),children:t.Title}),Object(A.jsx)(R.a,{className:"".concat(e.text," result-text"),children:t.Year})]})]}),Object(A.jsx)(q.a,{children:-1===x.getState().nomination.nominations.indexOf(t)?Object(A.jsx)(N.a,{size:"small",color:"primary",onClick:function(){var e=x.getState().nomination.nominations;if(e.length>=5)c(!0);else if(-1===e.indexOf(t)){var a=e.concat(t);x.dispatch({type:"CHANGE_NOMINATIONS",payload:Object(s.a)(Object(s.a)({},x.getState().nomination),{},{nominations:a})}),localStorage.setItem("nominations",JSON.stringify(a))}},className:"".concat(e.button," result-text"),children:"Nominate"}):Object(A.jsx)(N.a,{variant:"contained",disabled:!0,className:"".concat(e.button," result-text"),children:"Already nominated"})})]})]})},Y=a.p+"static/media/no-img.67f4402d.png",z=Object(v.a)({results:{marginLeft:"5vw",marginRight:"5vw",marginTop:"5vh",marginBottom:"5vh"}}),J=Object(i.b)((function(t){return Object(s.a)({},t.result)}))((function(t){var e=z();return Object(A.jsx)("div",{className:e.results,children:Object(A.jsx)(l.a,{container:!0,spacing:2,children:t.results.map((function(t){return Object(A.jsx)(l.a,{item:!0,xs:2,children:Object(A.jsx)(F,{longTitle:t.Title,Title:t.Title.length>20?"".concat(t.Title.slice(0,20),"..."):t.Title,Year:t.Year,Poster:"N/A"===t.Poster?"".concat(Y):t.Poster,id:t.imdbID},t.imdbID)})}))})})})),V=Object(v.a)((function(t){return{root:{minWidth:"10vw",minHeight:"30vh",maxWidth:"30vw",maxHeight:"30vh",boxShadow:"0 8px 16px 0",backgroundColor:"rgba(212, 211, 221, .7)"},content:{minWidth:"100%",minHeight:"100%",maxWidth:"50px",maxHeight:"50px",paddingTop:"5px"},media:{maxWidth:"100%",minHeight:"150px",maxHeight:"150px",minWidth:"100%",marginRight:t.spacing(-1)},text:{fontSize:".9em",margin:"0px",fontWeight:"bold",color:"rgba(0,0,0,.8)"},button:{margin:t.spacing(-1),fontSize:".9em",height:"2vh",color:"rgba(0,0,0,.8)"}}})),G=function(t){var e=V();return Object(A.jsxs)(H.a,{"data-key":t.id,className:"".concat(e.root," result-card"),children:[Object(A.jsxs)(_.a,{children:[Object(A.jsx)(L.a,{className:e.media,image:t.Poster,title:t.Title}),Object(A.jsx)(W.a,{title:t.longTitle,children:Object(A.jsxs)(M.a,{className:e.content,children:[Object(A.jsx)(R.a,{className:"".concat(e.text," result-text"),children:t.Title}),Object(A.jsx)(R.a,{className:"".concat(e.text," result-text"),children:t.Year})]})})]}),Object(A.jsx)(q.a,{children:Object(A.jsx)(N.a,{size:"small",color:"primary",onClick:function(){var e=x.getState().nomination.nominations.filter((function(e){return e.Poster!==t.Poster}));x.dispatch({type:"CHANGE_NOMINATIONS",payload:Object(s.a)(Object(s.a)({},x.getState().nomination),{},{nominations:e})}),localStorage.setItem("nominations",JSON.stringify(e))},className:"".concat(e.button," result-text"),children:"Remove"})})]})},X=Object(v.a)({nominations:{marginLeft:"25vw"},text:{color:"rgba(0,0,0,.8)",textAlign:"center"},button:{backgroundColor:"rgba(212, 211, 221, .8)",color:"rgba(0,0,0,.8)",height:"30px",marginTop:"2vh",marginLeft:"2vw"}}),U=Object(i.b)((function(t){return Object(s.a)({},t.nomination)}))((function(t){var e=X();return Object(A.jsxs)("div",{className:e.nominations,children:[Object(A.jsx)("h1",{className:"".concat(e.text," result-text"),children:t.nominations.length?"You have nominated the following movies for awards!":"You have not nominated any movies for awards yet!"}),Object(A.jsx)(l.a,{container:!0,spacing:2,justify:"space-evenly",children:t.nominations.map((function(t){return Object(A.jsx)(l.a,{item:!0,xs:2,children:Object(A.jsx)(G,{longTitle:t.Title,Title:t.Title.length>20?"".concat(t.Title.slice(0,20),"..."):t.Title,Year:t.Year,Poster:"N/A"===t.Poster?"".concat(Y):t.Poster,id:t.imdbID},t.imdbID)})}))}),t.nominations.length?Object(A.jsx)(N.a,{variant:"contained",onClick:function(){x.dispatch({type:"CHANGE_NOMINATIONS",payload:Object(s.a)(Object(s.a)({},x.getState().nomination),{},{nominations:[]})}),localStorage.setItem("nominations",JSON.stringify([]))},className:e.button,id:"clear-button",children:"Clear All Nominations"}):Object(A.jsx)("div",{id:"clear-button"})]})})),K=a.p+"static/media/dark.2a778799.png",Q=a.p+"static/media/light.7b519480.png",Z=a.p+"static/media/bg-dark.e9ca304a.png",$=a.p+"static/media/bg-light.bfc08df5.png",tt=Object(v.a)((function(){return{image:{height:"10vh"},button:{backgroundColor:"rgba(255, 255, 255, 0)",border:"none",marginLeft:"1vw",marginTop:"2vh",zIndex:"100"}}})),et=Object(i.b)((function(t){return Object(s.a)({},t.mode)}))((function(t){var e=tt();return Object(A.jsx)("div",{children:Object(A.jsx)(W.a,{title:"Light"===t.mode?"Dark Mode":"Light Mode",children:Object(A.jsx)("button",{onClick:function(){var t=x.getState().mode.mode,e=document.querySelectorAll(".result-card"),a=document.querySelectorAll(".result-text"),o=function(){document.querySelector("body").setAttribute("style","background-image: url("+"".concat($)+")"),document.querySelector("#hero-image").setAttribute("style","linear-gradient(to bottom, #D4D3DD, #EFEFBB, rgba(0, 0, 0, 0))"),document.querySelector("#hero-text").setAttribute("style","color: rgba(0,0,0,.8)"),document.querySelector("#submit-button").setAttribute("style","background-color: rgba(212, 211, 221, .8); color: rgba(0,0,0,.8)"),document.querySelector("#clear-button").setAttribute("style","background-color: rgba(212, 211, 221, .8); color: rgba(0,0,0,.8)"),document.querySelector(".search-bar").setAttribute("style","background-color: rgba(212, 211, 221, .7); color: rgba(0,0,0,.8)");for(var t=0;t<e.length;t++)e[t].setAttribute("style","background-color: rgba(212, 211, 221, .7)");for(var o=0;o<a.length;o++)a[o].setAttribute("style","color: color: rgba(0,0,0,.8)")};switch(t){case"Light":!function(){document.querySelector("body").setAttribute("style","background-image: url("+"".concat(Z)+")"),document.querySelector("#hero-image").setAttribute("style","background-image: linear-gradient(to bottom, #000000, #434343, rgba(0, 0, 0, 0))"),document.querySelector("#hero-text").setAttribute("style","color: rgba(255, 255, 255, .8)"),document.querySelector("#submit-button").setAttribute("style","background-color: #434343; color: rgba(255, 255, 255, .8)"),document.querySelector("#clear-button").setAttribute("style","background-color: #434343; color: rgba(255, 255, 255, .8)"),document.querySelector(".search-bar").setAttribute("style","background-color: rgba(67, 67, 67, .3); color: rgba(255, 255, 255, .8)");for(var t=0;t<e.length;t++)e[t].setAttribute("style","background-color: rgba(67, 67, 67, 1)");for(var o=0;o<a.length;o++)a[o].setAttribute("style","color: rgba(255, 255, 255, .8)")}(),x.dispatch({type:"SWITCH_MODE",payload:Object(s.a)(Object(s.a)({},x.getState().mode),{},{mode:"Dark"})}),localStorage.setItem("mode","Dark");break;case"Dark":o(),x.dispatch({type:"SWITCH_MODE",payload:Object(s.a)(Object(s.a)({},x.getState().mode),{},{mode:"Light"})}),localStorage.setItem("mode","Light");break;default:o(),x.dispatch({type:"SWITCH_MODE",payload:Object(s.a)(Object(s.a)({},x.getState().mode),{},{mode:"Light"})}),localStorage.setItem("mode","Light")}},className:e.button,children:Object(A.jsx)("img",{src:"Light"===t.mode?"".concat(K):"".concat(Q),alt:"Light"===t.mode?"Dark Mode":"Light Mode",className:e.image})})})})})),at=Object(v.a)({heroImage:{backgroundImage:"linear-gradient(to bottom, #D4D3DD, #EFEFBB, rgba(0, 0, 0, 0))",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",height:"40vh",width:"110vw"},heroText:{textAlign:"center",position:"absolute",top:"50%",left:"50%",color:"rgba(0,0,0,.8)",transform:"translate(-50%, -75%)"}}),ot=function(){var t=at();return Object(A.jsxs)("div",{className:t.heroImage,id:"hero-image",children:[Object(A.jsx)(et,{}),Object(A.jsxs)("div",{className:t.heroText,id:"hero-text",children:[Object(A.jsx)("h1",{children:"Welcome to your movie dashboard!"}),Object(A.jsx)("h3",{children:"Browse movies and nominate up to 5 favorites for awards!"})]})]})};var nt=function(){return Object(o.useEffect)((function(){localStorage.getItem("searchResults")&&x.dispatch({type:"SEARCH_MOVIES",payload:Object(s.a)(Object(s.a)({},x.getState().result),{},{results:JSON.parse(localStorage.getItem("searchResults"))})}),localStorage.getItem("nominations")&&x.dispatch({type:"CHANGE_NOMINATIONS",payload:Object(s.a)(Object(s.a)({},x.getState().nomination),{},{nominations:JSON.parse(localStorage.getItem("nominations"))})}),localStorage.getItem("mode")&&x.dispatch({type:"SWITCH_MODE",payload:Object(s.a)(Object(s.a)({},x.getState().mode),{},{mode:localStorage.getItem("mode")})})})),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(l.a,{container:!0,spacing:3,children:Object(A.jsx)(ot,{})}),Object(A.jsx)(l.a,{container:!0,spacing:3,children:Object(A.jsx)(U,{})}),Object(A.jsx)(l.a,{container:!0,spacing:3,children:Object(A.jsx)(E,{})}),Object(A.jsx)(l.a,{container:!0,spacing:3,children:Object(A.jsx)(J,{})})]})},rt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(e){var a=e.getCLS,o=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),o(t),n(t),r(t),c(t)}))};c.a.render(Object(A.jsx)(i.a,{store:x,children:Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(nt,{})})}),document.getElementById("root")),rt()}},[[93,1,2]]]);
//# sourceMappingURL=main.882cb532.chunk.js.map