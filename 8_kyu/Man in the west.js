function checkTheBucket(bucket) {
    return bucket.includes('gold')
}

checkTheBucket(["gold", "stone", "stone", "stone", "stone"])
checkTheBucket(["stone", "stone", "stone", "stone", "stone"])