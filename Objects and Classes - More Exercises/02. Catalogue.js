function solve(objArray){
    let array = objArray
        .sort((a, b) => a.split(' : ')[0].localeCompare(b.split(' : ')[0]));

    let dictionary = {};
    for(let line of array){
        let [name, price] = line.split(' : ');

        if(!dictionary[name[0]]){
            dictionary[name[0]] = [];
            dictionary[name[0]].push({
                name,
                price
            });
        }else{
            dictionary[name[0]].push({
                name,
                price
            });
        }
    }

    for(let item of Object.keys(dictionary)){
        console.log(item);
        for(let val of dictionary[item]){
            console.log(`   ${val.name}: ${val.price}`);
        }
    }
}