"use strict";$(document).ready(function(){new Vue({el:"#budgetCreate",data:{budgetType:_schemas.budget_type,newBudget:_schemas.budget,newMaterial:_schemas.budget,budgetForm:new Array,project_id:"",throttle:{material_timer:null}},mounted:function(){$("#budgetCreate").removeClass("invisible"),this.project_id=$("#budgetCreate").data("id")},methods:{querySearchMaterial:function(t,e){var i=this;this.throttle.material_timer&&clearTimeout(this.throttle.material_timer),this.throttle.material_timer=setTimeout(function(){var a={name:t};_http.MaterialManager.searchMaterial(a).then(function(t){"200"===t.data.code?e(t.data.data):i.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){i.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectMaterial:function(t){this.newMaterial.material_id=t.id,this.newMaterial.param=t.param,this.newMaterial.model=t.model,this.newMaterial.factory=t.factory,this.newMaterial.unit=t.unit,this.newMaterial.name=t.name},addOriginMaterial:function(){var t=Object.assign({},this.newMaterial);console.log(t);for(var e in t)if(""===t[e]||void 0===t[e])return this.$notify.error({title:"错误",message:"请确保已填写所有项！"}),!1;var i=this.budgetForm[this.budgetForm.length-1];this.newData.id=i.id?1*i.id+1:1,this.budgetForm.push(i)},addNewBudget:function(){var t=Object.assign({},this.newBudget);if(1==t.type){for(var e in t)if(""===t[e]||void 0===t[e])return this.$notify.error({title:"错误",message:"请确保已填写所有项！"}),!1}else if(!t.name||""===t.price||""===t.number)return this.$notify.error({title:"错误",message:"物料名称、物料价格、物料数量必填！"}),!1;this.budgetForm.push(t);for(var i in this.newBudget)"id"!==i?this.newBudget[i]="":"id"===i&&this.newBudget.id++;this.$notify.success({title:"成功",message:"已添加"})},deleteBudget:function(t,e){this.budgetForm.splice(e,1)},submit:function(){var t=this;_http.BudgetManager.createBudget(this.project_id,this.budgetForm).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg||"未知错误",type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});