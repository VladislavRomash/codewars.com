const list1 = [
    {firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java'},
    {firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python'},
];

const list2 = [
    {firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby'},
    {firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C'},
];


function getAverageAge(list) {
    return Math.round(list.map(m => m.age).reduce((acc, el) => acc + el) / list.length)
}


getAverageAge(list1)
getAverageAge(list2)