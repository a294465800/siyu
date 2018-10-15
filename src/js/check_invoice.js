"use strict";$(document).ready(function(){new Vue({el:"#checkInvoice",data:{invoiceForm:_schemas.checkInvoice,invoiceType:[],throttle:{unit_timer:null},project_id:""},mounted:function(){$("#checkInvoice").removeClass("invisible"),this.invoiceForm.project_id=$("#projectId").val(),this.invoiceForm.id=$("#getId").val();var t=$("#invoiceType").text().trim(),e=$("#editData").text().trim();this.invoiceType=""===t?[]:JSON.parse(t),""!==e&&(this.invoiceForm=JSON.parse(e))},methods:{querySearchCompany:function(t,e){var i=this;this.throttle.unit_timer&&clearTimeout(this.throttle.unit_timer),this.throttle.unit_timer=setTimeout(function(){var o={payee:t,project_id:i.invoiceForm.project_id||""};_http.ProjectManager.searchProjectUnit(o).then(function(t){"200"===t.data.code?e(t.data.data):i.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){i.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectCompany:function(t){this.invoiceForm.payee=t},deleteItem:function(t,e,i){this.invoiceForm[t].splice(i,1)},addItem:function(t){var e=this.invoiceForm[t],i=e.length||0,o=void 0;o=i>0?e[i-1].id+1:1,this.invoiceForm[t].push({id:o})},submit:function(){var t=this;_http.CheckManager.createProjectInvoice(this.invoiceForm).then(function(e){"200"===e.data.code?(t.$notify({title:"成功",message:"提交成功",type:"success"}),setTimeout(function(){window.close()},2e3)):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});