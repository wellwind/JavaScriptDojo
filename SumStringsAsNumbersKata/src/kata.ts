export function kata(val1: string, val2: string): string {
    let v1 = parseInt(val1);
    let v2 = parseInt(val2);

    if(isNaN(v1)) v1 = 0;
    if(isNaN(v2)) v2 = 0;

    return (v1 + v2).toString();
}