function solve(numbers){
    function checker(arr1, arr2){
        return arr1.join('') === arr2.reverse().join('');
    }

    for(let num of numbers) {
        let numArr = num.toString()
            .split('')
            .map(Number);

        let left, right;

        if (numArr.length % 2 === 0) {
            left = numArr.slice(0, numArr.length / 2);
            right = numArr.slice(numArr.length / 2);
        } else {
            left = numArr.slice(0, numArr.length / 2);
            right = numArr.slice(numArr.length / 2 + 1, numArr.length);
        }

        if (checker(left, right)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}