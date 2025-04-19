function minRemoveParentheses(s) {
  let stack = [];
  let s_list = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    let val = s[i];

    if (stack.length > 0 && stack[stack.length - 1][0] === '(' && val === ')') {
      stack.pop();
    } 
    else if (val === '(' || val === ')') {
      stack.push([val, i]);
    }
  }

  for (let p of stack) {
    s_list[p[1]] = "";
  }

  let result = s_list.join('');
  return result;
}

module.exports = minRemoveParentheses;