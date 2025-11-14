import './style.css'
import { board } from './js/utils/board'; 
import { backtracking } from './js/utils/backtraking';
import {makeArrayFromBoard} from './js/utils/makeArrayFromBoard'; 
import {makeNumberArrayFromBoard} from './js/utils/makeNumberArrayFromBoard'
import { isBoardValid } from './js/utils/isBoardValid';


const sudokuGrid = document.getElementById('sudoku-grid'); 
const solveBtn = document.getElementById('solve-btn')
board(sudokuGrid); 

solveBtn.addEventListener('click', (e) => {
    e.preventDefault
    const numberArray = makeNumberArrayFromBoard()
    const cellsArray = makeArrayFromBoard()
    console.log(numberArray)
    if (isBoardValid(numberArray)) {
        backtracking(numberArray)
    } else {
        alert('El tablero no es válido')
    }
    
    
    console.log(numberArray)
})