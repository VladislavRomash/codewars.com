function initializeNames(name) {
    const arr = name.split(' ')
    return arr.length <= 2 ? name : `${arr[0]} ${arr.map(m => m[0].toUpperCase()).slice(1, arr.length - 1).join('. ')}. ${arr[arr.length - 1]}`
}

initializeNames('Jack Ryan')
initializeNames('Lois Mary Lane')
initializeNames('Dimitri')
initializeNames('Alice Betty Catherine Davis')