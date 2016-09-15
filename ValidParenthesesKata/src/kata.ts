export function kata(input: string): Boolean {
    let score: number = 0;
    input.split('').forEach(function(ch, index) {
        if (ch == '(') {
            ++score;
        } else if (ch == ')') {
            if (index === 0) { // shouldn't start with ")"
                return false;
            }
            --score;
        }
    });
    return score === 0;
}