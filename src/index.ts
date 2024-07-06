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
  // @mnrendra/read-tsconfig
  Options,
  // @mnrendra/validate-skipped-stacks
  SkippedStacks,
  ValidSkippedStacks
} from './types'

export {
  mainAsync as readTSConfig,
  mainSync as readTSConfigSync,
  validateSkippedStacks
}
