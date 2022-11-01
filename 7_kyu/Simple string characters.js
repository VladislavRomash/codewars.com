function solve(s) {
    const one = s.match(/[A-Z]/g) || []
    const two = s.match(/[a-z]/g) || []
    const three = s.match(/[0-9]/g) || []
    const four = s.match(/[^a-z0-9]/gi) || []
    return [one.length, two.length, three.length, four.length]
}

solve("aAbBcC")
solve("Codewars@codewars123.com")
solve("bgA5<1d-tOwUZTS8yQ")
solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")
solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")