/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var hasSameValues = require( '@stdlib/array-base-assert-has-same-values' );


// MAIN //

/**
* Tests if two arguments are both array-like objects and have the same values.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @returns {boolean} boolean result
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 3.0 ];
*
* var out = isSameArrayLikeObject( x, y );
* // returns true
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 4.0 ];
*
* var out = isSameArrayLikeObject( x, y );
* // returns false
*/
function isSameArrayLikeObject( v1, v2 ) {
	return ( isArrayLikeObject( v1 ) && isArrayLikeObject( v2 ) && hasSameValues( v1, v2 ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = isSameArrayLikeObject;
