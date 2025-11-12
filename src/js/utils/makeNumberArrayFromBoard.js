export function makeNumberArrayFromBoard() {
    let col = []
    let row = []
    let boardChildren = document.getElementById('sudoku-grid').children
    for (let i = 0; i < boardChildren.length; i++){
        if (row.length === 9) {
            col.push(row);
            row = []; 
        } 
        if (boardChildren[i].value === "" ) {
            row.push(0)
        }else {
            row.push(parseInt(boardChildren[i].value))
        }
    }
    if (row.length === 9) {
            col.push(row)
            row = []
        }; 
    return col;  
}