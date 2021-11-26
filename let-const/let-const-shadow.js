/*
 * var declared can shadow global var variables
 */
var a = 100;
let b = 1000;
const c = 10000;
{
  // * Its a Compound Statement
  var a = 10;
  let b = 20;
  const c = 30;
  console.log("From block ", a);
  console.log("From block ", b);
  console.log("From block ", c);
}

function x() {
  /*
   * * var inside a function does not shadows the variable
   */
  var a = 20;
  let b = 50;
  console.log(window.a);
  console.log(b);
}
x();
console.log("From outside ", a);
console.log("From outside ", b);
console.log("From outside ", c);

/**
 *
 *
 * * cannot shadow let using var
 *  ! let a =10
 *  !{
 *  !  var a=10 // illegal shadowing
 * !}
 *
 */