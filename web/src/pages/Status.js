
import { useEffect, useState } from 'react';
import axios from 'axios'
import Content from '../components/Content.js';
import GenericItem from '../components/Generic.js';

const Status = () => {
	const [status, setStatus] = useState([]);

	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getTickets() {
			await axios.get(`http://localhost:8080/status`, { headers: { 'authorization': token } })
				.then((success) => {
					const status = success.data.data;
					setStatus(status)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		})()
	}, [token, userId, role]);

	async function deleteTicket(title) {
		await axios.delete(`http://localhost:8080/status/${title}`, { headers: { 'authorization': token } })
			.then(() => {
				const newList = status.filter(item => item.title !== title);
				setStatus(newList);
			}).catch(err => {
				console.error(err)
				window.alert(err.response.data.error)
			})
	}

	return (
		<Content>
			<ul style={{ display: "flex" }}>
				{
					status.map(item => {
						return (
							<GenericItem key={item.title} title={item.title} description={item.description} onDelete={() => deleteTicket(item.title)} />

						)
					})
				}
			</ul>
		</Content>
	)
}

export default Status;