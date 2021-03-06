import * as StatusModel from '../models/StatusModel.js'

export async function index(req, res) {
	const status = await StatusModel.getAllStatus();

	res.status(200).send({ data: status });
	res.end();
}

export async function store(req, res) {
	const { title, description } = req.body;

	if (!title || !description) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const newRole = await StatusModel.addStatus(title, description);

	if (newRole == null) {
		res.status(409).send({ error: `Status ${title} já existe no sistema.` }).end();
		return;
	}

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

	const editedRole = await StatusModel.editStatus(title, fields);

	if (editedRole == null) {
		res.status(404).send(`Status não encontrado.`).end();
		return;
	}

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

	const removedStatus = await StatusModel.deleteStatus(title);

	if (removedStatus == null) {
		res.status(404).send(`Status não encontrado.`).end();
		return;
	}

	res.status(200).send({ data: `Status ${title} deletada.` });
	res.end();

}