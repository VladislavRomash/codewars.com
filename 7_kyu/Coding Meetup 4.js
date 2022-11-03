const list1 = [
    {firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript'},
    {firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python'},
    {firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure'}
];

function getFirstPython(list) {
    const firstPythonDev = list.find(f => f.language === 'Python')
    return firstPythonDev ? `${firstPythonDev.firstName}, ${firstPythonDev.country}` : 'There will be no Python developers'
}


getFirstPython(list1)
