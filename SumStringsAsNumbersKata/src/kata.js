"use strict";
function kata(val1, val2) {
    var result = "";
    var tmpVal1 = reverseString(val1);
    var tmpVal2 = reverseString(val2);
    var next = 0;
    for (var i = 0; i < (tmpVal1.length > tmpVal2.length ? tmpVal1.length : tmpVal2.length); ++i) {
        var tmpResult = addTwoDigitOnIndex(tmpVal1, tmpVal2, next, i);
        if (tmpResult >= 10) {
            tmpResult -= 10;
            next = 1;
        }
        else {
            next = 0;
        }
        result = tmpResult + result;
    }
    if (next === 1) {
        result = "1" + result;
    }
    return removeHeadZero(result);
}
exports.kata = kata;
function reverseString(input) {
    return input.split('').reverse().join('');
}
function addTwoDigitOnIndex(tmpVal1, tmpVal2, next, index) {
    var substrA = tmpVal1.substr(index, 1);
    var substrB = tmpVal2.substr(index, 1);
    var valA = (substrA === "" ? 0 : parseInt(substrA));
    var valB = (substrB === "" ? 0 : parseInt(substrB));
    var tmpResult = valA + valB + next;
    return tmpResult;
}
function removeHeadZero(input) {
    var nonZeroHeadIndex = 0;
    for (var i = 0; i < input.length; ++i) {
        if (input[i] === "0") {
            continue;
        }
        else {
            nonZeroHeadIndex = i;
            break;
        }
    }
    return input.substr(nonZeroHeadIndex);
}
