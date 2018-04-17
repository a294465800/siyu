"use strict";function _defineProperty(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}$(document).ready(function(){new Vue({el:"#checkDetail",data:{current:{marginRecyle:-1,requirement:-1,invoice:-1,subCompany:-1,masterContract:-1,subContract:-1},editForm:{marginRecyle:{},requirement:{},invoice:{},subCompany:{},masterContract:{},subContract:{}},marginPay:{},marginRecyle:{},requirement:{},invoice:{},invoiceCompany:[],invoiceCompanyCopy:{},invoiceTax:[],subCompany:{},masterContract:{},subContract:{}},mounted:function(){this.init(),this.invoiceCompanyCopy=this.copyData(this.invoiceCompany),console.log(this),$("#checkDetail").removeClass("invisible")},computed:{marginCount:function(){if(!this.marginRecyle.data)return 0;var t=0;return this.marginRecyle.data.forEach(function(i,n){t+=i.realAmount}),t},preMarginCount:function(){if(!this.marginRecyle.data)return 0;var t=0;return this.marginRecyle.data.forEach(function(i,n){t+=i.preAmount}),t},leftMarginCount:function(){return this.preMarginCount-this.marginCount},requirementCount:function(){if(!this.requirement.data)return 0;var t=0;return this.requirement.data.forEach(function(i,n){t+=i.amount}),t},invoiceCount:function(){if(!this.invoice.data)return 0;var t=0;return this.invoice.data.forEach(function(i,n){t+=i.amount}),t},invoiceTaxCount:function(){if(!this.invoice.data)return[];var t=this.invoice.data,i={},n=new Array;t.forEach(function(t,n){var e=t.company.id,a=t.tax.id;i[e]?i[e][a]?i[e][a]+=t.amount:i[e][a]=t.amount:i[e]=new Object(_defineProperty({},a,t.amount))});for(var e in i){var a=new Object;a.company={id:e,name:this.invoiceCompanyCopy[e]},a.result=i[e],a.count=0;for(var r in i[e])a.count+=i[e][r];n.push(a)}return n},subCompanyCount:function(){if(!this.subCompany.data)return 0;var t=0;return this.subCompany.data.forEach(function(i,n){t+=i.amount}),t},masterContractCount:function(){if(!this.masterContract.data)return 0;var t=0;return this.masterContract.data.forEach(function(i,n){t+=i.amount}),t},subContractCount:function(){if(!this.subContract.data)return 0;var t=0;return this.subContract.data.forEach(function(i,n){t+=i.amount}),t}},methods:{init:function(){var t=$("#marginPay").text().trim();this.marginPay=""===t?{}:JSON.parse(t);var i=$("#marginRecyle").text().trim();this.marginRecyle=""===i?{}:JSON.parse(i);var n=$("#requirement").text().trim();this.requirement=""===n?{}:JSON.parse(n);var e=$("#invoice").text().trim();this.invoice=""===e?{}:JSON.parse(e);var a=$("#invoiceCompany").text().trim();this.invoiceCompany=""===a?{}:JSON.parse(a);var r=$("#invoiceTax").text().trim();this.invoiceTax=""===r?{}:JSON.parse(r);var o=$("#subCompany").text().trim();this.subCompany=""===o?{}:JSON.parse(o);var s=$("#masterContract").text().trim();this.masterContract=""===s?{}:JSON.parse(s);var c=$("#subContract").text().trim();this.subContract=""===c?{}:JSON.parse(c)},copyData:function(t){var i={};for(var n in t){var e=t[n].id,a=t[n].value;i[e]=a}return i},dataValidate:function(t){for(var i in t)if(""===t[i])return this.$notify.error({title:"错误",message:"请确保已填写所有项！"}),!1;return!0},EditFnc:function(t,i,n){this.editForm[n]=t,this.current[n]=i},marginRecyleSave:function(t,i){var n=this.editForm.marginRecyle;this.dataValidate(n)&&(this.$notify.success({title:"成功",message:"已修改"}),this.current.marginRecyle=-1)},requirementSave:function(t,i){var n=this.editForm.requirement;this.dataValidate(n)&&(this.$notify.success({title:"成功",message:"已修改"}),this.current.requirement=-1)},invoiceSave:function(t,i){var n=this.editForm.invoice;this.dataValidate(n)&&(this.$notify.success({title:"成功",message:"已修改"}),this.current.invoice=-1)},subCompanySave:function(t,i){var n=this.editForm.subCompany;this.dataValidate(n)&&(this.$notify.success({title:"成功",message:"已修改"}),this.current.subCompany=-1)},masterContractSave:function(t,i){var n=this.editForm.masterContract;this.dataValidate(n)&&(this.$notify.success({title:"成功",message:"已修改"}),this.current.masterContract=-1)},subContractSave:function(t,i){var n=this.editForm.subContract;this.dataValidate(n)&&(this.$notify.success({title:"成功",message:"已修改"}),this.current.subContract=-1)}}})});