import * as CategoriesModel from '../models/CategoriesModel.js'

export async function index(req, res) {
	const category = await CategoriesModel.getAllCategories();

	res.status(200).send({ data: category });
	res.end();
}

export async function store(req, res) {
	const { title, description } = req.body;

	if (!title || !description) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const newCategory = await CategoriesModel.addCategory(title, description);

	if (newCategory == null) {
		res.status(409).send({ error: `Categoria ${title} já existe no sistema.` }).end();
		return;
	}

	res.status(201).send({ data: newCategory });
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

	const editedCategory = await CategoriesModel.editCategory(title, fields);

	if (editedCategory == null) {
		res.status(404).send({ error: `Categoria não encontrada.` }).end();
		return;
	}

	res.status(201).send({ data: editedCategory });
	res.end();
}

export async function remove(req, res) {
	const { title } = req.params;

	if (!title) {
		res.status(400).send({ error: 'ERRO: TITLE não recebido.' });
		res.end();
		return;
	}

	const removedCategory = await CategoriesModel.deleteCategory(title);

	if (editedCategory == null) {
		res.status(404).send({ error: `Categoria não encontrada.` }).end();
		return;
	}

	res.status(200).send({ data: `Categoria ${title} deletada.` });
	res.end();

}