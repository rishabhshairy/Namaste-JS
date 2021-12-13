let name = {
    firstname: "Rishabh",
    lastname: "Shairy",
  };
  
  let printName = function () {
    console.log(this.firstname + " " + this.lastname);
  };
  
  // * here printMyName gets a function which can be later invoked
  let printMyName = printName.bind(name);
  printMyName();
  
  Function.prototype.myBind = function (...args) {
    // ! here this --> printName
    let obj = this;
    return function () {
      obj.call(args[0]);
    };
  };
  let printMyName2 = printName.myBind(name);
  printMyName2();
  
  // * Example for multiple params
  
  let print = function (hometown, state, country) {
    console.log(
      this.firstname +
        " " +
        this.lastname +
        " , " +
        hometown +
        " , " +
        state +
        " , " +
        country
    );
  };
  
  Function.prototype.myBindWithParams = function (...args) {
    let obj = this,
      params = args.slice(1);
    return function (...args2) {
      obj.apply(args[0], [...params, ...args2]);
    };
  };
  
  let printAll = print.myBindWithParams(name, "Bangalore", "Karnataka");
  printAll("India");
  