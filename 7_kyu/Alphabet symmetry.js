function solve(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return arr.map(m => m.toLowerCase().split('').filter((f, i) => i === alphabet.indexOf(f)).length)
}


solve(["abode", "ABc", "xyzD"])
solve(["abide", "ABc", "xyz"])