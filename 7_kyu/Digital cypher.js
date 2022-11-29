function encode(str, n) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const nToArr = n.toString().repeat(str.length).split('').map(m => Number(m))
    const arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(alphabet.indexOf(str[i]) + 1)
        arr[i] += nToArr[i]
    }
    return arr;
}


encode("scout", 1939)
encode("masterpiece", 1939)