"use strict";$(document).ready(function(){new Vue({el:"#buyExtrabudgetary",data:{extrabudgetary:_schemas.extrabudgetary,newMaterial:{},throttle:{id_timer:null,name_timer:null,supplier_timer:null,material_timer:null},checkedMen:[],menList:[],selectData:{id:""}},mounted:function(){this.extrabudgetary.info.date=_helper.timeFormat(new Date,"YYYY-MM-DD");var t=$("#invoiceType").text().trim();this.extrabudgetary.buy_id=$("#getId").val(),this.invoiceType=""===t?[]:JSON.parse(t);var e=$("#editData").text().trim();""!==e&&(this.extrabudgetary=JSON.parse(e)),$("#buyExtrabudgetary").removeClass("invisible")},computed:{amount:function(){var t=this.extrabudgetary.lists;if(t.length<1)return 0;for(var e=0,a=0;a<t.length;a++)t[a].cost&&(e+=parseFloat(t[a].cost));return e}},methods:{querySearchProjectId:function(t,e){var a=this;clearTimeout(this.throttle.id_timer),this.throttle.id_timer=setTimeout(function(){var r={id:t};_http.ProjectManager.searchProject(r).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectProjectId:function(t){this.extrabudgetary.project_id=t.id,this.extrabudgetary.project_number=t.number,this.extrabudgetary.project_content=t.name},querySearchProjectContent:function(t,e){var a=this;clearTimeout(this.throttle.name_timer),this.throttle.name_timer=setTimeout(function(){var r={name:t};_http.ProjectManager.searchProject(r).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectProjectContent:function(t){this.extrabudgetary.project_id=t.id,this.extrabudgetary.project_number=t.number,this.extrabudgetary.project_content=t.name},handleSelectSupplier:function(t){this.extrabudgetary.info.supplier_id=t.id,this.extrabudgetary.info.supplier_name=t.name,this.extrabudgetary.info.bank=t.bank,this.extrabudgetary.info.account=t.account},querySearchSupplier:function(t,e){var a=this;this.throttle.supplier_timer&&clearTimeout(this.throttle.supplier_timer),this.throttle.supplier_timer=setTimeout(function(){var r={name:t};_http.SupplierManager.searchSuppliers(r).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},addMaterial:function(){var t=this.extrabudgetary.lists,e=this.newMaterial,a={own_id:t.length>0&&t[t.length-1].own_id?t[t.length-1].own_id+1:1,__type:e.status?"old":"new"};e.status?(a.material=Object.assign({},e),a.material_id=a.material.id):a.name=e.name,this.extrabudgetary.lists.push(a)},querySearchMaterial:function(t,e){var a=this;this.throttle.material_timer&&clearTimeout(this.throttle.material_timer),this.throttle.material_timer=setTimeout(function(){var r={name:t,project_id:a.extrabudgetary.project_id||""};_http.MaterialManager.searchMaterial(r).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectMaterial:function(t){this.newMaterial=Object.assign({},t),this.newMaterial.status=!0},materialInput:function(){this.newMaterial.status=!1},deleteItem:function(t,e,a){this.extrabudgetary[t].splice(a,1)},uploadContract:function(t){var e=this,a=t.target.files;if(!(a.length<1)){var r=!0,i=!1,n=void 0;try{for(var s,o=a[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var c=s.value,u=new FormData;u.append("image",c),_http.UploadManager.createUpload(u).then(function(t){if("200"===t.data.code){var a=t.data.data;e.extrabudgetary.contracts.push({id:a.size,name:a.name,href:a.url}),e.$notify({title:"成功",message:a.name+" 上传成功",type:"success"})}else e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}catch(t){i=!0,n=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw n}}}},dataFormat:function(t){for(var e={info:t.info,buy_id:t.buy_id||"",project_id:t.project_id,contracts:t.contracts,lists:[]},a=t.lists,r=0;r<a.length;r++){var i=a[r],n={material_id:i.material_id||""};"new"===i.__type&&(n.name=i.name,n.param=i.param,n.model=i.model,n.factory=i.factory,n.unit=i.unit),n.price=i.price,n.number=i.number,n.cost=i.cost,n.warranty_date=i.warranty_date,n.warranty_time=i.warranty_time,e.lists.push(n)}return e},submitForm:function(){var t=this,e=this.dataFormat(this.extrabudgetary);console.log(e),_http.BuyManager.createPurchase(e).then(function(e){"200"===e.data.code?(t.$notify.success({title:"成功",message:"提交成功！"}),t.selectData.id=e.data.data.id,_http.UserManager.searchAuthUsers({role:"buy_extrabudgetary_check"}).then(function(a){"200"===a.data.code?(t.menList=a.data.data,$(".ui.dimmer").addClass("active")):t.$notify({title:"错误",message:e.data.msg,type:"error"})})):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})},handleCheckManChange:function(t){console.log(this.checkedMen)},confirmRecheck:function(){var t=this;this.selectData.users=this.checkedMen,_http.BuyManager.selectCheck(this.selectData).then(function(e){"200"===e.data.code?(t.$notify({title:"成功",message:"已选择了复核人",type:"success"}),$(".ui.dimmer").removeClass("active")):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});