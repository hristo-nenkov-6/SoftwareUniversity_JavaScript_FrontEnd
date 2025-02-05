function solve(string, word){
    while(1) {
        let newString = string.replace(word, '*'.repeat(word.length));
        if(newString !== string){
            string = newString;
        }
        else{
            break;
        }
    }
    console.log(string);
}