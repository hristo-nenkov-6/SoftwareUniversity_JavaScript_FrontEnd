function checker(a, b, c){
    let plus = 0, minus = 0;
    function check(x){
        if(x > 0){
            plus++;
        }else {
            minus++;
        }
    }

    check(a);
    check(b);
    check(c);

    if(plus % 2 == 0){
        console.log('Negative');
    } else{
        console.log('Positive');
    }
}