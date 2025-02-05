function validator(array)
{
    let [x1, y1, x2, y2] = array;
    let distance = function (x1, y1, x2, y2) {
        if(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) % 1 === 0)
        {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    distance(x1, y1, 0, 0);
    distance(x2, y2, 0, 0);
    distance(x1, y1, x2, y2);
}