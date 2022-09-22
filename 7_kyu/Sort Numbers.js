function solution(nums) {
    return nums !== null ? nums.sort((a, b) => a - b) : []
}

solution([1, 2, 3, 10, 5])
solution(null)
solution([])