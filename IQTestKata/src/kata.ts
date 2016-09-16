export function kata(numbers: string): number {
    let odds: Array<number> = [];
    let evens: Array<number> = [];
    numbers.split(" ").forEach(function(num: string, index: number) {
        if(parseInt(num) % 2 == 1) {// odds
            odds.push(index);
        } else {
            evens.push(index);
        }
    });

    if (odds.length == 1) {
        return odds[0] + 1;
    } else {
        return evens[0] + 1;
    }
}