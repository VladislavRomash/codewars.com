function toTime(seconds) {
    const hour = Math.trunc(seconds / 3600)
    const minute = Math.trunc((seconds - hour * 3600) / 60)
    return `${hour} hour(s) and ${minute} minute(s)`
}


toTime(3600)
toTime(3601)
toTime(3500)
toTime(323500)
toTime(0)