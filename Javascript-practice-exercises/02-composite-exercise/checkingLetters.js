function sameCase(a,b){
    if(a >=a && a<=z && b>=a && b<=z){
        return 1;
    }
    else if (a === a.toUpperCase() && b !== b.toUpperCase()) {
        return 0;
    } 
    else if(b=== b.toUpperCase() && a !== a.toUpperCase()){
        return 0;
    }
    else {
        return -1;
    }
}
console.log(sameCase('b', 1));