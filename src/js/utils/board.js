export function board(container) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('input'); 
            cell.maxLength = 1; 
            cell.type = "text"
            cell.classList.add("aspect-square","border", "w-12", "text-center")
            cell.addEventListener('keypress',(e) => {
        
                if (!(parseInt(e.key) <= 9 && parseInt(e.key) > 0)) {
                    e.preventDefault()
                }
            })
            container.appendChild(cell)
        }
    }

}