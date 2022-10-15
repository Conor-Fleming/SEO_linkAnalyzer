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
    links = dom.window.document.querySelectorAll('a');
    const urls = []
    for (const link of links){
        if (link.href.slice(0,1) == "/") {
            urls.push(baseURL + link.href)
        } else {
            urls.push(link.href)
        }
    }
    return urls
}

function crawlPage(baseURL) {
    fetch(baseURL).then(function (response) {
        return response.text();
    }).then(function (html) {
        console.log(html);
    }).catch(function (err) {
        console.warn("Something went wrong", err);
    });
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage,
}

