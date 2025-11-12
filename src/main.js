import './style.css'
import { board } from './js/utils/board'; 
import { backtracking } from './js/utils/backtraking';

const sudokuGrid = document.getElementById('sudoku-grid'); 
const solveBtn = document.getElementById('solve-btn')
board(sudokuGrid); 

solveBtn.addEventListener('click', (e) => {
    e.preventDefault
    backtracking()
})