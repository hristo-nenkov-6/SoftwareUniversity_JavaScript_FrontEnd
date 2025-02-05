function solve(addressArray){
    let addressBook = {};

    for(let kvp of addressArray){
        let [name, street] = kvp.split(':');
        addressBook[name] = street;
    }

    Object
        .entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}