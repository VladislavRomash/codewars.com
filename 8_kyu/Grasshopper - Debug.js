function weatherInfo(temp) {
    let c = convertToCelsius(temp)
    return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius
}

weatherInfo(50)
weatherInfo(23)