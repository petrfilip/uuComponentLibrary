import SumCounter from "../../src/core/sum-counter";

describe(`TgaPetrFilip.Core.SumCounter`, () => {
  it(`empty params`, () => {
    const result = SumCounter([]);
    expect(result).toEqual(0);
  });

  it(`one as special character`, () => {
    const result = SumCounter(["1"]);
    expect(result).toEqual(0);
  });

  it(`multiple special characters`, () => {
    const result = SumCounter(["1", "A"]);
    expect(result).toEqual(0);
  });

  it(`most simple usage - add two numbers`, () => {
    const result = SumCounter([1, 2]);
    expect(result).toEqual(3);
  });

  it(`array with special characters`, () => {
    const result = SumCounter([1, "A", 2, "B"]);
    expect(result).toEqual(3);
  });

  it(`array with decimal`, () => {
    const result = SumCounter([1.5, 1.4]);
    expect(result).toEqual(2.9);
  });

  it(`array with decimal and special characters`, () => {
    const result = SumCounter([1.5, "A", 1.4]);
    expect(result).toEqual(2.9);
  });

  it(`add decimal with int and special characters`, () => {
    const result = SumCounter([1, "A", 1.9]);
    expect(result).toEqual(2.9);
  });

  it(`sum multiple value`, () => {
    const result = SumCounter([1, "A", 1.5, 1, 9999997]);
    expect(result).toEqual(10000000.5);
  });
});
