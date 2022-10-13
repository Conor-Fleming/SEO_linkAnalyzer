const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('takes input URL and normalizes', () => {
    input = "https://test.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes', () => {
    input = "https://TEST.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes', () => {
    input = "http://test.com/dev/"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes', () => {
    input = "https://test.COM/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes', () => {
    input = "https://Test.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('finds all a tags from HTML body', () => {
    base = "https://site.com"
    input = '<body><a href="https://test.site.com"</a><a href="https://site.com"</a><a href="https://ya.site.com"</a></body>';
    links = 3;
    result = getURLsFromHTML(input, base)
    console.log(result)
    expect(result.length).toEqual(links);
});

test('finds all a tags from HTML body', () => {
    base = "https://site.com"
    input = '<body><a href="https://test.site.com"</a><a href="https://test.site.com"</a><a href="https://test.site.com"</a><a href="https://site.com"</a><a href="https://ya.site.com"</a></body>';
    links = 5;
    result = getURLsFromHTML(input, base)
    console.log(result)
    expect(result.length).toEqual(links);
});

test('ensure relative to absolute', () => {
    //result = getURLsFromHTML(input, base)
    
});