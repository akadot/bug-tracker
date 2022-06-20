# Project Structure

## Routes

### Bug Tickets

- GET /tickets                  -> 200 OK, Array<Ticket>
- GET /tickets/:id              -> 200 OK, Ticket
- GET /tickets?shortBy=date     -> 200 OK, Array<Ticket>
- GET /tickets?filter=open      -> 200 OK, Array<Ticket>

- POST /tickets                 -> 201 Created, Ticket
- PUT /tickets/:id              -> 201 Created, Ticket
- DELETE /tickets/:id           -> 200 OK, String

### Users

- GET /users                    -> 200 OK, Array<User> - Done
- POST /users                   -> 201 Created, User - Done
- PUT /users/:id                -> 201 Created, User - Done
- DELETE /users/:id             -> 200 OK, String - Done

### Projects

- GET /projects                 -> 200 OK, Array<Project>
- POST /projects                -> 201 Created, Project
- PUT /projects/:id             -> 201 Created, Project
- DELETE /projects/:id          -> 200 OK, String

### Roles

- GET /roles                 -> 200 OK, Array<Role> - Done
- POST /roles                -> 201 Created, Role - Done
- PUT /roles/:id             -> 201 Created, Role - Done
- DELETE /roles/:id          -> 200 OK, String - Done

### Status

- GET /status                 -> 200 OK, Array<Status>
- POST /status                -> 201 Created, Status
- PUT /status/:id             -> 201 Created, Status
- DELETE /status/:id          -> 200 OK, String

### Categories

- GET /categories                 -> 200 OK, Array<Category>
- POST /categories                -> 201 Created, Category
- PUT /categories/:id             -> 201 Created, Category
- DELETE /categories/:id          -> 200 OK, String
