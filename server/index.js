import express from 'express';
import dotenv from 'dotenv';

// Routes
import ticketsRouter from './src/routes/ticketsRouter.js';
import usersRouter from './src/routes/usersRouter.js';

import connection from './src/database/connection.js';

dotenv.config();
const app = express();

app.use(express.json());
app.set('db', connection);

//Middleware Routes
app.use('/tickets', ticketsRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listen on port ${process.env.PORT}.`);
})