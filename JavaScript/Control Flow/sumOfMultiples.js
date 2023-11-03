console.log(sum(10));

function sum(n) {
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) ans += i;
  }

  return ans;
}
