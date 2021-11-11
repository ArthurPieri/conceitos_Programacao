# Creating a simple messages project

## Requirements

1. Post a message
2. Get all messages
3. Get message by ID

## How to create Projects with @nestjs/cli

installing nest cli

```Shell
$ npm install -g @nestjs/cli
```

### Creating a new Project

```Shell
$ nest new project_name
```

### Creating a new Module

```Shell
$ nest generate module module_name
# We should use the name without the word module
# So if we have the AppModule, we would use App as the module_name
```

### Creating a new Controller

```Shell
$ nest generate controller module_name/controller_name --flat
# We should use the name without the word controller
# module_name is the name of the folder
# controller_name is the name of the controller Class
# --flat tells the cli no to create a extrafolder called 'controllers'
```

### \[Optional] Installing REST Client extension

1. in extensions, search for REST Client by Huachao Mao and install it
2. in the root of the project, create an file named: requests.http
3. in the file start calling the routes

```js
### List all messages
GET http://localhost:3000/messages

### Create a new message
POST http://localhost:3000/messages
content-type: application/json

{
"content": "Well, Hello there"
}

### Get a particular message
GET http://localhost:3000/messages/123
```

### Using a Global Pipe

1. Include ValidationPipe from @nest/common in main.ts
   - Install some npm packages that are missing
   ```Shell
   npm install --save class-validator class-transformer
   ```
2. Tell Nest to use global validation
3. Create a class that describes the different properties that the request body should have or a DTO (Data Transfer Object)
4. Add validation rules to the class
5. Apply that class to the request handler

## DTOs - Data Transfer Object

- The goal is to carry information/data between two places, frequently as a network request
- Usually do not have any kind of functionality tied to them
- Are simple classes that list out a couple of different properties
- A very clear description of what some form of data looks like

## HTTP Request and Nest Decorators

1. Start line -
   - POST /messages/5?validate=true HTTP/1.1
     - @Param('id) -> To extract a parameter or a wildcard, it will be equivalent to the wildcard you have setted on the Decorator of the route, example: @Get('/:id') -> @Param(id)
     - @Query() -> To extract the query being made
2. Headers
   - Host: localhost:300
   - Content-Type: application/json
     @Headers()
3. Body
   - {"content": "Well, hello there"}
     - @Body()

## Services x Repositories

| Services                                            | Repositories                                                          |
| --------------------------------------------------- | --------------------------------------------------------------------- |
| Its a class                                         | Its a class                                                           |
| #1 place to put any business logic                  | #1 place to put storage-related logic                                 |
| Uses one or more repositories to find or store data | Usually ends up bein a TypeORM entity, a mongoose schema, or similiar |

**Frequently end up having very similiar method names!**

| MessagesService        | MessageRepository       |
| ---------------------- | ----------------------- |
| findOne(id:string)     | findOne(id:string)      |
| findAll()              | findAll()               |
| create(message:string) | create(message: string) |

They look identical but it can help you if we need to change the database, or access many types of data

# Dependecy injections

## Inversion of Control Principle

Classes should not create instances of its own dependecies on its own

- Bad: creates its own dependecy
- Better: Receives its dependency
- Good: Create a interface and recieve an object that satisfies the interface

### Why the 'Good' case is good

- In Production
  - Will need to write to the disk, so can be a little slower
- While Testing...
  - We can create a Fake repository to run faster

### Some issues with Inverion of Controle

We need to write lots of codes to just start a single controller, as the application becomes more complex, inversion of control may be too complex. So we can user Dependency Injection

## Dependency Injection

Nest DI Container/Injector

1. List of classes and their dependencies
2. List of instances that I have created

### Nest DI Container Flow

1. At startup, register all classes with the container
2. Container will figure out what each dependency each class has
3. We then ask the container to create an instance of a class for us
4. Container creates all required dependencies and gives us the instance
5. Container will hold onto the created dependency instances and reuse them if needed

In order to use DI, we need to:

- Use the '@Injectable' decorator on each class;
- add them to the modules list of providers;
- Nest will then try to, automatically, create controller instances for us

**When using Dependency Injection, it will create only one instance and pass it around the system**

## DI inside of a single module

"PowerModule" => PowerService -> Regulator Service

1. Add the '@injectable()' decorator to powerServices
2. Add the PowerService to the PowerModule's list of providers
3. Define the constructor method on RegulatorService and add 'PowerService' to it

## DI berween Modules

"PowerModule" -> "CPUModule"

1. Add PowerService to the PowerModule's list of 'exports'
2. Import the PowerModule into s the CPUModule list of 'imports'
3. Define the constructor method on CPUService and add 'PowerService' to it
