function solve(s) {
    return s.split(/[^0-9]/).map(m => Number(m)).sort((a, b) => b - a)[0]
}


solve('gh12cdy695m1')
solve('2ti9iei7qhr5')
solve('vih61w8oohj5')