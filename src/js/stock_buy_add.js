"use strict";$(document).ready(function(){new Vue({el:"#stockBuyAdd",data:{commodities:[],stockBuyAdd:_schemas.stockBuyAdd,materials:[],currentMaterial:"",throttle:{stock_timer:null}},mounted:function(){this.mountedFnc(),$("#stockBuyAdd").removeClass("invisible")},methods:{mountedFnc:function(){this.stockBuyAdd.worker=$("#stockReceiver").val()||"",this.stockBuyAdd.purchase_id=$("#purchaseId").val()||"",this.stockBuyAdd.date=_helper.timeFormat(new Date,"YYYY-MM-DD");var t=$("#projectId").val();this.stockBuyAdd.projectId=t||!1;var e=$("#buyMaterials").text().trim();this.materials=""===e?[]:JSON.parse(e)},handleSelect:function(t){this.stockBuyAdd.warehouse_id=t.id,this.stockBuyAdd.warehouse_name=t.name},querySearch:function(t,e){var i=this;this.throttle.stock_timer&&clearTimeout(this.throttle.stock_timer),this.throttle.stock_timer=setTimeout(function(){var s={name:t};_http.StockManager.searchStock(s).then(function(t){"200"===t.data.code?e(t.data.data):i.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){i.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},addItem:function(){if(""===this.currentMaterial)return this.$notify.error({title:"错误",message:"请选择一项"}),!1;var t=this.stockBuyAdd.lists,e=this.materials[this.currentMaterial],i={id:t.length>0&&t[t.length-1].id?t[t.length-1].id+1:1,material_id:e.id,material:e,number:0};i.material.index=this.currentMaterial,this.stockBuyAdd.lists.push(i)},deleteItem:function(t,e,i){this.stockBuyAdd[t].splice(i,1)},submit:function(){var t=this;console.log(this.stockBuyAdd),_http.StockManager.createBuyAdd(data).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});