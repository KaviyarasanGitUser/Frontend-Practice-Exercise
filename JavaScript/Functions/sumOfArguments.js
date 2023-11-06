const output = sum([1, 2, 3, 4]);

console.log(output);

function sum(...array) {
  if (Array.isArray(array[0])) array = array[0];

  return array.reduce((a, b) => a + b);
}
