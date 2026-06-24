const promise = new Promise((resolve, reject) =>{
    let name = 'Herve';
    if(!name){
        setTimeout(function(){
            resolve("Success");
        }, 1000)

    }
    else{
        setTimeout(function(){
            reject("Failure");
        }) 
    }
})
promise
    .then(ok => console.log(ok))
    .catch(no => console.log(no))