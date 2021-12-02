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
