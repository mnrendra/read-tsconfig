# @mnrendra/read-tsconfig
Read `tsconfig.json` file in your project.

## Install
```bash
npm i @mnrendra/read-tsconfig
```

## Usage

Using `CommonJS`:
```javascript
const { readTSConfig, readTSConfigSync } = require('@mnrendra/read-tsconfig')

// Asynchronously
readTSConfig()
  .then(({ compilerOptions }) => {
    console.log('asynchronously:', compilerOptions)
  })

// Synchronously
const { compilerOptions } = readTSConfigSync()
console.log('synchronously:', compilerOptions)
```

Using `ES Module`:
```javascript
import { readTSConfig, readTSConfigSync } from '@mnrendra/read-tsconfig'

// Asynchronously
readTSConfig()
  .then(({ compilerOptions }) => {
    console.log('asynchronously:', compilerOptions)
  })

// Synchronously
const { compilerOptions } = readTSConfigSync()
console.log('synchronously:', compilerOptions)
```

## Options
### • `skippedStacks`
*type: `string|string[]`*<br/>
*default: `[]`*<br/>
A name or a list of names of stack traces that need to be skipped.
### • `stackTraceLimit`
*type: `number`*<br/>
*default: `10`*<br/>
The `Error.stackTraceLimit` property specifies the number of stack frames to be collected by a stack trace.

## Utilities
```javascript
import {
  validateSkippedStacks // To validate a name or a list of names of stack traces that need to be skipped. More info: @see https://github.com/mnrendra/validate-skipped-stacks
} from '@mnrendra/read-tsconfig'
```

## Types
```typescript
import type {
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
  // @mnrendra/read-stacked-json
  SkippedStacks,
  ValidSkippedStacks,
  // @mnrendra/read-tsconfig
  Options
} from '@mnrendra/read-tsconfig'
```

## License
[MIT](https://github.com/mnrendra/read-tsconfig/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
