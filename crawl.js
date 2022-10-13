function normalizeURL(url) {
    const myURL = url.parse(url)
    return myURL
}

module.exports = {
    normalizeURL
}
