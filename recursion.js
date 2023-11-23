function recursiveFibonacci(n) {
    if (n <= 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(5))
//Big O = O(2^n)

function recursiveFactorial(n) {
    return (n < 2) ? 1 : n * recursiveFactorial(n - 1);
}
//Big O = O(n)