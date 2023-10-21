function flickSwitch(arr) {
    let switcher = true
    return arr.map(m => m === 'flick' ? switcher = !switcher : switcher)
}


flickSwitch(["codewars", "flick", "code", "wars"])
flickSwitch(["flick", "chocolate", "adventure", "sunshine"])