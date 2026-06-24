function fetchTodos() {

    return fetch("https://jsonplaceholder.typicode.com/todos")

        .then(function(response){

            if(!response.ok){
                throw new Error("Failed to fetch data");
            }

            return response.json();

        })

        .then(function(data){

            return data;

        })

        .catch(function(error){

            console.log(error.message);

        });

}
fetchTodos()

    .then(function(data){

        console.log(data);

    });