function solve(words, string){
    let wordsArray = words.split(', ');
    let stringWordsArray = string.split(' ');

    for(let word of stringWordsArray){
        if(word[0] === '*'){
            for(let newWord of wordsArray) {
                if(newWord.length === word.length) {
                    stringWordsArray.splice(stringWordsArray.indexOf(word),
                        1,
                        newWord);
                }
            }
        }
    }
    console.log(stringWordsArray.join(' '));
}