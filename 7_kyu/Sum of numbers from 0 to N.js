const SequenceSum = (function () {
    function SequenceSum() {
    }

    SequenceSum.showSequence = function (count) {
        let string = ''
        let sum = 0
        for (let i = 0; i <= count; i++) {
            string += `${i}+`
            sum += i
        }
        return count < 0 ? `${count}<0` : count === 0 ? `${count}=0` : `${string.slice(0, -1)} = ${sum}`
    }
    return SequenceSum;
})();