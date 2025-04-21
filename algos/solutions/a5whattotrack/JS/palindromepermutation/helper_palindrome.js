// palindromepermutation/helper_palindrome.js

function showPalindromeDemo(permutePalindrome) {
    let strArray = ["baefeab", "abc", "xzz", "jjadd", "kllk"];

    for (let i = 0; i < strArray.length; i++) {
        console.log(i + 1 + ".\tInput string: ", strArray[i]);
        let result = permutePalindrome(strArray[i]);

        if (result) {
            console.log("\n\tInput string has permutations that are palindromes");
        } else { 
            console.log("\n\tInput string does not have a permutation that's a palindrome");
        }
        console.log('-'.repeat(100));
    }
}

module.exports = { showPalindromeDemo };