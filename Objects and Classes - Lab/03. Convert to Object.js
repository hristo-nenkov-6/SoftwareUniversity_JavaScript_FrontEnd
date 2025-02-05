function solve(json){
    let person = JSON.parse(json);

    for(let prop in person){
        console.log(`${prop}: ${person[prop]}`);
    }
}