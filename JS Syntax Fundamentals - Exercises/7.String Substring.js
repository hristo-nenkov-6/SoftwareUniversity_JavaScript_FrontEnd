function solve(keyWord, text){
    let wordsArr = text.split(' ');
    for(let word of wordsArr){
        if(word.toLowerCase() === keyWord.toLowerCase()) {
            console.log(keyWord);
            return;
        }
    }
    console.log(keyWord + ' not found!');
}