//Fibonacci series

function fibonacci(n) {
    const result = [0, 1];
    if (n === 1) return [0];
    if (n === 2) return result;
    for (let i = 2; i < n; i++) {
        result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
}
//Big O = O(n)
// console.log(fibonacci(8))

//Another approach
function fibonacci1(n) {
    if (n === 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}
//Big O = O(n)
// console.log(fibonacci1(7))

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}
//Big O = O(n)
// console.log(factorial(1))


function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) { // here instead of checking with the condition i < Math.sqrt(n) we are checking with the condition i < n if that is the case the time complexity will be O(sqrt(n))
        if (n % i === 0) return false;
    }
    return true;
}
//Big O = O(n)

function isPowerOfTwo(n) {
    if (n < 2) return false;
    while (n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
}
//Big O = O(logn)

function isPowerOfTwoBetter(n) {
    if (n < 2) return false;
    return (n & (n - 1)) === 0;
}
//Big O = O(1)
