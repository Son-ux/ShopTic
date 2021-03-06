
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"272",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.targetType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"environment"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hostname"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;",["escape",["macro",9],8,16],"?a=",["escape",["macro",9],8,16],":",["escape",["macro",10],8,16],"?a=",["escape",["macro",10],8,16],":",["escape",["macro",11],8,16],"\u0026\u0026(a=",["escape",["macro",11],8,16],");if(a)return a=a.toString(),a=sha256(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.href"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.is_seller"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=b.split(\"?\");if(2\u003C=c.length){b=encodeURIComponent(a)+\"\\x3d\";a=c[1].split(\/[\u0026;]\/g);for(var d=a.length;0\u003Cd--;)-1!==a[d].lastIndexOf(b,0)\u0026\u0026a.splice(d,1);b=c[0]+\"?\"+a.join(\"\\x26\")}return b}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.dclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],"||",["escape",["macro",14],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=",["escape",["macro",19],8,16],";-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));var b=document.createElement(\"a\");b.href=a;if(b.search){a=b.search.replace(\"?\",\"\\x26\");var c;for(c=0;c\u003Ce.length;c++){var d=e[c];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";b.search=a}return b.href})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.origin"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],",b=",["escape",["macro",23],8,16],"+",["escape",["macro",21],8,16],";return a=a.split(b)[1]||\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],"||",["escape",["macro",7],8,16],";a+=",["escape",["macro",24],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=[\"email\",\"loginKey\"],a=",["escape",["macro",25],8,16],";if(a){-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));a=a.replace(\"?\",\"\\x26\");var b;for(b=0;b\u003Cc.length;b++){var d=c[b];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";a=a.replace(\"\\x26\",\"?\")}return c=a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return ",["escape",["macro",16],8,16],";if(",["escape",["macro",18],8,16],")return ",["escape",["macro",18],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return\"gclid\";if(",["escape",["macro",18],8,16],")return\"dclid\"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"],["map","key","shopee.com.mx","value","UA-188791374-1"],["map","key","shopee.com.co","value","UA-197472871-1"],["map","key","shopee.cl","value","UA-197488217-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"info.initial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.tw","value","34651"],["map","key","shopee.vn","value","34657"],["map","key","shopee.co.id","value","34652"],["map","key","shopee.com.my","value","32773"],["map","key","shopee.ph","value","34655"],["map","key","shopee.co.th","value","34654"],["map","key","shopee.sg","value","32772"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"info.impressions.0.targetData.accountInfo.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 767\u003E=window.innerWidth?\"m\":980\u003C=window.innerWidth?\"d\":\"t\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.items"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];a=",["escape",["macro",39],8,16],"||[];return a=a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.checkoutid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.orders"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity});return d})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","SGD"],["map","key","shopee.com.my","value","MYR"],["map","key","shopee.co.th","value","THB"],["map","key","shopee.tw","value","TWD"],["map","key","shopee.co.id","value","IDR"],["map","key","shopee.vn","value","VND"],["map","key","shopee.ph","value","PHP"],["map","key","shopee.com.br","value","BRL"],["map","key","shopee.com.mx","value","MXN"],["map","key","shopee.com.co","value","COP"],["map","key","shopee.cl","value","CLP"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"*",["escape",["macro",49],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",45],7],"\",add:{products:[{name:\"",["escape",["macro",46],7],"\",id:\"",["escape",["macro",47],7],"\",price:\"",["escape",["macro",50],7],"\",category:\"",["escape",["macro",51],7],"\",variant:\"",["escape",["macro",52],7],"\",quantity:",["escape",["macro",49],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.operation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.register_channel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=b[a].total_without_shipping;return c\/1E5})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",43],8,16],",d=0,e=[],b=0;b\u003Ca.length;b++){for(var c=0;c\u003Ca[b].items.length;c++)try{e.push({id:a[b].items[c].itemid,price:a[b].items[c].price\/1E5,name:a[b].items[c].name,quantity:a[b].items[c].quantity,category:a[b].items[c].categories[0].catids.join(\".\")})}catch(f){console.warn(f)}d+=a[b].shipping_fee}a={ecommerce:{purchase:{actionField:{id:\"",["escape",["macro",42],7],"\",revenue:\"",["escape",["macro",56],7],"\",shipping:d\/1E5},products:e}}};str=JSON.stringify(a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.orderids"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_med"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","1011l628"],["map","key","shopee.co.th","value","1100l551"],["map","key","shopee.vn","value","1100l682"],["map","key","shopee.ph","value","1100l720"],["map","key","shopee.com.my","value","1100l721"],["map","key","shopee.tw","value","1011l795"],["map","key","shopee.co.id","value","1101l712"],["map","key","shopee.com.br","value","1011l971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",61],8,16],",e=",["escape",["macro",42],8,16],",f=",["escape",["macro",58],8,16],",g=",["escape",["macro",43],8,16],",c=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+e+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";b=g.filter(function(d){return d.hasOwnProperty(\"items\")});console.log(\"check \"+b);b.forEach(function(d,h){d.items.forEach(function(a){var k=a.itemid,l=a.price\/1E5,m=a.quantity,n=a.shopid;a=a.categories[0].catids[0];c+=\"[category:\"+a+\"\/sku:\"+k+\"\/value:\"+l+\n\"\/quantity:\"+m+\"\/shop_id:\"+n+\"\/order_id:\"+f[h]+\"\/]\"})});console.log(\"::: \"+c);return c})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-125099498-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.co","value","UA-197472871-1"],["map","key","shopee.com.br","value","UA-149843394-1"],["map","key","shopee.com.mx","value","UA-188791374-1"],["map","key","shopee.com","value","UA-132684032-1"],["map","key","shopee.cl","value","UA-197488217-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",68],8,16],"*",["escape",["macro",69],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catid_be"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{remove:{products:[{name:\"",["escape",["macro",66],7],"\",id:\"",["escape",["macro",67],7],"\",price:",["escape",["macro",70],8,16],",category:\"",["escape",["macro",71],7],"\",variant:\"",["escape",["macro",72],7],"\",quantity:",["escape",["macro",69],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.login_option"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","2599"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var g=",["escape",["macro",77],8,16],",h=",["escape",["macro",42],8,16],",a=",["escape",["macro",43],8,16],",k=",["escape",["macro",56],8,16],",l=",["escape",["macro",58],8,16],",d=[],e=[],f=[];(a||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){})});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].shopid),e.push(a[b].items[c].itemid),f.push(a[b].items[c].categories[0].catids[0]);d=d.join(\"|\");e=e.join(\"|\");f=f.join(\"|\");a=[];a=l.join(\"|\");return g=\"https:\/\/shopback.go2cloud.org\/aff_l?offer_id\\x3d\"+\ng+\"\\x26adv_sub\\x3d\"+h+\"\\x26adv_sub2\\x3d\"+d+\"\\x26adv_sub3\\x3d\"+e+\"\\x26adv_sub4\\x3d\"+a+\"\\x26adv_sub5\\x3d\"+f+\"\\x26amount\\x3d\"+k})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-9"],["map","key","shopee.sg","value","UA-61921742-12"],["map","key","shopee.com.my","value","UA-61915055-10"],["map","key","shopee.tw","value","UA-61915057-10"],["map","key","shopee.co.th","value","UA-61914165-10"],["map","key","(giaitri|nhasach).shopee.vn","value","UA-61914164-10"],["map","key","shopee.ph","value","UA-61918643-10"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",39],8,16],";return a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=location.pathname+location.search,b=document.createElement(\"a\"),d;b.href=a;if(b.search){a=\"\\x26\"+b.search.replace(\"?\",\"\")+\"\\x26\";for(d=0;d\u003Ce.length;d++){var c=e[d];c=a.indexOf(\"\\x26\"+c+\"\\x3d\");if(-1\u003Cc){var f=a.indexOf(\"\\x26\",c+1);a=a.slice(0,c)+a.slice(f,a.length)}}b.search=a.slice(1,a.length-1)}return b.href.replace(location.origin,\"\")})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-14"],["map","key","shopee.sg","value","UA-61921742-14"],["map","key","shopee.com.my","value","UA-61915055-12"],["map","key","shopee.tw","value","UA-61915057-13"],["map","key","shopee.co.th","value","UA-61914165-12"],["map","key","shopee.vn","value","UA-61914164-12"],["map","key","shopee.ph","value","UA-61918643-12"],["map","key","shopee.com.br","value","UA-149843394-3"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",89],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value","G-4572B3WZ33"],["map","key","shopee.com.my","value","G-H06K3499BD"],["map","key","shopee.tw","value","G-RPSBE3TQZZ"],["map","key","shopee.co.th","value","G-L4QXS6R7YG"],["map","key","shopee.vn","value","G-M32T05RVZT"],["map","key","shopee.ph","value","G-CB0044GVTM"],["map","key","shopee.com.br","value","G-0GS478VKB8"],["map","key","shopee.com.mx","value","G-FYC06KL06Z"],["map","key","shopee.com.co","value",""],["map","key","shopee.cl","value",""]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/seller.shopee.co.id\/edu\/","value","UA-61904553-16"],["map","key","https:\/\/seller.shopee.sg\/edu\/","value","UA-61921742-15"],["map","key","https:\/\/seller.shopee.com.my\/edu\/","value","UA-61915055-13"],["map","key","https:\/\/seller.shopee.tw\/edu\/","value","UA-61915057-14"],["map","key","https:\/\/seller.shopee.co.th\/edu\/","value","UA-61914165-13"],["map","key","https:\/\/banhang.shopee.vn\/edu\/","value","UA-61914164-13"],["map","key","https:\/\/seller.shopee.ph\/edu\/","value","UA-61918643-13"],["map","key","https:\/\/seller.shopee.com.br\/edu\/","value","UA-149843394-4"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pc\"===",["escape",["macro",2],8,16],")return\"pc\";if(\"rweb\"===",["escape",["macro",2],8,16],"||\"rweb_android\"===",["escape",["macro",2],8,16],"||\"mweb\"===",["escape",["macro",2],8,16],")return\"mobile\"})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return google_tag_manager[",["escape",["macro",97],8,16],"].dataLayer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.catid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.subcategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0===",["escape",["macro",100],8,16],"?\"cat1\":\"cat2\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"\/1E5;return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","100188"],["map","key","shopee.com.my","value","100126"],["map","key","shopee.co.th","value","100245"],["map","key","shopee.sg","value","100376"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","139835196351422"],["map","key","shopee.com.my","value","757894527666013"],["map","key","shopee.co.th","value","905703166183408"],["map","key","shopee.tw","value","503280033161781"],["map","key","shopee.co.id","value","466924370133774"],["map","key","shopee.vn","value","1457130904612161"],["map","key","shopee.ph","value","1478059392491608"],["map","key","shopee.com.br","value","703307166810792"],["map","key","shopee.com.mx","value","850328915514180"],["map","key","shopee.com.co","value","248175970416870"],["map","key","shopee.cl","value","471906773873929"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",106],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={cookieName:\"_med\",cookieTime:30,keyToGet:\"utm_medium\",keyToSearch:{gclid:\"cpc\"},shopee_refer:\"^((http(s?):\/\/)(([a-z0-9_]+.)?)(shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)\/))\",path:\"\/\",domain:\".\"+location.hostname.replace(\/^www\\.\/i,\"\")};return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__t"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","11"],["map","key","shopee.com.my","value","8"],["map","key","shopee.co.id","value","14"],["map","key","shopee.vn","value","9"],["map","key","shopee.ph","value","15"],["map","key","shopee.tw","value","13"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],",d=[];a=a.filter(function(a){return a.hasOwnProperty(\"items\")});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].itemid);return d.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",43],8,16],",d=[],e=c.filter(function(a){return a.hasOwnProperty(\"items\")}),a=0;a\u003Ce.length;a++)for(var b=0;b\u003Ce[a].items.length;b++)d.push(c[a].items[b].price\/1E5*c[a].items[b].quantity);return d.join(\"|\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.vn","value","ICay2JfBmbeRc1R5Enp1"],["map","key","shopee.co.id","value","IfdkwXB0UU0fVf5tq0DM"],["map","key","shopee.com.my","value","zlDYA9jJjHq1nyHyCLaU"],["map","key","shopee.ph","value","l7fVkOg4vYLmM3fayfyy"],["map","key","shopee.co.th","value","zXiY0VQ8H0VLkoIzoC80"],["map","key","shopee.sg","value","bQSfrGqH6d5VMoTaldIA"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],b=[],c;for(c in a)b.push(a[c].itemid);return b.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.shopId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",120],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","AW-692053728"],["map","key","40867978","value","AW-608738266"],["map","key","119485441","value","AW-611398152"],["map","key","75422406","value","AW-573532228"],["map","key","53892420","value","AW-671893767"],["map","key","37251933","value","AW-627492082"],["map","key","29668384","value","AW-620288715"],["map","key","29667634","value","AW-603702153"],["map","key","29668843","value","AW-408024625"],["map","key","91799978","value","AW-443061445"],["map","key","39401693","value","AW-389061488"],["map","key","55027948","value","AW-388991082"],["map","key","51678844","value","AW-389059076"],["map","key","59860978","value","AW-618568444"],["map","key","83276818","value","AW-415164151"],["map","key","43416591","value","AW-388561066"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",120],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","XI9KCPjfkPkBEODN_8kC"],["map","key","40867978","value","BwtQCLqckfkBENq3oqIC"],["map","key","119485441","value","m4CJCMqGtPkBEIjkxKMC"],["map","key","75422406","value","0bLqCO30pvkBEMTQvZEC"],["map","key","53892420","value","In_dCJy6kfkBEIeSscAC"],["map","key","37251933","value","Gx6hCOKHp_kBEPKJm6sC"],["map","key","29668384","value","TIaVCPektPkBEMu146cC"],["map","key","29667634","value","nJPNCPqqtPkBEImH758C"],["map","key","29668843","value","16QSCNPh3PoBELHsx8IB"],["map","key","91799978","value","mgeuCN-2kfEBEMWpotMB"],["map","key","39401693","value","u7dMCOOO-P8BEPC2wrkB"],["map","key","55027948","value","_tejCJGN4f8BEOqQvrkB"],["map","key","51678844","value","txW6COeO__8BEISkwrkB"],["map","key","59860978","value","_xy2CPWd-P8BEPy1-qYC"],["map","key","83276818","value","LTjOCJ6j-P8BEPfN-8UB"],["map","key","43416591","value","OxrmCIHx8v8BEKrxo7kB"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",120],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","Bua5CJ-spvkBEODN_8kC"],["map","key","40867978","value","_qDFCLyhkfkBENq3oqIC"],["map","key","119485441","value","bTY-CNrtpvkBEIjkxKMC"],["map","key","75422406","value","9LuNCPmukfkBEMTQvZEC"],["map","key","53892420","value","s6R2CPCgtPkBEIeSscAC"],["map","key","37251933","value","e_jFCJyjtPkBEPKJm6sC"],["map","key","29668384","value","Smq9COWqtPkBEMu146cC"],["map","key","29667634","value","Fdt5CNvSkfkBEImH758C"],["map","key","29668843","value","4-T1COzz8voBELHsx8IB"],["map","key","91799978","value","2LF0CJjX8fABEMWpotMB"],["map","key","39401693","value","xRfRCMuI-P8BEPC2wrkB"],["map","key","55027948","value","i_bpCIKN4f8BEOqQvrkB"],["map","key","51678844","value","Q0iTCMKH__8BEISkwrkB"],["map","key","59860978","value","kmcsCNKb-P8BEPy1-qYC"],["map","key","83276818","value","ytDmCI6f-P8BEPfN-8UB"],["map","key","43416591","value","NUqBCOzt8v8BEKrxo7kB"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",21],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(\/unilever_householdcare)|(\/unilever_beautyhotpro)","value","AW-692053728"],["map","key","\/unilever_personalcare","value","AW-608738266"],["map","key","\/realmeofficialstore","value","AW-611398152"],["map","key","\/nutrilonofficialstore","value","AW-573532228"],["map","key","\/oppo_official_store","value","AW-671893767"],["map","key","\/lorealparis_officialstore","value","AW-627492082"],["map","key","\/garnier_thailand","value","AW-620288715"],["map","key","\/lorealparis","value","AW-603702153"],["map","key","\/maybelline_thailand","value","AW-408024625"],["map","key","\/smartsg","value","AW-443061445"],["map","key","\/mobilehubsg","value","AW-389061488"],["map","key","\/absolutepiano","value","AW-388991082"],["map","key","\/atrixofficial","value","AW-389059076"],["map","key","\/foremost_official_shop","value","AW-618568444"],["map","key","\/samsung_thailand","value","AW-415164151"],["map","key","\/movingpeach.sg","value","AW-388561066"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.isOfficialShopTheme"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.keyword"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","ICM-39-1334"],["map","key","shopee.com.my","value","ICM-11-1270"],["map","key","shopee.co.th","value","ICM-49-1393"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"crto.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",132],8,16],",c=[],a=0;a\u003Cb.length\u0026\u00263\u003Ea;a++)\"object\"==typeof b[a]?b[a].hasOwnProperty(\"id\")\u0026\u0026c.push(b[a].id):(\"number\"==typeof b[a]||\"number\"==typeof b[a])\u0026\u0026c.push(b[a]);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.totalPrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",137],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}];return a.map(function(a){return a.items.map(function(a){return a.itemid}).join(\"|\")}).join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/\n1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",115],8,16],",b=a.shipping_subtotal\/1E5,c=a.tax_payable\/1E5;return a=a.total_payable\/1E5-b-c})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/shopee.vn\/m\/99","value","1005975"],["map","key","https:\/\/shopee.co.id\/m\/super-shopping-day-129","value","1005969"],["map","key","https:\/\/shopee.co.th\/m\/99","value","1005972"],["map","key","https:\/\/shopee.com.my\/m\/99","value","1005973"],["map","key","https:\/\/shopee.ph\/m\/99","value","953969"],["map","key","https:\/\/shopee.sg\/m\/99","value","1005974"],["map","key","https:\/\/shopee.tw\/m\/99","value","1005971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",61],8,16],",n=",["escape",["macro",42],8,16],",p=",["escape",["macro",58],8,16],",c=",["escape",["macro",43],8,16],";b=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+n+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";var f=[];(c||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity,e=a.shopid;a=a.categories[0].catids[0];f.push({itemId:b,itemPrice:c,quantity:d,shopId:e,categoryL1:a})})});var d,e,g,h,k,l=[];\n(Object.values(f)||[]).forEach(function(a){d=a.itemId;e=a.itemPrice;g=a.quantity;h=a.categoryL1;k=a.shopId;l.push(\"[category:\"+h+\"\/sku:\"+d+\"\/value:\"+e+\"\/quantity:\"+g+\"\/shop_id:\"+k+\"\/order_id:\"+p+\"\/]\")});var m=\"\";(Object.values(l)||[]).forEach(function(a){m+=a});return c=b+m})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname.split(\"\/\");return a[1].toLowerCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value",""],["map","key","shopee.com.my","value",""],["map","key","shopee.tw","value",""],["map","key","shopee.co.th","value",""],["map","key","shopee.vn","value",""],["map","key","shopee.ph","value",""],["map","key","shopee.com.br","value",""],["map","key","shopee.com.mx","value",""],["map","key","shopee.com.co","value",""],["map","key","shopee.cl","value",""]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclsrc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",154],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",173],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)try{\"undefined\"===typeof d[b[a].items[c].shopid]?d[b[a].items[c].shopid]={shopId:b[a].items[c].shopid,conversionId:\"",["escape",["macro",121],7],"\",conversionLabel:\"",["escape",["macro",122],7],"\",quantity:b[a].items[c].quantity,totalValue:b[a].items[c].price\/1E5*b[a].items[c].quantity}:(d[b[a].items[c].shopid].quantity+=b[a].items[c].quantity,d[b[a].items[c].shopid].totalValue+=b[a].items[c].price\/1E5*b[a].items[c].quantity)}catch(e){console.warn(e)}console.log(\"*****\"+\nObject.values(d));return Object.values(d)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":50,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar p=",["escape",["macro",111],8,16],";document.cookie=p.cookieName+\"\\x3d; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\"+p.path+\";domain\\x3d\"+p.domain;\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":4
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"868286",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":38
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",36],
      "vtp_basketArray":["macro",38],
      "tag_id":50
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":51
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",40],
      "vtp_siteType":["macro",36],
      "tag_id":52
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_productID":["macro",41],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":53
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",36],
      "vtp_TransactionID":["macro",42],
      "vtp_TransactionArray":["macro",44],
      "tag_id":54
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":true,
      "tag_id":57
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"955851",
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":64
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":69
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":71
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":76
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",62],14,3],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":88
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":91
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":92
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",73],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"remove_from_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",75],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",76],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":108
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",78],14,3],
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":120
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":121
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":124
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":125
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":126
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":127
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":128
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":129
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":130
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":131
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":134
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":135
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":136
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":137
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":138
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":139
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":140
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":141
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":142
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":143
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":144
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":145
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":146
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":147
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":148
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":149
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":150
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":151
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":152
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":153
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":154
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":155
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":156
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":157
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":158
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":159
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":160
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":161
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":163
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":164
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":165
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":166
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":167
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":168
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":169
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":170
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":171
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":172
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":173
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":174
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":175
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":176
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":177
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":178
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":179
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":180
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",88],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":189
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":190
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":191
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":192
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":193
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",88],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":194
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":195
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":196
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"myads-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":197
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",93],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":392
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",93],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":393
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":480
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",85]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":510
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":511
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",66]],["map","key","u41","value",["macro",67]],["map","key","u42","value",["macro",70]],["map","key","u43","value",["macro",71]],["map","key","u44","value",["macro",72]],["map","key","u45","value",["macro",69]]],
      "vtp_revenue":["macro",70],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",67],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"s-conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":512
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":513
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",76]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":514
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":515
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",75]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":516
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"s-conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":517
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",83]],["map","key","u50","value",["macro",84]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",81],
      "vtp_url":["macro",82],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEnhancedConversions":false,
      "tag_id":518
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":522
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":525
    },{
      "function":"__hl",
      "tag_id":535
    },{
      "function":"__tl",
      "vtp_eventName":"pageState",
      "vtp_interval":"3000",
      "vtp_uniqueTriggerId":"7691473_172",
      "tag_id":536
    },{
      "function":"__hl",
      "tag_id":537
    },{
      "function":"__hl",
      "tag_id":538
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_uniqueTriggerId":"7691473_360",
      "tag_id":539
    },{
      "function":"__hl",
      "tag_id":540
    },{
      "function":"__hl",
      "tag_id":541
    },{
      "function":"__hl",
      "tag_id":542
    },{
      "function":"__cl",
      "tag_id":543
    },{
      "function":"__hl",
      "tag_id":544
    },{
      "function":"__hl",
      "tag_id":545
    },{
      "function":"__hl",
      "tag_id":546
    },{
      "function":"__hl",
      "tag_id":547
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",96],8,16],"?\"item_m\":\"item\",data=",["escape",["macro",98],8,16],";(window._bwtm=window._bwtm||[]).push({ch:",["escape",["macro",99],8,16],",iid:",["escape",["macro",41],8,16],",uid:",["escape",["macro",11],8,16],",pid:pid,mid:422});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",96],8,16],"?\"home_m\":\"home\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"cat2\"===",["escape",["macro",101],8,16],"?(pid=\"mobile\"===",["escape",["macro",96],8,16],"?\"cat2_m\":\"cat2\",ch=",["escape",["macro",100],8,16],"):(pid=\"mobile\"===",["escape",["macro",96],8,16],"?\"cat1_m\":\"cat1\",ch=",["escape",["macro",102],8,16],");(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,ch:ch,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",96],8,16],"?\"cart_m\":\"cart\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,carts:[{itemid:",["escape",["macro",47],8,16],",price:",["escape",["macro",103],8,16],",count:",["escape",["macro",49],8,16],"}],uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pid=\"mobile\"===",["escape",["macro",96],8,16],"?\"buy_m\":\"buy\",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push({itemid:orders[i].items[j].itemid,price:orders[i].items[j].price\/1E5,count:orders[i].items[j].quantity});(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,bitem:orderItems,uid:",["escape",["macro",11],8,16],",order:",["escape",["macro",42],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var orderItems=",["escape",["macro",43],8,16],",totalPrice=0,i=0;i\u003CorderItems.length;i++)ga(\"gtm.ec:addProduct\",{id:orderItems[i].itemid,quantity:orderItems[i].quantity}),totalPrice+=orderItems[i].price\/1E5;ga(\"gtm.ec:setAction\",\"purchase\",{id:",["escape",["macro",42],8,16],"+\"\",revenue:totalPrice});ga(\"gtm.send\",\"event\",\"tracking\",\"purchase\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"ios\"===",["escape",["macro",96],8,16],"||\"android\"===",["escape",["macro",96],8,16],"?\"search_m\":\"search\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,kw:",["escape",["macro",83],8,16],",uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Efor(var cookieName=\"icm-ssid\",iaTransactionId=getCookie(cookieName),iaOfferID=",["escape",["macro",104],8,16],",iaCheckoutId=",["escape",["macro",42],8,16],",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push(orders[i].items[j]);var iaItemId,iaItemPrice,iaQuantity,iaModelId,iaShopId,iaSubTotal=0;\nfor(i=0;i\u003CorderItems.length;i++){iaItemId=orderItems[i].itemid;iaItemPrice=orderItems[i].price\/1E5;iaQuantity=orderItems[i].quantity;iaModelId=orderItems[i].modelid;iaShopId=orderItems[i].shopid;iaSubTotal=iaItemPrice*iaQuantity;var iaConvesionPixelUrl=\"https:\/\/invol.co\/aff_l?offer_id\\x3d\"+iaOfferID+\"\\x26adv_sub\\x3d\"+iaCheckoutId+\"\\x26adv_sub2\\x3d\"+iaItemId+\"\\x26adv_sub3\\x3d\"+iaModelId+\"\\x26adv_sub4\\x3d\"+iaShopId+\"\\x26amount\\x3d\"+iaSubTotal;\"\"!==iaTransactionId\u0026\u0026(iaConvesionPixelUrl+=\"\\x26transaction_id\\x3d\"+\niaTransactionId);var iaImgPixel=new Image(1,1);iaImgPixel.src=iaConvesionPixelUrl}function getCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/static.masoffer.net\/php\/tracking_js.php?type=general\" async\u003E\u003C\/script\u003E\n\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",105],8,16],");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",105],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",83],7],"\",content_ids:\"",["escape",["macro",84],7],"\",content_type:\"product\",content_category:\"Internal Site Search\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:",["escape",["macro",107],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",41],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",50],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",47],7],"\",content_type:\"product\",contents:[{id:\"",["escape",["macro",47],7],"\",quantity:",["escape",["macro",49],8,16],",item_price:",["escape",["macro",103],8,16],"}]});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:1*",["escape",["macro",56],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",108],7],"\",content_type:\"product\",contents:",["escape",["macro",109],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ViewCategory\",{content_name:\"",["escape",["macro",110],7],"\",content_category:\"",["escape",["macro",102],7],"\",content_ids:\"",["escape",["macro",40],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "setup_tags":["list",["tag",163,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(window._bwtm=window._bwtm||[]).push({mid:422,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",e=\"\";for(c in this.aff_source_params){b=this.aff_source_params[c];var d=this.get_param(b);b=d;if(-1!=this.aff_utm_sources.indexOf(d)){a=1;break}}for(var g in this.aff_sid_params){var c=this.aff_sid_params[g];c=this.get_param(c);if(\"\"!==c){e=c;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\ne\u0026\u0026this.set_cookie(\"_aff_sid\",e,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",e=\"\",d=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var c=0;c\u003Ca.length;c++){var k=a[c].itemid,l=a[c].quantity,m=a[c].price\/1E5,h=a[c].shopid,n=a[c].catid,p=a[c].modelid;e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(c=0;c\u003Cq.length;c++){h=q[c];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\ne,navigator.sendBeacon(b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+e,document.body.appendChild(a));AT.set_cookie(\"_aff_network\",d,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);return null==b?null:b[1]},\nset_cookie:function(a,b,e){var d=new Date;d.setTime(d.getTime()+864E5*e);e=\"expires\\x3d\"+d.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+e+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),e=0;e\u003Cb.length;e++){for(var d=b[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,d.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\n\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",e=\"\";for(c in this.aff_source_params){b=this.aff_source_params[c];var d=this.get_param(b);b=d;if(-1!=this.aff_utm_sources.indexOf(d)){a=1;break}}for(var g in this.aff_sid_params){var c=this.aff_sid_params[g];c=this.get_param(c);if(\"\"!==c){e=c;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\ne\u0026\u0026this.set_cookie(\"_aff_sid\",e,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",e=\"\",d=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var c=0;c\u003Ca.length;c++){var k=a[c].itemid,l=a[c].quantity,m=a[c].price\/1E5,h=a[c].shopid,n=a[c].catid,p=a[c].modelid;e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(c=0;c\u003Cq.length;c++){h=q[c];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\ne,navigator.sendBeacon(b),console.log(\"[AT] Postback tracking url: \"+b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+e,document.body.appendChild(a),console.log(\"[AT] Pixel tracking url: \"+a.src));AT.set_cookie(\"_aff_network\",d,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\n\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);return null==b?null:b[1]},set_cookie:function(a,b,e){var d=new Date;d.setTime(d.getTime()+864E5*e);e=\"expires\\x3d\"+d.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+e+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),e=0;e\u003Cb.length;e++){for(var d=b[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,\nd.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks();AT.track_shopee_order()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction track_keyToGet(){try{var a=get_key(p.keyToGet);null!==a?setCookie(p.cookieName,a):track_keyToSearch()}catch(b){console.warn(\"[medium_cookie_create][track_keyToGet]\",b)}}function track_keyToSearch(){try{var a=Object.entries(p.keyToSearch),b=!0;for(i=0;i\u003Ca.length;i++){var c=a[i],d=get_key(c[0]);if(null!==d){setCookie(p.cookieName,c[1]);b=!1;break}}b\u0026\u0026get_refer()}catch(e){console.warn(\"[medium_cookie_create][track_keyToSearch]\",e)}}\nfunction get_refer(){try{refer\u0026\u0026!shopee_refer_check.test(refer)\u0026\u0026setCookie(p.cookieName,\"refer\")}catch(a){console.warn(\"[medium_cookie_create][get_refer]\",a)}}function get_key(a){try{var b=window.location.href;a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(b);return null==a?null:a[1]}catch(c){return console.warn(\"[medium_cookie_create][get_key]\",c),null}}\nfunction setCookie(a,b){try{var c=new Date;c.setTime(c.getTime()+864E5*p.cookieTime);var d=\";expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+b+d+\";path\\x3d\"+p.path+\";domain\\x3d\"+p.domain}catch(e){return console.warn(\"[medium_cookie_create][setCookie]\",e),null}}try{var p=",["escape",["macro",111],8,16],",refer=",["escape",["macro",112],8,16],",shopee_refer_check=new RegExp(p.shopee_refer,\"i\");track_keyToGet()}catch(a){console.warn(\"[medium_cookie_create]\",a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var timestamp=(new Date).getTime();(function(a){var b=a.createElement(\"script\");b.src=\"https:\/\/click.accesstra.de\/js\/nct\/lp.js?cb\\x3d\"+timestamp;b.async=!0;a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document)}catch(a){console.warn(a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var c=a.itemid,d=a.price\/1E5,e=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:c,category_id:a,price:d,quantity:e})})});var __atw=__atw||[];__atw.push({mcn:\"d64a340bcb633f536d56e51874281454\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});var timestamp=(new Date).getTime();\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstra.de\/js\/nct\/cv_global.js?cb\\x3d\"+timestamp;a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function k(a,b){b?(l[0]=l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0,this.blocks=l):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225);this.block=\nthis.start=this.bytes=this.hBytes=0;this.finalized=this.hashed=!1;this.first=!0;this.is224=a}function x(a,b,c){var f=typeof a;if(\"string\"===f){var e,m=[],d=a.length,g=0;for(f=0;f\u003Cd;++f)128\u003E(e=a.charCodeAt(f))?m[g++]=e:2048\u003Ee?(m[g++]=192|e\u003E\u003E6,m[g++]=128|63\u0026e):55296\u003Ee||57344\u003C=e?(m[g++]=224|e\u003E\u003E12,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e):(e=65536+((1023\u0026e)\u003C\u003C10|1023\u0026a.charCodeAt(++f)),m[g++]=240|e\u003E\u003E18,m[g++]=128|e\u003E\u003E12\u002663,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e);a=m}else{if(\"object\"!==f)throw Error(u);if(null===\na)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);}64\u003Ca.length\u0026\u0026(a=(new k(b,!0)).update(a).array());e=[];m=[];for(f=0;64\u003Ef;++f)d=a[f]||0,e[f]=92^d,m[f]=54^d;k.call(this,b,c);this.update(m);this.oKeyPad=e;this.inner=!0;this.sharedMemory=c}var u=\"input is invalid type\",v=\"object\"==typeof window,p=v?window:{};p.JS_SHA256_NO_WINDOW\u0026\u0026(v=!1);v=!v\u0026\u0026\"object\"==typeof self;var A=!p.JS_SHA256_NO_NODE_JS\u0026\u0026\"object\"==typeof process\u0026\u0026\nprocess.versions\u0026\u0026process.versions.node;A?p=global:v\u0026\u0026(p=self);v=!p.JS_SHA256_NO_COMMON_JS\u0026\u0026\"object\"==typeof module\u0026\u0026module.exports;var F=\"function\"==typeof define\u0026\u0026define.amd,w=!p.JS_SHA256_NO_ARRAY_BUFFER\u0026\u0026\"undefined\"!=typeof ArrayBuffer,c=\"0123456789abcdef\".split(\"\"),G=[-2147483648,8388608,32768,128],n=[24,16,8,0],y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,\n4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],\nz=[\"hex\",\"array\",\"digest\",\"arrayBuffer\"],l=[];!p.JS_SHA256_NO_NODE_JS\u0026\u0026Array.isArray||(Array.isArray=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)});!w||!p.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW\u0026\u0026ArrayBuffer.isView||(ArrayBuffer.isView=function(a){return\"object\"==typeof a\u0026\u0026a.buffer\u0026\u0026a.buffer.constructor===ArrayBuffer});var B=function(a,b){return function(m){return(new k(b,!0)).update(m)[a]()}},C=function(a){var b=B(\"hex\",a);A\u0026\u0026(b=H(b,a));b.create=function(){return new k(a)};b.update=\nfunction(a){return b.create().update(a)};for(var m=0;m\u003Cz.length;++m){var c=z[m];b[c]=B(c,a)}return b},H=function(a,b){var c=eval(\"require('crypto')\"),f=eval(\"require('buffer').Buffer\"),e=b?\"sha224\":\"sha256\",h=function(b){if(\"string\"==typeof b)return c.createHash(e).update(b,\"utf8\").digest(\"hex\");if(null===b||void 0===b)throw Error(u);return b.constructor===ArrayBuffer\u0026\u0026(b=new Uint8Array(b)),Array.isArray(b)||ArrayBuffer.isView(b)||b.constructor===f?c.createHash(e).update(new f(b)).digest(\"hex\"):a(b)};\nreturn h},D=function(a,b){return function(c,f){return(new x(c,b,!0)).update(f)[a]()}},E=function(a){var b=D(\"hex\",a);b.create=function(b){return new x(b,a)};b.update=function(a,c){return b.create(a).update(c)};for(var c=0;c\u003Cz.length;++c){var f=z[c];b[f]=D(f,a)}return b};k.prototype.update=function(a){if(!this.finalized){var b=typeof a;if(\"string\"!==b){if(\"object\"!==b)throw Error(u);if(null===a)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);\nvar c=!0}for(var f,e=0,h=a.length,d=this.blocks;e\u003Ch;){if(this.hashed\u0026\u0026(this.hashed=!1,d[0]=this.block,d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0),c)for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)d[b\u003E\u003E2]|=a[e]\u003C\u003Cn[3\u0026b++];else for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)128\u003E(f=a.charCodeAt(e))?d[b\u003E\u003E2]|=f\u003C\u003Cn[3\u0026b++]:2048\u003Ef?(d[b\u003E\u003E2]|=(192|f\u003E\u003E6)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]):55296\u003Ef||57344\u003C=f?(d[b\u003E\u003E2]|=(224|f\u003E\u003E12)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003C\nn[3\u0026b++]):(f=65536+((1023\u0026f)\u003C\u003C10|1023\u0026a.charCodeAt(++e)),d[b\u003E\u003E2]|=(240|f\u003E\u003E18)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E12\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]);this.lastByteIndex=b;this.bytes+=b-this.start;64\u003C=b?(this.block=d[16],this.start=b-64,this.hash(),this.hashed=!0):this.start=b}return 4294967295\u003Cthis.bytes\u0026\u0026(this.hBytes+=this.bytes\/4294967296\u003C\u003C0,this.bytes%=4294967296),this}};k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var a=this.blocks,\nb=this.lastByteIndex;a[16]=this.block;a[b\u003E\u003E2]|=G[3\u0026b];this.block=a[16];56\u003C=b\u0026\u0026(this.hashed||this.hash(),a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0);a[14]=this.hBytes\u003C\u003C3|this.bytes\u003E\u003E\u003E29;a[15]=this.bytes\u003C\u003C3;this.hash()}};k.prototype.hash=function(){var a,b,c,f,e=this.h0,h=this.h1,d=this.h2,g=this.h3,k=this.h4,l=this.h5,r=this.h6,q=this.h7,n=this.blocks;for(a=16;64\u003Ea;++a){var p=((c=n[a-15])\u003E\u003E\u003E7|c\u003C\u003C25)^(c\u003E\u003E\u003E18|c\u003C\u003C14)^c\u003E\u003E\u003E3;var t=((c=n[a-2])\u003E\u003E\u003E\n17|c\u003C\u003C15)^(c\u003E\u003E\u003E19|c\u003C\u003C13)^c\u003E\u003E\u003E10;n[a]=n[a-16]+p+n[a-7]+t\u003C\u003C0}var u=h\u0026d;for(a=0;64\u003Ea;a+=4)this.first?(this.is224?(f=300032,q=(c=n[0]-1413257819)-150054599\u003C\u003C0,g=c+24177077\u003C\u003C0):(f=704751109,q=(c=n[0]-210244248)-1521486534\u003C\u003C0,g=c+143694565\u003C\u003C0),this.first=!1):(p=(e\u003E\u003E\u003E2|e\u003C\u003C30)^(e\u003E\u003E\u003E13|e\u003C\u003C19)^(e\u003E\u003E\u003E22|e\u003C\u003C10),b=(f=e\u0026h)^e\u0026d^u,q=g+(c=q+((k\u003E\u003E\u003E6|k\u003C\u003C26)^(k\u003E\u003E\u003E11|k\u003C\u003C21)^(k\u003E\u003E\u003E25|k\u003C\u003C7))+(k\u0026l^~k\u0026r)+y[a]+n[a])\u003C\u003C0,g=c+(p+b)\u003C\u003C0),p=(g\u003E\u003E\u003E2|g\u003C\u003C30)^(g\u003E\u003E\u003E13|g\u003C\u003C19)^(g\u003E\u003E\u003E22|g\u003C\u003C10),b=(u=g\u0026e)^g\u0026h^f,r=d+(c=r+((q\u003E\u003E\u003E6|q\u003C\u003C26)^(q\u003E\u003E\u003E11|\nq\u003C\u003C21)^(q\u003E\u003E\u003E25|q\u003C\u003C7))+(q\u0026k^~q\u0026l)+y[a+1]+n[a+1])\u003C\u003C0,p=((d=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|d\u003C\u003C30)^(d\u003E\u003E\u003E13|d\u003C\u003C19)^(d\u003E\u003E\u003E22|d\u003C\u003C10),b=(t=d\u0026g)^d\u0026e^u,l=h+(c=l+((r\u003E\u003E\u003E6|r\u003C\u003C26)^(r\u003E\u003E\u003E11|r\u003C\u003C21)^(r\u003E\u003E\u003E25|r\u003C\u003C7))+(r\u0026q^~r\u0026k)+y[a+2]+n[a+2])\u003C\u003C0,p=((h=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|h\u003C\u003C30)^(h\u003E\u003E\u003E13|h\u003C\u003C19)^(h\u003E\u003E\u003E22|h\u003C\u003C10),b=(u=h\u0026d)^h\u0026g^t,k=e+(c=k+((l\u003E\u003E\u003E6|l\u003C\u003C26)^(l\u003E\u003E\u003E11|l\u003C\u003C21)^(l\u003E\u003E\u003E25|l\u003C\u003C7))+(l\u0026r^~l\u0026q)+y[a+3]+n[a+3])\u003C\u003C0,e=c+(p+b)\u003C\u003C0;this.h0=this.h0+e\u003C\u003C0;this.h1=this.h1+h\u003C\u003C0;this.h2=this.h2+d\u003C\u003C0;this.h3=this.h3+g\u003C\u003C0;this.h4=this.h4+k\u003C\u003C0;this.h5=this.h5+\nl\u003C\u003C0;this.h6=this.h6+r\u003C\u003C0;this.h7=this.h7+q\u003C\u003C0};k.prototype.hex=function(){this.finalize();var a=this.h0,b=this.h1,m=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=c[a\u003E\u003E28\u002615]+c[a\u003E\u003E24\u002615]+c[a\u003E\u003E20\u002615]+c[a\u003E\u003E16\u002615]+c[a\u003E\u003E12\u002615]+c[a\u003E\u003E8\u002615]+c[a\u003E\u003E4\u002615]+c[15\u0026a]+c[b\u003E\u003E28\u002615]+c[b\u003E\u003E24\u002615]+c[b\u003E\u003E20\u002615]+c[b\u003E\u003E16\u002615]+c[b\u003E\u003E12\u002615]+c[b\u003E\u003E8\u002615]+c[b\u003E\u003E4\u002615]+c[15\u0026b]+c[m\u003E\u003E28\u002615]+c[m\u003E\u003E24\u002615]+c[m\u003E\u003E20\u002615]+c[m\u003E\u003E16\u002615]+c[m\u003E\u003E12\u002615]+c[m\u003E\u003E8\u002615]+c[m\u003E\u003E4\u002615]+c[15\u0026m]+c[f\u003E\u003E28\u002615]+c[f\u003E\u003E24\u002615]+c[f\u003E\u003E20\u002615]+c[f\u003E\u003E16\u002615]+c[f\u003E\u003E12\u0026\n15]+c[f\u003E\u003E8\u002615]+c[f\u003E\u003E4\u002615]+c[15\u0026f]+c[e\u003E\u003E28\u002615]+c[e\u003E\u003E24\u002615]+c[e\u003E\u003E20\u002615]+c[e\u003E\u003E16\u002615]+c[e\u003E\u003E12\u002615]+c[e\u003E\u003E8\u002615]+c[e\u003E\u003E4\u002615]+c[15\u0026e]+c[h\u003E\u003E28\u002615]+c[h\u003E\u003E24\u002615]+c[h\u003E\u003E20\u002615]+c[h\u003E\u003E16\u002615]+c[h\u003E\u003E12\u002615]+c[h\u003E\u003E8\u002615]+c[h\u003E\u003E4\u002615]+c[15\u0026h]+c[d\u003E\u003E28\u002615]+c[d\u003E\u003E24\u002615]+c[d\u003E\u003E20\u002615]+c[d\u003E\u003E16\u002615]+c[d\u003E\u003E12\u002615]+c[d\u003E\u003E8\u002615]+c[d\u003E\u003E4\u002615]+c[15\u0026d];return this.is224||(a+=c[g\u003E\u003E28\u002615]+c[g\u003E\u003E24\u002615]+c[g\u003E\u003E20\u002615]+c[g\u003E\u003E16\u002615]+c[g\u003E\u003E12\u002615]+c[g\u003E\u003E8\u002615]+c[g\u003E\u003E4\u002615]+c[15\u0026g]),a};k.prototype.toString=k.prototype.hex;k.prototype.digest=function(){this.finalize();\nvar a=this.h0,b=this.h1,c=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=[a\u003E\u003E24\u0026255,a\u003E\u003E16\u0026255,a\u003E\u003E8\u0026255,255\u0026a,b\u003E\u003E24\u0026255,b\u003E\u003E16\u0026255,b\u003E\u003E8\u0026255,255\u0026b,c\u003E\u003E24\u0026255,c\u003E\u003E16\u0026255,c\u003E\u003E8\u0026255,255\u0026c,f\u003E\u003E24\u0026255,f\u003E\u003E16\u0026255,f\u003E\u003E8\u0026255,255\u0026f,e\u003E\u003E24\u0026255,e\u003E\u003E16\u0026255,e\u003E\u003E8\u0026255,255\u0026e,h\u003E\u003E24\u0026255,h\u003E\u003E16\u0026255,h\u003E\u003E8\u0026255,255\u0026h,d\u003E\u003E24\u0026255,d\u003E\u003E16\u0026255,d\u003E\u003E8\u0026255,255\u0026d];return this.is224||a.push(g\u003E\u003E24\u0026255,g\u003E\u003E16\u0026255,g\u003E\u003E8\u0026255,255\u0026g),a};k.prototype.array=k.prototype.digest;k.prototype.arrayBuffer=function(){this.finalize();var a=new ArrayBuffer(this.is224?\n28:32),b=new DataView(a);return b.setUint32(0,this.h0),b.setUint32(4,this.h1),b.setUint32(8,this.h2),b.setUint32(12,this.h3),b.setUint32(16,this.h4),b.setUint32(20,this.h5),b.setUint32(24,this.h6),this.is224||b.setUint32(28,this.h7),a};x.prototype=new k;x.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var a=this.array();k.call(this,this.is224,this.sharedMemory);this.update(this.oKeyPad);this.update(a);k.prototype.finalize.call(this)}};var t=C();t.sha256=\nt;t.sha224=C(!0);t.sha256.hmac=E();t.sha224.hmac=E(!0);v?module.exports=t:(p.sha256=t.sha256,p.sha224=t.sha224,F\u0026\u0026define(function(){return t}))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/click.accesstrade.co.id\/js\/nct\/lp.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var c=a.itemid,d=a.price\/1E5,e=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:c,category_id:a,price:d,quantity:e})})});var __atw=__atw||[];__atw.push({mcn:\"c3c59e5f8b3e9753913f4d435b53c308\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstrade.co.id\/js\/nct\/cv.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",183,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",productId:\"",["escape",["macro",116],7],"\",value:\"",["escape",["macro",117],7],"\",data:\"",["escape",["macro",42],7],"\",filter:\"payment method\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",183,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",filter:\"MEMBER-SIGNUP\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_home\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_category2_",["escape",["macro",102],12],"\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_offer_",["escape",["macro",41],12],"\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_listing_",["escape",["macro",84],12],"\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_basketstatus_",["escape",["macro",119],12],"\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_startorder\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":386
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"\u0026amp;ncm=1\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":387
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",118],12],"_orderstatus2_",["escape",["macro",56],12],"_",["escape",["macro",42],12],"_",["escape",["macro",108],12],"\u0026amp;cd=default\u0026amp;id=pr_",["escape",["macro",118],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":388
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",121],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);\nfor(var transactionId=",["escape",["macro",42],8,16],",transactionCurrency=\"",["escape",["macro",45],7],"\",orders=",["escape",["macro",43],8,16],",purchaseInfo=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)try{\"undefined\"===typeof purchaseInfo[orders[i].items[j].shopid]?purchaseInfo[orders[i].items[j].shopid]={shopId:orders[i].items[j].shopid,conversionId:\"",["escape",["macro",121],7],"\",conversionLabel:\"",["escape",["macro",122],7],"\",quantity:orders[i].items[j].quantity,totalValue:orders[i].items[j].price\/1E5*orders[i].items[j].quantity}:\n(purchaseInfo[orders[i].items[j].shopid].quantity+=orders[i].items[j].quantity,purchaseInfo[orders[i].items[j].shopid].totalValue+=orders[i].items[j].price\/1E5*orders[i].items[j].quantity)}catch(a){console.warn(a)}var shopPurchases=Object.values(purchaseInfo);\nfor(i=0;i\u003CshopPurchases.length;i++){var shopPurchase=shopPurchases[i],shopId=shopPurchase.shopId,conversionId=shopPurchase.conversionId,conversionLabel=shopPurchase.conversionLabel,conversionValue=shopPurchase.totalValue;gtag(\"config\",conversionId,{allow_ad_personalization_signals:!1});gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:conversionValue,currency:transactionCurrency,transaction_id:transactionId+\"_\"+shopId})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":479
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",121],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",121],8,16],",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":485
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",121],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",121],8,16],",{allow_ad_personalization_signals:!1});var conversionId=\"",["escape",["macro",121],7],"\",conversionLabel=\"",["escape",["macro",124],7],"\",addToCartCurrency=\"",["escape",["macro",45],7],"\";gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:.0555*",["escape",["macro",50],8,16],",currency:addToCartCurrency});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":492
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",125],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",125],8,16],",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":534
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ProductPage.Self"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"impression"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"pc"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"test"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"test.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"uat"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"uat.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"ItemCard",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ItemCard"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"click"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"action"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"mweb"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/produk-digital\/"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/scp\/"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"HomePage"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pageState"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"CategoryPage"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"buyNow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ShopPage.Self"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"OfficialShopLandingPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CollectionPage"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"FlashSale"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"PageMicroSite"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"MallPage.Self"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\/search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"tw"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"sg"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"ph"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"vn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"co"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"cl"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"placeOrder"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"my"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"id"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"th"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"br"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"mx"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"Search(Result|)Page"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CartPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CheckoutPage"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_sign_up_success"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"v3"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging|lite).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.(vn|co.th|com.my|ph|sg|tw)\/m\/99",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.co.id\/m\/super-shopping-day-129",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"(affiliate|affiliates)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"live"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\/web$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"shopee.com"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"action_delete_shopping_cart_item"
    },{
      "function":"_eq",
      "arg0":["macro",74],
      "arg1":"popstate"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(event|doitac).shopee.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"login_success"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_login_success"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(giaitri|nhasach).shopee.vn",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"nhasach.shopee.vn",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(undefined|null|NaN|0|false)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(myads|iklanku|muatukhoa|ads).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",91],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"(seller|banhang).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)\\\/edu\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"pageState"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"localhost"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"registration"
    },{
      "function":"_re",
      "arg0":["macro",120],
      "arg1":"91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",120],
      "arg1":"39401693|55027948|51678844|59860978|83276818|43416591",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",123],
      "arg1":"91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",123],
      "arg1":"39401693|55027948|51678844|59860978|83276818|43416591",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\\/(smartsg|unilever_householdcare|unilever_beautyhotpro|unilever_personalcare|realmeofficialstore|nutrilonofficialstore|oppo_official_store|lorealparis_officialstore|garnier_thailand|lorealparis|maybelline_thailand)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\\/(mobilehubsg|absolutepiano|atrixofficial|samsung_thailand|movingpeach.sg|foremost_official_shop)",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",2,9,11,13,14,21,24,30,116,153,165,173,176,179,186]],
    [["if",9],["unless",10],["add",3,154],["block",9]],
    [["if",12],["unless",11],["add",4]],
    [["if",13],["unless",10],["add",4]],
    [["if",1,14],["add",5,29,36]],
    [["if",15,16],["add",6,26,40]],
    [["if",17,18],["add",7,9,11,14,27,30,35,63,67,81,83,98,106,136,157,166,173,176,179]],
    [["if",3,19],["unless",20],["add",8,61,65,80,86,97,107,127,134]],
    [["if",9,21],["add",8,38,127]],
    [["if",9,22],["add",8,38,127]],
    [["if",9,23],["add",8]],
    [["if",24,25,26],["add",9,11,13,14,19,24,30,114,155,173,176,179,184]],
    [["if",25,26,27],["add",9,11,13,14,20,24,30,115,156,168,173,176,179,185]],
    [["if",18,28],["add",9,11,30,157,173,176,179]],
    [["if",1,29],["add",9,11,13,14,24,30,121,173,176,179,190]],
    [["if",26,30],["add",9,11,13,14,24,30,173,176,179]],
    [["if",26,31],["add",9,11,13,14,20,24,30,121,173,176,179,190]],
    [["if",26,32],["add",9,11,13,14,24,30,121,173,176,179,190]],
    [["if",26,33],["add",9,11,13,14,24,30,121,172,173,176,179,190]],
    [["if",1,34],["add",9,11,13,14,24,30,173,176,179]],
    [["if",25,35,36],["add",9,11,13,20,24,30,59,69,79,84,96,103,117,137,160,164,173,176,179,187]],
    [["if",18,44],["add",10,12,15,16,17,22,25,0,33,39,42,43,44,45,46,64,71,78,90,93,102,120,128,132,158,159,161,162,167,174,1,177,180,191,192],["block",134]],
    [["if",25,26,50],["add",14]],
    [["if",26,51],["add",18,118,171,188]],
    [["if",9],["add",23,163,175,178,183,140,142,143,145,146,147,148,149,150,151,152]],
    [["if",26,52],["add",24,119,170,189]],
    [["if",53,54],["add",28,41,57,70,75,87,94,104,130,169]],
    [["if",26,55],["unless",56],["add",31,60,72,74,91,99,105,126,129,163]],
    [["if",12,57],["unless",8],["add",31,126]],
    [["if",12,22],["unless",58],["add",31,126]],
    [["if",9,59],["add",32]],
    [["if",9,60],["add",32]],
    [["if",18,44,61],["add",34,54,181]],
    [["if",8,26],["add",37,111]],
    [["if",8,12,65],["add",37,111]],
    [["if",8,12],["add",37,111]],
    [["if",12,58],["add",37,111]],
    [["if",3,19,64],["add",38,110]],
    [["if",9,66],["add",38,47,110]],
    [["if",8,9],["add",38,110],["block",2,3,4,5,6,7,8,10,11,13,16,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,47,49,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,112,114,115,116,117,118,119,120,121,122,123,124,129,130,131,132,133,134,135,136,137,138,139,153,154,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",9,67],["add",47]],
    [["if",3,4,5],["add",48],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,47,49,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,112,114,115,116,117,118,119,120,121,122,123,124,129,130,131,132,133,134,135,136,137,138,139,161,163,164,165,166,167,168,169,170,171,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",3,6,7],["add",48],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,25,26,27,28,0,29,30,31,34,42,43,44,47,49,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,112,114,115,116,117,118,119,120,121,122,123,124,129,130,131,132,133,134,135,136,137,138,139,161,163,164,165,166,167,168,169,170,171,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",18,68],["add",49,50,62,73,82,85,95,109,131]],
    [["if",12,69,70],["add",51]],
    [["if",9,70],["add",51]],
    [["if",18,71],["add",52,56,68,77,89,92,101,135]],
    [["if",54,72],["add",53,58,66,76,88,100,108,133]],
    [["if",9,73],["add",55],["block",154,183]],
    [["if",12,74],["unless",8],["add",112,163]],
    [["if",75,77],["unless",76],["add",113,122]],
    [["if",12,78],["add",123]],
    [["if",9,78],["add",124]],
    [["if",79,80],["add",125]],
    [["if",9,81],["add",138]],
    [["if",12,81],["add",139]],
    [["if",9,82],["add",141]],
    [["if",9,83],["add",144]],
    [["if",18,61,85],["add",182]],
    [["if",26,86],["add",193]],
    [["if",26,87],["add",193]],
    [["if",17,18,88],["add",194]],
    [["if",17,18,89],["add",194]],
    [["if",26,90],["add",195]],
    [["if",26,91],["add",195]],
    [["if",2,3],["block",2,3,4,5,6,7,16,159]],
    [["if",3,37],["block",9,10,11,13,14,15,17,24,25,30,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,114,115,116,117,118,119,120,121,129,130,131,132,133,134,135,136,137,159,161,162,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",3,38],["block",9,10,11,12,13,14,15,24,25,30,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,162,172,173,174,176,177,179,180,181,182,183]],
    [["if",3,39],["block",9,10,11,12,13,14,15,24,25,30,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,161,162,172,173,174,176,177,179,180,181,182,183]],
    [["if",3,40],["block",9,14,24,25,30,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,161,172,176,177,179,180,181,182,183]],
    [["if",41],["block",9]],
    [["if",3,42],["block",9,10,11,12,13,14,15,17,18,19,20,21,22,24,25,30,34,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,114,115,116,117,118,119,120,121,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,161,162,172,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",3,43],["block",9,10,11,12,13,14,15,17,18,19,20,21,22,24,25,30,34,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,114,115,116,117,118,119,120,121,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,161,162,172,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",3,45],["block",10,11,13,14,15,17,24,25,30,54,56,57,58,59,60,61,62,63,64,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,162,172,173,174,179,180,181,182,183]],
    [["if",3,46],["block",10,11,13,15,17,25,30,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,162,172,173,174,176,177,181,182,183]],
    [["if",3,47],["block",10,11,13,14,15,17,24,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,101,102,103,104,105,106,107,108,109,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,159,160,162,172,173,174,176,177,179,180]],
    [["if",3,48],["block",10,11,13,18,19,20,21,22,24,25,30,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,114,115,116,117,118,119,120,121,153,154,155,156,157,158,160,161,162,172,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",3,49],["block",13,18,19,20,21,22,24,34,54,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,129,130,131,132,133,134,135,136,137,153,154,155,156,157,158,160,161,162,172,173,174,176,177,179,180,181,182,183,184,185,186,187,188,189,190,191]],
    [["if",3,62,63],["block",35,36,37,38,39,40,41,45,46,50,82,110,111,113]],
    [["if",9],["unless",64],["block",35,36,37,38,39,40,41,45,46,50,110,111,113]],
    [["if",3,84],["block",179]]]
},
"runtime":[[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}},"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__hjtc","__crto"]}

};


/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},la={};try{la.__proto__=ja;ia=la.a;break a}catch(a){}ia=!1}fa=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=fa,oa=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Bj=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.s=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.B={};this.F=!1;this.H={}},ua=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.B["dust."+a]};ta.prototype.set=function(a,b){this.F||(a="dust."+a,this.H.hasOwnProperty(a)||(this.B[a]=b))};
ta.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.F||a.H.hasOwnProperty(b)||delete a.B[b]};ta.prototype.tb=function(){this.F=!0};var k=function(a){this.s=new ta;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.s.set(a,b)};aa.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.s.get(a)};aa.length=function(){return this.g.length};aa.sb=function(){for(var a=ua(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};var xa=function(a,b){sa(b)?delete a.g[Number(b)]:wa(a.s,b)};aa=k.prototype;
aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};aa.tb=function(){this.B=!0;Object.freeze(this.g);this.s.tb()};var ya=function(){function a(f,g){if(b[f]){if(b[f].td+g>b[f].max)throw Error("Quota exceeded");b[f].td+=g}}var b={},c=void 0,d=void 0,e={Pi:function(f){c=f},mg:function(){c&&a(c,1)},Ri:function(f){d=f},ub:function(f){d&&a(d,f)},ej:function(f,g){b[f]=b[f]||{td:0};b[f].max=g},vi:function(f){return b[f]&&b[f].td||0},reset:function(){b={}},gi:a};e.onFnConsume=e.Pi;e.consumeFn=e.mg;e.onStorageConsume=e.Ri;e.consumeStorage=e.ub;e.setMax=e.ej;e.getConsumed=e.vi;e.reset=e.reset;e.consume=e.gi;return e};var za=function(a,b){this.B=a;this.R=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ta;this.g=this.H=void 0};za.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.s.F)if(a.B.ub(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.H["dust."+b]=!0}else a.s.set(b,c)};
za.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.ub(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};za.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};za.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Da=function(a){var b=new za(a.B,a);a.H&&(b.H=a.H);b.R=a.R;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ha=function(){},Ia=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},Ka=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Na=function(a,b){if(a&&Ka(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!Ja(a)||!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Sa=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Va=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=
function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},$a=function(){return new Date(Date.now())},cb=function(){return $a().getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var db=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},fb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},gb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},hb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ib=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=A;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Ma(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=/^\w{1,9}$/,mb=function(a){var b=[];Ta(a,function(c,d){lb.test(c)&&d&&b.push(c)});return b.join(",")};var nb=function(a,b){ta.call(this);this.R=a;this.Fa=b};oa(nb,ta);nb.prototype.toString=function(){return this.R};nb.prototype.sb=function(){return new k(ua(this,1))};nb.prototype.g=function(a,b){a.B.mg();return this.Fa.apply(new ob(this,a),Array.prototype.slice.call(arguments,1))};nb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var qb=function(a,b){for(var c,d=0;d<b.length&&!(c=pb(a,b[d]),c instanceof ra);d++);return c},pb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof nb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.H;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},ob=function(a,b){this.s=a;this.g=b},F=function(a,b){var c=a.g;return Ka(b)?pb(c,b):b},G=function(a){return a.s.R};var rb=function(){ta.call(this)};oa(rb,ta);rb.prototype.sb=function(){return new k(ua(this,1))};var ub={control:function(a,b){return new ra(a,F(this,b))},fn:function(a,b,c){var d=this.g,e=F(this,b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.ub(a.length+f.length);return new nb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=F(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var r=qb(h,f);if(r instanceof ra)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.ub(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=F(this,arguments[d]);"string"===typeof e&&b.ub(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new rb,d=0;d<arguments.length-1;d+=2){var e=F(this,arguments[d])+"",f=F(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.ub(g);c.set(e,f)}return c},undefined:function(){}};var vb=function(){this.B=ya();this.g=new za(this.B)},wb=function(a,b,c){var d=new nb(b,c);d.tb();a.g.set(b,d)},xb=function(a,b,c){ub.hasOwnProperty(b)&&wb(a,c||b,ub[b])};vb.prototype.Nb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};vb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=pb(this.g,arguments[c]);return b};vb.prototype.F=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=pb(c,arguments[e]);return d};var yb,Ab=function(){if(void 0===yb){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}yb=a}else yb=a}return yb};var Cb=function(a,b){this.g=b===Bb?a:""};Cb.prototype.toString=function(){return this.g+""};var Bb={},Db=function(a){var b=Ab(),c=b?b.createScriptURL(a):a;return new Cb(c,Bb)};var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Fb;a:{var Gb=pa.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){Fb=Hb;break a}}Fb=""}var Ib=function(a){return-1!=Fb.indexOf(a)};var Kb=function(a,b,c){this.g=c===Jb?a:""};Kb.prototype.toString=function(){return this.g.toString()};var Lb=function(a){return a instanceof Kb&&a.constructor===Kb?a.g:"type_error:SafeHtml"},Jb={},Mb=function(a){var b=Ab(),c=b?b.createHTML(a):a;return new Kb(c,null,Jb)},Nb=new Kb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Jb);var Ob=function(a,b){a.src=b instanceof Cb&&b.constructor===Cb?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Pb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ub=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Vb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Lb(Nb);return!c.parentElement}),Wb=function(a,b){if(Vb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Lb(b)};var A=window,J=document,Xb=navigator,Yb=J.currentScript&&J.currentScript.src,Zb=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},$b=function(a){var b=J.getElementsByTagName("script")[0]||J.body||J.head;b.parentNode.insertBefore(a,b)},ac=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cc=function(a,b,c,d){var e=J.createElement("script");
d&&Ta(d,function(f,g){f=f.toLowerCase();bc.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Ob(e,Db(a));ac(e,b);c&&(e.onerror=c);$b(e);return e},dc=function(){if(Yb){var a=Yb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||J.body||J.head;d.parentNode.insertBefore(c,
d);ac(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},K=function(a){A.setTimeout(a,0)},ic=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},lc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},mc=function(a){var b=J.createElement("div"),c=Mb("A<div>"+a+"</div>");Wb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},nc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
oc=function(a){Xb.sendBeacon&&Xb.sendBeacon(a)||fc(a)},pc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var qc=function(a,b){return F(this,a)&&F(this,b)},rc=function(a,b){return F(this,a)===F(this,b)},sc=function(a,b){return F(this,a)||F(this,b)},tc=function(a,b){a=F(this,a);b=F(this,b);return-1<String(a).indexOf(String(b))},uc=function(a,b){a=String(F(this,a));b=String(F(this,b));return a.substring(0,b.length)===b},vc=function(a,b){a=F(this,a);b=F(this,b);switch(a){case "pageLocation":var c=A.location.href;b instanceof rb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var xc=function(){this.g=new vb;wc(this)};xc.prototype.Nb=function(a){return this.g.s(a)};var wc=function(a){xb(a.g,"map");var b=function(c,d){wb(a.g,c,d)};b("and",qc);b("contains",tc);b("equals",rc);b("or",sc);b("startsWith",uc);b("variable",vc)};var yc=function(a){if(a instanceof yc)return a;this.Sa=a};yc.prototype.toString=function(){return String(this.Sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Cc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Dc=function(a){if(null==a)return String(a);var b=Cc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ec=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fc=function(a){if(!a||"object"!=Dc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ec(a,"constructor")&&!Ec(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ec(a,b)},M=function(a,b){var c=b||("array"==Dc(a)?[]:{}),d;for(d in a)if(Ec(a,d)){var e=a[d];"array"==Dc(e)?("array"!=Dc(c[d])&&(c[d]=[]),c[d]=M(e,c[d])):Fc(e)?(Fc(c[d])||(c[d]={}),c[d]=M(e,c[d])):c[d]=e}return c};var Hc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ua(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Ma(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.sb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof rb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof nb){var u=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Gc(t[v],b,!!c);var w=b?b.B:ya(),y=new za(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(u);f(h,u);return u}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Gc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ma(d,
h);if(-1<l)return e[l];if(Ka(h)||Va(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Fc(h)){var q=new rb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new nb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Hc(F(this,v[w]),b,!!c);return g((0,this.g.R)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var u=typeof h;if(null===h||"string"===u||"number"===u||"boolean"===u)return h;};return g(a)};var Ic=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jc=function(a){if(void 0===a||Ka(a)||Fc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ic(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ic(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lc="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mc=new ra("break"),Nc=new ra("continue"),Oc=function(a,b){return F(this,a)+F(this,b)},Pc=function(a,b){return F(this,a)&&F(this,b)},Yc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Ma(Lc,b)){var d=Hc(c);return Gc(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var e=a.get(b);if(e instanceof nb){var f=Ic(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ma(Kc.supportedMethods,b)){var g=
Ic(c);g.unshift(this.g);return Kc[b].apply(a,g)}}if(a instanceof nb||a instanceof rb){if(a.has(b)){var h=a.get(b);if(h instanceof nb){var l=Ic(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof nb?a.R:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ic(c))}if(a instanceof yc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Zc=function(a,b){a=F(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=F(this,b);c.set(a,d);return d},$c=function(a){var b=Da(this.g),c=qb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},ad=function(){return Mc},bd=function(a){for(var b=F(this,a),c=0;c<b.length;c++){var d=F(this,b[c]);if(d instanceof ra)return d}},cd=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=F(this,arguments[c+1]);Ba(b,d,e,!0)}}},dd=function(){return Nc},ed=function(a,b,c){var d=new k;b=F(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,F(this,f))},fd=function(a,b){return F(this,a)/F(this,b)},gd=function(a,b){a=F(this,a);b=F(this,b);var c=a instanceof yc,d=b instanceof yc;return c||d?c&&d?a.Sa==b.Sa:!1:a==b},hd=function(a){for(var b,c=0;c<arguments.length;c++)b=
F(this,arguments[c]);return b};function id(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=qb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function jd(a,b,c){if("string"===typeof b)return id(a,function(){return b.length},function(f){return f},c);if(b instanceof rb||b instanceof k||b instanceof nb){var d=b.sb(),e=d.length();return id(a,function(){return e},function(f){return d.get(f)},c)}}
var kd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return jd(function(e){d.set(a,e);return d},b,c)},ld=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return jd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},md=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return jd(function(e){var f=Da(d);f.add(a,e);return f},b,c)},od=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return nd(function(e){d.set(a,e);return d},b,c)},pd=
function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return nd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},qd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return nd(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function nd(a,b,c){if("string"===typeof b)return id(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return id(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var rd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var u=f.get(r);q.add(u,p.get(u))}}var f=F(this,a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=F(this,d);var h=Da(g);for(e(g,h);pb(h,b);){var l=qb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);pb(m,c);h=m}},sd=function(a){a=F(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},td=function(a,b){var c;a=F(this,a);b=F(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof rb||a instanceof k||a instanceof nb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof yc)return;return c},ud=function(a,b){return F(this,a)>F(this,
b)},vd=function(a,b){return F(this,a)>=F(this,b)},wd=function(a,b){a=F(this,a);b=F(this,b);a instanceof yc&&(a=a.Sa);b instanceof yc&&(b=b.Sa);return a===b},Dd=function(a,b){return!wd.call(this,a,b)},Ed=function(a,b,c){var d=[];F(this,a)?d=F(this,b):c&&(d=F(this,c));var e=qb(this.g,d);if(e instanceof ra)return e},Fd=function(a,b){return F(this,a)<F(this,b)},Gd=function(a,b){return F(this,a)<=F(this,b)},Hd=function(a,b){return F(this,a)%F(this,b)},Id=function(a,b){return F(this,a)*F(this,b)},Jd=function(a){return-F(this,
a)},Kd=function(a){return!F(this,a)},Ld=function(a,b){return!gd.call(this,a,b)},Md=function(){return null},Nd=function(a,b){return F(this,a)||F(this,b)},Od=function(a,b){var c=F(this,a);F(this,b);return c},Pd=function(a){return F(this,a)},Qd=function(a){return Array.prototype.slice.apply(arguments)},Rd=function(a){return new ra("return",F(this,a))},Sd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
nb||a instanceof k||a instanceof rb)&&a.set(b,c);return c},Td=function(a,b){return F(this,a)-F(this,b)},Ud=function(a,b,c){a=F(this,a);var d=F(this,b),e=F(this,c);if(!Ka(d)||!Ka(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===F(this,d[h]))if(f=F(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=F(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Vd=function(a,b,c){return F(this,a)?F(this,b):F(this,c)},Wd=function(a){a=F(this,a);return a instanceof nb?"function":typeof a},Xd=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Yd=function(a,b,c,d){var e=F(this,d);if(F(this,c)){var f=qb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;F(this,a);){var g=qb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}F(this,
b)}},Zd=function(a){return~Number(F(this,a))},$d=function(a,b){return Number(F(this,a))<<Number(F(this,b))},ae=function(a,b){return Number(F(this,a))>>Number(F(this,b))},be=function(a,b){return Number(F(this,a))>>>Number(F(this,b))},ce=function(a,b){return Number(F(this,a))&Number(F(this,b))},de=function(a,b){return Number(F(this,a))^Number(F(this,b))},ee=function(a,b){return Number(F(this,a))|Number(F(this,b))};var ge=function(){this.g=new vb;fe(this)};ge.prototype.Nb=function(a){return he(this.g.s(a))};
var ne=function(a,b){return he(ie.g.F(a,b))},fe=function(a){var b=function(d,e){xb(a.g,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){wb(a.g,String(d),e)};c(0,Oc);c(1,Pc);c(2,Yc);c(3,Zc);c(53,$c);c(4,ad);c(5,bd);c(52,cd);c(6,dd);c(9,bd);c(50,ed);c(10,fd);c(12,gd);c(13,hd);c(47,kd);c(54,ld);c(55,md);c(63,rd);c(64,od);c(65,pd);c(66,qd);c(15,sd);c(16,td);c(17,td);c(18,ud);c(19,vd);c(20,wd);c(21,Dd);c(22,Ed);c(23,Fd);c(24,Gd);c(25,Hd);c(26,Id);c(27,
Jd);c(28,Kd);c(29,Ld);c(45,Md);c(30,Nd);c(32,Od);c(33,Od);c(34,Pd);c(35,Pd);c(46,Qd);c(36,Rd);c(43,Sd);c(37,Td);c(38,Ud);c(39,Vd);c(40,Wd);c(41,Xd);c(42,Yd);c(58,Zd);c(57,$d);c(60,ae);c(61,be);c(56,ce);c(62,de);c(59,ee)},pe=function(){var a=ie,b=oe();wb(a.g,"require",b)},qe=function(a,b){a.g.g.R=b};function he(a){if(a instanceof ra||a instanceof nb||a instanceof k||a instanceof rb||a instanceof yc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var re=function(){var a=function(b){return{toString:function(){return b}}};return{ah:a("consent"),Kd:a("consent_always_fire"),sf:a("convert_case_to"),tf:a("convert_false_to"),uf:a("convert_null_to"),vf:a("convert_true_to"),wf:a("convert_undefined_to"),nj:a("debug_mode_metadata"),rb:a("function"),Mh:a("instance_name"),Oh:a("live_only"),Ph:a("malware_disabled"),Qh:a("metadata"),qj:a("original_activity_id"),rj:a("original_vendor_template_id"),Sh:a("once_per_event"),Vf:a("once_per_load"),tj:a("priority_override"),
uj:a("respected_consent_types"),Zf:a("setup_tags"),$f:a("tag_id"),ag:a("teardown_tags")}}();
var se=[],te={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ue=function(a){return te[a]},ve=/[\x00\x22\x26\x27\x3c\x3e]/g;se[3]=function(a){return String(a).replace(ve,ue)};var ze=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ae={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Be=function(a){return Ae[a]};se[7]=function(a){return String(a).replace(ze,Be)};
se[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ze,Be)+"'"}};var He=/['()]/g,Ie=function(a){return"%"+a.charCodeAt(0).toString(16)};se[12]=function(a){var b=
encodeURIComponent(String(a));He.lastIndex=0;return He.test(b)?b.replace(He,Ie):b};var Je=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ke={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Le=function(a){return Ke[a]};var Me=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;se[14]=function(a){var b=String(a);return Me.test(b)?b.replace(Je,Le):"#zSoyz"};se[16]=function(a){return a};var Ne;
var Oe=[],Pe=[],Qe=[],Re=[],Se=[],Te={},Ue,Ve,We,Xe=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ye=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Te[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.kg&&b.kg(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===re.Kd.toString()&&a[f]){}d&&b&&b.jg&&(e.vtp_gtmCachedValues=b.jg);return void 0!==d?d(e):Ne(c,e,b)},$e=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ze(a[e],b,c));return d},Ze=function(a,b,c){if(Ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ze(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Oe[f];if(!g||b.Re(g))return;c[f]=!0;try{var h=$e(g,b,c);h.vtp_gtmEventId=b.id;d=Ye(h,b);We&&(d=We.hi(d,h))}catch(y){b.Dg&&b.Dg(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ze(a[l],b,c)]=Ze(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Ze(a[p],b,c);Ve&&(m=m||q===Ve.jd);d.push(q)}return Ve&&m?Ve.ki(d):d.join("");case "escape":d=Ze(a[1],b,c);if(Ve&&Ka(a[1])&&"macro"===a[1][0]&&Ve.Di(a))return Ve.Ui(d);d=
String(d);for(var r=2;r<a.length;r++)se[a[r]]&&(d=se[a[r]](d));return d;case "tag":var u=a[1];if(!Re[u])throw Error("Unable to resolve tag reference "+u+".");return d={sg:a[2],index:u};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=af(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},af=function(a,b,c){try{return Ue($e(a,b,c))}catch(d){JSON.stringify(a)}return 2};var bf=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(bf,Error);function cf(a,b){if(Ka(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)cf(a[c],b[c])}};var df=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(df,Error);var ff=function(){return function(a,b){a instanceof df||(a=new df(a,ef));b&&a.g.push(b);throw a;}};function ef(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var jf=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}for(var c=[],d=[],e=gf(a),f=0;f<Pe.length;f++){var g=Pe[f],h=hf(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Re.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},hf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},gf=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=af(Qe[c],a));return b[c]}};var kf={hi:function(a,b){b[re.sf]&&"string"===typeof a&&(a=1==b[re.sf]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(re.uf)&&null===a&&(a=b[re.uf]);b.hasOwnProperty(re.wf)&&void 0===a&&(a=b[re.wf]);b.hasOwnProperty(re.vf)&&!0===a&&(a=b[re.vf]);b.hasOwnProperty(re.tf)&&!1===a&&(a=b[re.tf]);return a}};var lf=function(){this.g={}};function mf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new bf(c,d,g);}}function nf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));mf(e,b,d,g);mf(f,b,d,g)}}}};var Af=function(a){var b=of.N,c=this;this.s=new lf;this.g={};var d={},e=nf(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ta(a,function(f,g){var h={};Ta(g,function(l,m){var p=pf(l,m);h[l]=p.assert;d[l]||(d[l]=p.V)});c.g[f]=function(l,m){var p=h[l];if(!p)throw qf(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},Cf=function(a){return Bf.g[a]||
function(){}};function pf(a,b){var c=Xe(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=qf;try{return Ye(c)}catch(d){return{assert:function(e){throw new bf(e,{},"Permission "+e+" is unknown.");},V:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function qf(a,b,c){return new bf(a,b,c)};var Df=!1;var Ef={};Ef.mj=Xa('');Ef.ni=Xa('');var Ff=Df,Gf=Ef.ni,Hf=Ef.mj;
var Wf=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Xf=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Wf(b,"/*")&&(b=b.slice(0,-2));Wf(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Yf=/^[a-z0-9-]+$/i,Zf=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ag=function(a,b){var c;if(!(c=!$f(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Yf.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Zf.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var u=l.hostname,t=q;if(0!==t.indexOf("*."))r=u.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=u.toLowerCase().indexOf(t.toLowerCase());r=-1===v?!1:u.length===t.length?
!0:u.length!==t.length+v?!1:"."===u[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Xf(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},$f=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var bg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,cg={Fn:"function",DustMap:"Object",List:"Array"},N=function(a,b,c){for(var d=0;d<b.length;d++){var e=bg.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof nb?p="Fn":l instanceof k?p="List":l instanceof rb?p="DustMap":
l instanceof yc&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(cg[h]||h)+".");}}};function dg(a){return""+a}
function eg(a,b){var c=[];return c};var fg=function(a,b){var c=new nb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=F(this,d[e]);return b.apply(this,d)});c.tb();return c},gg=function(a,b){var c=new rb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,fg(a+"_"+d,e)):(Ja(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.tb();return c};var hg=function(a,b){N(G(this),["apiName:!string","message:?string"],arguments);var c={},d=new rb;return d=gg("AssertApiSubject",c)};var ig=function(a,b){N(G(this),["actual:?*","message:?string"],arguments);var c={},d=new rb;
return d=gg("AssertThatSubject",c)};function jg(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Hc(arguments[d],c));return Gc(a.apply(null,b))}}var lg=function(){for(var a=Math,b=kg,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=jg(a[e].bind(a)))}return c};var mg=function(a){var b;return b};var ng=function(a){var b;return b};var og=function(a){N(G(this),["uri:!string"],arguments);return encodeURI(a)};var pg=function(a){N(G(this),["uri:!string"],arguments);return encodeURIComponent(a)};var qg=function(a){N(G(this),["message:?string"],arguments);};var rg=function(a,b){N(G(this),["min:!number","max:!number"],arguments);return Pa(a,b)};var sg=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.ai.apply(null,Array.prototype.slice.call(arguments,1))};var tg=function(){sg(this,"read_container_data");var a=new rb;a.set("containerId",'GTM-WJZQSJF');a.set("version",'272');a.set("environmentName",'');a.set("debugMode",Ff);a.set("previewMode",Hf);a.set("environmentMode",Gf);a.tb();return a};var ug=function(){return(new Date).getTime()};var vg=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof nb)return"function";if(a instanceof yc){a=a.Sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var wg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Ff||Hf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Gc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hc(c))})}};var xg=function(a){return Wa(Hc(a,this.g))};var yg=function(a){return Number(Hc(a,this.g))};var zg=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ag=function(a,b,c){var d=null,e=!1;return e?d:null};var kg="floor ceil round max min abs pow sqrt".split(" ");var Bg=function(){var a={};return{wi:function(b){return a.hasOwnProperty(b)?a[b]:void 0},fj:function(b,c){a[b]=c},reset:function(){a={}}}},Cg=function(a,b){N(G(this),["apiName:!string","mock:?*"],arguments);};var Dg={};
Dg.keys=function(a){return new k};
Dg.values=function(a){return new k};
Dg.entries=function(a){return new k};Dg.freeze=function(a){return a};var Fg=function(){this.g={};this.s={};};Fg.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
Fg.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ia(b)?fg(a,b):gg(a,b)};
var Hg=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ia(c)?fg(b,c):gg(b,c)};function Gg(a,b){var c=void 0;return c};function Ig(){var a={};return a};var O={hc:"_ee",pd:"_syn_or_mod",vj:"_uei",ie:"_eu",sj:"_pci",Fb:"event_callback",Yc:"event_timeout",Ga:"gtag.config",Oa:"gtag.get",ya:"purchase",Db:"refund",ib:"begin_checkout",Bb:"add_to_cart",Cb:"remove_from_cart",kh:"view_cart",yf:"add_to_wishlist",Na:"view_item",Tc:"view_promotion",Sc:"select_promotion",Nd:"select_item",Wb:"view_item_list",xf:"add_payment_info",jh:"add_shipping_info",Za:"value_key",Ya:"value_callback",Ha:"allow_ad_personalization_signals",ac:"restricted_data_processing",Xb:"allow_google_signals",
Ka:"cookie_expires",Yb:"cookie_update",cc:"session_duration",cd:"session_engaged_time",Ra:"user_properties",ra:"transport_url",T:"ads_data_redaction",za:"user_data",Zb:"first_party_collection",D:"ad_storage",I:"analytics_storage",Ld:"region",rf:"wait_for_update",Ja:"conversion_linker",Ia:"conversion_cookie_prefix",ia:"value",fa:"currency",Pf:"trip_type",aa:"items",If:"passengers",Od:"allow_custom_scripts",Ib:"session_id",Nf:"quantity",qb:"transaction_id",mb:"language",Xc:"country",Vc:"allow_enhanced_conversions",
Td:"aw_merchant_id",Rd:"aw_feed_country",Sd:"aw_feed_language",Qd:"discount",Cf:"developer_id",ed:"delivery_postal_code",Zd:"estimated_delivery_date",Xd:"shipping",fe:"new_customer",Ud:"customer_lifetime_value",Yd:"enhanced_conversions",Eb:"page_view",qa:"linker",O:"domains",ob:"decorate_forms"};O.Sf=[O.ya,O.Db,O.ib,O.Bb,O.Cb,O.kh,O.yf,O.Na,O.Tc,O.Sc,O.Wb,O.Nd,O.xf,O.jh];O.Rf=[O.Ha,O.Xb,O.Yb];O.Tf=[O.Ka,O.Yc,O.cc,O.cd];var Kg=function(a){Fa("GTM",a)};var Lg=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Mg=new Lg(1936,!0),Ng=new Lg(1933);var Pg=function(){var a=Og;if(a.Pe&&a.hasOwnProperty("Pe"))return a.Pe;var b=new a;return a.Pe=b};var Og=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Ng.g]=!0}},Qg=function(a){return Pg().g(a.g,a.defaultValue)};var Rg=[];function Sg(){var a=Zb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Tg,update:Ug,addListener:Vg,notifyListeners:Wg,active:!1,usedDefault:!1});return a.ics}
function Tg(a,b,c,d,e,f){var g=Sg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&A.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Xg(a),Wg(),Fa("TAGGING",2))},f)}}}
function Ug(a,b){var c=Sg();c.active=!0;if(void 0!=b){var d=Yg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Yg(a);f.quiet?(f.quiet=!1,Xg(a)):g!==d&&Xg(a)}}function Vg(a,b){Rg.push({De:a,ri:b})}function Xg(a){for(var b=0;b<Rg.length;++b){var c=Rg[b];Ka(c.De)&&-1!==c.De.indexOf(a)&&(c.Fg=!0)}}function Wg(a){for(var b=0;b<Rg.length;++b){var c=Rg[b];if(c.Fg){c.Fg=!1;try{c.ri({fi:a})}catch(d){}}}}
var Yg=function(a){var b=Sg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Zg=function(a){return(Sg().entries[a]||{}).initial},$g=function(a){return!(Sg().entries[a]||{}).quiet},ah=function(){return Qg(Ng)?Sg().active:!1},bh=function(){return Sg().usedDefault},ch=function(a,b){Sg().addListener(a,b)},dh=function(a){Sg().notifyListeners(a)},eh=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!$g(b[e]))return!0;return!1}if(c()){var d=!1;ch(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
fh=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Yg(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=n(b)?[b]:b,e={};c().length!==d.length&&ch(d,function(f){var g=c();0<g.length&&(f.De=g,a(f))})};function gh(a){for(var b=[],c=0;c<hh.length;c++){var d=a(hh[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var hh=[O.D,O.I],ih=function(a){var b=a[O.Ld];b&&Kg(40);var c=a[O.rf];c&&Kg(41);for(var d=Ka(b)?b:[b],e={Rb:0};e.Rb<d.length;e={Rb:e.Rb},++e.Rb)Ta(a,function(f){return function(g,h){if(g!==O.Ld&&g!==O.rf){var l=d[f.Rb];Sg().set(g,h,l,"VN","VN-SG",c)}}}(e))},jh=function(a,b){Ta(a,function(c,d){Sg().update(c,d)});dh(b)},kh=function(a){var b=Yg(a);return void 0!=b?b:!0},lh=function(){return"G1"+gh(Yg)},mh=function(a,b){ch(a,b)},nh=function(a,b){fh(a,b)},oh=function(a,b){eh(a,
b)};var sh=function(a){return rh?J.querySelectorAll(a):null},th=function(a,b){if(!rh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},uh=!1;if(J.querySelectorAll)try{var vh=J.querySelectorAll(":root");vh&&1==vh.length&&vh[0]==J.documentElement&&(uh=!0)}catch(a){}var rh=uh;var wh,xh=!1;var yh=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};var Hh=/:[0-9]+$/,Ih=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Lh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Jh(a.protocol)||Jh(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(Hh,"").toLowerCase());return Kh(a,b,c,d,e)},Kh=function(a,b,c,d,e){var f,g=Jh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Mh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Hh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ma(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ih(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Jh=function(a){return a?a.replace(":",
"").toLowerCase():""},Mh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Nh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Hh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Oh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Nh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var Ph={},Qh=!0,Rh=!1;var Th=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Uh=new RegExp(/@(gmail|googlemail)\./i),Vh=new RegExp(/support|noreply/i),Wh="SCRIPT STYLE IMG SVG PATH BR".split(" "),Xh=["BR"],Yh={};
function Zh(a){var b;if(a===J.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Zh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function $h(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function ai(a){if(0==a.length)return null;var b;b=$h(a,function(c){return!Vh.test(c.ma)});b=$h(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=$h(b,function(c){return!yh(c.element)});return b[0]}
var bi=function(a){var b=!a||!!a.zg,c=!a||!!a.Ag,d=b+"."+c;a&&a.vc&&a.vc.length&&(d+="."+a.vc.join("."));var e=Yh[d];if(e&&200>cb()-e.timestamp)return e.result;var f;var g=[],h=J.body;if(h){for(var l=h.querySelectorAll("*"),m=0;m<l.length&&1E4>m;m++){var p=l[m];if(!(0<=Wh.indexOf(p.tagName.toUpperCase()))){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=Xh.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<l.length?"2":"1"}}else f={elements:g,
status:"4"};for(var u=f,t=u.elements,v=[],w=0;w<t.length;w++){var y=t[w],x=y.textContent;y.value&&(x=y.value);if(x){var z=x.match(Th);if(z){var B=z[0],D;if(A.location){var C=Kh(A.location,"host",!0);D=0<=B.toLowerCase().indexOf(C)}else D=!1;D||v.push({element:y,ma:B})}}}var E;var H=a&&a.vc;if(H&&0!==H.length){for(var Q=[],L=0;L<v.length;L++){for(var U=!0,S=0;S<H.length;S++){var W=H[S];if(W&&th(v[L].element,W)){U=!1;break}}U&&Q.push(v[L])}E=Q}else E=v;var I=ai(E),T=[];if(I){var ca=I.element,P={ma:I.ma,
tagName:ca.tagName,type:1};b&&(P.querySelector=Zh(ca));c&&(P.isVisible=!yh(ca));T.push(P)}var na={elements:T,status:10<v.length?"3":u.status};Yh[d]={timestamp:cb(),result:na};return na},ci=function(a){return a.tagName+":"+a.isVisible+":"+a.ma.length+":"+Uh.test(a.ma)};
var di=function(a){return/^e\d+$/.test(a)||/^[0-9A-Za-z_-]{43}$/.test(a)},ei=function(a){return void 0===a||null===a?"":n(a)?Za(String(a)):"e0"},gi=function(a){return a.replace(fi,"")},ii=function(a){return hi(a.replace(/\s/g,""))},hi=function(a){return Za(a.replace(ji,"").toLowerCase())},li=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return ki.test(a)?a:"e0"},ni=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=
c.replace(/\./g,""));c=c+"@"+b[1];if(mi.test(c))return c}return"e0"},qi=function(a,b,c){window.Promise||c([],[]);Promise.all(a.map(function(d){return d.value&&oi(d.name)?pi(d.value).then(function(e){d.value=e}):Promise.resolve()})).then(function(){c(a,b)}).catch(function(){c([],[])})},pi=function(a){if(""===a||"e0"===a)return Promise.resolve(a);if(A.crypto&&A.crypto.subtle)try{var b=ri(a);return A.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");
return A.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}else return Promise.resolve("e1")},ri=function(a){var b;if(A.TextEncoder)b=(new A.TextEncoder("utf-8")).encode(a);else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|
e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},ji=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,mi=/^\S+@\S+\.\S+$/,ki=/^\+\d{11,15}$/,fi=/[.~]/g,si={},ti=(si.email="em",si.phone_number="pn",si.first_name="fn",si.last_name="ln",si.street="sa",si.city="ct",si.region="rg",si.country="co",si.postal_code="pc",si.error_code="ec",si),ui=function(a,b,c){function d(t,v,w){var y=t[v];Ka(y)||(y=[y]);for(var x=0;x<y.length;++x){var z=ei(y[x]);""!==z&&g.push({name:v,value:w(z),index:void 0})}}function e(t,v,w,y){var x=
ei(t[v]);""!==x&&g.push({name:v,value:w(x),index:y})}function f(t){return function(v){Kg(64);return t(v)}}var g=[],h=[];if("https:"===A.location.protocol){d(a,"email",ni);d(a,"phone_number",li);d(a,"first_name",f(ii));d(a,"last_name",f(ii));var q=a.home_address||{};d(q,"street",f(hi));d(q,"city",f(hi));d(q,"postal_code",f(gi));d(q,"region",f(hi));d(q,"country",f(gi));var r=a.address||{};Ka(r)||(r=[r]);for(var u=0;u<r.length;u++)e(r[u],"first_name",ii,u),e(r[u],"last_name",ii,u),e(r[u],"street",hi,u),e(r[u],"city",hi,u),e(r[u],"postal_code",gi,
u),e(r[u],"region",hi,u),e(r[u],"country",gi,u);qi(g,h,c)}else g.push({name:"error_code",value:"e3",index:void 0}),c(g,h)},vi=function(a,b){ui(a,[],function(c,d){for(var e=["tv.1"],f=0;f<c.length;++f){var g=c[f].name,h=c[f].value,l=c[f].index,m=ti[g];m&&h&&(!oi(g)||di(h))&&(void 0!==l&&(m+=l),e.push(m+"."+h))}b(encodeURIComponent(e.join("~")),d)})},wi=function(a,b){if(A.Promise)try{return new Promise(function(c){ui(a,b,function(d,e){for(var f=["tv.1"],g=0;g<d.length;++g){var h=d[g].name,l=d[g].value,
m=d[g].index,p=ti[h];p&&l&&(!oi(h)||di(l))&&(void 0!==m&&(p+=m),f.push(p+"."+l))}c({Fc:encodeURIComponent(f.join("~")),sc:e})})})}catch(c){}},oi=function(a){return-1!==["email","phone_number","first_name","last_name","street"].indexOf(a)};var of={},xi=null,yi=Math.random();of.N="GTM-WJZQSJF";of.od="7e0";of.pj="";of.dh="ChAI8P/JhwYQ+qHWxPb/14MfEiQAaZrVtKp7qBILVgnENvCHRVExVFM8GVRG7i0ogwy/CS9csb8aAgW/";var zi={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ai={__paused:!0,__tg:!0},Bi;for(Bi in zi)zi.hasOwnProperty(Bi)&&(Ai[Bi]=!0);var Ci="www.googletagmanager.com/gtm.js";
var Di=Ci,Ei=Xa(""),Fi=null,Gi=null,Hi="https://www.googletagmanager.com/a?id="+of.N+"&cv=272",Ii={},Ji={},Ki=function(){var a=xi.sequence||1;xi.sequence=a+1;return a};of.bh="";var Li={},Mi=new Qa,Ni={},Oi={},Ri={name:"dataLayer",set:function(a,b){M(kb(a,b),Ni);Pi()},get:function(a){return Qi(a,2)},reset:function(){Mi=new Qa;Ni={};Pi()}},Qi=function(a,b){return 2!=b?Mi.get(a):Si(a)},Si=function(a,b){var c=a.split(".");b=b||[];for(var d=Ni,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ma(b,d))return}return d},Ti=function(a,b){Oi.hasOwnProperty(a)||(Mi.set(a,b),M(kb(a,b),Ni),Pi())},Ui=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Qi(c,1);if(Ka(d)||Fc(d))d=M(d);Oi[c]=d}},Pi=function(a){Ta(Oi,function(b,c){Mi.set(b,c);M(kb(b,void 0),Ni);M(kb(b,c),Ni);a&&delete Oi[b]})},Wi=function(a,b,c){Li[a]=Li[a]||{};Li[a][b]=Vi(b,c)},Vi=function(a,b){var c,d=1!==(void 0===b?2:b)?Si(a):Mi.get(a);"array"===Dc(d)||"object"===Dc(d)?c=M(d):c=d;return c},Xi=function(a,b){if(Li[a])return Li[a][b]},Yi=function(a,b){Li[a]&&delete Li[a][b]};
var Zi=function(a,b,c){if(c){var d=c.selector_type,e=String(c.value),f;if("js_variable"===d)if(e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,""),0===e.indexOf("dataLayer."))f=Qi(e.substring(10));else{var g=e.split(".");f=A[g.shift()];for(var h=0;h<g.length;h++)f=f&&f[g[h]]}else if("css_selector"===d&&rh){var l=sh(e);l&&0<l.length&&(f=lc(l[0])||Za(l[0].value))}f&&(a[b]=f)}},$i=function(a){if(a){var b={};Zi(b,"email",a.email);Zi(b,"phone_number",a.phone);b.address=[];for(var c=a.name_and_address||[],
d=0;d<c.length;d++){var e={};Zi(e,"first_name",c[d].first_name);Zi(e,"last_name",c[d].last_name);Zi(e,"street",c[d].street);Zi(e,"city",c[d].city);Zi(e,"region",c[d].region);Zi(e,"country",c[d].country);Zi(e,"postal_code",c[d].postal_code);b.address.push(e)}return b}},aj=function(a){if(a)switch(a.mode){case "selectors":return $i(a.selectors);case "auto_detect":var b=a.auto_detect,c=bi({zg:!1,Ag:!1,vc:b&&b.exclude_element_selectors}).elements,d={};if(0<c.length)for(var e=0;e<c.length;e++){var f=c[e];
if(1===f.type){d.email=f.ma;break}}return d}},bj=function(a){switch(a.enhanced_conversions_mode){case "manual":var b=a.enhanced_conversions_manual_var;return void 0!==b?b:A.enhanced_conversion_data;case "automatic":return $i(a.enhanced_conversions_automatic_settings)}};var cj={},dj=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===cj[a]&&(cj[a]=Math.floor(Math.random()*b));return cj[a]};function ej(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function fj(a){return"null"!==a.origin};var ij=function(a,b,c,d){return gj(d)?ej(a,String(b||hj()),c):[]},lj=function(a,b,c,d,e){if(gj(e)){var f=jj(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=kj(f,function(g){return g.wd},b);if(1===f.length)return f[0].id;f=kj(f,function(g){return g.Gc},c);return f[0]?f[0].id:void 0}}};function mj(a,b,c,d){var e=hj(),f=window;fj(f)&&(f.document.cookie=a);var g=hj();return e!=g||void 0!=c&&0<=ij(b,g,!1,d).indexOf(c)}
var qj=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!gj(c.Va))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=nj(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Ni);g=e(g,"samesite",
c.aj);c.cj&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=oj(),q=void 0,r=!1,u=0;u<p.length;++u){var t="none"!==p[u]?p[u]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!pj(t,c.path)&&mj(v,a,b,c.Va))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return pj(m,c.path)?1:mj(g,a,b,c.Va)?0:1},rj=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return qj(a,b,c)};
function kj(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function jj(a,b,c){for(var d=[],e=ij(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),wd:1*l[0]||1,Gc:1*l[1]||1}))}}return d}
var nj=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},sj=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tj=/(^|\.)doubleclick\.net$/i,pj=function(a,b){return tj.test(window.document.location.hostname)||"/"===b&&sj.test(a)},hj=function(){return fj(window)?window.document.cookie:""},oj=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;tj.test(e)||sj.test(e)||a.push("none");return a},gj=function(a){if(!Qg(Ng)||!a||!ah())return!0;if(!$g(a))return!1;var b=Yg(a);return null==b?!0:!!b};var uj=function(){return[Math.round(2147483647*Math.random()),Math.round(cb()/1E3)].join(".")},xj=function(a,b,c,d,e){var f=vj(b);return lj(a,f,wj(c),d,e)},yj=function(a,b,c,d){var e=""+vj(c),f=wj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},vj=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},wj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function zj(a,b,c){var d,e=Number(null!=a.wb?a.wb:void 0);0!==e&&(d=new Date((b||cb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Aj=["1"],Bj={},Fj=function(a){var b=Cj(a.prefix);if(!Bj[b]&&!Dj(b,a.path,a.domain)){var c=uj();if(0===Ej(b,c,a)){var d=Zb("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}Dj(b,a.path,a.domain)}};function Ej(a,b,c){var d=yj(b,"1",c.domain,c.path),e=zj(c);e.Va="ad_storage";return rj(a,d,e)}function Dj(a,b,c){var d=xj(a,b,c,Aj,"ad_storage");d&&(Bj[a]=d);return d}function Cj(a){return(a||"_gcl")+"_au"};var Gj=function(a){for(var b=[],c=J.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({kf:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Hj(a,b){var c=Gj(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].kf]||(d[c[e].kf]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),Ca:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].kf].push(g)}}return d};function Ij(){for(var a=Jj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Kj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Jj,Lj;
function Mj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Lj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Jj=Jj||Kj();Lj=Lj||Ij();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Nj;var Rj=function(){var a=Oj,b=Pj,c=Qj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gc(J,"mousedown",d);gc(J,"keyup",d);gc(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Sj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Qj().decorators.push(f)},Tj=function(a,b,c){for(var d=Qj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==J.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&gb(e,g.callback())}}return e},Qj=function(){var a=Zb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Uj=/(.*?)\*(.*?)\*(.*)/,Vj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Wj=/^(?:www\.|m\.|amp\.)+/,Xj=/([^?#]+)(\?[^#]*)?(#.*)?/;function Yj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var ak=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Jj=Jj||Kj();Lj=Lj||Ij();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),u=p?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|u>>4,y=(u&15)<<2|t>>6,x=t&63;q||(x=64,p||(y=64));l.push(Jj[v],Jj[w],Jj[y],Jj[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Zj(z),
z].join("*")},Zj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Nj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Nj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Nj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ck=function(){return function(a){var b=Nh(A.location.href),
c=b.search.replace("?",""),d=Ih(c,"_gl",!1,!0)||"";a.query=bk(d)||{};var e=Lh(b,"fragment").match(Yj("_gl"));a.fragment=bk(e&&e[3]||"")||{}}},dk=function(a){var b=ck(),c=Qj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(gb(d,e.query),a&&gb(d,e.fragment));return d},bk=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Uj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Zj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=Mj(r[u+1]);return q}}}}catch(t){}};function ek(a,b,c,d){function e(p){var q=p,r=Yj(a).exec(q),u=q;if(r){var t=r[2],v=r[4];u=r[1];v&&(u=u+t+v)}p=u;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Xj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function fk(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Tj(b,1,c),e=Tj(b,2,c),f=Tj(b,3,c);if(hb(d)){var g=ak(d);c?gk("_gl",g,a):hk("_gl",g,a,!1)}if(!c&&hb(e)){var h=ak(e);hk("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){hk(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){gk(m,p,q);break a}}"string"==typeof q&&ek(m,p,q,void 0)}}
function hk(a,b,c,d){if(c.href){var e=ek(a,b,c.href,void 0===d?!1:d);Eb.test(e)&&(c.href=e)}}
function gk(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ek(a,b,c.action);Eb.test(m)&&(c.action=m)}}}
var Oj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||fk(e,e.hostname)}}catch(g){}},Pj=function(a){try{if(a.action){var b=Lh(Nh(a.action),"host");fk(a,b)}}catch(c){}},ik=function(a,b,c,d){Rj();Sj(a,b,"fragment"===c?2:1,!!d,!1)},jk=function(a,b){Rj();Sj(a,[Kh(A.location,"host",!0)],b,!0,!0)},kk=function(){var a=J.location.hostname,b=Vj.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Wj,""),l=e.replace(Wj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},lk=function(a,b){return!1===a?!1:a||b||kk()};var mk={};var nk=/^\w+$/,ok=/^[\w-]+$/,pk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},qk=function(){if(!Qg(Ng)||!ah())return!0;var a=Yg("ad_storage");return null==a?!0:!!a},rk=function(a,b){$g("ad_storage")?qk()?a():fh(a,"ad_storage"):b?Fa("TAGGING",3):eh(function(){rk(a,!0)},["ad_storage"])},wk=function(a){return vk(a).map(function(b){return b.Ca})},vk=function(a){var b=[];if(!fj(A)||!J.cookie)return b;var c=ij(a,J.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Pc:d.Pc},e++){var f=xk(c[e]);if(null!=f){var g=f,h=g.version;d.Pc=g.Ca;var l=g.timestamp,m=g.labels,p=Na(b,function(q){return function(r){return r.Ca===q.Pc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=yk(p.labels,m||[])):b.push({version:h,Ca:d.Pc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return zk(b)};function yk(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Ak(a){return a&&"string"==typeof a&&a.match(nk)?a:"_gcl"}
var Ck=function(){var a=Nh(A.location.href),b=Lh(a,"query",!1,void 0,"gclid"),c=Lh(a,"query",!1,void 0,"gclsrc"),d=Lh(a,"query",!1,void 0,"wbraid"),e=Lh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Ih(f,"gclid",!1,void 0);c=c||Ih(f,"gclsrc",!1,void 0);d=d||Ih(f,"wbraid",!1,void 0)}return Bk(b,c,e,d)},Bk=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&ok.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(ok))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Ek=function(a){var b=Ck();rk(function(){Dk(b,a)})};
function Dk(a,b,c,d){function e(p,q){var r=Fk(p,f);r&&(rj(r,q,g),h=!0)}b=b||{};d=d||[];var f=Ak(b.prefix);c=c||cb();var g=zj(b,c,!0);g.Va="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==mk.enable_gbraid_cookie_write?0:mk.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var Hk=function(a,b){var c=dk(!0);rk(function(){for(var d=Ak(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==pk[f]){var g=Fk(f,d),h=c[g];if(h){var l=Math.min(Gk(h),cb()),m;b:{var p=l;if(fj(A))for(var q=ij(g,J.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(Gk(q[r])>p){m=!0;break b}m=!1}if(!m){var u=zj(b,l,!0);u.Va="ad_storage";rj(g,h,u)}}}}Dk(Bk(c.gclid,c.gclsrc),b)})},Fk=function(a,b){var c=pk[a];if(void 0!==c)return b+c},Gk=function(a){return 0!==Ik(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function xk(a){var b=Ik(a.split("."));return 0===b.length?null:{version:b[0],Ca:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Ik(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!ok.test(a[2])?[]:a}
var Jk=function(a,b,c,d,e){if(Ka(b)&&fj(A)){var f=Ak(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Fk(a[l],f);if(m){var p=ij(m,J.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};rk(function(){ik(g,b,c,d)})}},zk=function(a){return a.filter(function(b){return ok.test(b.Ca)})},Kk=function(a,b){if(fj(A)){for(var c=Ak(b.prefix),d={},e=0;e<a.length;e++)pk[a[e]]&&(d[a[e]]=pk[a[e]]);rk(function(){Ta(d,function(f,g){var h=ij(c+g,J.cookie,void 0,"ad_storage");h.sort(function(u,
t){return Gk(t)-Gk(u)});if(h.length){var l=h[0],m=Gk(l),p=0!==Ik(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Ik(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];Dk(q,b,m,p)}})})}};function Lk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Mk=function(a){function b(e,f,g){g&&(e[f]=g)}if(ah()){var c=Ck();if(Lk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);jk(function(){return d},3);jk(function(){var e={};return e._up="1",e},1)}}};function Nk(a,b){var c=Ak(b),d=Fk(a,c);if(!d)return 0;for(var e=vk(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function Ok(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Pk=/^\d+\.fls\.doubleclick\.net$/;function Qk(a,b){$g(O.D)?kh(O.D)?a():fh(a,O.D):b?Kg(42):oh(function(){Qk(a,!0)},[O.D])}function Rk(a){var b=Nh(A.location.href),c=Lh(b,"host",!1);if(c&&c.match(Pk)){var d=Lh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Sk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Rk("gcl"+a);if(d)return d.split(".")}var e=Ak(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!kh(O.D)&&c,g;g=Ck()[a]||[];if(0<g.length)return f?["0"]:g}var h=Fk(a,e);return h?wk(h):[]}function Tk(a){var b=[];Ta(a,function(c,d){d=zk(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].Ca);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Uk=function(a){var b=Rk("gac");return b?!kh(O.D)&&a?"0":decodeURIComponent(b):Tk(qk()?Hj():{})},Vk=function(a){var b=Rk("gacgb");return b?!kh(O.D)&&a?"0":decodeURIComponent(b):Tk(qk()?Hj("_gac_gb",!0):{})},Wk=function(a,b){var c=Ck(),d=[],e=c.gclid,f=c.dclid,g=c.gclsrc||"aw";!e||"aw.ds"!==g&&"aw"!==g&&"ds"!==g||d.push({Ca:e,Ke:g});!f||d.push({Ca:f,Ke:"ds"});Qk(function(){Fj(b);var h=Bj[Cj(b.prefix)],l=!1;if(h&&0<d.length)for(var m=xi.joined_auid=xi.joined_auid||{},p=0;p<d.length;p++){var q=d[p],r=q.Ca,u=q.Ke,t=(b.prefix||"_gcl")+"."+u+"."+r;if(!m[t]){var v="https://adservice.google.com/pagead/regclk";v="gb"===u?v+"?gbraid="+r+"&auid="+h:v+"?gclid="+r+"&auid="+h+"&gclsrc="+u;oc(v);l=m[t]=!0}}null==a&&(a=l);if(a&&h){var w=Cj(b.prefix),y=Bj[w];y&&Ej(w,y,b)}})},
Xk=function(a){var b;if(Rk("gclaw")||Rk("gac")||0<(Ck().aw||[]).length)b=!1;else{var c;if(0<(Ck().gb||[]).length)c=!0;else{var d=Math.max(Nk("aw",a),Ok(qk()?Hj():{}));c=Math.max(Nk("gb",a),Ok(qk()?Hj("_gac_gb",!0):{}))>d}b=c}return b};var Yk=/[A-Z]+/,Zk=/\s/,$k=function(a){if(n(a)&&(a=Za(a),!Zk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Yk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],P:d}}}}},bl=function(a){for(var b={},c=0;c<a.length;++c){var d=$k(a[c]);d&&(b[d.id]=d)}al(b);var e=[];Ta(b,function(f,g){e.push(g)});return e};
function al(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.P[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var cl=function(){var a=!1;return a};var el=function(a,b,c,d){return(2===dl()||d||"http:"!=A.location.protocol?a:b)+c},dl=function(){var a=dc(),b;if(1===a)a:{var c=Di;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ql=function(a,b){var c=a?bj(a):A.enhanced_conversion_data,d=(a||{}).enhanced_conversions_mode;if(A.Promise)try{return c?wi(c,b).then(function(e){e.Be=d;return e}):Promise.resolve({Fc:"",sc:[],Be:d})}catch(e){}};
var rl=function(a){if(kh(O.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=Oh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=Oh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},sl=function(){var a;if(!(a=Ei)){var b;if(!0===A._gtmdgs)b=!0;else{var c=Xb&&Xb.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return dj(1,100)<d?dj(2,2):-1},tl=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var ul=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vl={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wl={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xl="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var yl=function(){var a=!1;return a},Al=function(a){var b=Qi("gtm.allowlist")||Qi("gtm.whitelist");b&&Kg(9);yl()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&ib(Ya(b),vl),d=Qi("gtm.blocklist")||
Qi("gtm.blacklist");d||(d=Qi("tagTypeBlacklist"))&&Kg(3);d?Kg(8):d=[];zl()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ma(Ya(d),"google")&&Kg(2);var e=d&&ib(Ya(d),wl),f={};return function(g){var h=g&&g[re.rb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Ji[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Ma(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Ma(c,l[q])){Kg(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var u=0<=Ma(e,h);if(u)r=u;else{var t=Sa(e,l||[]);t&&Kg(10);r=t}}var v=!m||r;v||!(0<=Ma(l,"sandboxedScripts"))||c&&-1!==Ma(c,"sandboxedScripts")||(v=Sa(e,xl));return f[h]=v}},zl=function(){return ul.test(A.location&&A.location.hostname)};var Bl={active:!0,isAllowed:function(){return!0}},Cl=function(a){var b=xi.zones;return b?b.checkState(of.N,a):Bl},Dl=function(a){var b=xi.zones;!b&&a&&(b=xi.zones=a());return b};var El=function(){},Fl=function(){};var Gl=!1,Hl=0,Il=[];function Jl(a){if(!Gl){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Gl=!0;for(var e=0;e<Il.length;e++)K(Il[e])}Il.push=function(){for(var f=0;f<arguments.length;f++)K(arguments[f]);return 0}}}function Kl(){if(!Gl&&140>Hl){Hl++;try{J.documentElement.doScroll("left"),Jl()}catch(a){A.setTimeout(Kl,50)}}}var Ll=function(a){Gl?a():Il.push(a)};var Nl=function(a,b){this.g=!1;this.F=[];this.H={tags:[]};this.R=!1;this.s=this.B=0;Ml(this,a,b)},Ol=function(a,b,c,d){if(Ai.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Fc(d)&&(e=M(d,e));e.id=c;e.status="timeout";return a.H.tags.push(e)-1},Pl=function(a,b,c,d){var e=a.H.tags[b];e&&(e.status=c,e.executionTime=d)},Ql=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},Ml=function(a,b,c){Ia(b)&&a.nc(b);c&&A.setTimeout(function(){return Ql(a)},Number(c))};
Nl.prototype.nc=function(a){var b=this,c=fb(function(){return K(function(){a(of.N,b.H)})});this.g?c():this.F.push(c)};var Rl=function(a){a.B++;return fb(function(){a.s++;a.R&&a.s>=a.B&&Ql(a)})};var Sl=function(){function a(d){return!Ja(d)||0>d?0:d}if(!xi._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ja(Ri.get("gtm.start"))?Ri.get("gtm.start"):0;xi._li={cst:a(c-b),cbt:a(Gi-b)}}},Tl=function(a){A.performance&&A.performance.mark(of.N+"_"+a+"_start")},Ul=function(a){if(A.performance){var b=of.N+"_"+a+"_start",c=of.N+"_"+a+"_duration";A.performance.measure(c,b);var d=A.performance.getEntriesByName(c)[0];A.performance.clearMarks(b);A.performance.clearMeasures(c);
var e=xi._p||{};void 0===e[a]&&(e[a]=d.duration,xi._p=e);return d.duration}},Vl=function(){if(A.performance&&A.performance.now){var a=xi._p||{};a.PAGEVIEW=A.performance.now();xi._p=a}};var Wl={},Xl=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},Yl=!1;
var Zl=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||Kg(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number($a());A[b]=c}Sl();return A[b]},$l=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},am=function(a){if(!ah())return;var b=Xl();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var cm=function(a){},bm=function(){return A.GoogleAnalyticsObject||"ga"},dm=function(a,b){return function(){var c=Xl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var km=function(a){},om=function(a){},pm=
function(){return"&tc="+Re.filter(function(a){return a}).length},sm=function(){2022<=qm().length&&rm()},tm=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},vm=function(){um||(um=A.setTimeout(rm,500))},rm=function(){um&&(A.clearTimeout(um),um=void 0);void 0===wm||xm[wm]&&!ym&&!zm||(Am[wm]||Bm.Ei()||0>=Cm--?(Kg(1),Am[wm]=!0):(Bm.Xi(),fc(qm(!0)),xm[wm]=!0,Dm=Em=Fm=zm=ym=""))},qm=function(a){var b=wm;if(void 0===b)return"";var c=Ga("GTM"),d=Ga("TAGGING");return[Gm,xm[b]?"":"&es=1",
Hm[b],km(b),c?"&u="+c:"",d?"&ut="+d:"",pm(),ym,zm,Fm,Em,om(a),Dm,"&z=0"].join("")},Jm=function(){Gm=Im()},Im=function(){return[Hi,"&v=3&t=t","&pid="+Pa(),"&rv="+of.od].join("")},nm=["L","S","Y"],jm=["S","E"],Km={sampleRate:"0.005000",Vg:"",Ug:Number("5")},Lm=0<=J.location.search.indexOf("?gtm_latency=")||0<=J.location.search.indexOf("&gtm_latency="),Mm;if(!(Mm=Lm)){var Nm=Math.random(),Om=Km.sampleRate;Mm=Nm<Om}var Pm=Mm,Qm={label:of.N+" Container",children:[{label:"Initialization",children:[]}]},Gm=Im(),xm={},ym="",zm="",Dm="",Em="",mm={},lm=!1,im={},Rm={},Fm="",wm=void 0,Hm={},Am={},um=void 0,Sm=2;0<Km.Ug&&(Sm=Km.Ug);var Bm=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);
return{Ei:function(){return c<a?!1:cb()-d[c%a]<b},Xi:function(){var f=c++%a;d[f]=cb()}}}(Sm,1E3),Cm=1E3,Um=function(a,b){if(Pm&&!Am[a]&&wm!==a){rm();wm=a;Dm=ym="";Hm[a]="&e="+tm(b)+"&eid="+a;vm();}},Vm=function(a,b,c,d){if(Pm&&b){var e,f=String(b[re.rb]||
"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;if(!Am[a]){a!==wm&&(rm(),wm=a);ym=ym?ym+"."+g:"&tr="+g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");
var l=(Te[h]?"1":"2")+e;Dm=Dm?Dm+"."+l:"&ti="+l;vm();sm()}}};var bn=function(a,b,c){if(Pm&&!Am[a]){a!==wm&&(rm(),
wm=a);var d=c+b;zm=zm?zm+"."+d:"&epr="+d;vm();sm()}},cn=function(a,b,c){};function dn(a,b,c,d){var e=Re[a],f=en(a,b,c,d);if(!f)return null;var g=Ze(e[re.Zf],c,[]);if(g&&g.length){var h=g[0];f=dn(h.index,{onSuccess:f,onFailure:1===h.sg?b.terminate:f,terminate:b.terminate},c,d)}return f}
function en(a,b,c,d){function e(){if(f[re.Ph])h();else{var w=$e(f,c,[]);var y=w[re.ah];if(null!=y)for(var x=0;x<y.length;x++)if(!kh(y[x])){h();return}var z=Ol(c.cb,String(f[re.rb]),Number(f[re.$f]),w[re.Qh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var E=cb()-C;Vm(c.id,Re[a],"5",E);Pl(c.cb,z,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var E=cb()-C;Vm(c.id,Re[a],"6",E);Pl(c.cb,z,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Vm(c.id,f,"1");var D=function(){var E=cb()-C;Vm(c.id,f,"7",E);Pl(c.cb,z,"exception",E);B||(B=!0,h())};var C=cb();try{Ye(w,c)}catch(E){D(E)}}}var f=Re[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Re(f))return null;var m=Ze(f[re.ag],c,[]);if(m&&m.length){var p=m[0],q=dn(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.sg?l:q}if(f[re.Vf]||f[re.Sh]){var r=f[re.Vf]?Se:
c.gj,u=g,t=h;if(!r[a]){e=fb(e);var v=fn(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](u,t)}}return e}function fn(a,b,c){var d=[],e=[];b[a]=gn(d,e,c);return{onSuccess:function(){b[a]=hn;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=jn;for(var f=0;f<e.length;f++)e[f]()}}}function gn(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hn(a){a()}function jn(a,b){b()};var mn=function(a,b){for(var c=[],d=0;d<Re.length;d++)if(a[d]){var e=Re[d];var f=Rl(b.cb);try{var g=dn(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Te[p];l.call(h,{Qg:m,Gg:q?q.priorityOverride||0:0,Nb:g})}else kn(d,b),f()}catch(t){f()}}var r=b.cb;r.R=!0;r.s>=r.B&&Ql(r);c.sort(ln);for(var u=0;u<c.length;u++)c[u].Nb();
return 0<c.length};function ln(a,b){var c,d=b.Gg,e=a.Gg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Qg,h=b.Qg;f=g>h?1:g<h?-1:0}return f}function kn(a,b){if(!Pm)return;var c=function(d){var e=b.Re(Re[d])?"3":"4",f=Ze(Re[d][re.Zf],b,[]);f&&f.length&&c(f[0].index);Vm(b.id,Re[d],e);var g=Ze(Re[d][re.ag],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var nn=!1,tn=function(a){var b=cb(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(nn)return!1;nn=!0;}var g=Cl(c),h=!1;if(!g.active){if("gtm.js"!==d)return!1;h=!0;g=Cl(Number.MAX_SAFE_INTEGER)}
Um(c,d);var l=a.eventCallback,m=a.eventTimeout,p=l;var q={id:c,name:d,Re:Al(g.isAllowed),gj:[],Dg:function(){Kg(6)},kg:on(c),cb:new Nl(p,m)};q.jg=pn();
qn(c,q.cb);var r=jf(q);h&&(r=rn(r));var u=mn(r,q);"gtm.js"!==d&&"gtm.sync"!==d||cm(of.N);switch(d){case "gtm.init":u&&Kg(20)}return sn(r,u)};function on(a){return function(b){Pm&&(Jc(b)||cn(a,"input",b))}}
function qn(a,b){Wi(a,"event",1);Wi(a,"ecommerce",1);Wi(a,"gtm");Wi(a,"eventModel");}function pn(){var a={};a.event=Vi("event",1);a.ecommerce=Vi("ecommerce",1);a.gtm=Vi("gtm");a.eventModel=Vi("eventModel");return a}function rn(a){for(var b=[],c=0;c<a.length;c++)a[c]&&zi[String(Re[c][re.rb])]&&(b[c]=!0);return b}
function sn(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Re[c]&&!Ai[String(Re[c][re.rb])])return!0;return!1}function un(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Nh(""+c+b).href}}function vn(a,b){return wn()?un(a,b):void 0}function wn(){var a=!1;return a};var xn=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},yn=function(a){var b=new xn;b.eventModel=a;return b},zn=function(a,b){a.targetConfig=b;return a},An=function(a,b){a.containerConfig=b;return a},Bn=function(a,b){a.remoteConfig=b;return a},Cn=function(a,
b){a.globalConfig=b;return a},Dn=function(a,b){a.onSuccess=b;return a},En=function(a,b){a.setContainerTypeLoaded=b;return a},Fn=function(a,b){a.getContainerTypeLoaded=b;return a},Gn=function(a,b){a.onFailure=b;return a};
xn.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Hn=function(a){function b(d){for(var e=Object.keys(d),f=0;f<e.length;++f)c[e[f]]=1}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);return Object.keys(c)},In=function(a,b){function c(f){Fc(f)&&Ta(f,function(g,h){e=!0;d[g]=h})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var Jn;if(3===of.od.length)Jn="g";else{var Kn="G";Jn=Kn}
var Ln={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Jn,OPT:"o"},Mn=function(a){var b=of.N.split("-"),c=b[0].toUpperCase(),d=Ln[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===of.od.length){var g="w";f="2"+g}else f="";return f+d+of.od+e};function Nn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var On=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Pn=function(){return Ib("iPhone")&&!Ib("iPod")&&!Ib("iPad")};Ib("Opera");Ib("Trident")||Ib("MSIE");Ib("Edge");!Ib("Gecko")||-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")||Ib("Trident")||Ib("MSIE")||Ib("Edge");-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")&&Ib("Mobile");Ib("Macintosh");Ib("Windows");Ib("Linux")||Ib("CrOS");var Qn=pa.navigator||null;Qn&&(Qn.appVersion||"").indexOf("X11");Ib("Android");Pn();Ib("iPad");Ib("iPod");Pn()||Ib("iPad")||Ib("iPod");Fb.toLowerCase().indexOf("kaios");var Rn=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},Sn=function(a){var b=J;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Tn=function(){};var Un=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vn=function(a,b){this.s=a;this.g=null;this.F={};this.R=0;this.H=void 0===b?500:b;this.B=null};oa(Vn,Tn);
var Xn=function(a){return"function"===typeof a.s.__tcfapi||null!=Wn(a)};
Vn.prototype.addEventListener=function(a){var b={},c=Ub(function(){return a(b)}),d=0;-1!==this.H&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.H));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Un(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Yn(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Vn.prototype.removeEventListener=function(a){a&&a.listenerId&&Yn(this,"removeEventListener",null,a.listenerId)};
var $n=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Zn(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Qg(Mg)&&"CH"===a.publisherCC)?!0:m&&Zn(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Zn(a.purpose.legitimateInterests,b)&&Zn(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Zn=function(a,b){return!(!a||!a[b])},Yn=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Wn(a)){ao(a);var f=++a.R;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Wn=function(a){if(a.g)return a.g;a.g=Rn(a.s,"__tcfapiLocator");return a.g},
ao=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},On(a.s,a.B))};var bo=!0;bo=!1;var co={1:0,3:0,4:0,7:3,9:3,10:3},eo=Nn("",550),fo=Nn("",500);function go(){var a=xi.tcf||{};return xi.tcf=a}
var ho=function(a,b){this.B=a;this.g=b;this.s=cb();},io=function(a){},jo=function(a){},po=function(){var a=go(),b=new Vn(A,bo?3E3:-1),c=new ho(b,a);if((ko()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||Xn(b))){a.active=!0;a.Ic={};lo();var d=null;bo?d=A.setTimeout(function(){mo(a);no(a);d=null},fo):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)mo(a),no(a),io(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=oo(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in co)if(co.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Un(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:$n(m,"1",0):!1;g["1"]=l}else g[h]=$n(e,h,co[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Ic=f,no(a),io(c))}}),jo(c)}catch(e){d&&(clearTimeout(d),d=null),mo(a),no(a)}}};function mo(a){a.type="e";a.tcString="tcunavailable";bo&&(a.Ic=oo())}function lo(){var a={},b=(a.ad_storage="denied",a.wait_for_update=eo,a);ih(b)}
var ko=function(){var a=!1;a=!0;return a};function oo(){var a={},b;for(b in co)co.hasOwnProperty(b)&&(a[b]=!0);return a}function no(a){var b={},c=(b.ad_storage=a.Ic["1"]?"granted":"denied",b);qo();jh(c,0)}
var ro=function(){var a=go();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},qo=function(){var a=go();return a.active?a.tcString||"":""},so=function(){var a=go();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},to=function(a){if(!co.hasOwnProperty(String(a)))return!0;var b=go();return b.active&&b.Ic?!!b.Ic[String(a)]:!0};function uo(a){var b=String(A.location).split(/[?#]/)[0],c=of.dh||A._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function vo(a){function b(t){var v;xi.reported_gclid||(xi.reported_gclid={});v=xi.reported_gclid;var w;w=!g||ah()&&!kh(O.D)?l+(t?"gcu":"gcs"):l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(L,U){U&&(y.push(L+"="+encodeURIComponent(U)),x[L]=!0)},B="https://www.google.com";if(ah()){var D=kh(O.D);z("gcs",lh());t&&z("gcu","1");bh()&&z("gcd","G1"+gh(Zg));xi.dedupe_gclid||
(xi.dedupe_gclid=""+uj());z("rnd",xi.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&kh(O.D)){var C=wk("_gcl_aw");z("gclaw",C.join("."))}z("url",String(A.location).split(/[?#]/)[0]);z("dclid",wo(d,p));var E=!1;E=!0;D||!d&&!E||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",qo()),z("gdpr",so());"1"===dk(!1)._up&&z("gtm_up","1");z("gclid",wo(d,l));z("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",wo(d,q)),!x.gbraid&&ah()&&kh(O.D))){var H=wk("_gcl_gb");z("gclgb",H.join("."))}z("gtm",Mn(!e));g&&kh(O.D)&&(Fj(f||{}),z("auid",Bj[Cj(f.prefix)]||""));
a.pg&&z("did",a.pg);var Q=B+"/pagead/landing?"+y.join("&");oc(Q)}}var c=!!a.Ce,d=!!a.wa,e=a.W,f=void 0===a.ud?{}:a.ud,g=void 0===a.Ad?!0:a.Ad,h=Ck(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),u=ah();if(r||u)u?oh(function(){b();kh(O.D)||nh(function(t){return b(!0,t.fi)},O.D)},[O.D]):b()}function wo(a,b){var c=a&&!kh(O.D);return b&&c?"0":b}var xo=function(){this.g={}},yo=function(a,b,c){null!=c&&(a.g[b]=c)},zo=function(a){return Object.keys(a.g).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.g[b])}).join("&")},Bo=function(a,b,c,d){};var Do=!1,Eo=Number("200");function Fo(){if(!A.Promise)return!1;Ia(J.interestCohort)||Do||(Do=!0,Sn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return Ia(J.interestCohort)}
function Go(){var a=xi.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>cb()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([J.interestCohort().then(function(e){xi.floc={ts:cb(),floc:e};return e}),new Promise(function(e){A.setTimeout(function(){return e()},Eo)})]).catch(function(){})}catch(e){return}return d}
var bp=function(){if(!kh(O.D)||!ap&&!Sn("AyAn/mFtBYa4Wyk+GnNjBOd+4bBUeWbwyAOxMR+8EnXgn06S1FFiyBquja0zc/37lDGh1P547ivAAKXoCT+9YAgAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ21hbmFnZXIuY29tOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2MzE2NjM5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"))return!1;ap=!0;var a=J.featurePolicy;if(a&&Ia(a.features)&&-1!==a.features().indexOf("conversion-measurement"))return!0;return!1},cp=function(a){return!(void 0===a||null===a||0===(a+"").length)},dp=function(a,b){var c;if(2===b.Ba)return a("ord",Pa(1E11,1E13)),!0;if(3===b.Ba)return a("ord","1"),a("num",Pa(1E11,
1E13)),!0;if(4===b.Ba)return cp(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.Ba)c="1";else if(6===b.Ba)c=b.df;else return!1;cp(c)&&a("qty",c);cp(b.vd)&&a("cost",b.vd);cp(b.transactionId)&&a("ord",b.transactionId);return!0},hp=function(a,b,c){function d(I,T,ca){v.hasOwnProperty(I)||(T=String(T),t.push(";"+I+"="+(ca?T:ep(T))))}function e(I,T){T&&d(I,T)}function f(){if(cp(a.Bd)){var I=a.Bd||"";q||m||!a.wa||(I=Oh(I));d("~oref",I)}var T=l+t.join("")+"?";
h?ec(T,a.onSuccess):fc(T,a.onSuccess,a.onFailure);L&&fc("https://"+g+".fls.doubleclick.net/activityi;register_conversion=1"+t.join("")+"?");}var g=a.Ie,h=a.hf,l=a.protocol,m=a.Ne,p=[],q=kh(O.D);l+=h?"//"+g+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var r=";",u=!1;u=!0;
kh(O.D)||m||!a.wa&&!u||(l="https://ade.googlesyndication.com/ddm/activity",r="/",h=!1);var t=[r,"src="+ep(g),";type="+ep(a.Me),";cat="+ep(a.kc)],v=a.li||{};Ta(v,function(I,T){t.push(";"+ep(I)+"="+ep(T+""))});if(dp(d,a)){cp(a.Jd)&&d("u",a.Jd);cp(a.Id)&&d("tran",a.Id);d("gtm",Mn());ah()&&!m&&(d("gcs",lh()),c&&d("gcu","1"));e("gdpr_consent",qo()),e("gdpr",so());"1"===dk(!1)._up&&d("gtm_up","1");!1===a.Yh&&d("npa","1");
if(a.Ee){var w=void 0===a.wa?!0:!!a.wa,y=Sk("dc",a.ja,w),x=!1;y&&y.length&&(d("gcldc",y.join(".")),x=!0);var z=!0;z=h;if(z){var B="_gcl"!==Ak(a.ja);if(fp&&!x&&Xk(a.ja)){var D=Sk("gb",a.ja,w);D.length&&d("gclgb",D.join("."));if(!B||!gp){var C=Vk(w);C&&d("gacgb",C)}}else{var E=Sk("aw",a.ja,w);E&&E.length&&(d("gclaw",E.join(".")),Kg(59));var H=Uk(w);H&&(B?(Kg(60),gp||d("gac",
H)):d("gac",H))}}Fj({prefix:a.ja,wb:a.ji,domain:a.ii,flags:a.xj});var Q=Bj[Cj(a.ja)];Q&&d("auiddc",Q)}cp(a.Ze)&&d("prd",a.Ze,!0);Ta(a.nf,function(I,T){d(I,T)});t.push(b||"");var L=bp();L&&t.push(";ps=1");var U=!1;if(U&&a.ma){var S=wi(a.ma,[]);S&&(S=S.then(function(I){cp(I.Fc)&&d("em",I.Fc,!0)}),p.push(S))}if(p.length)try{Promise.all(p).then(function(){f()});return}catch(I){}f()}else K(a.onFailure)},fp=!1;fp=!0;var gp=!1;var ep=encodeURIComponent,ap=!1,ip=function(a,b){!ah()||a.Ne?hp(a,b):oh(function(){hp(a,b);kh(O.D)||nh(function(){hp(a,b,!0)},O.D)},[O.D])};
var jp=function(a,b,c,d){function e(){var f={config:a,gtm:Mn()};c&&(Fj(d),f.auiddc=Bj[Cj(d.prefix)]);b&&(f.loadInsecure=b);void 0===A.__dc_ns_processor&&(A.__dc_ns_processor=[]);A.__dc_ns_processor.push(f);cc((b?"http":"https")+"://www.googletagmanager.com/dclk/ns/v1.js")}kh(O.D)?e():fh(e,O.D)},kp=function(a){var b=/^u([1-9]\d?|100)$/,c=a.getWithConfig(O.Bf)||{},d=Hn(a),e={},f={};if(Fc(c))for(var g in c)if(c.hasOwnProperty(g)&&b.test(g)){var h=c[g];n(h)&&(e[g]=h)}for(var l=0;l<d.length;l++){var m=
d[l];b.test(m)&&(e[m]=m)}for(var p in e)e.hasOwnProperty(p)&&(f[p]=a.getWithConfig(e[p]));return f},lp=function(a,b){function c(m,p,q){void 0!==q&&0!==(q+"").length&&e.push(m+p+":"+d(q+""))}var d=encodeURIComponent,e=[],f=a(O.aa)||[];if(Ka(f))for(var g=0;g<f.length;g++){var h=f[g],l=g+1;c("i",l,h.id);c("p",l,h.price);c("q",l,h.quantity);c("c",l,b?h[O.Xc]:a(O.Xc));c("l",l,b?h[O.mb]:a(O.mb));b&&c("a",l,h.accountId)}return e.join("|")},mp=function(a){var b=/^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
if(b){var c={standard:2,unique:3,per_session:4,transactions:5,items_sold:6,"":1}[(b[5]||"").toLowerCase()];if(c)return{containerId:"DC-"+b[1],W:b[3]?a:"",Wh:b[1],Vh:b[3]||"",kc:b[4]||"",Ba:c}}},op=function(a,b,c,d){var e=mp(a);if(e){var f=function(T){return d.getWithConfig(T)},g=!1!==f(O.Ja),h=f(O.Ia)||f(O.da),l=f(O.oa),m=f(O.Ka),p=f(O.Pa),q=f(O.uh),r=void 0!=f(O.T)&&!1!==f(O.T)&&(!d.isGtmEvent||!kh(O.D)),u=3===dl();var C={},E=f(O.th);if(Fc(E))for(var H in E)if(E.hasOwnProperty(H)){var Q=E[H];void 0!==Q&&null!==Q&&(C[H]=Q)}var L="";if(5===e.Ba||6===e.Ba)L=lp(f,d.isGtmEvent);var U=kp(d),S=!0===f(O.Od);if(cl()&&S){S=!1}var W=d.isGtmEvent?"":u?"http:":"https:",I={kc:e.kc,Ee:g,ii:l,ji:m,ja:h,vd:f(O.ia),Ba:e.Ba,li:C,Ie:e.Wh,Me:e.Vh,onFailure:d.onFailure,onSuccess:d.onSuccess,
Bd:d.isGtmEvent?f("oref"):Mh(Nh(A.location.href)),Ze:L,protocol:W,df:f(O.Nf),hf:S,sessionId:f(O.Ib),Id:d.isGtmEvent?f("tran"):void 0,transactionId:f(O.qb),Jd:d.isGtmEvent?f("u"):void 0,ma:d.isGtmEvent?f(O.za):void 0,nf:U,Yh:!1!==f(O.Ha),eventId:d.eventId,wa:r};ip(I)}else K(d.onFailure)},np=["aw","dc","gb"];var Dp=function(){var a=!0;to(7)&&to(9)&&to(10)||(a=!1);var b=!0;b=!1;b&&!Cp()&&(a=!1);return a},Cp=function(){var a=!0;to(3)&&to(4)||(a=!1);return a};var gq=!1;var hq=!1;function iq(){var a=xi;return a.gcq=a.gcq||new jq}
var kq=function(a,b,c){iq().register(a,b,c)},lq=function(a,b,c,d){iq().push("event",[b,a],c,d)},mq=function(a,b){iq().push("config",[a],b)},nq=function(a,b,c,d){iq().push("get",[a,b],c,d)},oq=function(a){return iq().getRemoteConfig(a)},pq={},qq=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.B=null;this.g=!1},rq=function(a,b,c,d,e){this.type=a;this.B=b;this.W=c||"";this.g=d;this.s=e},jq=function(){this.s={};this.B={};this.g=[];this.F={AW:!1,
UA:!1};this.enableDeferrableCommandAfterConfig=gq},sq=function(a,b){var c=$k(b);return a.s[c.containerId]=a.s[c.containerId]||new qq},tq=function(a,b,c){if(b){var d=$k(b);if(d&&1===sq(a,b).status){sq(a,b).status=2;var e={};Pm&&(e.timeoutId=A.setTimeout(function(){Kg(38);vm()},3E3));a.push("require",[e],d.containerId);pq[d.containerId]=cb();if(cl()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=vn(c,g)||h;cc(l)}}}},uq=function(a,b,c,d){if(d.W){var e=sq(a,d.W),f=e.B;if(f){var g=M(c),h=M(e.targetConfig[d.W]),l=M(e.containerConfig),m=M(e.remoteConfig),p=M(a.B),q=Qi("gtm.uniqueEventId"),r=$k(d.W).prefix,u=fb(function(){var v=
g[O.Fb];v&&K(v)}),t=Fn(En(Gn(Dn(Cn(Bn(An(zn(yn(g),h),l),m),p),function(){bn(q,r,"2");hq&&u()}),function(){bn(q,r,"3");hq&&u()}),function(v,w){a.F[v]=w}),function(v){return a.F[v]});try{bn(q,r,"1");f(d.W,b,d.B,t)}catch(v){bn(q,r,"4");}}}};
jq.prototype.register=function(a,b,c){var d=sq(this,a);if(3!==d.status){d.B=b;d.status=3;if(c){M(d.remoteConfig,c);d.remoteConfig=c}var e=$k(a),f=pq[e.containerId];if(void 0!==f){var g=xi[e.containerId].bootstrap,h=e.prefix.toUpperCase();xi[e.containerId]._spx&&(h=h.toLowerCase());var l=Qi("gtm.uniqueEventId"),m=h,p=cb()-g;if(Pm&&!Am[l]){l!==wm&&(rm(),wm=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Em=Em?Em+","+q:"&cl="+q}delete pq[e.containerId]}this.flush()}};jq.prototype.push=function(a,b,c,d){var e=Math.floor(cb()/1E3);tq(this,c,b[0][O.ra]||this.B[O.ra]);gq&&c&&sq(this,c).g&&(d=!1);this.g.push(new rq(a,e,c,b,d));d||this.flush()};jq.prototype.insert=function(a,b,c){var d=Math.floor(cb()/1E3);0<this.g.length?this.g.splice(1,0,new rq(a,d,c,b,!1)):this.g.push(new rq(a,d,c,b,!1))};
jq.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)gq?!f.W||sq(this,f.W).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f)),this.g.shift();else{switch(f.type){case "require":if(3!==sq(this,f.W).status&&!a){gq&&this.g.push.apply(this.g,c);return}Pm&&A.clearTimeout(f.g[0].timeoutId);break;case "set":Ta(f.g[0],function(r,u){M(kb(r,u),b.B)});break;case "config":e.Ma={};Ta(f.g[0],function(r){return function(u,t){M(kb(u,t),r.Ma)}}(e));var g=!!e.Ma[O.fd];
delete e.Ma[O.fd];var h=sq(this,f.W),l=$k(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||uq(this,O.Ga,e.Ma,f);h.g=!0;delete e.Ma[O.hc];m?M(e.Ma,h.containerConfig):M(e.Ma,h.targetConfig[f.W]);gq&&(d=!0);break;case "event":e.Oc={};Ta(f.g[0],function(r){return function(u,t){M(kb(u,t),r.Oc)}}(e));uq(this,f.g[1],e.Oc,f);break;case "get":var p={},q=(p[O.Za]=f.g[0],p[O.Ya]=f.g[1],p);uq(this,O.Oa,q,f)}this.g.shift();vq(this,f)}e={Ma:e.Ma,Oc:e.Oc}}gq&&(this.g.push.apply(this.g,
c),d&&this.flush())};var vq=function(a,b){if("require"!==b.type)if(b.W)for(var c=a.getCommandListeners(b.W)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}};jq.prototype.getRemoteConfig=function(a){return sq(this,a).remoteConfig};jq.prototype.getCommandListeners=function(a){return sq(this,a).s};function wq(a,b){var c=this;};function xq(a,b,c){};function yq(a,b,c,d){};function zq(a){};var Aq=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":pc(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||pc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||pc(a,"href")||a.src||a.code||a.codebase||"";return d},Bq=function(a){xi.hasOwnProperty("autoEventsSettings")||(xi.autoEventsSettings={});var b=xi.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},Cq=function(a,b,c){Bq(a)[b]=c},Dq=function(a,b,c,d){var e=Bq(a),f=db(e,b,d);e[b]=c(f)},Eq=function(a,b,c){var d=Bq(a);return db(d,b,c)};var Fq=["input","select","textarea"],Gq=["button","hidden","image","reset","submit"],Hq=function(a){var b=a.tagName.toLowerCase();return!Na(Fq,function(c){return c===b})||"input"===b&&Na(Gq,function(c){return c===a.type.toLowerCase()})?!1:!0},Iq=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):nc(a,["form"],100)},Jq=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Hq(g)){if(g.dataset[c]===d)return f;f++}}return 0};
function Nq(a){};var Oq={},Pq=[],Qq={},Rq=0,Sq=0;
function Zq(a,b){}
function gr(a,b){}
;function hr(){};var ir={},jr=[];
var qr=function(a,b){};

function tr(a,b){};var ur=/^\s*$/,vr,wr=!1;
function Hr(a,b){}function Ir(a,b,c){};var Jr=!!A.MutationObserver,Kr=void 0,Lr=function(a){if(!Kr){var b=function(){var c=J.body;if(c)if(Jr)(new MutationObserver(function(){for(var e=0;e<Kr.length;e++)K(Kr[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,K(function(){d=!1;for(var e=0;e<Kr.length;e++)K(Kr[e])}))})}};Kr=[];J.body?b():K(b)}Kr.push(a)};var Nr=["www.youtube.com","www.youtube-nocookie.com"],Or,Pr=!1,Qr=0;
function $r(a,b){}function as(a,b){return!0};function bs(a,b,c){};function cs(a,b){var c;return c};function ds(a){};function es(a){};var fs=!1,gs=[];function hs(){if(!fs){fs=!0;for(var a=0;a<gs.length;a++)K(gs[a])}}var is=function(a){fs?K(a):gs.push(a)};function js(a){N(G(this),["listener:!Fn"],arguments);sg(this,"process_dom_events","window","load");is(Hc(a))};function ks(a){var b;return b};function ls(a,b){var c;var d=!1;var e=Gc(c,this.g,d);void 0===e&&void 0!==c&&Kg(45);return e};function ms(a){var b;return b};function ns(a,b){var c=null,d=!1;N(G(this),["functionPath:!string","arrayPath:!string"],arguments);sg(this,"access_globals","readwrite",a);sg(this,"access_globals","readwrite",b);var e=[A,J],f=a.split("."),g=jb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ia(l))return null;
if(l)return Gc(l,this.g,d);var m;l=function(){if(!Ia(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),q=jb(p,e),r=p[p.length-1];if(void 0===q)throw Error("Path "+p+" does not exist.");m=q[r];void 0===m&&(m=[],q[r]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Gc(c,this.g,d)};function os(a){var b;N(G(this),["path:!string"],arguments);sg(this,"access_globals","readwrite",a);var c=a.split("."),d=jb(c,[A,J]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ia(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Gc(b,this.g,g)};function ps(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var qs=new Qa;function rs(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=qs.get(e);f||(f=new RegExp(b,d),qs.set(e,f));return f.test(a)}catch(g){return!1}}
function ss(a,b){function c(g){var h=Nh(g),l=Lh(h,"protocol"),m=Lh(h,"host",!0),p=Lh(h,"port"),q=Lh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ts(a){return us(a)?1:0}
function us(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ka(c)){for(var d=0;d<c.length;d++){var e=M(a,{});M({arg1:c[d],any_of:void 0},e);if(ts(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return ps(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ma(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return rs(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ss(b,c)}return!1};function vs(a){return!1}var ws;function xs(a){var b=!1;return b};var ys=function(a){var b;return b};function zs(a,b){b=void 0===b?!0:b;var c;return c};function As(a){var b=null;return b};function Bs(a,b){var c;return c};function Cs(a,b){var c;return c};function Ds(a){var b="";return b};function Es(a,b){var c;return c};function Fs(a){var b="";return b};function Gs(){sg(this,"get_user_agent");return A.navigator.userAgent};function Hs(a,b){};var Is={};function Js(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cc(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)K(g[h]);g.push=function(l){K(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)K(g[h]);e[f]=null},b)):cc(a,c,d,b)}
function Ks(a,b,c,d){N(G(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);sg(this,"inject_script",a);var e=this.g;Js(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},Is,d);}var Ls=Object.freeze({dl:1,id:1}),Ms={};
function Ns(a,b,c,d){};function Os(a){var b=!0;return b};var Ps=function(){return!1},Qs={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Rs=["textContent","value","tagName","children","childElementCount"];
function Ss(a){var b;return b};function Ts(){};function Us(a,b){var c;return c};function Vs(a){var b=void 0;return b};function Ws(a,b){var c=!1;return c};function Xs(){var a="";return a};function Ys(){var a="";return a};var Zs=["set","get","config","event"];
function $s(a,b,c){};function at(){};function bt(a,b,c,d){d=void 0===d?!1:d;};function ct(a,b,c){};function dt(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function et(a){N(G(this),["consentSettings:!DustMap"],arguments);for(var b=a.sb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==O.Ld&&sg(this,"access_consent",e,"write")}ih(Hc(a))};function ft(a,b,c){N(G(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);sg(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=jb(e,[A,J]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Hc(b,this.g,d),!0;return!1};function gt(a,b,c){}
;var ht=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function it(a,b,c,d){var e=this;};function jt(a,b,c){}
;var kt={},lt={};kt.getItem=function(a){var b=null;return b};
kt.setItem=function(a,b){};
kt.removeItem=function(a){};kt.clear=function(){};var mt=function(a){var b;return b};function nt(a){N(G(this),["consentSettings:!DustMap"],arguments);var b=Hc(a),c;for(c in b)b.hasOwnProperty(c)&&sg(this,"access_consent",c,"write");jh(b)};var oe=function(){var a=new Fg;cl()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",Hs),a.add("injectScript",Ks));var b=ct;a.add("Math",lg());a.add("TestHelper",Ig());a.add("addEventCallback",zq);a.add("aliasInWindow",as);a.add("assertApi",hg);a.add("assertThat",ig);a.add("callInWindow",
cs);a.add("callLater",ds);a.add("copyFromDataLayer",ls);a.add("copyFromWindow",ms);a.add("createArgumentsQueue",ns);a.add("createQueue",os);a.add("decodeUri",mg);a.add("decodeUriComponent",ng);a.add("encodeUri",og);a.add("encodeUriComponent",pg);a.add("fail",qg);a.add("fromBase64",ys,!("atob"in A));a.add("generateRandom",rg);a.add("getContainerVersion",tg);a.add("getCookieValues",zs);a.add("getQueryParameters",Bs);a.add("getReferrerQueryParameters",Cs);a.add("getReferrerUrl",Ds);a.add("getTimestamp",
ug);a.add("getTimestampMillis",ug);a.add("getType",vg);a.add("getUrl",Fs);a.add("localStorage",Qs,!Ps());a.add("logToConsole",Ts);a.add("makeInteger",xg);a.add("makeNumber",yg);a.add("makeString",zg);a.add("makeTableMap",Ag);a.add("mock",Cg);a.add("parseUrl",Vs);a.add("queryPermission",Ws);a.add("readCharacterSet",Xs);a.add("readTitle",Ys);a.add("sendPixel",b);a.add("setCookie",dt);a.add("setInWindow",ft);a.add("sha256",it);a.add("templateStorage",kt);a.add("toBase64",mt,!("btoa"in A));a.add("JSON",
wg(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",et);a.add("updateConsentState",nt);
a.add("isConsentGranted",Os);a.add("addConsentListener",wq);
Hg(a,"callOnWindowLoad",js);cl()?Hg(a,"internal.injectScript",
Ha):Hg(a,"internal.injectScript",Ns);Hg(a,"internal.locateUserData",Ss);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.zc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?a.s[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var ot=function(){return!1},pt=function(){var a={};return function(b,c,d){}};var ie,Bf;
function qt(){var a=data.runtime||[],b=data.runtime_lines;ie=new ge;rt();Ne=function(e,f,g){st(f);var h=new rb;Ta(f,function(u,t){var v=Gc(t);void 0===v&&void 0!==t&&Kg(44);h.set(u,v)});ie.g.g.H=ff();var l={ai:Cf(e),eventId:void 0!==g?g.id:void 0,nc:void 0!==g?function(u){return g.cb.nc(u)}:void 0,zc:function(){return e},log:function(){}};if(ot()){var m=pt(),
p=void 0,q=void 0;l.Ea={oc:{},Ob:function(u,t,v){1===t&&(p=u);7===t&&(q=v);m(u,t,v)},Ue:Bg()};l.log=function(u,t){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:u,source:q,message:v})}}}var r=ne(l,[e,h]);ie.g.g.H=void 0;r instanceof ra&&"return"===r.g&&(r=r.s);return Hc(r)};pe();for(var c=0;c<a.length;c++){var d=a[c];if(!Ka(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&cf(d,b[c]);ie.Nb(d)}}
function st(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){K(b)});Ia(c)&&(a.gtmOnFailure=function(){K(c)})}function rt(){var a=ie;xi.SANDBOXED_JS_SEMAPHORE=xi.SANDBOXED_JS_SEMAPHORE||0;qe(a,function(b,c,d){xi.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{xi.SANDBOXED_JS_SEMAPHORE--}})}function tt(a){void 0!==a&&Ta(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ji[e]=Ji[e]||[];Ji[e].push(b)}})};var ut="HA GF G UA AW DC".split(" "),vt=!1;var wt=!1,xt={},yt=!1;function zt(a,b){var c={event:a};b&&(c.eventModel=M(b),b[O.Fb]&&(c.eventCallback=b[O.Fb]),b[O.Yc]&&(c.eventTimeout=b[O.Yc]));return c}function At(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Ki()});return a["gtm.uniqueEventId"]}
function Bt(){return wt}
var Et={config:function(a){var b,c;c=At(a);void 0===c&&(c=Ki());return b},consent:function(a){function b(){Bt()&&M(a[2],{subcommand:a[1]})}if(3===a.length){Kg(39);var c=Ki(),d=a[1];"default"===d?(b(),ih(a[2])):"update"===d&&(b(),jh(a[2],c))}},event:function(a){var b=a[1];if(!(2>
a.length)&&n(b)){var c;if(2<a.length){if(!Fc(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=zt(b,c),e=void 0;e=At(a),d["gtm.uniqueEventId"]=e;void 0===e&&Ki();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){yt=!0;Bt();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=At(a);return b}},policy:function(a){if(3===
a.length){var b=a[1],c=a[2],d=Bf.s;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Fc(a[1])?b=M(a[1]):3==a.length&&n(a[1])&&(b={},Fc(a[2])||Ka(a[2])?b[a[1]]=M(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Ft={policy:!0};var Gt=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},It=function(a){var b=Ht(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Zt=function(a){if(Yt(a))return a;this.g=a};Zt.prototype.zi=function(){return this.g};var Yt=function(a){return!a||"object"!==Dc(a)||Fc(a)?!1:"getUntrustedUpdateValue"in a};Zt.prototype.getUntrustedUpdateValue=Zt.prototype.zi;var $t=[],au=!1,bu=!1,cu=!1,du=function(a){return A["dataLayer"].push(a)},eu=function(a){var b=xi["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function fu(a){var b=a._clear;Ta(a,function(d,e){"_clear"!==d&&(b&&Ti(d,void 0),Ti(d,e))});Fi||(Fi=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ki(),a["gtm.uniqueEventId"]=c,Ti("gtm.uniqueEventId",c));return tn(a)}function gu(){var a=$t[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Va(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function hu(){for(var a=!1;!cu&&0<$t.length;){var b=!1;b=!0;if(b&&!bu&&gu()){var c={};$t.unshift((c.event=
"gtm.init",c));bu=!0}var d=!1;d=!0;if(d&&!au&&gu()){var e={};$t.unshift((e.event="gtm.init_consent",e));au=!0}cu=!0;delete Ni.eventModel;Pi();var f=$t.shift();if(null!=f){var g=Yt(f);
if(g){var h=f;f=Yt(h)?h.getUntrustedUpdateValue():void 0;Ui()}try{if(Ia(f))try{f.call(Ri)}catch(v){}else if(Ka(f)){var l=f;if(n(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Qi(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Va(f)){a:{var u=f;if(u.length&&n(u[0])){var t=Et[u[0]];if(t&&(!g||!Ft[u[0]])){f=t(u);break a}}f=void 0}if(!f){cu=!1;continue}}a=fu(f)||a}}finally{g&&Pi(!0)}}cu=!1}
return!a}function iu(){var b=hu();try{Gt(A["dataLayer"],of.N)}catch(c){}return b}
var ku=function(){var a=Zb("dataLayer",[]),b=Zb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ll(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});is(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<xi.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Zt(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);$t.push.apply($t,e);if(300<
this.length)for(Kg(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return hu()&&h};var d=a.slice(0);$t.push.apply($t,d);if(ju()){K(iu)}},ju=function(){var a=!0;return a};var lu={};lu.jd=new String("undefined");
var mu=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===lu.jd?b:a[d]);return c.join("")}};mu.prototype.toString=function(){return this.g("undefined")};mu.prototype.valueOf=mu.prototype.toString;lu.Uh=mu;lu.te={};lu.ki=function(a){return new mu(a)};var nu={};lu.Yi=function(a,b){var c=Ki();nu[c]=[a,b];return c};lu.ng=function(a){var b=a?0:1;return function(c){var d=nu[c];if(d&&"function"===typeof d[b])d[b]();nu[c]=void 0}};lu.Di=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};lu.Ui=function(a){if(a===lu.jd)return a;var b=Ki();lu.te[b]=a;return'google_tag_manager["'+of.N+'"].macro('+b+")"};lu.Oi=function(a,b,c){a instanceof lu.Uh&&(a=a.g(lu.Yi(b,c)),b=Ha);return{Ai:a,onSuccess:b}};var yu=A.clearTimeout,zu=A.setTimeout,R=function(a,b,c){if(cl()){b&&K(b)}else return cc(a,b,c)},Au=function(){return new Date},Bu=function(){return A.location.href},Cu=function(a){return Lh(Nh(a),"fragment")},Du=function(a){return Mh(Nh(a))},Eu=function(a,b){return Qi(a,b||2)},Fu=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=du(a)):d=du(a);return d},Gu=function(a,b){A[a]=b},X=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},Hu=function(a,b,c){return ij(a,b,void 0===c?!0:!!c)},Iu=function(a,b,c){return 0===rj(a,b,c)},Ju=function(a,b){if(cl()){b&&K(b)}else ec(a,b)},Ku=function(a){return!!Eq(a,"init",!1)},Lu=function(a){Cq(a,"init",!0)},Mu=function(a){var b=Di+"?id="+encodeURIComponent(a)+"&l=dataLayer";R(el("https://","http://",b))},Nu=function(a,b,c){Pm&&(Jc(a)||cn(c,b,a))};var Ou=lu.Oi;var kv=encodeURI,Y=encodeURIComponent,lv=fc;var mv=function(a,b){if(!a)return!1;var c=Lh(Nh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var nv=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Uw(){return A.gaGlobal=A.gaGlobal||{}}var Vw=function(){var a=Uw();a.hid=a.hid||Pa();return a.hid},Ww=function(a,b){var c=Uw();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var wx=function(){if(Ia(A.__uspapi)){var a="";try{A.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Rx=window,Sx=document,Tx=function(a){var b=Rx._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Rx["ga-disable-"+a])return!0;try{var c=Rx.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ej("AMP_TOKEN",String(Sx.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Sx.getElementById("__gaOptOutExtension")?!0:!1};var Ux={};function Xx(a){delete a.eventModel[O.hc];Zx(a.eventModel)}
var Zx=function(a){Ta(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[O.Ra]||{};Ta(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var by=function(a,b,c){lq(b,c,a)},cy=function(a,b,c){lq(b,c,a,!0)},gy=function(a,b){};
function dy(a,b){}var Z={h:{}};
Z.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.m="gaawc";Z.__gaawc.o=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=nv(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(O.Ra)||b.vtp_userProperties){var e=d[O.Ra]||{};M(nv(b.vtp_userProperties,"name","value"),e);d[O.Ra]=e}b.vtp_enableSendToServerContainer&&b.vtp_serverContainerUrl&&(d[O.ra]=b.vtp_serverContainerUrl,
d[O.Zb]=!0);var f=b.vtp_userDataVariable;f&&(d[O.za]=f);a(d,O.Rf,function(g){return Xa(g)});a(d,O.Tf,function(g){return Number(g)});d.send_page_view=b.vtp_sendPageView;mq(d,c);K(b.vtp_gtmOnSuccess)})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.m="jsm";Z.__jsm.o=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");var d=c&&c.e&&c.e(b);Nu(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.h.flc=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;ip(c,d)}var b=!1;(function(c){Z.__flc=c;Z.__flc.m="flc";Z.__flc.o=!0;Z.__flc.priorityOverride=0})(function(c){var d=!c.hasOwnProperty("vtp_enableConversionLinker")||!!c.vtp_enableConversionLinker,e=nv(c.vtp_customVariable||[],"key",
"value")||{};var p={kc:c.vtp_activityTag,Ee:d,ja:c.vtp_conversionCookiePrefix||void 0,vd:void 0,Ba:{UNIQUE:3,SESSION:4}[c.vtp_ordinalType]||2,Ie:c.vtp_advertiserId,Me:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,Bd:c.vtp_useImageTag?void 0:c.vtp_url,protocol:"",df:void 0,
hf:!c.vtp_useImageTag,sessionId:c.vtp_sessionId,Id:c.vtp_transactionVariable,transactionId:void 0,Jd:c.vtp_userVariable,ma:c.vtp_userDataVariable,nf:e},q=!1;var r=!(kh(O.D)||q)&&void 0!=Eu(O.T)&&!1!==Eu(O.T);p.wa=r;if(c.vtp_enableAttribution){var u=c.vtp_attributionFields||[];if(u.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(p,X("google_attr").build([nv(u,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(p)})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.o=!0;Z.__e.priorityOverride=0})(function(a){var b=String(Xi(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.m="f";Z.__f.o=!0;Z.__f.priorityOverride=0})(function(a){var b=Eu("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Lh(Nh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Du(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Aq(c,"gtm.click");Fu(d)}}(function(b){Z.__cl=b;Z.__cl.m="cl";Z.__cl.o=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ku("cl")){var c=X("document");gc(c,"click",a,!0);Lu("cl")}K(b.vtp_gtmOnSuccess)})}();
Z.h.j=["google"],function(){(function(a){Z.__j=a;Z.__j.m="j";Z.__j.o=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Nu(c,"j",a.vtp_gtmEventId);return c})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.m="k";Z.__k.o=!0;Z.__k.priorityOverride=0})(function(a){return Hu(a.vtp_name,Eu("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.fls=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;ip(c,d)}var b=!1;b=!0;(function(c){Z.__fls=c;Z.__fls.m="fls";Z.__fls.o=!0;Z.__fls.priorityOverride=0})(function(c){var d,e=[];if(c.vtp_enableProductReporting){var f=
function(B){B=B||[];for(var D=[],C=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],E=0;E<B.length;E++)for(var H=0;H<C.length;H++){var Q=C[H],L=B[E][Q[1]];void 0!==L&&D.push(Q[0]+(E+1)+":"+Y(L))}return D.join("|")};switch(c.vtp_dataSource){case "DATA_LAYER":e=Eu("ecommerce.purchase.products");d=f(e);break;case "JSON":e=c.vtp_productData;d=f(e);break;case "STRING":for(var g=(c.vtp_productData||"").split("|"),h=0;h<g.length;h++){var l=g[h].split(":");l[1]=
l[1]&&Y(l[1])||"";g[h]=l.join(":");b&&function(B){var D={i:"id",p:"price",q:"quantity",c:"country",l:"language",a:"accountId"},C=B[0][0],E=Number(B[0].slice(1))-1,H=e[E]||{};D.hasOwnProperty(C)&&(H[D[C]]=B[1]);e[E]=H}(l);}d=g.join("|")}}var m=!c.hasOwnProperty("vtp_enableConversionLinker")||!!c.vtp_enableConversionLinker,
p=nv(c.vtp_customVariable||[],"key","value")||{};if(b){var q={},r=(q[O.T]=Eu(O.T),q[O.Od]=!c.vtp_useImageTag,q[O.aa]=e,q[O.Ia]=c.vtp_conversionCookiePrefix||void 0,q[O.Ja]=m,q[O.Nf]=c.vtp_quantity,q[O.qb]=c.vtp_orderId,q[O.ia]=c.vtp_revenue,q.oref=c.vtp_useImageTag?void 0:c.vtp_url,q.tran=c.vtp_transactionVariable,q.u=c.vtp_userVariable,q[O.za]=c.vtp_userDataVariable,q),u;for(u in p)p.hasOwnProperty(u)&&(r[u]=p[u]);var t="DC-"+c.vtp_advertiserId+
"/"+c.vtp_groupTag+"/"+(c.vtp_activityTag+"+"+("ITEM_SOLD"===c.vtp_countingMethod?"items_sold":"transactions")),v=Gn(Dn(yn(r),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);v.isGtmEvent=!0;op(t,"",Date.now(),v);return}var w={kc:c.vtp_activityTag,Ee:m,ja:c.vtp_conversionCookiePrefix||void 0,vd:c.vtp_revenue,Ba:"ITEM_SOLD"===c.vtp_countingMethod?6:5,Ie:c.vtp_advertiserId,Me:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,
Bd:c.vtp_useImageTag?void 0:c.vtp_url,Ze:d,protocol:"",df:c.vtp_quantity,hf:!c.vtp_useImageTag,Id:c.vtp_transactionVariable,transactionId:c.vtp_orderId,Jd:c.vtp_userVariable,ma:c.vtp_userDataVariable,nf:p},y=!1;var x=!(kh(O.D)||y)&&void 0!=Eu(O.T)&&!1!==Eu(O.T);w.wa=x;if(c.vtp_enableAttribution){var z=c.vtp_attributionFields||[];if(z.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(w,X("google_attr").build([nv(z,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(w)})}();
Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid "+b+" request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.m="access_globals";Z.__access_globals.o=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!n(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Ma(e,r))return}else if("write"===q){if(-1<Ma(f,r))return}else if("readwrite"===q){if(-1<Ma(f,r)&&-1<Ma(e,r))return}else if("execute"===q){if(-1<Ma(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},V:a}})}();Z.h.r=["google"],function(){(function(a){Z.__r=a;Z.__r.m="r";Z.__r.o=!0;Z.__r.priorityOverride=0})(function(a){return Pa(a.vtp_min,a.vtp_max)})}();
Z.h.t=["google"],function(){(function(a){Z.__t=a;Z.__t.m="t";Z.__t.o=!0;Z.__t.priorityOverride=0})(function(){return Au().getTime()})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.m="u";Z.__u.o=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Eu("gtm.url",1))||Bu();var d=b[a("vtp_component")];if(!d||"URL"==d)return Du(String(c));var e=Nh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ka(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=Lh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Lh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.o=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Eu(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Nu(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.tl=["google"],function(){function a(b){return function(){if(b.Te&&b.Ve>=b.Te)b.Qe&&X("self").clearInterval(b.Qe);else{b.Ve++;var c=Au().getTime();Fu({event:b.M,"gtm.timerId":b.Qe,"gtm.timerEventNumber":b.Ve,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Te,"gtm.timerStartTime":b.Og,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Og,"gtm.triggers":b.lj})}}}(function(b){Z.__tl=b;Z.__tl.m="tl";Z.__tl.o=!0;Z.__tl.priorityOverride=0})(function(b){K(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{M:b.vtp_eventName,Ve:0,interval:Number(b.vtp_interval),Te:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),lj:String(b.vtp_uniqueTriggerId||"0"),Og:Au().getTime()};c.Qe=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.h.ua=["google"],function(){function a(t){return kh(t)}function b(t,v,w){var y=!1;if(ah()&&!y&&!f[t]){var x=!kh(O.I),z=function(){var B=Xl(),D="gtm"+Ki(),C=q(v);C["&gtm"]=Mn(!0);var E={name:D};p(C,E,!0);var H=void 0,Q=E._useUp;B(function(){var L=B.getByName(w);L&&(H=L.get("clientId"))});
B("create",t,E);x&&kh(O.I)&&(x=!1,B(function(){var L=B.getByName(D);!L||L.get("clientId")===H&&Q||(C["&gcs"]=lh(),C["&gcu"]="1",L.set(C),L.send("pageview"))}));B(function(){B.remove(D)})};fh(z,O.I);fh(z,O.D);f[t]=!0}}var c=!1;var d,e={},f={},g={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},l={urlPassthrough:!0};var p=function(t,v,w){var y=0;if(t)for(var x in t)if(!l[x]&&
t.hasOwnProperty(x)&&(w&&g[x]||!w&&void 0===g[x])){var z=h[x]?Xa(t[x]):t[x];"anonymizeIp"!=x||z||(z=void 0);v[x]=z;y++}return y},q=function(t){var v={};t.vtp_gaSettings&&M(nv(t.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),v);M(nv(t.vtp_fieldsToSet,"fieldName","value"),v);Xa(v.urlPassthrough)&&(v._useUp=!0);t.vtp_transportUrl&&(v._x_19=t.vtp_transportUrl);if(!c){kh(O.I)||(v.storage="none");kh(O.D)||(v.allowAdFeatures=!1,v.storeGac=!1);Dp()||(v.allowAdFeatures=!1);Cp()||(v.allowAdPersonalizationSignals=!1);
if(Xa(v.urlPassthrough)){var w=!1;ah()&&!w&&(v._cs=a)}}return v},r=function(t,v){},
u=function(t){function v(Ca,ka){void 0!==t[ka]&&L("set",Ca,t[ka])}var w={},y={},x={},z={};if(t.vtp_gaSettings){var B=t.vtp_gaSettings;M(nv(B.vtp_contentGroup,"index","group"),y);M(nv(B.vtp_dimension,"index","dimension"),x);M(nv(B.vtp_metric,"index","metric"),z);var D=M(B);D.vtp_fieldsToSet=void 0;D.vtp_contentGroup=void 0;D.vtp_dimension=void 0;D.vtp_metric=void 0;t=M(t,D)}M(nv(t.vtp_contentGroup,"index","group"),y);M(nv(t.vtp_dimension,"index","dimension"),x);M(nv(t.vtp_metric,"index","metric"),
z);var C=q(t),E=Zl(t.vtp_functionName);if(Ia(E)){var H="",Q="";t.vtp_setTrackerName&&"string"==typeof t.vtp_trackerName?""!==t.vtp_trackerName&&(Q=t.vtp_trackerName,H=Q+"."):(Q="gtm"+Ki(),H=Q+".");var L=function(Ca){var ka=[].slice.call(arguments,0);ka[0]=H+ka[0];E.apply(window,ka)},U=function(Ca,ka){return void 0===ka?ka:Ca(ka)},S=function(Ca,ka){if(ka)for(var ab in ka)ka.hasOwnProperty(ab)&&(c?C[Ca+ab]=ka[ab]:L("set",Ca+ab,ka[ab]))},W=function(){
var Ca={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},ka={},ab=(ka[O.Nd]="click",ka[O.Na]="detail",ka[O.Bb]="add",ka[O.Cb]="remove",ka[O.ib]="checkout",ka[O.ya]="purchase",ka[O.Db]="refund",ka),Tc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},kc={item_category:0,
item_category2:1,item_category3:2,item_category4:3,item_category5:4},zc=function(Ua,bb){for(var Oa in Ua)Ca.hasOwnProperty(Oa)&&(Ua[bb]=Ua[bb]||{},Ua[bb].actionField=Ua[bb].actionField||{},Ua[bb].actionField[Ca[Oa]]=Ua[Oa])},zb=function(Ua,bb){for(var Oa="",eb=0;eb<bb.length;eb++)void 0!==bb[eb]&&(""!==Oa&&(Oa+="/"),Oa+=bb[eb]);Ua.category=Oa},sb=function(Ua){for(var bb=[],Oa={},eb=0;eb<Ua.length;Oa={zb:Oa.zb,Tb:Oa.Tb},eb++){Oa.zb={};var Bc=Ua[eb];Oa.Tb=[];Ta(Bc,function(Cd){return function(Wc,xf){Tc.hasOwnProperty(Wc)?
Cd.zb[Tc[Wc]]=xf:kc.hasOwnProperty(Wc)?Cd.Tb[kc[Wc]]=xf:Cd.zb[Wc]=xf}}(Oa));0<Oa.Tb.length&&zb(Oa.zb,Oa.Tb);bb.push(Oa.zb)}return bb},tb=function(Ua,bb,Oa){if(!Fc(bb))return!1;for(var eb=db(Object(bb),Oa,[]),Bc=0;eb&&Bc<eb.length;Bc++)L(Ua,eb[Bc]);return!!eb&&0<eb.length},V;if(t.vtp_useEcommerceDataLayer){var Sb=!1;if(t.vtp_useGA4SchemaForEcommerce){t.vtp_gtmCachedValues&&(V=t.vtp_gtmCachedValues.eventModel);
V=V||Xi(t.vtp_gtmEventId,"eventModel");Sb=!!V}Sb||(V=Eu("ecommerce",1))}else t.vtp_ecommerceMacroData&&(V=t.vtp_ecommerceMacroData.ecommerce,!V&&t.vtp_useGA4SchemaForEcommerce&&
(V=t.vtp_ecommerceMacroData));if(!Fc(V))return;V=Object(V);if(t.vtp_useGA4SchemaForEcommerce){V=M(V);V.currencyCode=V.currencyCode||V.currency;var Tb;t.vtp_gtmCachedValues&&(Tb=t.vtp_gtmCachedValues.event);Tb=Tb||String(Xi(t.vtp_gtmEventId,"event"));if(Tb===O.Wb&&!V.impressions&&V.items)V.impressions=sb(V.items);else if(Tb===O.Tc&&!V.promoView&&V.items)V.promoView={},V.promoView.promotions=
sb(V.items);else if(Tb===O.Sc&&!V.promoClick)V.items&&(V.promoClick={},V.promoClick.promotions=sb(V.items)),zc(V,"promoClick");else if(ab.hasOwnProperty(Tb)){var me=ab[Tb];V[me]||(V.items&&(V[me]={},V[me].products=sb(V.items)),zc(V,me))}}var ph=db(C,"currencyCode",V.currencyCode);void 0!==ph&&L("set","&cu",ph);tb("ec:addImpression",V,"impressions");if(tb("ec:addPromo",V[V.promoClick?"promoClick":"promoView"],"promotions")&&V.promoClick){L("ec:setAction","promo_click",V.promoClick.actionField);return}for(var vf=
"detail checkout checkout_option click add remove purchase refund".split(" "),wf="refund purchase remove checkout checkout_option add click detail".split(" "),Uc=0;Uc<vf.length;Uc++){var Ac=V[vf[Uc]];if(Ac){tb("ec:addProduct",Ac,"products");L("ec:setAction",vf[Uc],Ac.actionField);if(Pm)for(var Vc=0;Vc<wf.length;Vc++){var Bd=V[wf[Vc]];if(Bd){Bd!==Ac&&Kg(13);break}}break}}},I=function(Ca,ka){return void 0===t[Ca]?w[ka]:t[Ca]},T=t.vtp_trackingId||
w.trackingId;if(!c){var La=function(Ca,ka){void 0!==ka&&L("set",Ca,ka)},Ra={name:Q};p(C,Ra,!0);E("create",T,Ra);L("set","&gtm",Mn(!0));S("contentGroup",y);S("dimension",x);S("metric",z);var xd=!1;ah()&&!xd&&(L("set","&gcs",lh()),b(T,t,Q));C._x_19&&C._x_20&&!e[Q]&&(e[Q]=!0,E(dm(Q,String(C._x_20))));t.vtp_enableRecaptcha&&L("require","recaptcha","recaptcha.js");v("nonInteraction","vtp_nonInteraction");var rf={};p(C,rf,!1)&&L("set",rf);t.vtp_enableLinkId&&L("require","linkid","linkid.js");L("set","hitCallback",function(){var Ca=C&&C.hitCallback;Ia(Ca)&&Ca();t.vtp_gtmOnSuccess()})}var jc;if("TRACK_EVENT"==t.vtp_trackType){if(!c){t.vtp_enableEcommerce&&(L("require","ec","ec.js"),W());var sf={hitType:"event",eventCategory:String(I("vtp_eventCategory","category")),eventAction:String(I("vtp_eventAction","action")),eventLabel:U(String,I("vtp_eventLabel","label")),eventValue:U(Wa,I("vtp_eventValue","value"))};p(jc,sf,!1);
L("send",sf);}}else if("TRACK_SOCIAL"==t.vtp_trackType){if(!c){}}else if("TRACK_TRANSACTION"==t.vtp_trackType){}else if("TRACK_TIMING"==
t.vtp_trackType){if(!c){}}else if("DECORATE_LINK"==t.vtp_trackType){}else if("DECORATE_FORM"==t.vtp_trackType){}else if("TRACK_DATA"==t.vtp_trackType){}else if(!c){t.vtp_enableEcommerce&&(L("require","ec","ec.js"),W());if(t.vtp_doubleClick||"DISPLAY_FEATURES"==
t.vtp_advertisingFeaturesType){var le="_dc_gtm_"+String(t.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");L("require","displayfeatures",void 0,{cookieName:le})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==t.vtp_advertisingFeaturesType){var uf="_dc_gtm_"+String(t.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");L("require","adfeatures",{cookieName:uf})}jc?L("send","pageview",jc):L("send","pageview");r(t,H);Xa(C.urlPassthrough)&&am(H)}if(!d){var Ad=t.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";
t.vtp_useInternalVersion&&!t.vtp_useDebugVersion&&(Ad="internal/"+Ad);d=!0;var Rc=vn(C._x_19,"/analytics.js"),Sc=el("https:","http:","//www.google-analytics.com/"+Ad,C&&!!C.forceSSL);R("analytics.js"===Ad&&Rc?Rc:Sc,function(){var Ca=Xl();Ca&&Ca.loaded||t.vtp_gtmOnFailure();},t.vtp_gtmOnFailure)}}else K(t.vtp_gtmOnFailure)};(function(t){Z.__ua=t;Z.__ua.m=
"ua";Z.__ua.o=!0;Z.__ua.priorityOverride=0})(function(t){oh(function(){u(t)},[O.I,O.D])})}();
Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.m="inject_script";Z.__inject_script.o=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(ag(Nh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},V:a}})}();


Z.h.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.m="cid";Z.__cid.o=!0;Z.__cid.priorityOverride=0})(function(){return of.N})}();

Z.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"];(function(b){Z.__gclidw=b;Z.__gclidw.m="gclidw";Z.__gclidw.o=!0;Z.__gclidw.priorityOverride=100})(function(b){K(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||kk())&&Hk(a,h));Ek(h);Kk(["aw","dc"],h);Wk(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Jk(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var p=Eu(O.T);vo({Ce:!1,wa:void 0!=p&&!1!==p,ud:h,Ad:!0});b.vtp_enableUrlPassthrough&&Mk(["aw","dc","gb"])})}();

Z.h.aev=["google"],function(){function a(u,t,v){var w=u||Xi(t,"gtm");if(w)return w[v]}function b(u,t,v,w,y){y||(y="element");var x=t+"."+v,z;if(p.hasOwnProperty(x))z=p[x];else{var B=a(u,t,y);if(B&&(z=w(B),p[x]=z,q.push(x),35<q.length)){var D=q.shift();delete p[D]}}return z}function c(u,t,v,w){var y=a(u,t,r[v]);return void 0!==y?y:w}function d(u,t){if(!u)return!1;var v=e(Bu());Ka(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++){var x=t[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(u))return!1}else{var z=x;if(0!=z.length){if(0<=e(u).indexOf(z))return!1;w.push(e(z))}}}return!mv(u,w)}function e(u){m.test(u)||(u="http://"+u);return Lh(Nh(u),"HOST",!0)}function f(u,t,v,w){switch(u){case "SUBMIT_TEXT":return b(t,v,"FORM."+u,g,"formSubmitElement")||w;case "LENGTH":var y=b(t,v,"FORM."+u,h);return void 0===y?w:y;case "INTERACTED_FIELD_ID":return l(t,v,"id",w);case "INTERACTED_FIELD_NAME":return l(t,
v,"name",w);case "INTERACTED_FIELD_TYPE":return l(t,v,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(t,v,"interactedFormFieldPosition");return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var z=a(t,v,"interactSequenceNumber");return void 0===z?w:z;default:return w}}function g(u){switch(u.tagName.toLowerCase()){case "input":return ic(u,"value");case "button":return lc(u);default:return null}}function h(u){if("form"===u.tagName.toLowerCase()&&u.elements){for(var t=0,v=0;v<u.elements.length;v++)Hq(u.elements[v])&&
t++;return t}}function l(u,t,v,w){var y=a(u,t,"interactedFormField");return y&&ic(y,v)||w}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(u){Z.__aev=u;Z.__aev.m="aev";Z.__aev.o=!0;Z.__aev.priorityOverride=
0})(function(u){var t=u.vtp_gtmEventId,v=u.vtp_defaultValue,w=u.vtp_varType,y;u.vtp_gtmCachedValues&&(y=u.vtp_gtmCachedValues.gtm);switch(w){case "TAG_NAME":var x=a(y,t,"element");return x&&x.tagName||v;case "TEXT":return b(y,t,w,lc)||v;case "URL":var z;a:{var B=String(a(y,t,"elementUrl")||v||""),D=Nh(B),C=String(u.vtp_component||"URL");switch(C){case "URL":z=B;break a;case "IS_OUTBOUND":z=
d(B,u.vtp_affiliatedDomains);break a;default:z=Lh(D,C,u.vtp_stripWww,u.vtp_defaultPages,u.vtp_queryKey)}}return z;case "ATTRIBUTE":var E;if(void 0===u.vtp_attribute)E=c(y,t,w,v);else{var H=u.vtp_attribute,Q=a(y,t,"element");E=Q&&ic(Q,H)||v||""}return E;case "MD":var L=u.vtp_mdValue,U=b(y,t,"MD",uu);return L&&U?xu(U,L)||v:U||v;case "FORM":return f(String(u.vtp_component||"SUBMIT_TEXT"),y,t,v);default:var S=c(y,t,w,v);Nu(S,"aev",u.vtp_gtmEventId);return S}})}();

Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.m="gas";Z.__gas.o=!0;Z.__gas.priorityOverride=0})(function(a){var b=M(a),c=b;c[re.rb]=null;c[re.Mh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Bu()}function b(f,g){gc(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:Du(l),U:Cu(l)})})}function c(f,g){gc(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:Du(l),U:Cu(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ia(m))try{l[f]=function(p,q,r){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:Du(Bu()),
U:Cu(Bu())})}}catch(p){}}function e(){var f={source:null,state:X("history").state||null,url:Du(Bu()),U:Cu(Bu())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.U!=g.U){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.U,"gtm.newUrlFragment":g.U,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;Fu(m)}}}(function(f){Z.__hl=f;Z.__hl.m="hl";Z.__hl.o=!0;Z.__hl.priorityOverride=
0})(function(f){var g=X("self");if(!Ku("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);Lu("hl")}K(f.vtp_gtmOnSuccess)})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.m="remm";Z.__remm.o=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Nu(f,"remm",a.vtp_gtmEventId);return f})}();





Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.m="paused";Z.__paused.o=!0;Z.__paused.priorityOverride=0})(function(a){K(a.vtp_gtmOnFailure)})}();

Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ac(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){K(g)}}}var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=Ou(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Ai,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(J.body,mc(g),h,e)()}else zu(function(){c(d)},
200)};Z.__html=c;Z.__html.m="html";Z.__html.o=!0;Z.__html.priorityOverride=0}();




Z.h.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.m="img";Z.__img.o=!0;Z.__img.priorityOverride=0})(function(a){var b=mc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}lv(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var hy={};hy.macro=function(a){if(lu.te.hasOwnProperty(a))return lu.te[a]},hy.onHtmlSuccess=lu.ng(!0),hy.onHtmlFailure=lu.ng(!1);hy.dataLayer=Ri;hy.callback=function(a){Ii.hasOwnProperty(a)&&Ia(Ii[a])&&Ii[a]();delete Ii[a]};hy.bootstrap=0;hy._spx=!1;function iy(){xi[of.N]=hy;gb(Ji,Z.h);Ve=Ve||lu;We=kf}
function jy(){var a=!1;a&&Tl("INIT");Pg().s();xi=A.google_tag_manager=A.google_tag_manager||{};po();
mk.enable_gbraid_cookie_write=!0;if(xi[of.N]){var b=xi.zones;b&&b.unregisterChild(of.N);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Oe.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Re.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Qe.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},u=
0;u<q.length;u++)r[q[u][0]]=Array.prototype.slice.call(q[u],1);Pe.push(r)}Te=Z;Ue=ts;var t=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;qt();Bf=new Af(t);if(void 0!==v)for(var y=["sandboxedScripts"],x=0;x<v.length;x++){var z=v[x].replace(/^_*/,"");Ji[z]=y}tt(w);iy();ku();Gl=!1;Hl=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)Jl();else{gc(J,"DOMContentLoaded",Jl);gc(J,"readystatechange",Jl);if(J.createEventObject&&J.documentElement.doScroll){var B=
!0;try{B=!A.frameElement}catch(Q){}B&&Kl()}gc(A,"load",Jl)}fs=!1;"complete"===J.readyState?hs():gc(A,"load",hs);Pm&&A.setInterval(Jm,864E5);
Gi=(new Date).getTime();if(a){var H=Ul("INIT");
}}}
(function(a){if(!A["__TAGGY_INSTALLED"]){var b=!1;if(J.referrer){var c=Nh(J.referrer);b="cct.google"===Kh(c,"host")}if(!b){var d=ij("googTaggyReferrer");b=d.length&&d[0].length}b&&(A["__TAGGY_INSTALLED"]=!0,cc("https://cct.google/taggy/agent.js"))}var f=function(){var m=A["google.tagmanager.debugui2.queue"];m||(m=[],A["google.tagmanager.debugui2.queue"]=m,cc("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:Yb,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};of.bh&&(p.data.initialPublish=!0);m.push(p)},g="x"===Lh(A.location,"query",!1,void 0,"gtm_debug");if(!g&&J.referrer){var h=Nh(J.referrer);g="tagassistant.google.com"===Kh(h,"host")}if(!g){var l=ij("__TAG_ASSISTANT");g=l.length&&l[0].length}A.__TAG_ASSISTANT_API&&(g=!0);g&&Yb?f():a()})(jy);

})()
