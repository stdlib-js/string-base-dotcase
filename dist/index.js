"use strict";var E=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var u=E(function(C,i){
var c=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),o=require('@stdlib/string-base-trim/dist'),n=/\s+/g,q=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,A=/([a-z0-9])([A-Z])/g;function _(e){return e=a(e,q," "),e=a(e,A,"$1 $2"),e=o(e),e=a(e,n,"."),c(e)}i.exports=_
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
