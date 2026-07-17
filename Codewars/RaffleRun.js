function raffleOdds(totals, purchased) {
  let loseNum = 1;
  let loseDen = 1;

  for (let i = 0; i < totals.length; i++) {
    let t = totals[i];
    let p = purchased[i];

    loseNum *= (t - p);
    loseDen *= t;
  }

  let winNum = loseDen - loseNum;
  let winDen = loseDen;

  // GCD function
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let g = gcd(winNum, winDen);

  winNum /= g;
  winDen /= g;

  return `${winNum}/${winDen}`;
}