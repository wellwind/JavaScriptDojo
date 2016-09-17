"use strict";
function kata(val1, val2) {
    var result = "";
    var tmpVal1 = val1.split("").reverse().join("");
    var tmpVal2 = val2.split("").reverse().join("");
    var next = 0;
    for (var i = 0; i < (tmpVal1.length > tmpVal2.length ? tmpVal1.length : tmpVal2.length); ++i) {
        var substrA = tmpVal1.substr(i, 1);
        var substrB = tmpVal2.substr(i, 1);
        var valA = (substrA === "" ? 0 : parseInt(substrA));
        var valB = (substrB === "" ? 0 : parseInt(substrB));
        var tmpResult = valA + valB + next;
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
    return result;
}
exports.kata = kata;
