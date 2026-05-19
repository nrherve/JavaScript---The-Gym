const getStudent = new Promise(function(resolve, reject){
    let user = {
        name: "Herve",
        cohort: "BA",
        age: 19,
    };
    if(user.age<=18){
        reject(new Error("This student is very young"));
    }
    else{
        setTimeout(function(){
            resolve(user);
        }, 1000)
    }

})
getStudent
    .then(function(profile){
        console.log(profile.name);
        return profile;
    })
    .then(function(correct){
        console.log(`${correct.name} 's profile`)
       return correct;
    })
    .then(function(right){
        console.log(`${right.cohort} is the cohort for ${right.name}`);
        return right;
    })
    .catch(function(mssg){
        console.log(mssg.message);
    })
    .finally(function(){
        console.log('Student registration check ended well');
    })


