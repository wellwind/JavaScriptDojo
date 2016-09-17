export function kata(n: number): number {
    let base = 5;
    let result = 0;
    while(base < n){
        result += Math.floor(n / base);
        base *= 5;
    }
    return result;
}