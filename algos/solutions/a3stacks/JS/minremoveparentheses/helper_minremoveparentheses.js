// Helper functions for the Minimum Remove to Make Valid Parentheses algorithm

/**
 * Checks if a character is a parenthesis.
 * @param {string} char - The character to check.
 * @returns {boolean} - True if the character is '(' or ')', false otherwise.
 */
function isParenthesis(char) {
  return char === '(' || char === ')';
}

module.exports = {
  isParenthesis,
};