let x = 0;
const output = document.getElementById("output");
const meter = document.getElementById("meter");

output.textContent = x;
const plus = () => {
    if( x >= 10){
        return false
    }
    if(x >= 7){
        meter.style.background = "#f00" 
    }
    output.textContent = ++x;
    meter.style.height = x*10+'%'
}

const minus = () => {
    if (x <= 0) {
        return false
    }
    if(x <= 7){
        meter.style.background = "#0f0"
    }
    output.textContent = --x;
    meter.style.height = x*10+'%'
}