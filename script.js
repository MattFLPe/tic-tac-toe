const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";


    const displayBoard = () => {
        let boardHTML = "";
        board.forEach((cell, index) => {
            boardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`
        });
        document.querySelector("#board").innerHTML = boardHTML;

        document.querySelectorAll('.cell').forEach((cell, index) => {
            cell.addEventListener('click', () => {
                cellClick(cell);
            });
    });
    };

    const cellClick = (cell) => {
        const cellIndex = parseInt(cell.id.split('-')[1]);
        if (!board[cellIndex]) {
            board[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            Game.checkWinner();
        } else {
            alert("Cell already filled!");
        }
    };

    
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        displayBoard();
    };

    const endGame = () => {
        console.log("Game Over!");
    };


    return { displayBoard, cellClick, resetBoard, endGame, board };
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
            Player(document.querySelector("#player2").value, "O")
        ];

        currentPlayer = 0;
        gameOver = false;
        gameBoard.displayBoard();
    };

    const checkWinner = () => {
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


        for(const condition of winConditions){
            const [a, b, c] = condition;
            if (gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]) {
                console.log(`Player ${gameBoard.board[a]} wins!`);
                let winnerStatus = document.querySelector("#status");
                winnerStatus.innerHTML = `Player ${gameBoard.board[a]} wins!`;
                gameBoard.endGame();
                return;
        }
    };

    // Check for a tie
    if (!gameBoard.board.includes('')) {
        let winnerStatus = document.querySelector('#status');
        winnerStatus.innerHTML = 'It\'s a tie!';
        gameBoard.endGame();
      };
    };

     return { startGame, checkWinner }
})();

const startBtn = document.querySelector("#start-btn");
        startBtn.addEventListener("click", () => {
            Game.startGame();
        });

const restartBtn = document.querySelector("#restart-btn");
    restartBtn.addEventListener("click", () => {
    document.querySelector('#status').innerHTML = '';       
    gameBoard.resetBoard();
   
});

