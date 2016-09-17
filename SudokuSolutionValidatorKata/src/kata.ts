export function kata(board: Array<Array<number>> ): Boolean {
    // check every rows
    for (let i = 0; i < 9; ++i) {
        if (!arrayValidate(board[i])){
            return false;
        }
    }

    // check every col
    for (let i = 0; i < 9; ++i) {
        let newArr: Array<number> = [];
        for(let j = 0; j < 9; ++j){
            newArr.push(board[j][i]);
        }
        if (!arrayValidate(newArr)) {
            return false;
        }
    }

    // check every 3x3 matrix
    for(let i = 0; i < 9; i += 3){
        for(let j = 0; j < 9; j += 3){
            let newArr: Array<number> = [];
            for(let m = i; m < i + 3; ++m){
                for(let n = j; n < j + 3; ++n){
                    newArr.push(board[m][n]);
                }
            }
            if(!arrayValidate(newArr)) {
                return false;
            }
        }
    }
    return true;
}

export function arrayValidate(array: Array<number> ): Boolean {
    let tmp: Array<Boolean>= [];

    if (Math.min(...array) !== 1) return false;
    if (Math.max(...array) !== 9) return false;
    if (array.length !== 9) return false;

    for (let i = 0; i < 9; ++i) {
        if (tmp[array[i]] !== undefined) {
            return false;
        }
        tmp[array[i]] = true;
    }
    return true;
}