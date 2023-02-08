const head = (arr) => arr[0]
const tail = (arr) => arr.slice(1)
const init = (arr) => arr.slice(0, -1)
const last = (arr) => arr[arr.length - 1]

head([5, 1])
tail([1])
init([1, 5, 7, 9])
last([7, 2])