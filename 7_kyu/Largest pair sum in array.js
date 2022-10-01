function largestPairSum(numbers) {
    const first = numbers.sort((a, b) => b - a)[0]
    const second = numbers.sort((a, b) => b - a)[1]
    return first + second
}


largestPairSum([10, 14, 2, 23, 19])
largestPairSum([-100, -29, -24, -19, 19])
largestPairSum([1, 2, 3, 4, 6, -1, 2])