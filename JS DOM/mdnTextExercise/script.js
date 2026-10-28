let text = document.querySelector(".story");
let insertButton = document.querySelector("#set-text");
let removeButton = document.querySelector("#clear-text");

insertButton.addEventListener("click", function(){
    text.innerHTML = "Hey you! How are you doing, hope everything is good";
})

removeButton.addEventListener("click", function(){
    text.textContent = "";
})