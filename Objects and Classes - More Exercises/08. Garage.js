function solve(arrayInput){
    let block = {};
    for(let car of arrayInput){
        let info = car.split(' - ');
        let garage = info[0];

        let carAttributes = info[1].split(', ');
        let stringObjects = [];
        for(let attribute of carAttributes){
            let [typeOfAttribute, value] = attribute.split(': ');
            stringObjects.push(`${typeOfAttribute} - ${value}`);
        }

        if(block[`Garage № ${garage}`]){
            block[`Garage № ${garage}`].push(`--- ${stringObjects.join(', ')}`);
        }else{
            block[`Garage № ${garage}`] = [];
            block[`Garage № ${garage}`].push(`--- ${stringObjects.join(', ')}`);
        }
    }

    block = Object.entries(block)
        .sort(([,a],[,b]) => a-b);

    for(let garage of block){
        console.log(garage[0]);
        garage[1].forEach(x => console.log(x));
    }
}