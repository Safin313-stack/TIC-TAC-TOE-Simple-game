<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=Tic+Tac+Toe&fontSize=58&fontColor=ffffff&fontAlignY=38&desc=A+simple+two-player+Tic+Tac+Toe+game+built+with+HTML%2C+CSS+and+JavaScript&descAlignY=60&descSize=14&descColor=94a3b8" width="100%"/>

<br/>

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-0ea5e9?style=flat-square&logo=github)](https://safin313-stack.github.io/TIC-TAC-TOE-Simple-game/)
[![Stars](https://img.shields.io/badge/Stars-⭐%202-f97316?style=flat-square)]()
[![First Project](https://img.shields.io/badge/🏆%20First-Website%20Ever-gold?style=flat-square)]()

<br/>

<a href="https://safin313-stack.github.io/TIC-TAC-TOE-Simple-game/">
  <img src="https://img.shields.io/badge/-%E2%9D%8C%20%20LIVE%20DEMO%20%20%E2%86%92-302b63?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

> 🏆 **This is the project where it all began — my very first website ever built.**
> Simple code, big milestone. Every expert was once a beginner. 🚀

</div>

---

<div align="center">

### ❌ Features

| 👥 Two Players | 🏆 Win Detection | 🤝 Draw Detection | 🔄 Restart | 💡 Turn Indicator | 📱 Responsive |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Player X and Player O take turns | Detects all 8 winning combinations | Detects draw when board is full | Restart button to play again | Shows whose turn it is | Works on mobile and desktop |

</div>

---

## 🖥️ Game Preview

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║              ❌  TIC  TAC  TOE  ⭕                       ║
║                                                          ║
║                Player X's turn                           ║
║                                                          ║
║            ┌───────┬───────┬───────┐                    ║
║            │       │       │       │                    ║
║            │   X   │   O   │   X   │                    ║
║            │       │       │       │                    ║
║            ├───────┼───────┼───────┤                    ║
║            │       │       │       │                    ║
║            │   O   │   X   │       │                    ║
║            │       │       │       │                    ║
║            ├───────┼───────┼───────┤                    ║
║            │       │       │       │                    ║
║            │       │   O   │   X   │                    ║
║            │       │       │       │                    ║
║            └───────┴───────┴───────┘                    ║
║                                                          ║
║              🎉 Player X Wins! 🎉                        ║
║                  [ Restart ]                             ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🧠 How It Works

### Game Board — 3x3 Grid

```html
<!-- 9 cells, each clickable -->
<div class="board">
  <div class="cell" onclick="handleClick(0)"></div>
  <div class="cell" onclick="handleClick(1)"></div>
  <!-- ... 9 total -->
</div>
```

### Turn-based Player Logic

```js
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) {
  if (board[index] !== '' || gameOver) return;

  board[index] = currentPlayer;
  renderBoard();

  if (checkWinner()) {
    showMessage(`🎉 Player ${currentPlayer} Wins!`);
    gameOver = true;
  } else if (board.every(cell => cell !== '')) {
    showMessage("🤝 It's a Draw!");
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    showMessage(`Player ${currentPlayer}'s turn`);
  }
}
```

### Win Detection — All 8 Combinations

```js
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
  [0, 4, 8], [2, 4, 6]               // diagonals
];

function checkWinner() {
  return winCombos.some(([a, b, c]) =>
    board[a] && board[a] === board[b] && board[a] === board[c]
  );
}
```

### Restart Game

```js
function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  renderBoard();
  showMessage("Player X's turn");
}
```

---

## 🎮 How to Play

```
1. Open the live demo
2. Player X goes first — click any cell
3. Player O goes next
4. First to get 3 in a row wins!
   → Horizontal · Vertical · Diagonal
5. If all 9 cells fill up with no winner → Draw
6. Click Restart to play again
```

---

## 📁 Project Structure

```
TIC-TAC-TOE-Simple-game/
│
├── 📄 html.html       ← Game board structure
├── 🎨 style.css       ← Grid styling and visual design
├── ⚙️  javascript.js  ← Game logic: turns · win check · draw
└── 📄 README.md       ← Project documentation
```

---

## 🚀 Run It Yourself

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://safin313-stack.github.io/TIC-TAC-TOE-Simple-game/](https://safin313-stack.github.io/TIC-TAC-TOE-Simple-game/)**

**Option 2 — Clone and open locally**

```bash
git clone https://github.com/Safin313-stack/TIC-TAC-TOE-Simple-game.git
open html.html
```

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────────────┐
│                 Frontend · 3 Files                   │
├─────────────────┬────────────────────────────────────┤
│  HTML5          │  Game board structure              │
│  CSS3           │  Grid layout and styling           │
│  JavaScript     │  Game logic and win detection      │
└─────────────────┴────────────────────────────────────┘
```

---

## 📚 Key Concepts Used

```
Array (board state)    → tracks X, O, or empty for each of 9 cells
onclick handler        → each cell triggers the turn logic
ternary operator       → toggle between X and O players
Array.every()          → checks if all cells are filled (draw)
Array.some()           → checks if any winning combo is matched
DOM manipulation       → updates cell content and status message
CSS Grid               → 3x3 board layout
```

---

## 💡 Credits & Inspiration

Built independently with some JavaScript logic help from **AI**.



---

<div align="center">

## 👤 Developer

<br/>

**Saharia Hassan Safin**
Front-end Developer · This is where it all started 🚀

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Safin313-stack)
&nbsp;
[![Live Project](https://img.shields.io/badge/Live%20Project-Visit%20Now-302b63?style=for-the-badge&logo=vercel&logoColor=white)](https://safin313-stack.github.io/TIC-TAC-TOE-Simple-game/)

<br/>

*"Every great journey starts with a single line of code"* ❌⭕

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2025 Saharia Hassan Safin · ⭐ Star this repo — it started everything!</sub>

</div>
