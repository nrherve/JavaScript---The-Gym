function getstudent(){
    return new Promise((resolve, reject)=> {
        let student ={
            name: 'Herve',
            cohort: 'BA'
        }
        resolve(student);
    })
}
function registerStudent(student){
    return new Promise((resolve, reject)=>{
        resolve(`${student.name}, registered successfully`)
    })
}
function generateId(student){
    return new Promise((resolve, reject)=>{
        student.id = 'STU102';
        resolve(`${student.id}`);
    })
}
getstudent()
    .then(student => {
        registerStudent(student)
            .then(message=>{
                console.log(message);
            })
        generateId(student)
            .then(message2=> console.log(message2))
    })



// Updated codes on .then()
/*
    getstudent()

    .then(student => {

        return registerStudent(student)

            .then(message => {

                console.log(message);

                return student;

            });

    })

    .then(student => {

        return generateId(student);

    })

    .then(updatedStudent => {

        console.log(updatedStudent.id);

    });
*/