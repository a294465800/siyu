"use strict";$(document).ready(function(){new Vue({el:"#payPay",data:{payForm:{worker:"",pay_date:"",cash:"",transfer:"",other:"",bank:"",account:"",remark:"",bankIndex:""},bankList:[],postForm:{request_id:"",lists:[]},bankMap:{}},mounted:function(){var t=this,s=$("#bankList").text().trim(),a=$("#payList").text().trim();this.postForm.request_id=$("#requestId").val()||"",this.worker=$("#worker").val()||"",this.bankList=""===s?[]:JSON.parse(s),this.bankList.forEach(function(s){t.bankMap[s.id]={name:s.name,id:s.id,account:s.account}}),this.postForm.lists=""===a?[]:JSON.parse(a),this.postForm.lists.forEach(function(s){s.account=t.bankMap[s.bank].account||""}),$("#payPay").removeClass("invisible"),this.postForm.lists.length||this.addItem()},methods:{addItem:function(){var t={pay_date:_helper.timeFormat(new Date,"YYYY-MM-DD"),worker:this.worker,bank:"",account:"",transfer:"",cash:""};this.postForm.lists.push(t)},deleteItem:function(t,s){this.postForm.lists.splice(s,1)},selectBank:function(t,s){var a=this.bankMap[t];this.postForm.lists[s].bank=a.id,this.postForm.lists[s].account=a.account},submit:function(){var t=this;_http.PaymentManager.createNewPayPay(this.postForm).then(function(s){"200"===s.data.code?(t.$notify.success({title:"成功",message:"提交成功！"}),$(".ui.dimmer").addClass("active")):t.$notify({title:"错误",message:s.data.msg,type:"error"})}).catch(function(s){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});