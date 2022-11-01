function printReport(pages) {
    console.log("Starting report...")


}

function sortObj(object) {
    let sorted = []
    for (url in pages) {
        sorted.push([url, pages[url]])
    }
    
}

module.exports = {
    printReport
}