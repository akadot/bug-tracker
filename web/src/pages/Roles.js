
import { useEffect, useState } from 'react';
import axios from 'axios'
import Content from '../components/Content.js';
import GenericItem from '../components/Generic.js';

const Roles = () => {
	const [roles, setRoles] = useState([]);

	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getRoles() {
			await axios.get(`http://localhost:8080/roles`, { headers: { 'authorization': token } })
				.then((success) => {
					const roles = success.data.data;
					setRoles(roles)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		})()
	}, [token, userId, role]);

	async function deleteRoles(title) {
		await axios.delete(`http://localhost:8080/roles/${title}`, { headers: { 'authorization': token } })
			.then(() => {
				const newList = roles.filter(item => item.title !== title);
				setRoles(newList);
			}).catch(err => {
				console.error(err)
				window.alert(err.response.data.error)
			})
	}

	return (
		<Content>
			<ul style={{ display: "flex" }}>
				{
					roles.map(item => {
						return (
							<GenericItem key={item.title} title={item.title} description={item.description} onDelete={() => deleteRoles(item.title)} />

						)
					})
				}
			</ul>
		</Content>
	)
}

export default Roles;