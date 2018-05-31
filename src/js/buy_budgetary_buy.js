"use strict";$(document).ready(function(){new Vue({el:"#budgetaryBuy",data:{budgetary_buy:_schemas.budgetary_buy,invoiceType:[],materials:[],checkedMen:[],menList:[],throttle:{supplier_timer:null},selectData:{id:""}},mounted:function(){this.budgetary_buy.info.date=_helper.timeFormat(new Date,"YYYY-MM-DD"),this.budgetary_buy.buy_id=$("#getId").val();var t=$("#invoiceType").text().trim();this.invoiceType=""===t?[]:JSON.parse(t);var e=$("#materials").text().trim();this.materials=""===e?[]:JSON.parse(e),this.budgetary_buy.project_id=$("#projectId").val();var a=$("#editData").text().trim();""!==a&&(this.budgetary_buy=JSON.parse(a)),$("#budgetaryBuy").removeClass("invisible")},computed:{materialsComputed:function(){if(this.materials.length<1)return[];if(this.budgetary_buy.lists.length<1){var t=JSON.stringify(this.materials);return JSON.parse(t)}var e=JSON.stringify(this.materials),a=JSON.parse(e),i=this.budgetary_buy.lists,r=0;for(var s in i){var n=i[s],u=n.material;if(void 0===n.number)break;r+=parseFloat(n.cost||0),a[u.index].need_number-=parseInt(n.number||0)}return this.budgetary_buy.amount=r||0,a}},methods:{handleSelectSupplier:function(t){this.budgetary_buy.info.supplier_id=t.id,this.budgetary_buy.info.supplier_name=t.name,this.budgetary_buy.info.bank=t.bank,this.budgetary_buy.info.account=t.account},querySearchSupplier:function(t,e){var a=this;this.throttle.supplier_timer&&clearTimeout(this.throttle.supplier_timer),this.throttle.supplier_timer=setTimeout(function(){var i={name:t};_http.SupplierManager.searchSuppliers(i).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},addMaterial:function(t,e){var a=this.budgetary_buy.lists,i={own_id:a.length>0&&a[a.length-1].own_id?a[a.length-1].own_id+1:1,material:t,material_id:t.id};i.material.index=e,this.budgetary_buy.lists.push(i)},deleteItem:function(t,e,a){this.budgetary_buy[t].splice(a,1)},uploadContract:function(t){var e=this,a=t.target.files;if(!(a.length<1)){var i=!0,r=!1,s=void 0;try{for(var n,u=a[Symbol.iterator]();!(i=(n=u.next()).done);i=!0){var o=n.value,c=new FormData;c.append("image",o),_http.UploadManager.createUpload(c).then(function(t){if("200"===t.data.code){var a=t.data.data;e.budgetary_buy.contracts.push({id:a.size,name:a.name,href:a.url}),e.$notify({title:"成功",message:a.name+" 上传成功",type:"success"})}else e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}catch(t){r=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(r)throw s}}}},dataFormat:function(t){for(var e={buy_id:t.buy_id,info:t.info,project_id:t.project_id,contracts:t.contracts,lists:[]},a=t.lists,i=0;i<a.length;i++){var r=a[i],s={material_id:r.material_id||""};s.number=r.number,s.price=r.price,s.cost=r.cost,s.warranty_date=r.warranty_date,s.warranty_time=r.warranty_time,e.lists.push(s)}return e},submitForm:function(){var t=this,e=this.dataFormat(this.budgetary_buy);console.log(e),_http.BuyManager.createPurchase(e).then(function(e){"200"===e.data.code?(t.$notify.success({title:"成功",message:"提交成功！"}),t.selectData.id=e.data.data.id,_http.UserManager.searchAuthUsers({role:"buy_budgetary_check"}).then(function(a){"200"===a.data.code?(t.menList=a.data.data,$(".ui.dimmer").addClass("active")):t.$notify({title:"错误",message:e.data.msg,type:"error"})})):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})},handleCheckManChange:function(t){console.log(this.checkedMen)},confirmRecheck:function(){var t=this;this.selectData.users=this.checkedMen,_http.BuyManager.selectCheck(this.selectData).then(function(e){"200"===e.data.code?(t.$notify({title:"成功",message:"已选择了复核人",type:"success"}),$(".ui.dimmer").removeClass("active")):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});