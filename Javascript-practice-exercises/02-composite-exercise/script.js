// let group = document.querySelectorAll('span');
// //let accessor = document.getElementsByTagName('button')[0];
// let paragraph = document.querySelector('p');
let items = document.querySelectorAll('#myList li');

// accessor.addEventListener('click', function() {
//     group.forEach(span => span.textContent = 'Group 3');
//     paragraph.style.color = 'blue';
//     paragraph.style.backgroundColor = 'Yellow';
// });

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function(){
        items[i].style.color = 'red';
    });
    items[i].addEventListener("mouseout", function(){
        items[i].style.color = 'black';
    });
}