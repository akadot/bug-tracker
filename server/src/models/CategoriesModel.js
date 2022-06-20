import * as db from '../database/connection.js';

export async function getAllCategories() {
	const categories = await db.default.select('*').from('categories');
	return categories;
}

export async function addCategory(title, description) {
	const matchCategory = await db.default('categories').where({ title: title });

	if (matchCategory.length > 0) {
		return `Categoria ${title} já existe no sistema.`;
	}


	const newCategory = {
		title: title,
		description: description,
	}

	await db.default('categories').insert(newCategory);

	return newCategory;
}

export async function editCategory(title, fields) {
	const matchCategory = await db.default('categories').where({ title: title });

	if (matchCategory.length <= 0) {
		return `Categoria não encontrada.`;
	}

	const category = matchCategory[0];

	const newCategory = {
		title: fields.title ? fields.title : category.title,
		description: fields.description ? fields.description : category.description
	};

	await db.default('categories').where({ title: title }).update(newCategory);

	return newCategory;
}

export async function deleteCategory(title) {
	const matchCategory = await db.default('categories').where({ title: title });

	if (matchCategory.length <= 0) {
		return `Categoria não encontrada.`;
	}

	await db.default('categories').where({ title: title }).del();
}