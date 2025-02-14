(self.webpackChunktest4vuecli=self.webpackChunktest4vuecli||[]).push([[2818],{10718:function(t,e,a){var i=a(30120);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,a(56).Z)("8a4348ee",i,!0,{sourceMap:!1,shadowMode:!1})},54782:function(t,e,a){"use strict";a.d(e,{Z:function(){return r}});var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick(){this.$emit("click")}}},n=(a(10718),(0,a(69453).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-section"},[a("v-uni-view",{staticClass:"uni-section-header",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.type?a("v-uni-view",{staticClass:"uni-section-header__decoration",class:t.type}):t._t("decoration"),a("v-uni-view",{staticClass:"uni-section-header__content"},[a("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{"font-size":t.titleFontSize,color:t.titleColor}},[t._v(t._s(t.title))]),t.subTitle?a("v-uni-text",{staticClass:"uni-section-header__content-sub",style:{"font-size":t.subTitleFontSize,color:t.subTitleColor}},[t._v(t._s(t.subTitle))]):t._e()],1),a("v-uni-view",{staticClass:"uni-section-header__slot-right"},[t._t("right")],2)],2),a("v-uni-view",{staticClass:"uni-section-content",style:{padding:t._padding}},[t._t("default")],2)],1)}),[],!1,null,"f2578578",null,!1,undefined,undefined)),r=n.exports},5855:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var i,n={uniRow:a(50447).Z,uniForms:a(99241).Z,uniCol:a(63933).Z,uniFormsItem:a(77720).Z,uniEasyinput:a(69958).Z,uniDataCheckbox:a(67370).Z,uButton:a(1445).Z},r=a(4587),s=(a(35666),a(57658),a(41539),a(54747),a(96647),a(39714),a(26699),a(32023),a(38862),{name:"ResourceArticle_Form",components:{VueEditor:a(2739).bR},beforeCreate:function(){i=this},mounted:function(){i.$refs.form.setRules(i.articleRules),i.$tool.foreach(i.$store.getters["BaseData/getEnums"].resource.privacyStatusDesc,(function(t,e){var a={text:e,value:t};i.dataMaps.privacy_status.push(a)})),i.$tool.foreach(i.$store.getters["BaseData/getEnums"].resource.createTypeDesc,(function(t,e){var a={text:e,value:t};i.dataMaps.create_type.push(a)})),i.$store.getters["Auth/getUserInfo"]._tags.forEach((function(t,e){var a={};a.value=t.id,a.text=t.name,a.disable=!1,i.dataMaps.sel_tags.push(a),i.dataMaps.sel_tag_ids.push(a.value)}))},props:{article:{type:Object,default:function(){return{id:0}}}},data:function(){return{formData:{id:0,title:"",privacy_status:"2",create_type:"1",price:0,get_password:"",content:"",tag_ids:[]},dataMaps:{privacy_status:[],create_type:[],sel_tags:[],sel_tag_ids:[]},articleRules:{title:{rules:[{required:!0,errorMessage:"请输入标题"}]},price:{rules:[{required:!0,errorMessage:"请输入购买金额"},{validateFunction:function(t,e,a,i){return(e<0||e>100)&&i("价格必须为正数且不能超过100"),!0}},{pattern:"^(0|[1-9]\\d*)(.\\d{1,2})?$",errorMessage:"格式不正确"}]}}}},watch:{article:function(t){i.$set(i.formData,"id",t.id.toString()),i.$set(i.formData,"title",t.title.toString()),i.$set(i.formData,"privacy_status",t.privacy_status.toString()),i.$set(i.formData,"create_type",t.create_type.toString()),i.$set(i.formData,"price",t.price.toString()),i.$set(i.formData,"content",t._contents[0].content.toString()),t._tags.forEach((function(t,e){if(!i.formData.tag_ids.includes(t.id)&&(i.formData.tag_ids.push(t.id),!i.dataMaps.sel_tag_ids.includes(t.id))){var a={};a.value=t.id,a.text=t.name,a.disable=!0,i.dataMaps.sel_tags.push(a),i.dataMaps.sel_tag_ids.push(a.id)}}))}},methods:{handleImageAdded:function(t,e,a,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){var t={base64:this.result};i.$api.post("/user/file/upload",t).then((function(t){var i=t.urls[0];e.insertEmbed(a,"image",i),n()}))}},doSave:function(){i.$refs.form.validate().then(function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:i.formData.id,title:i.formData.title,privacy_status:i.formData.privacy_status,create_type:i.formData.create_type,price:i.formData.price,content:i.formData.content,tag_ids:JSON.stringify(i.formData.tag_ids)},t.next=3,i.$api.post("/resource/article/create-or-update",a);case 3:if(200!==(n=t.sent).status){t.next=11;break}return i.$model.Resource.deleteCacheById(n.id),t.next=8,i.$model.Resource.getOrSetCacheById(n.id,i.$tool.getTimestamp());case 8:r=t.sent,uni.$u.toast("保存成功"),0===a.id&&uni.navigateTo({url:"/pages/resource/article/View?id="+r.id+"&updated_at="+r.updated_at});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){}))}}}),o=s,c=(0,a(69453).Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{class:{"p-[15px]":!0}},[a("uni-row",[a("uni-forms",{ref:"form",attrs:{modelValue:t.formData,rules:t.articleRules,"label-width":75}},[a("uni-col",{attrs:{span:24}},[a("uni-forms-item",{attrs:{label:"标题",name:"title",required:!0}},[a("uni-easyinput",{attrs:{type:"text",maxlength:"180",placeholder:"请输入文章标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("uni-forms-item",{attrs:{label:"是否隐私",name:"privacy_status",required:!0}},[a("uni-data-checkbox",{attrs:{localdata:t.dataMaps.privacy_status},model:{value:t.formData.privacy_status,callback:function(e){t.$set(t.formData,"privacy_status",e)},expression:"formData.privacy_status"}})],1),a("uni-forms-item",{attrs:{label:"创作类型",name:"create_type",required:!0}},[a("uni-data-checkbox",{attrs:{localdata:t.dataMaps.create_type},model:{value:t.formData.create_type,callback:function(e){t.$set(t.formData,"create_type",e)},expression:"formData.create_type"}})],1),a("uni-forms-item",{attrs:{label:"价格",name:"price",required:!0}},[a("uni-easyinput",{attrs:{type:"number",maxlength:"6",placeholder:"请输入价格"},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}})],1),t._e(),t.dataMaps.sel_tags.length>0?a("uni-forms-item",{attrs:{label:"圈子",name:"tag_ids"}},[a("uni-data-checkbox",{attrs:{localdata:t.dataMaps.sel_tags,multiple:!0},model:{value:t.formData.tag_ids,callback:function(e){t.$set(t.formData,"tag_ids",e)},expression:"formData.tag_ids"}})],1):t._e(),a("vue-editor",{attrs:{useCustomImageHandler:!0},on:{"image-added":function(e){arguments[0]=e=t.$handleEvent(e),t.handleImageAdded.apply(void 0,arguments)}},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}}),a("v-uni-view",{class:{"pb-[15px]":!0}})],1),a("uni-col",{attrs:{span:24}},[a("u-button",{attrs:{type:"primary",size:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doSave.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1)],1)],1)}),[],!1,null,"38b76685",null,!1,n,undefined),u=c.exports},30120:function(t,e,a){"use strict";a.r(e);var i=a(43481),n=a.n(i),r=a(2400),s=a.n(r)()(n());s.push([t.id,"@import url(https://at.alicdn.com/t/c/font_3814524_b71c6o96iok.css);"]),s.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 需要放到文件最上面 */\n/* 水平间距 */\n/* 水平间距 */\n/*\n 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值\n */\n/* 水平间距 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* iconfont */.uni-section[data-v-f2578578]{background-color:#fff}.uni-section .uni-section-header[data-v-f2578578]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-f2578578]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-f2578578]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-f2578578]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-f2578578]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-f2578578]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-f2578578]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-f2578578]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-f2578578]{font-size:14px}.uni-section .uni-section-content[data-v-f2578578]{font-size:14px}',""]),e.default=s}}]);