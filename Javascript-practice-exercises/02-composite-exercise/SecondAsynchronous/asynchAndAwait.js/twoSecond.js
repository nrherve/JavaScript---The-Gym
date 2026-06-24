async function waitMessage(){
    return "This will wait for two (2) seconds";
}
setTimeout(async function(){
    let result = await waitMessage();
    console.log(result);
})