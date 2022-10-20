let list1 = [
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
];

function greetDevelopers(list) {
    return list.reduce((acc, el) => {
        acc.push({...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`})
        return acc
    }, [])
}

function greetDevelopers(list) {
    return list.map(m => ({...m, greeting: `Hi ${m.firstName}, what do you like the most about ${m.language}?`}))
}


greetDevelopers(list1)