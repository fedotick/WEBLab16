// 1
function encryptData(number) {
    let numbers = numToArr(number);

    if (numbers.length != 4) return "Упс! Возможно вы ввели не 4-х значное число";
    
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = (parseInt(numbers[i]) + 7) % 10;
    }

    [numbers[0], numbers[2]] = [numbers[2], numbers[0]]

    return numbers.join('');
}

let numToArr = (n) => String(n).split('');

alert(encryptData(1234));

// 2
document.getElementById('a').addEventListener('input',  triangle);
document.getElementById('b').addEventListener('input',  triangle);
document.getElementById('c').addEventListener('input',  triangle);

function triangle() {
    const a = +document.getElementById('a').value;
    const b = +document.getElementById('b').value;
    const c = +document.getElementById('c').value;

    if (!isTriangle(a, b, c)) {
        document.getElementById('perimeter').innerHTML = "";
        document.getElementById('area').innerHTML = "";
        document.getElementById('kind').innerHTML = "";
        return;
    }
    
    const p = (a + b + c) / 2;
    let kind = "Произвольный"; 

    if (isEquilateralTriangle(a, b, c)) kind = "Равносторонний"
    else if (isIsoscelesTriangle(a, b, c) || isIsoscelesTriangle(b, c, a) || isIsoscelesTriangle(c, a, b)) kind = "Равнобедренный";

    document.getElementById('perimeter').innerHTML = a + b + c;
    document.getElementById('area').innerHTML = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
    document.getElementById('kind').innerHTML = kind;
}

let isTriangle = (a, b, c) => (a + b > c && a + c > b && b + c > a);

let isEquilateralTriangle = (a, b, c) => (a == b && b == c);
let isIsoscelesTriangle = (a, b, c) => (a == b && a != c);

// let isRightTriangle = (a, b, c) => (a * a + b * b == c * c);
// let isAcuteTriangle = (a, b, c) => (a * a + b * b > c * c);
// let isObtuseTriangle = (a, b, c) => (a * a + b * b < c * c);

// 3
document.getElementById('x1').addEventListener('input',  distanta);
document.getElementById('y1').addEventListener('input',  distanta);
document.getElementById('x2').addEventListener('input',  distanta);
document.getElementById('y2').addEventListener('input',  distanta);

function distanta() {
    const x1 = document.getElementById('x1').value;
    const y1 = document.getElementById('y1').value;
    const x2 = document.getElementById('x2').value;
    const y2 = document.getElementById('y2').value;

    if (x1 == "" || y1 == "" || x2 == "" || y2 == "") document.getElementById('distance').innerHTML = ""
    else document.getElementById('distance').innerHTML = distance(x1, y1, x2, y2);
}

let distance = (x1, y1, x2, y2) => (Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
