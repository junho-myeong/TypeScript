# TypeScript

## TypeScript type vs Javascript type
TypeScript | JavaScript
--|--
 static type(개발 중간에 type체크) | dynamic type(runtime시 오류 파악)
 
 Typescript는 JavaScript에 기본 자료형은 가지고 잇고  
 프로그래밍을 도울 몇가지 타입이 더 제공된다.  
 ex) any, void, never, unkown, enum, tuple

 ## Primitive Types(기본 자료형)
- Object와 refernce 형태가 아닌 실제 값을 저장하는 자료형
- 프리머티브 형의 내장 함수를 사용 가능한것은 자바스크립트 처리 방식 덕분
1. boolean
1. number
1. string
1. symbol
1. null
1. undefined
- literal 값으로 primitive 타입의 서브 타입을 나타낼수 있다.
- 또는 생성자함수를 통해서 객체를 만들수도 잇다.(이건 primitive가 아닌 객체이다.) - 이건 타입으로 사용하면 안된다(소문자로 사용해줘야한다)

## Symbol type
- ECMAScript 2015의 추가된 타입
- new Symbol()로 사용할수 없다.
- Symbol을 함수로 사용해서 symbol타입을 만들어 낼수 있다
- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어 준다.
- 그래서 주로 접근을 제어하는데 많이 사용한다.







