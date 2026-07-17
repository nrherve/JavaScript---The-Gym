function trickyDoubles(num) {
    let str = num.toString();
    if (str.length % 2 !== 0) {
        return num * 2;
    }
    let middle = str.length / 2;
    let firstHalf = str.slice(0, middle);
    let secondHalf = str.slice(middle);
    if (firstHalf === secondHalf) {
        return num;
    }
    return num * 2;
}
// function trickyDoubles(n) {
//   let s = n.toString(), sh = s.slice(s.length / 2);
//   return sh + sh == s ? n : n * 2;
// }