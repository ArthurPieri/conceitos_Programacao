# Arrays in TS

## Typed arrays

Arrays where each element is some consistent type of value

## Where to use

Any time we need to represent a collection of records with some arbitrary sort order

## Why do we care

- TS can do type inferecen when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with 'map', 'forEach', 'reduce' functions
- Flexible - arrays can still contain multiple different types

## Flexibe Types

We can declare more than one type of value to the array like

```ts
let array: (number | string)[] = [];
```

- The code above says we have an array that can contain either a number or a string

# Tuples

- Array-like structure where each element represents some property of a record

Object representing a 'drink':

| Color | Carbonated | Sugar |
| ----- | ---------- | ----- |
| Brown | true       | 40    |

How to represent it with an array?

Maybe we could use:

```js
['Brown', 'true', '40'];
```

But with this way we may lose some information

A Tuple has a fixed order.
It is not actualy very useful...
In almost every case its better to use an object
