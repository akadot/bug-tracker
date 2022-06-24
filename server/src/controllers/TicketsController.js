import * as TicketsModel from '../models/TicketsModel.js';
import * as UsersModel from '../models/UsersModel.js';
import * as ProjectsModel from '../models/ProjectsModel.js';

export async function index(req, res) {
	const tickets = await TicketsModel.getAllTickets();
	const users = await UsersModel.getAllUsers();
	const projects = await ProjectsModel.getAllProjects();

	tickets.forEach(ticket => {
		let matchUser = users.filter(item => item.id == ticket['created_by']);
		let matchProj = projects.filter(item => item.id == ticket['project_id']);
		let username = matchUser[0]['name']
		let projname = matchProj[0]['name']


		ticket.created_by = username
		ticket.project_id = projname
	});


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

	if (newTicket == 'errorUser') {
		res.status(404).send({ error: `Usuário ${created_by} não encontrado.` }).end();
		return;
	} else if (newTicket == 'errorProject') {
		res.status(404).send({ error: `Projeto ${project_id} não encontrado.` }).end();
		return;
	} else if (newTicket == 'errorCat') {
		res.status(404).send({ error: `Categoria ${category} não encontrado.` }).end();
		return;
	}


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

	if (editedTicket == null) {
		res.status(404).send({ error: `Ticket não encontrado.` }).end();
		return;
	}

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

	const removedTicket = await TicketsModel.deleteTicket(id);

	if (removedTicket == null) {
		res.status(404).send({ error: `Ticket não encontrado.` }).end();
		return;
	}


	res.status(200).send({ data: `Ticket de ID ${id} deletado.` });
	res.end();
}