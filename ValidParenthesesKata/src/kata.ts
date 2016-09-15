export function kata(input: string): Boolean {
    let score: number = 0;
    let chars = input.split('');
    if (chars[0] == ")") { // shouldn't start with ")"
        return false;
    }

    chars.forEach(function(ch, index) {
        if (ch == '(') {
            ++score;
        } else if (ch == ')') {
            --score;
        }
    });
    return score === 0;
}