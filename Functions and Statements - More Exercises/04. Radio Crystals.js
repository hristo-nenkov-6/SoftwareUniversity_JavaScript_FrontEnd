function solve(arr) {
    function cut(thickness, crystal)
    {
        let br = 0;
        while (crystal / 4 >= thickness){
            br++;
            crystal /= 4;
        }
        return [br, crystal];
    }

    function lap(thickness, crystal)
    {
        let br = 0;
        while (crystal * 0.8 >= thickness){
            br++;
            crystal *= 0.8;
        }
        return [br, crystal];
    }

    function grind(thickness, crystal)
    {
        let br = 0;
        while (crystal - 20 >= thickness){
            br++;
            crystal -= 20;
        }
        return [br, crystal];
    }

    function etch(thickness, crystal)
    {
        let br = 0;
        while (crystal - 2 >= thickness - 1){
            br++;
            crystal -= 2;
        }
        return [br, crystal];
    }

    function x_ray(thickness, crystal)
    {
        if(crystal + 1 === thickness) {
            crystal -= 1;
            console.log("X-ray x1");
            return crystal;
        }
    }

    function transport(crystal){
        console.log("Transporting and washing");
        return Math.floor(crystal);
    }

    let thickness = arr.shift();

    for(let crystal of arr) {
        let x;

        console.log(`Processing chunk ${crystal} microns`)

        x = cut(thickness, crystal);
        if(x[0] !== 0) {
            console.log(`Cut x${x[0]}`);
            crystal = x[1];
            crystal = transport(crystal);
        }

        x = lap(thickness, crystal);
        if(x[0] !== 0) {
            console.log(`Lap x${x[0]}`);
            crystal = x[1];
            crystal = transport(crystal);
        }

        x = grind(thickness, crystal);
        if(x[0] !== 0) {
            console.log(`Grind x${x[0]}`);
            crystal = x[1];
            crystal = transport(crystal);
        }

        x = etch(thickness, crystal);
        if(x[0] !== 0) {
            console.log(`Etch x${x[0]}`);
            crystal = x[1];
            crystal = transport(crystal);
        }

        crystal = x_ray(thickness, crystal);

        console.log(`Finished crystal ${thickness} microns`);
    }
}