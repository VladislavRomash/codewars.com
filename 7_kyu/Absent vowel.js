// function absentVowel(x) {
//     const vowel = ['a', 'e', 'i', 'o', 'u']
//     const arr = [...new Set(x.replace(/[^aeiou]/gi, '').split(''))]
//     let str = ''
//     for (let i = 0; i < vowel.length; i++) {
//         if (!arr.includes(vowel[i])) {
//             str = vowel[i]
//         }
//     }
//     switch (str) {
//         case "a":
//             return 0
//         case "e":
//             return 1
//         case "i":
//             return 2
//         case "o":
//             return 3
//         case "u":
//             return 4
//         default:
//             return str
//     }
// }

const absentVowel = string => [...'aeiou'].findIndex(letter => !string.includes(letter))

absentVowel("John Doe hs seven red pples under his bsket")
absentVowel("Bb Smith sent us six neatly arranged range bicycles")