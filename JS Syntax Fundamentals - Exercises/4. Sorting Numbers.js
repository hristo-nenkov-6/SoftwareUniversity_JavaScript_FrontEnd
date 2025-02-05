function solve(arr){
    let newArr = [];
    while(arr.length){
        let x = Math.min(...arr);
        arr.splice(arr.indexOf(x), 1);
        if(isFinite(x)) {
            newArr.push(x);
        }

        x = Math.max(...arr);
        arr.splice(arr.indexOf(x), 1);
        if(isFinite(x)) {
            newArr.push(x);
        }
    }
    return newArr;
}