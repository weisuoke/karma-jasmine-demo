# Jasmine.md

## xdescribe vs fdescribe

- **fdescribe** - focused describe. If it exists, jasmine will run only fdescribe spec and ignore other type of describe (describe and xdescribe).
- **xdescribe** - disabled describe. It will never be executed.

Some scenarios to gain more understanding:

Scenario 1 - describe only

```js
describe('test1', () => { 
    // .. 
})
describe('test2', () => { 
    // .. 
})
describe('test3', () => { 
    // .. 
})
// Specs executed:
// test1
// test2
// test3
```

Scenario 2 - single fdescribe

```js
fdescribe('test1', () => { 
    // .. 
})
describe('test2', () => { 
    // .. 
})
describe('test3', () => { 
    // .. 
})
// Specs executed:
// test1
```

Scenario 3 - multiple fdescribe

```js
fdescribe('test1', () => { 
    // .. 
})
fdescribe('test2', () => { 
    // .. 
})
describe('test3', () => { 
    // .. 
})
// Specs executed:
// test1
// test2
```

Scenario 4 - single xdescribe

```js
xdescribe('test1', () => { 
    // .. 
})
xdescribe('test2', () => { 
    // .. 
})
describe('test3', () => { 
    // .. 
})

// Specs executed:
// test2
// test3
```

Scenario 5 - fdescribe and xdescribe exists

```js
fdescribe('test1', () => { 
    // .. 
})
xdescribe('test2', () => { 
    // .. 
})
describe('test3', () => { 
    // .. 
})

// Specs executed:
// test1
```