solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const M1 = givenMass1 * 0.001 / molarMass1
    const M2 = givenMass2 * 0.001 / molarMass2
    const T = temp + 273.15
    const R = 0.082
    return (((M1 + M2) * R * T) / volume) * 1000
}

solution(44, 30, 3, 2, 5, 50)
solution(60, 20, 10, 30, 10, 100)