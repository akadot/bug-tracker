import * as db from '../database/connection.js';

export async function getAllRoles() {
	const roles = await db.default.select('*').from('roles');
	return roles;
}

export async function addRole(title, description) {
	const matchRole = await db.default('roles').where({ title: title });

	if (matchRole.length > 0) {
		return null;
	}


	const newRole = {
		title: title,
		description: description,
	}

	await db.default('roles').insert(newRole);

	return newRole;
}

export async function editRole(title, fields) {
	const matchRole = await db.default('roles').where({ title: title });

	if (matchRole.length <= 0) {
		return null;
	}

	const role = matchRole[0];

	const newRole = {
		title: fields.title ? fields.title : role.title,
		description: fields.description ? fields.description : role.description
	};

	await db.default('roles').where({ title: title }).update(newRole);

	return newRole;
}

export async function deleteRole(title) {
	const matchRole = await db.default('roles').where({ title: title });

	if (matchRole.length <= 0) {
		return null;
	}

	await db.default('roles').where({ title: title }).del();
	return 'success';
}