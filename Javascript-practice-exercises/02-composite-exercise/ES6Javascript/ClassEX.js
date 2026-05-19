class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce= () => {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
class Student extends Person{;
    constructor(name, age, course){
        super(name, age);
        this.course = course;
    }
    
    study = () => {
        return `${this.name} studies ${this.course} and he is ${this.age} years old`;
    }    
}
const Student1 = new Student('Herve', 25, 'AI');
console.log(Student1.study());