let array = [1,2,5,3,4,5,5];
let sum = 0;
for (let i = 0; i <= array.length -1; i++){
    let check = array[i];
    for (let n = 0; n <= array.length -1; n++){
        if( check == array[n] && n !=i){
            check = 0;
        }
    }
    sum = sum + check;
}
console.log(sum);