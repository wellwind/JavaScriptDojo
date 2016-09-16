export function kata(input: string): string {
    let symbOnlyOnce = '(';
    let symbMoreOnce = ')';

    let characters = input.split('');

    let characterDisplayTimes = {};

    characters.forEach(function(value, index) {
        if (characterDisplayTimes[value] === undefined) {
            characterDisplayTimes[value] = 1;
        } else {
            ++characterDisplayTimes[value];
        }
    });

    let result = "";
    characters.forEach(function(value, index) {
        if (characterDisplayTimes[value] === 1) {
            result += symbOnlyOnce;
        } else {
            result += symbMoreOnce;
        }
    });
    return result;
}