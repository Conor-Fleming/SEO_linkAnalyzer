const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('takes input URL and normalizes 1', () => {
    input = "https://test.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes 2', () => {
    input = "https://TEST.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes 3', () => {
    input = "http://test.com/dev/"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes 4', () => {
    input = "https://test.COM/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('takes input URL and normalizes 5', () => {
    input = "https://Test.com/dev"
    result = normalizeURL(input)
    expect(result).toEqual("test.com/dev");
});

test('finds all a tags from HTML body 1', () => {
    base = "https://site.com"
    input = '<body><a href="https://test.site.com"</a><a href="https://site.com"</a><a href="https://ya.site.com"</a></body>';
    links = 3;
    result = getURLsFromHTML(input, base)
    expect(links).toEqual(result.length);
});

test('finds all a tags from HTML body 2', () => {
    base = "https://site.com"
    input = '<body><a href="/test/"</a><a href="https://test.site.com/yaya/yaya"</a><a href="https://test.site.com"</a><a href="https://site.com"</a><a href="/test/this/relative"</a>';
    links = 5
    result = getURLsFromHTML(input, base)
    expect(links).toEqual(result.length);
});

test('ensure relative to absolute 1', () => {
    base = "https://site.com";
    input = '<body><a href="/files/test"</a></body>';
    expected = "https://site.com/files/test";
    result = getURLsFromHTML(input, base);
    expect(result[0]).toEqual(expected);
});