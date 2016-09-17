"use strict";
function kata(n) {
    var base = 5;
    var result = 0;
    while (base < n) {
        result += Math.floor(n / base);
        base *= 5;
    }
    return result;
}
exports.kata = kata;
