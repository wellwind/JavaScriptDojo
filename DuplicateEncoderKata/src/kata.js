"use strict";
function kata(input) {
    var symbOnlyOnce = '(';
    var symbMoreOnce = ')';
    var characterDisplayTimes = {};
    var characters = input.split('');
    characters.forEach(function (value, index) {
        var char = value.toUpperCase();
        if (characterDisplayTimes[char] === undefined) {
            characterDisplayTimes[char] = 1;
        }
        else {
            ++characterDisplayTimes[char];
        }
    });
    var result = "";
    characters.forEach(function (value, index) {
        if (characterDisplayTimes[value.toUpperCase()] === 1) {
            result += symbOnlyOnce;
        }
        else {
            result += symbMoreOnce;
        }
    });
    return result;
}
exports.kata = kata;
