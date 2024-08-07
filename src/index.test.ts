import { TARGET_FILE } from '@/consts'

import mockedReadAsync from '@tests/mocks/readAsync'
import mockedReadSync from '@tests/mocks/readSync'
import mockedStackTrace from '@tests/mocks/stackTrace'
import unmockReadAsync from '@tests/unmocks/readAsync'
import unmockReadSync from '@tests/unmocks/readSync'
import unmockStackTrace from '@tests/unmocks/stackTrace'

import {
  readTSConfig,
  readTSConfigSync,
  validateSkippedStacks
} from '.'

jest.mock('@mnrendra/stack-trace', () => ({
  stackTrace: jest.fn()
}))

jest.mock('@mnrendra/read-stacked-file', () => ({
  read: jest.fn(),
  readSync: jest.fn(),
  validateSkippedStacks: jest.fn()
}))

describe('Test all features:', () => {
  describe('Test `readTSConfig` feature:', () => {
    describe('By mocking `@mnrendra/stack-trace` to return an invalid value:', () => {
      beforeAll(() => {
        unmockReadAsync(mockedReadAsync)
        mockedStackTrace.mockReturnValue([
          { getFileName: () => undefined },
          { getFileName: () => null },
          { getFileName: () => '' }
        ] as NodeJS.CallSite[])
      })

      afterAll(() => {
        unmockStackTrace(mockedStackTrace)
      })

      it('Should reject with an error when unable to locate the initial path!', async () => {
        const received = readTSConfig()
        const expected = Error(`Unable to locate the initial path of "${TARGET_FILE}.json".`)

        await expect(received).rejects.toThrow(expected)
      })
    })

    describe('By mocking `@mnrendra/read-stacked-file` to resolve an empty JSON string:', () => {
      beforeAll(() => {
        unmockStackTrace(mockedStackTrace)
        mockedReadAsync.mockResolvedValue('{}')
      })

      afterAll(() => {
        unmockReadAsync(mockedReadAsync)
      })

      it('Should resolve a valid value when able to obtain the file!', async () => {
        const received = await readTSConfig()
        const expected = expect.any(Object)

        expect(received).toEqual(expected)
      })
    })

    describe('By mocking `@mnrendra/read-stacked-file` to resolve a non-JSON string:', () => {
      beforeAll(() => {
        unmockStackTrace(mockedStackTrace)
        mockedReadAsync.mockResolvedValue('')
      })

      afterAll(() => {
        unmockReadAsync(mockedReadAsync)
      })

      it('Should reject with an error when unable to parse the file!', async () => {
        const received = readTSConfig()
        const expected = Error(`"${TARGET_FILE}.json" value cannot be parsed.`)

        await expect(received).rejects.toThrow(expected)
      })
    })

    describe('Without mocking anything:', () => {
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
  })

  describe('Test `readTSConfigSync` feature:', () => {
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
        const received = (): void => { readTSConfigSync() }
        const expected = Error(`Unable to locate the initial path of "${TARGET_FILE}.json".`)

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
        const received = readTSConfigSync()
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
        const received = (): void => { readTSConfigSync() }
        const expected = Error(`"${TARGET_FILE}.json" value cannot be parsed.`)

        expect(received).toThrow(expected)
      })
    })

    describe('Without mocking anything:', () => {
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
