async function add(a,b){
    return a+b;
}
async function mult(num){
    return num * 2;
}
async function minus(num){
    return num - 5;
}
async function solution(){
    let addition =  await add(5,6);
    let multiplication = await mult(addition);
    let result = await minus(multiplication);
    console.log(result);
}
solution();//.then(console.log)