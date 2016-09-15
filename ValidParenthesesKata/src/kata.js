"use strict";
function kata(input) {
    var score = 0;
    var chars = input.split('');
    if (chars[0] == ")") {
        return false;
    }
    chars.forEach(function (ch, index) {
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
