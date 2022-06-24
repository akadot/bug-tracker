
import { useEffect, useState } from 'react';
import axios from 'axios'
import Content from '../components/Content.js';
import GenericItem from '../components/Generic.js';

const Categories = () => {
	const [cat, setCat] = useState([]);

	const userId = localStorage.getItem("user_id");
	const role = localStorage.getItem("user_role");
	const token = localStorage.getItem("api_token");

	useEffect(() => {
		(async function getTickets() {
			await axios.get(`http://localhost:8080/categories`, { headers: { 'authorization': token } })
				.then((success) => {
					const cat = success.data.data;
					setCat(cat)
				}).catch(err => {
					console.error(err)
					window.alert(err.response.data.error)
				})
		})()
	}, [token, userId, role]);

	async function deleteTicket(title) {
		await axios.delete(`http://localhost:8080/categories/${title}`, { headers: { 'authorization': token } })
			.then(() => {
				const newList = cat.filter(item => item.title !== title);
				setCat(newList);
			}).catch(err => {
				console.error(err)
				window.alert(err.response.data.error)
			})
	}

	return (
		<Content>
			<ul style={{ display: "flex" }}>
				{
					cat.map(item => {
						return (
							<GenericItem key={item.title} title={item.title} description={item.description} onDelete={() => deleteTicket(item.title)} />

						)
					})
				}
			</ul>
		</Content>
	)
}

export default Categories;