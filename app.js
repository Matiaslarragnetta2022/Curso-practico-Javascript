const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const Tie = 0;
const Win = 1;
const Lost = 2;


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


rockBtn.addEventListener("click", () =>{
    play(rock);
});
paperBtn.addEventListener("click", () =>{
    play(paper);
});
scissorsBtn.addEventListener("click", () =>{
    play(scissors);
});

function play(userOption){
    const machineOption = calcMachineOption();
    const result = calcResult(userOption, machineOption);

    userImg.src = "Img/"+userOption+".png";
    machineImg.src = "Img/"+machineOption+".png";

    switch(result){
        case Tie:
            resultText.innerHTML = "You tied!";
            break;
            case Win:
                resultText.innerHTML = "You win!";
                
                break;
                case Lost:
                    resultText.innerHTML = "You lost!";
                    break;
    }
  

}

function calcMachineOption(){
 const number =   Math.floor(Math.random() * 3);
 switch (number){
     case 0:
         return rock;
         case 1:
             return paper;
             case 2:
             return scissors;

 }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return Tie;

    } else if (userOption === rock) {

        if (machineOption === paper) return Lost;
        if (machineOption === scissors) return Win;

    } else if (userOption === paper) {

        if (machineOption === scissors) return Lost;
        if (machineOption === rock) return Win;

    } else if (userOption === scissors) {

        if (machineOption === rock) return Lost;
        if (machineOption === paper) return Win;

    }
}
