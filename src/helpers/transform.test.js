import { toJSS, toRN } from "./transform";

describe("Transform functions", () => {
  test("should convert to JSS", () => {
    expect(toJSS("font-size: 5px")).toEqual(`{\n  "fontSize": "5px"\n}`);
  });

  test("should return error string when input is bad while converting to JSS", () => {
    expect(toJSS("font-size")).toEqual("Error translating CSS to JSS");
  });

  test("should convert to React Native", () => {
    expect(toRN("font-size: 5px")).toEqual(`{\n  "fontSize": 5\n}`);
  });

  test("should return error string when input is bad while converting to RN", () => {
    expect(toRN("font-size")).toEqual("Error translating CSS to RN");
  });
});
