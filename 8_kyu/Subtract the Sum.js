const fruitArray = ["kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple",
    "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape", "cherry", "pear",
    "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana", "melon", "pineapple", "melon", "pineapple",
    "cucumber", "orange", "apple", "orange", "grape", "orange", "grape", "cherry", "pear", "cherry", "pear", "apple",
    "pear", "kiwi", "banana", "kiwi", "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber",
    "orange", "cucumber", "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry", "pear", "kiwi", "pear", "kiwi",
    "banana", "apple", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "pineapple", "cucumber", "apple",
    "grape", "orange", "grape", "cherry", "grape", "cherry", "pear", "cherry", "apple", "kiwi", "banana", "kiwi", "banana",
    "melon", "banana", "melon", "pineapple", "apple", "pineapple",
]

function SubtractSum(n) {
    const sum = n.toString().split('').map(m => +m).reduce((a, b) => a + b, 0)
    let subtraction = n - sum
    for (let i = 0; i < 10000; i++) {
        if (subtraction <= 100) {
            return fruitArray[subtraction - 1]
        } else {
            subtraction = subtraction - subtraction.toString().split('').map(m => +m).reduce((a, b) => a + b, 0)
        }
    }
}

SubtractSum(125)
SubtractSum(10)
SubtractSum(28)
SubtractSum(83)