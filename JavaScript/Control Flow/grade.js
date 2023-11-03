const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";

  if (average < 70) return "D";

  if (average < 80) return "C";

  if (average < 90) return "B";

  if (average < 100) return "A";
}

function calculateAverage(array) {
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  return Math.round(sum / array.length);
}
