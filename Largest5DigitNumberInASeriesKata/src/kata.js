"use strict";
function kata(digits) {
    var result = 0;
    var digitArray = [];
    for (var i = 0; i < digits.length - 4; ++i) {
        digitArray.push(parseInt(digits.substr(i, 5)));
    }
    return Math.max.apply(Math, digitArray);
}
exports.kata = kata;
