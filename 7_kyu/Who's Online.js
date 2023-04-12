const friends = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const whosOnline = (friends) => {

    const online = []
    const offline = []
    const away = []

    friends.map(m => m.status === 'online' && m.lastActivity <= 10
        ? online.push(m.username)
        : m.status === 'offline'
            ? offline.push(m.username)
            : away.push(m.username)
    )

    if (online.length > 0 && offline.length > 0 && away.length > 0) return {online, offline, away}
    if (online.length > 0 && offline.length > 0) return {online, offline}
    if (online.length > 0 && away.length > 0) return {online, away}
    if (offline.length > 0 && away.length > 0) return {offline, away}

    return {}
}

whosOnline(friends)