"use strict";$(document).ready(function(){var e=$(".payment-check"),t=window.ELEMENT;e.on("click",function(){var e=this;t.MessageBox.confirm("复核操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(1),_http.BuyManager.paymentCheck({id:$(e).data("id")}).then(function(n){"200"===n.data.code?($(e).parents("td").html("已复核"),t.Notification.success({title:"成功",message:"复核成功!"})):t.Message.error({message:n.data.msg})}).catch(function(){t.Message.error({message:"服务器错误"})})}).catch(function(){console.log(2),t.Message.info({message:"已取消撤销"})})})});