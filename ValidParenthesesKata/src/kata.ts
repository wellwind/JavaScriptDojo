export function kata(input: string): Boolean {
    let score: number = 0;
    let chars = input.split('');
    for (let index = 0; index < chars.length; ++index) {
        let ch = chars[index];
        if (ch == '(') {
            ++score;
        } else if (ch == ')') {
            if (score == 0) { // shouldn't start with ")" at any position
                return false;
            }
            --score;
        }
    }
    return score === 0;
}