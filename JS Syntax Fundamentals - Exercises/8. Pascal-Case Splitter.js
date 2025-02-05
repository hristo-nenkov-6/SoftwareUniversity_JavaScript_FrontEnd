function solve(string){
    let letters = string.split('');
    let currentString = [];
    let words = [];
    for(let letter of letters){
        if(letter === letter.toUpperCase()){
            words.push(currentString.join(''));
            currentString = [];
        }
        currentString.push(letter);
    }
    words.push(currentString.join(''));
    console.log(words.slice(1).join(', '));
}