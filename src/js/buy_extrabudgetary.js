"use strict";function _defineProperty(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}$(document).ready(function(){var t;new Vue({el:"#buyExtrabudgetary",data:{projects:[{id:"XM23141231232",name:"项目一"},{id:"XM23523111232",name:"项目二"},{id:"XM23145423121",name:"项目三"}],extrabudgetary:_schemas.extrabudgetary,suppliers:[{id:1,name:"和桥开发商",bank:"中国银行",account:0x36daa017a5bdb4000},{id:2,name:"永益供应商",bank:"广发银行",account:0x36daa017a5bdb4000},{id:3,name:"乐音货行",bank:"平安银行",account:6234325234232341e4}],materials:[{id:1,name:"物料一",parameter:"参数一",model:"型号一",manufacturer:"厂家一",unit:"个",price:253,quantity:2534,buy_number:1500,left_number:1034},{id:2,name:"物料二",parameter:"参数二",model:"型号二",manufacturer:"厂家二",unit:"件",price:2542,quantity:500,buy_number:300,left_number:200},{id:4,name:"物料三",parameter:"参数三",model:"型号三",manufacturer:"厂家三",unit:"间",price:123,quantity:5e3,buy_number:2300,left_number:2700},{id:3,name:"物料四",parameter:"参数四",model:"型号四",manufacturer:"厂家四",unit:"间",price:542,quantity:5e3,buy_number:5e3,left_number:0}],newMaterial:{},throttle:{id_timer:null,name_timer:null}},mounted:function(){this.extrabudgetary.info.date=_helper.timeFormat(new Date,"YYYY-MM-DD");var t=$("#invoiceType").text().trim();this.invoiceType=""===t?[]:JSON.parse(t),$("#buyExtrabudgetary").removeClass("invisible")},methods:(t={querySearchProjectId:function(t,e){var a=this;clearTimeout(this.throttle.id_timer),this.throttle.id_timer=setTimeout(function(){var r={id:t};_http.ProjectManager.searchProject(r).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectProjectId:function(t){this.extrabudgetary.project_id=t.number,this.extrabudgetary.project_content=t.name},querySearchProjectContent:function(t,e){var a=this;clearTimeout(this.throttle.name_timer),this.throttle.name_timer=setTimeout(function(){var r={name:t};_http.ProjectManager.searchProject(r).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectProjectContent:function(t){this.extrabudgetary.project_id=t.number,this.extrabudgetary.project_content=t.name},handleSelectSupplier:function(t){this.extrabudgetary.supplier=t},querySearchSupplier:function(t,e){var a=this.suppliers,r=t?a.filter(this.createFilterSupplier(t)):a;clearTimeout(this.timeout),this.timeout=setTimeout(function(){e(r)},1e3*Math.random())},createFilterSupplier:function(t){return function(e){return 0===e.name.toLowerCase().indexOf(t.toLowerCase())}},addMaterial:function(){var t=this.extrabudgetary.list,e=this.newMaterial,a={id:t.length>0&&t[t.length-1].id?t[t.length-1].id+1:1,__type:e.status?"old":"new",material:e.status?e:{name:e.name}};this.extrabudgetary.list.push(a)},querySearchMaterial:function(t,e){var a=this.materials,r=t?a.filter(this.createFilterMaterial(t)):a;clearTimeout(this.timeout),this.timeout=setTimeout(function(){e(r)},1e3*Math.random())},createFilterMaterial:function(t){return function(e){return 0===e.name.toLowerCase().indexOf(t.toLowerCase())}},handleSelectMaterial:function(t){this.newMaterial=Object.assign({},t),this.newMaterial.status=!0},materialInput:function(){this.newMaterial.status=!1},deleteItem:function(t,e,a){this.extrabudgetary[t].splice(a,1)},uploadContract:function(t){var e=t.target.files;if(!(e.length<1))for(var a=this.extrabudgetary.contracts,r=0;r<e.length;r++){var i={id:a.length>0&&a[a.length-1].id?a[a.length-1].id+1:1,name:e[r].name,url:"http://xxx.com/upload/"+e[r].name};this.extrabudgetary.contracts.push(i)}}},_defineProperty(t,"uploadContract",function(t){var e=this,a=t.target.files;if(!(a.length<1)){var r=!0,i=!1,n=void 0;try{for(var u,o=a[Symbol.iterator]();!(r=(u=o.next()).done);r=!0){var c=u.value,s=new FormData;s.append("image",c),_http.UploadManager.createUpload(s).then(function(t){if("200"===t.data.code){var a=t.data.data;e.extrabudgetary.contracts.push({id:a.size,name:a.name,href:a.url}),e.$notify({title:"成功",message:a.name+" 上传成功",type:"success"})}else e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}catch(t){i=!0,n=t}finally{try{!r&&o.return&&o.return()}finally{if(i)throw n}}}}),_defineProperty(t,"submitForm",function(){var t=this;_http.BuyManager.createPurchase(this.extrabudgetary).then(function(e){"200"===e.data.code?(t.$notify.success({title:"成功",message:"提交成功！"}),$(".ui.dimmer").addClass("active")):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}),t)})});