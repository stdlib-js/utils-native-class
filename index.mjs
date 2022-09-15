// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-tostringtag-support@v0.0.9-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var e=Object.prototype.toString;var n="function"==typeof Symbol?Symbol.toStringTag:"";var s=t()?function(t){var s,o,l;if(null==t)return e.call(t);o=t[n],s=r(t,n);try{t[n]=void 0}catch(r){return e.call(t)}return l=e.call(t),s?t[n]=o:delete t[n],l}:function(t){return e.call(t)};export{s as default};
//# sourceMappingURL=index.mjs.map
