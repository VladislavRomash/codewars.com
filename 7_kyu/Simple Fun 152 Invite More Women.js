function inviteMoreWomen(L) {
    const women = L.filter(f => f === -1)
    const men = L.filter(f => f === 1)
    return men.length > women.length
}


inviteMoreWomen([1, -1, 1])
inviteMoreWomen([1, 1, 1])
inviteMoreWomen([-1, -1, -1])
inviteMoreWomen([1, -1])