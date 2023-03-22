function findMissingNumber(sequence) {
    if (sequence === "") {
        return 0;
    } else if (!/^(\d+ )+\d+$/gi.test(sequence)) {
        return 1;
    } else {
        const arr = sequence.split(" ").map(Number);
        const max = Math.max(...arr);
        for (let i = 1; i < max; ++i)
            if (arr.find(x => x === i) === undefined) return i;
        return 0;
    }
}


findMissingNumber("1 2 3 4")
findMissingNumber("1 2 4 3")
findMissingNumber("2 1 3 a")
findMissingNumber("")
findMissingNumber("1 3 2 5")
findMissingNumber("1 5")