function drawStairs(n) {
    return [...Array(n)].map((m, i) => ' '.repeat(i) + 'I').join('\n')
}

drawStairs(1)
drawStairs(3)
drawStairs(5)