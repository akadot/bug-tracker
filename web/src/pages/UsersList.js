
import { useEffect, useState } from 'react';
import axios from 'axios'
import Content from '../components/Content.js';
import UserItem from '../components/UserItem.js';

const Users = () => {
	const [users, setUsers] = useState([]);

	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getTickets() {
			await axios.get(`http://localhost:8080/users`, { headers: { 'authorization': token } })
				.then((success) => {
					const allusers = success.data.data;
					const users = allusers.filter(user => user.id !== userId);
					setUsers(users)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		})()
	}, [token, userId, role]);

	async function deleteTicket(id) {
		await axios.delete(`http://localhost:8080/users/${id}`, { headers: { 'authorization': token } })
			.then(() => {
				const newList = users.filter(item => item.id !== id);
				setUsers(newList);
			}).catch(err => {
				console.error(err)
				window.alert(err.response.data.error)
			})
	}

	return (
		<Content>
			<ul>
				{
					users.map(item => {
						return (
							<UserItem key={item.id} name={item.name} email={item.email} role={item.role} onDelete={() => deleteTicket(item.id)} />

						)
					})
				}
			</ul>
		</Content>
	)
}

export default Users;