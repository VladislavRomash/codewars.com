function cubeOdd(arr) {
    let newArr = [];
    let cub = arr.map((el) => Math.pow(el, 3));
    if (arr.filter((element) => typeof (element) == 'number').length === arr.length) {
        for (let i = 0; i < cub.length; i++) {
            if (cub[i] % 2 !== 0) newArr.push(cub[i]);
        }
        return newArr.reduce((a, b) => a + b, 0);
    } else {
        return undefined;
    }
}


cubeOdd([1, 2, 3, 4])
cubeOdd([-3, -2, 2, 3])
cubeOdd(["a", 12, 9, "z", 42])