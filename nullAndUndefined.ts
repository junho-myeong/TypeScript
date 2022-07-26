// undefined타입인 변수에는 undefined라는 값만 가능하다
// null또한 마찬가지이다.
// undefined와 null은 모든 타입에 서브타입이다. 그래서 nuber에 null또는 undefined라는 값을 할당할수 잇다.
// 하지만 커파일 옵션에서 --strictNullCheck사용하면 null과 undefined는 void 나 자기 자신들에게만 할당 할수 잇다
// null과 undefined를 할당할수잇게하려면 union type을 설정해야한다.

// let myName: string = null
// let myName: string = undefined

// let u: undefined = null;
// let v: void = null;
// let v1: void = undefined; // void타입은 null 할당은 불가능 하다

// let union: string | null = null // 유니온 타입이다.
// union = "junho"

