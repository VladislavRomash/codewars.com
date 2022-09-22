function checkExam(array1, array2) {
    let points = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            points += 4;
        } else if (array2[i] === "") {
            points += 0;
        } else {
            points -= 1;
        }
    }
    return points > 0 ? points : 0
}

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])