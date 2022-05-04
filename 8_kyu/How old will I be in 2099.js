function calculateAge(birth, countYears) {
    if (birth < countYears) {
        return `You are ${countYears - birth} ${countYears - birth === 1 ? 'year' : 'years'} old.`
    } else if (birth > countYears) {
        return `You will be born in ${birth - countYears} ${birth - countYears === 1 ? 'year' : 'years'}.`
    } else if (birth === countYears) {
        return `You were born this very year!`
    }
}

calculateAge(2000, 2090)
calculateAge(2000, 1999)
calculateAge(3400, 3400)