// Create an object called student.

// It should have:

// name
// age
// course

// Then add a regular function called introduce.

// When the function runs, it should print something like:

// My name is Herve and I study AI
const student = {
    name: "Herve",
    age: 25,
    course: "AI",
    introduce: () => console.log(`My name is ${this.name} and I am studying ${this.course}`)
}
student.introduce();