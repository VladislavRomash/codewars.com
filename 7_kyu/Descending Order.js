function descendingOrder(n) {
    return +(n.toString().split('').sort((a, b) => b - a).join(''))
}


descendingOrder(0)
descendingOrder(1)
descendingOrder(111)
descendingOrder(15)