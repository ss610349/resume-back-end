(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2dbe":function(e,t){e.exports="data:image/png;base64,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"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/IDMS/Home"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/Page1"}},[e._v("Page 1")]),e._v(" | "),n("router-link",{attrs:{to:"/TestPage"}},[e._v("TestPage")]),e._v(" | "),n("router-link",{attrs:{to:"/Office"}},[e._v("辦公室測試數據")])],1),n("el-divider"),n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1)},r=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,a,r,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TodayEatWhat",{attrs:{DyText:"吃屎"}}),n("TodayEatWhat",{attrs:{DyText:"鴨肉飯",imgUrl:e.imgUrls.duck_rice}}),n("TodayEatWhat",{attrs:{DyText:"滷味",imgUrl:e.imgUrls.lo_way}}),n("TodayEatWhat",{attrs:{DyText:"三媽(媽媽媽)",imgUrl:e.imgUrls.three_mother}})],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.imgUrl,fit:e.fit}}),e.show_text?n("h1",[e._v(e._s(e.DyText))]):e._e(),n("el-button",{attrs:{type:"button"},on:{click:e.btnClick}},[e._v(" 今天吃啥 ")])],1)},g=[],m=(n("96cf"),n("1da1")),v=n("bc3a"),h=n.n(v),A=n("2f62");o["default"].use(A["a"]);var b=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=(n("4de4"),n("5c96")),S=n.n(w),y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;w["Message"].error({message:e,duration:t})},_=function(e){w["Message"].success(e,2)},x="localhost:8080",E=h.a.create({baseURL:b.state.Server_URL});function k(){y("連線出了問題>Server url:"+x,1e3)}var T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return h.a.defaults.baseURL=t,console.log("url:"+t),e=e.toLowerCase(),"post"==e?E.post(t,n).catch((function(e){console.log("web api GET fail>"+e),k()})):"get"==e?E.get(t,{params:n}).catch((function(e){console.log("web api GET fail>"+e),k()})):"delete"==e?E.delete(t,{params:n}).catch((function(e){console.log("web api GET fail>"+e),k()})):"put"==e&&E.put(t,n).catch((function(e){console.log("web api GET fail>"+e),k()}))},C=function(e){return T("get","/api/Pork",e)},L=function(e){return T("post","/api/Pork/SaleData",e)},O=function(e){return T("get","https://landservice.herokuapp.com/api/OfficeTest",e)},V={data:function(){return{show_text:!1,SaleInfo:{Date:"20201222",Number:69,AveragePrice:69.99}}},methods:{btnClick:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.show_text=!e.show_text,t.next=3,C(e.ModuleIP);case 3:return n=t.sent,console.log(n),e.SaleInfo.Number+=1,t.next=8,L(e.SaleInfo);case 8:o=t.sent,console.log(o);case 10:case"end":return t.stop()}}),t)})))()}},props:{DyText:String,imgUrl:String}},R=V,G=Object(i["a"])(R,f,g,!1,null,null,null),P=G.exports,H={name:"Home",data:function(){return{imgUrls:{duck_rice:"../assets/youtube-logo.png",lo_way:"../assets/lo_way.jpg",three_mother:"../assets/youtube-logo.png"}}},components:{TodayEatWhat:P}},I=H,U=Object(i["a"])(I,d,p,!1,null,null,null),B=U.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Page1"},[n("h1",[e._v("Maybe IDMS Signals Page")]),n("el-row",[n("el-button",[e._v("默认按钮")]),n("el-button",{attrs:{type:"primary"}},[e._v("主要按钮")]),n("el-button",{attrs:{type:"success"}},[e._v("成功按钮")]),n("el-button",{attrs:{type:"info"}},[e._v("信息按钮")]),n("el-button",{attrs:{type:"warning"}},[e._v("警告按钮")]),n("el-button",{attrs:{type:"danger"}},[e._v("危险按钮")])],1)],1)},D=[],F={},K=Object(i["a"])(F,M,D,!1,null,null,null),j=K.exports,q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"TestPage"},[o("img",{attrs:{src:n("2dbe"),with:"64",heigh:"64",alt:"一張圖片"}}),o("h1",[e._v("ddfdf")]),e._l(e.VideoList,(function(e,t){return o("div",{key:t,class:[""+e.IP]},[o("CoverVideo",{attrs:{videoId:e.id,Name:e.name}}),o("el-divider")],1)})),o("TodayEatWhat")],2)},N=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"CoverVideo"},[n("span",[e._v(" "+e._s(e.Name)+" "),n("br")]),n("youtube",{attrs:{"video-id":e.videoId,"player-vars":e.playerVars,width:440},on:{playing:e.playing}})],1)},X=[],Y={data:function(){return{playerVars:{autoplay:0}}},props:{videoId:String,Name:String},methods:{playing:function(){console.log("o/ we are watching!!!")}}},Q=Y,J=Object(i["a"])(Q,W,X,!1,null,null,null),z=J.exports,Z={name:"Home",components:{CoverVideo:z,TodayEatWhat:P},data:function(){return{VideoList:[{name:"浪子回頭",id:"x3bDhtuC5yk"},{name:"茄子蛋EggPlantEgg - 浪流連 Waves Wandering",id:"3Y0Ut5ozaKs"},{name:"杀死那个石家庄人 - 万能青年旅店",id:"xbq-_2TqHVQ"},{name:"用美秀的擋一根做Solo創作練習",id:"Zev764-IuMs"}]}}},$=Z,ee=Object(i["a"])($,q,N,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner"},[n("el-tag",{attrs:{type:"warning"}},[e._v("DEMO KIT 3")]),n("el-tag",{attrs:{type:"info"}},[e._v(e._s(this.LoginState.UserName))]),n("el-button",{attrs:{type:"info",icon:"el-icon-user",circle:""},on:{click:function(t){e.LogindialogFormVisible=!0}}})],1),n("h1"),e._v(" GPM IDMS 主頁 "),n("el-dialog",{attrs:{title:"LOGIN",visible:e.LogindialogFormVisible,width:"540"},on:{"update:visible":function(t){e.LogindialogFormVisible=t}}},[n("el-button",{attrs:{type:"info",icon:"el-icon-user",circle:""}}),n("el-divider"),n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"USER NAME","label-width":e.formLabelWidth}},[n("el-input",{attrs:{disabled:e.LoginState.IsLogining,autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"PASSWORD","label-width":e.formLabelWidth}},[n("el-input",{attrs:{disabled:e.LoginState.IsLogining,"show-password":"",autocomplete:"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.LogindialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:e.LoginState.IsLogining?"danger":"primary"},on:{click:e.LoginDataPost}},[e._v(e._s(e.LoginState.IsLogining?"登 出":"確 定"))])],1)],1)],1)},oe=[],ae=(n("b0c0"),{name:"Home",data:function(){return{LogindialogFormVisible:!1,LoginState:{UserName:"VISITOR",IsLogining:!1},form:{name:"",password:"",ComfirmBtnText:"確 定"},formLabelWidth:"120px"}},components:{},methods:{LoginDataPost:function(){console.log("送出登入請求到後端");var e=!1;e?(this.LogindialogFormVisible=!1,console.log(this.form),this.LoginState.UserName=this.form.name,this.LoginState.IsLogining=!0,_("Hi,"+this.LoginState.UserName)):(this.LoginState.IsLogining=!1,this.LogindialogFormVisible=!0,y("登入失敗"))}}}),re=ae,ie=Object(i["a"])(re,ne,oe,!1,null,null,null),se=ie.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gpm_office"},[n("div",[n("h1",[e._v("KX模組測試資訊")]),n("KxTestView")],1)])},ce=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"KXView"},[n("div",[n("p",[e._v("IP:"+e._s(e.KxTestSta.IP))]),n("p",[e._v("連線狀態:"+e._s(e.KxTestSta.ModuleConnected))]),n("p",[e._v("資料長度設定:"+e._s(e.KxTestSta.DataLenSet))]),n("p",[e._v("量測範圍設定:"+e._s(e.KxTestSta.MEASRangeSet))]),n("p",[e._v("GETDATA 請求次數:"+e._s(e.KxTestSta.SendRequestNumber))]),n("p",[e._v("模組正常回傳次數:"+e._s(e.KxTestSta.DeviceReplyOKNumber))]),n("p",[e._v("Error Code:"+e._s(e.KxTestSta.ErrorCode))]),n("p",[e._v("量測時間:"+e._s(e.KxTestSta.MeasureTime))])]),n("el-button",{attrs:{type:"primary"},on:{click:e.UpdateData}},[e._v("更新")])],1)},de=[],pe={data:function(){return{KxTestSta:{IP:"",ModuleConnected:!1,DataLenSet:512,MEASRangeSet:"8G",SendRequestNumber:-1,DeviceReplyOKNumber:-1,ErrorCode:-1,MeasureTime:-1}}},methods:{UpdateData:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:n=t.sent,console.log(n),e.KxTestSta=n.data;case 5:case"end":return t.stop()}}),t)})))()}}},fe=pe,ge=Object(i["a"])(fe,ue,de,!1,null,null,null),me=ge.exports,ve={components:{KxTestView:me}},he=ve,Ae=Object(i["a"])(he,le,ce,!1,null,null,null),be=Ae.exports;o["default"].use(u["a"]);var we=[{path:"/Home",name:"Home",component:B,meta:{keepAlive:!0}},{path:"/IDMS/Home",name:"IDMS_Home",component:se,meta:{keepAlive:!0}},{path:"/Page1",name:"Page1",component:j,meta:{keepAlive:!0}},{path:"/TestPage",name:"TestPage",component:te,meta:{keepAlive:!0}},{path:"/Office",name:"Office",component:be,meta:{keepAlive:!0}}],Se=new u["a"]({routes:we}),ye=Se,_e=(n("0fae"),n("e0ec")),xe=n.n(_e);o["default"].config.productionTip=!1,o["default"].use(S.a),o["default"].use(xe.a),new o["default"]({router:ye,store:b,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e53172a9.js.map