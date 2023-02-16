function checkThreeAndTwo(array) {
    let values = ['a', 'b', 'c']
    let arr = []
    for (let i = 0; i < values.length; i++) {
        arr.push(array.filter(f => f === values[i]).length)
    }
    return arr.includes(2) && arr.includes(3)
}

checkThreeAndTwo(["a", "a", "a", "b", "b"])
checkThreeAndTwo(["a", "c", "a", "c", "b"])
checkThreeAndTwo(["a", "a", "a", "a", "a"])