const score = document.querySelector(".page__score"),
      [player, computer] = document.querySelectorAll(".page__item"),
      buttons = document.querySelector(".page__buttons");

// Link to image 
const items = {
    rock: "/img/rock.png",
    paper: "/img/paper.png",
    scissor: "/img/scissors.png"
}


const totalButtlegound = {
    rock: {
        paper: "Lose",
        rock: "Drow",
        scissor: "Win"
    },
    paper: {
        paper: "Drow",
        rock: "Win",
        scissor: "Lose"
    },
    scissor: {
        paper: "Win",
        rock: "Lose",
        scissor: "Drow"
    }
}

const fillBackground = {
    colorWin: "#b7c8b4 ",
    colorLose: "#b05d59",
    colorDefault: "#224656"
}

let scorePlayer = 0,
    scoreComputer = 0;
function onButtonClick(event) {
    const current = event.target.dataset.action;
    
    if (!current) return;

    player.setAttribute("src", items[current]);

    const itemComputer = Object.keys(items)[Math.floor(Math.random() * 3)];
    computer.setAttribute("src", items[itemComputer]);

    const total = totalButtlegound[current][itemComputer],
          boxPlayer = player.closest(".page__column"),
          boxComputer = computer.closest(".page__column");
    
    if (total == "Win") {
        scorePlayer += 1;
        boxPlayer.style.background = fillBackground.colorWin;
        boxComputer.style.background = fillBackground.colorLose;
    } else if (total == "Lose") {
        scoreComputer += 1;
        boxPlayer.closest(".page__column").style.background = fillBackground.colorLose;
        boxComputer.closest(".page__column").style.background = fillBackground.colorWin;
    } else {
        boxPlayer.closest(".page__column").style.background = fillBackground.colorDefault;
        boxComputer.closest(".page__column").style.background = fillBackground.colorDefault;
    }

    score.textContent = `${scorePlayer}:${scoreComputer}`;
}

buttons.addEventListener("click", onButtonClick);