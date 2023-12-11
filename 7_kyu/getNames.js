const data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
]

function getNames(data) {
    return data.map(m => m.name);
}

getNames(data)