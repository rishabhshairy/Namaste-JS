// * web api's
/**
 * * setTimeout()
 * * DOM API's
 * * fetch()
 * * local storage
 * * console
 * * location
 * ! all these are in global object and can be also accessed without window keyword
 */

 console.log("Start");

 /* 
 setTimeout(() => {
     console.log("callback");
 }, 5000); 
 */
 
 // * ex2
 
 /* document.getElementById("clickMe").addEventListener("click", () => {
   console.log("callback");
 }); */
 
 // ! fetch() example
 
 setTimeout(() => {
   console.log("CB Timeout");
 }, 1);
 
 fetch("https://api.netflix.com")
   .then(() => {
     console.log("CB Netflix");
   })
   .catch((err) => {
     console.log(err);
   });
 
 // ! Microtask Queue --> higher priority than callback queue
 /* 
   * Fetch function goes into Microtask Queue
   * All the functions which comes through promises will come into microtask queue
   * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
   * 
 */
 
 console.log("End");
 