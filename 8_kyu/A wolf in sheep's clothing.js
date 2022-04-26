function warnTheSheep(queue) {
    let reversArray = queue.reverse()
    return reversArray[0] === 'wolf' ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${reversArray.indexOf('wolf')}! You are about to be eaten by a wolf!`
}

warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
warnTheSheep(["wolf"])
warnTheSheep(["sheep", "sheep", "wolf"])

