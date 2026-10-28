function countDirectionChanges(readings) {
  let changes = 0;
  let lastDirection = null;

  for (let i = 1; i < readings.length; i++) {
    const currentDirection = readings[i] > readings[i - 1] ? 'up' : readings[i] < readings[i - 1] ? 'down' : null;

    if (currentDirection){
        if (lastDirection !== null && currentDirection !== lastDirection) {
            changes++;
        }
        lastDirection = currentDirection;
    }
}  
  return changes;
}
console.log(countDirectionChanges([1, 2, 3, 2, 1, 2, 3]));
console.log(countDirectionChanges([1, 1, 3, 3, 2]));