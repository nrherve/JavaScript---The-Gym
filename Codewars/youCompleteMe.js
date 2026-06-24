const complete = str =>{
  let stringarray = str.split('');
    if(stringarray[stringarray.length-1]  && stringarray.length !== 1){
      if(stringarray[stringarray.length-1] === stringarray[stringarray.length-2]){
        return str + stringarray.reverse().slice(2).join('')
      }
      else{
        return str + stringarray.reverse().slice(1).join('')
      }
    }
    else{
      return str += str
    }
    
    
  } 
console.log(complete('abc'));
console.log(complete('abcc'));
console.log(complete('GG'));