function warnTheSheep(queue){
  let closeWolf = queue.lastIndexOf("wolf") === queue.length - 1;
    if(closeWolf === true){
    return "Pls go away and stop eating my sheep";
    }
  for(let i = 0; i<queue.length; i++){
    if(queue[i] === "wolf" && closeWolf !== true){
      let number = queue.length - (i+1);
      return `Oi! Sheep number ${number}! You are about to be eaten by a wolf!`;
    }
}
}
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));