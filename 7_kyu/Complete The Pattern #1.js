function pattern(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += `${i.toString().repeat(i)}\n`
    }
    return output.slice(0, -1);
}

pattern(1)
pattern(2)
pattern(5)