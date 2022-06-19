import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as db from '../database/connection.js';
import dotenv from 'dotenv';
dotenv.config();

export async function getAllUsers() {
	const users = await db.default.select('*').from('users');
	return users;
}

export async function addUser(name, email, password, role) {
	const matchUser = await db.default.select('*').from('users').where({ email: email });

	if (matchUser.length > 0) {
		return `Usuário de email ${email} já existe no sistema.`;
	}

	const hashPass = await bcrypt.hash(password, 10);

	const newUser = {
		name: name,
		email: email,
		password: hashPass,
		role: role
	}

	await db.default('users').insert(newUser);

	return newUser;
}

export async function editUser(id, fields) {
	const matchUser = await db.default('users').where({ id: id });
	let newPass;

	if (matchUser.length < 0) {
		return `Usuário não encontrado.`;
	}

	if (fields.password != null) {
		newPass = await bcrypt.hash(fields.password, 10);
	}

	const user = matchUser[0];

	const newUser = {
		name: fields.name ? fields.name : user.name,
		email: fields.email ? fields.email : user.email,
		password: fields.password ? newPass : user.password,
		role: fields.role ? newPass : user.role
	}

	await db.default('users').where({ id: id }).update(newUser);

	return newUser;
}

export async function deleteUser(id) {
	await db.default('users').where({ id: id }).del();
}