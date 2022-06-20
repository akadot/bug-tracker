import * as db from '../database/connection.js';

export async function getAllStatus() {
	const status = await db.default.select('*').from('status');
	return status;
}

export async function addStatus(title, description) {
	const matchStatus = await db.default('status').where({ title: title });

	if (matchStatus.length > 0) {
		return `Status ${title} já existe no sistema.`;
	}


	const newStatus = {
		title: title,
		description: description,
	}

	await db.default('status').insert(newStatus);

	return newStatus;
}

export async function editStatus(title, fields) {
	const matchStatus = await db.default('status').where({ title: title });

	if (matchStatus.length <= 0) {
		return `Status não encontrado.`;
	}

	const status = matchRole[0];

	const newStatus = {
		title: fields.title ? fields.title : status.title,
		description: fields.description ? fields.description : status.description
	};

	await db.default('status').where({ title: title }).update(newStatus);

	return newStatus;
}

export async function deleteStatus(title) {
	const matchStatus = await db.default('status').where({ title: title });

	if (matchStatus.length <= 0) {
		return `Status não encontrado.`;
	}

	await db.default('status').where({ title: title }).del();
}