function main() {
    const args = process.argv.slice(2)
    if (args.length < 1 || args.length > 1) {
        console.log("incorrect number of arguments...exiting")
        return
    }
    console.log("Crawling Site...")
}

main()