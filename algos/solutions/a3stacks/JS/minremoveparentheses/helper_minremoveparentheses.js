// Helper functions for the Minimum Remove to Make Valid Parentheses algorithm

/**
 * Checks if a character is a parenthesis.
 * @param {string} char - The character to check.
 * @returns {boolean} - True if the character is '(' or ')', false otherwise.
 */
function isParenthesis(char) {
  return char === '(' || char === ')';
}

function showMinRemoveParenthesesDemo(algo) {
  const inputs = [
    "ar)ab(abc)abd(",
    "a)rt)lm(ikgh)",
    "aq)xy())qf(a(ba)q)",
    "(aw))kk())(w(aa)(bv(wt)r)",
    "(qi)(kl)((y(yt))(r(q(g)s)"
  ];

  inputs.forEach((input, index) => {
    const result = algo(input);
    console.log(`${index + 1}.	Input: '${input}'`);
    console.log(`	Valid parentheses: '${result}'`);
    console.log('-'.repeat(100));
  });
}

module.exports = {
  isParenthesis,
  showMinRemoveParenthesesDemo
};