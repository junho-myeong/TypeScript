// undefined타입인 변수에는 undefined라는 값만 가능하다
// null또한 마찬가지이다.
// undefined와 null은 모든 타입에 서브타입이다. 그래서 nuber에 null또는 undefined라는 값을 할당할수 잇다.
// 하지만 커파일 옵션에서 --strictNullCheck(null과 undefined가 더이상 다른 타입에 서브 타입이 되는것이 아니다)사용하면 null과 undefined는 void 나 자기 자신들에게만 할당 할수 잇다
// null과 undefined를 할당할수잇게하려면 union type을 설정해야한다.

// let myName: string = null // tsconfig에 잇는 strictNullCheck가 true로 존재하기 때문에 null과 undefined가 더이상 서브 타입이 아니게 되는것이다.
// let myName: string = undefined

// let u: undefined = null;
// let v: void = null;
// let v1: void = undefined; // void타입은 null 할당은 불가능 하다

let union: string | null = null // 유니온 타입이다.
union = "junho"
console.log(union)

// null in Javascript
// null이라는 값으로 할당된것을 null이라고한다.
// 무언가가 있는데, 사용할 준비가 덜된 상태
// null이라는 타입은 null이라는 값만 가질수 잇다.
// 런타임에서 typeof 연산자를 이용해서 알아내면,object이다.

// undefined in javascript
// 값을 할당하지 않은 변수 undefined라는 값을 가진다.
// 무언가가 아예 준비가 안된상태(변수를 선언만하고 할당하지 않은상태를 뜻한다.)
// object에서 property가 없을 때도 undefined이다.
// 런타임에서 typeof 연사자를 이용해서 알아내면, undefined이다.