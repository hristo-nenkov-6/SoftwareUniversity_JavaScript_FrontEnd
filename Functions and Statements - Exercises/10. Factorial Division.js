function solve(number1, number2){
    function factorial(num){
        if(num > 0) {
            return num * factorial(num - 1);
        }

        return 1;
    }
    console.log((factorial(number1) / factorial(number2)).toFixed(2));
}