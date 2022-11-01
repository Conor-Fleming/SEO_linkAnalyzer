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
        if (link.href.slice(0,1) === "/") {
          try{
            urls.push(new URL(baseURL + link.href))
          } catch(err) {
            console.log(err.message, link.href)
          }
        } else {
          try {
            urls.push(new URL(link.href, baseURL))
          } catch (err) {
            console.log(err.message, "here")
          }   
        }
    }
    return urls
}

async function crawlPage(baseURL, currentURL, pages) {
  const currUrlObject = new URL(currentURL, baseURL)
  const baseUrlObject = new URL(baseURL)
  if (currUrlObject.hostname !== baseUrlObject.hostname){
    return pages
  }

  //normalize func is stripping the 'https://' and as a result the fetch method doesnt like it
  currentNormalized = normalizeURL(currentURL)

  if (pages[currentNormalized] > 0) {
    pages[currentNormalized]++
    return pages
  }
  pages[currentNormalized] = 1

  let htmlBody = ''
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
    htmlBody = await resp.text()
  } catch (err) {
    console.log(err.message)
  }

    console.log(`crawling: ${currentURL}`)
    //console.log(await resp.text())
    var urlsToCrawl = getURLsFromHTML(htmlBody, baseURL)

    for (link of urlsToCrawl) {
      pages = await crawlPage(baseURL, link, pages)
    }
  
  return pages
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage,
}

