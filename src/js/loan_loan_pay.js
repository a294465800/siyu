"use strict";$(document).ready(function(){new Vue({el:"#loanLoanPay",data:{loanForm:{manager:"",pay_data:"",bank:"",account:"",type:""}},mounted:function(){this.loanForm.id=$("#payId").val()||"",this.loanForm.manager=$("#manager").val()||"",this.loanForm.bank=$("#bank").val()||"",this.loanForm.account=$("#account").val()||"",$("#loanLoanPay").removeClass("invisible"),this.loanForm.date=_helper.timeFormat(new Date,"YYYY-MM-DD")},methods:{submit:function(){var a=this;_http.LoanManager.payLoan(this.loanForm).then(function(t){"200"===t.data.code?a.$notify.success({title:"成功",message:"提交成功！"}):a.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});