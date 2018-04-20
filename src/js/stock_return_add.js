"use strict";$(document).ready(function(){new Vue({el:"#returnAdd",data:{stockReturnAdd:_schemas.stockReturnAdd,currentMaterial:"",currentMaterialName:"",currentMaterialListDialog:!1,currentMaterialListLoader:!0,currentMaterialList:[],throttle:{stock_timer:null,project_timer:null,material_timer:null,project_content_timer:null}},mounted:function(){this.stockReturnAdd.returnee=$("#returneeVal").val()||"",$("#returnAdd").removeClass("invisible")},computed:{sumAmount:function(){var t=this.stockReturnAdd.lists;if(!t.length)return 0;var e=0;return t.forEach(function(t,r){var i=t.number;i&&(e+=i*(t.price||0))}),e}},methods:{querySearch:function(t,e){var r=this;this.throttle.project_timer&&clearTimeout(this.throttle.project_timer),this.throttle.project_timer=setTimeout(function(){var i={id:t};_http.ProjectManager.searchProject(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelect:function(t){this.stockReturnAdd.project_id=t.id,this.stockReturnAdd.project_number=t.number,this.stockReturnAdd.project_content=t.name,this.stockReturnAdd.project_manger=t.manager},querySearchContent:function(t,e){var r=this;this.throttle.project_content_timer&&clearTimeout(this.throttle.project_content_timer),this.throttle.project_content_timer=setTimeout(function(){var i={name:t};_http.ProjectManager.searchProject(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectStock:function(t){this.stockReturnAdd.warehouse_id=t.id,this.stockReturnAdd.warehouse_name=t.name,this.stockReturnAdd.worker=t.manager},querySearchStock:function(t,e){var r=this;this.throttle.stock_timer&&clearTimeout(this.throttle.stock_timer),this.throttle.stock_timer=setTimeout(function(){var i={name:t};_http.StockManager.searchStock(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},querySearchMaterial:function(t,e){var r=this;this.throttle.material_timer&&clearTimeout(this.throttle.material_timer),this.throttle.material_timer=setTimeout(function(){var i={name:t};_http.MaterialManager.searchMaterial(i).then(function(t){"200"===t.data.code?e(t.data.data):r.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){r.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectMaterial:function(t){this.currentMaterial=t,this.currentMaterialName=t.name},addItem:function(){if(""===this.currentMaterialName)return this.$notify.error({title:"错误",message:"请选择一项"}),!1;var t=this.stockReturnAdd.lists,e=this.currentMaterial,r={id:t.length>0&&t[t.length-1].id?t[t.length-1].id+1:1,material_id:e.id,price:e.price,number:0,material:e};this.stockReturnAdd.lists.push(r)},deleteItem:function(t,e,r){this.stockReturnAdd[t].splice(r,1)},dataFormat:function(){var t=this.stockReturnAdd,e=t.lists,r={project_id:t.project_id,warehouse_id:t.warehouse_id,worker:t.worker,returnee:t.returnee,lists:[]};return e.forEach(function(t){lists.push({id:t.material_id,number:t.number,price:t.price})}),r},submit:function(){var t=this,e=this.dataFormat();console.log(e),_http.StockManager.createReturnAdd(e).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})},checkPrice:function(){var t=this;if(!this.currentMaterial.id)return this.$notify({title:"错误",message:"请先选择物料",type:"error"}),!1;this.currentMaterialListLoader=!0,this.currentMaterialListDialog=!0,_http.StockManager.searchStockMaterial({material_id:this.currentMaterial.id}).then(function(e){"200"===e.data.code?(t.currentMaterialList=e.data.data,t.currentMaterialListLoader=!1):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});