"use strict";
function kata(input) {
    var score = 0;
    input.split('').forEach(function (ch) {
        if (ch == '(') {
            ++score;
        }
        else if (ch == ')') {
            --score;
        }
    });
    return score === 0;
}
exports.kata = kata;
