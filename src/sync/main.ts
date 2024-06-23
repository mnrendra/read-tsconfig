import type { TSConfig } from '@mnrendra/types-tsconfig'

import type { Options } from '../types'

import validateSkippedStacks from '@mnrendra/validate-skipped-stacks'

import { SKIPPED_STACK, TARGET_FILE } from '../consts'

import { readSync } from '@mnrendra/read-stacked-json'

/**
 * Read `tsconfig.json` file synchronously.
 *
 * @param {Object} [options] - Optional params.
 *
 * @returns {TSConfig} `tsconfig.json` JSON value.
 */
const main = ({
  skippedStacks
}: Options = {
  skippedStacks: []
}): TSConfig => {
  // Validate skipped stacks.
  const validSkippedStacks = validateSkippedStacks(SKIPPED_STACK, skippedStacks)

  // Read `tsconfig.json` JSON synchronously.
  const data = readSync<TSConfig>(TARGET_FILE, {
    skippedStacks: validSkippedStacks,
    isJSON5: true
  })

  // Return `tsconfig.json` JSON value.
  return data
}

// Export the `main` as the default value.
export default main
