"use strict";
function kata(n) {
    if (n == 1)
        return [1];
    if (n == 2)
        return [1, 1, 1];
    var result = [1, 1, 1];
    var tmp = [1, 1];
    for (var i = 3; i <= n; ++i) {
        var currentLevelData = [];
        currentLevelData.push(1);
        for (var j = 1; j <= i - 2; ++j) {
            currentLevelData.push(tmp[j - 1] + tmp[j]);
        }
        currentLevelData.push(1);
        result.push.apply(result, currentLevelData);
        tmp = currentLevelData;
    }
    return result;
}
exports.kata = kata;
