//Algorithm is a set of well defined steps to solve a problem

//Characteristics of an algorithm
//1. Input
//2. Process
//3. Output

//The absolute running time of an algorithm can not be predicted, since it depends on a number of factors
//1 Programming language that is used to implement the algorithm
//2 The computer the program runs on
//3 Other programs running at the same time
//4 Quality of the OS
//5 So on...........

// So we evaluate the performance of an algorithm by terms of its input size
//! Time Complexity: Amount of time taken by an algorithm to run, as a function of the input size
//! Space Complexity: Amount of memory used by an algorithm to run, as a function of the input size

//How to represent the complexity?
//Asymptotic notation: Mathematical tools to represent  time and space complexity
//! Big O notation O(n): Worst case  complexity
//! Omega notation Omega(n): Best case complexity
//! Theta notation Theta(n): Average case complexity

function summation(n) {
    let sum = 0 //-----1
    for (let i = 0; i <= n; i++) {
        sum += i; //-----n
    }
    return sum; //-----1
}
//Time Complexity: O(n) since 2 is ignored -- Linear Time

//another approach   to same problem
function summation2(n) {
    return n * (n + 1) / 2
}
//Time Complexity: O(1) : Constant Time

//Two nested loops: O(n^2): Quadratic Time
//Three nested loops: O(n^3): Cubic Time

//*Objects: Big O
//!insertion: O(1)
//!removal: O(1)
//!access: O(1)
//!search: O(n)
//!object.keys: O(n)
//!object.values: O(n)
//!object.entries: O(n)

//*Arrays: Big O
//!insertion/removal at the end: O(1)
//!insertion/removal at the beginning: O(n)
//!access: O(1)
//!search: O(n)
//!push/pop: O(1)
//!shift/unshift/concat/slice/splice: O(n)
//!forEach/map/filter/reduce: O(n)
