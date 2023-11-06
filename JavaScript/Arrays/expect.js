const numbers = [1, 2, 3, 4, 1, 1];

const output = expect(numbers, [1, 3]);

console.log(output);

function expect(numbers, excluded) {
  let array = [];

  for (let element of numbers) {
    if (!excluded.includes(element)) array.push(element);
  }
  return array;
}
