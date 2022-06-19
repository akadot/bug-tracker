import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const connection = knex({
	client: 'pg',
	connection: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATABASE
	}
});

export default connection;