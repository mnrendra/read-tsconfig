import {
  readTSConfig,
  readTSConfigSync
} from '..'

describe('Test all features:', () => {
  describe('Test `readTSConfig` feature:', () => {
    it('Should resolve a valid value when able to obtain the file!', async () => {
      const received = await readTSConfig()
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
  })
})
