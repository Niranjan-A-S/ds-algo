//!Cartesian Product
const cartesianProduct = (a, b) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            result.push([a[i], b[j]]);
        }
    }

    return result;
}
//Big O: O(mn)
// console.log(cartesianProduct([1, 3], [2, 4, 5]));

//!Climbing staircase problem
const climbingStaircase = (n) => {
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climbingStaircase(n - 2) + climbingStaircase(n - 1);
}
//Big O: O(n)
// this is same as the fibonacci series

//Another solution
const climbingStaircase2 = (n) => {
    const numOfWays = [0, 1];
    for (let i = 2; i <= n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
    }
    return numOfWays[n - 1];
}

//Tower of Hanoi
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${from_rod} to ${to_rod}`);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log(`Move disk ${n} from ${from_rod} to ${to_rod}`);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

towerOfHanoi(4, "A", "C", "B");
//Big O: O(2^n)