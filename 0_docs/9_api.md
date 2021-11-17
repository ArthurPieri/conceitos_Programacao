# starting the 'big project' from course

## List of HTTP methods

| HTTP Method | Route        | Body or Query String                                     | Description                                    |
| ----------- | ------------ | -------------------------------------------------------- | ---------------------------------------------- |
| POST        | /auth/signup | Body - {email, password}                                 | Create a new user and sign in                  |
| POST        | /auth/signin | Body - {email, password}                                 | sign in as an existing user                    |
| GET         | /reports     | QS - make, model, year, mileage, longitude, latitude     | Get an estimate for the cars value             |
| POST        | /reports     | Body - {make, model, year, mileage, longitude, latitude} | Report how much a vehicle sold for             |
| PATCH       | /reports/:id | Body - {approved}                                        | Approve or reject a report submitted by a user |

# Creating an Entity

1. Create an entity file, and create a class in it that lists all the properties that your entity will have
2. Connect the entity to its parent module. This creates a repository
3. Connect the entity to the root connection (in app module)

By convention, the class that will describe the entity does not need to be called ClassEntity, just the name of the 'thing'.

For instance: The class that describes the User entity does not need to be called UserEntity, just User

# Create User Flow

1. Request
2. ValidationPipe <- CreateUserDTO
3. UsersController -> Defines routes + picks interesting data from incoming request
4. UsersService -> Contains our real app
   - User Entity -> Defines what a user is
5. UsersRepository -> Created by TypeORM interface to the DB
   - User Entity
6. SQLIte DB
