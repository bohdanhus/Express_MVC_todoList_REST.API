const Plural = require("../server.js")

describe('pluralization', () => {
  it('has no effect with 1', () => {
      expect(plural(1, 'плюс')).toBe('1 плюс');
  })
  it('adds \ "s\" for 2', () => {
    expect(plural(2, 'плюса')).toBe('2 плюса');
  })
  it('adds \ "s\" for 2 and more', () => {
    expect(plural(2, 'плюсов')).toBe('2 плюсов');
  })
})