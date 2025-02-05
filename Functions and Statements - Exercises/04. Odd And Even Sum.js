function solve(number){
    function suma(arr){
        let sum = 0;
        for (let x of arr){
            sum += x;
        }
        return sum;
    }

    let numberSting = number
        .toString()
        .split('')
        .map(Number);

    let even = numberSting.filter(x => x % 2 === 0);
    let odd = numberSting.filter(x => x % 2 === 1);

    console.log(`Odd sum = ${suma(odd)}, Even sum = ${suma(even)}`);
}