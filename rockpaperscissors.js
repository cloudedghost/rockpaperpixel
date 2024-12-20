const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = window.prompt('Please choose rock, paper, or scissors.');
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        return 'Please enter a valid choice.';
    }
}
console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            return 'You win!';
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            return 'You win!';
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            return 'You win!';
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return 'Computer wins!';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return 'Computer wins!';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return 'Computer wins!';
    }
    }

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${humanChoice}.`);
    console.log(`Computer chose ${computerChoice}.`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}:`);
    console.log(`You chose ${humanChoice}.`);
    console.log(`Computer chose ${computerChoice}.`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

playGame();