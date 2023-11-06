const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  let arr = [];
  let j = 0;
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
