"use strict";
function kata(n) {
    // let count = 0;
    // let tmp = 1;
    // for (let i = 1; i <= n; ++i) {
    //     tmp *= i;
    //     if (tmp % 10 === 0) {
    //         while (tmp % 10 === 0) { // count number of zero trailing
    //             tmp /= 10;
    //             ++count;
    //         }
    //     } else {
    //         // keep only last digit
    //         tmp = tmp % 10;
    //     }
    // }
    // var n = Math.floor(n / 2);
    // if(n == 0){
    //     return 0; 
    // }
    var base = 5;
    var result = 0;
    while (base < n) {
        result += Math.floor(n / base);
        base *= 5;
    }
    return result;
}
exports.kata = kata;
