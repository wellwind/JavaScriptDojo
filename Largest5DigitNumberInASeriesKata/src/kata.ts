export function kata(digits: string) : number {
    let result = 0;

    let digitArray: Array<number> = [];
    for(let i = 0; i < digits.length - 4; ++i) {
        digitArray.push(parseInt(digits.substr(i, 5)));
    }

    return Math.max(...digitArray);
} 
