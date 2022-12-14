const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { sortObj, printReport } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('takes input URL and normalizes 1', () => {
    input = "https://test.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev")
});

test('takes input URL and normalizes 2', () => {
    input = "https://TEST.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev")
});

test('takes input URL and normalizes 3', () => {
    input = "http://test.com/dev/"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev")
});

test('takes input URL and normalizes 4', () => {
    input = "https://test.COM/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev")
});

test('takes input URL and normalizes 5', () => {
    input = "https://Test.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev")
});

/*test('finds all a tags from HTML body 1', () => {
    base = "https://site.com"
    input = '<body><a href="https://test.site.com"</a><a href="https://site.com"</a><a href="https://ya.site.com"</a></body>'
    expected = [ 'https://test.site.com/', 'https://site.com/', 'https://ya.site.com/' ]
    result = getURLsFromHTML(input, base)
    expect(result).toEqual(expected)
});

test('finds all a tags from HTML body 2', () => {
    base = "https://site.com"
    input = '<body><a href="/test/"</a><a href="https://test.site.com/yaya/yaya"</a><a href="https://test.site.com"</a><a href="https://site.com"</a><a href="/test/this/relative"</a>'
    expected =  [ 'https://site.com/test/', 'https://test.site.com/yaya/yaya', 'https://test.site.com/', 'https://site.com/', 'https://site.com/test/this/relative' ]
    result = getURLsFromHTML(input, base)
    expect(result.href).toEqual(expected)
});

test('ensure relative to absolute 1', () => {
    base = "https://site.com"
    input = '<body><a href="/files/test"</a></body>'
    expected = "https://site.com/files/test"
    result = getURLsFromHTML(input, base)
    expect(result).toEqual(expected)
});*/

test('test sort func 1', () => {
    input = {"testlink1": 50, "testlink2": 1, "testlink3": 3, "testlink4": 29}
    expected = [["testlink1", 50], ["testlink4", 29], ["testlink3", 3], ["testlink2", 1]]
    result = sortObj(input)
    //console.log(result)
    expect(result).toEqual(expected)
});

test('test sort func 2', () => {
    input = {"testlink1": 1, "testlink2": 1, "testlink3": 3, "testlink4": 1}
    expected = [["testlink3", 3], ["testlink1", 1], ["testlink2", 1], ["testlink4", 1]]
    result = sortObj(input)
    //console.log(result)
    expect(result).toEqual(expected)
});

test('test sort func 3', () => {
    input = {"testlink1": 0, "testlink2": 0, "testlink3": 3, "testlink4": 11}
    expected = [["testlink4", 11], ["testlink3", 3], ["testlink1", 0], ["testlink2", 0]]
    result = sortObj(input)
   //console.log(result)
    expect(result).toEqual(expected)
});