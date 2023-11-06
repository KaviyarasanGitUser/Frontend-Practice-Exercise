const numbers = [1, 2, 4, 3, 4, 1, 1, 2, 4];

try {
  const count = countOccurence(1, 4);
  console.log(count);
} catch (error) {
  console.log(error);
}

function countOccurence(numbers, searchElement) {
  if (!Array.isArray(numbers)) throw new Error("pass an array argument");
  return numbers.reduce((count, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return count + occurence;
  }, 0);
}
