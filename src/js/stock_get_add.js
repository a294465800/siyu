"use strict";$(document).ready(function(){new Vue({el:"#stockGetAdd",data:{stockGetAdd:_schemas.stockGetAdd,currentType:1,currentMaterial:"",currentMaterialName:"",throttle:{project_timer:null,project_id_timer:null,material_timer:null}},mounted:function(){$(".ui.checkbox").checkbox(),$("#stockGetAdd").removeClass("invisible")},computed:{sumAmount:function(){var t=this.stockGetAdd.lists;if(!t.length)return 0;var e=0;return t.forEach(function(t,r){var i=t.number;i&&(e+=i*t.material.avg_price)}),e}},methods:{querySearchProjectId:function(t,e){var r=this;this.throttle.project_timer&&clearTimeout(this.throttle.project_timer),this.throttle.project_timer=setTimeout(function(){var i={id:t};_http.ProjectManager.searchProject(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},querySearch:function(t,e){var r=this;this.throttle.project_id_timer&&clearTimeout(this.throttle.project_id_timer),this.throttle.project_id_timer=setTimeout(function(){var i={name:t};_http.ProjectManager.searchProject(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelect:function(t){this.stockGetAdd.project_id=t.id,this.stockGetAdd.project_content=t.name,this.stockGetAdd.project_manger=t.manager},querySearchStock:function(t,e){var r=this;this.throttle.project_timer&&clearTimeout(this.throttle.project_timer),this.throttle.project_timer=setTimeout(function(){var i={id:t};_http.StockManager.searchStock(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectStock:function(t){this.stockGetAdd.warehouse_id=t.id,this.stockGetAdd.warehouse_name=t.name},querySearchMaterial:function(t,e){var r=this;this.throttle.material_timer&&clearTimeout(this.throttle.material_timer),this.throttle.material_timer=setTimeout(function(){var i={name:t,project_id:r.stockGetAdd.project_id||""};_http.StockManager.searchStock(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectMaterial:function(t){this.currentMaterial=t,this.currentMaterialName=t.name},addItem:function(){if(""===this.currentMaterialName)return this.$notify.error({title:"错误",message:"请选择一项"}),!1;var t=this.stockGetAdd.lists,e={id:t.length>0&&t[t.length-1].id?t[t.length-1].id+1:1,material:this.currentMaterial,material_id:this.currentMaterial.id,number:0};this.stockGetAdd.lists.push(e)},deleteItem:function(t,e,r){this.stockGetAdd[t].splice(r,1)},submit:function(){var t=this;console.log(this.stockReturnAdd),_http.StockManager.createGetAdd(data).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});