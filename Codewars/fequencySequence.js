function freqSeq(str, sep) {
    let newString = "";
    for(let i=0; i<str.length; i++){
        if(i != str.length-1){
            newString += str.split('').filter((charcter)=> charcter === str[i]).length + sep;
        }
        else{
            newString += str.split('').filter((charcter)=> charcter === str[i]).length;
        }
    }
  return newString;
}

console.log(freqSeq('1>234>>>.', '-'))
