# Project Structure

## Routes

### Auth

- POST /auth/login             -> 200 OK, JWT

### Tickets

- GET /tickets                  -> 200 OK, Array<Ticket>
- GET /tickets/:id              -> 200 OK, Ticket
- GET /tickets?shortBy=date     -> 200 OK, Array<Ticket>
- GET /tickets?filter=open      -> 200 OK, Array<Ticket>

- POST /tickets                 -> 201 Created, Ticket
- PUT /tickets/:id              -> 201 Created, Ticket
- DELETE /tickets/:id           -> 200 OK, String

### Users

- GET /users                    -> 200 OK, Array<User>
- GET /users/:id                -> 200 OK, User
- POST /users                   -> 201 Created, User
- PUT /users/:id                -> 201 Created, User
- DELETE /users/:id             -> 200 OK, String

### Projects

- GET /projects                 -> 200 OK, Array<Project>
- POST /projects                -> 201 Created, Project
- PUT /projects/:id             -> 201 Created, Project
- DELETE /projects/:id          -> 200 OK, String

### Roles

- GET /roles                 -> 200 OK, Array<Role>
- POST /roles                -> 201 Created, Role
- PUT /roles/:title             -> 201 Created, Role
- DELETE /roles/:title          -> 200 OK, String

### Status

- GET /status                 -> 200 OK, Array<Status>
- POST /status                -> 201 Created, Status
- PUT /status/:title             -> 201 Created, Status
- DELETE /status/:title          -> 200 OK, String

### Categories

- GET /categories                 -> 200 OK, Array<Category>
- POST /categories                -> 201 Created, Category
- PUT /categories/:title             -> 201 Created, Category
- DELETE /categories/:title          -> 200 OK, String
