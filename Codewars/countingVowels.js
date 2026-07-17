//function getCount(str) {
//  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }
function getCount(str) {
  let count = 0;
  
  for (let char of str) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }

  return count;
}