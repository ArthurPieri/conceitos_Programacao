# Types

## Definition + Overview

Tpe is an easy way to refer to the different properties + function that a value has.

Types are shortcuts to understanding values and properties

### What are the types in TS?

Types in TS can be first divided into 2 groups:

1. Primitive Types - All the basic types cannot be changed.

- Number
- boolean
- void
- undefined
- string
- symbol
- null

2. Object Types - Any types that we create or are built into the language.

- function
- arrays
- classes
- objects

3. 'Any' Type
   It shows when the TS compiler cannot infer the type of that object.
   Basicly remove the use of the Type from Typescript and gives simply plain old javascript

- A type, just as 'string' or 'boolean'
- Means TS has no idea what this is - can't check for correct property references
- **Avoid variables with 'any' at all costs**

| Type    | Values                                   | Primitive? |
| ------- | ---------------------------------------- | ---------- |
| String  | 'hi there' , "" , 'Today is monday'      | yes        |
| Number  | .025 , -20 , 4000                        | yes        |
| Boolean | true , false                             | yes        |
| Date    | new Date()                               | no         |
| Todo    | {id: 1, completed: true, title: 'Trash'} | no         |

## Why do we care?

1. Types are used by the Typescript Compiler to analyze our code for erros
2. Types allow other engineers to understand what values are flowing around our codebase

## Examples

```ts
const today = new Date();

today.getMonth();

const person = {
  age: 20,
};

class Color {}
const red = new Color();
```

## When to use this?

All the time

# Type annotations and inference

## Type Annotations (Explicit)

Code we add to tell typescript what type of value a variable will refer to

- We (devs) tell typescript the type

When to use:

- When we declare a variable on one line the initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value

## Type inference (Implict)

Typescript tries to figure out what type of value a variable refers to

- Typescript tries to tell the type
- If declaration and initialization of a variable are on the same line, typescript will figure out the type of that variable for us
- We will rely on it a lot

# Type Annotations and Inference for Functions

## Type annotations for functions

Code we add to tell typescript what type of arguments a function will receive and what type of values it will return

## Type Inference for Functions

Typescript tries to figure out what type of value a function will return.

**Works only to the return value, not to the arguments.**

# Anottations arround objects
