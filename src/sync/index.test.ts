import { TARGET_FILE } from '@consts'

import mockedReadSync from '@tests/mocks/readSync'
import mockedStackTrace from '@tests/mocks/stackTrace'
import unmockReadSync from '@tests/unmocks/readSync'
import unmockStackTrace from '@tests/unmocks/stackTrace'

import index from '.'

jest.mock('@mnrendra/stack-trace', () => ({
  stackTrace: jest.fn()
}))

jest.mock('@mnrendra/read-stacked-file', () => ({
  readSync: jest.fn()
}))

describe('Test `index` sync:', () => {
  describe('By mocking `@mnrendra/stack-trace` to return an invalid value:', () => {
    beforeAll(() => {
      unmockReadSync(mockedReadSync)
      mockedStackTrace.mockReturnValue([
        { getFileName: () => undefined },
        { getFileName: () => null },
        { getFileName: () => '' }
      ] as NodeJS.CallSite[])
    })

    afterAll(() => {
      unmockStackTrace(mockedStackTrace)
    })

    it('Should throw an error when unable to locate the initial path!', () => {
      const received = (): void => { index() }
      const expected = Error(`Unable to locate the initial path of "${TARGET_FILE}".`)

      expect(received).toThrow(expected)
    })
  })

  describe('By mocking `@mnrendra/read-stacked-file` to return an empty JSON string:', () => {
    beforeAll(() => {
      unmockStackTrace(mockedStackTrace)
      mockedReadSync.mockReturnValue('{}')
    })

    afterAll(() => {
      unmockReadSync(mockedReadSync)
    })

    it('Should return a valid value when able to obtain the file!', () => {
      const received = index()
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })

  describe('By mocking `@mnrendra/read-stacked-file` to return a non-JSON string:', () => {
    beforeAll(() => {
      unmockStackTrace(mockedStackTrace)
      mockedReadSync.mockReturnValue('')
    })

    afterAll(() => {
      unmockReadSync(mockedReadSync)
    })

    it('Should throw an error when unable to parse the file!', () => {
      const received = (): void => { index() }
      const expected = Error(`"${TARGET_FILE}" value cannot be parsed.`)

      expect(received).toThrow(expected)
    })
  })

  describe('Without mocking anything:', () => {
    it('Should return a valid value when able to obtain the file!', () => {
      const received = index()
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid value by adding a skipped stack!', () => {
      const received = index({ skippedStacks: 'any' })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })

    it('Should return a valid value by adding a list of skipped stacks!', () => {
      const received = index({ skippedStacks: ['any'] })
      const expected = expect.any(Object)

      expect(received).toEqual(expected)
    })
  })
})
