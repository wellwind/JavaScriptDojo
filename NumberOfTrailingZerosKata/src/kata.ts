export function kata(n: number): number {
    let count = 0;
    let tmp = 1;
    for (let i = 1; i <= n; ++i) {
        tmp *= i;
        if (tmp % 10 == 0) {
            tmp /= 10;
            ++count;
        } else {
            // keep only last digit
            tmp = tmp % 10;
        }
    }
    return count;
}