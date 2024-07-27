<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Native Class

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the specification defined classification of an object.



<section class="usage">

## Usage

```javascript
import nativeClass from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.2.2-esm/index.mjs';
```

#### nativeClass( value )

Returns a `string` value indicating a [specification defined][object-to-string] classification of an `object`.

```javascript
var str = nativeClass( 'a' );
// returns '[object String]'

str = nativeClass( 5 );
// returns '[object Number]'

function Beep() {
    return this;
}
str = nativeClass( new Beep() );
// returns '[object Object]'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function is **not** robust for ES2015+ environments. In ES2015+, [`Symbol.toStringTag`][mdn-symbol-tostringtag] allows overriding the default description of an object.

    ```javascript
    var toStr = Object.prototype.toString;

    var str = toStr.call( false );
    // returns '[object Boolean]'

    var o = {};
    str = toStr.call( o );
    // returns '[object Object]'

    // Mask the default description:
    o[ Symbol.toStringTag ] = 'Boolean';

    str = toStr.call( o );
    // returns '[object Boolean]'
    ```

    While measures are taken to uncover the default description, such measures can be thwarted. While this function remains useful for type-checking, be aware that value impersonation is possible. Prefer functions tailored to checking for particular value types, as specialized functions are better equipped to address [`Symbol.toStringTag`][mdn-symbol-tostringtag].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs';
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@esm/index.mjs';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs';
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';
import nativeClass from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.2.2-esm/index.mjs';

var str = nativeClass( 'a' );
// returns '[object String]'

str = nativeClass( 5 );
// returns '[object Number]'

str = nativeClass( NaN );
// returns '[object Number]'

str = nativeClass( null );
// returns '[object Null]'

str = nativeClass( void 0 );
// returns '[object Undefined]'

str = nativeClass( true );
// returns '[object Boolean]'

str = nativeClass( false );
// returns '[object Boolean]'

str = nativeClass( {} );
// returns '[object Object]'

str = nativeClass( [] );
// returns '[object Array]'

str = nativeClass( function noop() {} );
// returns '[object Function]'

str = nativeClass( /./ );
// returns '[object RegExp]'

str = nativeClass( new Date() );
// returns '[object Date]'

str = nativeClass( new Map() );
// returns '[object Map]'

str = nativeClass( new WeakMap() );
// returns '[object WeakMap]'

str = nativeClass( new Set() );
// returns '[object Set]'

str = nativeClass( new WeakSet() );
// returns '[object WeakSet]'

str = nativeClass( Symbol( 'beep' ) );
// returns '[object Symbol]'

str = nativeClass( new Error() );
// returns '[object Error]'

str = nativeClass( new TypeError() );
// returns '[object Error]'

str = nativeClass( new SyntaxError() );
// returns '[object Error]'

str = nativeClass( new URIError() );
// returns '[object Error]'

str = nativeClass( new RangeError() );
// returns '[object Error]'

str = nativeClass( new ReferenceError() );
// returns '[object Error]'

str = nativeClass( new EvalError() );
// returns '[object Error]'

str = nativeClass( new Int8Array() );
// returns '[object Int8Array]'

str = nativeClass( new Uint8Array() );
// returns '[object Uint8Array]'

str = nativeClass( new Uint8ClampedArray() );
// returns '[object Uint8ClampedArray]'

str = nativeClass( new Int16Array() );
// returns '[object Int16Array]'

str = nativeClass( new Uint16Array() );
// returns '[object Uint16Array]'

str = nativeClass( new Int32Array() );
// returns '[object Int32Array]'

str = nativeClass( new Uint32Array() );
// returns '[object Uint32Array]'

str = nativeClass( new Float32Array() );
// returns '[object Float32Array]'

str = nativeClass( new Float64Array() );
// returns '[object Float64Array]'

str = nativeClass( new ArrayBuffer() );
// returns '[object ArrayBuffer]'

str = nativeClass( Math );
// returns '[object Math]'

str = nativeClass( JSON );
// returns '[object JSON]'

function Person() {
    return this;
}
str = nativeClass( new Person() );
// returns '[object Object]'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-constructor-name`][@stdlib/utils/constructor-name]</span><span class="delimiter">: </span><span class="description">determine the name of a value's constructor.</span>
-   <span class="package-name">[`@stdlib/utils-type-of`][@stdlib/utils/type-of]</span><span class="delimiter">: </span><span class="description">determine a value's type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-native-class.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-native-class

[test-image]: https://github.com/stdlib-js/utils-native-class/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-native-class/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-native-class/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-native-class?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-native-class.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-native-class/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-native-class/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-native-class/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-native-class/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-native-class/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-native-class/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-native-class/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-native-class/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-native-class/main/LICENSE

[object-to-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

[mdn-symbol-tostringtag]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag

<!-- <related-links> -->

[@stdlib/utils/constructor-name]: https://github.com/stdlib-js/utils-constructor-name/tree/esm

[@stdlib/utils/type-of]: https://github.com/stdlib-js/utils-type-of/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
