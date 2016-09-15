"use strict";
function kata(input) {
    var score = 0;
    var chars = input.split('');
    for (var index = 0; index < chars.length; ++index) {
        var ch = chars[index];
        if (ch == '(') {
            ++score;
        }
        else if (ch == ')') {
            if (score == 0) {
                return false;
            }
            --score;
        }
    }
    return score === 0;
}
exports.kata = kata;
