import type { TSConfig } from '@mnrendra/types-tsconfig'

import { read } from '@mnrendra/read-stacked-json'

import { TARGET_FILE } from '../consts'

/**
 * Read `tsconfig.json` file asynchronously.
 *
 * @returns {Promise<TSConfig>} `tsconfig.json` JSON value.
 *
 * @see https://github.com/mnrendra/read-tsconfig#readme
 */
const main = async (): Promise<TSConfig> => {
  // Read `tsconfig.json` JSON asynchronously.
  const data = await read<TSConfig>(TARGET_FILE, {
    isJSON5: true,
    useCWD: true
  })

  // Return `tsconfig.json` JSON value.
  return data
}

export default main
