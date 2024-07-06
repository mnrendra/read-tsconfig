import { validateSkippedStacks } from '@mnrendra/read-stacked-json'

import mainAsync from './async'
import mainSync from './sync'

export type {
  // @mnrendra/types-tsconfig
  TSConfig,
  BuildOptions,
  CompileOnSave,
  CompilerOptions,
  BaseURL,
  Paths,
  Exclude,
  Extends,
  Files,
  Include,
  MDX,
  References,
  TSNode,
  WatchOptions,
  TypeAcquisition,
  // @mnrendra/validate-skipped-stacks
  SkippedStacks,
  ValidSkippedStacks,
  // @mnrendra/read-tsconfig
  Options
} from './types'

export {
  mainAsync as readTSConfig,
  mainSync as readTSConfigSync,
  validateSkippedStacks
}
