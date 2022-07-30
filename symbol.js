"use strict";
console.log(Symbol('foo') === Symbol('foo')); // false 같은 함수에 같은 인자를 받았지만 다르다.
const sym = Symbol(); // 고유한 형태의 symbol타입이다.
let test = 'hi1';
const obj = {
    [sym]: "value",
    [test]: "hi"
};
console.log(obj[sym]);
console.log(obj[test]);
console.log(typeof sym);
