function spacey(array) {
    const newArr = []
    let temporary = array[0]
    for (let i = 1; i < array.length + 1; i++) {
        newArr.push(temporary)
        temporary = temporary + array[i]
    }
    return newArr
}


spacey(['kevin', 'has', 'no', 'space'])
spacey(['this', 'cheese', 'has', 'no', 'holes'])