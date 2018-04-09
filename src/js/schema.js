"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e._schemas=t()}(window,function(){return{projects:{project:{signDate:"",name:"",partyA:"",amount:"",completeDate:"",manager:"",maintain:""},masterCompany:[{id:1}],subCompany:[{id:1}],masterContract:[{id:1,amount:"",details:[{id:1}]}],subContract:[{id:1,amount:"",details:[{id:1}]}],margins:[{id:1}],paymentConditions:[{id:1}],contracts:[]},budget:{id:1,name:"",param:"",brand:"",factory:"",unit:"",price:"",number:"",cost:"",type:""},budget_type:[{id:1,name:"物料"},{id:2,name:"工程"},{id:3,name:"其他"}],datePickerOption:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},checkTips:{margins:[{id:1}],requirepayment:[{id:1}]},checkInvoice:{project_id:"",company:"",payee:"",date:"",rate:"",price:"",lists:[{id:1}]},checkCollect:{margins:{payee:"",pay_date:"",price:"",bank_id:"",account:""},masterContract:{payee:"",pay_date:"",price:"",bank_id:"",account:""},subContract:{payee:"",pay_date:"",price:"",bank_id:"",account:""},subCompany:{pay_date:"",price:""}},budget_type_reverse:{1:"物料",2:"工程",3:"其他"},budgetary_buy:{lists:[],contracts:[],project_id:"",info:{supplier_id:"",date:"",condition:"",content:""}},extrabudgetary:{date:"",supplier:{name:"",bank:"",account:""},amount:"",project_id:"",project_content:"",invoice_condition:"",payment_condition:"",list:[],contracts:[]},invoiceCreate:{date:"",operator:"",list:[{id:1}]},stockBuyAdd:{projectId:"",date:"",receiver:"",stock:"",list:[]},stockReturnAdd:{project_id:"",project_content:"",project_manger:"",return_people:"",receiver:"",stock_id:"",stock_name:"",list:[]},stockGetAdd:{project_id:"",project_content:"",project_manger:"",get_people:"",stock_id:"",stock_name:"",list:[]},buildDealAdd:{date:"",team:"",build_name:"",manager:"",project_id:"",project_content:"",project_manger:"",lists:[]},buildFinishAdd:{date:"",price:"",team:"",build_name:"",build_manager:"",project_id:"",project_content:"",project_manger:"",list:[]}}});