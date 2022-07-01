const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    expect(shuffleArray()).toBe([]);
    expect(shuffleArray([])).toEqual(shuffleArray([]))
})