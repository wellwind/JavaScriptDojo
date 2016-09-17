"use strict";
function kata(n) {
    var count = 0;
    var tmp = 1;
    for (var i = 1; i <= n; ++i) {
        tmp *= i;
        if (tmp % 10 == 0) {
            tmp /= 10;
            ++count;
        }
        else {
            // keep only last digit
            tmp = tmp % 10;
        }
    }
    return count;
}
exports.kata = kata;
