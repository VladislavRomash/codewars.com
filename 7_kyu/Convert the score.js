function scoreboard(string) {
    return string.split(' ').map(m => {
        switch (m) {
            case 'nil':
                return m = 0
            case 'one':
                return m = 1
            case 'two':
                return m = 2
            case 'three':
                return m = 3
            case 'four':
                return m = 4
            case 'five':
                return m = 5
            case 'six':
                return m = 6
            case 'seven':
                return m = 7
            case 'eight':
                return m = 8
            case 'nine':
                return m = 9
            default:
                return m
        }
    }).filter(f => typeof f === "number")
}

// function scoreboard(string) {
//     const dict = {
//         'nil': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//         'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
//     }
//     return string.match(/(nil|one|two|three|four|five|six|seven|eight|nine)/g).map(e => dict[e])
// }

scoreboard("The score is four nil") // [4,0]
scoreboard("new score: two three") // [2,3]
scoreboard("two two") // [2,2]
scoreboard("Arsenal just conceded another goal, two nil") // [2,0]