function mostFrequentItemCount(collection) {
    const arr = [...new Set(collection)]
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(collection.filter(f => f === arr[i]).length)
    }
    return collection.length !== 0 ? Math.max(...result) : 0
}

mostFrequentItemCount([3, -1, -1])
mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
mostFrequentItemCount([])