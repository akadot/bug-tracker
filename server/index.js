import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Routes
import authRouter from './src/routes/authRouter.js';
import usersRouter from './src/routes/usersRouter.js';
import projectsRouter from './src/routes/projectsRouter.js'
import rolesRouter from './src/routes/rolesRouter.js'
import statusRouter from './src/routes/statusRouter.js'
import categoriesRouter from './src/routes/categoriesRouter.js'
import ticketsRouter from './src/routes/ticketsRouter.js';

//Utils/Functions
import connection from './src/database/connection.js';
import CheckJWT from './src/Utils/CheckJWT.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.set('db', connection);

//Middleware Routes
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/projects', CheckJWT, projectsRouter);
app.use('/roles', CheckJWT, rolesRouter);
app.use('/status', CheckJWT, statusRouter);
app.use('/categories', CheckJWT, categoriesRouter);
app.use('/tickets', CheckJWT, ticketsRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listen on port ${process.env.PORT}.`);
})