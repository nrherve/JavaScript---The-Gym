// function wrappingPaper(boxes) {
//   let surfaceArea = (boxes[0]+boxes[1])*boxes[2];
//   let wrappingPaper = surfaceArea + 2;
//   return wrappingPaper;
// }
// console.log(wrappingPaper([5,6,7]));
let text = 'aabac3e45dd ?XZe$';
let newText = text.toLowerCase().replace(/[^a-z]/g, "");
console.log(newText);
// for(let i = 0; i<newText.length; i++){
//   for(let n = 0; n<newText.length; n++){
//     if(i!=n){
//       if(newText[i] === newText[n] || (newText.charCodeAt(n) + 1) === newText[i] || (newText.charCodeAt(n) - 1) === newText[i]){
//         console.log(newText[i]);
//       }
//     }
//   }
//}

if((newText.charCodeAt(0) + 1) === newText.charCodeAt(2)){
  console.log("hello");
}