function solve(nameArray){
    let personNumber = {};
    for(let name of nameArray){
        personNumber[name] = name.length;
    }

    for(let obj in personNumber){
        console.log(`Name: ${obj} -- Personal Number: ${personNumber[obj]}`);
    }
}