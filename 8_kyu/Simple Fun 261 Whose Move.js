function whoseMove(lastPlayer, win) {
    const playerOne = "black"
    const playerTwo = "white"
    return win ? lastPlayer : `${lastPlayer === playerOne ? playerTwo : playerOne}`
}


whoseMove("black", false)
whoseMove("white", true)
whoseMove("white", false)