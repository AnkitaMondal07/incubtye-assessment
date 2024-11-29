import { add } from './StringCalculator';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself for a single number input', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
});

test('returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});