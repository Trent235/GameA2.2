function rollDice() {                                       /*This is a function named*/
    return Math.floor(Math.random() * 6) + 1;               /*generates a random number between 0 (inclusive) and 1 (exclusive)*/ 
}

function playCraps() {
    let dice1 = rollDice();
    let dice2 = rollDice();
    let sum = dice1 + dice2;
    let result = `You rolled a ${dice1} and a ${dice2} for a total of ${sum}. `;            /*result*/

    if (sum === 7 || sum === 11) {                                                          /*if condition is meet*/
        result += "You win!";                                                               /*win*/
    } else if (sum === 2 || sum === 3 || sum === 12) {                                      /*if not then*/
        result += "Craps! You lose.";                                                       /*result unless condition is meet*/ 
    } else {                                                                                /*condition is meet*/
        let point = sum;
        result += `Your point is ${point}. Rolling again...<br>`;

        let newSum;
        do {
            dice1 = rollDice();
            dice2 = rollDice();
            newSum = dice1 + dice2;
            result += `You rolled a ${dice1} and a ${dice2} for a total of ${newSum}.<br>`;
        } while (newSum !== 7 && newSum !== point);

        if (newSum === point) {
            result += "You win!";
        } else {
            result += "You lose.";
        }
    }
    document.getElementById('result').innerHTML = result;
}
script