"use strict";$(document).ready(function(){new Vue({el:"#loanLoanAdd",data:{loanForm:{loan_user:"",date:"",price:"",reason:""},checkedMen:[],menList:[],selectData:{id:""}},mounted:function(){this.loanForm.date=_helper.timeFormat(new Date,"YYYY-MM-DD"),$("#loanLoanAdd").removeClass("invisible")},methods:{submit:function(){var e=this;_http.LoanManager.createLoanAdd(this.loanForm).then(function(t){"200"===t.data.code?(e.$notify({title:"成功",message:"提交成功",type:"success"}),e.selectData.id=t.data.data.id,_http.UserManager.searchAuthUsers({role:"loan_loan_pass"}).then(function(a){"200"===a.data.code?(e.menList=a.data.data,$(".ui.dimmer").addClass("active")):e.$notify({title:"错误",message:t.data.msg,type:"error"})})):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})},handleCheckManChange:function(e){console.log(this.checkedMen)},confirmRecheck:function(){var e=this;this.selectData.users=this.checkedMen,_http.LoanManager.selectLoan(this.selectData).then(function(t){"200"===t.data.code?(e.$notify({title:"成功",message:"已选择了审批人",type:"success"}),$(".ui.dimmer").removeClass("active")):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});