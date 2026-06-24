function filterArray(array, testCallback) {
    testCallback(array);
}
let newarr = [];
let newarr2 = [];
function evenArray(arr){
    for (let a of arr){
        if(a%2 === 0){
            newarr.push(a);
        }
    }
    console.log(newarr);
}
function bignArray(arr){
    for (let a of arr){
        if(a > 5){
            newarr2.push(a);
        }
    }
    console.log(newarr2);
}
filterArray([2,3,5,6,6,7,8,9], evenArray);
filterArray([2,3,5,6,6,7,8,9], bignArray)
