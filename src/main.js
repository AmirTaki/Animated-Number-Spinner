let x = 0;
const output = document.getElementById("output");
const meter = document.getElementById("meter");

output.textContent = x;
const plus = () => {
    if( x >= 10){
        return false
    }
    output.textContent = ++x;
}

const minus = () => {
    if (x <= 0) {
        return false
    }
    output.textContent = --x;
}