function printReport(pages) {
    console.log("Starting report...")
    var sorted = sortObj(pages)
    for (let i = 0; i < sorted.length; i++) {
        console.log(`Found ${sorted[i][1]} links to ${sorted[i][0]}`)
    }
}

function sortObj(object) {
    let sorted = []
    for (item in object) {
       sorted.push([item, object[item]])
    }
    sorted = sorted.sort(function(a, b) {
        return b[1] - a[1]
    })
    return sorted
}

module.exports = {
    printReport,
    sortObj
}