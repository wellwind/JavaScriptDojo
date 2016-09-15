export function kata(sequence : Array<number>) : boolean {
  let diff: number = sequence[1] - sequence[0];

  for(var index = 2; index < sequence.length; ++index) {
      let currentDiff : number = sequence[index] - sequence[index - 1];
      if(diff != currentDiff) {
        return false;
      }
  }
  
  return true;
} 
