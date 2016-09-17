"use strict";
function kata(val1, val2) {
    var v1 = parseInt(val1);
    var v2 = parseInt(val2);
    if (isNaN(v1))
        v1 = 0;
    if (isNaN(v2))
        v2 = 0;
    return (v1 + v2).toString();
}
exports.kata = kata;
