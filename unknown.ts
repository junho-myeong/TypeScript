// any에 타입에 불안정한 부분을 해소 하는부분
// 검사를 수행해서 타입이 결정이 된다. 즉 타입 가드를 통해서 타입을 한정시켜서 사용하는것이다.
// 컴파일러가 타입을 추론할수 있게끔 타입의 유형을 좁히거나 타입을 확정해 주지 않으면 다른곳에 할당 할수 없고, 사용할수 없다.
declare const maybe: unknown


// const aNumber: number = maybe

if (maybe === true) { // 타입가드라고 부른다.
  const aBoolean: boolean = maybe // 여기가 실행 되려면 maybe는 무조건 true이기 때문에 blooean이라고 보는것이다.
  // const aString: string = maybe // maybe는 true이기 때문이다.
}



if (typeof maybe === 'string') { // 타입 가드라고 부른다.
  const aString: string = maybe
  // const aBoolean: boolean = maybe // 여기가 실행 되려면 maybe는 무조건 true이기 때문에 blooean이라고 보는것이다.

}


