const paint = document.getElementById("paint");
const erase = document.getElementById("erase");
const color = document.getElementById("color-input");
const pole = document.querySelectorAll(".pole");
const clear = document.getElementById("clear");
let isPainting = false;
let isErasing = false;
let guzik = 1;
function updateButtonColors(){
    if(guzik == 1){
        paint.style.backgroundColor  = "rgb(227, 236, 239)";
        erase.style.backgroundColor = "rgb(122, 194, 222)";
    }else if(guzik == 2){
        paint.style.backgroundColor  = "rgb(122, 194, 222)";
        erase.style.backgroundColor =  "rgb(227, 236, 239)";
    }
}
updateButtonColors();

clear.addEventListener("click", () =>{
    pole.forEach((div) =>{
        div.style.backgroundColor = "white";
    })
})
erase.addEventListener("click", () =>{
    guzik = 2;
    isErasing = true;
    updateButtonColors();
})
paint.addEventListener('click', () => {
    guzik = 1;
    isErasing = false
    updateButtonColors();
})
addEventListener("mousedown", () =>{
    isPainting = true;
})
addEventListener("mouseup", () =>{
    isPainting = false;
})
pole.forEach((div) => {
    div.addEventListener('mouseover',() =>{
        if(isPainting == true && isErasing == false){
            div.style.backgroundColor = color.value;
        }else if(isPainting == true && isErasing == true){
            div.style.backgroundColor = 'white';
        }else{
            return
        }
        
    })
})
