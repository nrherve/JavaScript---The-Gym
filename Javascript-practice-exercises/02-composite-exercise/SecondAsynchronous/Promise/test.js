function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}

// Run the three functions in steps
step1()
.then(function(value) {
  return step2(value);
})
.then(function(value) {
  return step3(value);
})
.then(function(value) {
  console.log(value);
});5