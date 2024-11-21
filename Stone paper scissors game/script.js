let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";

}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}


const playGame = (userChoice) =>{
    // console.log("user choice = ",userChoice);

    //comp choice
    const compChoice =genCompChoice();
    // console.log("Comp choice = ",compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock,scissors
            userWin =compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
});

