"use strict";var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t._http=e()}(window,function(){var t="http://119.23.202.220:8080",e=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/create",t,this.dataMethodDefaults)}},{key:"createType",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/type/create",t,this.dataMethodDefaults)}},{key:"searchProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/projects",{params:t})}},{key:"searchProjectUnit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/project/unit",{params:t})}},{key:"deleteProjectAuth",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/project/role",{params:t})}},{key:"deletProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/project/type",{params:t})}},{key:"checkProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/check/project",{params:t})}},{key:"passProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/pass/project",{params:t})}},{key:"selectProjectCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/select/project/checker",t,this.dataMethodDefaults)}},{key:"selectProjectPass",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/select/project/passer",t,this.dataMethodDefaults)}},{key:"confirmProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/confirm/project",{params:t})}},{key:"deleteProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/delete/project",{params:t})}}]),e}(),a=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createSupplier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/supplier/create",t,this.dataMethodDefaults)}},{key:"searchSuppliers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/suppliers",{params:t})}},{key:"deleteSupplier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/supplier",{params:t})}}]),e}(),r=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/material/create",t,this.dataMethodDefaults)}},{key:"searchProjectMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/project/material",{params:t})}},{key:"searchBuyMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/purchase/material",{params:t})}},{key:"searchBudgetMaterial",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._http.get("/search/budget?project="+t,{params:e})}},{key:"searchPurchase",value:function(t){return this._http.get("/search/purchase?budget="+t)}},{key:"searchMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/material",{params:t})}},{key:"deleteMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/material",{params:t})}},{key:"searchPurchaseProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/purchase/project",{params:t})}},{key:"uploadMaterialBuy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/import/purchase",t)}}]),e}(),n=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createWarehouse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/warehouse/create",t,this.dataMethodDefaults)}},{key:"deleteWarehouse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/warehouse",{params:t})}}]),e}(),s=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createBank",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/bank/create",t,this.dataMethodDefaults)}},{key:"searchBank",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/banks",{params:t})}},{key:"deleteBank",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/bank",{params:t})}}]),e}(),i=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/invoice/create",t,this.dataMethodDefaults)}},{key:"deleteInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/invoice",{params:t})}}]),e}(),h=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createTeam",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/team/create",t,this.dataMethodDefaults)}},{key:"createContract",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/create/contract",t,this.dataMethodDefaults)}},{key:"searchTeam",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/teams",{params:t})}},{key:"createFinish",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/finish/add",t,this.dataMethodDefaults)}},{key:"createPayApply",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/pay/apply",t,this.dataMethodDefaults)}},{key:"createPayAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/pay/add",t,this.dataMethodDefaults)}},{key:"createGetAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/get/add",t,this.dataMethodDefaults)}},{key:"selectFinishCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/finish/select/checker",t,this.dataMethodDefaults)}},{key:"checkFinish",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/build/finish/check",{params:t})}},{key:"selectFinishPass",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/finish/select/passer",t,this.dataMethodDefaults)}},{key:"passFinish",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/build/finish/pass",{params:t})}},{key:"checkPay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/build/pay/check",{params:t})}},{key:"selectPayPasser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/pay/select/passer",t,this.dataMethodDefaults)}},{key:"selectPayCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/build/pay/select/checker",t,this.dataMethodDefaults)}},{key:"passPay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/build/pay/pass",{params:t})}},{key:"deleteTeam",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/team",{params:t})}},{key:"deleteFinish",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("build/finish/delete",{params:t})}}]),e}(),o=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0})}return _createClass(e,[{key:"createUpload",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/upload",t)}},{key:"createExcel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/import/payment",t)}}]),e}(),u=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createBudget",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._http.post("/create/budget?project_id="+t,e,this.dataMethodDefaults)}}]),e}(),c=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createUser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/create/user",t,this.dataMethodDefaults)}},{key:"searchUsers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/users",{params:t})}},{key:"searchAuthUsers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/users",{params:t})}},{key:"deleteUser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/user",{params:t})}}]),e}(),l=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createPayment",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/category/create",t,this.dataMethodDefaults)}},{key:"createPayAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/pay/add",t,this.dataMethodDefaults)}},{key:"calcelPay",value:function(t){return this._http.get("/pay/cancel",{params:t})}},{key:"confirmPay",value:function(t){return this._http.get("/pay/confirm",{params:t})}},{key:"createPayPay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/pay/pay",t,this.dataMethodDefaults)}},{key:"selectPay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/pay/select",t,this.dataMethodDefaults)}},{key:"deleteCategory",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/category",{params:t})}},{key:"deleteFeePay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/pay/type",{params:t})}},{key:"createFeePay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/add/pay/type",t,this.dataMethodDefaults)}},{key:"searchFeePay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/pay/types",{params:t})}},{key:"searchFeePayDetail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/pay/types/detail",{params:t})}}]),e}(),p=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createProjectCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/acceptance",t,this.dataMethodDefaults)}},{key:"createTips",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/create/tips",t,this.dataMethodDefaults)}},{key:"createProjectInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/invoice",t,this.dataMethodDefaults)}},{key:"createProjectCollect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/collect",t,this.dataMethodDefaults)}},{key:"editCollect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/collect",t,this.dataMethodDefaults)}},{key:"getCollect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/collect",{params:t})}},{key:"editTip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/tip",t,this.dataMethodDefaults)}},{key:"getTip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/tip",{params:t})}}]),e}(),d=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createPurchase",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/create",t,this.dataMethodDefaults)}},{key:"createPayApply",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/ask/pay",t,this.dataMethodDefaults)}},{key:"createPay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/pay",t,this.dataMethodDefaults)}},{key:"createInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/invoice/create",t,this.dataMethodDefaults)}},{key:"editInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/edit/invoice",t,this.dataMethodDefaults)}},{key:"createCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/purchase/check",{params:t})}},{key:"selectCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/select/check",t,this.dataMethodDefaults)}},{key:"createPass",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/purchase/pass",{params:t})}},{key:"selectPass",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/select/pass",t,this.dataMethodDefaults)}},{key:"createPayment",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/payment/create",t,this.dataMethodDefaults)}},{key:"paymentCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/purchase/payment/check",{params:t})}},{key:"selectPaymentCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/payment/select/check",t,this.dataMethodDefaults)}},{key:"createPaymentAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/payment/finish",t,this.dataMethodDefaults)}},{key:"searchPurchase",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/purchase",{params:t})}},{key:"deleteBuy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/del/purchase",{params:t})}},{key:"createPaySingle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/cheque",t,this.dataMethodDefaults)}}]),e}(),v=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createBuyAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/buy/add",t,this.dataMethodDefaults)}},{key:"createReturnAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/return/add",t,this.dataMethodDefaults)}},{key:"searchStockMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/stock/get",{params:t})}},{key:"searchStockMaterialSpecial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/stock/material",{params:t})}},{key:"createGetAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/get/add",t,this.dataMethodDefaults)}},{key:"createOutAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/out/add",t,this.dataMethodDefaults)}},{key:"searchStock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/warehouse",{params:t})}},{key:"searchOutStock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/purchase/warehouse",{params:t})}},{key:"searchOutAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/stock/purchase",{params:t})}}]),e}(),f=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createLoanAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/loan/add",t,this.dataMethodDefaults)}},{key:"createSubmit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/loan/submit/other",t,this.dataMethodDefaults)}},{key:"createSubmitProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/loan/submit/project",t,this.dataMethodDefaults)}},{key:"searchCategory",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/category",{params:t})}},{key:"cancelLoan",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/loan/cancel",{params:t})}},{key:"confirmLoan",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/loan/confirm",{params:t})}},{key:"selectLoan",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/loan/select",{params:t})}},{key:"payLoan",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/loan/pay/finish",t,this.dataMethodDefaults)}},{key:"checkSubmit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/check/submit",{params:t})}},{key:"selectCheckSubmit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/select/check/submit",t,this.dataMethodDefaults)}},{key:"selectPassSubmit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/select/pass/submit",t,this.dataMethodDefaults)}},{key:"passSubmit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/pass/submit",{params:t})}},{key:"deleteSubmit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/delete/submit",{params:t})}},{key:"loanUser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/loan/user",{params:t})}},{key:"loanListCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/loan/submit",{params:t})}},{key:"createPayAddPost",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/loan/pay/add",t,this.dataMethodDefaults)}},{key:"searchLoanedUser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/loaned/user",{params:t})}}]),e}();return{BankManager:new s,BudgetManager:new u,InvoiceManager:new i,MaterialManager:new r,PaymentManager:new l,ProjectManager:new e,SupplierManager:new a,TeamManager:new h,UploadManager:new o,UserManager:new c,WarehouseManager:new n,CheckManager:new p,BuyManager:new d,StockManager:new v,LoanManager:new f}});