let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-game-btn");
let turnDisplay = document.querySelector("#turn-display");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    turnDisplay.textContent = "Player O's turn";
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("o", "x");
    }   
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }   
};

const isBoardFull = () => {
    return Array.from(boxes).every(box => box.innerText !== "");
};

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.classList.add("o");
      turn0 = false;
    } else {
      box.innerText = "X";
      box.classList.add("x");
      turn0 = true;
    }
    box.disabled = true;
    turnDisplay.textContent = turn0 ? "Player O's turn" : "Player X's turn";

    checkWinner();
  });
});

const showWinner = (winner) => {
  if (winner === "draw") {
    msg.innerText = "It's a Draw! Play again.";
  } else {
    msg.innerText = `Congratulations! Winner is ${winner}`;
  }
  disableBoxes();
  msgContainer.classList.remove("hide");
};  

const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" ) {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        winnerFound = true;
        break;
      }
    }
  }
  
  if (!winnerFound && isBoardFull()) {
    showWinner("draw");
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
