// for(let i = 0; i<5; ++i){
//     console.log(i);
// }
//_________________________________________

// let array = [1,2,3,4];
// array.splice(2,1,8,9);
// console.log(array);

//_________________________________________

// let array = [1,2,3,4,5,6];
// let newArray = array.entries();
// console.log(newArray.next().value);

// __________________________________________

// function MyNumber(n){
//     this.number = n;
// }

// MyNumber.prototype.valueOf = function () {
//     return this.number;
// };
// const object = new MyNumber(4);
// console.log(object+3);
// console.log(typeof(object));
//______________________________________

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

console.log(returnedTarget === source);
// Expected output: False

console.log(returnedTarget);
console.log(source);
