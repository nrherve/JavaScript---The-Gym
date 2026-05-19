function jumpingNumber(n){
  let n_array = n.toString().split('').map(Number);
  let diff;
  let check = false;
  for(let i = 0; i < n_array.length - 1;i++){
    diff = n_array[i] - n_array[i+1];
    if(diff != 1 && diff != -1){
      check = false;
      break;
    }
    else{
      check = true;
    }
  }
  if(n_array.length ==1){
    check = true;
  }
  if(check == true){
  return "Jumping";
  }
  else{
    return "Not!!";
  }
}

console.log(jumpingNumber(1));