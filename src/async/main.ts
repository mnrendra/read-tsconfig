import type { TSConfig } from '@mnrendra/types-tsconfig'

import type { Options } from '../types'

import { resolve } from 'path'

import JSON5 from 'json5'

import { TARGET_FILE } from '../consts'
import { initPath, movePath } from '../utils'

import read from './read'

/**
 * Read `tsconfig.json` file asynchronously.
 * @returns `tsconfig.json` value
 */
const main = async ({
  skippedStacks
}: Options = {
  skippedStacks: []
}): Promise<TSConfig> => {
  // Initialize path.
  let path = initPath(TARGET_FILE, skippedStacks)

  // Read initial path.
  let data = await read(path)

  // Looping when data is `undefined`.
  while (!data) {
    // Move to the next path.
    path = movePath(path, '..')

    // Read the next path.
    data = await read(path)

    // Stop looping when unable to obtain the file data.
    if (path === resolve('/', TARGET_FILE) && !data) {
      throw new Error('Unable to obtain the file data!')
    }
  }

  // Parse data using JSON5.
  const parsedData = await JSON5.parse(data)

  // Return the parsed data.
  return parsedData
}

// Export `main` as the default value.
export default main
