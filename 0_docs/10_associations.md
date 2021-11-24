# Associations or Relations

## Step-by-step

1. Figure out what kind of association we are modeling
2. Add the appropriate decorators to our related entities
3. Associate the records when one is created
4. Apply a serializer to limit info shared

## Types of association

### One-to-One Relationship

There can be only one relationship between those "entities"
Example:

- Capitol <-> Country
- CPF <-> Person

### One-to-Many or Many-to-One Relationship

One "entity" can have many others "entities"
Example:

- Country <-> Cities
- Car <-> Parts
- Orders <-> Costumers

### Many-to-Many Relationship

Example:

- Classes <-> Students
- Trains <-> Riders

## Decorators

@OneToMany()
Does not change the table

@ManyToOne()
Does changes on the table