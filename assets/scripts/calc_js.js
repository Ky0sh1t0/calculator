
function calcNumber(a, operator,b) {
    return Number(a) + `${operator}` + Number(b); 
}

document.addEventListener('DOMContentLoaded', () => {
    alert(calcNumber("2", "*", "4"));
})