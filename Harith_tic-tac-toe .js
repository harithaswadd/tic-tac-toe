/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
const prompt = require('prompt-sync')({sigint: true});
const assert = require('assert');
const { endianness } = require('os');

// The board object used to save the current status of a gameplay
let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[position] = mark.toUpperCase();
}

// TODO: print the game board as described at the top of this code skeleton
// Will not be tested in Part 1
function printBoard() { 
    let boardGame = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    }
    for (let n in boardGame){
        if(board[n] == ' '){
            boardGame[n] = n
        }
        else {
            boardGame[n] = board[n]
        }
    }
    console.log(
        boardGame[1] + "|" + boardGame[2] + "|" + boardGame[3] + "\n" +
        boardGame[4] + "|" + boardGame[5] + "|" + boardGame[6] + "\n" +
        boardGame[7] + "|" + boardGame[8] + "|" + boardGame[9] + "\n"
    )

}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
// position is an input String
function validateMove(position) {
    let positionNum = Number(position)
    if (positionNum > 0 && position < 10){
        if (board[positionNum] == " ") { 
        return true 
        }
    
    }
    return false

}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 5, 9], 
    [7, 5, 3], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (let winChance of winCombinations){
        if (board[winChance[0]] == player && board[winChance[1]] == player && board[winChance[2]] == player) {
            return true
        }
    }
    return false

}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (let place in board) {
        if (board[place] == ' '){
            return false
        }
    }
    return true

}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
    let position = prompt ("It's Player " + player + "'s turn. Please key in the number you would lke to move " + "\n")
    while (validateMove(position) == false){
        position = prompt("Please enter a valid number from the available boxes " + "\n")
    }
    markBoard(position, player)
    printBoard()
    
    }
    
        
    


// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'

while (!winnerIdentified){
    playTurn(currentTurnPlayer)
    if(checkWin(currentTurnPlayer) || checkFull()){
        winnerIdentified = true
    }
    if (winnerIdentified){
        if(checkWin(currentTurnPlayer)){
            console.log("Game Over! The winner is " + currentTurnPlayer)
        }
        else {
            console.log("Dead end, it's a tie!")
        }
    }
    else {
            if (currentTurnPlayer == "O")
            currentTurnPlayer = "X"
        
        else {
        currentTurnPlayer = "O"
        }
    }
        
    }
    // feel free to add logic here if needed, e.g. announcing winner or tie


// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
