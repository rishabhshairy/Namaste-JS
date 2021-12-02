const users = [
  { firstname: "rishabh", lastname: "shairy", age: "25" },
  { firstname: "avinash", lastname: "tiwari", age: "33" },
  { firstname: "sourav", lastname: "kumar", age: "18" },
  { firstname: "abhishek", lastname: "ranjan", age: "25" },
];

// * list of full names
const fullNames = users.map((user) => `${user.firstname} ${user.lastname}`);
console.log(fullNames);

// * find count of users with age

const userCountAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(userCountAge);

// * chaining

// const chainOut = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstname);

// console.log(chainOut);

const challenge = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);

console.log(challenge);
