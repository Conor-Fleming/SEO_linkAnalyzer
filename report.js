function printReport(pages) {
    console.log("Starting report...")


}

function sortObj(object) {
    let sorted = []
    for (item in object) {
       sorted.push([item, object[item]])
    }
    sorted = sorted.sort(function(a, b) {
        return b[1] - a[1]
    })
    console.log(sorted)
    return sorted
}

module.exports = {
    printReport,
    sortObj
}