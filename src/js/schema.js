"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t._schemas=e()}(window,function(){return{projects:{signDate:"",name:"",partyA:"",amount:"",completeDate:"",manager:"",maintain:"",masterCompany:[{id:1}],subCompany:[{id:1}],masterContract:[{id:1,amount:"",details:[{id:1}]}],subContract:[{id:1,amount:"",details:[{id:1}]}],margins:[{id:1}],paymentConditions:[{id:1}],contracts:[]},budget:{id:1,name:"",parameter:"",model:"",manufacturer:"",unit:"",price:"",quantity:"",amount:"",type:""},budget_type:[{id:1,name:"物料"},{id:2,name:"工程"},{id:3,name:"其他"}],datePickerOption:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-6048e5),t.$emit("pick",[n,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-7776e6),t.$emit("pick",[n,e])}}]},checkTips:{margins:[{id:1}],requirepayment:[{id:1}]},checkInvoice:{company:"",date:"",tax:"",amount:"",invoices:[{id:1}]},checkCollect:{margins:{payee:"",date:"",amount:"",bank:"",account:""},masterContract:{payee:"",date:"",amount:"",bank:"",account:""},subContract:{payee:"",date:"",amount:"",bank:"",account:""},subCompany:{date:"",amount:""}},budget_type_reverse:{1:"物料",2:"工程",3:"其他"},budgetary_buy:{date:"",supplier:{name:"",bank:"",account:""},amount:"",project_id:"",project_content:"",invoice_condition:"",payment_condition:"",list:[],contracts:[]},extrabudgetary:{date:"",supplier:{name:"",bank:"",account:""},amount:"",project_id:"",project_content:"",invoice_condition:"",payment_condition:"",list:[],contracts:[]},invoiceCreate:{date:"",operator:"",list:[{id:1}]},stockBuyAdd:{projectId:"",date:"",receiver:"",stock:"",list:[]},stockReturnAdd:{project_id:"",project_content:"",project_manger:"",return_people:"",receiver:"",stock_id:"",stock_name:"",list:[]},stockGetAdd:{project_id:"",project_content:"",project_manger:"",get_people:"",stock_id:"",stock_name:"",list:[]}}});