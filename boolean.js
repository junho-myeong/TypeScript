"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // boolean
let isOk = true;
// let isNotOk: boolean = new Boolean(true) // 문제가 발생하는 이유는 primitive와 레퍼 객체는 다르기 때문이다.
