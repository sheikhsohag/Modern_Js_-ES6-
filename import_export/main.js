// import {pi, a} from './external.js'; //named import
// // named imprt and remane
// // import {pi as vara, a as aa} from './external.js';

// console.log(pi, a);


// // import all element in a time

// import * as test from './external.js'; //named import

// console.log(test);
// console.log(test.a, test.pi)


// bydefault export
// we can not found pi because of it is not default export 

// import external from './external.js'; //named import

// console.log(external);

// if i want to import pi, it is manual process

// import external, {pi} from './external.js'; //named import

// console.log(external, pi);

// function import

import {myFunc} from "./external.js";

myFunc();