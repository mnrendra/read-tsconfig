import type { Options, TSConfig } from '../types'

import { readSync, validateSkippedStacks } from '@mnrendra/read-stacked-json'

import { SKIPPED_STACK, TARGET_FILE } from '../consts'

/**
 * Read `tsconfig.json` file synchronously.
 *
 * @param {Options} [options] - Optional params.
 *
 * @returns {TSConfig} `tsconfig.json` JSON value.
 */
const main = ({
  skippedStacks,
  stackTraceLimit
}: Options = {
  skippedStacks: [],
  stackTraceLimit: 10
}): TSConfig => {
  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Read `tsconfig.json` JSON synchronously.
  const data = readSync<TSConfig>(TARGET_FILE, {
    skippedStacks: validSkippedStacks,
    isJSON5: true,
    stackTraceLimit
  })

  // Return `tsconfig.json` JSON value.
  return data
}

// Export the `main` as the default value.
export default main
