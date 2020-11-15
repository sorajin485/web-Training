// ./datatype-ex/datatype03.js

// JSON.stringify
// JSON, array 를 문자열로 변경
let foo = { a: 1, b: 2}
console.log(JSON.stringify(foo)) // "{ "a": 1, "b": 2}"

let boo = [1, 2, 3, 4]
console.log(JSON.stringify(boo)) // "[1,2,3,4]"

// JSON.parse
// JSON.stringify 로 처리되어 문자열로 된 json, array 를 다시 
// json, array 로 되돌린다
let foo2 = { a: 1, b: 2}
var foo3 = JSON.stringify(foo2) // "{ "a": 1, "b": 2}"
console.log(JSON.parse(foo3))   // { a: 1, b: 2}

let boo2 = [1, 2, 3, 4]
var boo3 = JSON.stringify(boo2) // "[1,2,3,4]"
console.log(JSON.parse(boo3))   // [1, 2, 3, 4]
