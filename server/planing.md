# Routes Structure

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

- POST /users                   -> 201 Created, User
- PUT /users/:id                -> 201 Created, User
- DELETE /users/:id             -> 200 OK, String
