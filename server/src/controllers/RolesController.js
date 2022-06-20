import * as RolesModel from '../models/RolesModel.js'

export async function index(req, res) {
	const roles = await RolesModel.getAllRoles();

	res.status(200).send({ data: roles });
	res.end();
}

export async function store(req, res) {
	const { title, description } = req.body;

	if (!title || !description) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const newRole = await RolesModel.addRole(title, description);
	res.status(201).send({ data: newRole });
	res.end();
}

export async function update(req, res) {
	const { title } = req.params;
	const fields = req.body;

	if (!title) {
		res.status(400).send({ error: 'ERRO: TITLE não recebido.' });
		res.end();
		return;
	}

	const editedRole = await RolesModel.editRole(title, fields);
	res.status(201).send({ data: editedRole });
	res.end();
}

export async function remove(req, res) {
	const { title } = req.params;

	if (!title) {
		res.status(400).send({ error: 'ERRO: TITLE não recebido.' });
		res.end();
		return;
	}

	await RolesModel.deleteRole(title);
	res.status(200).send({ data: `Role ${title} deletada.` });
	res.end();

}