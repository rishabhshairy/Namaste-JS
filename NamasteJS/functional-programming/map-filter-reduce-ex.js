const arr = [24, 55, 66, 121, 342];

/*
 * Map examples
 */

const binary = (x) => {
  return x.toString(2);
};
const out = arr.map(binary);

console.log(out);

/**
 * * Filter examples
 */

const filterOut = arr.filter((x) => x % 2 !== 0);
console.log(filterOut);

/**
 * * Reduce example
 */

// ! for example --> find sum or max number something like that

// * fins sum

const sum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(sum);

// * find max

const max = arr.reduce((acc, curr) => {
  acc = Math.max(acc, curr);
  return acc;
}, arr[0]);

console.log(max);