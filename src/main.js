let x = 0;
const output = document.getElementById("output");
const meter = document.getElementById("meter");

output.textContent = x;
const plus = () => {
    output.textContent = ++x;
}

const minus = () => {
    output.textContent = --x;
}