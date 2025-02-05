function solve(prod, quan){
    switch(prod){
        case 'coffee':
            console.log((1.5 * quan).toFixed(2));
            break;
        case 'water':
            console.log((1 * quan).toFixed(2));
            break;
        case 'coke':
            console.log((1.4 * quan).toFixed(2));
            break;
        case 'snacks':
            console.log((2 * quan).toFixed(2));
            break;    
    }
}