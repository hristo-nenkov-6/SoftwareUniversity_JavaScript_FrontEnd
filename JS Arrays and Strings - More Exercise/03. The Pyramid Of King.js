function solve(base, increment){
    let stone = 0;
    let marble = 0;
    let lasur = 0;
    let gold = 0;
    let height = 0;
    while(base > 2){
        height++;

        //Marble/Lasur
        if(height % 5 !== 0){
            marble += 4 * base - 4;
        }else{
            lasur += 4 * base - 4;
        }

        //Stone
        stone += (base - 2) * (base - 2);

        base -= 2;
    }
    height++;
    if(base % 2 === 0){
        gold = 4;
    } else{
        gold = 1;
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lasur * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}