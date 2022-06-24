# 🐛 Bug Tracker

A bug tracker to help my development process.

## Get Started

- Clone or download this repository

- Access folders ./server and ./web

- Install dependencies on both folders

 ```console
 yarn install
 or
 npm install
 ```

### 🌐 Server

- Create a Postgres database

- Create tables following [this file](https://github.com/akadot/bug-tracker/blob/master/server/src/database/schema.sql)

- Create a .env file with this infos

```.env
PORT = (server port)
DB_HOST = (postgres host)
DB_PORT = (postgres port)
DB_USER = (postgres user)
DB_PASS = (postgres password)
DB_DATABASE = (postgres database name)
TOKEN_SECRET = (generate random characters to your token secret)
```

- Start server

```console
yarn dev
or
npm run dev
```

- Access routes following [this structure](https://github.com/akadot/bug-tracker/blob/master/server/planing.md)

</br>

### 💻 Web

- Start react development server

```console
yarn start
or
npm run start
```

- Access *localhost:3000* to be redirected to Login page

- Every user created in *Register* page, will recieve an "normal user" role. To change this, make an admin in the database before.
