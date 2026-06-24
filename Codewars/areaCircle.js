function circleArea(radius) {
  if(radius <= 0){
    throw new Error ("throws an Error");
  }
  else{
    return Math.PI * radius ** 2;
  }
  
}
console.log(circleArea(0));
