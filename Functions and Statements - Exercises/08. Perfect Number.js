function solve(number){
    const positive = function(a){
        return a > 0 && Number.isInteger(a);
    }
    const equalToSum =  function(num){
        let sum = 0;
        for(let x = 1; x < num / 2 + 1; x++){
            if(num % x === 0){
                sum += x;
            }
        }
        return num === sum;
    }
    if(positive(number) && equalToSum(number)){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
}