"use strict";$(document).ready(function(){new Vue({el:"#loanLoanAdd",data:{loanForm:{loan_user:"",date:"",price:"",reason:""},checkedMen:[],menList:[{id:1,name:"张先生"},{id:2,name:"陈一发"},{id:3,name:"刘芳芳"},{id:4,name:"乌达奇"},{id:5,name:"何求"}]},mounted:function(){$("#loanLoanAdd").removeClass("invisible"),this.loanForm.date=_helper.timeFormat(new Date,"YYYY-MM-DD")},methods:{submit:function(){var e=this;_http.LoanManager.createLoanAdd(this.loanForm).then(function(t){"200"===t.data.code?(e.$notify({title:"成功",message:"提交成功",type:"success"}),$(".ui.dimmer").addClass("active")):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})},handleCheckManChange:function(e){console.log(this.checkedMen)},confirmRecheck:function(){this.$notify({title:"成功",message:"已选择了审批人",type:"success"}),$(".ui.dimmer").removeClass("active")}}})});