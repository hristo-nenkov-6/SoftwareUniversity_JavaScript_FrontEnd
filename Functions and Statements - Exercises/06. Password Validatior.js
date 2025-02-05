function solve(pass){
    let ok = true;
    const long = function(pass){
        return pass.split('').length >= 6 && pass.split('').length <= 10;
    }
    const chars = (pass) => /^[A-Za-z0-9]*$/.test(pass);
    let dig = pass.split('');
    const digits = (pass) => pass.split('').filter(x => /^\d+$/.test(x)).length >= 2;

    if(!long(pass)){
        console.log("Password must be between 6 and 10 characters");
        ok = false;
    }
    if(!chars(pass)){
        console.log("Password must consist only of letters and digits");
        ok = false;
    }
    if(!digits(pass)){
        console.log("Password must have at least 2 digits");
        ok = false;
    }
    if(ok){
        console.log("Password is valid");
    }
}