function array(arr) {
    let changeToArr = arr.split(',')
    changeToArr.pop()
    changeToArr.shift()
    return changeToArr.length ? changeToArr.join(' ') : null
}

array('1,2,3')
array('1,2,3,4,5')
array('1')
array('1,2')