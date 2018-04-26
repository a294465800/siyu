"use strict";$(document).ready(function(){new Vue({el:"#loanPayAdd",data:{loanForm:{name:"",date:"",bank:"",account:"",daduction:"",cash:"",transfer:"",bank_index:""},currentList:[],bankList:[],submitConfirmDialog:!1,throttle:{user_timer:null}},mounted:function(){$("#loanPayAdd").removeClass("invisible"),this.loanForm.date=_helper.timeFormat(new Date,"YYYY-MM-DD");var t=$("#banks").text().trim();this.bankList=""===t?[]:JSON.parse(t)},computed:{currentCheckedList:function(){var t=[];return this.currentList.forEach(function(e,n){e.checked&&t.push({index:n,value:e})}),t},listAmount:function(){var t=0;return this.currentList.forEach(function(e,n){t+=parseFloat(e.price)}),t},checkAmount:function(){var t=0;return this.currentCheckedList.forEach(function(e,n){t+=parseFloat(e.price)}),t},deAmount:function(){return this.checkAmount-parseFloat(this.loanForm.daduction)}},methods:{bankChange:function(t){try{this.loanForm.account=this.bankList[t].account,this.loanForm.bank=this.bankList[t].id}catch(t){console.log(t)}},querySearchMen:function(t,e){var n=this;this.throttle.user_timer&&clearTimeout(this.throttle.user_timer),this.throttle.user_timer=setTimeout(function(){var a={name:t};_http.LoanManager.loanUser(a).then(function(t){"200"===t.data.code?e(t.data.data):n.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){n.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectMen:function(t){this.loanForm.name=t.name,this.searchList(t.name)},searchList:function(t){var e=this;_http.LoanManager.loanListCheck({name:t}).then(function(t){"200"===t.data.code?e.currentList=t.data.data:e.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})},confirmList:function(){console.log(this.currentCheckedList),this.currentCheckedList.length?this.submitConfirmDialog=!0:this.$notify({title:"错误",message:"请选中付款内容",type:"error"})},submit:function(){var t=this,e=this.loanForm;e.lists=this.currentCheckedList.reduce(function(t,e){return t.concat([e.value.id])},[]),_http.LoanManager.createPayAddPost(e).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg||"未知错误",type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});