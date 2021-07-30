const { test, expect } = require('@jest/globals');
const sum = require('./sum.js');

test("adds 2 and 1 to equal 3", () => {
    expect(sum(2, 1)).toBe(3);
})
