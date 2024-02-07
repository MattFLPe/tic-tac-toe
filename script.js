const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    

    const displayBoard = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
    };

    const clickCell = (cellIndex) => {
        if(!Game.isGameOver()){
        if (board[cellIndex] === '') {
            board[cellIndex] = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            displayBoard();
            Game.checkWinner();
        } 
    };
};

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        
        displayBoard();
        gameOver = false;
        currentPlayer = "X";

    };


    return { displayBoard, clickCell, resetBoard, board };
    })();


const Player = (symbol) => {
    return {symbol};
};

const Game = (() => {
    let players = [];
    let currentPlayer;
    let gameOver;
    
    
    const startGame = () => {

        players = [
            Player("X"),
            Player("O")
        ];

        currentPlayer = 0;
        gameBoard.displayBoard();
        gameOver = false;

    };
    
    const checkWinner = () => { 
        let gameOver = false;
        console.log("lol")
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
            if (gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && 
                gameBoard.board[a] === gameBoard.board[c]) {
                let winnerStatus = document.querySelector("#status");
                winnerStatus.innerHTML = `Player ${gameBoard.board[a]} wins!`;
                Game.setGameOver();;
                return;
        } 
    };

    // Check for a tie
 if (!gameBoard.board.includes('')) {
    let winnerStatus = document.querySelector('#status');
    winnerStatus.innerHTML = 'It\'s a tie!';
    Game.setGameOver();
    return;
  };

};

const isGameOver = () => {
    return gameOver;
}

const setGameOver = () => {
    gameOver = true;
};

     return { startGame, checkWinner, isGameOver, setGameOver }
})();

const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        gameBoard.clickCell(index);
    });
});

const restartBtn = document.querySelector("#restart-btn");
    restartBtn.addEventListener("click", () => {
        location.reload();
});

