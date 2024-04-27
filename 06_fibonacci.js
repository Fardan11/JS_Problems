var output = [];

function fibonacciGenerator(n) {
  //if n=1 add 0
  if (n === 1) {
    output = [0];
  }
  //if n=2 add 1
  else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
    return output;
  }
}
ans = fibonacciGenerator(6);
console.log(ans);
