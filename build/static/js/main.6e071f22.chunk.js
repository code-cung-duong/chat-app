(this["webpackJsonpchat-app-basic"]=this["webpackJsonpchat-app-basic"]||[]).push([[0],{279:function(e,t,n){},471:function(e,t,n){},472:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),o=n(43),a=n.n(o),r=n(202),s=n(44),l=(n(279),n(478)),d=n(479),u=n(12),b=n(8),p=n(27),j=n(492),h=n(493),m=n(494),x=n(495),f=n(496),O=n(497),v=n(498),g=n(482),y=n(483),w=n(486),S=n(89),N=n(490),C=n(97),I=n.n(C),k=n(257),R=n(151),F=n.n(R),V=n(28),M=n(4),A=n(122);n(286),n(287),n(288);A.a.initializeApp({apiKey:"AIzaSyCT6UcJ1fSROa6XrtINMkdxatAgSt5LU_s",authDomain:"huong-min-hoho.firebaseapp.com",databaseURL:"https://huong-min-hoho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"huong-min-hoho",storageBucket:"huong-min-hoho.appspot.com",messagingSenderId:"316009393400",appId:"1:316009393400:web:78f2cbbdf6477d8b0b5f0d",measurementId:"G-BGSGYFGCHJ"}),A.a.analytics();var U=A.a.auth(),z=A.a.firestore();n(289);var T=A.a,L=function(e,t){var n=Object(i.useState)([]),c=Object(b.a)(n,2),o=c[0],a=c[1];return Object(i.useEffect)((function(){var n=z.collection(e).orderBy("createAt");if("users"===e&&(n=z.collection(e).orderBy("status","asc")),t){if(!t.compareValue||!t.compareValue.length)return void a([]);n=n.where(t.fieldName,t.operator,t.compareValue)}return n.onSnapshot((function(e){var t=e.docs.map((function(e){return Object(M.a)(Object(M.a)({},e.data()),{},{id:e.id})}));a(t)}))}),[e,t]),o},E=n(475),_=n(3),B=c.a.createContext();var D=function(e){var t=e.children,n=Object(i.useState)({}),c=Object(b.a)(n,2),o=c[0],a=c[1],r=Object(i.useState)(!0),l=Object(b.a)(r,2),d=l[0],u=l[1],p=Object(s.f)();return Object(i.useEffect)((function(){var e=U.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.email,i=e.uid,c=e.phoneNumber,o=e.photoURL,r=e.countNotify,s=e.status,l=e.last_changed;return a({displayName:t,email:n,uid:i,phoneNumber:c,photoURL:o,countNotify:r,status:s,last_changed:l}),u(!1),p.push("/"),void(document.title="Fake Messenger")}a({}),u(!1),p.push("/login"),document.title="Fake Messenger - \u0110\u0103ng nh\u1eadp"}));return function(){e()}}),[p]),Object(_.jsxs)(B.Provider,{value:{user:o,setUser:a},children:[d?Object(_.jsx)(E.a,{style:{fontSize:"20pt",position:"fixed",top:"50%",left:"50%"}}):t," "]})},P=c.a.createContext();var G,q,H=function(e){var t=e.children,n=Object(i.useState)(!1),c=Object(b.a)(n,2),o=c[0],a=c[1],r=Object(i.useState)(!1),s=Object(b.a)(r,2),l=s[0],d=s[1],u=Object(i.useState)(""),p=Object(b.a)(u,2),j=p[0],h=p[1],m=Object(i.useState)(!1),x=Object(b.a)(m,2),f=x[0],O=x[1],v=Object(i.useState)(!1),g=Object(b.a)(v,2),y=g[0],w=g[1],S=Object(i.useState)(!0),N=Object(b.a)(S,2),C=N[0],I=N[1],k=Object(i.useContext)(B).user.uid,R=Object(i.useMemo)((function(){return{fieldName:"members",operator:"array-contains",compareValue:k}}),[k]),F=L("rooms",R),V=Object(i.useMemo)((function(){return Array.from(F).find((function(e){return e.id===j}))||{}}),[F,j]),M=Object(i.useMemo)((function(){return{fieldName:"uid",operator:"in",compareValue:V.members}}),[V.members]),A=L("users",M);return Object(_.jsxs)(P.Provider,{value:{rooms:F,isAddRoomVisible:o,setIsAddRoomVisible:a,selectedRoomId:j,setSelectedRoomId:h,selectedRoom:V,members:A,isInviteMemberVisible:f,setIsInviteMemberVisible:O,clearState:function(){h(""),a(!1),O(!1),setInterval((function(){window.location.reload()}),50)},isShowMembersVisible:l,setIsShowMembersVisible:d,isEditRoomVisible:y,setIsEditRoomVisible:w,isPopup:C,setIsPopup:I},children:[t," "]})},K=function(e,t){z.collection(e).add(Object(M.a)(Object(M.a)({},t),{},{createAt:T.firestore.FieldValue.serverTimestamp()}))},J=function(e,t){z.collection(e).doc(t.uid).set(Object(M.a)(Object(M.a)({},t),{},{createAt:T.firestore.FieldValue.serverTimestamp()}))},Z=function(e){for(var t=e.split(" ").filter((function(e){return e})),n=t.length,i=[],c=[],o=[],a=0;a<n;a++)i[a]=!1;!function e(a){for(var r=0;r<n;r++)i[r]||(i[r]=!0,c[a]=t[r],a===n-1&&o.push(c.join(" ")),e(a+1),i[r]=!1)}(0);var r=o.reduce((function(e,t){var n=function(e){var t=[],n="";return e.split("").forEach((function(e){n+=e,t.push(n)})),t}(t);return[].concat(Object(u.a)(e),Object(u.a)(n))}),[]);return r.push("*"),r},W=n(69),X=n(481),Y=n(480),Q=n(489),$=V.a.div(G||(G=Object(p.a)(["\n  margin-bottom: 17px;\n  margin-left: 9px;\n  display: flex;\n  width: 99%;\n  justify-content:flex-end;\n  position: relative;\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: #a7a7a7;\n  }\n\n  .content {\n    overflow-y: visible;\n    color: #fff;\n    max-width: 400px;\n    min-width: 20px;\n    word-wrap:break-word;\n    font-size: 15px;\n    text-align: justify;\n  }\n\n  .ant-tooltip-inner{\n      magrin-left: -20px;\n  }\n\n  .ant-avatar{\n      margin: 1px;\n  }\n"]))),ee=V.a.div(q||(q=Object(p.a)(["\n    max-width: 800px;\n    background-color: #0099ff;\n    border: 1px solid #ddd;\n    border-radius: 30px;\n    padding: 3px 18px 5px 18px;\n    min-width: 40px;\n    text-align: justify;\n    margin-right : 13px\n"])));function te(e){var t="";return e&&(t=(t=Object(Y.a)(new Date(1e3*e),new Date,{locale:Q.a})).charAt(0).toUpperCase()+t.slice(1)),t}var ne,ie,ce,oe=function(e){var t=e.text,n=e.createdAt;return Object(_.jsx)($,{children:Object(_.jsx)(ee,{children:Object(_.jsx)(W.a,{placement:"left",title:te(null===n||void 0===n?void 0:n.seconds),children:Object(_.jsx)(X.a.Text,{className:"content",children:t})})})})},ae=n(81),re=n.n(ae),se=V.a.div(ne||(ne=Object(p.a)(["\n  margin-bottom: 17px;\n  margin-left: 5px;\n  display: flex;\n  width: 900px;\n  justify-content:flex-start;\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: #a7a7a7;\n  }\n\n  .content {  \n    overflow-y: visible;\n    color: #123;\n    max-width: 400px;\n    min-width: 20px;\n    word-wrap:break-word;\n    font-size: 15px;\n    text-align: justify;\n  }\n"]))),le=V.a.div(ie||(ie=Object(p.a)(["\n  magrin: 5px;\n  padding-right: 15px;\n"]))),de=V.a.div(ce||(ce=Object(p.a)(["\n    max-width: 800px;\n    background-color: rgb(228 230 235);\n    border: 1px solid #ddd;\n    border-radius: 30px;\n    padding: 3px 18px 5px 18px;\n    min-width: 40px;\n    text-align: justify;\n"])));function ue(e){var t="";return e&&(t=(t=Object(Y.a)(new Date(1e3*e),new Date,{locale:Q.a})).charAt(0).toUpperCase()+t.slice(1)),t}var be,pe,je=function(e){var t=e.text,n=e.photoURL,i=e.displayName,c=e.createdAt;return Object(_.jsxs)(se,{children:[Object(_.jsx)(le,{children:Object(_.jsx)(W.a,{title:i,placement:"left",children:Object(_.jsxs)(re.a,{size:"default",src:n,children:[n?"":i.charAt(0)," "]})})}),Object(_.jsx)(de,{children:Object(_.jsx)(W.a,{placement:"left",style:{marginLeft:"10px"},title:ue(null===c||void 0===c?void 0:c.seconds),children:Object(_.jsx)(X.a.Text,{className:"content",children:t})})})]})},he=n(491),me=n(476);function xe(){var e=Object(i.useContext)(P),t=e.selectedRoom,n=e.selectedRoomId,c=e.setSelectedRoomId,o=Object(i.useContext)(B).user.uid,a=Object(i.useCallback)((function(){c(""),z.collection("rooms").doc(n).update({members:t.members.filter((function(e){return e!==o}))})}),[n,o]);return Object(_.jsx)(me.a,{placement:"left",title:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n r\u1eddi nh\xf3m ch\u1ee9 ?",onConfirm:a,okText:"C\xf3",cancelText:"Kh\xf4ng",children:Object(_.jsx)(y.a.Item,{icon:Object(_.jsx)(he.a,{}),children:"R\u1eddi kh\u1ecfi nh\xf3m"},"4")})}var fe,Oe,ve,ge,ye,we,Se=V.a.span(be||(be=Object(p.a)(["\n    font-size: 13px;\n    width: 13px;\n    line-height: 13px;\n    height: 17px;\n    user-select: none;\n"]))),Ne=V.a.div(pe||(pe=Object(p.a)(["\n    float: right;\n    margin-top: -20px;\n\n    .ant-avatar-string{\n        line-height: 13px;\n    }\n\n\n"])));function Ce(e){var t="";return e&&(t=Object(Y.a)(new Date(1e3*e),new Date,{locale:Q.a})),t}function Ie(e){var t=e.users;return Object(_.jsxs)(Ne,{children:[" ",t.map((function(e){return Object(_.jsx)(W.a,{title:e.displayName+" \u0111\xe3 xem "+Ce(e.timeSeen.seconds),placement:"left",children:Object(_.jsx)(re.a,{src:e.photoURL,style:{margin:"2px"},size:17,children:Object(_.jsx)(Se,{children:"A"})})},e.uid)}))," "]})}var ke=V.a.div(fe||(fe=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 56px;\n  padding: 0 16px;\n  align-items: center;\n  border-bottom: 1px solid rgb(230, 230, 230);\n  box-shadow: -3px 13px 6px -10px rgb(230 230 230);\n\n  .header {\n    &__info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    &__title {\n      margin: 0;\n      font-weight: bold;\n    }\n\n    &__description {\n      font-size: 12px;\n    }\n  }\n\n  .load{\n    fontSize: '56px',\n    color: '#08c',\n    position: 'absolute',\n    top: '50%',\n    left: '50%'\n  }\n\n  .settingIcon{\n      font-size: '15px';\n  }\n"]))),Re=V.a.div(Oe||(Oe=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]))),Fe=V.a.div(ve||(ve=Object(p.a)(["\n  height: 100vh;\n"]))),Ve=V.a.div(ge||(ge=Object(p.a)(["\n  height: calc(100% - 56px);\n  display: flex;\n  flex-direction: column;\n  padding: 11px;\n  justify-content: flex-end;\n"]))),Me=Object(V.a)(g.a)(ye||(ye=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 2px 2px 0;\n  border: 1px solid rgb(230, 230, 230);\n  border-radius: 2px;\n  margin-top: 10px;\n\n  .ant-form-item {\n    flex: 1;\n    margin-bottom: 0;\n  }\n"]))),Ae=V.a.div(we||(we=Object(p.a)(["\n  max-height: 100%;\n  overflow-y: auto;\n"])));var Ue,ze,Te,Le=function(){var e=Object(i.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(C.useForm)(),a=Object(b.a)(o,1)[0],r=Object(i.useContext)(P),s=r.selectedRoom,l=r.selectedRoomId,d=r.setSelectedRoomId,p=r.setIsInviteMemberVisible,I=r.setIsShowMembersVisible,R=r.setIsEditRoomVisible,V=r.members,M=Object(i.useContext)(B).user,A=M.uid,U=M.displayName,E=M.photoURL,D=Object(i.useRef)(null),G=Object(i.useState)(!0),q=Object(b.a)(G,2),H=q[0],J=q[1],Z=Object(i.useRef)(null),W=Object(i.useState)(""),X=Object(b.a)(W,2),Y=X[0],Q=X[1],$=Object(i.useMemo)((function(){return{fieldName:"roomId",operator:"==",compareValue:l}}),[l]),ee=L("messages",$);Object(i.useEffect)((function(){return J(!0),l&&D.current.focus(),z.collection("messages").where("roomId","==",l).get().then((function(e){e.docs.map((function(e){e.data().userSeen.map((function(e){return e.uid})).includes(A)||z.collection("messages").doc(e.id).update({userSeen:[].concat(Object(u.a)(e.data().userSeen),[{uid:A,displayName:U,photoURL:E,timeSeen:new Date}])})}))}))}),[l]);var te=T.firestore().doc("/users/"+A),ne=Object(i.useMemo)((function(){return{status:"c",last_changed:T.firestore.FieldValue.serverTimestamp()}}),[]),ie=Object(i.useMemo)((function(){return{status:"a",last_changed:T.firestore.FieldValue.serverTimestamp()}}),[]),ce=Object(i.useMemo)((function(){return{status:"b",last_changed:T.firestore.FieldValue.serverTimestamp()}}),[]);Object(i.useEffect)((function(){return T.database().ref(".info/connected").on("value",(function(e){if(!1!==(null===e||void 0===e?void 0:e.val())||void 0===A){if(void 0===A&&"visible"===Y)null===te||void 0===te||te.update(ne);else if(void 0!==A&&"hidden"!==Y){var t;null===(t=T.database().ref("/status/"+A))||void 0===t||t.onDisconnect().update(ne).then((function(){null===te||void 0===te||te.update(ie)}))}}else null===te||void 0===te||te.update(ne)}))}),[A]),window.addEventListener("unload",(function(){null===te||void 0===te||te.update(ne)}));var ae=Object(i.useCallback)((function(){return void 0===A?null===te||void 0===te||te.update(ne):"hidden"===document.visibilityState&&"hidden"!==Y&&void 0!==A?(null===te||void 0===te||te.update(ce),Q("hidden")):"visible"===document.visibilityState&&"visible"!==Y&&void 0!==A&&(Q("visible"),null===te||void 0===te||te.update(ie)),z.collection("messages").where("roomId","==",l).get().then((function(e){e.docs.map((function(e){e.data().userSeen.map((function(e){return e.uid})).includes(A)||"visible"!==document.visibilityState||z.collection("messages").doc(e.id).update({userSeen:[].concat(Object(u.a)(e.data().userSeen),[{uid:A,displayName:U,photoURL:E,timeSeen:new Date}])})}))}))}),[]);Object(i.useEffect)((function(){document.addEventListener("visibilitychange",ae,!1)}),[ae]),Object(i.useEffect)((function(){Object(k.delay)((function(){J(!1)}),10,"")}),[ee]),Object(i.useEffect)((function(){var e=z.collection("notifys").doc(A).onSnapshot((function(t){var n,i,c=null===t||void 0===t||null===(n=t.data())||void 0===n?void 0:n.roomId;l&&void 0!==c&&(null===(i=z.collection("notifys"))||void 0===i||i.doc(A).update({roomId:Object(u.a)(Array.from(c).filter((function(e){return e!==l})))}));return e}));return e}),[l]),Object(i.useLayoutEffect)((function(){Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)})),Object(i.useEffect)((function(){var e=z.collection("notifys").doc(A).onSnapshot((function(t){var n,i,c=null===t||void 0===t||null===(n=t.data())||void 0===n?void 0:n.roomId;"visible"!==document.visibilityState&&(null===(i=document.getElementsByClassName("audio")[0])||void 0===i||i.play());return void 0!=c&&(document.title=0===c.length?"Fake Messenger":"("+c.length+") Fake Messenger",z.collection("messages").orderBy("createAt").get().then((function(e){var t=e.docs.map((function(e){return e.data()})),n=t[t.length-1];if(void 0!==n){var i=new Notification("Tin nh\u1eafn t\u1eeb "+(null===n||void 0===n?void 0:n.displayName)+"  (T\u1ef1 \u0111\xf3ng sau 5s)",{tag:"<h1>",icon:n.photoURL,renotify:!1,body:null===n||void 0===n?void 0:n.text});i.onshow=function(){setTimeout((function(){i.close()}),5e3)}}}))),e}));return e}),[]);var re=function(){n.trim().length&&(K("messages",{text:n,uid:A,photoURL:E,displayName:U,roomId:l,userSeen:[{uid:A,displayName:U,photoURL:E,timeSeen:new Date}]}),null===V||void 0===V||V.filter((function(e){return e.uid!==A})).forEach((function(e){var t;null===(t=z.collection("notifys"))||void 0===t||t.doc(e.id).get().then((function(t){var n;null===(n=z.collection("notifys"))||void 0===n||n.doc(e.id).update({roomId:[].concat(Object(u.a)(t.data().roomId),[l]),createAt:T.firestore.FieldValue.serverTimestamp()})}))})),a.setFieldsValue({message:""}),c(""),D.current.focus())},se=function(e){""!==e.target.value&&c(e.target.value)};Object(i.useEffect)((function(){return z.collection("messages").where("roomId","==",l).get().then((function(e){e.docs.map((function(e){e.data().userSeen.map((function(e){return e.uid})).includes(A)||"visible"!==document.visibilityState||z.collection("messages").doc(e.id).update({userSeen:[].concat(Object(u.a)(e.data().userSeen),[{uid:A,displayName:U,photoURL:E,timeSeen:new Date}])})}))}))}),[ee]);var le=Object(i.useMemo)((function(){return Object(_.jsxs)(y.a,{children:[Object(_.jsx)(y.a.Item,{onClick:function(){return d("")},icon:Object(_.jsx)(h.a,{}),children:"Trang ch\u1ee7"},"3"),Object(_.jsx)(y.a.Item,{onClick:function(){return R(!0)},icon:Object(_.jsx)(m.a,{}),children:"\u0110\u1ed5i th\xf4ng tin nh\xf3m"},"1"),Object(_.jsx)(y.a.Item,{onClick:function(){return I(!0)},icon:Object(_.jsx)(x.a,{}),children:"Xem th\xe0nh vi\xean"},"1"),Object(_.jsx)(y.a.Item,{onClick:function(){return p(!0)},icon:Object(_.jsx)(f.a,{}),children:"Th\xeam b\u1ea1n b\xe8"},"2"),Object(_.jsx)(xe,{})]})}),[I,p,d]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(F.a,{src:"mess.mp3",className:"audio"})," ",l?Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(Fe,{children:[Object(_.jsxs)(ke,{children:[Object(_.jsxs)("div",{className:"header__info",children:[Object(_.jsx)("p",{className:"header__title",children:s?s.name:""}),Object(_.jsx)("span",{className:"header__description",children:s?s.description:""})]}),Object(_.jsx)(Re,{children:Object(_.jsx)(N.a.Button,{style:{bordered:"none"},icon:Object(_.jsx)(v.a,{}),overlay:le})})]}),Object(_.jsxs)(Ve,{children:[" ",!0===H?Object(_.jsx)(j.a,{spin:!0,style:{fontSize:"56px",color:"#08c",position:"absolute",top:"45%",left:"50%"}}):Object(_.jsxs)(Ae,{className:"listMessage",ref:Z,children:[ee.map((function(e){return e.uid===A?Object(_.jsxs)("div",{children:[Object(_.jsx)(oe,{text:e.text,photoURL:e.photoURL,displayName:e.displayName,createdAt:e.createAt})," ",e.id===ee[ee.length-1].id?Object(_.jsx)(Ie,{users:e.userSeen.filter((function(e){return e.uid!==A}))}):Object(_.jsx)(_.Fragment,{})," "]},e.id):Object(_.jsxs)("div",{children:[Object(_.jsx)(je,{text:e.text,photoURL:e.photoURL,displayName:e.displayName,createdAt:e.createAt})," ",e.id===ee[ee.length-1].id?Object(_.jsx)(Ie,{users:e.userSeen.filter((function(e){return e.uid!==A}))}):Object(_.jsx)(_.Fragment,{})," "]},e.id)}))," "]}),Object(_.jsxs)(Me,{form:a,children:[Object(_.jsx)(g.a.Item,{name:"message",children:Object(_.jsx)(w.a,{ref:D,onChange:se,onPressEnter:re,placeholder:"Aa...",bordered:!1,autoComplete:"off"})}),Object(_.jsx)(S.a,{style:{width:"40px",color:"blue"},icon:Object(_.jsx)(O.a,{className:"settingIcon"}),onClick:re})]})," "]})]})}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("iframe",{style:{width:"100%",height:"100%",bordered:"none",border:"0"},src:"https://cuberun.adamkarlsten.com/",title:"Ch\xe0o b\u1ea1n H\u01b0\u01a1ng Min nh\xe9 \ud83e\udd70"})})]})},Ee=n(477),_e=n(487),Be=function(){return Object(_.jsxs)("svg",{t:"1625646209821",className:"icon",viewBox:"0 0 1027 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5566",width:"30",height:"30",children:[Object(_.jsx)("path",{d:"M400.695652 545.391304a2 2 0 1 0 89.043478 0 2 2 0 1 0-89.043478 0Z","p-id":"5567"}),Object(_.jsx)("path",{d:"M222.608696 545.391304a2 2 0 1 0 89.043478 0 2 2 0 1 0-89.043478 0Z","p-id":"5568"}),Object(_.jsx)("path",{d:"M581.008696 545.391304a2 2 0 1 0 89.043478 0 2 2 0 1 0-89.043478 0Z","p-id":"5569"}),Object(_.jsx)("path",{d:"M447.443478 115.756522C200.347826 115.756522 0 296.069565 0 518.678261c0 140.243478 80.13913 264.904348 200.347826 336.13913l0 162.504348 153.6-104.626087c28.93913 6.678261 60.104348 8.904348 91.269565 8.904348 247.095652 0 447.443478-180.313043 447.443478-402.921739S692.313043 115.756522 447.443478 115.756522zM447.443478 877.078261c-11.130435 0-22.26087 0-33.391304-2.226087 0 0-2.226087 0-2.226087 0l0 0c-22.26087-2.226087-42.295652-4.452174-62.330435-8.904348l0 0c0 0 0 0 0 0 0 0 0 0 0 0l-46.747826 33.391304c0 0 0 0 0 0l-53.426087 37.843478 0 0 0 0 0-55.652174 0-4.452174c0 0 0 0 0 0l0-48.973913c0 0 0 0 0 0 0 0 0 0 0 0l0 0c-15.582609-8.904348-31.165217-17.808696-44.521739-26.713043l0 0C200.347826 801.391304 200.347826 801.391304 198.121739 801.391304c-8.904348-6.678261-17.808696-13.356522-26.713043-22.26087-2.226087-2.226087-2.226087-2.226087-4.452174-4.452174-4.452174-2.226087-6.678261-6.678261-11.130435-11.130435-2.226087-2.226087-4.452174-4.452174-4.452174-4.452174-4.452174-4.452174-6.678261-6.678261-11.130435-11.130435-2.226087-2.226087-4.452174-4.452174-4.452174-6.678261-2.226087-4.452174-6.678261-6.678261-8.904348-11.130435-2.226087-2.226087-4.452174-4.452174-4.452174-6.678261-2.226087-4.452174-6.678261-6.678261-8.904348-11.130435-2.226087-2.226087-2.226087-4.452174-4.452174-6.678261-2.226087-4.452174-4.452174-6.678261-6.678261-11.130435-2.226087-2.226087-2.226087-4.452174-4.452174-6.678261-4.452174-6.678261-8.904348-13.356522-11.130435-20.034783-2.226087-2.226087-2.226087-6.678261-4.452174-8.904348-2.226087-2.226087-2.226087-6.678261-4.452174-8.904348-2.226087-4.452174-2.226087-6.678261-4.452174-11.130435C66.782609 636.66087 66.782609 634.434783 64.556522 629.982609c-2.226087-4.452174-2.226087-6.678261-4.452174-11.130435 0-2.226087-2.226087-6.678261-2.226087-8.904348-2.226087-4.452174-2.226087-8.904348-2.226087-13.356522 0-2.226087-2.226087-6.678261-2.226087-8.904348 0-4.452174-2.226087-8.904348-2.226087-13.356522 0-2.226087 0-6.678261-2.226087-8.904348 0-4.452174-2.226087-11.130435-2.226087-15.582609 0-2.226087 0-4.452174 0-6.678261 0-6.678261 0-15.582609 0-22.26087 0-198.121739 180.313043-358.4 400.695652-358.4 222.608696 0 400.695652 160.278261 400.695652 358.4C848.13913 716.8 667.826087 877.078261 447.443478 877.078261z","p-id":"5570"}),Object(_.jsx)("path",{d:"M901.565217 687.86087c77.913043-73.46087 124.66087-171.408696 124.66087-280.486957 0-222.608696-200.347826-402.921739-447.443478-402.921739-104.626087 0-200.347826 33.391304-276.034783 86.817391 42.295652-11.130435 89.043478-17.808696 135.791304-17.808696 44.521739-13.356522 91.269565-22.26087 140.243478-22.26087 222.608696 0 400.695652 160.278261 400.695652 358.4 0 62.330435-17.808696 122.434783-48.973913 173.634783C926.052174 616.626087 917.147826 654.469565 901.565217 687.86087z","p-id":"5571"})]})},De=function(){return Object(_.jsx)("svg",{t:"1625676458960",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6895",width:"16",height:"16",children:Object(_.jsx)("path",{d:"M513.12 65.312c-247.552 0-448.224 200.672-448.224 448.192s200.672 448.192 448.224 448.192 448.224-200.672 448.224-448.224S760.672 65.28 513.12 65.28z m0 837.344c-214.912 0-389.12-174.208-389.12-389.12s174.208-389.12 389.12-389.12 389.12 174.208 389.12 389.12-174.208 389.12-389.12 389.12zM168.544 513.536c0 190.304 154.272 344.608 344.608 344.608s344.608-154.272 344.608-344.608c0-190.304-154.272-344.608-344.608-344.608S168.544 323.2 168.544 513.536z","p-id":"6896",fill:"#5ad539"})})},Pe=function(){return Object(_.jsxs)("svg",{t:"1625677571208",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"10142",width:"16",height:"16",children:[Object(_.jsx)("path",{d:"M284.444444 341.333333c0-65.422222 17.066667-128 45.511112-182.044444C209.066667 224.711111 126.577778 351.288889 126.577778 497.777778c0 211.911111 172.088889 384 384 384 146.488889 0 273.066667-82.488889 338.488889-201.955556-54.044444 28.444444-115.2 45.511111-182.044445 45.511111C456.533333 725.333333 284.444444 553.244444 284.444444 341.333333z m378.311112-184.888889h36.977777l-46.933333 46.933334c-4.266667 4.266667-5.688889 9.955556-2.844444 15.644444 2.844444 5.688889 7.111111 8.533333 12.8 8.533334h71.111111c8.533333 0 14.222222-5.688889 14.222222-14.222223s-5.688889-14.222222-14.222222-14.222222H696.888889l46.933333-46.933333c4.266667-4.266667 5.688889-9.955556 2.844445-15.644445-2.844444-5.688889-7.111111-8.533333-12.8-8.533333h-71.111111c-8.533333 0-14.222222 5.688889-14.222223 14.222222s7.111111 14.222222 14.222223 14.222222z m234.666666 265.955556h-93.866666l103.822222-103.822222c4.266667-4.266667 5.688889-9.955556 2.844444-15.644445-2.844444-5.688889-7.111111-8.533333-12.8-8.533333h-128c-8.533333 0-14.222222 5.688889-14.222222 14.222222s5.688889 14.222222 14.222222 14.222222h93.866667L759.466667 426.666667c-4.266667 4.266667-5.688889 9.955556-2.844445 15.644444 2.844444 5.688889 7.111111 8.533333 12.8 8.533333h128c8.533333 0 14.222222-5.688889 14.222222-14.222222s-7.111111-14.222222-14.222222-14.222222z","p-id":"10143",fill:"#1296db"}),Object(_.jsx)("path",{d:"M536.177778 401.066667h51.2L526.222222 462.222222c-4.266667 4.266667-5.688889 9.955556-2.844444 15.644445 2.844444 5.688889 7.111111 8.533333 12.8 8.533333h85.333333c8.533333 0 14.222222-5.688889 14.222222-14.222222s-5.688889-14.222222-14.222222-14.222222h-51.2l61.155556-61.155556c4.266667-4.266667 5.688889-9.955556 2.844444-15.644444-2.844444-5.688889-7.111111-8.533333-12.8-8.533334h-85.333333c-8.533333 0-14.222222 5.688889-14.222222 14.222222s7.111111 14.222222 14.222222 14.222223z","p-id":"10144",fill:"#1296db"})]})},Ge=_e.a.Panel,qe=Object(V.a)(Ge)(Ue||(Ue=Object(p.a)(["\n  \n\n\n  &&& {\n    .ant-collapse-header\n    ,\n    p {\n      color: blue;\n      font-weight: 500;\n      user-select: none;\n    }\n\n    .ant-collapse-content-box {\n      padding: 0 10px;\n      max-height: 290px;\n      overflow-y: auto;\n    }\n    .ant-typography:hover {\n      textShadow: rgb(222 222 222) 0px 0px 7px;\n      background-color: #f1f1f1;\n      transition: color 0.2s;\n    }\n\n    .ant-typography{\n      color: #000;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      font-weight: 500;\n    }\n\n    .add-room {\n      color: #456;\n      margin: 15px 0 10px 90px;\n      padding: 3px 8px 5px 8px;      \n      border: 1px solid #aaa;\n    }\n\n    .add-room:hover{\n      color: #fff;\n      background-color: #ccc;\n      border: 1px solid #bbb;\n      box-shadow: 1px 1px 8px 0px #bbb;\n    }\n\n    .tb{\n        float: right;\n        color: blue;\n        font-weight: 500;\n        position: absolute;\n        right: 5%;\n    }\n\n    .tenphong{\n        text-overflow: ellipsis;\n        max-width: 200px;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n \n  }\n"]))),He=Object(V.a)(X.a.Link)(ze||(ze=Object(p.a)(["\n  display: block;\n  margin-bottom: -1px;\n  color: #ddd; \n  padding: 7px 10px 9px 10px;\n  border-radius: 5px;\n  \n"]))),Ke=Object(V.a)(_e.a)(Te||(Te=Object(p.a)(["\n    border-bottom: 1px solid #ccc;\n    box-shadow: 0px 9px 7px -9px #ccc;\n\n"])));var Je,Ze=function(){var e=Object(i.useContext)(P),t=e.rooms,n=e.setIsAddRoomVisible,c=e.setSelectedRoomId,o=e.selectedRoomId,a=Object(i.useContext)(B).user.uid,r=Object(i.useState)([]),s=Object(b.a)(r,2),l=s[0],d=s[1];return Object(i.useEffect)((function(){var e=z.collection("notifys").doc(a).onSnapshot((function(t){var n,i=null===(n=t.data())||void 0===n?void 0:n.roomId;return d(i),e}));return e}),[t,a]),Object(_.jsx)(Ke,{defaultActiveKey:"0",ghost:!0,children:Object(_.jsxs)(qe,{header:"Nh\xf3m c\u1ee7a b\u1ea1n",children:[0!==t.length?Object(_.jsx)(_.Fragment,{children:t.map((function(e){return Object(_.jsxs)(He,{onClick:function(){return c(e.id)},style:e.id===o?{textShadow:"rgb(222 222 222) 0px 0px 7px",backgroundColor:"#f1f1f1",transition:"all 0.2s",color:"#000"}:{},children:[Object(_.jsx)(Ee.a,{style:{margin:"5px 15px 0 0"},size:20,component:Be}),Object(_.jsx)("div",{className:"tenphong",children:e.name}),(null===l||void 0===l?void 0:l.includes(e.id))?Object(_.jsx)(re.a,{className:"tb",style:{color:"white",backgroundColor:"blue"},src:"",size:20,children:l.filter((function(t){return t===e.id})).length<10?"0"+l.filter((function(t){return t===e.id})).length:l.filter((function(t){return t===e.id})).length}):Object(_.jsx)(_.Fragment,{})]},e.id)}))}):Object(_.jsx)("p",{style:{color:"gray",margin:"10px 0px 7px 30px"},children:"B\u1ea1n ch\u01b0a tham gia nh\xf3m n\xe0o"}),Object(_.jsx)(S.a,{type:"text",className:"add-room",onClick:function(){return n(!0)},children:"T\u1ea1o nh\xf3m"}),Object(_.jsx)(F.a,{src:"mess.mp3",className:"audio"})]},"1")})},We=n(499),Xe=n(488),Ye=V.a.div(Je||(Je=Object(p.a)([" \ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding: 12px 16px;\nborder-bottom: 1px solid #ccc;\nbox-shadow: -4px -1px 9px 1px #ccc;\n\n.username {\n  margin-left: 10px;\n  font-size: 16pt;\n  font-weight: 700;\n}\n\n.logout:hover{\n    color: red;\n    border-radius: 50%;\n}\n\n.logout{\n    border-radius: 50%;\n}\n"])));var Qe,$e,et,tt,nt=function(){var e=Object(i.useContext)(B).user,t=e.displayName,n=e.photoURL,c=e.uid,o=Object(i.useContext)(P).clearState;if(void 0!==c)var a=T.firestore().doc("/users/"+c);var r={status:"c",last_changed:T.firestore.FieldValue.serverTimestamp()};return Object(_.jsxs)(Ye,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(W.a,{placement:"right",title:t,children:Object(_.jsx)(Xe.a,{size:"large",src:n,children:n?"":null===t||void 0===t?void 0:t.charAt(0)})}),Object(_.jsx)(X.a.Text,{className:"username",children:"Chat"})]}),Object(_.jsx)(W.a,{title:"\u0110\u0103ng xu\u1ea5t",placement:"top",children:Object(_.jsx)(S.a,{className:"logout",icon:Object(_.jsx)(We.a,{}),style:{border:"none"},onClick:function(){U.signOut(),a.update(r),o()}})})]})},it=n(485),ct=_e.a.Panel,ot=Object(V.a)(ct)(Qe||(Qe=Object(p.a)(["\n  \n  &&& {\n    .ant-collapse-header{\n        color: blue;\n        font-weight: 500;\n        user-select: none;\n    }\n    p {\n      font-weight: 500;\n      color: gray\n      \n    }\n\n    .ant-collapse-content-box {\n      padding: 0 30px;\n      max-height: 290px;\n      overflow-y: auto;\n    }\n\n    .add-room {\n      color: #123;\n      padding: 0;\n    }\n  }\n"]))),at=Object(V.a)(X.a.Link)($e||($e=Object(p.a)(["\n  display: block;\n  margin-bottom: 5px;\n  color: blue;\n  \n"]))),rt=V.a.div(et||(et=Object(p.a)(["\n    display: flex;\n    margin: 15px 10px 10px 0px;\n    position: relative;\n    .user{\n        color: #123;\n        margin-left: 10px;\n    }\n    .status{\n      color: blue;\n      position: absolute;\n      right: 8%;\n    }\n\n    .tb{\n        position:absolute;\n        top: 2px;\n        left: 105%;\n    }\n    .tb2{\n        float: right;\n        position: absolute;\n        right: -10%;\n        user-select: none;\n    }\n"]))),st=Object(V.a)(_e.a)(tt||(tt=Object(p.a)(["\nborder-bottom: 1px solid #ccc;\nbox-shadow: 0px 9px 7px -9px #ccc;\n\n"])));var lt,dt=function(){var e=Object(i.useContext)(B).user.uid,t=L("users","");function n(e){var t="";return e&&(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=Object(it.a)(new Date(1e3*e),new Date,{addSuffix:!0,locale:Q.a})).charAt(0).toUpperCase()+t.slice(1)).replace("minutes","ph\xfat")).replace("hours","gi\u1edd")).replace("ago","tr\u01b0\u1edbc")).replace("tr\u01b0\u1edbc","")).replace("day","ng\xe0y")).replace("hour","gi\u1edd")).replace("Kho\u1ea3ng","")).replace("D\u01b0\u1edbi","")),t}return Object(_.jsx)(st,{defaultActiveKey:"1",ghost:!0,children:Object(_.jsxs)(ot,{header:"Danh s\xe1ch b\u1ea1n b\xe8",children:[Array.from(t).filter((function(t){return t.uid!==e})).map((function(e){return Object(_.jsxs)(rt,{children:[Object(_.jsx)(Xe.a,{size:"small",src:e.photoUrl,children:e.photoUrl?"":e.displayName.charAt(0)}),Object(_.jsx)(at,{className:"user",children:e.displayName}),"a"===e.status?Object(_.jsx)(W.a,{title:"Online",placement:"right",children:Object(_.jsx)(Ee.a,{className:"tb",component:De})}):Object(_.jsx)(_.Fragment,{}),"c"===e.status?Object(_.jsx)(W.a,{placement:"right",title:"Ho\u1ea1t \u0111\u1ed9ng "+n(e.last_changed.seconds)+" tr\u01b0\u1edbc",children:Object(_.jsx)("p",{className:"tb2",children:n(e.last_changed.seconds)})}):Object(_.jsx)(_.Fragment,{}),"b"===e.status?Object(_.jsx)(W.a,{title:"Sleep",placement:"right",children:Object(_.jsx)(Ee.a,{className:"tb",component:Pe})}):Object(_.jsx)(_.Fragment,{})," "]},e.uid)}))," "]},"1")})},ut=V.a.div(lt||(lt=Object(p.a)(["\n  background: #fff;\n  color: black;\n  height: 100vh;\n  border-right: 1px solid #ccc;\n  magrin: 20px\n"])));var bt=function(){return Object(_.jsx)(ut,{children:Object(_.jsx)(l.a,{children:Object(_.jsxs)(d.a,{span:"24",children:[Object(_.jsx)(nt,{}),Object(_.jsx)(Ze,{}),Object(_.jsx)(dt,{})]})})})};var pt=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(l.a,{children:[Object(_.jsx)(d.a,{span:"5",children:Object(_.jsx)(bt,{})}),Object(_.jsx)(d.a,{span:"19",children:Object(_.jsx)(Le,{})})]})})},jt=n(54),ht=n.n(jt),mt=n(77),xt=n(500),ft=n(501),Ot=n(11),vt=X.a.Title,gt=new Ot.default.auth.FacebookAuthProvider,yt=new Ot.default.auth.GoogleAuthProvider;var wt=function(){var e=function(){var e=Object(mt.a)(ht.a.mark((function e(){var t,n,i,c;return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("granted"!==Notification.permission){e.next=9;break}return e.next=3,U.signInWithPopup(yt);case 3:t=e.sent,n=t.additionalUserInfo,i=t.user,n.isNewUser&&(J("users",{displayName:i.displayName,email:i.email,photoUrl:i.photoURL,uid:i.uid,providerId:n.providerId,keywords:Z(null===(c=i.displayName)||void 0===c?void 0:c.toLowerCase()),roomId:[],status:"",last_changed:""}),J("notifys",{roomId:[],uid:i.uid})),e.next=11;break;case 9:alert("Vui l\xf2ng cho ph\xe9p th\xf4ng b\xe1o"),Notification.requestPermission();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{children:Object(_.jsx)(l.a,{justify:"center",style:{height:800},children:Object(_.jsxs)(d.a,{span:10,children:[Object(_.jsx)(vt,{style:{textAlign:"center",margin:"30px"},level:2,children:"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 tham gia v\u1edbi ch\xfang t\xf4i"}),Object(_.jsx)(S.a,{icon:Object(_.jsx)(xt.a,{}),style:{width:"100%",fontSize:"16px",color:"red",height:"40px"},onClick:function(){return e()},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Google"}),Object(_.jsx)(S.a,{icon:Object(_.jsx)(ft.a,{}),style:{marginTop:"5px",width:"100%",fontSize:"16px",color:"blue",height:"40px"},onClick:function(){U.signInWithPopup(gt)},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Facebook (beta)"})]})})})},St=n(271),Nt=n(121),Ct=n.n(Nt),It=n(80),kt=n.n(It);function Rt(){var e=Object(C.useForm)(),t=Object(b.a)(e,1)[0],n=Object(i.useContext)(P),c=n.isAddRoomVisible,o=n.setIsAddRoomVisible,a=Object(i.useContext)(B).user.uid;return Object(_.jsx)("div",{children:Object(_.jsx)(kt.a,{title:"T\u1ea1o nh\xf3m",visible:c,onOk:function(){var e,n;(null===(e=t.getFieldValue())||void 0===e?void 0:e.name)&&(null===(n=t.getFieldValue())||void 0===n?void 0:n.description)?(K("rooms",Object(M.a)(Object(M.a)({},t.getFieldsValue()),{},{members:[a]})),t.resetFields(),o(!1)):St.b.info("B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin")},onCancel:function(){o(!1)},children:Object(_.jsxs)(I.a,{layout:"vertical",form:t,children:[Object(_.jsx)(Ct.a,{label:"T\xean nh\xf3m",name:"name",children:Object(_.jsx)(w.a,{autoFocus:"true",name:"name",placeholder:"Nh\u1eadp t\xean nh\xf3m",autoComplete:"off",rules:[{required:!0}]})}),Object(_.jsx)(Ct.a,{label:"M\xf4 t\u1ea3",name:"description",children:Object(_.jsx)(w.a,{name:"description",placeholder:"Nh\u1eadp m\xf4 t\u1ea3",autoComplete:"off",rules:[{required:!0}]})})]})})})}function Ft(){var e=Object(C.useForm)(),t=Object(b.a)(e,1)[0],n=Object(i.useContext)(P),c=n.isEditRoomVisible,o=n.setIsEditRoomVisible,a=n.selectedRoom,r=n.selectedRoomId;t.setFieldsValue({name:a.name,description:a.description});return Object(_.jsx)("div",{children:Object(_.jsx)(kt.a,{title:"S\u1eeda th\xf4ng tin nh\xf3m",visible:c,onOk:function(){var e,n;(null===(e=t.getFieldValue())||void 0===e?void 0:e.name)&&(null===(n=t.getFieldValue())||void 0===n?void 0:n.description)?(z.collection("rooms").doc(r).update({name:t.getFieldValue("name"),description:t.getFieldValue("description")}),t.resetFields(),o(!1)):St.b.info("B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin")},onCancel:function(){o(!1)},okText:"L\u01b0u l\u1ea1i",children:Object(_.jsxs)(I.a,{layout:"vertical",form:t,children:[Object(_.jsx)(Ct.a,{label:"T\xean nh\xf3m",name:"name",children:Object(_.jsx)(w.a,{autoFocus:"true",name:"name",placeholder:"Nh\u1eadp t\xean nh\xf3m",autoComplete:"off",rules:[{required:!0,message:"Please input your Username!"}]})}),Object(_.jsx)(Ct.a,{label:"M\xf4 t\u1ea3",name:"description",children:Object(_.jsx)(w.a,{name:"description",placeholder:"Nh\u1eadp m\xf4 t\u1ea3",autoComplete:"off",rules:[{required:!0}]})})]})})})}var Vt=n(14),Mt=n(484),At=n(266),Ut=n.n(At),zt=["fetchOptions","debounceTimeout","curMembers"];function Tt(e){var t=e.fetchOptions,n=e.debounceTimeout,o=void 0===n?300:n,a=e.curMembers,r=Object(Vt.a)(e,zt),s=Object(i.useState)(!1),l=Object(b.a)(s,2),d=l[0],u=l[1],p=Object(i.useState)([]),j=Object(b.a)(p,2),h=j[0],m=j[1],x=c.a.useMemo((function(){return Ut()((function(e){m([]),u(!0),t(e,a).then((function(e){m(e),u(!1)}))}),o)}),[o,t,a]);return c.a.useEffect((function(){return function(){m([])}}),[]),Object(_.jsxs)(Mt.a,Object(M.a)(Object(M.a)({labelInValue:!0,filterOption:!1,onSearch:x,notFoundContent:d?Object(_.jsx)(E.a,{size:"small"}):Object(_.jsx)("p",{style:{marginTop:"10px",color:"#345"},children:"Nh\u1eadp * \u0111\u1ec3 hi\u1ec3n th\u1ecb t\u1ea5t c\u1ea3 ... "})},r),{},{children:[" ",h.map((function(e){var t,n;return Object(_.jsxs)(Mt.a.Option,{value:e.value,title:e.label,children:[Object(_.jsxs)(re.a,{size:"small",src:e.photoUrl,children:[" ",e.photoUrl?"":null===(t=e.label)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()," "]})," ".concat(e.label)," "]},e.value)}))," "]}))}function Lt(e,t){return Et.apply(this,arguments)}function Et(){return(Et=Object(mt.a)(ht.a.mark((function e(t,n){return ht.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.collection("users").where("keywords","array-contains",null===t||void 0===t?void 0:t.toLowerCase()).orderBy("displayName").limit(20).get().then((function(e){return console.log(e.docs),e.docs.map((function(e){return{label:e.data().displayName,value:e.data().uid,photoUrl:e.data().photoUrl}})).filter((function(e){return!n.includes(e.value)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _t(){var e=Object(i.useContext)(P),t=e.isInviteMemberVisible,n=e.setIsInviteMemberVisible,c=e.selectedRoomId,o=e.selectedRoom,a=Object(i.useState)([]),r=Object(b.a)(a,2),s=r[0],l=r[1],d=g.a.useForm(),p=Object(b.a)(d,1)[0];return Object(_.jsx)("div",{children:Object(_.jsx)(kt.a,{title:"M\u1eddi th\xeam b\u1ea1n b\xe8",visible:t,onOk:function(){p.resetFields(),l([]),z.collection("rooms").doc(c).update({members:[].concat(Object(u.a)(o.members),Object(u.a)(s.map((function(e){return e.value}))))});var e=s.length;0!==e&&St.b.success("\u0110\xe3 th\xeam "+e+" th\xe0nh vi\xean"),n(!1)},onCancel:function(){p.resetFields(),l([]),n(!1)},destroyOnClose:!0,children:Object(_.jsxs)(g.a,{form:p,layout:"vertical",children:[Object(_.jsx)("p",{children:"Nh\u1eadp h\u1ecd t\xean"}),Object(_.jsx)(Tt,{mode:"multiple",name:"search-user",label:"T\xean c\xe1c th\xe0nh vi\xean",value:s,placeholder:"Aa ...",fetchOptions:Lt,onChange:function(e){return l(e)},style:{width:"100%"},curMembers:o.members})]})})})}var Bt,Dt,Pt=n(174),Gt=Object(V.a)(X.a.Text)(Bt||(Bt=Object(p.a)(["\n  display: block;\n  margin-bottom: 5px;\n  color: blue;\n"]))),qt=V.a.div(Dt||(Dt=Object(p.a)(["\n    display: flex;\n    margin: 15px 10px 10px 0px;\n    align-item: center;\n    .user{\n        color: #123;\n        margin: 7px 15px 9px 15px;\n        font-weight: 500;\n    }\n    .status{\n      color: #123;\n      position: absolute;\n      right: 8%;\n    }\n    p{\n        margin-top:6px;\n    }\n\n    .baChamIcon{\n        font-size:'15pt';\n        margin-top:'3px';\n    }\n"])));function Ht(){var e=Object(i.useContext)(P),t=e.members,n=e.setIsShowMembersVisible,c=e.isShowMembersVisible,o=Object(i.useContext)(B).user.uid,a=function(){n(!1)};return Object(_.jsxs)(kt.a,{title:"Danh s\xe1ch th\xe0nh vi\xean ("+Array.from(t).length+")",visible:c,onCancel:a,onOk:a,okButtonProps:{style:{display:"none"}},children:[Array.from(t).map((function(e){return Object(_.jsxs)(qt,{children:[Object(_.jsx)(re.a,{size:"large",src:e.photoUrl,children:e.photoUrl?"":e.displayName.charAt(0)}),Object(_.jsx)(Gt,{className:"user",children:o===e.uid?"B\u1ea1n":e.displayName}),Object(_.jsx)(S.a,{style:{borderRadius:"50%",float:"right",position:"absolute",left:"85%",marginTop:"2px"},icon:Object(_.jsx)(Pt.a,{className:"baChamIcon"})})," "]},e.uid)}))," "]})}var Kt=function(){return Object(_.jsx)(r.a,{children:Object(_.jsx)(D,{children:Object(_.jsxs)(H,{children:[Object(_.jsxs)(s.c,{children:[Object(_.jsx)(s.a,{path:"/login",children:Object(_.jsx)(wt,{})}),Object(_.jsx)(s.a,{path:"/",children:Object(_.jsx)(pt,{})})]}),Object(_.jsx)(Rt,{}),Object(_.jsx)(_t,{}),Object(_.jsx)(Ht,{}),Object(_.jsx)(Ft,{})]})})})};n(471);a.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(Kt,{})}),document.getElementById("root"))}},[[472,1,2]]]);
//# sourceMappingURL=main.6e071f22.chunk.js.map