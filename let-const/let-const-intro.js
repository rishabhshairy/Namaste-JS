// let and const are hoisted. These are in temporal dead zone for time being
// access let variable before init gives Reference Error !!
// temporal dead zone --> from declaration of let variable to initialization
// the let variables remain in temporal dead zone
// let variables cannot be re-declared

/* 
const variables cannot be declared later
if const is not declared --> Syntax Error
re-declaration of const --> Type Error
*/
console.log(a);

let a = 10;

const b = 10000;

a = 122;
console.log(a);
