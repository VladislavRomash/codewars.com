const sequenceSum = (begin, end, step) => {
    let num = 0
    for (let i = begin; i <= end; i += step) {
        num += i
    }
    return num
};

sequenceSum(2, 6, 2)
sequenceSum(1, 5, 1)
sequenceSum(1, 5, 3)