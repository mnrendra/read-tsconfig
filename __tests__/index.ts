import {
  readTSConfig,
  readTSConfigSync,
  validateSkippedStacks
} from '..'

describe('Test all features:', () => {
  describe('Test `readTSConfig` feature:', () => {
    it('Should resolve a valid value when able to obtain the file!', async () => {
      const received = await readTSConfig()
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a valid value by adding a skipped stack!', async () => {
      const received = await readTSConfig({ skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should resolve a valid value by adding a list of skipped stacks!', async () => {
      const received = await readTSConfig({ skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })

  describe('Test `readTSConfigSync` feature:', () => {
    it('Should return a valid value when able to obtain the file!', () => {
      const received = readTSConfigSync()
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid value by adding a skipped stack!', () => {
      const received = readTSConfigSync({ skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid value by adding a list of skipped stacks!', () => {
      const received = readTSConfigSync({ skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })

  describe('Test `validateSkippedStacks` util:', () => {
    it('Should return a valid skipped-stacks when given a skipped-stack!', () => {
      const received = validateSkippedStacks('any')
      const expected = ['any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a string!', () => {
      const received = validateSkippedStacks('any', 'any')
      const expected = ['any', 'any']

      expect(received).toEqual(expected)
    })

    it('Should return a valid skipped-stacks when given a skipped-stack and a `skippedStacks` option with a list of strings!', () => {
      const received = validateSkippedStacks('any', ['any'])
      const expected = ['any', 'any']

      expect(received).toEqual(expected)
    })
  })
})
