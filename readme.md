# 🐛 Bug Tracker

A bug tracker to help my development process.

## Get Started

1. Clone or download this repository

2. Access folders ./server and ./web

3. Install dependencies on both folders

 ```console
 yarn install
 or
 npm install
 ```

### Server

1. Create a Postgres database

2. Create tables following [this file](https://github.com/akadot/bug-tracker/blob/master/server/src/database/schema.sql)

3. Create a .env file with this infos

```.env
PORT = (server port)
DB_HOST = (postgres host)
DB_PORT = (postgres port)
DB_USER = (postgres user)
DB_PASS = (postgres password)
DB_DATABASE = (postgres database name)
TOKEN_SECRET = (generate random characters to your token secret)
```

4. Start server

```console
yarn dev
or
npm run dev
```

5. Access routes following [this structure](https://github.com/akadot/bug-tracker/blob/master/server/planing.md)

### Web

Coming soon...
