//1
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


let result = factorial(5); 
alert(result);

//2
function printNumbersInRange(start, end) {
    if (start <= end) {
        console.log(start);
        printNumbersInRange(start + 1, end);
    }
}

function printNumbersInReverseOrder(start, end) {
    if (start <= end) {
        printNumbersInReverseOrder(start + 1, end);
        alert(start);
    }
}


printNumbersInRange(1, 5); 
printNumbersInReverseOrder(1, 5); 

//3
function reverseNumber(n) {
    const strN = String(n);
    if (strN.length === 1) {
        return n;
    } else {
        const lastDigit = Number(strN.slice(-1));
        const remainingDigits = Number(strN.slice(0, -1));
        return Number(`${lastDigit}${reverseNumber(remainingDigits)}`);
    }
}


let palindromeResult = reverseNumber(1234);
alert(palindromeResult);

//4
function sumOfDigits(n) {
    const strN = String(n);
    if (strN.length === 1) {
        return n;
    } else {
        const lastDigit = Number(strN.slice(-1));
        const remainingDigits = Number(strN.slice(0, -1));
        return lastDigit + sumOfDigits(remainingDigits);
    }
}


let sumResult = sumOfDigits(1357);
alert(sumResult);

//5
function nestedPairsCount(n) {
    if (n === 0) {
        return 0;
    } else {
        return n - 1 + nestedPairsCount(n - 1);
    }
}


let nestedPairsResult = nestedPairsCount(4);
alert(nestedPairsResult);
