function pofi(n) {
    return ["1", "i", "-1", "-i"][n % 4]
}

// function pofi(n){
//     switch (n%4) {
//         case 0: return '1'
//         case 1: return 'i'
//         case 2: return '-1'
//         case 3: return '-i'
//     }
// }

pofi(0)
pofi(1)
pofi(2)
pofi(3)

// i²=−1 / x²+1=0.