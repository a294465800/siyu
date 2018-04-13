"use strict";var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t._http=e()}(window,function(){var t="http://119.23.202.220:8080",e=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/create",t,this.dataMethodDefaults)}},{key:"createType",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/type/create",t,this.dataMethodDefaults)}},{key:"searchProject",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/projects",{params:t})}},{key:"searchProjectUnit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/project/unit",{params:t})}}]),e}(),a=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createSupplier",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/supplier/create",t,this.dataMethodDefaults)}},{key:"searchSuppliers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/suppliers",{params:t})}}]),e}(),n=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/material/create",t,this.dataMethodDefaults)}},{key:"searchProjectMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/project/material",{params:t})}},{key:"searchBuyMaterial",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/purchase/material",{params:t})}}]),e}(),r=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createWarehouse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/warehouse/create",t,this.dataMethodDefaults)}}]),e}(),s=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createBank",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/bank/create",t,this.dataMethodDefaults)}},{key:"searchBank",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/banks",{params:t})}}]),e}(),i=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/invoice/create",t,this.dataMethodDefaults)}}]),e}(),o=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createTeam",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/team/create",t,this.dataMethodDefaults)}},{key:"createContract",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/create/contract",t,this.dataMethodDefaults)}},{key:"searchTeam",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/teams",{params:t})}},{key:"createFinish",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/finish/add",t,this.dataMethodDefaults)}}]),e}(),h=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0})}return _createClass(e,[{key:"createUpload",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/upload",t)}}]),e}(),u=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createBudget",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._http.post("/create/budget?project_id="+t,e,this.dataMethodDefaults)}}]),e}(),c=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createUser",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/create/user",t,this.dataMethodDefaults)}}]),e}(),l=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createPayment",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/category/create",t,this.dataMethodDefaults)}}]),e}(),d=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createProjectCheck",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/acceptance",t,this.dataMethodDefaults)}},{key:"createTips",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/create/tips",t,this.dataMethodDefaults)}},{key:"createProjectInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/invoice",t,this.dataMethodDefaults)}},{key:"createProjectCollect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/project/collect",t,this.dataMethodDefaults)}}]),e}(),f=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createPurchase",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/create",t,this.dataMethodDefaults)}},{key:"createPayApply",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/ask/pay",t,this.dataMethodDefaults)}},{key:"createPay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/pay",t,this.dataMethodDefaults)}},{key:"createInvoice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/purchase/invoice",t,this.dataMethodDefaults)}}]),e}(),p=function(){function e(){_classCallCheck(this,e),this._http=axios.create({baseURL:t,withCredentials:!0}),this.dataMethodDefaults={headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(t){return Qs.stringify(t)}]}}return _createClass(e,[{key:"createBuyAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/buy/add",t,this.dataMethodDefaults)}},{key:"createReturnAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/return/add",t,this.dataMethodDefaults)}},{key:"createGetAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/get/add",t,this.dataMethodDefaults)}},{key:"createOutAdd",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.post("/stock/out/add",t,this.dataMethodDefaults)}},{key:"searchStock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._http.get("/search/warehouse",{params:t})}}]),e}();return{BankManager:new s,BudgetManager:new u,InvoiceManager:new i,MaterialManager:new n,PaymentManager:new l,ProjectManager:new e,SupplierManager:new a,TeamManager:new o,UploadManager:new h,UserManager:new c,WarehouseManager:new r,CheckManager:new d,BuyManager:new f,StockManager:new p}});