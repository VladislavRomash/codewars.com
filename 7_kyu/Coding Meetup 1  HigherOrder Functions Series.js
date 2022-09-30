const list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript'},
    {firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript'},
    {firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
    {firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'}
];

const list2 = [
    {firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML'},
    {firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML'}
];

const list3 = [
    {firstName: 'Oliver', lastName: 'Q.', country: 'Bulgaria', continent: 'Europe', age: 19, language: 'JavaScript'},
    {firstName: 'Lukas', lastName: 'R.', country: 'Lithuania', continent: 'Europe', age: 89, language: 'JavaScript'}
];

function countDevelopers(list) {
    return list.filter(f => f.continent === 'Europe' && f.language === 'JavaScript').length
}


countDevelopers(list1)
countDevelopers(list2)
countDevelopers(list3)