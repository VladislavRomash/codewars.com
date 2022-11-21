function incrementer(nums) {
    return nums.map((m, i) => (m + (i + 1))).map(m => String(m).length > 1 ? Number(String(m).split('').slice(-1).join('')) : m)
}


incrementer([1, 2, 3])
incrementer([4, 6, 9, 1, 3])