function fiveLine(s) {
    return [...Array(5)].map((m, i) => s.trim().repeat(i + 1)).join('\n')
}

fiveLine("  a")
fiveLine("\txy \n")
fiveLine("           Ok               ")