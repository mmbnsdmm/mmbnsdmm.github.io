"use strict";(self.webpackChunktest4vuecli=self.webpackChunktest4vuecli||[]).push([[6346],{69528:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n,r={uSticky:a(91130).Z,uSearch:a(70308).Z,uEmpty:a(83525).Z,uniList:a(40105).Z,uniListItem:a(64371).Z,pagePagination:a(95299).Z,uniFab:a(44888).Z},i=a(4587),o=(a(35666),{name:"UserFrozenLogList",components:{PagePagination:a(95299).Z},beforeCreate:function(){n=this},onLoad:function(){n.getList(0)},onPullDownRefresh:function(){return(0,i.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getList(0);case 2:uni.stopPullDownRefresh();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{filterData:{searchOrderno:""},pageData:{pageSize:10,currentPage:1,items:[],count:0,total:0,pageCount:1}}},methods:{getList:function(e){return(0,i.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$api.post("/user/wallet/frozen-list",{page:e-1,searchStr:n.filterData.searchOrderno});case 2:a=t.sent,n.pageData.total=a._meta.totalCount,n.pageData.pageCount=a._meta.pageCount,n.pageData.pageSize=a._meta.perPage,n.pageData.currentPage=a._meta.currentPage+1,n.pageData.count=a.count,n.pageData.items=a.items;case 9:case"end":return t.stop()}}),t)})))()},changePage:function(e){n.getList(e)},fabTrigger:function(e){"充值"===e.item.text&&uni.navigateTo({url:"/pages/user/wallet/Cz"}),"提现"===e.item.text&&uni.navigateTo({url:"/pages/user/wallet/Tx"})}}}),s=(0,a(69453).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("u-sticky",{attrs:{bgColor:"#eee"}},[a("u-search",{attrs:{showAction:!0,actionText:"搜索",placeholder:"请输入订单号",animation:!1,shape:"shuare"},on:{custom:function(t){arguments[0]=t=e.$handleEvent(t),e.getList(0)},clear:function(t){arguments[0]=t=e.$handleEvent(t),e.getList(0)}},model:{value:e.filterData.searchKeyword,callback:function(t){e.$set(e.filterData,"searchKeyword",t)},expression:"filterData.searchKeyword"}})],1),a("v-uni-view",[0===e.pageData.total?a("v-uni-view",[a("u-empty",{attrs:{mode:"list"}})],1):e._e(),e._l(e.pageData.items,(function(e,t){return a("v-uni-view",{key:t},[a("uni-list",{attrs:{border:!0}},[a("uni-list-item",{attrs:{title:e.type_model_orderno,note:e._created_at+" [冻"+e.frozen_snapshot+"]",rightText:e._type,showBadge:!0,badgeStyle:{backgroundColor:"+"===e._type_sz?"rgb(243,216,58)":"#ff2700"},badgeText:e._type_sz+" "+e.amount}})],1)],1)})),e.pageData.total>10?a("page-pagination",{attrs:{total:e.pageData.total,pageSize:e.pageData.pageSize,currentPage:e.pageData.currentPage,showAround:!0,forceEllipses:!0,numAround:!0,showPageSize:6,showPageInfo:!0,showGoPage:!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePage.apply(void 0,arguments)}}}):e._e()],2),a("uni-fab",{attrs:{horizontal:"right",content:[{iconPath:e.$cdnFiles.images.cz,text:"充值"},{iconPath:e.$cdnFiles.images.tx,text:"提现"}]},on:{trigger:function(t){arguments[0]=t=e.$handleEvent(t),e.fabTrigger.apply(void 0,arguments)}}})],1)}),[],!1,null,"e5496b40",null,!1,r,undefined),u=s.exports}}]);