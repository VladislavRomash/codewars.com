function nameThatNumber(num) {
    let returnedValue = "";
    let tens = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};
    let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if (num === 0) {
        returnedValue = "zero";
    }
    if (num < 20 && num > 0) {
        returnedValue = units[num];
    }
    if (num >= 20) {
        returnedValue = tens[Math.floor((num / 10))] + ((num % 10 !== 0) ? " " : "") + units[num % 10];
    }
    return returnedValue;
}


nameThatNumber(4)
nameThatNumber(19)
nameThatNumber(99)