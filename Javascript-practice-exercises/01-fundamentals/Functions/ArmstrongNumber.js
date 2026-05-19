function narcissistic(value) {
  let digits = value.toString().split('');
  let ArmstrongNumber = 0;  
  let count = value.toString().length;
  for(let i = 0; i<=count-1;i++){
    ArmstrongNumber += digits[i]**count;
  }
  return ArmstrongNumber;
}
console.log("The ArmstrongNumber is: ", narcissistic(678));