function calc(a, op, b){
    switch (op){
        case '+':
            console.log((a + b).toFixed(2))
            break;
        case '-':
            console.log((a - b).toFixed(2))
            break;
        case '/':
            console.log((a / b).toFixed(2))
            break;
        case '*':
            console.log((a * b).toFixed(2))
            break;
    }
}