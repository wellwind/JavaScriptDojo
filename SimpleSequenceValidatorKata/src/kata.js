"use strict";
function kata(sequence) {
    var diff = sequence[1] - sequence[0];
    for (var index = 2; index < sequence.length; ++index) {
        var currentDiff = sequence[index] - sequence[index - 1];
        if (diff != currentDiff) {
            return false;
        }
    }
    return true;
}
exports.kata = kata;
