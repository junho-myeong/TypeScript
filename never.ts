// 일반적으로 return에서 사용된다.
// never는 어떠한 형태도 리턴 되지 않는다는 뜻이다.
function error(message: string): never { // 
  throw new Error(message)
}

function fail() {
  return error('failed')
}

function infiniteLoop(): never {
  while (true) {

  }
}

// never타입은 모든 타입의 서브 타입이고, 모든 타입에 할당 할수 잇다.
// 하지만 never에는 그 어떤것도 할당할수 없다.
// any조차도 never에게 할당 할수 없다.
// 잘못된 타입을 넣는 실수를 막고자 할때 사용하기도한다.

let a: string = 'hello'
declare const b: string | number
if (typeof a !== 'string') {
  a;
}

if (typeof b !== 'string') {
  b;
}