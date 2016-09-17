"use strict";
function kata(board) {
    // check every rows
    for (var i = 0; i < 9; ++i) {
        if (!arrayValidate(board[i])) {
            return false;
        }
    }
    // check every col
    for (var i = 0; i < 9; ++i) {
        var newArr = [];
        for (var j = 0; j < 9; ++j) {
            newArr.push(board[j][i]);
        }
        if (!arrayValidate(newArr)) {
            return false;
        }
    }
    // check every 3x3 matrix
    for (var i = 0; i < 9; i += 3) {
        for (var j = 0; j < 9; j += 3) {
            var newArr = [];
            for (var m = i; m < i + 3; ++m) {
                for (var n = j; n < j + 3; ++n) {
                    newArr.push(board[m][n]);
                }
            }
            if (!arrayValidate(newArr)) {
                return false;
            }
        }
    }
    return true;
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
