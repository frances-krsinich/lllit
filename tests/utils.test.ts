import { describe, it, expect, beforeEach } from 'vitest'
import { getRandomIndex, replaceRandomWord, titleCaseString } from '../client/lib/utils.ts'

describe('getRandom', () => {

  it('Should return a numerical value', () => {
    const testArr = [1, 2, 3]
    expect(typeof getRandomIndex(testArr)).toBe('number')
  })

  it('Should return a number within the bounds of the array', () => {
    const testArr = [2, 3, 6, 1, 9]
    for (let i = 0; i <= 100; i++) {
      expect(getRandomIndex(testArr) < testArr.length)
    }
  })
})

describe('getRandomWord', () => {

  it('Should return a string', () => {
    const result =  replaceRandomWord('string', '', 'horses')
    expect(typeof result).toBe('string')
  })

  it('Should replace a random word with the specified string', () => {
    const originalString = 'Losers eat McDonalds'
    const replacementWord = 'KFC'
    const result = replaceRandomWord(originalString, ' ', replacementWord)

    expect(result).toMatch(/KFC/g)
    expect(result).toMatch(/Losers/g && /McDonalds/g || /eat/ && /Losers/g || /McDonalds/g && /eat/)
  })
})

describe('titleCaseString', () => {

  it('Should return a titlecased string', () => {
    expect(titleCaseString('this one time, at bandcamp')).toBe('This one time, at bandcamp')
  })
})