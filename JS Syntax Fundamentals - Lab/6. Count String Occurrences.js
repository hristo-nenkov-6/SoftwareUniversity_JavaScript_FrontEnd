function solve(string, word){
    let br = 0;
    let arr = string.split(' ');
    for(let x of arr){
        if(x === word){
            br++;
        }
    }
    console.log(br);
}