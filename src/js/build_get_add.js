"use strict";$(document).ready(function(){new Vue({el:"#buildGetAdd",data:{invoiceCreate:_schemas.invoiceCreate,invoiceType:[]},mounted:function(){var e=$("#invoiceType").text().trim();this.invoiceType=""===e?[]:JSON.parse(e),this.invoiceCreate.date=_helper.timeFormat(new Date,"YYYY-MM-DD"),$("#buildGetAdd").removeClass("invisible")},methods:{addItem:function(){var e=this.invoiceCreate.lists,t={id:e.length>0&&e[e.length-1].id?e[e.length-1].id+1:1};this.invoiceCreate.lists.push(t)},deleteItem:function(e,t,i){this.invoiceCreate[e].splice(i,1)},submitForm:function(){var e=this;_http.TeamManager.createGetAdd(this.addForm).then(function(t){"200"===t.data.code?e.$notify({title:"成功",message:"提交成功",type:"success"}):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});