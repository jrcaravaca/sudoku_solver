import { makeArrayFromBoard } from "./makeArrayFromBoard";
import { makeNumberArrayFromBoard } from "./makeNumberArrayFromBoard";

export function backtracking() {
    const cellsArray = makeArrayFromBoard(); 
    const numberArray = makeNumberArrayFromBoard(); 
    console.log(numberArray); 
    
    
    // Siguiente celda
    // Por cada num 1-9
    //      Comprobar segun reglas
    //      Hacer cambio
    //      Llamada recursiva
    //      Falla la llamada
    //      Deshacer el cambio
}