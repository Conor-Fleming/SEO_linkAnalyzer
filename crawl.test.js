const { normalizeURL } = require('./crawl.js')
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