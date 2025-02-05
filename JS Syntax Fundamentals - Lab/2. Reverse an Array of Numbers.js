function solve(n, arr){
    let newArr = [];
    let br = 0;
    for(let i = n - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    console.log(...newArr);
}