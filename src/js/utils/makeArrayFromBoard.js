export function makeArrayFromBoard() {
    let col = []
    let row = []
    let boardChildren = document.getElementById('sudoku-grid').children
    for (let i = 0; i < boardChildren.length; i++){
        if (row.length === 9) {
            col.push(row);
            row = []; 
        } 
        row.push(boardChildren[i])
    }
    if (row.length === 9) {
            col.push(row)
            row = []
        }; 
    return col; 
}