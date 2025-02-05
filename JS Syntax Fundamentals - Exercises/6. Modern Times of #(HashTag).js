function solve(string){
    let wordsArr = string.split(' ');
    for(let word of wordsArr){
        if(word[0] === '#'){
            if (/^[a-zA-Z]+$/.test(word.slice(1))){
                console.log(word.slice(1));
            }
        }
    }
}