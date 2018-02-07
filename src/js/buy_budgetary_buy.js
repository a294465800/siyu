"use strict";$(document).ready(function(){new Vue({el:"#budgetaryBuy",data:{budgetary_buy:_schemas.budgetary_buy,materials:[{id:1,name:"物料一",parameter:"参数一",model:"型号一",manufacturer:"厂家一",unit:"个",price:253,quantity:2534,buy_number:1500,left_number:1034},{id:2,name:"物料二",parameter:"参数二",model:"型号二",manufacturer:"厂家二",unit:"件",price:2542,quantity:500,buy_number:300,left_number:200},{id:4,name:"物料三",parameter:"参数三",model:"型号三",manufacturer:"厂家三",unit:"间",price:123,quantity:5e3,buy_number:2300,left_number:2700},{id:3,name:"物料四",parameter:"参数四",model:"型号四",manufacturer:"厂家四",unit:"间",price:542,quantity:5e3,buy_number:5e3,left_number:0}],checkedMen:[],menList:[{id:1,name:"张先生"},{id:2,name:"陈一发"},{id:3,name:"刘芳芳"},{id:4,name:"乌达奇"},{id:5,name:"何求"}]},mounted:function(){this.budgetary_buy.date=_helper.timeFormat(new Date,"YYYY-MM-DD"),this.budgetary_buy.project_id="xm12315123",this.budgetary_buy.project_content="这是项目内容这是项目内容",$("#budgetaryBuy").removeClass("invisible")},computed:{materialsComputed:function(){if(this.materials.length<1)return[];if(this.budgetary_buy.list.length<1){var e=JSON.stringify(this.materials);return JSON.parse(e)}var t=JSON.stringify(this.materials),a=JSON.parse(t),i=this.budgetary_buy.list,r=0;for(var n in i){var u=i[n],m=u.materail;if(void 0===u.real_quantity)break;r+=parseFloat(u.real_amount),a[m.index].left_number-=parseInt(u.real_quantity)}return this.budgetary_buy.amount=r,a}},methods:{addMaterial:function(e,t){var a=this.budgetary_buy.list,i={id:a.length>0&&a[a.length-1].id?a[a.length-1].id+1:1,materail:e};i.materail.index=t,this.budgetary_buy.list.push(i)},deleteItem:function(e,t,a){this.budgetary_buy[e].splice(a,1)},uploadContract:function(e){var t=e.target.files;if(!(t.length<1))for(var a=this.budgetary_buy.contracts,i=0;i<t.length;i++){var r={id:a.length>0&&a[a.length-1].id?a[a.length-1].id+1:1,name:t[i].name,url:"http://xxx.com/upload/"+t[i].name};this.budgetary_buy.contracts.push(r)}},submitForm:function(){this.$notify({title:"成功",message:"提交成功！",type:"success"}),$(".ui.dimmer").addClass("active")},handleCheckManChange:function(e){console.log(this.checkedMen)},confirmRecheck:function(){this.$notify({title:"成功",message:"已选择了复核人",type:"success"}),$(".ui.dimmer").removeClass("active")}}})});