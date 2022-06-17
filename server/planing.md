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

- GET /users                    -> 200 OK, Array<User>
- POST /users                   -> 201 Created, User
- PUT /users/:id                -> 201 Created, User
- DELETE /users/:id             -> 200 OK, String

### Projects

- GET /projects                 -> 200 OK, Array<Project>
- POST /projects                -> 201 Created, Project
- PUT /projects/:id             -> 201 Created, Project
- DELETE /projects/:id          -> 200 OK, String

## Schemas

- User:
  - name (string);
  - email (string);
  - password (hash);
  - role (user || admin).

- Project:
  - name (string);
  - description (string);
  - team (users[]);
  - issues (issue[]).

- Issue:
  - title (string);
  - description (string);
  - type (bug || suggestion || obs || ...);
  - created_by (user.id)
  - created_at (timestamp);
  - edited_at (timestamp).
