const array = [1, 2, null, undefined];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;

  for (let element of array) {
    if (element) {
      count++;
    }
  }
  return count;
}
