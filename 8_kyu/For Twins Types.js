function typeValidation(variable, type) {
    return typeof variable === type
}

typeValidation(42, "number")
typeValidation("42", "number")