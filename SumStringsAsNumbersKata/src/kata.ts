export function kata(val1: string, val2: string): string {
    let result = "";

    let tmpVal1 = val1.split("").reverse().join("");
    let tmpVal2 = val2.split("").reverse().join("");
    let next = 0;
    for(let i = 0; i < (tmpVal1.length > tmpVal2.length ? tmpVal1.length : tmpVal2.length); ++i){
        let substrA = tmpVal1.substr(i, 1);
        let substrB = tmpVal2.substr(i, 1);

        let valA = (substrA === "" ? 0 : parseInt(substrA));
        let valB = (substrB === "" ? 0 : parseInt(substrB));
        

        let tmpResult = valA + valB + next;

        if(tmpResult >= 10){
            tmpResult -= 10;
            next = 1;
        }else{
            next = 0;
        }

        result = tmpResult + result;
    }

    if(next === 1){
        result = "1" + result;
    }

    return result;
}