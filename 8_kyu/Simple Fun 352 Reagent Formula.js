function isValid(formula) {
    if (formula.includes(1) && formula.includes(2)) return false
    else if (formula.includes(3) && formula.includes(4)) return false
    else if (formula.includes(5) !== formula.includes(6)) return false
    else return !!(formula.includes(7) || formula.includes(8));
}

isValid([1, 3, 7])
isValid([7, 1, 2, 3])