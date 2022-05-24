function evil(n) {
    return n.toString(2).match(/1/g).length % 2 ? "It\'s Odious!" : "It\'s Evil!"
}

evil(1)
evil(2)
evil(3)
