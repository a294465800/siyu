"use strict";$(document).ready(function(){new Vue({el:"#budgetaryCheck",data:{checkedMen:[],menList:[],selectData:{id:""}},mounted:function(){var e=this;$("#budgetaryCheckRecheck").on("click",function(){var t=this;e.$confirm("确定复核, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(1),_http.BuyManager.createCheck({id:$(t).data("id")}).then(function(a){if("200"===a.data.code){var s=a.data.data,n=1==s.type?"rolebuy_bugetary_pass":"buy_extrabugetary_pass";e.selectData.id=s.id,e.$message({type:"success",message:"已复核!"}),_http.UserManager.searchAuthUsers({role:n}).then(function(e){"200"===e.data.code?(t.menList=e.data.data,$(".ui.dimmer").addClass("active")):t.$notify({title:"错误",message:a.data.msg,type:"error"})})}else e.$notify({title:"错误",message:a.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}).catch(function(){e.$message({type:"info",message:"已取消"})})}),$("#budgetaryCheckPass").on("click",function(){var t=this;e.$confirm("确定审批, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){_http.BuyManager.createPass({id:$(t).data("id")}).then(function(t){"200"===t.data.code?(e.$message({type:"success",message:"已审批!"}),$(".ui.dimmer").addClass("active")):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}).catch(function(){e.$message({type:"info",message:"已取消"})})})},methods:{handleCheckManChange:function(e){console.log(this.checkedMen)},confirmRecheck:function(){var e=this;this.selectData.users=this.checkedMen,_http.BuyManager.selectPass(this.selectData).then(function(t){"200"===t.data.code?(e.$notify({title:"成功",message:"已选择了审批人",type:"success"}),$(".ui.dimmer").removeClass("active")):vm.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(e){vm.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});