export function kata(input: string) : Boolean {
    let score: number = 0;
    input.split('').forEach(function(ch){
        if(ch == '('){
            ++score;
        }else if(ch == ')'){
            --score;
        }
    });
    return score === 0;
} 
