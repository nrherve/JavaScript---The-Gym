function greet(name = 'Student', greeting='Welcome') {
//   name = (typeof name !== 'undefined') ?  name : 'Student';
//   greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

  return `${greeting} ${name}!`;
}

console.log(greet());
console.log(greet('James'));
console.log(greet('Richard', 'Howdy'));