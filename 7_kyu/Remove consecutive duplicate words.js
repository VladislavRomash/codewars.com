const removeConsecutiveDuplicates = s => {
    const arr = s.split(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }
    }
    return result.join(' ')
}

const removeConsecutiveDuplicates = s => s.split(" ").filter((f, i, arr) => f !== arr[i + 1]).join(" ");

removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')