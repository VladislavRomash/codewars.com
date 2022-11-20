const multiplyAll = (arr) => {
    return function (num) {
        return arr.map(m => m * num)
    }
}


// const multiplyAll = arr => num => arr.map(m => m * num);

multiplyAll([1, 2, 3])(1)
multiplyAll([1, 2, 3])(2)
multiplyAll([])(10)