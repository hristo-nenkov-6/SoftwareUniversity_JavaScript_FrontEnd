function claculator(numOne, numTwo, operator) {
    const oper = solve(operator);

    const result = oper(numOne, numTwo);

    console.log(result);

    function solve(operator) {
        switch (operator) {
            case 'multiply':
                return (numOne, numTwo) => numOne * numTwo;
            case 'divide':
                return (numOne, numTwo) => numOne / numTwo;
            case 'add':
                return (numOne, numTwo) => numOne + numTwo;
            case 'subtract':
                return (numOne, numTwo) => numOne - numTwo;
        }
    }
}