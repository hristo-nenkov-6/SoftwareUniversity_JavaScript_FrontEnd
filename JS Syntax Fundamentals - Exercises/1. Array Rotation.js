function rotate(arr, num){
    for(let i = 0; i < num; i++) {
        let x = arr.splice(0, 1);
        arr.push(x);
    }
    console.log(arr.join(' '));
}