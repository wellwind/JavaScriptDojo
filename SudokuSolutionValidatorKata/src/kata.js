"use strict";
function kata(board) {
    throw Error();
}
exports.kata = kata;
function arrayValidate(array) {
    var tmp = [];
    if (Math.min.apply(Math, array) !== 1)
        return false;
    if (Math.max.apply(Math, array) !== 9)
        return false;
    if (array.length !== 9)
        return false;
    for (var i = 0; i < 9; ++i) {
        if (tmp[array[i]] !== undefined) {
            return false;
        }
        tmp[array[i]] = true;
    }
    return true;
}
exports.arrayValidate = arrayValidate;
