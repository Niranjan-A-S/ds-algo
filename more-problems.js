//!Greatest Common Divisor using Euclidean Algorithm
function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}
// console.log(gcd(3, 4))
//Big-O = O(log(min(a,b)))

//Another approach
function euclidGsd(a, b) {
    if (a == b) return a;
    else if (a > b) {
        return euclidGsd(a - b, b);
    } else {
        return euclidGsd(a, b - a);
    }
}
console.log(euclidGsd(36, 60))

//!Finding permutations and combinations of a list of numbers
//! Find the longest common substring in a given string
//!Knapsack Problem