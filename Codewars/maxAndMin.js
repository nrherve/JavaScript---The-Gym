function highAndLow(numbers) {
  let numberArray = numbers.split(" ").map(Number);
  let highest = Math.max(...numberArray);
  let lowest = Math.min(...numberArray);
  return `${highest} ${lowest}`;
}
console.log(highAndLow("1 2 3 4 5"));