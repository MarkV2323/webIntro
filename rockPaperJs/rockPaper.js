function getComputerChoice () {
    // return a number, [0-2]
    return Math.floor(Math.random() * 3);
}

function battle (player, computer) {
    // 0 - rock
    // 1 - paper
    // 2 - scissor
    // 0 beats 2
    // 1 beats 0
    // 2 beats 1
    // return 0 - lose
    // return 1 - win
    // return 2 - draw
    switch(player) {
        case "0":
            if (computer == 0) {
                return 2;
            }
            if (computer == 2) {
                return 1;
            }
            return 0;
        case "1":
            if (computer == 1) {
                return 2;
            }
            if (computer == 0) {
                return 1;
            }
            return 0;
        case "2":
            if (computer == 2) {
                return 2;
            }
            if (computer == 1) {
                return 1;
            }
            return 0;
        default:
            console.log("Unknown player choice");
            return 0;

    }
}

const introMsg = `Welcome to Rock, Paper Scissors!
Best of three against the AI.`;
console.log(introMsg);

console.log("0 - rock\n1 - paper\n2 - scissors\n3 - exit");
let player = prompt("Please enter you choice"); 

let computer = getComputerChoice();
let results = battle(player, computer);

if (results == 0) {
    console.log(`Results: ${player} vs ${computer} = player LOSS`);
} else if (results == 1) {
    console.log(`Results: ${player} vs ${computer} = player WIN`);
} else if (results == 2) {
    console.log(`Results: ${player} vs ${computer} = player DRAW`);
}
