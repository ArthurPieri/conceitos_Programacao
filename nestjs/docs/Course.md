# Nestjs basics

We'll start by writing everything by hand, to grasp a better understanding of the functions of nest, after that we can use the Nest CLI to automate part of the process

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

And for everyone of those steps we can use NestJs and some of its tools to deal with each one

1. The user send a request for something (Using express or other implementation of a http routing tool)
2. The server validates the data contained in the request (@pipe)
3. The server make sure the user is authenticated (@guard)
4. The server routes the request to a particular function (@controller)
5. The server run some business logic (@Service)
6. The server access a data base (@repository)
7. The server creates the Response to the request (express again)

We will discuss further all the tools presented here, but this is just a introduction

## 'Parts' of Nest

- Controllers -> Handles incoming requests
- Services -> Handles data access and business logic
- Modules -> Groups together code
- Pipes -> Validates incoming data
- Filters -> Handles erros that occur during request handling
- Guards -> Handles authentication
- Interceptors -> adds extra logic to incoming requests or outgoing responses
- Repositories -> Handles data stored in a DB

## Some conventions to Nest

- One class per file (with ome exceptions)
- Class names should include the kind of thing we are creating (A controller, a module etc)
- Name of class and name of file should always match up
- filename template: name.type_of_thing.ts
  - Example: app.controller.ts
