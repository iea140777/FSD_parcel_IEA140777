parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tkFE":[function(require,module,exports) {
$(".form-elements__container2 .form-elements__element-container:nth-of-type(2)").find(".dropdown-guests__list").removeClass("dropdown-guests__list_hidden"),$(".form-elements__container2 .form-elements__element-container:nth-of-type(3)").find(".dropdown-guests__list").removeClass("dropdown-guests__list_hidden"),$(".form-elements__container2 .form-elements__element-container:nth-of-type(3)").each(function(){$(this).find(".dropdown__counter1 .number-input").val(2),$(this).find(".dropdown__counter2 .number-input").val(1),$(this).find(".dropdown-guests__input").val("3 гостя"),$(this).find(".dropdown__counter1 .decrementer").removeClass("decrementer_disabled"),$(this).find(".dropdown__counter2 .decrementer").removeClass("decrementer_disabled"),$(this).find(".dropdown__button_clear").removeClass("invisible")}),$(".form-elements__container2 .form-elements__element-container:nth-of-type(1) .dropdown-facilities__container:nth-of-type(2)").find(".dropdown-facilities__list").removeClass("dropdown-facilities__list_hidden"),$(".form-elements__container2 .form-elements__element-container:nth-of-type(1) .dropdown-facilities__container").each(function(){$(this).find(".dropdown__counter4 .number-input").val(2),$(this).find(".dropdown__counter5 .number-input").val(2),$(this).find(".dropdown__counter4 .decrementer").removeClass("decrementer_disabled"),$(this).find(".dropdown__counter5 .decrementer").removeClass("decrementer_disabled"),$(this).find(".dropdown-facilities__input").val("2 спальни, 2 кровати...")});
},{}]},{},["tkFE"], null)
//# sourceMappingURL=UIkit-form-elements.f6c3f200.js.map