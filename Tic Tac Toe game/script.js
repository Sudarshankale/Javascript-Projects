let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerX,playerO



let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
   
    
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        //console.log("Box was clicked");
        if (turnO ===true) {
            box.innerText = "O";
            box.style.color="red";
            turnO = false;
            // count++;
        }
        else{
            box.innerText = "X";
            box.style.color="green";
            turnO = true;
            // count++;
        }
        let A=count;
        box.disabled = true;
        count++;

        let isWinner=checkWinner();

        if (count==9 && !isWinner) {
            gameDraw();
        }
    })
})

const gameDraw = () =>{
    msg.innerText= `Game Was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                //console.log("Winner",pos1Val);

                showWinner(pos1Val);

            }
            // else if(pos1Val != pos2Val || pos2Val != pos3Val){
            //     if(count===9 && msg.innerText=="winner" ){
            //     //     msg.innertext = `Game Draw `;
            //     // // msgContainer.classList.remove("hide");
            //     for(let box of boxes){
            //         if
            //     }
            //     disableBoxes();
            //     }
            // }
        }
       
    }
   
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);