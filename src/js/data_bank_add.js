"use strict";$(document).ready(function(){new Vue({el:"#dataBankAdd",data:{bankForm:{id:"",name:"",account:""}},mounted:function(){this.bankForm.id=$("#bankId").val()||"",this.bankForm.name=$("#bankName").val()||"",this.bankForm.account=$("#bankAccount").val()||""},methods:{submit:function(){var t=this;_http.BankManager.createBank(this.bankForm).then(function(n){"200"===n.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):console.log(err)}).catch(function(n){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});