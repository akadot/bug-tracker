import * as UserModel from '../models/UsersModel.js'

export async function index(req, res) {
	const users = await UserModel.getAllUsers();
	res.status(200).send({ data: users });
	res.end();
}

export async function show(req, res) {
	const { id } = req.params;

	if (!id) {
		res.status(400).send({ error: 'ERRO: ID não recebido.' });
		res.end();
		return;
	}

	const user = await UserModel.getUserById(id);
	res.status(200).send({ data: user });
	res.end();
}

export async function store(req, res) {
	const { name, email, password, role } = req.body;

	if (!name || !email || !password || !role) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const newUser = await UserModel.addUser(name, email, password, role);

	if (newUser == 'errorUser') {
		res.status(404).send({ error: `Usuário não encontrado.` }).end();
		return;
	} else if (newUser == 'errorRole') {
		res.status(404).send({ error: `A role ${role} não existe no sistema.` }).end();
		return;
	}


	res.status(201).send({ data: newUser });
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

	const editedUser = await UserModel.editUser(id, fields);

	if (editedUser == 'errorUser') {
		res.status(404).send({ error: `Usuário não encontrado.` }).end();
		return;
	} else if (editedUser == 'errorRole') {
		res.status(404).send({ error: `A role ${role} não existe no sistema.` }).end();
		return;
	}

	res.status(201).send({ data: editedUser });
	res.end();
}

export async function remove(req, res) {
	const { id } = req.params;

	if (!id) {
		res.status(400).send({ error: 'ERRO: ID não recebido.' });
		res.end();
		return;
	}

	const removedUser = await UserModel.deleteUser(id);

	if (removedUser == null) {
		res.status(404).send({ error: `Usuário não encontrado.` }).end();
		return;
	}

	res.status(200).send({ data: `Usuário de ID ${id} deletado.` });
	res.end();
}