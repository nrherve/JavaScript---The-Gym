let text = document.querySelector(".entry");
let insertButton = document.querySelector(".btn-enter");
let clearButton = document.querySelector(".btn-clear");
let editButton = document.querySelector(".btn-edit");
let list = document.querySelector(".list");

let arrayList = [];

function renderList() {
    list.innerHTML = "";

    arrayList.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.textContent = todo;
        list.appendChild(listItem);
    });
}

insertButton.addEventListener("click", function(){
    arrayList.push(text.value);
    renderList();
    text.value = "";
})
clearButton.addEventListener("click", function(){
    arrayList = [];
    renderList();
})
