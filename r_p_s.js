let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//to generate computer choice
const genCompChoice = () => {
    //rock paper scissor
    const options = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () => {
    msg.innerText= "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choic e=", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        //scissor,paper
        {
           userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;
        }else{
            //rock,paper
            compChoice==="rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice)
    }

};

choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);

    });
});