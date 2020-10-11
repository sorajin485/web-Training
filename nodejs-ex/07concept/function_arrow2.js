// ./concept/function_arrow2.js
function add(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

console.log(add(4,2));
console.log(add2(4,2));
console.log(add3(4,2));
console.log(add4(4,2));
