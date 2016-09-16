export function kata(input: string): string {
    let symbOnlyOnce = '(';
    let symbMoreOnce = ')';

    let characterDisplayTimes = {};

    let characters = input.split('');
    characters.forEach(function (value, index) {
        let char = value.toUpperCase()
        if (characterDisplayTimes[char] === undefined) {
            characterDisplayTimes[char] = 1;
        }
        else {
            ++characterDisplayTimes[char];
        }
    });

    var result = "";
    characters.forEach(function (value, index) {
        if (characterDisplayTimes[value.toUpperCase()] === 1) {
            result += symbOnlyOnce;
        }
        else {
            result += symbMoreOnce;
        }
    });
    return result;
}