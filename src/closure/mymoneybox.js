/*function myMoneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins

    //return saveCoins;
    console.log(`Moneybox: $${saveCoins}`);
}

myMoneyBox(5);
myMoneyBox(10);*/

// Usando closures
function myMoneyBox() {
    let saveCoins = 0;
    function addCoins(coins, ) {
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return addCoins;
}

const moneyBox = myMoneyBox();

moneyBox(5);
moneyBox(5);
moneyBox(10);

const moneyBoxAna = myMoneyBox();
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(10);