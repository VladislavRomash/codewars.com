function halvingSum(n) {
    let score = 0;
    while (n >= 1) {
        score += n;
        n = Math.floor(n / 2);
    }
    return score
}


halvingSum(25)
halvingSum(127)