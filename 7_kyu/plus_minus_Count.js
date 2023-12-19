const arr = [1, -3, -4, 0, 5];

function catchSignChange(arr) {
    const newArr = arr.map(m => m === 0 ? 1 : m)
    let count = 0
    for (let i = 0; i < newArr.length - 1; i++) {
        if (Math.sign(newArr[i]) !== Math.sign(newArr[i + 1])) {
            count++
        }
    }
    return count
}

catchSignChange(arr)