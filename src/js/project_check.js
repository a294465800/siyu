"use strict";$(document).ready(function(){new Vue({el:"#navbar",data:{navActive:"projectList"},mounted:function(){$("#navbar").removeClass("invisible")},methods:{}});var e=$("#projectId").val()||"";new Vue({el:"#projectCheckDialog",data:{checkedMen:[],menList:[],selectData:{id:""}},mounted:function(){var t=this;$("#projectCheckBtn").on("click",function(){var a=this;_http.ProjectManager.checkProject({id:e}).then(function(e){"200"===e.data.code?(t.$notify({title:"成功",message:"已复核",type:"success"}),$(a).remove(),t.selectData.id=e.data.data.id,_http.UserManager.searchAuthUsers({role:"project_pass"}).then(function(a){"200"===a.data.code?(t.menList=a.data.data,$(".ui.dimmer").addClass("active")):t.$notify({title:"错误",message:e.data.msg,type:"error"})})):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}),$("#projectPass").on("click",function(){var a=this;t.$confirm("确认审批, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){_http.ProjectManager.passProject({id:e}).then(function(e){"200"===e.data.code?($(a).remove(),t.$notify({title:"成功",message:"已审批",type:"success"})):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}).catch(function(){t.$message({type:"info",message:"已取消"})})})},methods:{handleCheckManChange:function(e){console.log(this.checkedMen)},confirmRecheck:function(){var e=this,t=this.selectData;t.users=this.checkedMen,_http.ProjectManager.selectProjectPass(t).then(function(t){"200"===t.data.code?(e.$notify({title:"成功",message:"已选择了审批人",type:"success"}),$(".ui.dimmer").removeClass("active")):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});