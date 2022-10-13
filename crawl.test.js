const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('takes input URL and normalizes', () => {
    expect(normalizeURL("https://test.com/dev").toBe("test.com/dev"));
});

test('takes input URL and normalizes', () => {
    expect(normalizeURL("https://TEST.com/dev").toBe("test.com/dev"));
});

test('takes input URL and normalizes', () => {
    expect(normalizeURL("http://test.com/dev").toBe("test.com/dev"));
});

test('takes input URL and normalizes', () => {
    expect(normalizeURL("test.com/dev").toBe("test.com/dev"));
});

test('takes input URL and normalizes', () => {
    expect(normalizeURL("https://Test.com/dev").toBe("test.com/dev"));
});