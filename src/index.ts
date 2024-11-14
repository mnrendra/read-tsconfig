import mainAsync from './async'
import mainSync from './sync'

export type {
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
  TypeAcquisition
} from '@mnrendra/types-tsconfig'

export {
  mainAsync as readTSConfig,
  mainSync as readTSConfigSync
}
