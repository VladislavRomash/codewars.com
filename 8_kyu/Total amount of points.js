function points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
        let eachGames = games[i].split(':')
        if (eachGames[0] > eachGames[1]) {
            totalPoints += 3
        } else if (eachGames[0] < eachGames[1]) {
            totalPoints += 0
        } else if (eachGames[0] === eachGames[1]) {
            totalPoints += 1
        }
    }
    return totalPoints
}