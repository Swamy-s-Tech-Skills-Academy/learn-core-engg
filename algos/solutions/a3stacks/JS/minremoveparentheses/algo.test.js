const minRemoveParentheses = require('./algo');

describe('Minimum Remove to Make Valid Parentheses', () => {
  test('Example 1', () => {
    expect(minRemoveParentheses("ar)ab(abc)abd(")).toBe("arab(abc)abd");
  });

  test('Example 2', () => {
    expect(minRemoveParentheses("a)rt)lm(ikgh)")).toBe("artlm(ikgh)");
  });

  test('Example 3', () => {
    expect(minRemoveParentheses("aq)xy())qf(a(ba)q)")).toBe("aqxy()qf(a(ba)q)");
  });

  test('Example 4', () => {
    expect(minRemoveParentheses("(aw))kk())(w(aa)(bv(wt)r)")).toBe("(aw)kk()w(aa)(bv(wt)r)");
  });

  test('Example 5', () => {
    expect(minRemoveParentheses("(qi)(kl)((y(yt))(r(q(g)s)")).toBe("(qi)(kl)(y(yt))r(q(g)s)");
  });
});