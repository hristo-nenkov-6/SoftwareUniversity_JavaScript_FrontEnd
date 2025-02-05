function solve(stringArr){
    let phonebook = {};

    for(let string of stringArr){
        let kvp = string.split(' ');
        phonebook[kvp[0]] = kvp[1];
    }

    for(let name in phonebook){
        console.log(`${name} -> ${phonebook[name]}`);
    }
}