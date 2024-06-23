import type { TSConfig } from '@mnrendra/types-tsconfig'

import type { Options } from '../types'

import validateSkippedStacks from '@mnrendra/validate-skipped-stacks'

import { SKIPPED_STACK, TARGET_FILE } from '../consts'

import { read } from '@mnrendra/read-stacked-json'

/**
 * Read `tsconfig.json` file asynchronously.
 *
 * @param {Object} [options] - Optional params.
 *
 * @returns {Promise<TSConfig>} `tsconfig.json` JSON value.
 */
const main = async ({
  skippedStacks
}: Options = {
  skippedStacks: []
}): Promise<TSConfig> => {
  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Read `tsconfig.json` JSON asynchronously.
  const data = await read<TSConfig>(TARGET_FILE, {
    skippedStacks: validSkippedStacks,
    isJSON5: true
  })

  // Return `tsconfig.json` JSON value.
  return data
}

// Export the `main` as the default value.
export default main
