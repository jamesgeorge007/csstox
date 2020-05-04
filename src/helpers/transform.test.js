const transform = require("./transform");

test("Should convert CSS to JSS", () => {
  const expected = `{\n  "fontSize": "18px"\n}`;
  const result = transform.toJSS(`font-size: 18px;`);
  expect(result).toBe(expected);
});

test("Should convert CSS to RN", () => {
  const expected = `{\n  "fontSize": 18\n}`;
  const result = transform.toRN(`font-size: 18px;`);
  expect(result).toBe(expected);
});
