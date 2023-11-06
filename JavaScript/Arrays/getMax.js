const numbers = [1, 4, 2, 3];

const max = getMax(numbers);

console.log(max);

function getMax(numbers) {
  numbers.sort();
  return numbers[numbers.length - 1];
}