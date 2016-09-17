export function kata(val1: string, val2: string): string {
    let result = "";

    let tmpVal1 = reverseString(val1);
    let tmpVal2 = reverseString(val2);

    let next = 0;
    for (let i = 0; i < (tmpVal1.length > tmpVal2.length ? tmpVal1.length : tmpVal2.length); ++i) {
        let tmpResult = addTwoDigitOnIndex(tmpVal1, tmpVal2, next, i);

        if (tmpResult >= 10) {
            tmpResult -= 10;
            next = 1;
        } else {
            next = 0;
        }

        result = tmpResult + result;
    }

    if (next === 1) {
        result = "1" + result;
    }

    return removeHeadZero(result);
}

function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

function addTwoDigitOnIndex(tmpVal1: string, tmpVal2: string, next: number, index: number): number {
    let substrA = tmpVal1.substr(index, 1);
    let substrB = tmpVal2.substr(index, 1);

    let valA = (substrA === "" ? 0 : parseInt(substrA));
    let valB = (substrB === "" ? 0 : parseInt(substrB));


    let tmpResult = valA + valB + next;

    return tmpResult;
}

function removeHeadZero(input: string): string {
    var nonZeroHeadIndex = 0;
    for (let i = 0; i < input.length; ++i) {
        if (input[i] === "0") {
            continue;
        } else {
            nonZeroHeadIndex = i;
            break;
        }
    }
    return input.substr(nonZeroHeadIndex);
}