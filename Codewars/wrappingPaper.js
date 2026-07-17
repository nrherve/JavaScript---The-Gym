function wrappingPaper(boxes) {
  let totalPaper = 0;

  for (let i = 0; i < boxes.length; i++) {
    let l = boxes[i][0];
    let w = boxes[i][1];
    let h = boxes[i][2];

    let side1 = l * w;
    let side2 = l * h;
    let side3 = w * h;

    let surfaceArea = 2 * (side1 + side2 + side3);
    let slack = Math.min(side1, side2, side3);

    totalPaper += surfaceArea + slack;
  }

  return totalPaper;
}
console.log(wrappingPaper([[5,6,7]]))

// function wrappingPaper(boxes) {
//   return boxes.reduce((sum, [l,w,h]) => sum + 2 * (l*w + l*h + w*h) + Math.min(l*w,l*h,w*h), 0)
// }