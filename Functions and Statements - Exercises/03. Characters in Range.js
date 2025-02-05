function findBetween(a, b){
    let result = [];
    let start = a.charCodeAt(0) ;
    let end = b.charCodeAt(0);
    for(let i = Math.min(start, end) + 1; i < Math.max(start, end); i++){
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(' '));
}