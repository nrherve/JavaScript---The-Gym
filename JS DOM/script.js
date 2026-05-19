let button = document.getElementById("Introduction");
let container = document.getElementById('Container');
button.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.innerText = "MY name is Herve, I am a student at Kepler College and I am 21 years old.";
    container.appendChild(paragraph);
    paragraph.style.backgroundColor = 'lightblue';

});