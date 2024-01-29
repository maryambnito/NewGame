const prompt=require("prompt-sync")();
    
const deposit= () => {
    while (true) {

     const depositAmount = prompt("Enter A Deposit Amount: ");
     const numberDepositAmount = parseFloat(depositAmount);
     
     if ( isNaN(numberDepositAmount) || numberDepositAmount == 0 ){
         console.log("Invalid Deposit Amount ,Try Again. ");
        } else {
        return numberDepositAmount;
        }

    }
};

const getNumberOfLines= () => {
    while (true) {
        const lines = prompt("Enter The Number Of Lines to bet(1-3) : ");
        const numberOfLines = parseFloat(lines);
        if ( isNaN(numberOfLines) || numberOfLines == 0 || numberOfLines > 3 ){
            console.log("Invalid number Of Lines,Try Again. ");
        } else {
            return numberOfLines;
        }
    }
};

const getBet= (balance,lines) => {
while (true) {
    const bet = prompt("Enter Total Bet: ");
    const numberBet = parseFloat(bet);
    if ( isNaN(numberBet) || numberBet==0 || numberBet > balance/lines ){
        console.log("Invalid Numbet Bet,Try Again ");
    } else {
        return numberBet;
    }
}

}

let balance= deposit();
const numberOfLines=getNumberOfLines();
const bet=getBet(balance,numberOfLines);


