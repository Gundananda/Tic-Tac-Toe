let boxes = document.querySelectorAll(".box");
let rst_btn = document.querySelector("#rst_btn");
let newGame_btn = document.querySelector("#newGame_btn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");



let turnX = true;
let count = 0;

boxes.forEach(box => {
    box.addEventListener("click",() => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        console.log("button clicked")
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }


    });
});

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        //     if (pos1Val === pos2Val && pos2Val === pos3Val) {
        //         console.log("winner",pos1Val);
        //         showWinner(pos1Val);
        //         return;
        //     }
        // }
        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
            return; 
        }
    }
} 



const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msg_container.classList.add("hide");
    rst_btn.classList.remove("hide");
}

rst_btn.addEventListener("click",resetGame);
newGame_btn.addEventListener("click",resetGame);


const showWinner = (winner) => {
    msg.innerText = "Congratulations, winner is "+winner;
    msg_container.classList.remove("hide");
    rst_btn.classList.add("hide");
    disableBoxes();
}

const gameDraw = () => {
    msg.innerText = "Game was a Draw";
    msg_container.classList.remove("hide");
    rst_btn.classList.add("hide");
    disableBoxes();
}