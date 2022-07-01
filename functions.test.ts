const {shuffleArray} = require('./utils')
const arr1 = [1,2,3,4]
const arr2 = []
const arr3 = ['testing', 'array', 'shuffle']

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(arr1))).toBe(true)
        expect(Array.isArray(shuffleArray(arr2))).toBe(true)
        expect(Array.isArray(shuffleArray(arr3))).toBe(true)
    })
    test('same length as input array', () => {
        expect(shuffleArray(arr1)).toHaveLength(arr1.length)
        expect(shuffleArray(arr2)).toHaveLength(arr2.length)
        expect(shuffleArray(arr3)).toHaveLength(arr3.length)
    })
    
})