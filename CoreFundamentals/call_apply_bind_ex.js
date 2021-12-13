let myName = {
  firstname: "Rishabh",
  lastname: "Shairy",
};

let otherName = {
  firstname: "Sourav",
  lastname: "Kumar",
};

let printFullName = function (hometown, state, country) {
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
/**
 * * Call is used for function borrowing
 */
printFullName.call(otherName, "Jamshedpur", "Jharkhand", "India");
// printFullName.call(myName);
printFullName.apply(myName, ["Ranchi", "Jharkhand", "India"]);

let printOtherName = printFullName.bind(
  otherName,
  "Jamshedpur",
  "Jharkhand",
  "India"
);
printOtherName();
