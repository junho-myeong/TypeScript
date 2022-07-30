// Tuple 
// 값을 할당할때 순서와 타입과 배열의 길이 까지 같아야한다.
let x: [string, number]

x = ["hello", 29]

// x = [10, "hello"]

// x[3] = "world"

const person: [string, number] = ['junho', 29]

const [first, second] = person // 구조분해 할당

console.log(first)

// array와 tuple 차이
// array는 내부의 데이터타입이 공통적으로 묶여 잇다,
// tuple은 내부의 데이터가 정확한 타입과 길이를 설정해서 사용해야한다.