"use strict";$(document).ready(function(){new Vue({el:"#returnAdd",data:{commodities:[],stockReturnAdd:_schemas.stockReturnAdd,stocks:[{id:1,name:"仓库一",manger:"陈先生"},{id:2,name:"仓库二",manger:"刘先生"},{id:3,name:"仓库三",manger:"洪先生"}],currentMaterial:"",currentMaterialName:"",materials:[{id:1,name:"物料一",model:"型号一",unit:"个",avg_price:111},{id:2,name:"物料二",model:"型号二",unit:"个",avg_price:222},{id:3,name:"物料三",model:"型号三",unit:"个",avg_price:333},{id:4,name:"物料四",model:"型号四",unit:"个",avg_price:523}]},mounted:function(){$("#returnAdd").removeClass("invisible"),this.commodities=this.loadAll()},computed:{sumAmount:function(){var e=this.stockReturnAdd.list;if(!e.length)return 0;var t=0;return e.forEach(function(e,r){var i=e.return_quantity;i&&(t+=i*e.material.avg_price)}),t}},methods:{querySearch:function(e,t){var r=this.commodities,i=e?r.filter(this.createFilter(e)):r;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t(i)},1e3*Math.random())},createFilter:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){return[{id:1,name:"三全鲜食（北新泾店）",parameter:"这些是一些参数和性能数据",model:"型号一",unit:"间",address:"长宁区新渔路144号"},{id:2,name:"Hot honey 首尔炸鸡（仙霞路）",parameter:"这些是一些参数和性能数据",model:"型号二",unit:"个",address:"上海市长宁区淞虹路661号"},{id:3,name:"新旺角茶餐厅",parameter:"这些是一些参数和性能数据",model:"型号三",unit:"只",address:"上海市普陀区真北路988号创邑金沙谷6号楼113"},{id:4,name:"泷千家(天山西路店)",parameter:"这些是一些参数和性能数据",model:"型号四",unit:"件",address:"天山西路438号"},{id:5,name:"胖仙女纸杯蛋糕（上海凌空店）",parameter:"这些是一些参数和性能数据",model:"型号五",unit:"间",address:"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},{id:6,name:"贡茶",parameter:"这些是一些参数和性能数据",model:"型号六",unit:"间",address:"上海市长宁区金钟路633号"},{id:7,name:"豪大大香鸡排超级奶爸",parameter:"这些是一些参数和性能数据",model:"型号七",unit:"间",address:"上海市嘉定区曹安公路曹安路1685号"},{id:8,name:"茶芝兰（奶茶，手抓饼）",parameter:"这些是一些参数和性能数据",model:"型号八",unit:"间",address:"上海市普陀区同普路1435号"}]},querySearchStock:function(e,t){var r=this.stocks,i=e?r.filter(this.createFilterStock(e)):r;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t(i)},1e3*Math.random())},createFilterStock:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},querySearchMaterial:function(e,t){var r=this.materials,i=e?r.filter(this.createFilterMaterial(e)):r;clearTimeout(this.timeout),this.timeout=setTimeout(function(){t(i)},1e3*Math.random())},createFilterMaterial:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){this.stockReturnAdd.project_id=e.id,this.stockReturnAdd.project_content=e.parameter,this.stockReturnAdd.project_manger=e.model},handleSelectStock:function(e){this.stockReturnAdd.stock_id=e.id,this.stockReturnAdd.stock_name=e.name,this.stockReturnAdd.receiver=e.manger},handleSelectMaterial:function(e){this.currentMaterial=e,this.currentMaterialName=e.name},addItem:function(){if(""===this.currentMaterialName)return this.$notify.error({title:"错误",message:"请选择一项"}),!1;var e=this.stockReturnAdd.list,t={id:e.length>0&&e[e.length-1].id?e[e.length-1].id+1:1,material:this.currentMaterial};this.stockReturnAdd.list.push(t)},deleteItem:function(e,t,r){this.stockReturnAdd[e].splice(r,1)},submit:function(){console.log(this.stockReturnAdd)}}})});