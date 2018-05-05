"use strict";$(document).ready(function(){new Vue({el:"#outAddAdd",data:{stockOutAdd:{date:"",reason:"",lists:[],warehouse_id:"",purchase_id:""},current:{material:{name:"",material:""},stock:{name:"",stock:""}},throttle:{material_timer:null,stock_timer:null}},mounted:function(){this.stockOutAdd.purchase_id=$("#purchaseId").val()||"",$("#outAddAdd").removeClass("invisible")},methods:{querySearchStock:function(t,e){var a=this;this.throttle.stock_timer&&clearTimeout(this.throttle.stock_timer),this.throttle.stock_timer=setTimeout(function(){var i={name:t,purchase_id:a.stockOutAdd.purchase_id};_http.StockManager.searchOutStock(i).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectStock:function(t){this.stockOutAdd.warehouse_id=t.id,this.current.stock.name=t.name,this.current.stock.stock=t,this.current.material.name="",this.current.material.material="",this.current.material.data="",this.stockOutAdd.lists=[]},querySearchMaterial:function(t,e){var a=this;this.throttle.material_timer&&clearTimeout(this.throttle.material_timer),this.throttle.material_timer=setTimeout(function(){var i={name:t,purchase_id:a.stockOutAdd.purchase_id||"",warehouse_id:a.stockOutAdd.warehouse_id};_http.MaterialManager.searchBuyMaterial(i).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectMaterial:function(t){this.current.material.name=t.material.name,this.current.material.material=t.material,this.current.material.data=t},addItem:function(){if(""===this.current.material.name)return this.$notify.error({title:"错误",message:"请选择一项"}),!1;var t=this.stockOutAdd.lists,e=this.current.material,a=e.data,i=e.material,r={id:t.length>0&&t[t.length-1].id?t[t.length-1].id+1:1,material:i,material_id:i.id,number:0,price:a.price||0,sum:a.sum||0,cost:a.cost||0};this.stockOutAdd.lists.push(r)},deleteItem:function(t,e,a){this.stockOutAdd[t].splice(a,1)},formateData:function(t){var e={date:t.date,reason:t.reason,lists:[],warehouse_id:t.warehouse_id,purchase_id:t.purchase_id};return t.lists.forEach(function(t){e.lists.push({id:t.material_id,number:t.number})}),e},submit:function(){var t=this,e=this.formateData(this.stockOutAdd);_http.StockManager.createOutAdd(e).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});