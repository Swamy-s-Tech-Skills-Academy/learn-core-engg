import { isPalindrome } from "./algo";

describe("Valid Palindrome - Two Pointers", () => {
    test("racecar should return true", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    test("A man, a plan, a canal: Panama should return true", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test("hello should return false", () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    test("Empty string should return true", () => {
        expect(isPalindrome("")).toBe(true);
    });

    test("Spaces and punctuation should be ignored", () => {
        expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    });

    test("Single character should return true", () => {
        expect(isPalindrome("x")).toBe(true);
    });
});
