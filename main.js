var getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return(userInput);
    }
    else {
        console.log('Please enter rock, paper, or scissors.');
    }
}

var getComputerChoice = () => {
    var choice = Math.floor(Math.random() * 4);

    if(choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

var determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'The game is a tie.';
    }
    else if(userChoice === 'bomb') {
        return 'The user won';
    }
    else if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'The computer has won.';
        }
        else {
            return 'The user has won.';
        }
    }
    else if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'The computer has won.';
        }
        else {
            return 'The user has won.';
        }
    }
    else if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'The computer has won.';
        }
        else {
            return 'The user has won.';
        }
    }
}

var playGame = () => {
    var userChoice = getUserChoice('bomb');

    var computerChoice = getComputerChoice();

    console.log(`The user picked ${userChoice} and the computer picked ${computerChoice}!`)

    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
