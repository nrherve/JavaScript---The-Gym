function latestClock(a, b, c, d) {
    
    let array = [a,b,c,d];
    let H1,H2,M1,M2 = 0;
    let index = 0;
    for(let i = 0; i<4; i++){
        
        let number = Math.max(...array);
        index = array.indexOf(number);
        let n = array.splice(index,1).join(''); //returns an array element as a number
    
        if(n<=2){
            H1 = n;
        }
        if(n==2 && n<=3){
            H2 = n;
        }
        else{
            H2 = n;
        }
        if(n<=5){
            M1 = n;
        }
        if(n<10){
            M2 = n;
        }
        else{
            return "Error"
        }
    }
    return `${H1}${H2}:${M1}${M2}`;
}
console.log(latestClock(2,4,5,3));
