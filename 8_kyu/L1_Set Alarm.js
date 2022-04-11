function setAlarm(employed, vacation) {
    return employed === true ? !(employed === true && vacation === true) : false
}