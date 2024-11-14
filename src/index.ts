import mainAsync from './async'
import mainSync from './sync'

export {
  type SkippedStacks,
  type ValidSkippedStacks,
  validateSkippedStacks
} from '@mnrendra/read-stacked-json'

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
  Options
} from './types'

export {
  mainAsync as readTSConfig,
  mainSync as readTSConfigSync
}
