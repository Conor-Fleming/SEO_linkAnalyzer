const { JSDOM } = require("jsdom");

function normalizeURL(url) {
    const urlObject = new URL(url);
    //using methods from created URL object to access parts of url
    let output = urlObject.hostname + urlObject.pathname;

    //will need to do some checking to remove trailing '/'
    if (output.endsWith("/")) {
        output = output.substring(0, output.length - 1);
    }
    return output;
}

function getURLsFromHTML(htmlBody, baseURL){
    const dom = new JSDOM(htmlBody);
    links= dom.window.document.querySelectorAll('a');
    const urls = []
    for (const link of links){
        if (link.href.slice(0,1) == "/") {
            urls.push(baseURL + link.href)
        } else {
            urls.push(link.href)
        }
    }
    console.log(urls)
    return urls
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
}
