const capitals = function (word) {
    return word.split('').map((m, i) => m === m.toUpperCase() ? i : m).filter(f => f === +(f))
};


capitals('CodEWaRs')