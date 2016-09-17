export function kata(board: Array<Array<number>>) : Boolean {
    throw Error();
} 

export function arrayValidate(array: Array<number>): Boolean{
    let tmp = [];

    if(Math.min(...array) !== 1) return false;
    if(Math.max(...array) !== 9) return false;
    if(array.length !== 9) return false;
    
    for(let i=0;i < 9; ++i){
        if(tmp[array[i]] !== undefined){
            return false;
        }
        tmp[array[i]] = true;
    }
    return true;
}