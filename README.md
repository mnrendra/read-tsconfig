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

## Types
```typescript
import type {
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
} from '@mnrendra/read-tsconfig'
```

## License
[MIT](https://github.com/mnrendra/read-tsconfig/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
