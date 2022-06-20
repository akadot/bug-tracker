import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

// Routes
import ticketsRouter from './src/routes/ticketsRouter.js';
import usersRouter from './src/routes/usersRouter.js';
import projectsRouter from './src/routes/projectsRouter.js'
import rolesRouter from './src/routes/rolesRouter.js'
import statusRouter from './src/routes/statusRouter.js'
import categoriesRouter from './src/routes/categoriesRouter.js'

import connection from './src/database/connection.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.set('db', connection);

//Middleware Routes
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/tickets', ticketsRouter);
app.use('/roles', rolesRouter);
app.use('/status', statusRouter);
app.use('/categories', categoriesRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listen on port ${process.env.PORT}.`);
})