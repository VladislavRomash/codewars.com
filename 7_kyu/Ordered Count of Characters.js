const orderedCount = function (text) {
    let newArr = []
    for (let i = 0; i < text.length; i++) {
        let count = 0
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j][0] === text[i]) {
                count++
            }
        }
        if (count === 0) {
            for (let j = i; j < text.length; j++) {
                if ((text[j] === text[i])) {
                    count++
                }
            }
            newArr.push([text[i], count])
        }
    }
    return newArr
}


const orderedCountAlternative = (text) => {
    const newArr = [...new Set([...text])]
    return newArr.map(el => [el, [...text].filter(e => e === el).length])
}


orderedCount('abracadabra')
orderedCountAlternative('abracadabra')