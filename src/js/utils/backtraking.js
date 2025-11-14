import { isValid } from "./isValid";

export function backtracking(numberArray) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            if (numberArray[i][j] === 0) {
                for (let h = 1; h <= 9; h++) {
                    if (isValid(numberArray, i, j, h)) {
                        numberArray[i][j] = h; 
                        if (backtracking(numberArray) === true) {
                            return true; 
                        } else {
                            numberArray[i][j] = 0; 
                        }
                    } 
                }
                return false
            }
            
        }
    }
    return true
}