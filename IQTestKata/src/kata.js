"use strict";
function kata(numbers) {
    var odds = [];
    var evens = [];
    numbers.split(" ").forEach(function (num, index) {
        if (parseInt(num) % 2 == 1) {
            odds.push(index);
        }
        else {
            evens.push(index);
        }
    });
    if (odds.length == 1) {
        return odds[0] + 1;
    }
    else {
        return evens[0] + 1;
    }
}
exports.kata = kata;
