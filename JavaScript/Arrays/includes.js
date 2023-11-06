const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 2));

function includes(numbers, searchElement) {
  for (let element of numbers) {
    if (element === searchElement) return true;
  }
  return false;
}
