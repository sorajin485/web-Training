// ./concept/function_arrow.js
function foo() {
    console.log('foo');
};
foo();

const bar = () => {
    console.log('bar');
};
bar();

const foo2 = () => ('foo2'); 
const bar2 = () => { return 'bar2' };

console.log(foo2());
console.log(bar2());
