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