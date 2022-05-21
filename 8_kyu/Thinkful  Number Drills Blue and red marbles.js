function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const totalBlueInBag = blueStart - bluePulled
    const totalRedInBag = redStart - redPulled
    const totalInBag = totalBlueInBag + totalRedInBag
    return totalBlueInBag / totalInBag
}


guessBlue(5, 5, 2, 3)
guessBlue(5, 7, 4, 3)