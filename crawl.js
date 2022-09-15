import url from 'node:url';

function normalizeURL(url) {
    const myURL = url.parse(url)
    return myURL
}


modules.exports = {
    normalizeURL
}
