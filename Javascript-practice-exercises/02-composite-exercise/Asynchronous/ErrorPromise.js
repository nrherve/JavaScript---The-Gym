let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        //Error
        reject("Impossible");
    }, 2000);
})
const results = () => {
    promise.catch(function(error){
        console.log(`OMG, ${error}`);
})} 
results();