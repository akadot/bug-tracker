import * as db from '../database/connection.js';

export async function getAllTickets() {
	const tickets = await db.default('tickets');
	return tickets;
}

export async function addTicket(title, description, category, created_by, project_id) {
	const matchUser = await db.default('users').where({ id: created_by });
	const matchProject = await db.default('projects').where({ id: project_id });
	const matchCategory = await db.default('categories').where({ title: category });

	if (matchUser.length <= 0) {
		return `Usuário ${created_by} não encontrado.`;
	}

	if (matchProject.length <= 0) {
		return `Projeto ${project_id} não encontrado.`;
	}

	if (matchCategory.length <= 0) {
		return `Categoria ${category} não encontrado.`;
	}

	const date = new Date();
	const now = date.toISOString();

	const newTicket = {
		title: title,
		description: description,
		category: category,
		status: "Enviado",
		created_by: created_by,
		project_id: project_id,
		created_at: now,
		edited_at: now
	}

	await db.default('tickets').insert(newTicket);

	return newTicket;
}

export async function editTicket(id, fields) {
	const matchTicket = await db.default('tickets').where({ id: id });

	if (matchTicket.length <= 0) {
		return `Ticket de ID ${id} não encontrado no sistema.`;
	}

	const ticket = matchTicket[0];

	const now = new Date().toISOString()

	const editedTicket = {
		title: fields.title ? fields.title : ticket.title,
		description: fields.description ? fields.description : ticket.description,
		category: fields.category ? fields.category : ticket.category,
		status: fields.status ? fields.status : ticket.status,
		created_by: ticket.created_by,
		project_id: ticket.project_id,
		created_at: ticket.created_at,
		edited_at: now
	}

	await db.default('tickets').where({ id: id }).update(editedTicket);

	return editedTicket;
}

export async function deleteTicket(id) {
	const matchTicket = await db.default('tickets').where({ id: id });

	if (matchTicket.length <= 0) {
		return `Ticket não encontrado.`;
	}

	await db.default('tickets').where({ id: id }).del();
}