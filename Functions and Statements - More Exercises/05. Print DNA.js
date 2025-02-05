function solve(number){
    let DNA = 'AT CG TT AG GG'.split(' ');

    for(let i = 0; i < number; i++)
    {
        if(i % 4 === 0){
            console.log(`**${DNA[i % 5][0]}${DNA[i % 5][1]}**`);
        }else if(i % 4 === 1 || i % 4 === 3){
            console.log(`*${DNA[i % 5][0]}--${DNA[i % 5][1]}*`);
        }else if(i % 4 === 2){
            console.log(`${DNA[i % 5][0]}----${DNA[i % 5][1]}`);
        }
    }
}