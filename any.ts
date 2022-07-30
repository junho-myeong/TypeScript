// 어떤 타입이든 할당할수 잇다는 뜻이다.
function returnAny(message: any): any { // 매개변수를 받는 값이 어떤 타입이든 가능하다고 설정할때 any를 사용하는것이다.
  console.log(message)
}

const any1 = returnAny("리턴은 아무거나")

any1.toString() // any는 정말 어떤것이든 할수 잇다는 뜻이다.

// any
// 어떤 타입이어도 상관 없는 타입이다.
// 이걸 최대한 사용하지 않는게 핵심이다.
// 편의에 의해 any를 막 사용하면 대가를 치룰수 잇다.

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d // 객체를 통해 계속 전파 된다는뜻이다.

function leakingAny(obj: any) {
  const a = obj.num;
  // const a: number = obj.num; // any에 대한 누수를 막는 방법
  const b = a + 1; // b- any타입
  return b
}

const c = leakingAny({ num: 0 })
// const d: string = c.indexOf('0')