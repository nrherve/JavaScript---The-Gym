function greet() {
  console.log("1 Hello from greet")
}

function fetchUser() {
  console.log("2 fetchUser started")

  Promise.resolve("Ada").then(function(name) {
    console.log("3 Got user:", name)
  })

  console.log("4 fetchUser done")
}

console.log("5 Start")

greet()
fetchUser()

setTimeout(function() {
  console.log("6 setTimeout fired")
}, 0)

console.log("7 End")