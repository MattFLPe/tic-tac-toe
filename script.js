
const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']

    const displayBoard = () => {
        let boardHTML = "";
        board.forEach((cell, index) => {
            boardHTML += `<div class="cell" id=cell-${index}">${cell}</div>`
        });
        document.querySelector("#board").innerHTML = boardHTML;
        const cells = document.querySelectorAll(".cell")
        let currentPlayer = "X"
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                if(!cell.textContent){
                    cell.textContent = currentPlayer
                    currentPlayer = currentPlayer === "X" ? "O" : "X"
                } else {
                    alert("Cell already filled!")
                }
            })
        })

    };
    return { displayBoard };
})();

const Player = (name, symbol) => {
    return {name, symbol};
};

const Game = (() => {
    let players = [];
    let currentPlayer;
    let gameOver;
    
    const startGame = () => {
        players = [
            Player(document.querySelector("#player1").value, "X"),
            Player(document.querySelector("#player2").value, "o")
        ];

        currentPlayer = 0;
        gameOver = false;
        gameBoard.displayBoard();
    };
     return { startGame }
})();

const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
    Game.startGame();
});

const restartBtn = document.querySelector("#restart-btn");
startBtn.addEventListener("click", () => {
    gameBoard.displayBoard();
});




/*
const checkWinner = () => {
    const board = gameBoard.displayBoard();
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
};
*/