import { isPalindrome } from "./palindrome/algo";

const testCases = [
    "racecar",
    "A man, a plan, a canal: Panama",
    "hello",
    "No 'x' in Nixon",
    "Was it a car or a cat I saw?",
    "12321",
    "not a palindrome"
];

testCases.forEach((test) => {
    console.log(`"${test}" → ${isPalindrome(test)}`);
});
