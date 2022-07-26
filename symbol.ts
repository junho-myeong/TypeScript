console.log(Symbol('foo') === Symbol('foo'))

const sym = Symbol();
let test: string = 'hi1'

const obj = {
  [sym]: "value",
  [test]: "hi"
}

console.log(obj[sym])
console.log(obj[test])
console.log(typeof sym)


