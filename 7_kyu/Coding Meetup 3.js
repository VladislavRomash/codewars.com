let list1 = [
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
];

let list2 = [
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'}
];


function isRubyComing(list) {
    return list.filter(f => f.language === 'Ruby').length !== 0
}

/*function isRubyComing(list) {
    return list.some(s => s.language === 'Ruby')
}*/


isRubyComing(list1)
isRubyComing(list2)