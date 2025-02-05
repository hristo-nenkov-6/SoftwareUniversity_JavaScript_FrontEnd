function solve(mined){
    const BitCoin = 11949.16;
    const gold = 67.51;
    let currentMoney = 0;
    let currentBits = 0;
    let days = 0;
    let firstDay = 0;

    for(let grams of mined){
        days++;
        currentMoney += grams * gold;
        if(days % 3 === 0){
            currentMoney -= 0.3 * grams * gold;
        }
        if(currentMoney >= BitCoin){
            if(currentBits === 0){
                firstDay = days;
            }
            let numberOfBits = Math.floor(currentMoney / BitCoin);
            currentMoney -= BitCoin * numberOfBits;
            currentBits += numberOfBits;
        }
    }

    console.log(`Bought bitcoins: ${currentBits}`);
    if(currentBits > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
}