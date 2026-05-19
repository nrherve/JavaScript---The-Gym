const getData = async () => {
    try{
        let y = await Promise.reject("Hello World");
        console.log(y);
    }catch(error){console.error("Error in printing word: ", error)}

}

console.log(1);
getData();
console.log(2);