function counter(callback) {
    console.log("Expected output (one number per second)");
    setTimeout(function(){
        callback(Count2);
    }, 1000)
}
function Count1(callback){
    console.log(1);
    setTimeout(function(){
        callback(Count3);
    }, 1000)
}
function Count2(callback){
    console.log(2);
    setTimeout(function(){
        callback(Count4);
    }, 1000)
}
function Count3(callback){
    console.log(3);
    setTimeout(function(){
        callback(Count5);
    }, 1000)
}
function Count4(callback){
    console.log(4);
    setTimeout(function(){
        callback();
    }, 1000)
}
function Count5(){
    console.log(5);
}
counter(Count1);