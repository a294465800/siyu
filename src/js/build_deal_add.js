"use strict";$(document).ready(function(){new Vue({el:"#buildDealAdd",data:{buildDealAdd:_schemas.buildDealAdd,build_teams:[{id:1,name:"施工队一",manager:"陈经理"},{id:2,name:"施工队二",manager:"刘经理"},{id:3,name:"施工队三",manager:"海经理"}],projects:[{id:1,content:"这是内容一",manager:"陈经理"},{id:2,content:"这是内容三",manager:"刘经理"},{id:3,content:"这是内容三",manager:"张经理"}],throttle:{id_timer:null,name_timer:null,team_timer:null}},mounted:function(){$("#buildDealAdd").removeClass("invisible")},methods:{querySearchBuild:function(t,e){var a=this;this.throttle.team_timer&&clearTimeout(this.throttle.team_timer),this.throttle.team_timer=setTimeout(function(){var i={id:t};_http.TeamManager.searchTeam(i).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectBuild:function(t){this.buildDealAdd.team=t.id,this.buildDealAdd.build_name=t.name,this.buildDealAdd.build_manager=t.manager},querySearchProjectId:function(t,e){var a=this;this.throttle.id_timer&&clearTimeout(this.throttle.id_timer),this.throttle.id_timer=setTimeout(function(){var i={id:t};_http.ProjectManager.searchProject(i).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectProjectId:function(t){this.payForm.project_id=t.number,this.payForm.project_content=t.name,this.buildDealAdd.project_manager=t.pm},querySearchProjectContent:function(t,e){var a=this;this.throttle.name_timer&&clearTimeout(this.throttle.name_timer),this.throttle.name_timer=setTimeout(function(){var i={name:t};_http.ProjectManager.searchProject(i).then(function(t){"200"===t.data.code?e(t.data.data):a.$notify({title:"错误",message:t.data.msg||"未知错误",type:"error"})}).catch(function(t){a.$notify({title:"错误",message:"服务器出错",type:"error"})})},500)},handleSelectProjectContent:function(t){this.buildDealAdd.project_id=t.number,this.buildDealAdd.project_content=t.name,this.buildDealAdd.project_manager=t.pm},uploadContract:function(t){var e=this,a=t.target.files;if(!(a.length<1)){var i=!0,r=!1,n=void 0;try{for(var d,o=a[Symbol.iterator]();!(i=(d=o.next()).done);i=!0){var l=d.value,s=new FormData;s.append("image",l),_http.UploadManager.createUpload(s).then(function(t){"200"===t.data.code?(t.data.data,e.buildDealAdd.list.push({id:resData.size,name:resData.name,url:resData.url}),e.buildDealAdd.lists.push(resData.url),e.$notify({title:"成功",message:resData.name+" 上传成功",type:"success"})):e.$notify({title:"错误",message:t.data.msg,type:"error"})}).catch(function(t){e.$notify({title:"错误",message:"服务器出错",type:"error"})})}}catch(t){r=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw n}}}},deleteItem:function(t,e,a){"list"===t?(this.buildDealAdd[list].splice(a,1),this.buildDealAdd[lists].splice(a,1)):this.buildDealAdd[t].splice(a,1)},submit:function(){var t=this;console.log(this.buildDealAdd),_http.TeamManager.createContract(this.buildDealAdd).then(function(e){"200"===e.data.code?t.$notify({title:"成功",message:"提交成功",type:"success"}):t.$notify({title:"错误",message:e.data.msg,type:"error"})}).catch(function(e){t.$notify({title:"错误",message:"服务器出错",type:"error"})})}}})});