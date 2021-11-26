# NestJs from scratch

## What is Nest

We can find a simple definition in the nestjs website ("https://docs.nestjs.com/")
" Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform. "

One of the key features of nest is the use of Typescript that helps you find erros in while writing your code.

### What is TypeScript

We can, again, find a definition in the Typescript website ("https://www.typescriptlang.org/")
"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."

We can say that Typescript is a superset of javascript, or it is a new way to develop javascript code, but using some diferent concepts, the main one being: Types!.

#### Types?

Every variable or argument in a programming language has a type defined, if we look back a few years in some older languages like C, everything had to be sctrictly typed. We can think of types as a mold, or in other words something that will define the shape of something. In the begining it was usefull because computers back then were orders of magnitude slower then they are today, so every single bit you could save made a big difference.
Nowadays types are used to help programmers avoid mistakes, and Typescript helps you find those mistakes during development

## Install Nest

```sh
$ npm i -g @nestjs/cli
```

## Start a new project

```sh
$ nest new project-name
```

## Basic structure of Nest

- Controllers -> Handles incoming requests
- Services -> Handles data access and business logic
- Modules -> Groups together code
- Pipes -> Validates incoming data
- Filters -> Handles erros that occur during request handling
- Guards -> Handles authentication
- Interceptors -> adds extra logic to incoming requests or outgoing responses
- Repositories -> Handles data stored in a DB

## Handling HTTP

When working with a webserver there are a few things that are common, or a more general case, and somethings that will always happen;

### Request and Response

Every webserver will have to deal with Requests (something that the user wants) and response (the 'response' of the server)

### General case

1. The user send a request for something
2. The server validates the data contained in the request
3. The server make sure the user is authenticated
4. The server routes the request to a particular function
5. The server run some business logic
6. The server access a data base
7. The server creates the Response to the request

And for each one of those steps we can use NestJs and some of its tools to deal with

1. The user send a request for something (Using express or other implementation of a http routing tool)
2. The server validates the data contained in the request (@pipe)
3. The server make sure the user is authenticated (@guard)
4. The server routes the request to a particular function (@controller)
5. The server run some business logic (@Service)
6. The server access a data base (@repository)
7. The server creates the Response to the request (express again)

## Some conventions to Nest

- One class per file (with ome exceptions)
- Class names should include the kind of thing we are creating (A controller, a module etc)
- Name of class and name of file should always match up
- filename template: name.type_of_thing.ts
  - Example: app.controller.ts

# Starting the Project

After we run the 'nest new' command we can start working the app

## Module

### Creating a module

```sh
nest g module module-name
```

### What is a module

We can think of a module as a organizer, a way to keep everything that is related together, since we have a  lot of different files and responsobilites, so if we think of a user, in nest we will need:
- A User Repository -> that will define what that user is
- A User Controller -> that will route the requests
- A User service -> provides everything a user can do
- A User Guard -> makes sure that a user is authenticated
- A User pipe -> validates the incoming data, so we only accept data we can treat

### How to share services between modules

1. Add the service to the list of exports in its original module
2. Add the service to the list of imports in the target module 
3. Define a constructor in the target controller and add the services as an argument
  - This way Nest can make sure that all the instances needed are up and running

## Dependency injection

## Controllers

## Services

## Repositories