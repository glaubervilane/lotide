const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); // ensure we get back two elements
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
  });
  it("returns [] for [1]", () => {
    const oneElement = tail([1]);
    assert.strictEqual(oneElement.length, 0); // ensure we get back an empty array
    assert.strictEqual(Array.isArray(oneElement), true); // ensure the result is an array
  });
  it("returns [] for []", () => {
    const emptyArr = [];
    const emptyArrTail = tail(emptyArr);
    assert.strictEqual(emptyArrTail.length, 0); // the tail of an empty array should be an empty array.
  });
});