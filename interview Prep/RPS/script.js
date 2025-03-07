
// get player1 value
let choice = ["rock", "paper", "scissors"];

function playerOneSelection() {
  let p1 = document.getElementById("myDropdown").value;

  return choice[p1];
}

function playerTwoSelection() {
  return choice[Math.round(Math.random() * 2)];
}

let playerCount1 = 0;
let playerCount2 = 0;



function textChange(text) {
    document.getElementById("result").innerText = text;
    
}

let PalyGame = () => {
  let player1 = playerOneSelection();
  let player2 = playerTwoSelection();
  document.getElementById("player2").innerText = player2;


  if (player1 == "rock" && player2 == "paper") {
    text = "Player 2 won ";
    textChange(text)


    playerCount2++
    return;
}
if (player1 == "rock" && player2 == "scissors") {
    text = "Player 1 won ";
    textChange(text)
    
    document.getElementById("result").innerText = text;
    playerCount1++
    return;
  }
  if (player1 == "paper" && player2 == "scissors") {
    text = "Player 2 won ";
    textChange(text)
    playerCount2++
    return;
  }
  if (player1 == "paper" && player2 == "rock") {
    text = "Player 1 won ";
    textChange(text)

    playerCount1++
    
    return;
  }
  if (player1 == "scissors" && player2 == "rock") {
    text = "Player 2 won ";
    textChange(text)

    playerCount2++
    return;
  }
  if (player1 == "scissors" && player2 == "paper") {
    text = "Player 1 won ";
    textChange(text)

    playerCount1 ++;
    return;
  }

  if (player1 == player2) {
    text = "DRAW";
    textChange(text)

  }

  console.log(playerCount1)
  console.log(playerCount2)
 
};
 