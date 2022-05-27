function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    const status = {
        status: msg
    }
    return status
}

getStatus(true).status