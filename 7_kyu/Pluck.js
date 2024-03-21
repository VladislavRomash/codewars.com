function pluck(objs, name) {
    return objs.map(m => m[Object.keys(m).find(f => f === name)])
}


console.log(pluck([{a: 1}, {a: 2}], 'a')) //  [1,2]
console.log(pluck([{a: 1, b: 3}, {a: 2}], 'b')) // [3, undefined]