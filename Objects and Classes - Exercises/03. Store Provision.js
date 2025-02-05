function solve(currentStock, arrivingStock){
    let stocks = [];

    for(let i = 0; i < currentStock.length; i+=2){
        let currentItem = currentStock[i];
        let currentItemQuantity = currentStock[i + 1];

        stocks.push({
            currentItem,
            currentItemQuantity: parseInt(currentItemQuantity),
        });
    }

    for(let i = 0; i < arrivingStock.length; i+=2){
        let currentItem = arrivingStock[i];
        let currentItemQuantity = parseInt(arrivingStock[i + 1]);

        let item = stocks.find(x => x.currentItem === currentItem);
        if(item){
            item.currentItemQuantity += currentItemQuantity;
        }else{
            stocks.push({
                currentItem,
                currentItemQuantity
            });
        }
    }

    for(let item of stocks){
        console.log(`${item.currentItem} -> ${item.currentItemQuantity}`);
    }
}