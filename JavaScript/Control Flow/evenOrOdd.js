showNumbers(10);

function showNumbers(n) {
  for (let i = 0; i <= 10; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(`${i} ${message}`);
  }
}
