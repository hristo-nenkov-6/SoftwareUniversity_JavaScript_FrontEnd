function solve(a, b, c){
    let res = 0;
    if(a > b && a > c){
        res = a;
    }else if(b > a && b > c){
        res = b;
    }else{
        res = c;
    }
    console.log('The largest number is ' + res + '.');
}