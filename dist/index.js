"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(p,i){
var E=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),c=require('@stdlib/string-base-trim/dist'),o=/\s+/g,n=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,q=/([a-z0-9])([A-Z])/g;function A(e){return e=a(e,n," "),e=a(e,q,"$1 $2"),e=c(e),e=a(e,o,"."),E(e)}i.exports=A
});var _=u();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
