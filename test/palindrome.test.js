const { palindrome } = require('../utils/utility-for-testing')
describe('metodos de Util', () => {
  
  test('palindrome of mindhub', () => {
    const result = palindrome('mindhub')
    expect(result).toBe('buhdnim')
  })

  test('palindrome of empty string', () => {
    const result = palindrome('')
    expect(result).toBe('')
  })

  test('palindrome of undefined', () => {
    const result = palindrome()
    expect(result).toBeUndefined()
  })

})
