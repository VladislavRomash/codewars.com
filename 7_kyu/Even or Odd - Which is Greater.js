function evenOrOdd(str) {
    const arr = str.split('').map(m => Number(m))
    const even = arr.filter(f => f % 2 === 0).reduce((a, b) => a + b, 0)
    const odd = arr.filter(f => f % 2 !== 0).reduce((a, b) => a + b, 0)
    return even > odd ? 'Even is greater than Odd' : even < odd ? 'Odd is greater than Even' : 'Even and Odd are the same'
}

evenOrOdd('12') // Even is greater than Odd
evenOrOdd('123') // Odd is greater than Even
evenOrOdd('112') // Even and Odd are the same