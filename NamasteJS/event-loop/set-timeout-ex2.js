/*
    * Block main thread and examples of setTimeout issue.
    * setTimeout will not execute if the main thread is blocked by lines of code
    * below is example
    * JS is sync single threaded language
 */

console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 5000);

console.log("End");

let date = new Date().getTime();
let endDate = date;
// while (endDate < date + 10000) {
//     endDate = new Date().getTime();
// }
console.log("While expires");

/**
 * * Delay in setTimeout of 0ms
 */

 console.log("Start Delay 0ms");

 setTimeout(() => {
   console.log("Callback 0ms");
 }, 0);
 
 console.log("End Delay 0ms");