const promise = new Promise((resolve, reject) => {
    resolve('I am just a resolved promise');
});
promise.then(result => console.log(result));