const findDigit = function (num, nth) {
    if (nth <= 0) return -1;
    let nums = ('' + Math.abs(num));
    return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
}

findDigit(5673, 4)
findDigit(129, 2)
findDigit(-2825, 3)
findDigit(0, 20)
findDigit(-456, 4)