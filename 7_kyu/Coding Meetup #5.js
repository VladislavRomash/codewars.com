const list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
    {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
];

function countLanguages(list) {
    const language = list.map(m => m.language)
    let newObj = {}
    for (let i = 0; i < language.length; i++) {
        newObj[language[i]] = list.filter(f => f.language === language[i]).length
    }
    return newObj
}


countLanguages(list1)



