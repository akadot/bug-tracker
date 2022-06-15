import express from 'express';
import ticketsRouter from './src/routes/ticketsRouter.js'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.json());

//Middleware Routes
app.use('/tickets', ticketsRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listen on port ${process.env.PORT}.`)
})