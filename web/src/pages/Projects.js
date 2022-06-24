
import { useEffect, useState } from 'react';
import axios from 'axios'
import Content from '../components/Content.js';
import GenericItem from '../components/Generic.js';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getTickets() {
			await axios.get(`http://localhost:8080/projects`, { headers: { 'authorization': token } })
				.then((success) => {
					const projects = success.data.data;
					setProjects(projects)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		})()
	}, [token, userId, role]);

	async function deleteTicket(id) {
		await axios.delete(`http://localhost:8080/projects/${id}`, { headers: { 'authorization': token } })
			.then(() => {
				const newList = projects.filter(item => item.id !== id);
				setProjects(newList);
			}).catch(err => {
				console.error(err)
				window.alert(err.response.data.error)
			})
	}

	return (
		<Content>
			<ul style={{ display: "flex" }}>
				{
					projects.map(item => {
						return (
							<GenericItem key={item.id} title={item.name} description={item.description} onDelete={() => deleteTicket(item.id)} />

						)
					})
				}
			</ul>
		</Content>
	)
}

export default Projects;