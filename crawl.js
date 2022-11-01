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

async function crawlPage(baseURL, currentURL, pages) {
  if (getDomain(baseURL) !== getDomain(currentURL)){
    return pages
  }

  //normalize func is stripping the 'https://' and as a result the fetch method doesnt like it
  currentURL = normalizeURL(currentURL)

  if (pages[currentURL] > 0) {
    pages[currentURL]++
    return pages
  }
  pages[currentURL] = 1

  //dont know why i need this yet
  currentURL = "https://" + currentURL
  try{
    const resp = await fetch(currentURL)
    if (resp.status > 399) {
      console.log(`Got error: ${resp.status}`)
      return pages
    }
    
    const contentType = resp.headers.get('content-type')
    if (contentType.includes('text/html') !== true){
      console.log(`non html response: ${contentType}`)
      return pages
    }
    console.log(`crawling: ${currentURL}`)
    console.log(await resp.text())

  } catch (err) {
    console.log(err.message)
  }
  
  //call getURLs func and recursivley get urls and update pages
  
  return pages
}

function getDomain(url) {
  let domain = (new URL(url))
  return domain.hostname
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage,
}

