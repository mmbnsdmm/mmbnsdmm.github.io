(self.webpackChunktest4vuecli=self.webpackChunktest4vuecli||[]).push([[9489],{14477:function(A,t,a){var e=a(60742);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[A.id,e,""]]),e.locals&&(A.exports=e.locals);(0,a(56).Z)("80fd5c4e",e,!0,{sourceMap:!1,shadowMode:!1})},39489:function(A,t,a){"use strict";a.d(t,{Z:function(){return o}});var e={uIcon:a(37547).Z,"u-Text":a(4827).Z},n=(a(82772),a(9653),a(74916),a(77601),{props:{src:{type:String,default:uni.$u.props.avatar.src},shape:{type:String,default:uni.$u.props.avatar.shape},size:{type:[String,Number],default:uni.$u.props.avatar.size},mode:{type:String,default:uni.$u.props.avatar.mode},text:{type:String,default:uni.$u.props.avatar.text},bgColor:{type:String,default:uni.$u.props.avatar.bgColor},color:{type:String,default:uni.$u.props.avatar.color},fontSize:{type:[String,Number],default:uni.$u.props.avatar.fontSize},icon:{type:String,default:uni.$u.props.avatar.icon},mpAvatar:{type:Boolean,default:uni.$u.props.avatar.mpAvatar},randomBgColor:{type:Boolean,default:uni.$u.props.avatar.randomBgColor},defaultUrl:{type:String,default:uni.$u.props.avatar.defaultUrl},colorIndex:{type:[String,Number],validator:function(A){return uni.$u.test.range(A,[0,19])||""===A},default:uni.$u.props.avatar.colorIndex},name:{type:String,default:uni.$u.props.avatar.name}}}),r={name:"u-avatar",mixins:[uni.$u.mpMixin,uni.$u.mixin,n],data:function(){return{colors:["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],avatarUrl:this.src,allowMp:!1}},watch:{src:{immediate:!0,handler:function(A){this.avatarUrl=A,A||this.errorHandler()}}},computed:{imageStyle:function(){return{}}},created:function(){this.init()},methods:{init:function(){},isImg:function(){return-1!==this.src.indexOf("/")},errorHandler:function(){this.avatarUrl=this.defaultUrl||"data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"},clickHandler:function(){this.$emit("click",this.name)}}},i=(a(14477),(0,a(69453).Z)(r,(function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-uni-view",{staticClass:"u-avatar",class:["u-avatar--"+A.shape],style:[{backgroundColor:A.text||A.icon?A.randomBgColor?A.colors[""!==A.colorIndex?A.colorIndex:A.$u.random(0,19)]:A.bgColor:"transparent",width:A.$u.addUnit(A.size),height:A.$u.addUnit(A.size)},A.$u.addStyle(A.customStyle)],on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.clickHandler.apply(void 0,arguments)}}},[A._t("default",[A.mpAvatar&&A.allowMp?void 0:A.icon?a("u-icon",{attrs:{name:A.icon,size:A.fontSize,color:A.color}}):A.text?a("u--text",{attrs:{text:A.text,size:A.fontSize,color:A.color,align:"center",customStyle:"justify-content: center"}}):a("v-uni-image",{staticClass:"u-avatar__image",class:["u-avatar__image--"+A.shape],style:[{width:A.$u.addUnit(A.size),height:A.$u.addUnit(A.size)}],attrs:{src:A.avatarUrl||A.defaultUrl,mode:A.mode},on:{error:function(t){arguments[0]=t=A.$handleEvent(t),A.errorHandler.apply(void 0,arguments)}}})])],2)}),[],!1,null,"661f3ba6",null,!1,e,undefined)),o=i.exports},60742:function(A,t,a){"use strict";a.r(t);var e=a(43481),n=a.n(e),r=a(2400),i=a.n(r)()(n());i.push([A.id,"@import url(https://at.alicdn.com/t/c/font_3814524_b71c6o96iok.css);"]),i.push([A.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 需要放到文件最上面 */\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* iconfont */uni-view[data-v-661f3ba6], uni-scroll-view[data-v-661f3ba6], uni-swiper-item[data-v-661f3ba6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-avatar[data-v-661f3ba6]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center}.u-avatar--circle[data-v-661f3ba6]{border-radius:100px}.u-avatar--square[data-v-661f3ba6]{border-radius:4px}.u-avatar__image--circle[data-v-661f3ba6]{border-radius:100px;overflow:hidden}.u-avatar__image--square[data-v-661f3ba6]{border-radius:4px}',""]),t.default=i}}]);