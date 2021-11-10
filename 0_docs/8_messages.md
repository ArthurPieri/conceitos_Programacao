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
