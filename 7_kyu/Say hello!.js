function greet(name) {
    return name ? `hello ${name}!` : null
}

greet("Niks")
greet(null)
greet('')