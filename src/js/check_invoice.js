"use strict";$(document).ready(function(){new Vue({el:"#checkInvoice",data:{invoiceForm:_schemas.checkInvoice,invoiceType:[],throttle:{unit_timer:null},project_id:""},mounted:function(){$("#checkInvoice").removeClass("invisible"),this.invoiceForm.project_id=$("#prokectId").val();var e=$("#invoiceType").text().trim();this.invoiceType=""===e?[]:JSON.parse(e)},methods:{querySearchCompany:function(e,t){var i=this;this.throttle.unit_timer&&clearTimeout(this.throttle.unit_timer),this.throttle.unit_timer=setTimeout(function(){var o={payee:e,project_id:i.invoiceForm.project_id||""};_http.ProjectManager.searchProjectUnit(o).then(function(e){"200"===e.data.code?t(e.data.data):i.$notify({title:"错误",message:e.data.msg||"未知错误",type:"error"})}).catch(function(e){i.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectCompany:function(e){this.invoiceForm.payee=e},deleteItem:function(e,t,i){this.invoiceForm[e].splice(i,1)},addItem:function(e){var t=this.invoiceForm[e],i=t.length,o=void 0;o=i>0?t[i-1].id+1:1,this.invoiceForm[e].push({id:o})},submit:function(){var e=this;_http.CheckManager.createProjectInvoice(this.invoiceForm).then(function(t){"200"===t.data.code?e.$notify({title:"成功",message:"提交成功",type:"success"}):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});