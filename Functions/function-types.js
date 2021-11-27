// * Function Statement aka declaration

function a() {
    console.log("This is Function Statement");
  }
  
  // * Function Expression
  var b = function () {
    console.log("this is function expression");
  };
  
  // ! Difference between above two is of hoisting
  
  a();
  b();
  
  // * Anonymous Function --> used as values
  // function () {
  
  // }
  
  // * Named function expression
  var c = function xyz() {
    console.log("This is named function  expression");
  };
  
  // ! xyz(); cannot call named function by function names as its not in global scope
  
  // * Diff between params and arguments
  
  var d = function (param1, param2) { //* param1 and param2 are parameters
    console.log(param1, param2);
  };
  
  d(1, 2) //* 1 and 2 here are arguments to function
  
  // * First class functions --> the ability to use functions as values is called First class functions
  // * such as pass as an argument, return as a value || First Class Citizens
  
  function firstClass(param1) {
      return function (params) {
          console.log("being returned from a function")
      }
  }
  console.log(firstClass());