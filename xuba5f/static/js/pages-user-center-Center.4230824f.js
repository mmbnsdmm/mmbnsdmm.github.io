(self.webpackChunktest4vuecli=self.webpackChunktest4vuecli||[]).push([[75],{65341:function(e,t,i){var n=i(42241);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,i(56).Z)("d5725e46",n,!0,{sourceMap:!1,shadowMode:!1})},26295:function(e,t,i){var n=i(86768);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,i(56).Z)("3c4eddb2",n,!0,{sourceMap:!1,shadowMode:!1})},15574:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n={name:"fui-footer",props:{navigate:{type:Array,default:function(){return[]}},text:{type:String,default:""},color:{type:String,default:"#B2B2B2"},size:{type:[Number,String],default:24},background:{type:String,default:"transparent"},borderColor:{type:String,default:"#B2B2B2"},isFixed:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!0}},computed:{linkColor(){const e=uni&&uni.$fui&&uni.$fui.color;return e&&e.link||"#465CFF"}},data(){return{iphoneX:!1}},created(){},methods:{}},a=(i(65341),(0,i(69453).Z)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"fui-footer",class:[e.isFixed?"fui-footer__fixed-bottom":""],style:{background:e.background}},[e.navigate.length>0?i("v-uni-view",{staticClass:"fui-footer__link"},e._l(e.navigate,(function(t,n){return i("v-uni-navigator",{key:n,staticClass:"fui-link__item",class:{"fui-link__color":!t.color},attrs:{"hover-class":"fui-link-hover","hover-stop-propagation":!0,"open-type":t.openType||"navigate",url:t.url,delta:t.delta}},[i("v-uni-text",{staticClass:"fui-link__text",class:{"fui-link__text-border":n===e.navigate.length-1},style:{color:t.color||e.linkColor,fontSize:(t.size||28)+"rpx",borderColor:e.borderColor,lineHeight:(t.size||28)+"rpx"}},[e._v(e._s(t.text))])],1)})),1):e._e(),i("v-uni-view",{staticClass:"fui-footer__text",class:{"fui-as__safe-weex":e.iphoneX&&e.safeArea}},[i("v-uni-text",{style:{color:e.color,fontSize:e.size+"rpx"}},[e._v(e._s(e.text))])],1)],1)}),[],!1,null,"460794e6",null,!1,undefined,undefined).exports)},18445:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n,a={fuiFooter:i(15574).Z},s=(i(41539),i(54747),i(40561),{name:"PageFooter",beforeCreate:function(){n=this},mounted:function(){var e=getCurrentPages(),t=e[e.length-1].route;t="/"+t,n.siteUrls.forEach((function(e,i){e.url===t&&n.siteUrls.splice(i,1)}))},props:{isGuest:{type:Boolean,default:!1}},data:function(){return{siteUrls:[{text:"首页",openType:"redirect",url:"/pages/site/Index"},{text:"登录",openType:"redirect",url:"/pages/site/Login"},{text:"邮箱登录",openType:"redirect",url:"/pages/site/LoginByEmail"},{text:"注册",openType:"redirect",url:"/pages/site/Signup"},{text:"忘记密码",openType:"redirect",url:"/pages/site/ResetPassword"}],authUrls:[{text:"首页",openType:"redirect",url:"/pages/site/Index"},{text:"个人中心",openType:"redirect",url:"/pages/user/center/Center"}]}}}),o=(0,i(69453).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("fui-footer",{attrs:{text:"Copyright © 2017 xuba5f.bnsdmm.top",navigate:e.isGuest?e.siteUrls:e.authUrls,isFixed:!0}})],1)}),[],!1,null,"e1a4519a",null,!1,a,undefined).exports},86107:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var n,a={uButton:i(1445).Z},s=i(4587),o=(i(41539),i(54747),i(26699),i(35666),{name:"UserCenterCenter",components:{PageFooter:i(18445).Z},beforeCreate:function(){n=this},onLoad:function(){n.init()},onPullDownRefresh:function(){n.getUserInfo().then((function(e){n.$store.dispatch("Auth/setUserInfoAsync",e.data),uni.stopPullDownRefresh()}))},data:function(){return{orderTypeLise:[{code:"publish",name:"已发布",badge:0,classname:"iconfont xuba5-yifabu"},{code:"collect",name:"已收藏",badge:0,classname:"iconfont xuba5-yishoucang"},{code:"buy",name:"已购买",badge:0,classname:"iconfont xuba5-yigoumai"},{code:"leader",name:"你的关注",badge:0,classname:"iconfont xuba5-yiguanzhu"},{code:"fans",name:"你的粉丝",badge:0,classname:"iconfont xuba5-fensi"}]}},methods:{init:function(){n.getBadges()},getUserInfo:function(){return(0,s.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$api.post("/user/center/index");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getBadges:function(){return(0,s.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$api.post("/user/center/get-badges");case 2:t=e.sent,n.orderTypeLise.forEach((function(e,i){n.orderTypeLise[i].badge=t.data[e.code]}));case 4:case"end":return e.stop()}}),e)})))()},toBadge:function(e){["publish"].includes(e)&&uni.navigateTo({url:"/pages/user/resource/PublishedList"}),["collect"].includes(e)&&uni.navigateTo({url:"/pages/user/resource/CollectedList"}),["buy"].includes(e)&&uni.navigateTo({url:"/pages/user/resource/PaidList"}),["leader"].includes(e)&&uni.navigateTo({url:"/pages/user/center/Leaders"}),["fans"].includes(e)&&uni.navigateTo({url:"/pages/user/center/Fans"})},logout:function(){uni.showModal({title:"提示",content:"确定退出登录吗？",success:function(e){e.confirm&&n.$store.dispatch("Auth/logoutAsync").then((function(){uni.navigateTo({url:"/pages/site/Login"})}))}})},flushCache:function(){uni.showModal({title:"警告",content:"确定清空本地缓存吗？清空后需要重新登录",success:function(e){e.confirm&&(n.$cache.flush(),n.$store.dispatch("Auth/logoutAsync").then((function(){uni.navigateTo({url:"/pages/site/Login"})})))}})}}}),r=(i(26295),(0,i(69453).Z)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"face",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/center/UpdateAvatar")}}},[i("v-uni-image",{attrs:{src:e.$store.getters["Auth/getUserInfo"].avatar}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"username"},[e._v(e._s(e.$store.getters["Auth/getUserInfo"].username))]),i("v-uni-view",{staticClass:"integral",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/wallet/LogList")}}},[e._v("余额:"+e._s(e.$store.getters["Auth/getUserInfo"].balance))]),i("v-uni-view",{staticClass:"integral",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/wallet/FrozenList")}}},[e._v("冻结:"+e._s(e.$store.getters["Auth/getUserInfo"].frozen))])],1)],1),i("v-uni-view",{staticClass:"setting",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/center/Edit")}}},[i("i",{staticClass:"iconfont xuba5-setting-fill",style:{color:"#ffffff","font-size":"25px"}})])],1),i("v-uni-view",{staticClass:"orders"},[i("v-uni-view",{staticClass:"box"},e._l(e.orderTypeLise,(function(t,n){return i("v-uni-view",{key:n,staticClass:"label",attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toBadge(t.code)}}},[i("v-uni-view",{staticClass:"icon"},[t.badge>0?i("v-uni-view",{staticClass:"badge"},[e._v(e._s(t.badge))]):e._e(),i("i",{class:t.classname,style:{color:"#000000","font-size":"25px"}})],1),e._v(e._s(t.name))],1)})),1)],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"li",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.flushCache.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon"},[i("i",{staticClass:"iconfont xuba5-15qingkong-2",style:{color:"#ff9300","font-size":"25px"}})]),i("v-uni-view",{staticClass:"text"},[e._v("清空缓存")]),i("i",{staticClass:"iconfont xuba5-right",style:{color:"#aaaaaa","font-size":"25px"}})],1),i("v-uni-view",{staticClass:"li",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/center/UpdatePassword")}}},[i("v-uni-view",{staticClass:"icon"},[i("i",{staticClass:"iconfont xuba5-password1",style:{color:"#ff9300","font-size":"25px"}})]),i("v-uni-view",{staticClass:"text"},[e._v("修改登录密码")]),i("i",{staticClass:"iconfont xuba5-right",style:{color:"#aaaaaa","font-size":"25px"}})],1),i("v-uni-view",{staticClass:"li",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/center/SetPayPassword")}}},[i("v-uni-view",{staticClass:"icon"},[i("i",{staticClass:"iconfont xuba5-password",style:{color:"#ff9300","font-size":"25px"}})]),i("v-uni-view",{staticClass:"text"},[e._v("设置支付密码")]),i("i",{staticClass:"iconfont xuba5-right",style:{color:"#aaaaaa","font-size":"25px"}})],1),i("v-uni-view",{staticClass:"li",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/wallet/CzList")}}},[i("v-uni-view",{staticClass:"icon"},[i("i",{staticClass:"iconfont xuba5-chongzhi",style:{color:"#ff9300","font-size":"25px"}})]),i("v-uni-view",{staticClass:"text"},[e._v("充值订单列表")]),i("i",{staticClass:"iconfont xuba5-right",style:{color:"#aaaaaa","font-size":"25px"}})],1),i("v-uni-view",{staticClass:"li",attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$router.push("/pages/user/wallet/TxList")}}},[i("v-uni-view",{staticClass:"icon"},[i("i",{staticClass:"iconfont xuba5-tixian",style:{color:"#ff9300","font-size":"25px"}})]),i("v-uni-view",{staticClass:"text"},[e._v("提现订单列表")]),i("i",{staticClass:"iconfont xuba5-right",style:{color:"#aaaaaa","font-size":"25px"}})],1)],1),i("v-uni-view",[i("u-button",{attrs:{type:"warning",text:"退出登录"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.logout.apply(void 0,arguments)}}})],1),i("page-footer")],1)}),[],!1,null,"54d86c02",null,!1,a,undefined)),l=r.exports},42241:function(e,t,i){"use strict";i.r(t);var n=i(43481),a=i.n(n),s=i(2400),o=i.n(s)()(a());o.push([e.id,'.fui-footer[data-v-460794e6]{flex:1;\nwidth:100%;box-sizing:border-box;word-break:break-all;\noverflow:hidden;padding-top:%?32?%;padding-bottom:%?32?%;padding-left:%?32?%;padding-right:%?32?%}.fui-footer__fixed-bottom[data-v-460794e6]{position:fixed;z-index:99;bottom:0;left:0;right:0;\nleft:constant(safe-area-inset-left);left:env(safe-area-inset-left);right:constant(safe-area-inset-right);right:env(safe-area-inset-right)\n}.fui-footer__link[data-v-460794e6]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;font-size:%?28?%}\n.fui-link__color uni-text[data-v-460794e6],\n.fui-link__color[data-v-460794e6]{color:var(--fui-color-link,#465cff)!important}\n.fui-link__item[data-v-460794e6]{position:relative;line-height:1}.fui-link__text[data-v-460794e6]{padding:0 %?18?%;\n\nfont-weight:400}.fui-link__text-border[data-v-460794e6]{border-right-width:0}\n.fui-link__item[data-v-460794e6]::before{content:" ";position:absolute;right:0;top:%?4?%;width:1px;bottom:%?4?%;border-right:1px solid var(--fui-color-label,#b2b2b2);-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.fui-link__item[data-v-460794e6]:last-child::before{border-right:0!important}\n.fui-link-hover[data-v-460794e6]{opacity:.5}.fui-footer__text[data-v-460794e6]{flex:1;\n\nline-height:1;text-align:center;padding-top:%?8?%;\npadding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);\nfont-weight:400}\n\n\n\n',""]),t.default=o},86768:function(e,t,i){"use strict";i.r(t);var n=i(43481),a=i.n(n),s=i(2400),o=i.n(s)()(a());o.push([e.id,"@import url(https://at.alicdn.com/t/c/font_3814524_b71c6o96iok.css);"]),o.push([e.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 需要放到文件最上面 */\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* iconfont */.header[data-v-54d86c02]{background-color:#2979ff;width:100%;height:30vw;padding:0 4%;display:flex;align-items:center}.header.status[data-v-54d86c02]{padding-top:0}.header .userinfo[data-v-54d86c02]{width:90%;display:flex}.header .userinfo .face[data-v-54d86c02]{flex-shrink:0;width:15vw;height:15vw}.header .userinfo .face uni-image[data-v-54d86c02]{width:100%;height:100%;border-radius:10%}.header .userinfo .info[data-v-54d86c02]{display:flex;flex-flow:wrap;padding-left:%?30?%}.header .userinfo .info .username[data-v-54d86c02]{width:100%;color:#fff;font-size:%?40?%}.header .userinfo .info .integral[data-v-54d86c02]{display:flex;align-items:center;padding:0 %?20?%;height:%?40?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%}.header .setting[data-v-54d86c02]{flex-shrink:0;width:6vw;height:6vw}.header .setting uni-image[data-v-54d86c02]{width:100%;height:100%}.hover[data-v-54d86c02]{background-color:#eee}.orders[data-v-54d86c02]{background-color:#2979ff;width:100%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:flex;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-54d86c02]{width:98%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:flex;align-items:center;justify-content:center}.orders .box .label[data-v-54d86c02]{display:flex;align-items:center;justify-content:center;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-54d86c02]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-54d86c02]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:flex;align-items:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-54d86c02]{width:7vw;height:7vw;z-index:9}.list[data-v-54d86c02]{width:100%;border-bottom:solid %?26?% #f1f1f1}.list .li[data-v-54d86c02]{width:100%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:flex;align-items:center}.list .li.noborder[data-v-54d86c02]{border-bottom:0}.list .li .icon[data-v-54d86c02]{flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-54d86c02]{width:%?50?%;height:%?50?%}.list .li .text[data-v-54d86c02]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-54d86c02]{flex-shrink:0;width:%?40?%;height:%?40?%}',""]),t.default=o}}]);