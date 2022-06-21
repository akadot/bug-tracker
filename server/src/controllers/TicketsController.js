import * as TicketsModel from '../models/TicketsModel.js';

export async function index(req, res) {
	const tickets = await TicketsModel.getAllTickets();
	res.status(200).send({ data: tickets });
	res.end();
	return;
}

export async function store(req, res) {
	const { title, description, category, created_by, project_id } = req.body;

	if (!title || !description || !category || !created_by || !project_id) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const newTicket = await TicketsModel.addTicket(title, description, category, created_by, project_id);
	res.status(201).send({ data: newTicket });
	res.end();
}

export async function update(req, res) {
	const { id } = req.params;
	const fields = req.body;

	if (!id) {
		res.status(400).send({ error: 'ERRO: ID não recebido.' });
		res.end();
		return;
	}

	const editedTicket = await TicketsModel.editTicket(id, fields);
	res.status(201).send({ data: editedTicket });
	res.end();
}

export async function remove(req, res) {
	const { id } = req.params;

	if (!id) {
		res.status(400).send({ error: 'ERRO: ID não recebido.' });
		res.end();
		return;
	}

	await TicketsModel.deleteTicket(id);
	res.status(200).send({ data: `Ticket de ID ${id} deletado.` });
	res.end();
}