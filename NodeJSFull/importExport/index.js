// How to create your own module


//oper is worked as an object to call function
// const oper = require('./oper.js');

// console.log(oper.add(5, 5));
// console.log(oper.sub(10, 5));
// console.log(oper);


const {add, sub, mul} = require("./oper");
console.log(add(5, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
