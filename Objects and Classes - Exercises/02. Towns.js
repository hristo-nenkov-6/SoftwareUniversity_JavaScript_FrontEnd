function solve(inputArr){
    let objectArray = [];

    for(let input of inputArr){
        let [town, latitude, longitude] = input.split(' | ');
        objectArray.push({
            town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2),
        });
    }

    for(let x of objectArray){
        console.log(x);
    }
}