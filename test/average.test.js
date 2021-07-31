const { average } = require('../utils/utility-for-testing');
describe('metodos de Util - Average', () => {
    test('average of 2, 4, 6', () =>{
        const result = average([2, 4, 6])
        expect(result).toBe(4)
    })
    test('average of 1, 2, 3, 4', () =>{
        const result = average([1, 2, 3, 4])
        expect(result).toBe(2.5)
    })
    test('average of empty array', () =>{
        const result = average([])
        expect(result).toBe(NaN)
    })
    test('average of array with letters', () =>{
        const result = average([2, 3, "hola"])
        expect(result).toBe(NaN)
    })
})