"use strict";$(document).ready(function(){var t=JSON.parse($("#contractContent").text()),e=JSON.parse($("#contractTax").text());function n(t){var e={},n=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value;e[c.id]=c.name}}catch(t){r=!0,a=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}return e}var r=n(e),a=n(t);new Vue({el:"#projectCreate",data:{project:_schemas.projects,contractContent:t,contractTax:e,TaxIDMap:r,ContentIDMap:a},mounted:function(){$("#projectCreate").removeClass("invisible")},computed:{sumAmount:function(){var t=this.project.masterContract,e=this.project.subContract,n=0,r=[];function a(t,e){if(e.length<1)return!1;e.forEach(function(e,a){var o=e.amount?parseFloat(e.amount):0;n+=o,r.push({head:0===a,id:t+e.id,amount:o.toLocaleString("en-US"),type:t})})}return a("m",t),a("s",e),{sum:n.toLocaleString("en-US"),result:r}},sumContent:function(){var t=this,e=t.project.masterContract,n=t.project.subContract,r=0,a={},o=[];if(e&&n){c(e),c(n);for(var i in a)o.push({name:i,amount:a[i].toLocaleString("en-US")});return{sum:r.toLocaleString("en-US"),result:o}}function c(e){e.forEach(function(e,n){var o=e.details;if(!o||o.length<1)return!1;o.forEach(function(e,n){var o=e.amount?parseFloat(e.amount):0;if(r+=o,void 0!==e.name){var i=t.ContentIDMap[e.name];a[i]=a[i]?a[i]+o:o}})})}},sumMargins:function(){var t=this.project.margins,e=0;return t.length<1?e:(t.forEach(function(t,n){e+=t.amount?parseFloat(t.amount):0}),e)},sumPaymentConditions:function(){var t=this.project.paymentConditions,e=0;return t.length<1?e:(t.forEach(function(t,n){e+=t.expected?parseFloat(t.expected):0}),e)}},methods:{addFirstItem:function(t){var e=this.project[t],n=e.length,r=void 0;r=n>0?e[n-1].id+1:1,"masterContract"===t||"subContract"===t?this.project[t].push({id:r,details:new Array}):this.project[t].push({id:r})},deleteFirstItem:function(t,e,n){this.project[t].splice(n,1)},addSecondItem:function(t,e){var n=this.project[t][e].details||[],r=n.length,a=void 0;a=r>0?n[r-1].id+1:1,this.project[t][e].details.push({id:a})},deleteSecondItem:function(t,e,n,r){this.project[t][e].details.splice(n,1)},fileUpload:function(t){var e=t.target.files,n=new FormData,r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;this.project.contracts.push({id:s.size,name:s.name}),n.append("image",s)}}catch(t){a=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}}}})});