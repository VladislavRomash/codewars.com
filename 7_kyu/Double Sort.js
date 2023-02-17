function dbSort(a) {
    const num = a.filter(f => typeof f === "number").sort((a, b) => a - b)
    const str = a.filter(f => typeof f === "string").sort()
    return [...num, ...str]
}

dbSort([6, 2, 3, 4, 5])
dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])
dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"])