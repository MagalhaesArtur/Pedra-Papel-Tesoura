let playerName;
let nameOfPlayer = document.querySelector(".nameHuman");
let messages = document.querySelector(".messages");

let machineChoise;
let humanChoise;

let hpoints = 0;
let mpoints = 0;

let choisePaper = document.querySelector(".playerChoisePaper");
let choiseRock = document.querySelector(".playerChoiseRock");
let choiseScissors = document.querySelector(".playerChoiseScissors");

let mchoisePaper = document.querySelector(".machineChoisePaper");
let mchoiseRock = document.querySelector(".machineChoiseRock");
let mchoiseScissors = document.querySelector(".machineChoiseScissors");

let humanPoints = document.querySelector(".humanPoints");
let machinePoints = document.querySelector(".machinePoints");

const getPlayerName = () => {
  playerName = prompt("Qual o seu nome?");

  while (playerName === "" || playerName === null) {
    playerName = prompt("Qual o seu nome?");
    if (playerName !== "" && playerName !== null) {
      break;
    }
  }
};

getPlayerName();
nameOfPlayer.innerHTML = playerName;
messages.innerText = `Olá ${playerName}, bem-vindo! Escolha uma das três opções para jogar.`;

// 0:draw/ 1:human victory/ 2: human defeat
const calculateMatch = (humanChoise, machineChoise) => {
  if (humanChoise === 1 && machineChoise === 1) {
    return 0;
  } else if (humanChoise === 1 && machineChoise === 2) {
    return 1;
  } else if (humanChoise === 1 && machineChoise === 3) {
    return 2;
  } else if (humanChoise === 2 && machineChoise === 1) {
    return 2;
  } else if (humanChoise === 2 && machineChoise === 2) {
    return 0;
  } else if (humanChoise === 2 && machineChoise === 3) {
    return 1;
  } else if (humanChoise === 3 && machineChoise === 1) {
    return 1;
  } else if (humanChoise === 3 && machineChoise === 2) {
    return 2;
  } else if (humanChoise === 3 && machineChoise === 3) {
    return 0;
  }
};

const sortear = () => {
  return Math.floor(Math.random() * 3 + 1);
};

// 1 -paper/ 2- rock/ 3-scissors
const play = (choise) => {
  machineChoise = sortear();
  if (machineChoise === 1) {
    mchoiseScissors.classList.remove("machineSelected");
    mchoiseRock.classList.remove("machineSelected");
    mchoisePaper.classList.remove("machineSelected");

    mchoisePaper.classList.add("machineSelected");
  }
  if (machineChoise === 2) {
    mchoiseScissors.classList.remove("machineSelected");
    mchoiseRock.classList.remove("machineSelected");
    mchoisePaper.classList.remove("machineSelected");

    mchoiseRock.classList.add("machineSelected");
  }
  if (machineChoise === 3) {
    mchoiseScissors.classList.remove("machineSelected");
    mchoiseRock.classList.remove("machineSelected");
    mchoisePaper.classList.remove("machineSelected");

    mchoiseScissors.classList.add("machineSelected");
  }
  humanChoise = choise;
  console.log(humanChoise, machineChoise);
};

const winner = () => {
  let result = calculateMatch(humanChoise, machineChoise);
  console.log("result", result);
  if (result === 0) {
    messages.innerText = "Deu empate!";
  } else if (result === 1) {
    hpoints++;
    messages.innerText = `Parabéns ${playerName}, você venceu!`;

    humanPoints.innerText = `${hpoints}`;
  } else if (result === 2) {
    mpoints++;
    machinePoints.innerText = `${mpoints}`;
    messages.innerText = `A máquina venceu :( !`;
  }
};

choisePaper.addEventListener("click", (e) => {
  e.preventDefault();

  play(1);
  winner(humanChoise, machineChoise);
});

choiseRock.addEventListener("click", (e) => {
  e.preventDefault();

  play(2);
  winner(humanChoise, machineChoise);
});

choiseScissors.addEventListener("click", (e) => {
  e.preventDefault();

  play(3);
  winner(humanChoise, machineChoise);
});
