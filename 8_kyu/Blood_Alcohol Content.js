function bloodAlcoholContent(drinks, weight, sex, time) {
    sex = sex === 'male' ? 0.73 : 0.66
    return +(((drinks.ounces * drinks.abv * 5.14 / weight * sex) - .015 * time).toFixed(4))
}

bloodAlcoholContent({ounces: 12.5, abv: 0.4}, 190, 'male', 1)
bloodAlcoholContent({ounces: 180, abv: 0.05}, 160, 'female', 1)
bloodAlcoholContent({ounces: 50, abv: 0.14}, 250, 'male', 3)
bloodAlcoholContent({ounces: 20, abv: 0.4}, 100, 'female', 2)