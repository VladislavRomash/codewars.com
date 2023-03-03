function flyBy(lamps, drone) {
    return lamps.split('').map((m, i) => i < drone.length ? 'o' : m).join('')
}


flyBy('xxxxxx', '====T')
flyBy('xxxxxxxxx', '==T')
flyBy('xxxxxxxxxxxxxxx', '=========T')