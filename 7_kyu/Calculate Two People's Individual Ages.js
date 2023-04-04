function getAges(sum, difference) {
    const first = (sum - difference) / 2
    const second = first + difference
    return sum < 0 || difference < 0 || first < 0 || second < 0 ? null : [first, second].sort((a, b) => b - a)
}

getAges(24, 4)
getAges(15, 3)
getAges(63, -14)


