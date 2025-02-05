function solve(commands)
{
    let washed = 0;
    for(let command of commands)
    {
        switch (command)
        {
            case 'soap':
                washed += 10;
                break;

            case 'water':
                washed *= 1.2;
                break;

            case 'vacuum cleaner':
                washed *= 1.25;
                break;

            case 'mud':
                washed *= 0.9;
                break;
        }
    }
    console.log(`The car is ${washed.toFixed(2)}% clean.`);
}