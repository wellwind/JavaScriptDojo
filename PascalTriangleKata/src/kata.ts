export function kata(n): number[] {
    if (n == 1) return [1];
    if (n == 2) return [1, 1, 1];

    let result: number[] = [1, 1, 1];
    let tmp: number[] = [1, 1];
    for (var i = 3; i <= n; ++i) {
        var currentLevelData = [];

        currentLevelData.push(1);
        for (let j = 1; j <= i - 2; ++j) {
            currentLevelData.push(tmp[j - 1] + tmp[j]);
        }
        currentLevelData.push(1);

        result.push(...currentLevelData);
        tmp = currentLevelData;
    }
    return result;
}