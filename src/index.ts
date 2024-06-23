import type { TSConfig } from '@mnrendra/types-tsconfig'

import type { Options } from './types'

import mainAsync from './async'
import mainSync from './sync'

export type {
  TSConfig,
  Options
}

export {
  mainAsync as readTSConfig,
  mainSync as readTSConfigSync
}
