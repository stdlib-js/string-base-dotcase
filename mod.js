// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function u(u,r,t){return u.replace(r,t)}var r=void 0!==String.prototype.trim,t=String.prototype.trim;var f=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var n=r&&""===t.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===t.call("᠎")?function(u){return t.call(u)}:function(r){return u(r,f,"$1")},e=/\s+/g,a=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,o=/([a-z0-9])([A-Z])/g;function i(r){return r=u(r,a," "),r=u(r,o,"$1 $2"),function(u){return u.toLowerCase()}(r=u(r=n(r),e,"."))}export{i as default};
//# sourceMappingURL=mod.js.map
