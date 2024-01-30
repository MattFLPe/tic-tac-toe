
const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']
    const displayBoard = () => {
        let boardHTML = "";
        gameBoard.forEach((cell, index) => {
            boardHTML += `<div class="cell" id=cell-${index}">${cell}</div>`
        })
    }
    document.querySelector("#board").innerHTML = boardHTML;
})();

const Player = (name, symbol) => {
    return {name, symbol};
};

const displayController = (() => {
    
})();

const Game = (() => {

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
    function checkWinner() {

    }
})();



