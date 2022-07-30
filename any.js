"use strict";
// 어떤 타입이든 할당할수 잇다는 뜻이다.
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
any1.toString(); // any는 정말 어떤것이든 할수 잇다는 뜻이다.
