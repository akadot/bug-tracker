import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as db from '../database/connection.js';

dotenv.config();

export async function getAllUsers() {
	const users = await db.default.select('*').from('users');
	return users;
}

export async function getUserById(id) {
	const user = await db.default('users').where({ id: id });

	if (user.length <= 0) {
		return `Usuário de ID ${id} não existe no sistema.`
	}

	return user;
}

export async function addUser(name, email, password, role) {
	const matchUser = await db.default('users').where({ email: email });
	const matchRole = await db.default('roles').where({ title: role });

	if (matchUser.length > 0) {
		return `Usuário de email ${email} já existe no sistema.`;
	}

	if (matchRole.length == 0 || matchRole == undefined) {
		return `A role ${role} não existe no sistema.`
	}

	const hashPass = await bcrypt.hash(password, 10);

	const newUser = {
		name: name,
		email: email,
		password: hashPass,
		role: matchRole[0].title
	}

	await db.default('users').insert(newUser);

	return newUser;
}

export async function editUser(id, fields) {
	const matchUser = await db.default('users').where({ id: id });
	let newPass;
	let newRole;

	if (matchUser.length <= 0) {
		return `Usuário não encontrado.`;
	}

	if (fields.password != null) {
		newPass = await bcrypt.hash(fields.password, 10);
	}

	if (fields.role != null) {
		let matchRole = await db.default('roles').where({ title: fields.role });
		if (matchRole.length == 0 || matchRole == undefined) {
			return `A role ${fields.role} não existe no sistema.`
		}

		newRole = matchRole[0].title
	}

	const user = matchUser[0];

	const newUser = {
		name: fields.name ? fields.name : user.name,
		email: fields.email ? fields.email : user.email,
		password: fields.password ? newPass : user.password,
		role: fields.role ? newRole : user.role
	}

	await db.default('users').where({ id: id }).update(newUser);

	return newUser;
}

export async function deleteUser(id) {
	const matchUser = await db.default('users').where({ id: id });

	if (matchUser.length <= 0) {
		return `Usuário não encontrado.`;
	}

	await db.default('users').where({ id: id }).del();
}