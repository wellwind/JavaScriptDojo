"use strict";
function kata(input) {
    var score = 0;
    input.split('').forEach(function (ch, index) {
        if (ch == '(') {
            ++score;
        }
        else if (ch == ')') {
            if (index === 0) {
                return false;
            }
            --score;
        }
    });
    return score === 0;
}
exports.kata = kata;
