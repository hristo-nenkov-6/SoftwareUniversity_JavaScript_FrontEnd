function solve(number)
{
    let array = number
        .toString()
        .split('')
        .map(Number);

    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    while (sum / array.length <= 5)
    {
        array.push(9);
        sum += 9;
    }
    console.log(array.join(''));
}