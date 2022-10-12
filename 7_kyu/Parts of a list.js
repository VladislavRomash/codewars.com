function partlist(arr) {
    return arr.map((m, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}


partlist(["vJQ", "anj", "mQDq", "sOZ"]) //  [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])