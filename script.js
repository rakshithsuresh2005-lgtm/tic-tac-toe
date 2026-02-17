const gameContainer = document.querySelector(".game-container");
const btn = document.querySelectorAll(".box");
const controls = document.querySelector(".controls");
const controlBtn = document.querySelectorAll(".control-btn");
const h1 = document.querySelector(".h1class");
let gameover = false;


let current0 = true;

let patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
btn.forEach((btns) => {
    btns.addEventListener("click", (event) =>{
        if(btns.innerText !== "") return;
        if(current0 === true){
            btns.innerText = "O";
            current0 = false;
        }
        else {
            btns.innerText = "X";
            current0 = true;
        }
        winner(patterns, btn);
    });
});

let winner = (patterns, btn) =>{
    patterns.forEach((pattern) => {
        let pos1 = btn[pattern[0]].innerText
        let pos2 = btn[pattern[1]].innerText
        let pos3 = btn[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if (pos1 === pos2 && pos2 === pos3){
            h1.innerText = ` Winner is ${pos1}`
            gameover = true;
            current0 = true;
            btn.forEach((btns) => {
                btns.disabled = true;
            });
        }

        }
    });

}





controlBtn[0].addEventListener("click", () => {
    if (gameover){
       reset();
       gameover = false;
       

    }
    

});

controlBtn[1].addEventListener("click", () => {
    if (gameover !== true){
        reset();
        

    }
    

});


function reset(){
    btn.forEach((btns) => {
        btns.disabled = false;
        btns.innerText = "";
    });
    h1.innerText = "Tic Tac Toe";

}
