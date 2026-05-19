let numbers = [1,2,3,4,5,6,7,8,10];
let firstNumber = numbers[0];
let lastNumber = numbers[numbers.length-1];
//console.log(`First number in our array is ${firstNumber}`);
//console.log(`Last number in our array is ${lastNumber}`);
numbers.push(11);
//console.log(numbers[numbers.length-1]);
for(let i = 0; i <= numbers.length-1; i++){
    //console.log(numbers[i]);
}
let removed = numbers.pop();
//console.log(removed);
for(let i = 0; i <= numbers.length-1; i++){
    //console.log(numbers[i]);
}
let infront_removed = numbers.shift();
for(let i = 0; i <= numbers.length-1; i++){
    //console.log(numbers[i]);
}
numbers.unshift(0,1);
for(let i = 0; i <= numbers.length-1; i++){
    //console.log(numbers[i]);
}
console.log(numbers);
//Finding the position of an item in array
let position = numbers.indexOf(6);
console.log(`The position or our number is ${position}`);
//Removing an element by index
numbers_removed_usingIndex = numbers.splice(3,2);
console.log(numbers);
//Copying an array
let bestNumbers = numbers.slice();
console.log(bestNumbers);