function minRemoveParentheses(s) {
  let stack = [];
  let s_list = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    let val = s[i];

    if (val === '(') {
      stack.push(i); // Push index of '('
    } else if (val === ')') {
      if (stack.length > 0 && s_list[stack[stack.length - 1]] === '(') {
        stack.pop(); // Valid pair, pop the matching '('
      } else {
        s_list[i] = ''; // Unmatched ')', remove it
      }
    }
  }

  // Remove any unmatched '(' left in the stack
  while (stack.length > 0) {
    s_list[stack.pop()] = '';
  }

  return s_list.join('');
}

module.exports = minRemoveParentheses;