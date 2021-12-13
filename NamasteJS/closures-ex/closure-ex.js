// *  A closure is the combination of a function and the lexical environment within which that function was declared

/* 
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();
 */

/* function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
/// ......

z();  */
// ! when z() is called the closure was returned

// * Reference case

/* function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
z(); // ! logs 100
 */

// * Super parent lexical scope and its closure

function z() {
    var b = 900;
    function x() {
      var a = 10;
      function y() {
        console.log(a, b);
      }
      y();
    }
    x();
  }
  z();
  