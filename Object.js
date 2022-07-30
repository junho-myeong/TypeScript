"use strict";
// primitive 타입과 다르게 실제 값을 저장하는게 아니고 그 값에 대한 주소를 가지고 잇는것이다.
let person1 = { name: 'junho', age: 29 }; // literal 방식 object 생성
console.log(typeof person1);
const person2 = Object.create({ name: 'junho', age: 29 });
// object는 non-primitive타입을 나타낸다.
// primitive 타입이 아닌것을 나타내고 싶을때 사용하는 타입
// non-primitive type: not number, string, boolean, bigint, symbol, null, undefined
