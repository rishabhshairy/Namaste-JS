/* 
function x() {
  var i = 10;
  setTimeout(() => {
    console.log(i);
  }, 3000);

  console.log("Do u even know JS");
}

x();
 */
/**
 *  * The above code will print line 7 first
 *  * and then value of `i`
 *  * as JS waits for none :lol:
 */

/* function x() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Do u even know JS");
}

x();
 */
/**
 * * With var above code will print 6 as its points to same copy of `i`
 * * But with let, it creates separate copy of function inside setTimeout
 *
 */

// ! how to approach above problem with var only --> solution is closures

function x() {
    for (let i = 0; i <= 5; i++) {
  
      function close(x) {
      
        setTimeout(() => {
          console.log(x);
        }, x * 1000);
      
      }
      close(i); // ! every time we pass i, we create a new copy of 
    }
    console.log("Do u even know JS");
  }
  
  x();
  