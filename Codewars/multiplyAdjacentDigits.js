function digitMultiplication(expr){
    let newArray = [];
    let total = 1;
    let whole =0;
    let signs = [];
    for(let i = 0; i<expr.length; i++){
        if(Number(expr[i]) || expr[i]=='0'){
            total = total * Number(expr[i]);
        }
        else{
            newArray.push(total);
            signs.push(expr[i]);
            total = 1;
        }
    }
    newArray.push(total);
    whole = newArray[0];
    for(let n=0; n<signs.length; n++){
        if(signs[n] === '+'){
            whole = whole + newArray[n+1];
        }
        else{
            whole = whole - newArray[n+1];
        }
    }
    return whole;
}
console.log(digitMultiplication("22+33-43-50"));