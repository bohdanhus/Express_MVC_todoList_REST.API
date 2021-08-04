let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const readline = require('readline-sync');

const main = () => {
    let gameBoard = [...board];
    let currentPl = "X";
    let moves = 0;

    console.clear();
    console.log(printBoard(gameBoard));
    console.log('       START  GAME!');
    console.log('PREPARE             TO BATTLE');

    while (true) {
        let turn = readline.question(`It's ${currentPl}'s move`);
        if (turn > 9) {
            console.log('Enter valid number, please! area:[1-9]')
            continue;
        }

        let cell = gameBoard[turn - 1];
        if (cell !== "X" && cell !== "O") {
            moveProcess(gameBoard, currentPl, turn, cell);
            moves++;
            console.log(printBoard(gameBoard));
        } else {
            console.log("Cell is busy!\nPlease enter a valid number.");
            continue;
        }
        if (getWinner(gameBoard, currentPl) || moves > 9) {
            if (getWinner(gameBoard, currentPl)) {
                console.log(`${currentPl} is win this game`)
            }
            if (moves > 9) {
                console.log(`DRAW!`);
            }
            let restart = readline.question('Enter "y" -  if you want to restart')
            if (restart === 'y') {
                main()
            } else {
                break;
            }
        }
        currentPl = selector(currentPl);
    }
};

function printBoard(gameBoard) {
    let fields = ` ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]} 
 --+---+--
 ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
 --+---+--
 ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}\n`;
    return fields
}

function moveProcess(gameBoard, currentPl, turn, cell) {
    if (cell === " ") {
       let board = gameBoard[turn - 1] = currentPl;
        return board
    }    
}

function getWinner(gameBoard, currentPl) {
    if ((gameBoard[0] === currentPl && gameBoard[1] === currentPl && gameBoard[2] === currentPl) ||
        (gameBoard[3] === currentPl && gameBoard[4] === currentPl && gameBoard[5] === currentPl) ||
        (gameBoard[6] === currentPl && gameBoard[7] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[0] === currentPl && gameBoard[3] === currentPl && gameBoard[6] === currentPl) ||
        (gameBoard[1] === currentPl && gameBoard[4] === currentPl && gameBoard[7] === currentPl) ||
        (gameBoard[2] === currentPl && gameBoard[5] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[0] === currentPl && gameBoard[4] === currentPl && gameBoard[8] === currentPl) ||
        (gameBoard[6] === currentPl && gameBoard[4] === currentPl && gameBoard[2] === currentPl)) {
        return true
    } else {
        return false
    }
}

function selector(currentPl) {
    return currentPl !== "X" ? "X" : "0";
}

main();



// rl.on("line", (input) => {
//     if (moves <= 9) {
//         return moveProcess(gameBoard, currentPl, input);
//     } else {
//         console.log("Game End");
//         rl.close();
//         process.exit();
//     }
// });
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// function question(){
//     rl.question('What do you think of Node.js? ', (answer) => {
//         console.log('Thank you for your valuable feedback: ${answer}');
//
//         rl.close();
//     });
// }
