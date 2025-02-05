function spice(startingYield){
    let picked = 0;
    let br = 0;
    while(startingYield >= 100){
        br++;
        picked += startingYield;
        picked -= 26;
        startingYield -= 10;
    }
    if(br >= 1) {
        picked -= 26;
    }
    console.log(br);
    console.log(picked);
}