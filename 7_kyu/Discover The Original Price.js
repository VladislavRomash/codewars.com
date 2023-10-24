function discoverOriginalPrice(discountedPrice, salePercentage) {
    const result = (discountedPrice * 100) / (100 - salePercentage);
    return result % 1 === 0 ? result : Number(result.toFixed(2))
}


discoverOriginalPrice(75, 25)
discoverOriginalPrice(25, 75)
discoverOriginalPrice(75.75, 25)