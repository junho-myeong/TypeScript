// 어떠한 타입도 가지지 않는다.
// 값을 반환 하지 않는 리턴 타입으로 사용한다.
function returnVoid(message: string): void {
  console.log(message)

  return undefined; // 유일하게 undefined만  할당 가능하다.
}

const r = returnVoid('리턴이 없다.')
