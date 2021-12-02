/**
 * * A function which takes another function as argument
 * * or return a function is called Higher Order function.
 */

 function x() {
    console.log("from x");
  }
  
  function y(x) {
    x(); // * here x is callback function
  }
  
  /*
   * A better example to show HOF
   */
  
  const radius = [3, 1, 4, 5];
  
  const area = (radius) => {
    return Math.PI * Math.pow(radius, 2);
  };
  
  const circumference = (radius) => {
    return 2 * Math.PI * radius;
  };
  
  // ! Array.prototype.func() , this gives the power to use custom functions for every arrays declared in code
  
  Array.prototype.calculate = (logic) => {
    const output = [];
    for (let index = 0; index < radius.length; index++) {
      const element = logic(radius[index]);
      output.push(element);
    }
    return output;
  };
  
  console.log(radius.calculate(area));
  