function solve(wordsArray){
    let wantedWords = wordsArray.shift().split(' ');
    let wordsOccurances = {};

    for(let word of wantedWords){
        wordsOccurances[word] = 0;
    }

    for(let word of wordsArray){
        if(wantedWords.find(x => x === word)){
            wordsOccurances[word]++;
        }
    }

    let sorted = Object
        .entries(wordsOccurances)
        .sort(([,a], [,b]) => -(a - b))
        .forEach(([name, occur]) => console.log(`${name} - ${occur}`));

    for(let word in sorted){
        console.log(`${word} - ${wordsOccurances[word]}`);
    }
}