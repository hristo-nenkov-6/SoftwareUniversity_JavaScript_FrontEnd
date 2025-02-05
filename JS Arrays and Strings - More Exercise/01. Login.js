function solve(arr){
    let user = arr[0];
    arr.shift();
    let count = 0;

    for(let pass of arr){
        if(count < 4) {
            if (pass.split('').reverse().join('') === user) {
                console.log(`User ${user} logged in.`);
                break;
            }else {
                count++;
                if(count < 4){
                    console.log('Incorrect password. Try again.');
                }else{
                    console.log(`User ${user} blocked!`);
                }
            }
        }
    }
}