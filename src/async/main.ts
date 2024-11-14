import type { Options, TSConfig } from '../types'

import { read, validateSkippedStacks } from '@mnrendra/read-stacked-json'

import { SKIPPED_STACK, TARGET_FILE } from '../consts'

/**
 * Read `tsconfig.json` file asynchronously.
 *
 * @param {Options} [options] - Optional params.
 *
 * @returns {Promise<TSConfig>} `tsconfig.json` JSON value.
 * 
 * @see https://github.com/mnrendra/read-tsconfig#readme
 */
const main = async ({
  skippedStacks,
  stackTraceLimit
}: Options = {
  skippedStacks: [],
  stackTraceLimit: 10
}): Promise<TSConfig> => {
  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Read `tsconfig.json` JSON asynchronously.
  const data = await read<TSConfig>(TARGET_FILE, {
    skippedStacks: validSkippedStacks,
    isJSON5: true,
    stackTraceLimit
  })

  // Return `tsconfig.json` JSON value.
  return data
}

export default main
