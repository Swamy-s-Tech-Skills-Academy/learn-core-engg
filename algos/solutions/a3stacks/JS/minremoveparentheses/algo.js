function minRemoveParentheses(s) {
  // First pass: Remove invalid closing parentheses and mark potential invalid opening ones
  let stack = [];
  let s_list = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i); // Push index of opening parenthesis
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop(); // Valid pair found, pop the matching '('
      } else {
        s_list[i] = ''; // Invalid closing parenthesis, mark for removal
      }
    }
  }

  // Remove any unmatched opening parentheses
  while (stack.length > 0) {
    s_list[stack.pop()] = ''; // Mark unmatched '(' for removal
  }

  return s_list.join(''); // Join characters back together (empty strings will be ignored)
}

module.exports = minRemoveParentheses;