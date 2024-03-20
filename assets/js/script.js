// 1
document.getElementById('inputData').addEventListener('input',  encryptData);

function encryptData() {
    const number = document.getElementById('inputData').value;
    let numbers = numToArr(number);

    if (numbers.length != 4) {
        document.getElementById('encryptedData').value = "";
        return;
    }
    
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = (parseInt(numbers[i]) + 7) % 10;
    }

    [numbers[0], numbers[2]] = [numbers[2], numbers[0]]

    document.getElementById('encryptedData').value = numbers.join('');
}

let numToArr = (n) => String(n).split('');

// 2
document.getElementById('a').addEventListener('input',  triangle);
document.getElementById('b').addEventListener('input',  triangle);
document.getElementById('c').addEventListener('input',  triangle);

function triangle() {
    const a = +document.getElementById('a').value;
    const b = +document.getElementById('b').value;
    const c = +document.getElementById('c').value;

    if (!isTriangle(a, b, c)) {
        document.getElementById('perimeter').value = "";
        document.getElementById('area').value = "";
        document.getElementById('kind').value = "";
        return;
    }
    
    const p = (a + b + c) / 2;
    let kind = "Произвольный"; 

    if (isEquilateralTriangle(a, b, c)) kind = "Равносторонний"
    else if (isIsoscelesTriangle(a, b, c) || isIsoscelesTriangle(b, c, a) || isIsoscelesTriangle(c, a, b)) kind = "Равнобедренный";

    document.getElementById('perimeter').value = a + b + c;
    document.getElementById('area').value = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
    document.getElementById('kind').value = kind;
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

    if (x1 == "" || y1 == "" || x2 == "" || y2 == "") document.getElementById('distance').value = ""
    else document.getElementById('distance').value = distance(x1, y1, x2, y2);
}

let distance = (x1, y1, x2, y2) => (Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));

// 4
document.getElementById('electricity').addEventListener('input', calculation);
document.getElementById('heating').addEventListener('input', calculation);
document.getElementById('gas').addEventListener('input', calculation);
document.getElementById('internet').addEventListener('input', calculation);
document.getElementById('phone').addEventListener('input', calculation);

function calculation() {
    const electricity = +document.getElementById('electricity').value;
    const heating = +document.getElementById('heating').value;
    const gas = +document.getElementById('gas').value;
    const internet = +document.getElementById('internet').value;
    const phone = +document.getElementById('phone').value;

    const services = [electricity, heating, gas, internet, phone];
    const sum = services.reduce((a, b) => a + b);

    document.getElementById('sum').value = sum;
}
