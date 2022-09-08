console.time("timer");
const number = fiveThousand();
console.log(number);
console.timeEnd("timer");

// 5000
function fiveThousand() {
    return (
        (lim(f, -6) ** 5 - (lim(g, 0) ** 2 - 60 / 5)) *
        Math.sqrt(
            geometricSeriesSum(12 / 13) ** 2 - lim(h, Infinity) ** 2
        )
    );
}

/**
 * @param {number} x
 */
function f(x) {
    return (x ** 2 - 100) / (x - 10);
}

/**
 * @param {number} x
 */
function g(x) {
    return (Math.E ** (6 * x) - 1) / x;
}

/**
 * @param {number} x
 */
function h(x) {
    return (36 * x ** 3 + 11 * x) / (3 * x ** 3);
}

/**
 * @param {{ (x: any): number; (x: any): number; (x: any): number; (arg0: number): any; }} func
 * @param {number} x
 * @return The limit of a function
 */
function lim(func, x) {
    x = x == Infinity ? 2 ** 31 : x == -Infinity ? -(2 ** 31) : x;
    const h = 1 / 2 ** 31;
    return (func(x - h) + func(x + h)) / 2;
}

/**
 * @param {number} val The fractional value
 * @return The sum of the sequence
 */
function geometricSeriesSum(val) {
    const h = 100000000;
    let sum = 0;
    for (let i = 0; i < h; i++) {
        sum += val ** i;
    }
    return sum;
}
// -00---
// cconsole.time("timer");
// const number = fiveThousand();
// console.log(number);
// console.timeEnd("timer");

// // 5000
// function fiveThousand() {
//     return (
//         (lim(f, -6) ** 5 - (lim(g, 0) ** 2 - 60 / 5)) *
//         Math.sqrt(
//             geometricSeriesSum(12 / 13) ** 2 - lim(h, Infinity) ** 2
//         )
//     );
// }

// /**
//  * @param {number} x
//  */
// function f(x) {
//     return (x ** 2 - 100) / (x - 10);
// }

// /**
//  * @param {number} x
//  */
// function g(x) {
//     return (Math.E ** (6 * x) - 1) / x;
// }

// /**
//  * @param {number} x
//  */
// function h(x) {
//     return (36 * x ** 3 + 11 * x) / (3 * x ** 3);
// }

// /**
//  * @param {{ (x: any): number; (x: any): number; (x: any): number; (arg0: number): any; }} func
//  * @param {number} x
//  * @return The limit of a function
//  */
// function lim(func, x) {
//     x = x == Infinity ? 2 ** 31 : x == -Infinity ? -(2 ** 31) : x;
//     const h = 1 / 2 ** 31;
//     return (func(x - h) + func(x + h)) / 2;
// }

// /**
//  * @param {number} val The fractional value
//  * @return The sum of the sequence
//  */
// function geometricSeriesSum(val) {
//     const h = 100000000;
//     let sum = 0;
//     for (let i = 0; i < h; i++) {
//         sum += val ** i;
//     }
//     return sum;
// }onsole.time("timer");
// const number = fiveThousand();
// console.log(number);
// console.timeEnd("timer");

// // 5000
// function fiveThousand() {
//     return (
//         (lim(f, -6) ** 5 - (lim(g, 0) ** 2 - 60 / 5)) *
//         Math.sqrt(
//             geometricSeriesSum(12 / 13) ** 2 - lim(h, Infinity) ** 2
//         )
//     );
// }

// /**
//  * @param {number} x
//  */
// function f(x) {
//     return (x ** 2 - 100) / (x - 10);
// }

// /**
//  * @param {number} x
//  */
// function g(x) {
//     return (Math.E ** (6 * x) - 1) / x;
// }

// /**
//  * @param {number} x
//  */
// function h(x) {
//     return (36 * x ** 3 + 11 * x) / (3 * x ** 3);
// }

// /**
//  * @param {{ (x: any): number; (x: any): number; (x: any): number; (arg0: number): any; }} func
//  * @param {number} x
//  * @return The limit of a function
//  */
// function lim(func, x) {
//     x = x == Infinity ? 2 ** 31 : x == -Infinity ? -(2 ** 31) : x;
//     const h = 1 / 2 ** 31;
//     return (func(x - h) + func(x + h)) / 2;
// }

// /**
//  * @param {number} val The fractional value
//  * @return The sum of the sequence
//  */
// function geometricSeriesSum(val) {
//     const h = 100000000;
//     let sum = 0;
//     for (let i = 0; i < h; i++) {
//         sum += val ** i;
//     }
//     return sum;
// }
