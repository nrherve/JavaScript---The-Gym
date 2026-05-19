function getstudent(){

    return new Promise((resolve, reject)=> {

        let student = {
            name: 'Herve',
            cohort: 'BA'
        };

        resolve(student);

    });

}

function registerStudent(student){

    return new Promise((resolve, reject)=>{

        resolve(`${student.name} registered successfully`);

    });

}

function generateId(student){

    return new Promise((resolve, reject)=>{

        student.id = 'STU102';

        resolve(student);

    });

}
async function processStudent() {

    let student = await getstudent();

    let message = await registerStudent(student);

    console.log(message);

    let updatedStudent = await generateId(student);

    console.log(updatedStudent.id);

}

processStudent();cd