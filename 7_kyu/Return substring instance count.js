// function solution(fullText, searchText) {
//     let count = 0
//     let position = fullText.indexOf(searchText)
//
//     for (let i = 0; i < fullText.length; i++) {
//         if (position !== -1) {
//             count++
//             position = fullText.indexOf(searchText, position + 1)
//         }
//     }
//     return count
// }

// const solution = (fullText, searchText) => fullText.split(searchText).length - 1;


solution('abcdeb', 'b')
solution('abc', 'b')
solution('abbc', 'bb')