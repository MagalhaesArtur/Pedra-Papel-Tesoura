let playerName;
let nameOfPlayer = document.querySelector(".nameHuman");
let messages = document.querySelector(".messages");

let machineChoise;
let humanChoise;

let choisePaper = document.querySelector(".playerChoisePaper");
let choiseRock = document.querySelector(".playerChoiseRock");
let choiseScissors = document.querySelector(".playerChoiseScissors");
// 0:draw/ 1:human victory
const calculateMatch = (humanChoise, machineChoise)=>{
if(humanChoise === )
}

const sortear = () => {
  console.log(Math.floor(Math.random() * 4));
};

// 1 -paper/ 2- rock/ 3-scissors
const play = (choise) => {
  machineChoise = sortear();
  humanChoise = choise;

calculateMatch(humanChoise, machineChoise)
  if
};

const getPlayerName = () => {
  playerName = prompt("Qual o seu nome?");
  console.log(playerName);
  while (playerName === "" || playerName === null) {
    console.log(playerName);
    playerName = prompt("Qual o seu nome?");
    if (playerName !== "" && playerName !== null) {
      break;
    }
  }
};

getPlayerName();
nameOfPlayer.innerHTML = playerName;
messages.innerText = `Olá ${playerName}, bem-vindo!`;

choisePaper.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("paper");
  sortear();
  play(1);
});

choiseRock.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("rock");
  play(2);
});

choiseScissors.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("scissors");
  play(3);
});
