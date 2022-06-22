import * as db from '../database/connection.js';

export async function getAllProjects() {
	const projects = await db.default.select('*').from('projects');
	return projects;
}

export async function addProject(name, description) {

	const newProject = {
		name: name,
		description: description,
	}

	await db.default('projects').insert(newProject);

	return newProject;
}

export async function editProject(id, fields) {
	const matchProject = await db.default('projects').where({ id: id });

	if (matchProject.length <= 0) {
		return null;
	}

	const project = matchProject[0];

	const newProject = {
		name: fields.name ? fields.name : project.name,
		description: fields.description ? fields.description : project.description
	};

	await db.default('projects').where({ id: id }).update(newProject);

	return newProject;
}

export async function deleteProject(id) {
	const matchProject = await db.default('projects').where({ id: id });

	if (matchProject.length <= 0) {
		return null;
	}

	await db.default('projects').where({ id: id }).del();
}