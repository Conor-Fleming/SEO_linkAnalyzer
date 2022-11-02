const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main() {
    const args = process.argv.slice(2)
    if (args.length < 1 || args.length > 1) {
        console.log("incorrect number of arguments...exiting")
        return
    }
    console.log("Crawling Site...")
    var pages = {}

    pages = await crawlPage(args[0], args[0], pages)
    printReport(pages)
}

main()