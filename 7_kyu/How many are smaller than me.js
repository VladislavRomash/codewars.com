function smaller(nums) {
    return nums.map((m, i) => {
        return nums.slice(i).filter(f => f < m).length
    })
}

smaller([5, 4, 3, 2, 1])
smaller([1, 2, 0])