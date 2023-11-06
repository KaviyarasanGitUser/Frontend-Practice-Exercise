const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -1);

if (output) console.log(output);

function move(numbers, index, offset) {
  const position = index + offset;
  if (position >= numbers.length || position < 0) {
    console.error("Invalid offset");
    return;
  }

  const array = [...numbers];
  const element = array.splice(index, 1)[0];
  array.splice(position, 0, element);
  return array;
}
