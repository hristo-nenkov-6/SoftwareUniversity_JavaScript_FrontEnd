function solve(inputArray){
    const parking = new Set();

    for(const row of inputArray){
        const [direction, carNumber] = row.split(', ');

        direction === 'IN'
            ? parking.add(carNumber)
            : parking.delete(carNumber);
    }

    if(parking.size < 1){
        return console.log('Parking Lot is Empty');
    }

    Array.from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(x => console.log(x));
}