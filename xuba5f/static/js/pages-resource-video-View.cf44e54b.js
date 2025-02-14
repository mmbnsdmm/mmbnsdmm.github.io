"use strict";(self.webpackChunktest4vuecli=self.webpackChunktest4vuecli||[]).push([[599],{92528:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a,n={uSubsection:i(97759).Z,uniCard:i(67017).Z,uLine:i(43996).Z,uniFav:i(43627).Z,uCellGroup:i(95759).Z,uCell:i(2991).Z,uButton:i(1445).Z,uEmpty:i(83525).Z,pagePagination:i(95299).Z,uniRow:i(50447).Z,uniCol:i(63933).Z,uAvatar:i(39489).Z,"u-Text":i(4827).Z,uniRate:i(17425).Z,"u-Textarea":i(51743).Z},o=i(4587),u=(i(35666),i(57658),i(77265),i(95299)),s=i(18445),r=i(10923),c=i.n(r),l=i(93041),d={name:"ResourceVideoView",components:{PagePagination:u.Z,PageFooter:s.Z},beforeCreate:function(){a=this},onLoad:function(){a.getVideo()},activated:function(){a.getVideo()},data:function(){return{isGetting:!1,canReFlushVideoCoutdown:"",isReFlushVideo:!1,isDownloadUrlShow:!1,video:{id:0},videoMustBuy:0,isThumbShow:!1,criticismRateValue:0,criticismContentValue:"",subsectionData:{list:["内容","圈子"],current:0},pageDataContent:{pageSize:10,currentPage:1,items:[],count:0,total:0,pageCount:1},pageDataTag:{pageSize:10,currentPage:1,items:[],count:0,total:0,pageCount:1},pageDataOrder:{pageSize:10,currentPage:1,items:[],count:0,total:0,pageCount:1}}},watch:{canReFlushVideoCoutdown:function(e){e<=0&&(a.canReFlushVideoCoutdown="")}},methods:{getVideo:function(){return(0,o.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.isGetting){e.next=10;break}return a.isGetting=!0,e.next=4,a.$model.Resource.getOrSetCacheById(a.$route.query.id,a.$Route.query.updated_at);case 4:a.video=e.sent,100!==a.video._videos[0]._userFile.m3u8_job_status&&uni.$u.toast("视频文件正在转码中，请稍后刷新重试"),a.video.created_by!==a.$store.getters["Auth/getUserInfo"].id&&a.video.price>0&&0===a.video._isBuy&&(a.videoMustBuy=1),a.video.price>0&&a.subsectionData.list.length<3&&a.subsectionData.list.push("买家评价"),100!==a.video._videos[0]._userFile.m3u8_job_status?a.reFlushVideoCoutdown():a.videoMustBuy||a.initMuiPlayer(),a.isGetting=!1;case 10:case"end":return e.stop()}}),e)})))()},initMuiPlayer:function(){new(c())({container:"#mui-player",title:a.video.title,height:"225px",autoFit:!1,src:a.video._videos[0]._userFile._m3u8Aburl,parse:{type:"hls",loader:l.Z,config:{debug:!0}}})},reFlushVideo:function(){a.getVideo()},reFlushVideoCoutdown:function(){a.isReFlushVideo=!0;a.canReFlushVideoCoutdown=120;var e=setInterval((function(){(a.canReFlushVideoCoutdown<=0||""===a.canReFlushVideoCoutdown)&&clearInterval(e),a.canReFlushVideoCoutdown--}),1e3);setTimeout((function(){a.isReFlushVideo=!1}),12e4)},editVideo:function(e){uni.navigateTo({url:"/pages/resource/video/Edit?id="+e.id})},subsectionSectionChange:function(e){a.subsectionData.current=e,1===e&&a.video._tag_total>0&&a.pageDataTag.count<=0&&a.getTagList(1),2===e&&a.getOrderList(1)},getTagList:function(e){return(0,o.Z)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$api.post("/resource/default/get-tag-list-by-id",{id:a.video.id,page:e-1});case 2:i=t.sent,a.pageDataTag.total=i._meta.totalCount,a.pageDataTag.pageCount=i._meta.pageCount,a.pageDataTag.pageSize=i._meta.perPage,a.pageDataTag.currentPage=i._meta.currentPage+1,a.pageDataTag.count=i.count,a.pageDataTag.items=i.items;case 9:case"end":return t.stop()}}),t)})))()},changeTagPage:function(e){a.getTagList(e)},getOrderList:function(e){return(0,o.Z)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$api.post("/resource/default/get-order-list-by-id",{id:a.video.id,page:e-1});case 2:i=t.sent,a.pageDataOrder.total=i._meta.totalCount,a.pageDataOrder.pageCount=i._meta.pageCount,a.pageDataOrder.pageSize=i._meta.perPage,a.pageDataOrder.currentPage=i._meta.currentPage+1,a.pageDataOrder.count=i.count,a.pageDataOrder.items=i.items;case 9:case"end":return t.stop()}}),t)})))()},changeOrderPage:function(e){a.getOrderList(e)},criticism:function(e){uni.showModal({title:"提示",content:"确定要评价吗？每单只能评价一次，完成后不能修改！",success:function(t){t.confirm&&a.$api.post("/resource/order/criticism",{order_id:e.id,rate:a.criticismRateValue,msg:a.criticismContentValue}).then((function(e){uni.$u.toast("评价成功"),a.getOrderList(a.pageDataOrder.currentPage)}))}})},buy:function(e){100*a.$store.getters["Auth/getUserInfo"].balance<100*a.video.price?a.$u.toast("余额不足"):uni.showModal({title:"购买提示",content:"确定要购买这个视频吗？",success:function(t){t.confirm&&a.$api.post("/resource/default/buy",{id:e.id}).then((function(t){uni.$u.toast("购买成功"),a.$model.Resource.deleteCacheById(e.id),location.reload()}))}})},cz:function(){uni.showModal({title:"跳转提示",content:"确定要去充值吗？",success:function(e){e.confirm&&uni.navigateTo({url:"/pages/user/wallet/Cz"})}})},toTag:function(e){uni.navigateTo({url:"/pages/tag/Info?id="+e.id+"&updated_at="+e.updated_at})},forceView:function(){a.videoMustBuy=0,a.initMuiPlayer()},copyDownloadUrl:function(){return(0,o.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.video._videos[0]._userFile._fileDownloadAburl,e.prev=1,e.next=4,navigator.clipboard.writeText(t);case 4:uni.$u.toast("复制成功"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a.copyText(t);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},copyText:function(e){var t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")?uni.$u.toast("文本已成功复制到剪贴板"):(uni.$u.toast("复制失败，你可以扫码下载"),a.isDownloadUrlShow=!0)}catch(e){uni.$u.toast("复制失败，你可以扫码下载"),a.isDownloadUrlShow=!0}finally{document.body.removeChild(t)}}}},v=(0,i(69453).Z)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.video.id>0&&0===e.videoMustBuy&&100===e.video._videos[0]._userFile.m3u8_job_status,expression:"video.id > 0 && videoMustBuy === 0 && video._videos[0]._userFile.m3u8_job_status === 100"}]},[i("v-uni-view",{attrs:{id:"mui-player"}})],1),e.video.id>0?i("v-uni-view",[e.videoMustBuy>0?i("v-uni-image",{staticClass:"image",style:{width:"100%"},attrs:{mode:"scaleToFill",src:e.$cdnFiles.images["no-access"]}}):100!==e.video._videos[0]._userFile.m3u8_job_status?i("v-uni-image",{staticClass:"image",style:{width:"100%"},attrs:{mode:"scaleToFill",src:e.$cdnFiles.images.waiting}}):e._e()],1):e._e(),e.video.id>0?i("v-uni-view",[i("u-subsection",{attrs:{list:e.subsectionData.list,current:e.subsectionData.current},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.subsectionSectionChange.apply(void 0,arguments)}}}),i("v-uni-view",{class:{"p-[15px]":!0}},[0===e.subsectionData.current?i("v-uni-view",[i("uni-card",{attrs:{margin:"0",padding:"0",spacing:"0",thumbnail:e.video._createdBy.avatar,title:e.video._createdBy.username,"sub-title":e.video._createdBy.email,extra:e.$moment(1e3*e.video.created_at).fromNow()},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$model.User.toProfile(e.video.created_by)}}}),i("u-line"),i("v-uni-view",[e.video.created_by!==e.$store.getters["Auth/getUserInfo"].id?i("uni-fav",{staticClass:"float-left",attrs:{checked:!!e.video._isFav},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$model.Resource.toggleFav(e.video)}}}):e._e(),1===e.video.privacy_status?i("i",{staticClass:"iconfont xuba5-password1",style:{color:"#ff9300"}}):e._e(),2===e.video.privacy_status?i("i",{staticClass:"iconfont xuba5-fy_ic_unlock",style:{color:"#1afa29"}}):e._e(),e.video._canEdit?i("i",{staticClass:"float-right iconfont xuba5-edit-fill",style:{color:"#1296db","font-size":"20px","margin-top":"2px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editVideo(e.video)}}}):e._e(),e.video._canEdit?i("i",{staticClass:"float-right iconfont xuba5-delete",style:{color:"#d81e06","font-size":"20px","margin-top":"2px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$model.Resource.del(e.video)}}}):e._e()],1),i("u-line",{attrs:{color:"#2979ff"}}),i("u-cell-group",[i("u-cell",{attrs:{title:"时长",value:e.video._videos[0]._userFile.duration}})],1),e.videoMustBuy>0?i("v-uni-view",[i("u-cell-group",[i("u-cell",{attrs:{title:"价格",value:"￥"+e.video.price}}),i("u-cell",{attrs:{title:"你的余额",value:"￥"+e.$store.getters["Auth/getUserInfo"].balance}}),i("u-cell",{attrs:{title:"收益人",value:e.video._createdBy.username}}),i("u-cell",{attrs:{title:"收益人邮箱",value:e.video._createdBy.email}})],1),i("v-uni-view",[i("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.buy(e.video)}}},[e._v("购买")]),i("u-button",{attrs:{type:"warning"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cz.apply(void 0,arguments)}}},[e._v("充值")]),e.$store.getters["Auth/getUserInfo"].is_admin?i("u-button",{attrs:{type:"error"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forceView.apply(void 0,arguments)}}},[e._v("强制查看")]):e._e()],1)],1):i("v-uni-view",[i("v-uni-view",[i("u-button",{class:{"mb-[5px]":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyDownloadUrl.apply(void 0,arguments)}}},[e._v("复制下载链接")]),e.isDownloadUrlShow?i("v-uni-view",[e._v(e._s(e.video._videos[0]._userFile._fileDownloadAburl)),e.isDownloadUrlShow?i("v-uni-image",{attrs:{mode:"aspectFit",src:e.video._videos[0]._userFile._fileDownloadQrcode}}):e._e(),i("u-button",{class:{"mb-[5px]":!0},attrs:{type:"warning"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isDownloadUrlShow=!e.isDownloadUrlShow}}},[e._v("隐藏链接二维码")])],1):e._e()],1),i("v-uni-view",[100!==e.video._videos[0]._userFile.m3u8_job_status?i("u-button",{class:{"mb-[15px]":!0},attrs:{type:"error",disabled:e.isReFlushVideo},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reFlushVideo.apply(void 0,arguments)}}},[e._v("重新刷新获取视频"+e._s(e.canReFlushVideoCoutdown))]):e._e()],1)],1),i("v-uni-view",{class:{"mt-[5px]":!0}},[i("v-uni-view",[i("u-button",{class:{"mb-[5px]":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isThumbShow=!e.isThumbShow}}},[e._v("展示/隐藏预览图")]),e.video._videos[0]._userFile.m3u8_screenshots.length>0?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.isThumbShow,expression:"isThumbShow"}]},e._l(e.video._videos[0]._userFile.m3u8_screenshots,(function(e,t){return i("v-uni-image",{key:t,staticClass:"image",style:{width:"100%"},attrs:{mode:"aspectFit",src:e}})})),1):e._e()],1)],1)],1):e._e(),1===e.subsectionData.current?i("v-uni-view",[e.video._tag_total<1?i("v-uni-view",[i("u-empty",{attrs:{mode:"list"}})],1):e._e(),e._l(e.pageDataTag.items,(function(t,a){return i("v-uni-view",{key:a},[i("v-uni-view",[e._v(e._s(t.name)),t._isJoinIn?i("u-button",{staticClass:"float-right",staticStyle:{width:"fit-content"},attrs:{size:"mini",type:"info"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toTag(t)}}},[e._v("进入")]):e._e(),t._isJoinIn?i("u-button",{staticClass:"float-right",staticStyle:{width:"fit-content"},attrs:{size:"mini",type:"warning"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$model.Tag.exit(t)}}},[e._v("退出")]):e._e(),t._isJoinIn?e._e():i("u-button",{staticClass:"float-right",staticStyle:{width:"fit-content"},attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$model.Tag.joinIn(t)}}},[e._v("加入")])],1),i("u-line",{attrs:{color:"#2979ff"}})],1)})),e.pageDataTag.total>10?i("page-pagination",{attrs:{total:e.pageDataTag.total,pageSize:e.pageDataTag.pageSize,currentPage:e.pageDataTag.currentPage,showAround:!0,forceEllipses:!0,numAround:!0,showPageSize:6,showPageInfo:!0,showGoPage:!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTagPage.apply(void 0,arguments)}}}):e._e()],2):e._e(),2===e.subsectionData.current?i("v-uni-view",[e.video._order_total<1?i("v-uni-view",[i("u-empty",{attrs:{mode:"list"}})],1):e._e(),e._l(e.pageDataOrder.items,(function(t,a){return i("v-uni-view",{key:a},[i("uni-row",{class:{"pb-[15px]":!0}},[i("uni-col",{attrs:{span:4}},[i("u-avatar",{attrs:{shape:"square",src:t._createdBy.avatar},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$model.User.toProfile(t.created_by)}}})],1),i("uni-col",{attrs:{span:20}},[i("u--text",{attrs:{text:t._createdBy.username,type:"primary",bold:!0,size:"16"}}),i("v-uni-view",{class:{"mt-[5px]":!0}}),null===t.buyer_rate?i("v-uni-view",[t.created_by===e.$store.getters["Auth/getUserInfo"].id?i("v-uni-view",[i("uni-rate",{model:{value:e.criticismRateValue,callback:function(t){e.criticismRateValue=t},expression:"criticismRateValue"}}),i("v-uni-view",{class:{"mt-[5px]":!0}}),i("v-uni-view",[i("u--textarea",{attrs:{placeholder:"请输入评价内容，只能评价一次，评价完后不可修改评价"},model:{value:e.criticismContentValue,callback:function(t){e.criticismContentValue=t},expression:"criticismContentValue"}})],1),i("v-uni-view",{class:{"mt-[5px]":!0}}),i("u-button",{staticClass:"float-left",staticStyle:{width:"fit-content"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.criticism(t)}}},[e._v("评价")])],1):i("v-uni-view",[e._v("未评价")])],1):i("v-uni-view",[i("uni-rate",{attrs:{value:t.buyer_rate,readonly:!0}}),i("v-uni-view",{class:{"mt-[5px]":!0}}),i("v-uni-view",[e._v(e._s(t.buyer_criticism))])],1)],1)],1)],1)})),e.pageDataOrder.total>10?i("page-pagination",{attrs:{total:e.pageDataOrder.total,pageSize:e.pageDataOrder.pageSize,currentPage:e.pageDataOrder.currentPage,showAround:!0,forceEllipses:!0,numAround:!0,showPageSize:6,showPageInfo:!0,showGoPage:!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeOrderPage.apply(void 0,arguments)}}}):e._e()],2):e._e()],1)],1):e._e(),e._e()],1)}),[],!1,null,"4ad5697a",null,!1,n,undefined),g=v.exports}}]);