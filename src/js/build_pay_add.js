"use strict";$(document).ready(function(){new Vue({el:"#buildPayAdd",data:{addForm:{date:_helper.timeFormat(new Date,"YYY-MM-DD"),worker:"",bank_id:"",payee_account:"",remark:"",apply_id:""},banks:[]},mounted:function(){var t=this;this.addForm.bank_id=$("#bankAccount").val()||"",this.addForm.apply_id=$("#applyId").val()||"",$(".ui.dropdown").dropdown(),_http.BankManager.searchBank().then(function(a){"200"===a.data.code?t.banks=a.data.data:t.$notify({title:"错误",message:a.data.msg,type:"error"})}).catch(function(a){t.$notify({title:"错误",message:"服务器出错",type:"error"})})},methods:{submit:function(){var t=this;_http.TeamManager.createPayAdd(this.addForm).then(function(a){"200"===a.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:a.data.msg,type:"error"})}).catch(function(a){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});