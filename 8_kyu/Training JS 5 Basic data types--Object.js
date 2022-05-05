function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

animal({name: "dog", legs: 4, color: "white"})
animal({name: "cock", legs: 2, color: "red"})
animal({name: "rabbit", legs: 4, color: "gray"})