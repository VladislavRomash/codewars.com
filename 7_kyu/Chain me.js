function add(num) {
    return num + 1;
}

function mult(num) {
    return num * 30;
}

// function chain(input, fs) {
//     let result = input
//     for (let i = 0; i < fs.length; i++) {
//         let temp = result
//         temp = fs[i](result)
//         result = temp
//     }
//     return result
// }

const chain = (input, fs) => fs.reduce((acc, x) => x(acc), input)

chain(2, [add, mult])
