function whoIsPaying(name) {
    return name.length > 2 ? [name, name.slice(0, 2)] : [name]
}

whoIsPaying("Mexico")
whoIsPaying("Melissa")
whoIsPaying("Me")