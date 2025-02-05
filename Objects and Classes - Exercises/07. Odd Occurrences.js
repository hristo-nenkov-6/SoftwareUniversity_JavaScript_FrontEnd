function solve(array){
    let words = array.toLowerCase().split(' ');
    let wordOccur = {};

    for(let word of words){
        if(wordOccur[word]){
            wordOccur[word]++;
        }else{
            wordOccur[word] = 1;
        }
    }

    wordOccur = Object
        .entries(wordOccur)
        .filter(([word, occur]) => occur % 2 === 1);

    wordOccur = Object.fromEntries(wordOccur);

    console.log(Object.keys(wordOccur).join(' '));
}