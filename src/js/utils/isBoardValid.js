export function isBoardValid(board) {

    // fila
    for (let i = 0; i < board.length; i++) {
        let arrayFila = []; 
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] > 0) {
                arrayFila.push(board[i][j])
            }
        }
        if (new Set(arrayFila).size !== arrayFila.length) {
            return false
        }
    }

    //columna
    for (let j = 0; j < 9; j++) {
        let arrayColumna = []
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] > 0) {
                arrayColumna.push(board[i][j])
            }
        }
        if (new Set(arrayColumna).size !== arrayColumna.length) {
            return false
        }
    }

    //cuadrante
    for (let filaCuadrante = 0; filaCuadrante < 9; filaCuadrante += 3) {
        for (let colCuadrante = 0; colCuadrante < 9; colCuadrante += 3){
            let arrayCuadrante = []; 
            
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++){
                    let valor = board[filaCuadrante+i][colCuadrante +j]; 

                    if (valor > 0) {
                        arrayCuadrante.push(valor)
                    }
                }
            }
            if (new Set(arrayCuadrante).size !== arrayCuadrante.length) {
                return false; 
            }
        }
    }

    return true; 
}