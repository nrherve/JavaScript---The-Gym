function data(urls){
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(promises);
}
let urls =[  
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]
data(urls).then(response => console.log(response)).catch(respon => console.log("failed"));