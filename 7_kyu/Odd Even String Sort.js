function sortMyString(S) {
    const even = S.split('').filter((f, i) => i % 2 === 0).join('')
    const odd = S.split('').filter((f, i) => i % 2 !== 0).join('')
    return `${even} ${odd}`
}


sortMyString("CodeWars")
sortMyString("YCOLUE'VREER")