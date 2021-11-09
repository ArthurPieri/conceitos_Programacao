# Classes

Class is a Blueprint to create an object with some fields(values) and methods(functions) to represente a 'thing'

# What are the differences between classes in TS and in ES

1. Existence of modifiers in Typescript

## Modifiers

Can change the visibility of a method in a class. When nothing is defined all methods are treated as Public

### Public

Shows that some method can be called any where, any time

### Private

Shows a method that can only be called by other methdos in this class

**There is no security bonus in changing a method to private**

We usually use this modifier to restrict methods that other devs can call
perhaps we have a method that changes to much of the class or something like that

### Protected

This method can be called by other methods in this class OR by other methods in child classes

## Classes and Types

When we create a new class in TS it will automatically create a Type that corresponds to this class

# Why do we care

Interfaces + calsses is how we get really strong code reuse in TS
