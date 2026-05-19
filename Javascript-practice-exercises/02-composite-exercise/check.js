let num1 = document.getElementById('f1num');
let num2 = document.getElementById('f2num');
let operation = document.getElementById('operation');
let button = document.querySelector('button');
let output = document.getElementById('Output');

button.addEventListener('click', function () {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let op = operation.value;

    if (op === "+") {
        output.textContent = n1 + n2;
    } else if (op === "*") {
        output.textContent = n1 * n2;
    } else if (op === "/") {
        output.textContent = n1 / n2;
    } else {
        output.textContent = "Invalid operation";
    }
});