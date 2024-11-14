import type { TSConfig } from '@mnrendra/types-tsconfig'

import { readSync } from '@mnrendra/read-stacked-json'

import { TARGET_FILE } from '../consts'

/**
 * Read `tsconfig.json` file synchronously.
 *
 * @returns {TSConfig} `tsconfig.json` JSON value.
 *
 * @see https://github.com/mnrendra/read-tsconfig#readme
 */
const main = (): TSConfig => {
  // Read `tsconfig.json` JSON synchronously.
  const data = readSync<TSConfig>(TARGET_FILE, {
    isJSON5: true,
    useCWD: true
  })

  // Return `tsconfig.json` JSON value.
  return data
}

export default main
