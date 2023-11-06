const numbers = [1, 2, 4, 3, 4, 1, 1, 2, 4];

const count = countOccurence(numbers, 4);

console.log(count);

function countOccurence(numbers, searchElement) {
  return numbers.reduce((count, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return count + occurence;
  }, 0);
}
