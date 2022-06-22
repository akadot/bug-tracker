import * as ProjectsModel from '../models/ProjectsModel.js'

export async function index(req, res) {
	const projects = await ProjectsModel.getAllProjects();

	res.status(200).send({ data: projects });
	res.end();
}

export async function store(req, res) {
	const { name, description } = req.body;

	if (!name || !description) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const newProject = await ProjectsModel.addProject(name, description);

	res.status(201).send({ data: newProject });
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

	const editedProject = await ProjectsModel.editProject(id, fields);

	if (editedProject == null) {
		res.status(404).send({ error: `Projeto não encontrado.` }).end();
		return;
	}

	res.status(201).send({ data: editedProject });
	res.end();
}

export async function remove(req, res) {
	const { id } = req.params;

	if (!id) {
		res.status(400).send({ error: 'ERRO: ID não recebido.' });
		res.end();
		return;
	}

	const removedProject = await ProjectsModel.deleteProject(id);

	if (removedProject == null) {
		res.status(404).send({ error: `Projeto não encontrado.` }).end();
		return;
	}

	res.status(200).send({ data: `Projeto de ID ${id} deletado.` });
	res.end();

}